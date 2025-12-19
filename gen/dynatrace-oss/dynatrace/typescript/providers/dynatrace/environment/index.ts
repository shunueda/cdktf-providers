// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * Indicates whether the environment is enabled or disabled. Possible values are `ENABLED` and `DISABLED`. The default value is ENABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#state Environment#state}
  */
  readonly state: string;
  /**
  * A set of tags that are assigned to this environment. Every tag can have a maximum length of 100 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#tags Environment#tags}
  */
  readonly tags?: string[];
  /**
  * Specifies whether the environment is a trial environment or a non-trial environment. Creating a trial environment is only possible if your license allows that. The default value is false (non-trial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#trial Environment#trial}
  */
  readonly trial?: boolean | cdktf.IResolvable;
  /**
  * quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#quotas Environment#quotas}
  */
  readonly quotas?: EnvironmentQuotas;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#storage Environment#storage}
  */
  readonly storage: EnvironmentStorage;
}
export interface EnvironmentQuotasDdus {
  /**
  * Annual environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#annual Environment#annual}
  */
  readonly annual?: number;
  /**
  * Monthly environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#monthly Environment#monthly}
  */
  readonly monthly?: number;
}

export function environmentQuotasDdusToTerraform(struct?: EnvironmentQuotasDdusOutputReference | EnvironmentQuotasDdus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annual: cdktf.numberToTerraform(struct!.annual),
    monthly: cdktf.numberToTerraform(struct!.monthly),
  }
}


