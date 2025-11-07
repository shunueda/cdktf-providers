// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProbePingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#agents ProbePing#agents}
  */
  readonly agents: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#id ProbePing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#interval ProbePing#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#owner_name ProbePing#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#packet_size ProbePing#packet_size}
  */
  readonly packetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#packets ProbePing#packets}
  */
  readonly packets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#pool_record ProbePing#pool_record}
  */
  readonly poolRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#pool_type ProbePing#pool_type}
  */
  readonly poolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#threshold ProbePing#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#zone_name ProbePing#zone_name}
  */
  readonly zoneName: string;
  /**
  * average_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#average_limit ProbePing#average_limit}
  */
  readonly averageLimit?: ProbePingAverageLimit;
  /**
  * avg_run_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#avg_run_limit ProbePing#avg_run_limit}
  */
  readonly avgRunLimit?: ProbePingAvgRunLimit;
  /**
  * loss_percent_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#loss_percent_limit ProbePing#loss_percent_limit}
  */
  readonly lossPercentLimit?: ProbePingLossPercentLimit;
  /**
  * run_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#run_limit ProbePing#run_limit}
  */
  readonly runLimit?: ProbePingRunLimit;
  /**
  * total_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#total_limit ProbePing#total_limit}
  */
  readonly totalLimit?: ProbePingTotalLimit;
}
export interface ProbePingAverageLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#critical ProbePing#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#fail ProbePing#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#warning ProbePing#warning}
  */
  readonly warning?: number;
}

