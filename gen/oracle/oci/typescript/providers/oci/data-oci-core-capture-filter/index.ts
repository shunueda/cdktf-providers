// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_capture_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreCaptureFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_capture_filter#capture_filter_id DataOciCoreCaptureFilter#capture_filter_id}
  */
  readonly captureFilterId: string;
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_port_range - computed: true, optional: false, required: false
  private _destinationPortRange = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList(this, "destination_port_range", false);
  public get destinationPortRange() {
    return this._destinationPortRange;
  }

  // source_port_range - computed: true, optional: false, required: false
  private _sourcePortRange = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList(this, "source_port_range", false);
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_port_range - computed: true, optional: false, required: false
  private _destinationPortRange = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList(this, "destination_port_range", false);
  public get destinationPortRange() {
    return this._destinationPortRange;
  }

  // source_port_range - computed: true, optional: false, required: false
  private _sourcePortRange = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList(this, "source_port_range", false);
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterFlowLogCaptureFilterRules {
}

export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesToTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterFlowLogCaptureFilterRulesToHclTerraform(struct?: DataOciCoreCaptureFilterFlowLogCaptureFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterFlowLogCaptureFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterFlowLogCaptureFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // flow_log_type - computed: true, optional: false, required: false
  public get flowLogType() {
    return this.getStringAttribute('flow_log_type');
  }

  // icmp_options - computed: true, optional: false, required: false
  private _icmpOptions = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList(this, "icmp_options", false);
  public get icmpOptions() {
    return this._icmpOptions;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // source_cidr - computed: true, optional: false, required: false
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }

  // tcp_options - computed: true, optional: false, required: false
  private _tcpOptions = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList(this, "tcp_options", false);
  public get tcpOptions() {
    return this._tcpOptions;
  }

  // udp_options - computed: true, optional: false, required: false
  private _udpOptions = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList(this, "udp_options", false);
  public get udpOptions() {
    return this._udpOptions;
  }
}

export class DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference {
    return new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_port_range - computed: true, optional: false, required: false
  private _destinationPortRange = new DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList(this, "destination_port_range", false);
  public get destinationPortRange() {
    return this._destinationPortRange;
  }

  // source_port_range - computed: true, optional: false, required: false
  private _sourcePortRange = new DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList(this, "source_port_range", false);
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_port_range - computed: true, optional: false, required: false
  private _destinationPortRange = new DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList(this, "destination_port_range", false);
  public get destinationPortRange() {
    return this._destinationPortRange;
  }

  // source_port_range - computed: true, optional: false, required: false
  private _sourcePortRange = new DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList(this, "source_port_range", false);
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCaptureFilterVtapCaptureFilterRules {
}

export function dataOciCoreCaptureFilterVtapCaptureFilterRulesToTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCaptureFilterVtapCaptureFilterRulesToHclTerraform(struct?: DataOciCoreCaptureFilterVtapCaptureFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCaptureFilterVtapCaptureFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCaptureFilterVtapCaptureFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // icmp_options - computed: true, optional: false, required: false
  private _icmpOptions = new DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList(this, "icmp_options", false);
  public get icmpOptions() {
    return this._icmpOptions;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // source_cidr - computed: true, optional: false, required: false
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }

  // tcp_options - computed: true, optional: false, required: false
  private _tcpOptions = new DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList(this, "tcp_options", false);
  public get tcpOptions() {
    return this._tcpOptions;
  }

  // traffic_direction - computed: true, optional: false, required: false
  public get trafficDirection() {
    return this.getStringAttribute('traffic_direction');
  }

  // udp_options - computed: true, optional: false, required: false
  private _udpOptions = new DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList(this, "udp_options", false);
  public get udpOptions() {
    return this._udpOptions;
  }
}

export class DataOciCoreCaptureFilterVtapCaptureFilterRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference {
    return new DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_capture_filter oci_core_capture_filter}
*/
export class DataOciCoreCaptureFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_capture_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreCaptureFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreCaptureFilter to import
  * @param importFromId The id of the existing DataOciCoreCaptureFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_capture_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreCaptureFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_capture_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_capture_filter oci_core_capture_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreCaptureFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreCaptureFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_capture_filter',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._captureFilterId = config.captureFilterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_filter_id - computed: false, optional: false, required: true
  private _captureFilterId?: string; 
  public get captureFilterId() {
    return this.getStringAttribute('capture_filter_id');
  }
  public set captureFilterId(value: string) {
    this._captureFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureFilterIdInput() {
    return this._captureFilterId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // flow_log_capture_filter_rules - computed: true, optional: false, required: false
  private _flowLogCaptureFilterRules = new DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList(this, "flow_log_capture_filter_rules", false);
  public get flowLogCaptureFilterRules() {
    return this._flowLogCaptureFilterRules;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vtap_capture_filter_rules - computed: true, optional: false, required: false
  private _vtapCaptureFilterRules = new DataOciCoreCaptureFilterVtapCaptureFilterRulesList(this, "vtap_capture_filter_rules", false);
  public get vtapCaptureFilterRules() {
    return this._vtapCaptureFilterRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_filter_id: cdktf.stringToTerraform(this._captureFilterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_filter_id: {
        value: cdktf.stringToHclTerraform(this._captureFilterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
