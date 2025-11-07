// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProbeHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#agents ProbeHttp#agents}
  */
  readonly agents: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#id ProbeHttp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#interval ProbeHttp#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#owner_name ProbeHttp#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#pool_record ProbeHttp#pool_record}
  */
  readonly poolRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#pool_type ProbeHttp#pool_type}
  */
  readonly poolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#threshold ProbeHttp#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#zone_name ProbeHttp#zone_name}
  */
  readonly zoneName: string;
  /**
  * total_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#total_limit ProbeHttp#total_limit}
  */
  readonly totalLimit?: ProbeHttpTotalLimit;
  /**
  * transaction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#transaction ProbeHttp#transaction}
  */
  readonly transaction: ProbeHttpTransaction[] | cdktf.IResolvable;
}
export interface ProbeHttpTotalLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#critical ProbeHttp#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#fail ProbeHttp#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#warning ProbeHttp#warning}
  */
  readonly warning?: number;
}

export function probeHttpTotalLimitToTerraform(struct?: ProbeHttpTotalLimitOutputReference | ProbeHttpTotalLimit): any {
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


export function probeHttpTotalLimitToHclTerraform(struct?: ProbeHttpTotalLimitOutputReference | ProbeHttpTotalLimit): any {
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

export class ProbeHttpTotalLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbeHttpTotalLimit | undefined {
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

  public set internalValue(value: ProbeHttpTotalLimit | undefined) {
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
export interface ProbeHttpTransactionAvgConnectLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#critical ProbeHttp#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#fail ProbeHttp#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#warning ProbeHttp#warning}
  */
  readonly warning?: number;
}

export function probeHttpTransactionAvgConnectLimitToTerraform(struct?: ProbeHttpTransactionAvgConnectLimitOutputReference | ProbeHttpTransactionAvgConnectLimit): any {
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


export function probeHttpTransactionAvgConnectLimitToHclTerraform(struct?: ProbeHttpTransactionAvgConnectLimitOutputReference | ProbeHttpTransactionAvgConnectLimit): any {
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

export class ProbeHttpTransactionAvgConnectLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbeHttpTransactionAvgConnectLimit | undefined {
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

  public set internalValue(value: ProbeHttpTransactionAvgConnectLimit | undefined) {
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
export interface ProbeHttpTransactionAvgRunLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#critical ProbeHttp#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#fail ProbeHttp#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#warning ProbeHttp#warning}
  */
  readonly warning?: number;
}

export function probeHttpTransactionAvgRunLimitToTerraform(struct?: ProbeHttpTransactionAvgRunLimitOutputReference | ProbeHttpTransactionAvgRunLimit): any {
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


export function probeHttpTransactionAvgRunLimitToHclTerraform(struct?: ProbeHttpTransactionAvgRunLimitOutputReference | ProbeHttpTransactionAvgRunLimit): any {
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

export class ProbeHttpTransactionAvgRunLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbeHttpTransactionAvgRunLimit | undefined {
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

  public set internalValue(value: ProbeHttpTransactionAvgRunLimit | undefined) {
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
export interface ProbeHttpTransactionConnectLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#critical ProbeHttp#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#fail ProbeHttp#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#warning ProbeHttp#warning}
  */
  readonly warning?: number;
}

export function probeHttpTransactionConnectLimitToTerraform(struct?: ProbeHttpTransactionConnectLimitOutputReference | ProbeHttpTransactionConnectLimit): any {
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


export function probeHttpTransactionConnectLimitToHclTerraform(struct?: ProbeHttpTransactionConnectLimitOutputReference | ProbeHttpTransactionConnectLimit): any {
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

export class ProbeHttpTransactionConnectLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbeHttpTransactionConnectLimit | undefined {
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

  public set internalValue(value: ProbeHttpTransactionConnectLimit | undefined) {
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
export interface ProbeHttpTransactionRunLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#critical ProbeHttp#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#fail ProbeHttp#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#warning ProbeHttp#warning}
  */
  readonly warning?: number;
}

export function probeHttpTransactionRunLimitToTerraform(struct?: ProbeHttpTransactionRunLimitOutputReference | ProbeHttpTransactionRunLimit): any {
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


export function probeHttpTransactionRunLimitToHclTerraform(struct?: ProbeHttpTransactionRunLimitOutputReference | ProbeHttpTransactionRunLimit): any {
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

export class ProbeHttpTransactionRunLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbeHttpTransactionRunLimit | undefined {
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

  public set internalValue(value: ProbeHttpTransactionRunLimit | undefined) {
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
export interface ProbeHttpTransactionSearchString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#critical ProbeHttp#critical}
  */
  readonly critical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#fail ProbeHttp#fail}
  */
  readonly fail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#warning ProbeHttp#warning}
  */
  readonly warning?: string;
}

export function probeHttpTransactionSearchStringToTerraform(struct?: ProbeHttpTransactionSearchStringOutputReference | ProbeHttpTransactionSearchString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.stringToTerraform(struct!.critical),
    fail: cdktf.stringToTerraform(struct!.fail),
    warning: cdktf.stringToTerraform(struct!.warning),
  }
}


export function probeHttpTransactionSearchStringToHclTerraform(struct?: ProbeHttpTransactionSearchStringOutputReference | ProbeHttpTransactionSearchString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail: {
      value: cdktf.stringToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktf.stringToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbeHttpTransactionSearchStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProbeHttpTransactionSearchString | undefined {
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

  public set internalValue(value: ProbeHttpTransactionSearchString | undefined) {
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

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // fail - computed: false, optional: true, required: false
  private _fail?: string; 
  public get fail() {
    return this.getStringAttribute('fail');
  }
  public set fail(value: string) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
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
export interface ProbeHttpTransaction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#expected_response ProbeHttp#expected_response}
  */
  readonly expectedResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#follow_redirects ProbeHttp#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#method ProbeHttp#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#protocol_version ProbeHttp#protocol_version}
  */
  readonly protocolVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#transmitted_data ProbeHttp#transmitted_data}
  */
  readonly transmittedData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#url ProbeHttp#url}
  */
  readonly url: string;
  /**
  * avg_connect_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#avg_connect_limit ProbeHttp#avg_connect_limit}
  */
  readonly avgConnectLimit?: ProbeHttpTransactionAvgConnectLimit;
  /**
  * avg_run_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#avg_run_limit ProbeHttp#avg_run_limit}
  */
  readonly avgRunLimit?: ProbeHttpTransactionAvgRunLimit;
  /**
  * connect_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#connect_limit ProbeHttp#connect_limit}
  */
  readonly connectLimit?: ProbeHttpTransactionConnectLimit;
  /**
  * run_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#run_limit ProbeHttp#run_limit}
  */
  readonly runLimit?: ProbeHttpTransactionRunLimit;
  /**
  * search_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#search_string ProbeHttp#search_string}
  */
  readonly searchString?: ProbeHttpTransactionSearchString;
}

export function probeHttpTransactionToTerraform(struct?: ProbeHttpTransaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    method: cdktf.stringToTerraform(struct!.method),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    transmitted_data: cdktf.stringToTerraform(struct!.transmittedData),
    url: cdktf.stringToTerraform(struct!.url),
    avg_connect_limit: probeHttpTransactionAvgConnectLimitToTerraform(struct!.avgConnectLimit),
    avg_run_limit: probeHttpTransactionAvgRunLimitToTerraform(struct!.avgRunLimit),
    connect_limit: probeHttpTransactionConnectLimitToTerraform(struct!.connectLimit),
    run_limit: probeHttpTransactionRunLimitToTerraform(struct!.runLimit),
    search_string: probeHttpTransactionSearchStringToTerraform(struct!.searchString),
  }
}


export function probeHttpTransactionToHclTerraform(struct?: ProbeHttpTransaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
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
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmitted_data: {
      value: cdktf.stringToHclTerraform(struct!.transmittedData),
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
    avg_connect_limit: {
      value: probeHttpTransactionAvgConnectLimitToHclTerraform(struct!.avgConnectLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ProbeHttpTransactionAvgConnectLimitList",
    },
    avg_run_limit: {
      value: probeHttpTransactionAvgRunLimitToHclTerraform(struct!.avgRunLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ProbeHttpTransactionAvgRunLimitList",
    },
    connect_limit: {
      value: probeHttpTransactionConnectLimitToHclTerraform(struct!.connectLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ProbeHttpTransactionConnectLimitList",
    },
    run_limit: {
      value: probeHttpTransactionRunLimitToHclTerraform(struct!.runLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ProbeHttpTransactionRunLimitList",
    },
    search_string: {
      value: probeHttpTransactionSearchStringToHclTerraform(struct!.searchString),
      isBlock: true,
      type: "list",
      storageClassType: "ProbeHttpTransactionSearchStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbeHttpTransactionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProbeHttpTransaction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._transmittedData !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmittedData = this._transmittedData;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._avgConnectLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgConnectLimit = this._avgConnectLimit?.internalValue;
    }
    if (this._avgRunLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgRunLimit = this._avgRunLimit?.internalValue;
    }
    if (this._connectLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectLimit = this._connectLimit?.internalValue;
    }
    if (this._runLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLimit = this._runLimit?.internalValue;
    }
    if (this._searchString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchString = this._searchString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbeHttpTransaction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedResponse = undefined;
      this._followRedirects = undefined;
      this._method = undefined;
      this._protocolVersion = undefined;
      this._transmittedData = undefined;
      this._url = undefined;
      this._avgConnectLimit.internalValue = undefined;
      this._avgRunLimit.internalValue = undefined;
      this._connectLimit.internalValue = undefined;
      this._runLimit.internalValue = undefined;
      this._searchString.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedResponse = value.expectedResponse;
      this._followRedirects = value.followRedirects;
      this._method = value.method;
      this._protocolVersion = value.protocolVersion;
      this._transmittedData = value.transmittedData;
      this._url = value.url;
      this._avgConnectLimit.internalValue = value.avgConnectLimit;
      this._avgRunLimit.internalValue = value.avgRunLimit;
      this._connectLimit.internalValue = value.connectLimit;
      this._runLimit.internalValue = value.runLimit;
      this._searchString.internalValue = value.searchString;
    }
  }

  // expected_response - computed: false, optional: true, required: false
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  public resetExpectedResponse() {
    this._expectedResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
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

  // protocol_version - computed: false, optional: false, required: true
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // transmitted_data - computed: false, optional: true, required: false
  private _transmittedData?: string; 
  public get transmittedData() {
    return this.getStringAttribute('transmitted_data');
  }
  public set transmittedData(value: string) {
    this._transmittedData = value;
  }
  public resetTransmittedData() {
    this._transmittedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmittedDataInput() {
    return this._transmittedData;
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

  // avg_connect_limit - computed: false, optional: true, required: false
  private _avgConnectLimit = new ProbeHttpTransactionAvgConnectLimitOutputReference(this, "avg_connect_limit");
  public get avgConnectLimit() {
    return this._avgConnectLimit;
  }
  public putAvgConnectLimit(value: ProbeHttpTransactionAvgConnectLimit) {
    this._avgConnectLimit.internalValue = value;
  }
  public resetAvgConnectLimit() {
    this._avgConnectLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgConnectLimitInput() {
    return this._avgConnectLimit.internalValue;
  }

  // avg_run_limit - computed: false, optional: true, required: false
  private _avgRunLimit = new ProbeHttpTransactionAvgRunLimitOutputReference(this, "avg_run_limit");
  public get avgRunLimit() {
    return this._avgRunLimit;
  }
  public putAvgRunLimit(value: ProbeHttpTransactionAvgRunLimit) {
    this._avgRunLimit.internalValue = value;
  }
  public resetAvgRunLimit() {
    this._avgRunLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgRunLimitInput() {
    return this._avgRunLimit.internalValue;
  }

  // connect_limit - computed: false, optional: true, required: false
  private _connectLimit = new ProbeHttpTransactionConnectLimitOutputReference(this, "connect_limit");
  public get connectLimit() {
    return this._connectLimit;
  }
  public putConnectLimit(value: ProbeHttpTransactionConnectLimit) {
    this._connectLimit.internalValue = value;
  }
  public resetConnectLimit() {
    this._connectLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectLimitInput() {
    return this._connectLimit.internalValue;
  }

  // run_limit - computed: false, optional: true, required: false
  private _runLimit = new ProbeHttpTransactionRunLimitOutputReference(this, "run_limit");
  public get runLimit() {
    return this._runLimit;
  }
  public putRunLimit(value: ProbeHttpTransactionRunLimit) {
    this._runLimit.internalValue = value;
  }
  public resetRunLimit() {
    this._runLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLimitInput() {
    return this._runLimit.internalValue;
  }

  // search_string - computed: false, optional: true, required: false
  private _searchString = new ProbeHttpTransactionSearchStringOutputReference(this, "search_string");
  public get searchString() {
    return this._searchString;
  }
  public putSearchString(value: ProbeHttpTransactionSearchString) {
    this._searchString.internalValue = value;
  }
  public resetSearchString() {
    this._searchString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString.internalValue;
  }
}

export class ProbeHttpTransactionList extends cdktf.ComplexList {
  public internalValue? : ProbeHttpTransaction[] | cdktf.IResolvable

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
  public get(index: number): ProbeHttpTransactionOutputReference {
    return new ProbeHttpTransactionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http ultradns_probe_http}
*/
export class ProbeHttp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_probe_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProbeHttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProbeHttp to import
  * @param importFromId The id of the existing ProbeHttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProbeHttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_probe_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/probe_http ultradns_probe_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProbeHttpConfig
  */
  public constructor(scope: Construct, id: string, config: ProbeHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_probe_http',
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
    this._poolRecord = config.poolRecord;
    this._poolType = config.poolType;
    this._threshold = config.threshold;
    this._zoneName = config.zoneName;
    this._totalLimit.internalValue = config.totalLimit;
    this._transaction.internalValue = config.transaction;
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

  // total_limit - computed: false, optional: true, required: false
  private _totalLimit = new ProbeHttpTotalLimitOutputReference(this, "total_limit");
  public get totalLimit() {
    return this._totalLimit;
  }
  public putTotalLimit(value: ProbeHttpTotalLimit) {
    this._totalLimit.internalValue = value;
  }
  public resetTotalLimit() {
    this._totalLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLimitInput() {
    return this._totalLimit.internalValue;
  }

  // transaction - computed: false, optional: false, required: true
  private _transaction = new ProbeHttpTransactionList(this, "transaction", false);
  public get transaction() {
    return this._transaction;
  }
  public putTransaction(value: ProbeHttpTransaction[] | cdktf.IResolvable) {
    this._transaction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionInput() {
    return this._transaction.internalValue;
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
      pool_record: cdktf.stringToTerraform(this._poolRecord),
      pool_type: cdktf.stringToTerraform(this._poolType),
      threshold: cdktf.numberToTerraform(this._threshold),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      total_limit: probeHttpTotalLimitToTerraform(this._totalLimit.internalValue),
      transaction: cdktf.listMapper(probeHttpTransactionToTerraform, true)(this._transaction.internalValue),
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
      total_limit: {
        value: probeHttpTotalLimitToHclTerraform(this._totalLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProbeHttpTotalLimitList",
      },
      transaction: {
        value: cdktf.listMapperHcl(probeHttpTransactionToHclTerraform, true)(this._transaction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProbeHttpTransactionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