export function probePingAverageLimitToTerraform(struct?: ProbePingAverageLimitOutputReference | ProbePingAverageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.numberToTerraform(struct!.critical),
    fail: cdktf.numberToTerraform(struct!.fail),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function probePingAverageLimitToHclTerraform(struct?: ProbePingAverageLimitOutputReference | ProbePingAverageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbePingAverageLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbePingAverageLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbePingAverageLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._fail = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._fail = value.fail;
      this._warning = value.warning;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // fail - computed: true, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // warning - computed: true, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface ProbePingAvgRunLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#critical ProbePing#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#fail ProbePing#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#warning ProbePing#warning}
  */
  readonly warning?: number;
}

export function probePingAvgRunLimitToTerraform(struct?: ProbePingAvgRunLimitOutputReference | ProbePingAvgRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.numberToTerraform(struct!.critical),
    fail: cdktf.numberToTerraform(struct!.fail),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function probePingAvgRunLimitToHclTerraform(struct?: ProbePingAvgRunLimitOutputReference | ProbePingAvgRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbePingAvgRunLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbePingAvgRunLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbePingAvgRunLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._fail = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._fail = value.fail;
      this._warning = value.warning;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // fail - computed: true, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // warning - computed: true, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface ProbePingLossPercentLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#critical ProbePing#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#fail ProbePing#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#warning ProbePing#warning}
  */
  readonly warning?: number;
}

export function probePingLossPercentLimitToTerraform(struct?: ProbePingLossPercentLimitOutputReference | ProbePingLossPercentLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.numberToTerraform(struct!.critical),
    fail: cdktf.numberToTerraform(struct!.fail),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function probePingLossPercentLimitToHclTerraform(struct?: ProbePingLossPercentLimitOutputReference | ProbePingLossPercentLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbePingLossPercentLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbePingLossPercentLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbePingLossPercentLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._fail = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._fail = value.fail;
      this._warning = value.warning;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // fail - computed: true, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // warning - computed: true, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface ProbePingRunLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#critical ProbePing#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#fail ProbePing#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#warning ProbePing#warning}
  */
  readonly warning?: number;
}

export function probePingRunLimitToTerraform(struct?: ProbePingRunLimitOutputReference | ProbePingRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.numberToTerraform(struct!.critical),
    fail: cdktf.numberToTerraform(struct!.fail),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function probePingRunLimitToHclTerraform(struct?: ProbePingRunLimitOutputReference | ProbePingRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbePingRunLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbePingRunLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbePingRunLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._fail = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._fail = value.fail;
      this._warning = value.warning;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // fail - computed: true, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // warning - computed: true, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface ProbePingTotalLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#critical ProbePing#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#fail ProbePing#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#warning ProbePing#warning}
  */
  readonly warning?: number;
}

export function probePingTotalLimitToTerraform(struct?: ProbePingTotalLimitOutputReference | ProbePingTotalLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.numberToTerraform(struct!.critical),
    fail: cdktf.numberToTerraform(struct!.fail),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function probePingTotalLimitToHclTerraform(struct?: ProbePingTotalLimitOutputReference | ProbePingTotalLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbePingTotalLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbePingTotalLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbePingTotalLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._fail = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._fail = value.fail;
      this._warning = value.warning;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // fail - computed: true, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // warning - computed: true, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping ultradns_probe_ping}
*/
export class ProbePing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_probe_ping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProbePing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProbePing to import
  * @param importFromId The id of the existing ProbePing that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProbePing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_probe_ping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_ping ultradns_probe_ping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProbePingConfig
  */
  public constructor(scope: Construct, id: string, config: ProbePingConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_probe_ping',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agents = config.agents;
    this._id = config.id;
    this._interval = config.interval;
    this._ownerName = config.ownerName;
    this._packetSize = config.packetSize;
    this._packets = config.packets;
    this._poolRecord = config.poolRecord;
    this._poolType = config.poolType;
    this._threshold = config.threshold;
    this._zoneName = config.zoneName;
    this._averageLimit.internalValue = config.averageLimit;
    this._avgRunLimit.internalValue = config.avgRunLimit;
    this._lossPercentLimit.internalValue = config.lossPercentLimit;
    this._runLimit.internalValue = config.runLimit;
    this._totalLimit.internalValue = config.totalLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: false, optional: false, required: true
  private _agents?: string[]; 
  public get agents() {
    return cdktf.Fn.tolist(this.getListAttribute('agents'));
  }
  public set agents(value: string[]) {
    this._agents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // packet_size - computed: false, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // packets - computed: false, optional: true, required: false
  private _packets?: number; 
  public get packets() {
    return this.getNumberAttribute('packets');
  }
  public set packets(value: number) {
    this._packets = value;
  }
  public resetPackets() {
    this._packets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsInput() {
    return this._packets;
  }

  // pool_record - computed: false, optional: true, required: false
  private _poolRecord?: string; 
  public get poolRecord() {
    return this.getStringAttribute('pool_record');
  }
  public set poolRecord(value: string) {
    this._poolRecord = value;
  }
  public resetPoolRecord() {
    this._poolRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRecordInput() {
    return this._poolRecord;
  }

  // pool_type - computed: false, optional: true, required: false
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  public resetPoolType() {
    this._poolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // average_limit - computed: false, optional: true, required: false
  private _averageLimit = new ProbePingAverageLimitOutputReference(this, "average_limit");
  public get averageLimit() {
    return this._averageLimit;
  }
  public putAverageLimit(value: ProbePingAverageLimit) {
    this._averageLimit.internalValue = value;
  }
  public resetAverageLimit() {
    this._averageLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageLimitInput() {
    return this._averageLimit.internalValue;
  }

  // avg_run_limit - computed: false, optional: true, required: false
  private _avgRunLimit = new ProbePingAvgRunLimitOutputReference(this, "avg_run_limit");
  public get avgRunLimit() {
    return this._avgRunLimit;
  }
  public putAvgRunLimit(value: ProbePingAvgRunLimit) {
    this._avgRunLimit.internalValue = value;
  }
  public resetAvgRunLimit() {
    this._avgRunLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgRunLimitInput() {
    return this._avgRunLimit.internalValue;
  }

  // loss_percent_limit - computed: false, optional: true, required: false
  private _lossPercentLimit = new ProbePingLossPercentLimitOutputReference(this, "loss_percent_limit");
  public get lossPercentLimit() {
    return this._lossPercentLimit;
  }
  public putLossPercentLimit(value: ProbePingLossPercentLimit) {
    this._lossPercentLimit.internalValue = value;
  }
  public resetLossPercentLimit() {
    this._lossPercentLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossPercentLimitInput() {
    return this._lossPercentLimit.internalValue;
  }

  // run_limit - computed: false, optional: true, required: false
  private _runLimit = new ProbePingRunLimitOutputReference(this, "run_limit");
  public get runLimit() {
    return this._runLimit;
  }
  public putRunLimit(value: ProbePingRunLimit) {
    this._runLimit.internalValue = value;
  }
  public resetRunLimit() {
    this._runLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLimitInput() {
    return this._runLimit.internalValue;
  }

  // total_limit - computed: false, optional: true, required: false
  private _totalLimit = new ProbePingTotalLimitOutputReference(this, "total_limit");
  public get totalLimit() {
    return this._totalLimit;
  }
  public putTotalLimit(value: ProbePingTotalLimit) {
    this._totalLimit.internalValue = value;
  }
  public resetTotalLimit() {
    this._totalLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLimitInput() {
    return this._totalLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      packet_size: cdktf.numberToTerraform(this._packetSize),
      packets: cdktf.numberToTerraform(this._packets),
      pool_record: cdktf.stringToTerraform(this._poolRecord),
      pool_type: cdktf.stringToTerraform(this._poolType),
      threshold: cdktf.numberToTerraform(this._threshold),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      average_limit: probePingAverageLimitToTerraform(this._averageLimit.internalValue),
      avg_run_limit: probePingAvgRunLimitToTerraform(this._avgRunLimit.internalValue),
      loss_percent_limit: probePingLossPercentLimitToTerraform(this._lossPercentLimit.internalValue),
      run_limit: probePingRunLimitToTerraform(this._runLimit.internalValue),
      total_limit: probePingTotalLimitToTerraform(this._totalLimit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_size: {
        value: cdktf.numberToHclTerraform(this._packetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packets: {
        value: cdktf.numberToHclTerraform(this._packets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool_record: {
        value: cdktf.stringToHclTerraform(this._poolRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      average_limit: {
        value: probePingAverageLimitToHclTerraform(this._averageLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProbePingAverageLimitList",
      },
      avg_run_limit: {
        value: probePingAvgRunLimitToHclTerraform(this._avgRunLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProbePingAvgRunLimitList",
      },
      loss_percent_limit: {
        value: probePingLossPercentLimitToHclTerraform(this._lossPercentLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProbePingLossPercentLimitList",
      },
      run_limit: {
        value: probePingRunLimitToHclTerraform(this._runLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProbePingRunLimitList",
      },
      total_limit: {
        value: probePingTotalLimitToHclTerraform(this._totalLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProbePingTotalLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
