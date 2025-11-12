// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/hip_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmHipObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/hip_object#id DataScmHipObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the HIP object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/hip_object#name DataScmHipObject#name}
  */
  readonly name?: string;
}
export interface DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailable {
}

export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailableToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailableToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithin {
}

export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithinToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithinToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaLastScanTimeWithin {
}

export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeWithinToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeWithinToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaLastScanTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaLastScanTimeWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaLastScanTimeWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaLastScanTime {
}

export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaLastScanTimeToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaLastScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaLastScanTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaLastScanTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaLastScanTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_available - computed: true, optional: false, required: false
  private _notAvailable = new DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotAvailableOutputReference(this, "not_available");
  public get notAvailable() {
    return this._notAvailable;
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectAntiMalwareCriteriaLastScanTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectAntiMalwareCriteriaLastScanTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaProductVersionNotWithin {
}

export function dataScmHipObjectAntiMalwareCriteriaProductVersionNotWithinToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaProductVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaProductVersionNotWithinToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaProductVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaProductVersionNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaProductVersionNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaProductVersionNotWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getNumberAttribute('versions');
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaProductVersionWithin {
}

export function dataScmHipObjectAntiMalwareCriteriaProductVersionWithinToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaProductVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaProductVersionWithinToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaProductVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaProductVersionWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaProductVersionWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaProductVersionWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getNumberAttribute('versions');
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaProductVersion {
}

export function dataScmHipObjectAntiMalwareCriteriaProductVersionToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaProductVersionToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaProductVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaProductVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaProductVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // greater_equal - computed: true, optional: false, required: false
  public get greaterEqual() {
    return this.getStringAttribute('greater_equal');
  }

  // greater_than - computed: true, optional: false, required: false
  public get greaterThan() {
    return this.getStringAttribute('greater_than');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }

  // less_equal - computed: true, optional: false, required: false
  public get lessEqual() {
    return this.getStringAttribute('less_equal');
  }

  // less_than - computed: true, optional: false, required: false
  public get lessThan() {
    return this.getStringAttribute('less_than');
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectAntiMalwareCriteriaProductVersionNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectAntiMalwareCriteriaProductVersionWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithin {
}

export function dataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithinToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithinToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getNumberAttribute('versions');
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaVirdefVersionWithin {
}

export function dataScmHipObjectAntiMalwareCriteriaVirdefVersionWithinToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaVirdefVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaVirdefVersionWithinToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaVirdefVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaVirdefVersionWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaVirdefVersionWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaVirdefVersionWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getNumberAttribute('versions');
  }
}
export interface DataScmHipObjectAntiMalwareCriteriaVirdefVersion {
}

export function dataScmHipObjectAntiMalwareCriteriaVirdefVersionToTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaVirdefVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaVirdefVersionToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteriaVirdefVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaVirdefVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteriaVirdefVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteriaVirdefVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectAntiMalwareCriteriaVirdefVersionNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectAntiMalwareCriteriaVirdefVersionWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectAntiMalwareCriteria {
}