export function environmentQuotasDdusToHclTerraform(struct?: EnvironmentQuotasDdusOutputReference | EnvironmentQuotasDdus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annual: {
      value: cdktf.numberToHclTerraform(struct!.annual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthly: {
      value: cdktf.numberToHclTerraform(struct!.monthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentQuotasDdusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentQuotasDdus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annual !== undefined) {
      hasAnyValues = true;
      internalValueResult.annual = this._annual;
    }
    if (this._monthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentQuotasDdus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annual = undefined;
      this._monthly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annual = value.annual;
      this._monthly = value.monthly;
    }
  }

  // annual - computed: false, optional: true, required: false
  private _annual?: number; 
  public get annual() {
    return this.getNumberAttribute('annual');
  }
  public set annual(value: number) {
    this._annual = value;
  }
  public resetAnnual() {
    this._annual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annualInput() {
    return this._annual;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: number; 
  public get monthly() {
    return this.getNumberAttribute('monthly');
  }
  public set monthly(value: number) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }
}
export interface EnvironmentQuotasDemUnits {
  /**
  * Annual environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#annual Environment#annual}
  */
  readonly annual?: number;
  /**
  * Monthly environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#monthly Environment#monthly}
  */
  readonly monthly?: number;
}

export function environmentQuotasDemUnitsToTerraform(struct?: EnvironmentQuotasDemUnitsOutputReference | EnvironmentQuotasDemUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annual: cdktf.numberToTerraform(struct!.annual),
    monthly: cdktf.numberToTerraform(struct!.monthly),
  }
}


export function environmentQuotasDemUnitsToHclTerraform(struct?: EnvironmentQuotasDemUnitsOutputReference | EnvironmentQuotasDemUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annual: {
      value: cdktf.numberToHclTerraform(struct!.annual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthly: {
      value: cdktf.numberToHclTerraform(struct!.monthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentQuotasDemUnitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentQuotasDemUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annual !== undefined) {
      hasAnyValues = true;
      internalValueResult.annual = this._annual;
    }
    if (this._monthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentQuotasDemUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annual = undefined;
      this._monthly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annual = value.annual;
      this._monthly = value.monthly;
    }
  }

  // annual - computed: false, optional: true, required: false
  private _annual?: number; 
  public get annual() {
    return this.getNumberAttribute('annual');
  }
  public set annual(value: number) {
    this._annual = value;
  }
  public resetAnnual() {
    this._annual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annualInput() {
    return this._annual;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: number; 
  public get monthly() {
    return this.getNumberAttribute('monthly');
  }
  public set monthly(value: number) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }
}
export interface EnvironmentQuotasLogs {
  /**
  * Annual environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#annual Environment#annual}
  */
  readonly annual?: number;
  /**
  * Monthly environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#monthly Environment#monthly}
  */
  readonly monthly?: number;
}

export function environmentQuotasLogsToTerraform(struct?: EnvironmentQuotasLogsOutputReference | EnvironmentQuotasLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annual: cdktf.numberToTerraform(struct!.annual),
    monthly: cdktf.numberToTerraform(struct!.monthly),
  }
}


export function environmentQuotasLogsToHclTerraform(struct?: EnvironmentQuotasLogsOutputReference | EnvironmentQuotasLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annual: {
      value: cdktf.numberToHclTerraform(struct!.annual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthly: {
      value: cdktf.numberToHclTerraform(struct!.monthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentQuotasLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentQuotasLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annual !== undefined) {
      hasAnyValues = true;
      internalValueResult.annual = this._annual;
    }
    if (this._monthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentQuotasLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annual = undefined;
      this._monthly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annual = value.annual;
      this._monthly = value.monthly;
    }
  }

  // annual - computed: false, optional: true, required: false
  private _annual?: number; 
  public get annual() {
    return this.getNumberAttribute('annual');
  }
  public set annual(value: number) {
    this._annual = value;
  }
  public resetAnnual() {
    this._annual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annualInput() {
    return this._annual;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: number; 
  public get monthly() {
    return this.getNumberAttribute('monthly');
  }
  public set monthly(value: number) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }
}
export interface EnvironmentQuotasSynthetic {
  /**
  * Annual environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#annual Environment#annual}
  */
  readonly annual?: number;
  /**
  * Monthly environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#monthly Environment#monthly}
  */
  readonly monthly?: number;
}

export function environmentQuotasSyntheticToTerraform(struct?: EnvironmentQuotasSyntheticOutputReference | EnvironmentQuotasSynthetic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annual: cdktf.numberToTerraform(struct!.annual),
    monthly: cdktf.numberToTerraform(struct!.monthly),
  }
}


export function environmentQuotasSyntheticToHclTerraform(struct?: EnvironmentQuotasSyntheticOutputReference | EnvironmentQuotasSynthetic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annual: {
      value: cdktf.numberToHclTerraform(struct!.annual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthly: {
      value: cdktf.numberToHclTerraform(struct!.monthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentQuotasSyntheticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentQuotasSynthetic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annual !== undefined) {
      hasAnyValues = true;
      internalValueResult.annual = this._annual;
    }
    if (this._monthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentQuotasSynthetic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annual = undefined;
      this._monthly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annual = value.annual;
      this._monthly = value.monthly;
    }
  }

  // annual - computed: false, optional: true, required: false
  private _annual?: number; 
  public get annual() {
    return this.getNumberAttribute('annual');
  }
  public set annual(value: number) {
    this._annual = value;
  }
  public resetAnnual() {
    this._annual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annualInput() {
    return this._annual;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: number; 
  public get monthly() {
    return this.getNumberAttribute('monthly');
  }
  public set monthly(value: number) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }
}
export interface EnvironmentQuotasUserSessions {
  /**
  * Annual total User sessions environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#annual Environment#annual}
  */
  readonly annual?: number;
  /**
  * Monthly total User sessions environment quota. Not set if unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#monthly Environment#monthly}
  */
  readonly monthly?: number;
}

export function environmentQuotasUserSessionsToTerraform(struct?: EnvironmentQuotasUserSessionsOutputReference | EnvironmentQuotasUserSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annual: cdktf.numberToTerraform(struct!.annual),
    monthly: cdktf.numberToTerraform(struct!.monthly),
  }
}


export function environmentQuotasUserSessionsToHclTerraform(struct?: EnvironmentQuotasUserSessionsOutputReference | EnvironmentQuotasUserSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annual: {
      value: cdktf.numberToHclTerraform(struct!.annual),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthly: {
      value: cdktf.numberToHclTerraform(struct!.monthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentQuotasUserSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentQuotasUserSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annual !== undefined) {
      hasAnyValues = true;
      internalValueResult.annual = this._annual;
    }
    if (this._monthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentQuotasUserSessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annual = undefined;
      this._monthly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annual = value.annual;
      this._monthly = value.monthly;
    }
  }

  // annual - computed: false, optional: true, required: false
  private _annual?: number; 
  public get annual() {
    return this.getNumberAttribute('annual');
  }
  public set annual(value: number) {
    this._annual = value;
  }
  public resetAnnual() {
    this._annual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annualInput() {
    return this._annual;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: number; 
  public get monthly() {
    return this.getNumberAttribute('monthly');
  }
  public set monthly(value: number) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }
}
export interface EnvironmentQuotas {
  /**
  * Host units consumption and quota information on environment level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#host_units Environment#host_units}
  */
  readonly hostUnits?: number;
  /**
  * ddus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#ddus Environment#ddus}
  */
  readonly ddus?: EnvironmentQuotasDdus;
  /**
  * dem_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#dem_units Environment#dem_units}
  */
  readonly demUnits?: EnvironmentQuotasDemUnits;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#logs Environment#logs}
  */
  readonly logs?: EnvironmentQuotasLogs;
  /**
  * synthetic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#synthetic Environment#synthetic}
  */
  readonly synthetic?: EnvironmentQuotasSynthetic;
  /**
  * user_sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#user_sessions Environment#user_sessions}
  */
  readonly userSessions?: EnvironmentQuotasUserSessions;
}

export function environmentQuotasToTerraform(struct?: EnvironmentQuotasOutputReference | EnvironmentQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_units: cdktf.numberToTerraform(struct!.hostUnits),
    ddus: environmentQuotasDdusToTerraform(struct!.ddus),
    dem_units: environmentQuotasDemUnitsToTerraform(struct!.demUnits),
    logs: environmentQuotasLogsToTerraform(struct!.logs),
    synthetic: environmentQuotasSyntheticToTerraform(struct!.synthetic),
    user_sessions: environmentQuotasUserSessionsToTerraform(struct!.userSessions),
  }
}


export function environmentQuotasToHclTerraform(struct?: EnvironmentQuotasOutputReference | EnvironmentQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_units: {
      value: cdktf.numberToHclTerraform(struct!.hostUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddus: {
      value: environmentQuotasDdusToHclTerraform(struct!.ddus),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentQuotasDdusList",
    },
    dem_units: {
      value: environmentQuotasDemUnitsToHclTerraform(struct!.demUnits),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentQuotasDemUnitsList",
    },
    logs: {
      value: environmentQuotasLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentQuotasLogsList",
    },
    synthetic: {
      value: environmentQuotasSyntheticToHclTerraform(struct!.synthetic),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentQuotasSyntheticList",
    },
    user_sessions: {
      value: environmentQuotasUserSessionsToHclTerraform(struct!.userSessions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentQuotasUserSessionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUnits = this._hostUnits;
    }
    if (this._ddus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddus = this._ddus?.internalValue;
    }
    if (this._demUnits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.demUnits = this._demUnits?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._synthetic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthetic = this._synthetic?.internalValue;
    }
    if (this._userSessions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSessions = this._userSessions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostUnits = undefined;
      this._ddus.internalValue = undefined;
      this._demUnits.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._synthetic.internalValue = undefined;
      this._userSessions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostUnits = value.hostUnits;
      this._ddus.internalValue = value.ddus;
      this._demUnits.internalValue = value.demUnits;
      this._logs.internalValue = value.logs;
      this._synthetic.internalValue = value.synthetic;
      this._userSessions.internalValue = value.userSessions;
    }
  }

  // host_units - computed: false, optional: true, required: false
  private _hostUnits?: number; 
  public get hostUnits() {
    return this.getNumberAttribute('host_units');
  }
  public set hostUnits(value: number) {
    this._hostUnits = value;
  }
  public resetHostUnits() {
    this._hostUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUnitsInput() {
    return this._hostUnits;
  }

  // ddus - computed: false, optional: true, required: false
  private _ddus = new EnvironmentQuotasDdusOutputReference(this, "ddus");
  public get ddus() {
    return this._ddus;
  }
  public putDdus(value: EnvironmentQuotasDdus) {
    this._ddus.internalValue = value;
  }
  public resetDdus() {
    this._ddus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddusInput() {
    return this._ddus.internalValue;
  }

  // dem_units - computed: false, optional: true, required: false
  private _demUnits = new EnvironmentQuotasDemUnitsOutputReference(this, "dem_units");
  public get demUnits() {
    return this._demUnits;
  }
  public putDemUnits(value: EnvironmentQuotasDemUnits) {
    this._demUnits.internalValue = value;
  }
  public resetDemUnits() {
    this._demUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demUnitsInput() {
    return this._demUnits.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new EnvironmentQuotasLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: EnvironmentQuotasLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // synthetic - computed: false, optional: true, required: false
  private _synthetic = new EnvironmentQuotasSyntheticOutputReference(this, "synthetic");
  public get synthetic() {
    return this._synthetic;
  }
  public putSynthetic(value: EnvironmentQuotasSynthetic) {
    this._synthetic.internalValue = value;
  }
  public resetSynthetic() {
    this._synthetic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticInput() {
    return this._synthetic.internalValue;
  }

  // user_sessions - computed: false, optional: true, required: false
  private _userSessions = new EnvironmentQuotasUserSessionsOutputReference(this, "user_sessions");
  public get userSessions() {
    return this._userSessions;
  }
  public putUserSessions(value: EnvironmentQuotasUserSessions) {
    this._userSessions.internalValue = value;
  }
  public resetUserSessions() {
    this._userSessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSessionsInput() {
    return this._userSessions.internalValue;
  }
}
export interface EnvironmentStorageLimits {
  /**
  * Log monitoring storage usage and limit information on environment level in bytes. Not editable when Log monitoring is not allowed by license or not configured on cluster level. 0 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#logs Environment#logs}
  */
  readonly logs?: number;
  /**
  * Session replay storage usage and limit information on environment level in bytes. 0 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#session_replay Environment#session_replay}
  */
  readonly sessionReplay?: number;
  /**
  * Session replay storage usage and limit information on environment level in bytes. 0 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#symbol_files Environment#symbol_files}
  */
  readonly symbolFiles?: number;
  /**
  * Transaction storage usage and limit information on environment level in bytes. 0 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#transactions Environment#transactions}
  */
  readonly transactions?: number;
}

export function environmentStorageLimitsToTerraform(struct?: EnvironmentStorageLimitsOutputReference | EnvironmentStorageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs: cdktf.numberToTerraform(struct!.logs),
    session_replay: cdktf.numberToTerraform(struct!.sessionReplay),
    symbol_files: cdktf.numberToTerraform(struct!.symbolFiles),
    transactions: cdktf.numberToTerraform(struct!.transactions),
  }
}


export function environmentStorageLimitsToHclTerraform(struct?: EnvironmentStorageLimitsOutputReference | EnvironmentStorageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs: {
      value: cdktf.numberToHclTerraform(struct!.logs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_replay: {
      value: cdktf.numberToHclTerraform(struct!.sessionReplay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    symbol_files: {
      value: cdktf.numberToHclTerraform(struct!.symbolFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transactions: {
      value: cdktf.numberToHclTerraform(struct!.transactions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentStorageLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentStorageLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs;
    }
    if (this._sessionReplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReplay = this._sessionReplay;
    }
    if (this._symbolFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbolFiles = this._symbolFiles;
    }
    if (this._transactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactions = this._transactions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentStorageLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logs = undefined;
      this._sessionReplay = undefined;
      this._symbolFiles = undefined;
      this._transactions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logs = value.logs;
      this._sessionReplay = value.sessionReplay;
      this._symbolFiles = value.symbolFiles;
      this._transactions = value.transactions;
    }
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: number; 
  public get logs() {
    return this.getNumberAttribute('logs');
  }
  public set logs(value: number) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
  }

  // session_replay - computed: false, optional: true, required: false
  private _sessionReplay?: number; 
  public get sessionReplay() {
    return this.getNumberAttribute('session_replay');
  }
  public set sessionReplay(value: number) {
    this._sessionReplay = value;
  }
  public resetSessionReplay() {
    this._sessionReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayInput() {
    return this._sessionReplay;
  }

  // symbol_files - computed: false, optional: true, required: false
  private _symbolFiles?: number; 
  public get symbolFiles() {
    return this.getNumberAttribute('symbol_files');
  }
  public set symbolFiles(value: number) {
    this._symbolFiles = value;
  }
  public resetSymbolFiles() {
    this._symbolFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolFilesInput() {
    return this._symbolFiles;
  }

  // transactions - computed: false, optional: true, required: false
  private _transactions?: number; 
  public get transactions() {
    return this.getNumberAttribute('transactions');
  }
  public set transactions(value: number) {
    this._transactions = value;
  }
  public resetTransactions() {
    this._transactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionsInput() {
    return this._transactions;
  }
}
export interface EnvironmentStorageRetention {
  /**
  * Log monitoring retention settings on environment level in days. Not editable when Log monitoring is not allowed by license or not configured on cluster level. Can be set to any value from 5 to 90 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#logs Environment#logs}
  */
  readonly logs?: number;
  /**
  * Real user monitoring retention settings on environment level in days. Can be set to any value from 1 to 35 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#rum Environment#rum}
  */
  readonly rum: number;
  /**
  * Service code level retention settings on environment level in days. Service code level retention time can't be greater than service request level retention time and both can't exceed one year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#service_code_level Environment#service_code_level}
  */
  readonly serviceCodeLevel: number;
  /**
  * Service request level retention settings on environment level in days. Service code level retention time can't be greater than service request level retention time and both can't exceed one year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#service_request_level Environment#service_request_level}
  */
  readonly serviceRequestLevel: number;
  /**
  * Session replay retention settings on environment level in days. Can be set to any value from 1 to 35 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#session_replay Environment#session_replay}
  */
  readonly sessionReplay: number;
  /**
  * Synthetic monitoring retention settings on environment level in days. Can be set to any value from 1 to 35 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#synthetic Environment#synthetic}
  */
  readonly synthetic: number;
}

export function environmentStorageRetentionToTerraform(struct?: EnvironmentStorageRetentionOutputReference | EnvironmentStorageRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs: cdktf.numberToTerraform(struct!.logs),
    rum: cdktf.numberToTerraform(struct!.rum),
    service_code_level: cdktf.numberToTerraform(struct!.serviceCodeLevel),
    service_request_level: cdktf.numberToTerraform(struct!.serviceRequestLevel),
    session_replay: cdktf.numberToTerraform(struct!.sessionReplay),
    synthetic: cdktf.numberToTerraform(struct!.synthetic),
  }
}


export function environmentStorageRetentionToHclTerraform(struct?: EnvironmentStorageRetentionOutputReference | EnvironmentStorageRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs: {
      value: cdktf.numberToHclTerraform(struct!.logs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rum: {
      value: cdktf.numberToHclTerraform(struct!.rum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_code_level: {
      value: cdktf.numberToHclTerraform(struct!.serviceCodeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_request_level: {
      value: cdktf.numberToHclTerraform(struct!.serviceRequestLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_replay: {
      value: cdktf.numberToHclTerraform(struct!.sessionReplay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synthetic: {
      value: cdktf.numberToHclTerraform(struct!.synthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentStorageRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentStorageRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs;
    }
    if (this._rum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rum = this._rum;
    }
    if (this._serviceCodeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCodeLevel = this._serviceCodeLevel;
    }
    if (this._serviceRequestLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRequestLevel = this._serviceRequestLevel;
    }
    if (this._sessionReplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReplay = this._sessionReplay;
    }
    if (this._synthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthetic = this._synthetic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentStorageRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logs = undefined;
      this._rum = undefined;
      this._serviceCodeLevel = undefined;
      this._serviceRequestLevel = undefined;
      this._sessionReplay = undefined;
      this._synthetic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logs = value.logs;
      this._rum = value.rum;
      this._serviceCodeLevel = value.serviceCodeLevel;
      this._serviceRequestLevel = value.serviceRequestLevel;
      this._sessionReplay = value.sessionReplay;
      this._synthetic = value.synthetic;
    }
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: number; 
  public get logs() {
    return this.getNumberAttribute('logs');
  }
  public set logs(value: number) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
  }

  // rum - computed: false, optional: false, required: true
  private _rum?: number; 
  public get rum() {
    return this.getNumberAttribute('rum');
  }
  public set rum(value: number) {
    this._rum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rumInput() {
    return this._rum;
  }

  // service_code_level - computed: false, optional: false, required: true
  private _serviceCodeLevel?: number; 
  public get serviceCodeLevel() {
    return this.getNumberAttribute('service_code_level');
  }
  public set serviceCodeLevel(value: number) {
    this._serviceCodeLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCodeLevelInput() {
    return this._serviceCodeLevel;
  }

  // service_request_level - computed: false, optional: false, required: true
  private _serviceRequestLevel?: number; 
  public get serviceRequestLevel() {
    return this.getNumberAttribute('service_request_level');
  }
  public set serviceRequestLevel(value: number) {
    this._serviceRequestLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRequestLevelInput() {
    return this._serviceRequestLevel;
  }

  // session_replay - computed: false, optional: false, required: true
  private _sessionReplay?: number; 
  public get sessionReplay() {
    return this.getNumberAttribute('session_replay');
  }
  public set sessionReplay(value: number) {
    this._sessionReplay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayInput() {
    return this._sessionReplay;
  }

  // synthetic - computed: false, optional: false, required: true
  private _synthetic?: number; 
  public get synthetic() {
    return this.getNumberAttribute('synthetic');
  }
  public set synthetic(value: number) {
    this._synthetic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticInput() {
    return this._synthetic;
  }
}
export interface EnvironmentStorage {
  /**
  * Maximum number of newly monitored entry point PurePaths captured per process/minute on environment level. Can be set to any value from 100 to 100000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#transactions Environment#transactions}
  */
  readonly transactions: number;
  /**
  * Maximum number of user actions generated per minute on environment level. Can be set to any value from 1 to 2147483646 or left unlimited by omitting this property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#user_actions Environment#user_actions}
  */
  readonly userActions?: number;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#limits Environment#limits}
  */
  readonly limits?: EnvironmentStorageLimits;
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#retention Environment#retention}
  */
  readonly retention?: EnvironmentStorageRetention;
}

export function environmentStorageToTerraform(struct?: EnvironmentStorageOutputReference | EnvironmentStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transactions: cdktf.numberToTerraform(struct!.transactions),
    user_actions: cdktf.numberToTerraform(struct!.userActions),
    limits: environmentStorageLimitsToTerraform(struct!.limits),
    retention: environmentStorageRetentionToTerraform(struct!.retention),
  }
}


export function environmentStorageToHclTerraform(struct?: EnvironmentStorageOutputReference | EnvironmentStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transactions: {
      value: cdktf.numberToHclTerraform(struct!.transactions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_actions: {
      value: cdktf.numberToHclTerraform(struct!.userActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limits: {
      value: environmentStorageLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentStorageLimitsList",
    },
    retention: {
      value: environmentStorageRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentStorageRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactions = this._transactions;
    }
    if (this._userActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActions = this._userActions;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transactions = undefined;
      this._userActions = undefined;
      this._limits.internalValue = undefined;
      this._retention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transactions = value.transactions;
      this._userActions = value.userActions;
      this._limits.internalValue = value.limits;
      this._retention.internalValue = value.retention;
    }
  }

  // transactions - computed: false, optional: false, required: true
  private _transactions?: number; 
  public get transactions() {
    return this.getNumberAttribute('transactions');
  }
  public set transactions(value: number) {
    this._transactions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionsInput() {
    return this._transactions;
  }

  // user_actions - computed: false, optional: true, required: false
  private _userActions?: number; 
  public get userActions() {
    return this.getNumberAttribute('user_actions');
  }
  public set userActions(value: number) {
    this._userActions = value;
  }
  public resetUserActions() {
    this._userActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionsInput() {
    return this._userActions;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new EnvironmentStorageLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: EnvironmentStorageLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new EnvironmentStorageRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: EnvironmentStorageRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment dynatrace_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/environment dynatrace_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_environment',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._state = config.state;
    this._tags = config.tags;
    this._trial = config.trial;
    this._quotas.internalValue = config.quotas;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trial - computed: false, optional: true, required: false
  private _trial?: boolean | cdktf.IResolvable; 
  public get trial() {
    return this.getBooleanAttribute('trial');
  }
  public set trial(value: boolean | cdktf.IResolvable) {
    this._trial = value;
  }
  public resetTrial() {
    this._trial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialInput() {
    return this._trial;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new EnvironmentQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: EnvironmentQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new EnvironmentStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: EnvironmentStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      trial: cdktf.booleanToTerraform(this._trial),
      quotas: environmentQuotasToTerraform(this._quotas.internalValue),
      storage: environmentStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trial: {
        value: cdktf.booleanToHclTerraform(this._trial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quotas: {
        value: environmentQuotasToHclTerraform(this._quotas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentQuotasList",
      },
      storage: {
        value: environmentStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
