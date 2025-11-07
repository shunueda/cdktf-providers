// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmHipObjectListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#device DataScmHipObjectList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#folder DataScmHipObjectList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#limit DataScmHipObjectList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#name DataScmHipObjectList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#offset DataScmHipObjectList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#snippet DataScmHipObjectList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailable {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailableToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailableToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithin {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithinToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithinToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithin | undefined) {
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
export interface DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithin {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithinToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithinToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithin | undefined) {
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
export interface DataScmHipObjectListDataAntiMalwareCriteriaLastScanTime {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaLastScanTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaLastScanTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_available - computed: true, optional: false, required: false
  private _notAvailable = new DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotAvailableOutputReference(this, "not_available");
  public get notAvailable() {
    return this._notAvailable;
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithin {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithinToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithinToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithin | undefined) {
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
export interface DataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithin {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithinToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithinToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithin | undefined) {
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
export interface DataScmHipObjectListDataAntiMalwareCriteriaProductVersion {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaProductVersionToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaProductVersionToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaProductVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaProductVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaProductVersion | undefined) {
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
  private _notWithin = new DataScmHipObjectListDataAntiMalwareCriteriaProductVersionNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectListDataAntiMalwareCriteriaProductVersionWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithin {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithinToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithinToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithin | undefined) {
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
export interface DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithin {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithinToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithinToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithin | undefined) {
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
export interface DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersion {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectListDataAntiMalwareCriteria {
}

export function dataScmHipObjectListDataAntiMalwareCriteriaToTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareCriteriaToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalwareCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareCriteria | undefined) {
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
  private _lastScanTime = new DataScmHipObjectListDataAntiMalwareCriteriaLastScanTimeOutputReference(this, "last_scan_time");
  public get lastScanTime() {
    return this._lastScanTime;
  }

  // product_version - computed: true, optional: false, required: false
  private _productVersion = new DataScmHipObjectListDataAntiMalwareCriteriaProductVersionOutputReference(this, "product_version");
  public get productVersion() {
    return this._productVersion;
  }

  // real_time_protection - computed: true, optional: false, required: false
  public get realTimeProtection() {
    return this.getStringAttribute('real_time_protection');
  }

  // virdef_version - computed: true, optional: false, required: false
  private _virdefVersion = new DataScmHipObjectListDataAntiMalwareCriteriaVirdefVersionOutputReference(this, "virdef_version");
  public get virdefVersion() {
    return this._virdefVersion;
  }
}
export interface DataScmHipObjectListDataAntiMalwareVendor {
}

export function dataScmHipObjectListDataAntiMalwareVendorToTerraform(struct?: DataScmHipObjectListDataAntiMalwareVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareVendorToHclTerraform(struct?: DataScmHipObjectListDataAntiMalwareVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataAntiMalwareVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalwareVendor | undefined) {
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

export class DataScmHipObjectListDataAntiMalwareVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataAntiMalwareVendorOutputReference {
    return new DataScmHipObjectListDataAntiMalwareVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataAntiMalware {
}

export function dataScmHipObjectListDataAntiMalwareToTerraform(struct?: DataScmHipObjectListDataAntiMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataAntiMalwareToHclTerraform(struct?: DataScmHipObjectListDataAntiMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataAntiMalware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataAntiMalware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataAntiMalwareCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectListDataAntiMalwareVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectListDataCertificateCriteriaCertificateAttributes {
}

export function dataScmHipObjectListDataCertificateCriteriaCertificateAttributesToTerraform(struct?: DataScmHipObjectListDataCertificateCriteriaCertificateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCertificateCriteriaCertificateAttributesToHclTerraform(struct?: DataScmHipObjectListDataCertificateCriteriaCertificateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCertificateCriteriaCertificateAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataCertificateCriteriaCertificateAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCertificateCriteriaCertificateAttributes | undefined) {
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

export class DataScmHipObjectListDataCertificateCriteriaCertificateAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataCertificateCriteriaCertificateAttributesOutputReference {
    return new DataScmHipObjectListDataCertificateCriteriaCertificateAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataCertificateCriteria {
}

export function dataScmHipObjectListDataCertificateCriteriaToTerraform(struct?: DataScmHipObjectListDataCertificateCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCertificateCriteriaToHclTerraform(struct?: DataScmHipObjectListDataCertificateCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCertificateCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataCertificateCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCertificateCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_attributes - computed: true, optional: false, required: false
  private _certificateAttributes = new DataScmHipObjectListDataCertificateCriteriaCertificateAttributesList(this, "certificate_attributes", false);
  public get certificateAttributes() {
    return this._certificateAttributes;
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
}
export interface DataScmHipObjectListDataCertificate {
}

export function dataScmHipObjectListDataCertificateToTerraform(struct?: DataScmHipObjectListDataCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCertificateToHclTerraform(struct?: DataScmHipObjectListDataCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataCertificateCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectListDataCustomChecksCriteriaPlistKey {
}

export function dataScmHipObjectListDataCustomChecksCriteriaPlistKeyToTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaPlistKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCustomChecksCriteriaPlistKeyToHclTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaPlistKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCustomChecksCriteriaPlistKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataCustomChecksCriteriaPlistKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCustomChecksCriteriaPlistKey | undefined) {
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

export class DataScmHipObjectListDataCustomChecksCriteriaPlistKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataCustomChecksCriteriaPlistKeyOutputReference {
    return new DataScmHipObjectListDataCustomChecksCriteriaPlistKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataCustomChecksCriteriaPlistStruct {
}

export function dataScmHipObjectListDataCustomChecksCriteriaPlistStructToTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaPlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCustomChecksCriteriaPlistStructToHclTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaPlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCustomChecksCriteriaPlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataCustomChecksCriteriaPlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCustomChecksCriteriaPlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  private _key = new DataScmHipObjectListDataCustomChecksCriteriaPlistKeyList(this, "key", false);
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

export class DataScmHipObjectListDataCustomChecksCriteriaPlistStructList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataCustomChecksCriteriaPlistStructOutputReference {
    return new DataScmHipObjectListDataCustomChecksCriteriaPlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataCustomChecksCriteriaProcessListStruct {
}

export function dataScmHipObjectListDataCustomChecksCriteriaProcessListStructToTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaProcessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCustomChecksCriteriaProcessListStructToHclTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaProcessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCustomChecksCriteriaProcessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataCustomChecksCriteriaProcessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCustomChecksCriteriaProcessListStruct | undefined) {
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

export class DataScmHipObjectListDataCustomChecksCriteriaProcessListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataCustomChecksCriteriaProcessListStructOutputReference {
    return new DataScmHipObjectListDataCustomChecksCriteriaProcessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValue {
}

export function dataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValueToTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValueToHclTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValue | undefined) {
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

export class DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValueList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValueOutputReference {
    return new DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataCustomChecksCriteriaRegistryKey {
}

export function dataScmHipObjectListDataCustomChecksCriteriaRegistryKeyToTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaRegistryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCustomChecksCriteriaRegistryKeyToHclTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteriaRegistryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataCustomChecksCriteriaRegistryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCustomChecksCriteriaRegistryKey | undefined) {
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
  private _registryValue = new DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyRegistryValueList(this, "registry_value", false);
  public get registryValue() {
    return this._registryValue;
  }
}

export class DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyOutputReference {
    return new DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataCustomChecksCriteria {
}

export function dataScmHipObjectListDataCustomChecksCriteriaToTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCustomChecksCriteriaToHclTerraform(struct?: DataScmHipObjectListDataCustomChecksCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCustomChecksCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataCustomChecksCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCustomChecksCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plist - computed: true, optional: false, required: false
  private _plist = new DataScmHipObjectListDataCustomChecksCriteriaPlistStructList(this, "plist", false);
  public get plist() {
    return this._plist;
  }

  // process_list - computed: true, optional: false, required: false
  private _processList = new DataScmHipObjectListDataCustomChecksCriteriaProcessListStructList(this, "process_list", false);
  public get processList() {
    return this._processList;
  }

  // registry_key - computed: true, optional: false, required: false
  private _registryKey = new DataScmHipObjectListDataCustomChecksCriteriaRegistryKeyList(this, "registry_key", false);
  public get registryKey() {
    return this._registryKey;
  }
}
export interface DataScmHipObjectListDataCustomChecks {
}

export function dataScmHipObjectListDataCustomChecksToTerraform(struct?: DataScmHipObjectListDataCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataCustomChecksToHclTerraform(struct?: DataScmHipObjectListDataCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataCustomChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataCustomChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataCustomChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataCustomChecksCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectListDataDataLossPreventionCriteria {
}

export function dataScmHipObjectListDataDataLossPreventionCriteriaToTerraform(struct?: DataScmHipObjectListDataDataLossPreventionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDataLossPreventionCriteriaToHclTerraform(struct?: DataScmHipObjectListDataDataLossPreventionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDataLossPreventionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDataLossPreventionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDataLossPreventionCriteria | undefined) {
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
export interface DataScmHipObjectListDataDataLossPreventionVendor {
}

export function dataScmHipObjectListDataDataLossPreventionVendorToTerraform(struct?: DataScmHipObjectListDataDataLossPreventionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDataLossPreventionVendorToHclTerraform(struct?: DataScmHipObjectListDataDataLossPreventionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDataLossPreventionVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataDataLossPreventionVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDataLossPreventionVendor | undefined) {
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

export class DataScmHipObjectListDataDataLossPreventionVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataDataLossPreventionVendorOutputReference {
    return new DataScmHipObjectListDataDataLossPreventionVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataDataLossPrevention {
}

export function dataScmHipObjectListDataDataLossPreventionToTerraform(struct?: DataScmHipObjectListDataDataLossPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDataLossPreventionToHclTerraform(struct?: DataScmHipObjectListDataDataLossPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDataLossPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDataLossPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDataLossPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataDataLossPreventionCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectListDataDataLossPreventionVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailable {
}

export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailableToTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailableToHclTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithin {
}

export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithinToTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithinToHclTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithin | undefined) {
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
export interface DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithin {
}

export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithinToTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithinToHclTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithin | undefined) {
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
export interface DataScmHipObjectListDataDiskBackupCriteriaLastBackupTime {
}

export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeToTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeToHclTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskBackupCriteriaLastBackupTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskBackupCriteriaLastBackupTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_available - computed: true, optional: false, required: false
  private _notAvailable = new DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotAvailableOutputReference(this, "not_available");
  public get notAvailable() {
    return this._notAvailable;
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectListDataDiskBackupCriteria {
}

export function dataScmHipObjectListDataDiskBackupCriteriaToTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskBackupCriteriaToHclTerraform(struct?: DataScmHipObjectListDataDiskBackupCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskBackupCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskBackupCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskBackupCriteria | undefined) {
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
  private _lastBackupTime = new DataScmHipObjectListDataDiskBackupCriteriaLastBackupTimeOutputReference(this, "last_backup_time");
  public get lastBackupTime() {
    return this._lastBackupTime;
  }
}
export interface DataScmHipObjectListDataDiskBackupVendor {
}

export function dataScmHipObjectListDataDiskBackupVendorToTerraform(struct?: DataScmHipObjectListDataDiskBackupVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskBackupVendorToHclTerraform(struct?: DataScmHipObjectListDataDiskBackupVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskBackupVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataDiskBackupVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskBackupVendor | undefined) {
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

export class DataScmHipObjectListDataDiskBackupVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataDiskBackupVendorOutputReference {
    return new DataScmHipObjectListDataDiskBackupVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataDiskBackup {
}

export function dataScmHipObjectListDataDiskBackupToTerraform(struct?: DataScmHipObjectListDataDiskBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskBackupToHclTerraform(struct?: DataScmHipObjectListDataDiskBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataDiskBackupCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectListDataDiskBackupVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionState {
}

export function dataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToTerraform(struct?: DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionStateToHclTerraform(struct?: DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionState | undefined) {
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
export interface DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocations {
}

export function dataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsToTerraform(struct?: DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsToHclTerraform(struct?: DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_state - computed: true, optional: false, required: false
  private _encryptionState = new DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsEncryptionStateOutputReference(this, "encryption_state");
  public get encryptionState() {
    return this._encryptionState;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsOutputReference {
    return new DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataDiskEncryptionCriteria {
}

export function dataScmHipObjectListDataDiskEncryptionCriteriaToTerraform(struct?: DataScmHipObjectListDataDiskEncryptionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskEncryptionCriteriaToHclTerraform(struct?: DataScmHipObjectListDataDiskEncryptionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskEncryptionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskEncryptionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskEncryptionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_locations - computed: true, optional: false, required: false
  private _encryptedLocations = new DataScmHipObjectListDataDiskEncryptionCriteriaEncryptedLocationsList(this, "encrypted_locations", false);
  public get encryptedLocations() {
    return this._encryptedLocations;
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
}
export interface DataScmHipObjectListDataDiskEncryptionVendor {
}

export function dataScmHipObjectListDataDiskEncryptionVendorToTerraform(struct?: DataScmHipObjectListDataDiskEncryptionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskEncryptionVendorToHclTerraform(struct?: DataScmHipObjectListDataDiskEncryptionVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskEncryptionVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataDiskEncryptionVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskEncryptionVendor | undefined) {
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

export class DataScmHipObjectListDataDiskEncryptionVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataDiskEncryptionVendorOutputReference {
    return new DataScmHipObjectListDataDiskEncryptionVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataDiskEncryption {
}

export function dataScmHipObjectListDataDiskEncryptionToTerraform(struct?: DataScmHipObjectListDataDiskEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataDiskEncryptionToHclTerraform(struct?: DataScmHipObjectListDataDiskEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataDiskEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataDiskEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataDiskEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataDiskEncryptionCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectListDataDiskEncryptionVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectListDataFirewallCriteria {
}

export function dataScmHipObjectListDataFirewallCriteriaToTerraform(struct?: DataScmHipObjectListDataFirewallCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataFirewallCriteriaToHclTerraform(struct?: DataScmHipObjectListDataFirewallCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataFirewallCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataFirewallCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataFirewallCriteria | undefined) {
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
export interface DataScmHipObjectListDataFirewallVendor {
}

export function dataScmHipObjectListDataFirewallVendorToTerraform(struct?: DataScmHipObjectListDataFirewallVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataFirewallVendorToHclTerraform(struct?: DataScmHipObjectListDataFirewallVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataFirewallVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataFirewallVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataFirewallVendor | undefined) {
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

export class DataScmHipObjectListDataFirewallVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataFirewallVendorOutputReference {
    return new DataScmHipObjectListDataFirewallVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataFirewall {
}

export function dataScmHipObjectListDataFirewallToTerraform(struct?: DataScmHipObjectListDataFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataFirewallToHclTerraform(struct?: DataScmHipObjectListDataFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataFirewallCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectListDataFirewallVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectListDataHostInfoCriteriaClientVersion {
}

export function dataScmHipObjectListDataHostInfoCriteriaClientVersionToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaClientVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaClientVersionToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaClientVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaClientVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteriaClientVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteriaClientVersion | undefined) {
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
export interface DataScmHipObjectListDataHostInfoCriteriaDomain {
}

export function dataScmHipObjectListDataHostInfoCriteriaDomainToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaDomainToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteriaDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteriaDomain | undefined) {
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
export interface DataScmHipObjectListDataHostInfoCriteriaHostId {
}

export function dataScmHipObjectListDataHostInfoCriteriaHostIdToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaHostId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaHostIdToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaHostId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaHostIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteriaHostId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteriaHostId | undefined) {
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
export interface DataScmHipObjectListDataHostInfoCriteriaHostName {
}

export function dataScmHipObjectListDataHostInfoCriteriaHostNameToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaHostName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaHostNameToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaHostName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaHostNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteriaHostName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteriaHostName | undefined) {
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
export interface DataScmHipObjectListDataHostInfoCriteriaOsContains {
}

export function dataScmHipObjectListDataHostInfoCriteriaOsContainsToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaOsContains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaOsContainsToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaOsContains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaOsContainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteriaOsContains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteriaOsContains | undefined) {
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
export interface DataScmHipObjectListDataHostInfoCriteriaOs {
}

export function dataScmHipObjectListDataHostInfoCriteriaOsToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaOsToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteriaOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteriaOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains - computed: true, optional: false, required: false
  private _contains = new DataScmHipObjectListDataHostInfoCriteriaOsContainsOutputReference(this, "contains");
  public get contains() {
    return this._contains;
  }
}
export interface DataScmHipObjectListDataHostInfoCriteriaSerialNumber {
}

export function dataScmHipObjectListDataHostInfoCriteriaSerialNumberToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaSerialNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaSerialNumberToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteriaSerialNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaSerialNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteriaSerialNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteriaSerialNumber | undefined) {
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
export interface DataScmHipObjectListDataHostInfoCriteria {
}

export function dataScmHipObjectListDataHostInfoCriteriaToTerraform(struct?: DataScmHipObjectListDataHostInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoCriteriaToHclTerraform(struct?: DataScmHipObjectListDataHostInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfoCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfoCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_version - computed: true, optional: false, required: false
  private _clientVersion = new DataScmHipObjectListDataHostInfoCriteriaClientVersionOutputReference(this, "client_version");
  public get clientVersion() {
    return this._clientVersion;
  }

  // domain - computed: true, optional: false, required: false
  private _domain = new DataScmHipObjectListDataHostInfoCriteriaDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }

  // host_id - computed: true, optional: false, required: false
  private _hostId = new DataScmHipObjectListDataHostInfoCriteriaHostIdOutputReference(this, "host_id");
  public get hostId() {
    return this._hostId;
  }

  // host_name - computed: true, optional: false, required: false
  private _hostName = new DataScmHipObjectListDataHostInfoCriteriaHostNameOutputReference(this, "host_name");
  public get hostName() {
    return this._hostName;
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // os - computed: true, optional: false, required: false
  private _os = new DataScmHipObjectListDataHostInfoCriteriaOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }

  // serial_number - computed: true, optional: false, required: false
  private _serialNumber = new DataScmHipObjectListDataHostInfoCriteriaSerialNumberOutputReference(this, "serial_number");
  public get serialNumber() {
    return this._serialNumber;
  }
}
export interface DataScmHipObjectListDataHostInfo {
}

export function dataScmHipObjectListDataHostInfoToTerraform(struct?: DataScmHipObjectListDataHostInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataHostInfoToHclTerraform(struct?: DataScmHipObjectListDataHostInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataHostInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataHostInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataHostInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataHostInfoCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNo {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNoToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNoToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludes {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludesToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludes | undefined) {
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

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference {
    return new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYes {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  private _excludes = new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesExcludesList(this, "excludes", false);
  public get excludes() {
    return this._excludes;
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalware {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no - computed: true, optional: false, required: false
  private _no = new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }

  // yes - computed: true, optional: false, required: false
  private _yes = new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludes {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludesToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludesToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludes | undefined) {
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

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludesOutputReference {
    return new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaApplications {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaApplicationsToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_malware - computed: true, optional: false, required: false
  private _hasMalware = new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsHasMalwareOutputReference(this, "has_malware");
  public get hasMalware() {
    return this._hasMalware;
  }

  // has_unmanaged_app - computed: true, optional: false, required: false
  public get hasUnmanagedApp() {
    return this.getBooleanAttribute('has_unmanaged_app');
  }

  // includes - computed: true, optional: false, required: false
  private _includes = new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsIncludesList(this, "includes", false);
  public get includes() {
    return this._includes;
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaImei {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaImeiToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaImei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaImeiToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaImei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaImeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaImei | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaImei | undefined) {
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
export interface DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithin {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithinToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithinToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithin | undefined) {
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
export interface DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithin {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithinToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithinToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithin | undefined) {
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
export interface DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTime {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_within - computed: true, optional: false, required: false
  private _notWithin = new DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeNotWithinOutputReference(this, "not_within");
  public get notWithin() {
    return this._notWithin;
  }

  // within - computed: true, optional: false, required: false
  private _within = new DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeWithinOutputReference(this, "within");
  public get within() {
    return this._within;
  }
}
export interface DataScmHipObjectListDataMobileDeviceCriteriaModel {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaModelToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaModelToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaModel | undefined) {
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
export interface DataScmHipObjectListDataMobileDeviceCriteriaPhoneNumber {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaPhoneNumberToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaPhoneNumberToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaPhoneNumber | undefined) {
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
export interface DataScmHipObjectListDataMobileDeviceCriteriaTag {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaTagToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaTagToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteriaTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteriaTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteriaTag | undefined) {
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
export interface DataScmHipObjectListDataMobileDeviceCriteria {
}

export function dataScmHipObjectListDataMobileDeviceCriteriaToTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceCriteriaToHclTerraform(struct?: DataScmHipObjectListDataMobileDeviceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDeviceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDeviceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  private _applications = new DataScmHipObjectListDataMobileDeviceCriteriaApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }

  // disk_encrypted - computed: true, optional: false, required: false
  public get diskEncrypted() {
    return this.getBooleanAttribute('disk_encrypted');
  }

  // imei - computed: true, optional: false, required: false
  private _imei = new DataScmHipObjectListDataMobileDeviceCriteriaImeiOutputReference(this, "imei");
  public get imei() {
    return this._imei;
  }

  // jailbroken - computed: true, optional: false, required: false
  public get jailbroken() {
    return this.getBooleanAttribute('jailbroken');
  }

  // last_checkin_time - computed: true, optional: false, required: false
  private _lastCheckinTime = new DataScmHipObjectListDataMobileDeviceCriteriaLastCheckinTimeOutputReference(this, "last_checkin_time");
  public get lastCheckinTime() {
    return this._lastCheckinTime;
  }

  // model - computed: true, optional: false, required: false
  private _model = new DataScmHipObjectListDataMobileDeviceCriteriaModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }

  // passcode_set - computed: true, optional: false, required: false
  public get passcodeSet() {
    return this.getBooleanAttribute('passcode_set');
  }

  // phone_number - computed: true, optional: false, required: false
  private _phoneNumber = new DataScmHipObjectListDataMobileDeviceCriteriaPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataScmHipObjectListDataMobileDeviceCriteriaTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
}
export interface DataScmHipObjectListDataMobileDevice {
}

export function dataScmHipObjectListDataMobileDeviceToTerraform(struct?: DataScmHipObjectListDataMobileDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataMobileDeviceToHclTerraform(struct?: DataScmHipObjectListDataMobileDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataMobileDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataMobileDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataMobileDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataMobileDeviceCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobile {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobileToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobileToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobile | undefined) {
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
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknown {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknownToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknownToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifi {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifiToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifiToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifi | undefined) {
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
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIs {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mobile - computed: true, optional: false, required: false
  private _mobile = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }

  // unknown - computed: true, optional: false, required: false
  private _unknown = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsUnknownOutputReference(this, "unknown");
  public get unknown() {
    return this._unknown;
  }

  // wifi - computed: true, optional: false, required: false
  private _wifi = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
}
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernet {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernetToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernetToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobile {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobileToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobileToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobile | undefined) {
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
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknown {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknownToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknownToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifi {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifiToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifiToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifi | undefined) {
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
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNot {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ethernet - computed: true, optional: false, required: false
  private _ethernet = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotEthernetOutputReference(this, "ethernet");
  public get ethernet() {
    return this._ethernet;
  }

  // mobile - computed: true, optional: false, required: false
  private _mobile = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }

  // unknown - computed: true, optional: false, required: false
  private _unknown = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotUnknownOutputReference(this, "unknown");
  public get unknown() {
    return this._unknown;
  }

  // wifi - computed: true, optional: false, required: false
  private _wifi = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
}
export interface DataScmHipObjectListDataNetworkInfoCriteriaNetwork {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaNetworkToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteriaNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteriaNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteriaNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is - computed: true, optional: false, required: false
  private _is = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsOutputReference(this, "is");
  public get is() {
    return this._is;
  }

  // is_not - computed: true, optional: false, required: false
  private _isNot = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkIsNotOutputReference(this, "is_not");
  public get isNot() {
    return this._isNot;
  }
}
export interface DataScmHipObjectListDataNetworkInfoCriteria {
}

export function dataScmHipObjectListDataNetworkInfoCriteriaToTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoCriteriaToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfoCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfoCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfoCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataScmHipObjectListDataNetworkInfoCriteriaNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
}
export interface DataScmHipObjectListDataNetworkInfo {
}

export function dataScmHipObjectListDataNetworkInfoToTerraform(struct?: DataScmHipObjectListDataNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataNetworkInfoToHclTerraform(struct?: DataScmHipObjectListDataNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataNetworkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataNetworkInfoCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
}
export interface DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverity {
}

export function dataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverityToTerraform(struct?: DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverityToHclTerraform(struct?: DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverity | undefined) {
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
export interface DataScmHipObjectListDataPatchManagementCriteriaMissingPatches {
}

export function dataScmHipObjectListDataPatchManagementCriteriaMissingPatchesToTerraform(struct?: DataScmHipObjectListDataPatchManagementCriteriaMissingPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataPatchManagementCriteriaMissingPatchesToHclTerraform(struct?: DataScmHipObjectListDataPatchManagementCriteriaMissingPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataPatchManagementCriteriaMissingPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataPatchManagementCriteriaMissingPatches | undefined) {
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
  private _severity = new DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
}
export interface DataScmHipObjectListDataPatchManagementCriteria {
}

export function dataScmHipObjectListDataPatchManagementCriteriaToTerraform(struct?: DataScmHipObjectListDataPatchManagementCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataPatchManagementCriteriaToHclTerraform(struct?: DataScmHipObjectListDataPatchManagementCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataPatchManagementCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataPatchManagementCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataPatchManagementCriteria | undefined) {
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
  private _missingPatches = new DataScmHipObjectListDataPatchManagementCriteriaMissingPatchesOutputReference(this, "missing_patches");
  public get missingPatches() {
    return this._missingPatches;
  }
}
export interface DataScmHipObjectListDataPatchManagementVendor {
}

export function dataScmHipObjectListDataPatchManagementVendorToTerraform(struct?: DataScmHipObjectListDataPatchManagementVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataPatchManagementVendorToHclTerraform(struct?: DataScmHipObjectListDataPatchManagementVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataPatchManagementVendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListDataPatchManagementVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataPatchManagementVendor | undefined) {
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

export class DataScmHipObjectListDataPatchManagementVendorList extends cdktf.ComplexList {

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
  public get(index: number): DataScmHipObjectListDataPatchManagementVendorOutputReference {
    return new DataScmHipObjectListDataPatchManagementVendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmHipObjectListDataPatchManagement {
}

export function dataScmHipObjectListDataPatchManagementToTerraform(struct?: DataScmHipObjectListDataPatchManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmHipObjectListDataPatchManagementToHclTerraform(struct?: DataScmHipObjectListDataPatchManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmHipObjectListDataPatchManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmHipObjectListDataPatchManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListDataPatchManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataScmHipObjectListDataPatchManagementCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // exclude_vendor - computed: true, optional: false, required: false
  public get excludeVendor() {
    return this.getBooleanAttribute('exclude_vendor');
  }

  // vendor - computed: true, optional: false, required: false
  private _vendor = new DataScmHipObjectListDataPatchManagementVendorList(this, "vendor", false);
  public get vendor() {
    return this._vendor;
  }
}
export interface DataScmHipObjectListData {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#id DataScmHipObjectList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the HIP object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#name DataScmHipObjectList#name}
  */
  readonly name?: string;
}

export function dataScmHipObjectListDataToTerraform(struct?: DataScmHipObjectListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmHipObjectListDataToHclTerraform(struct?: DataScmHipObjectListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmHipObjectListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmHipObjectListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmHipObjectListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // anti_malware - computed: true, optional: false, required: false
  private _antiMalware = new DataScmHipObjectListDataAntiMalwareOutputReference(this, "anti_malware");
  public get antiMalware() {
    return this._antiMalware;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataScmHipObjectListDataCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }

  // custom_checks - computed: true, optional: false, required: false
  private _customChecks = new DataScmHipObjectListDataCustomChecksOutputReference(this, "custom_checks");
  public get customChecks() {
    return this._customChecks;
  }

  // data_loss_prevention - computed: true, optional: false, required: false
  private _dataLossPrevention = new DataScmHipObjectListDataDataLossPreventionOutputReference(this, "data_loss_prevention");
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
  private _diskBackup = new DataScmHipObjectListDataDiskBackupOutputReference(this, "disk_backup");
  public get diskBackup() {
    return this._diskBackup;
  }

  // disk_encryption - computed: true, optional: false, required: false
  private _diskEncryption = new DataScmHipObjectListDataDiskEncryptionOutputReference(this, "disk_encryption");
  public get diskEncryption() {
    return this._diskEncryption;
  }

  // firewall - computed: true, optional: false, required: false
  private _firewall = new DataScmHipObjectListDataFirewallOutputReference(this, "firewall");
  public get firewall() {
    return this._firewall;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // host_info - computed: true, optional: false, required: false
  private _hostInfo = new DataScmHipObjectListDataHostInfoOutputReference(this, "host_info");
  public get hostInfo() {
    return this._hostInfo;
  }

  // id - computed: true, optional: false, required: true
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
  private _mobileDevice = new DataScmHipObjectListDataMobileDeviceOutputReference(this, "mobile_device");
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
  private _networkInfo = new DataScmHipObjectListDataNetworkInfoOutputReference(this, "network_info");
  public get networkInfo() {
    return this._networkInfo;
  }

  // patch_management - computed: true, optional: false, required: false
  private _patchManagement = new DataScmHipObjectListDataPatchManagementOutputReference(this, "patch_management");
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
}

export class DataScmHipObjectListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmHipObjectListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmHipObjectListDataOutputReference {
    return new DataScmHipObjectListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list scm_hip_object_list}
*/
export class DataScmHipObjectList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_hip_object_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmHipObjectList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmHipObjectList to import
  * @param importFromId The id of the existing DataScmHipObjectList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmHipObjectList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_hip_object_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/hip_object_list scm_hip_object_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmHipObjectListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmHipObjectListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_hip_object_list',
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
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmHipObjectListDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: true, required: false
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