export function dataScmHipObjectAntiMalwareCriteriaToTerraform(struct?: DataScmHipObjectAntiMalwareCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareCriteriaToHclTerraform(struct?: DataScmHipObjectAntiMalwareCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalwareCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // last_scan_time - computed: true, optional: false, required: false
  private _lastScanTime = new DataScmHipObjectAntiMalwareCriteriaLastScanTimeOutputReference(this, "last_scan_time");
  public get lastScanTime() {
    return this._lastScanTime;
  }

  // product_version - computed: true, optional: false, required: false
  private _productVersion = new DataScmHipObjectAntiMalwareCriteriaProductVersionOutputReference(this, "product_version");
  public get productVersion() {
    return this._productVersion;
  }

  // real_time_protection - computed: true, optional: false, required: false
  public get realTimeProtection() {
    return this.getStringAttribute('real_time_protection');
  }

  // virdef_version - computed: true, optional: false, required: false
  private _virdefVersion = new DataScmHipObjectAntiMalwareCriteriaVirdefVersionOutputReference(this, "virdef_version");
  public get virdefVersion() {
    return this._virdefVersion;
  }
}
export interface DataScmHipObjectAntiMalwareVendor {
}

export function dataScmHipObjectAntiMalwareVendorToTerraform(struct?: DataScmHipObjectAntiMalwareVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareVendorToHclTerraform(struct?: DataScmHipObjectAntiMalwareVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectAntiMalwareVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalwareVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getListAttribute('product');
  }
}

export class DataScmHipObjectAntiMalwareVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectAntiMalwareVendorOutputReference {
    return new DataScmHipObjectAntiMalwareVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectAntiMalware {
}

export function dataScmHipObjectAntiMalwareToTerraform(struct?: DataScmHipObjectAntiMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectAntiMalwareToHclTerraform(struct?: DataScmHipObjectAntiMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectAntiMalware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectAntiMalware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectAntiMalwareCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectAntiMalwareVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectCertificateCriteriaCertificateAttributes {
}

export function dataScmHipObjectCertificateCriteriaCertificateAttributesToTerraform(struct?: DataScmHipObjectCertificateCriteriaCertificateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCertificateCriteriaCertificateAttributesToHclTerraform(struct?: DataScmHipObjectCertificateCriteriaCertificateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCertificateCriteriaCertificateAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectCertificateCriteriaCertificateAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCertificateCriteriaCertificateAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataScmHipObjectCertificateCriteriaCertificateAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectCertificateCriteriaCertificateAttributesOutputReference {
    return new DataScmHipObjectCertificateCriteriaCertificateAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectCertificateCriteria {
}

export function dataScmHipObjectCertificateCriteriaToTerraform(struct?: DataScmHipObjectCertificateCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCertificateCriteriaToHclTerraform(struct?: DataScmHipObjectCertificateCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCertificateCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectCertificateCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCertificateCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_attributes - computed: true, optional: false, required: false
  private _certificateAttributes = new DataScmHipObjectCertificateCriteriaCertificateAttributesList(this, "certificate_attributes", false);
  public get certificateAttributes() {
    return this._certificateAttributes;
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
}
export interface DataScmHipObjectCertificate {
}

export function dataScmHipObjectCertificateToTerraform(struct?: DataScmHipObjectCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCertificateToHclTerraform(struct?: DataScmHipObjectCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectCertificateCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectCustomChecksCriteriaPlistKey {
}

export function dataScmHipObjectCustomChecksCriteriaPlistKeyToTerraform(struct?: DataScmHipObjectCustomChecksCriteriaPlistKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCustomChecksCriteriaPlistKeyToHclTerraform(struct?: DataScmHipObjectCustomChecksCriteriaPlistKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCustomChecksCriteriaPlistKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectCustomChecksCriteriaPlistKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCustomChecksCriteriaPlistKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataScmHipObjectCustomChecksCriteriaPlistKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectCustomChecksCriteriaPlistKeyOutputReference {
    return new DataScmHipObjectCustomChecksCriteriaPlistKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectCustomChecksCriteriaPlistStruct {
}

export function dataScmHipObjectCustomChecksCriteriaPlistStructToTerraform(struct?: DataScmHipObjectCustomChecksCriteriaPlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCustomChecksCriteriaPlistStructToHclTerraform(struct?: DataScmHipObjectCustomChecksCriteriaPlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCustomChecksCriteriaPlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectCustomChecksCriteriaPlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCustomChecksCriteriaPlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  private _key = new DataScmHipObjectCustomChecksCriteriaPlistKeyList(this, "key", false);
  public get key() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
}

export class DataScmHipObjectCustomChecksCriteriaPlistStructList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectCustomChecksCriteriaPlistStructOutputReference {
    return new DataScmHipObjectCustomChecksCriteriaPlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectCustomChecksCriteriaProcessListStruct {
}

export function dataScmHipObjectCustomChecksCriteriaProcessListStructToTerraform(struct?: DataScmHipObjectCustomChecksCriteriaProcessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCustomChecksCriteriaProcessListStructToHclTerraform(struct?: DataScmHipObjectCustomChecksCriteriaProcessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCustomChecksCriteriaProcessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectCustomChecksCriteriaProcessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCustomChecksCriteriaProcessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }
}

export class DataScmHipObjectCustomChecksCriteriaProcessListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectCustomChecksCriteriaProcessListStructOutputReference {
    return new DataScmHipObjectCustomChecksCriteriaProcessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValue {
}

export function dataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValueToTerraform(struct?: DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValueToHclTerraform(struct?: DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // value_data - computed: true, optional: false, required: false
  public get valueData() {
    return this.getStringAttribute('value_data');
  }
}

export class DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValueList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValueOutputReference {
    return new DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectCustomChecksCriteriaRegistryKey {
}

export function dataScmHipObjectCustomChecksCriteriaRegistryKeyToTerraform(struct?: DataScmHipObjectCustomChecksCriteriaRegistryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCustomChecksCriteriaRegistryKeyToHclTerraform(struct?: DataScmHipObjectCustomChecksCriteriaRegistryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCustomChecksCriteriaRegistryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectCustomChecksCriteriaRegistryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCustomChecksCriteriaRegistryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value_data - computed: true, optional: false, required: false
  public get defaultValueData() {
    return this.getStringAttribute('default_value_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // registry_value - computed: true, optional: false, required: false
  private _registryValue = new DataScmHipObjectCustomChecksCriteriaRegistryKeyRegistryValueList(this, "registry_value", false);
  public get registryValue() {
    return this._registryValue;
  }
}

export class DataScmHipObjectCustomChecksCriteriaRegistryKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectCustomChecksCriteriaRegistryKeyOutputReference {
    return new DataScmHipObjectCustomChecksCriteriaRegistryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectCustomChecksCriteria {
}

export function dataScmHipObjectCustomChecksCriteriaToTerraform(struct?: DataScmHipObjectCustomChecksCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCustomChecksCriteriaToHclTerraform(struct?: DataScmHipObjectCustomChecksCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCustomChecksCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectCustomChecksCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCustomChecksCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plist - computed: true, optional: false, required: false
  private _plist = new DataScmHipObjectCustomChecksCriteriaPlistStructList(this, "plist", false);
  public get plist() {
    return this._plist;
  }

  // process_list - computed: true, optional: false, required: false
  private _processList = new DataScmHipObjectCustomChecksCriteriaProcessListStructList(this, "process_list", false);
  public get processList() {
    return this._processList;
  }

  // registry_key - computed: true, optional: false, required: false
  private _registryKey = new DataScmHipObjectCustomChecksCriteriaRegistryKeyList(this, "registry_key", false);
  public get registryKey() {
    return this._registryKey;
  }
}
export interface DataScmHipObjectCustomChecks {
}

export function dataScmHipObjectCustomChecksToTerraform(struct?: DataScmHipObjectCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectCustomChecksToHclTerraform(struct?: DataScmHipObjectCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectCustomChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectCustomChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectCustomChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectCustomChecksCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectDataLossPreventionCriteria {
}

export function dataScmHipObjectDataLossPreventionCriteriaToTerraform(struct?: DataScmHipObjectDataLossPreventionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDataLossPreventionCriteriaToHclTerraform(struct?: DataScmHipObjectDataLossPreventionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDataLossPreventionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDataLossPreventionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDataLossPreventionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
}
export interface DataScmHipObjectDataLossPreventionVendor {
}

export function dataScmHipObjectDataLossPreventionVendorToTerraform(struct?: DataScmHipObjectDataLossPreventionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDataLossPreventionVendorToHclTerraform(struct?: DataScmHipObjectDataLossPreventionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDataLossPreventionVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectDataLossPreventionVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDataLossPreventionVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getListAttribute('product');
  }
}

export class DataScmHipObjectDataLossPreventionVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectDataLossPreventionVendorOutputReference {
    return new DataScmHipObjectDataLossPreventionVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectDataLossPrevention {
}

export function dataScmHipObjectDataLossPreventionToTerraform(struct?: DataScmHipObjectDataLossPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDataLossPreventionToHclTerraform(struct?: DataScmHipObjectDataLossPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDataLossPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDataLossPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDataLossPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectDataLossPreventionCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectDataLossPreventionVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailable {
}

export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailableToTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailableToHclTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithin {
}

export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithinToTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithinToHclTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }
}
export interface DataScmHipObjectDiskBackupCriteriaLastBackupTimeWithin {
}

export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeWithinToTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeWithinToHclTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskBackupCriteriaLastBackupTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskBackupCriteriaLastBackupTimeWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskBackupCriteriaLastBackupTimeWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }
}
export interface DataScmHipObjectDiskBackupCriteriaLastBackupTime {
}

export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeToTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskBackupCriteriaLastBackupTimeToHclTerraform(struct?: DataScmHipObjectDiskBackupCriteriaLastBackupTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskBackupCriteriaLastBackupTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskBackupCriteriaLastBackupTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskBackupCriteriaLastBackupTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_available - computed: true, optional: false, required: false
  private _notAvailable = new DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotAvailableOutputReference(this, "not_available");
  public get notAvailable() {
    return this._notAvailable;
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectDiskBackupCriteriaLastBackupTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectDiskBackupCriteriaLastBackupTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectDiskBackupCriteria {
}

export function dataScmHipObjectDiskBackupCriteriaToTerraform(struct?: DataScmHipObjectDiskBackupCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskBackupCriteriaToHclTerraform(struct?: DataScmHipObjectDiskBackupCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskBackupCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskBackupCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskBackupCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // last_backup_time - computed: true, optional: false, required: false
  private _lastBackupTime = new DataScmHipObjectDiskBackupCriteriaLastBackupTimeOutputReference(this, "last_backup_time");
  public get lastBackupTime() {
    return this._lastBackupTime;
  }
}
export interface DataScmHipObjectDiskBackupVendor {
}

export function dataScmHipObjectDiskBackupVendorToTerraform(struct?: DataScmHipObjectDiskBackupVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskBackupVendorToHclTerraform(struct?: DataScmHipObjectDiskBackupVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskBackupVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectDiskBackupVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskBackupVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getListAttribute('product');
  }
}

export class DataScmHipObjectDiskBackupVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectDiskBackupVendorOutputReference {
    return new DataScmHipObjectDiskBackupVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectDiskBackup {
}

export function dataScmHipObjectDiskBackupToTerraform(struct?: DataScmHipObjectDiskBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskBackupToHclTerraform(struct?: DataScmHipObjectDiskBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectDiskBackupCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectDiskBackupVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState {
}

export function dataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToTerraform(struct?: DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToHclTerraform(struct?: DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectDiskEncryptionCriteriaEncryptedLocations {
}

export function dataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsToTerraform(struct?: DataScmHipObjectDiskEncryptionCriteriaEncryptedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsToHclTerraform(struct?: DataScmHipObjectDiskEncryptionCriteriaEncryptedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectDiskEncryptionCriteriaEncryptedLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskEncryptionCriteriaEncryptedLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_state - computed: true, optional: false, required: false
  private _encryptionState = new DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsEncryptionStateOutputReference(this, "encryption_state");
  public get encryptionState() {
    return this._encryptionState;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsOutputReference {
    return new DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectDiskEncryptionCriteria {
}

export function dataScmHipObjectDiskEncryptionCriteriaToTerraform(struct?: DataScmHipObjectDiskEncryptionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskEncryptionCriteriaToHclTerraform(struct?: DataScmHipObjectDiskEncryptionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskEncryptionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskEncryptionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskEncryptionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_locations - computed: true, optional: false, required: false
  private _encryptedLocations = new DataScmHipObjectDiskEncryptionCriteriaEncryptedLocationsList(this, "encrypted_locations", false);
  public get encryptedLocations() {
    return this._encryptedLocations;
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
}
export interface DataScmHipObjectDiskEncryptionVendor {
}

export function dataScmHipObjectDiskEncryptionVendorToTerraform(struct?: DataScmHipObjectDiskEncryptionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskEncryptionVendorToHclTerraform(struct?: DataScmHipObjectDiskEncryptionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskEncryptionVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectDiskEncryptionVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskEncryptionVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getListAttribute('product');
  }
}

export class DataScmHipObjectDiskEncryptionVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectDiskEncryptionVendorOutputReference {
    return new DataScmHipObjectDiskEncryptionVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectDiskEncryption {
}

export function dataScmHipObjectDiskEncryptionToTerraform(struct?: DataScmHipObjectDiskEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectDiskEncryptionToHclTerraform(struct?: DataScmHipObjectDiskEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectDiskEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectDiskEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectDiskEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectDiskEncryptionCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectDiskEncryptionVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectFirewallCriteria {
}

export function dataScmHipObjectFirewallCriteriaToTerraform(struct?: DataScmHipObjectFirewallCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectFirewallCriteriaToHclTerraform(struct?: DataScmHipObjectFirewallCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectFirewallCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectFirewallCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectFirewallCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
}
export interface DataScmHipObjectFirewallVendor {
}

export function dataScmHipObjectFirewallVendorToTerraform(struct?: DataScmHipObjectFirewallVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectFirewallVendorToHclTerraform(struct?: DataScmHipObjectFirewallVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectFirewallVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectFirewallVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectFirewallVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getListAttribute('product');
  }
}

export class DataScmHipObjectFirewallVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectFirewallVendorOutputReference {
    return new DataScmHipObjectFirewallVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectFirewall {
}

export function dataScmHipObjectFirewallToTerraform(struct?: DataScmHipObjectFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectFirewallToHclTerraform(struct?: DataScmHipObjectFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectFirewallCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectFirewallVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectHostInfoCriteriaClientVersion {
}

export function dataScmHipObjectHostInfoCriteriaClientVersionToTerraform(struct?: DataScmHipObjectHostInfoCriteriaClientVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaClientVersionToHclTerraform(struct?: DataScmHipObjectHostInfoCriteriaClientVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaClientVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteriaClientVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteriaClientVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectHostInfoCriteriaDomain {
}

export function dataScmHipObjectHostInfoCriteriaDomainToTerraform(struct?: DataScmHipObjectHostInfoCriteriaDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaDomainToHclTerraform(struct?: DataScmHipObjectHostInfoCriteriaDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteriaDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteriaDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectHostInfoCriteriaHostId {
}

export function dataScmHipObjectHostInfoCriteriaHostIdToTerraform(struct?: DataScmHipObjectHostInfoCriteriaHostId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaHostIdToHclTerraform(struct?: DataScmHipObjectHostInfoCriteriaHostId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaHostIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteriaHostId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteriaHostId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectHostInfoCriteriaHostName {
}

export function dataScmHipObjectHostInfoCriteriaHostNameToTerraform(struct?: DataScmHipObjectHostInfoCriteriaHostName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaHostNameToHclTerraform(struct?: DataScmHipObjectHostInfoCriteriaHostName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaHostNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteriaHostName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteriaHostName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectHostInfoCriteriaOsContains {
}

export function dataScmHipObjectHostInfoCriteriaOsContainsToTerraform(struct?: DataScmHipObjectHostInfoCriteriaOsContains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaOsContainsToHclTerraform(struct?: DataScmHipObjectHostInfoCriteriaOsContains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaOsContainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteriaOsContains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteriaOsContains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apple - computed: true, optional: false, required: false
  public get apple() {
    return this.getStringAttribute('apple');
  }

  // google - computed: true, optional: false, required: false
  public get google() {
    return this.getStringAttribute('google');
  }

  // linux - computed: true, optional: false, required: false
  public get linux() {
    return this.getStringAttribute('linux');
  }

  // microsoft - computed: true, optional: false, required: false
  public get microsoft() {
    return this.getStringAttribute('microsoft');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getStringAttribute('other');
  }
}
export interface DataScmHipObjectHostInfoCriteriaOs {
}

export function dataScmHipObjectHostInfoCriteriaOsToTerraform(struct?: DataScmHipObjectHostInfoCriteriaOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaOsToHclTerraform(struct?: DataScmHipObjectHostInfoCriteriaOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteriaOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteriaOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  private _contains = new DataScmHipObjectHostInfoCriteriaOsContainsOutputReference(this, "contains");
  public get contains() {
    return this._contains;
  }
}
export interface DataScmHipObjectHostInfoCriteriaSerialNumber {
}

export function dataScmHipObjectHostInfoCriteriaSerialNumberToTerraform(struct?: DataScmHipObjectHostInfoCriteriaSerialNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaSerialNumberToHclTerraform(struct?: DataScmHipObjectHostInfoCriteriaSerialNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaSerialNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteriaSerialNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteriaSerialNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectHostInfoCriteria {
}

export function dataScmHipObjectHostInfoCriteriaToTerraform(struct?: DataScmHipObjectHostInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoCriteriaToHclTerraform(struct?: DataScmHipObjectHostInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfoCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfoCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_version - computed: true, optional: false, required: false
  private _clientVersion = new DataScmHipObjectHostInfoCriteriaClientVersionOutputReference(this, "client_version");
  public get clientVersion() {
    return this._clientVersion;
  }

  // domain - computed: true, optional: false, required: false
  private _domain = new DataScmHipObjectHostInfoCriteriaDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }

  // host_id - computed: true, optional: false, required: false
  private _hostId = new DataScmHipObjectHostInfoCriteriaHostIdOutputReference(this, "host_id");
  public get hostId() {
    return this._hostId;
  }

  // host_name - computed: true, optional: false, required: false
  private _hostName = new DataScmHipObjectHostInfoCriteriaHostNameOutputReference(this, "host_name");
  public get hostName() {
    return this._hostName;
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // os - computed: true, optional: false, required: false
  private _os = new DataScmHipObjectHostInfoCriteriaOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }

  // serial_number - computed: true, optional: false, required: false
  private _serialNumber = new DataScmHipObjectHostInfoCriteriaSerialNumberOutputReference(this, "serial_number");
  public get serialNumber() {
    return this._serialNumber;
  }
}
export interface DataScmHipObjectHostInfo {
}

export function dataScmHipObjectHostInfoToTerraform(struct?: DataScmHipObjectHostInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectHostInfoToHclTerraform(struct?: DataScmHipObjectHostInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectHostInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectHostInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectHostInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectHostInfoCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNo {
}

export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNoToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNoToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes {
}

export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package - computed: true, optional: false, required: false
  public get package() {
    return this.getStringAttribute('package');
  }
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference {
    return new DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYes {
}

export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  private _excludes = new DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesExcludesList(this, "excludes", false);
  public get excludes() {
    return this._excludes;
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalware {
}

export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no - computed: true, optional: false, required: false
  private _no = new DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }

  // yes - computed: true, optional: false, required: false
  private _yes = new DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaApplicationsIncludes {
}

export function dataScmHipObjectMobileDeviceCriteriaApplicationsIncludesToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaApplicationsIncludesToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplicationsIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaApplicationsIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaApplicationsIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package - computed: true, optional: false, required: false
  public get package() {
    return this.getStringAttribute('package');
  }
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsIncludesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectMobileDeviceCriteriaApplicationsIncludesOutputReference {
    return new DataScmHipObjectMobileDeviceCriteriaApplicationsIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaApplications {
}

export function dataScmHipObjectMobileDeviceCriteriaApplicationsToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaApplicationsToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_malware - computed: true, optional: false, required: false
  private _hasMalware = new DataScmHipObjectMobileDeviceCriteriaApplicationsHasMalwareOutputReference(this, "has_malware");
  public get hasMalware() {
    return this._hasMalware;
  }

  // has_unmanaged_app - computed: true, optional: false, required: false
  public get hasUnmanagedApp() {
    return this.getBooleanAttribute('has_unmanaged_app');
  }

  // includes - computed: true, optional: false, required: false
  private _includes = new DataScmHipObjectMobileDeviceCriteriaApplicationsIncludesList(this, "includes", false);
  public get includes() {
    return this._includes;
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaImei {
}

export function dataScmHipObjectMobileDeviceCriteriaImeiToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaImei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaImeiToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaImei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaImeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaImei | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaImei | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin {
}

export function dataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithin {
}

export function dataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithinToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithinToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaLastCheckinTime {
}

export function dataScmHipObjectMobileDeviceCriteriaLastCheckinTimeToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaLastCheckinTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaLastCheckinTimeToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaLastCheckinTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaLastCheckinTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaLastCheckinTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaModel {
}

export function dataScmHipObjectMobileDeviceCriteriaModelToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaModelToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaPhoneNumber {
}

export function dataScmHipObjectMobileDeviceCriteriaPhoneNumberToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaPhoneNumberToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaPhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectMobileDeviceCriteriaTag {
}

export function dataScmHipObjectMobileDeviceCriteriaTagToTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaTagToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteriaTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteriaTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteriaTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getStringAttribute('contains');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getStringAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getStringAttribute('is_not');
  }
}
export interface DataScmHipObjectMobileDeviceCriteria {
}

export function dataScmHipObjectMobileDeviceCriteriaToTerraform(struct?: DataScmHipObjectMobileDeviceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceCriteriaToHclTerraform(struct?: DataScmHipObjectMobileDeviceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDeviceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDeviceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  private _applications = new DataScmHipObjectMobileDeviceCriteriaApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }

  // disk_encrypted - computed: true, optional: false, required: false
  public get diskEncrypted() {
    return this.getBooleanAttribute('disk_encrypted');
  }

  // imei - computed: true, optional: false, required: false
  private _imei = new DataScmHipObjectMobileDeviceCriteriaImeiOutputReference(this, "imei");
  public get imei() {
    return this._imei;
  }

  // jailbroken - computed: true, optional: false, required: false
  public get jailbroken() {
    return this.getBooleanAttribute('jailbroken');
  }

  // last_checkin_time - computed: true, optional: false, required: false
  private _lastCheckinTime = new DataScmHipObjectMobileDeviceCriteriaLastCheckinTimeOutputReference(this, "last_checkin_time");
  public get lastCheckinTime() {
    return this._lastCheckinTime;
  }

  // model - computed: true, optional: false, required: false
  private _model = new DataScmHipObjectMobileDeviceCriteriaModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }

  // passcode_set - computed: true, optional: false, required: false
  public get passcodeSet() {
    return this.getBooleanAttribute('passcode_set');
  }

  // phone_number - computed: true, optional: false, required: false
  private _phoneNumber = new DataScmHipObjectMobileDeviceCriteriaPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataScmHipObjectMobileDeviceCriteriaTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
}
export interface DataScmHipObjectMobileDevice {
}

export function dataScmHipObjectMobileDeviceToTerraform(struct?: DataScmHipObjectMobileDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectMobileDeviceToHclTerraform(struct?: DataScmHipObjectMobileDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectMobileDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectMobileDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectMobileDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectMobileDeviceCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsMobile {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsMobileToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsMobileToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // carrier - computed: true, optional: false, required: false
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsUnknown {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsUnknownToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsUnknownToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsUnknown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsUnknown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsWifi {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsWifiToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsWifiToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsWifi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsWifi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIs {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mobile - computed: true, optional: false, required: false
  private _mobile = new DataScmHipObjectNetworkInfoCriteriaNetworkIsMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }

  // unknown - computed: true, optional: false, required: false
  private _unknown = new DataScmHipObjectNetworkInfoCriteriaNetworkIsUnknownOutputReference(this, "unknown");
  public get unknown() {
    return this._unknown;
  }

  // wifi - computed: true, optional: false, required: false
  private _wifi = new DataScmHipObjectNetworkInfoCriteriaNetworkIsWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernet {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernetToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernetToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobile {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobileToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobileToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // carrier - computed: true, optional: false, required: false
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknown {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknownToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknownToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifi {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifiToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifiToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetworkIsNot {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkIsNotToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetworkIsNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkIsNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetworkIsNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetworkIsNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ethernet - computed: true, optional: false, required: false
  private _ethernet = new DataScmHipObjectNetworkInfoCriteriaNetworkIsNotEthernetOutputReference(this, "ethernet");
  public get ethernet() {
    return this._ethernet;
  }

  // mobile - computed: true, optional: false, required: false
  private _mobile = new DataScmHipObjectNetworkInfoCriteriaNetworkIsNotMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }

  // unknown - computed: true, optional: false, required: false
  private _unknown = new DataScmHipObjectNetworkInfoCriteriaNetworkIsNotUnknownOutputReference(this, "unknown");
  public get unknown() {
    return this._unknown;
  }

  // wifi - computed: true, optional: false, required: false
  private _wifi = new DataScmHipObjectNetworkInfoCriteriaNetworkIsNotWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
}
export interface DataScmHipObjectNetworkInfoCriteriaNetwork {
}

export function dataScmHipObjectNetworkInfoCriteriaNetworkToTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaNetworkToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteriaNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteriaNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteriaNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is - computed: true, optional: false, required: false
  private _is = new DataScmHipObjectNetworkInfoCriteriaNetworkIsOutputReference(this, "is");
  public get is() {
    return this._is;
  }

  // is_not - computed: true, optional: false, required: false
  private _isNot = new DataScmHipObjectNetworkInfoCriteriaNetworkIsNotOutputReference(this, "is_not");
  public get isNot() {
    return this._isNot;
  }
}
export interface DataScmHipObjectNetworkInfoCriteria {
}

export function dataScmHipObjectNetworkInfoCriteriaToTerraform(struct?: DataScmHipObjectNetworkInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoCriteriaToHclTerraform(struct?: DataScmHipObjectNetworkInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfoCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfoCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataScmHipObjectNetworkInfoCriteriaNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
}
export interface DataScmHipObjectNetworkInfo {
}

export function dataScmHipObjectNetworkInfoToTerraform(struct?: DataScmHipObjectNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectNetworkInfoToHclTerraform(struct?: DataScmHipObjectNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectNetworkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectNetworkInfoCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectPatchManagementCriteriaMissingPatchesSeverity {
}

export function dataScmHipObjectPatchManagementCriteriaMissingPatchesSeverityToTerraform(struct?: DataScmHipObjectPatchManagementCriteriaMissingPatchesSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectPatchManagementCriteriaMissingPatchesSeverityToHclTerraform(struct?: DataScmHipObjectPatchManagementCriteriaMissingPatchesSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectPatchManagementCriteriaMissingPatchesSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectPatchManagementCriteriaMissingPatchesSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectPatchManagementCriteriaMissingPatchesSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // greater_equal - computed: true, optional: false, required: false
  public get greaterEqual() {
    return this.getNumberAttribute('greater_equal');
  }

  // greater_than - computed: true, optional: false, required: false
  public get greaterThan() {
    return this.getNumberAttribute('greater_than');
  }

  // is - computed: true, optional: false, required: false
  public get is() {
    return this.getNumberAttribute('is');
  }

  // is_not - computed: true, optional: false, required: false
  public get isNot() {
    return this.getNumberAttribute('is_not');
  }

  // less_equal - computed: true, optional: false, required: false
  public get lessEqual() {
    return this.getNumberAttribute('less_equal');
  }

  // less_than - computed: true, optional: false, required: false
  public get lessThan() {
    return this.getNumberAttribute('less_than');
  }
}
export interface DataScmHipObjectPatchManagementCriteriaMissingPatches {
}

export function dataScmHipObjectPatchManagementCriteriaMissingPatchesToTerraform(struct?: DataScmHipObjectPatchManagementCriteriaMissingPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectPatchManagementCriteriaMissingPatchesToHclTerraform(struct?: DataScmHipObjectPatchManagementCriteriaMissingPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectPatchManagementCriteriaMissingPatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectPatchManagementCriteriaMissingPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectPatchManagementCriteriaMissingPatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getStringAttribute('check');
  }

  // patches - computed: true, optional: false, required: false
  public get patches() {
    return this.getListAttribute('patches');
  }

  // severity - computed: true, optional: false, required: false
  private _severity = new DataScmHipObjectPatchManagementCriteriaMissingPatchesSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
}
export interface DataScmHipObjectPatchManagementCriteria {
}

export function dataScmHipObjectPatchManagementCriteriaToTerraform(struct?: DataScmHipObjectPatchManagementCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectPatchManagementCriteriaToHclTerraform(struct?: DataScmHipObjectPatchManagementCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectPatchManagementCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectPatchManagementCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectPatchManagementCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // missing_patches - computed: true, optional: false, required: false
  private _missingPatches = new DataScmHipObjectPatchManagementCriteriaMissingPatchesOutputReference(this, "missing_patches");
  public get missingPatches() {
    return this._missingPatches;
  }
}
export interface DataScmHipObjectPatchManagementVendor {
}

export function dataScmHipObjectPatchManagementVendorToTerraform(struct?: DataScmHipObjectPatchManagementVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectPatchManagementVendorToHclTerraform(struct?: DataScmHipObjectPatchManagementVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectPatchManagementVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectPatchManagementVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectPatchManagementVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getListAttribute('product');
  }
}

export class DataScmHipObjectPatchManagementVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectPatchManagementVendorOutputReference {
    return new DataScmHipObjectPatchManagementVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectPatchManagement {
}

export function dataScmHipObjectPatchManagementToTerraform(struct?: DataScmHipObjectPatchManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectPatchManagementToHclTerraform(struct?: DataScmHipObjectPatchManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectPatchManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectPatchManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectPatchManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectPatchManagementCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectPatchManagementVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/hip_object scm_hip_object}
*/
export class DataScmHipObject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_hip_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmHipObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmHipObject to import
  * @param importFromId The id of the existing DataScmHipObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/hip_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmHipObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_hip_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/hip_object scm_hip_object} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmHipObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmHipObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_hip_object',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_malware - computed: true, optional: false, required: false
  private _antiMalware = new DataScmHipObjectAntiMalwareOutputReference(this, "anti_malware");
  public get antiMalware() {
    return this._antiMalware;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataScmHipObjectCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }

  // custom_checks - computed: true, optional: false, required: false
  private _customChecks = new DataScmHipObjectCustomChecksOutputReference(this, "custom_checks");
  public get customChecks() {
    return this._customChecks;
  }

  // data_loss_prevention - computed: true, optional: false, required: false
  private _dataLossPrevention = new DataScmHipObjectDataLossPreventionOutputReference(this, "data_loss_prevention");
  public get dataLossPrevention() {
    return this._dataLossPrevention;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // disk_backup - computed: true, optional: false, required: false
  private _diskBackup = new DataScmHipObjectDiskBackupOutputReference(this, "disk_backup");
  public get diskBackup() {
    return this._diskBackup;
  }

  // disk_encryption - computed: true, optional: false, required: false
  private _diskEncryption = new DataScmHipObjectDiskEncryptionOutputReference(this, "disk_encryption");
  public get diskEncryption() {
    return this._diskEncryption;
  }

  // firewall - computed: true, optional: false, required: false
  private _firewall = new DataScmHipObjectFirewallOutputReference(this, "firewall");
  public get firewall() {
    return this._firewall;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // host_info - computed: true, optional: false, required: false
  private _hostInfo = new DataScmHipObjectHostInfoOutputReference(this, "host_info");
  public get hostInfo() {
    return this._hostInfo;
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

  // mobile_device - computed: true, optional: false, required: false
  private _mobileDevice = new DataScmHipObjectMobileDeviceOutputReference(this, "mobile_device");
  public get mobileDevice() {
    return this._mobileDevice;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_info - computed: true, optional: false, required: false
  private _networkInfo = new DataScmHipObjectNetworkInfoOutputReference(this, "network_info");
  public get networkInfo() {
    return this._networkInfo;
  }

  // patch_management - computed: true, optional: false, required: false
  private _patchManagement = new DataScmHipObjectPatchManagementOutputReference(this, "patch_management");
  public get patchManagement() {
    return this._patchManagement;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
