// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneIpamRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#filters DataBloxoneIpamRanges#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#tag_filters DataBloxoneIpamRanges#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneIpamRangesResultsDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#group DataBloxoneIpamRanges#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#option_code DataBloxoneIpamRanges#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#option_value DataBloxoneIpamRanges#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#type DataBloxoneIpamRanges#type}
  */
  readonly type?: string;
}

export function dataBloxoneIpamRangesResultsDhcpOptionsToTerraform(struct?: DataBloxoneIpamRangesResultsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneIpamRangesResultsDhcpOptionsToHclTerraform(struct?: DataBloxoneIpamRangesResultsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamRangesResultsDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // option_code - computed: true, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataBloxoneIpamRangesResultsDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamRangesResultsDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamRangesResultsDhcpOptionsOutputReference {
    return new DataBloxoneIpamRangesResultsDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamRangesResultsExclusionRanges {
  /**
  * The description for the exclusion range. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#comment DataBloxoneIpamRanges#comment}
  */
  readonly comment?: string;
  /**
  * The end address of the exclusion range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#end DataBloxoneIpamRanges#end}
  */
  readonly end: string;
  /**
  * The start address of the exclusion range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#start DataBloxoneIpamRanges#start}
  */
  readonly start: string;
}

export function dataBloxoneIpamRangesResultsExclusionRangesToTerraform(struct?: DataBloxoneIpamRangesResultsExclusionRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataBloxoneIpamRangesResultsExclusionRangesToHclTerraform(struct?: DataBloxoneIpamRangesResultsExclusionRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsExclusionRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamRangesResultsExclusionRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsExclusionRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // end - computed: true, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataBloxoneIpamRangesResultsExclusionRangesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamRangesResultsExclusionRanges[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamRangesResultsExclusionRangesOutputReference {
    return new DataBloxoneIpamRangesResultsExclusionRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamRangesResultsFilters {
  /**
  * The access type of DHCP filter (_allow_ or _deny_).  Defaults to _allow_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#access DataBloxoneIpamRanges#access}
  */
  readonly access: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#hardware_filter_id DataBloxoneIpamRanges#hardware_filter_id}
  */
  readonly hardwareFilterId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#option_filter_id DataBloxoneIpamRanges#option_filter_id}
  */
  readonly optionFilterId?: string;
}

export function dataBloxoneIpamRangesResultsFiltersToTerraform(struct?: DataBloxoneIpamRangesResultsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    hardware_filter_id: cdktf.stringToTerraform(struct!.hardwareFilterId),
    option_filter_id: cdktf.stringToTerraform(struct!.optionFilterId),
  }
}


export function dataBloxoneIpamRangesResultsFiltersToHclTerraform(struct?: DataBloxoneIpamRangesResultsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_filter_id: {
      value: cdktf.stringToHclTerraform(struct!.hardwareFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_filter_id: {
      value: cdktf.stringToHclTerraform(struct!.optionFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamRangesResultsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._hardwareFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareFilterId = this._hardwareFilterId;
    }
    if (this._optionFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionFilterId = this._optionFilterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._hardwareFilterId = undefined;
      this._optionFilterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._hardwareFilterId = value.hardwareFilterId;
      this._optionFilterId = value.optionFilterId;
    }
  }

  // access - computed: true, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // hardware_filter_id - computed: true, optional: true, required: false
  private _hardwareFilterId?: string; 
  public get hardwareFilterId() {
    return this.getStringAttribute('hardware_filter_id');
  }
  public set hardwareFilterId(value: string) {
    this._hardwareFilterId = value;
  }
  public resetHardwareFilterId() {
    this._hardwareFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareFilterIdInput() {
    return this._hardwareFilterId;
  }

  // option_filter_id - computed: true, optional: true, required: false
  private _optionFilterId?: string; 
  public get optionFilterId() {
    return this.getStringAttribute('option_filter_id');
  }
  public set optionFilterId(value: string) {
    this._optionFilterId = value;
  }
  public resetOptionFilterId() {
    this._optionFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionFilterIdInput() {
    return this._optionFilterId;
  }
}

export class DataBloxoneIpamRangesResultsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamRangesResultsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamRangesResultsFiltersOutputReference {
    return new DataBloxoneIpamRangesResultsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamRangesResultsInheritanceAssignedHosts {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#host DataBloxoneIpamRanges#host}
  */
  readonly host?: string;
}

export function dataBloxoneIpamRangesResultsInheritanceAssignedHostsToTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataBloxoneIpamRangesResultsInheritanceAssignedHostsToHclTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsInheritanceAssignedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamRangesResultsInheritanceAssignedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsInheritanceAssignedHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }
}

export class DataBloxoneIpamRangesResultsInheritanceAssignedHostsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamRangesResultsInheritanceAssignedHosts[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamRangesResultsInheritanceAssignedHostsOutputReference {
    return new DataBloxoneIpamRangesResultsInheritanceAssignedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOption {
}

export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOptionToTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOptionToHclTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValue {
}

export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#action DataBloxoneIpamRanges#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueToTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueOutputReference {
    return new DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#action DataBloxoneIpamRanges#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#value DataBloxoneIpamRanges#value}
  */
  readonly value?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsToTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueToTerraform, false)(struct!.value),
  }
}


export function dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsToHclTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: true, optional: true, required: false
  private _value = new DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataBloxoneIpamRangesResultsInheritanceSources {
  /**
  * The inheritance configuration for the _dhcp_options_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#dhcp_options DataBloxoneIpamRanges#dhcp_options}
  */
  readonly dhcpOptions?: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions;
}

export function dataBloxoneIpamRangesResultsInheritanceSourcesToTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_options: dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
  }
}


export function dataBloxoneIpamRangesResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneIpamRangesResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_options: {
      value: dataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamRangesResultsInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpOptions.internalValue = value.dhcpOptions;
    }
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DataBloxoneIpamRangesResultsInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }
}
export interface DataBloxoneIpamRangesResultsThreshold {
  /**
  * Indicates whether the utilization threshold for IP addresses is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#enabled DataBloxoneIpamRanges#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The high threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#high DataBloxoneIpamRanges#high}
  */
  readonly high: number;
  /**
  * The low threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#low DataBloxoneIpamRanges#low}
  */
  readonly low: number;
}

export function dataBloxoneIpamRangesResultsThresholdToTerraform(struct?: DataBloxoneIpamRangesResultsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function dataBloxoneIpamRangesResultsThresholdToHclTerraform(struct?: DataBloxoneIpamRangesResultsThreshold): any {
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
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamRangesResultsThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // high - computed: true, optional: false, required: true
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: true, optional: false, required: true
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}
export interface DataBloxoneIpamRangesResultsUtilization {
}

export function dataBloxoneIpamRangesResultsUtilizationToTerraform(struct?: DataBloxoneIpamRangesResultsUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamRangesResultsUtilizationToHclTerraform(struct?: DataBloxoneIpamRangesResultsUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamRangesResultsUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamRangesResultsUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abandon_utilization - computed: true, optional: false, required: false
  public get abandonUtilization() {
    return this.getNumberAttribute('abandon_utilization');
  }

  // abandoned - computed: true, optional: false, required: false
  public get abandoned() {
    return this.getStringAttribute('abandoned');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getStringAttribute('dynamic');
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getStringAttribute('static');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getStringAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }

  // utilization - computed: true, optional: false, required: false
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }
}
export interface DataBloxoneIpamRangesResultsUtilizationV6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#abandoned DataBloxoneIpamRanges#abandoned}
  */
  readonly abandoned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#dynamic DataBloxoneIpamRanges#dynamic}
  */
  readonly dynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#static DataBloxoneIpamRanges#static}
  */
  readonly static?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#total DataBloxoneIpamRanges#total}
  */
  readonly total?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#used DataBloxoneIpamRanges#used}
  */
  readonly used?: string;
}

export function dataBloxoneIpamRangesResultsUtilizationV6ToTerraform(struct?: DataBloxoneIpamRangesResultsUtilizationV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned: cdktf.stringToTerraform(struct!.abandoned),
    dynamic: cdktf.stringToTerraform(struct!.dynamic),
    static: cdktf.stringToTerraform(struct!.static),
    total: cdktf.stringToTerraform(struct!.total),
    used: cdktf.stringToTerraform(struct!.used),
  }
}


export function dataBloxoneIpamRangesResultsUtilizationV6ToHclTerraform(struct?: DataBloxoneIpamRangesResultsUtilizationV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned: {
      value: cdktf.stringToHclTerraform(struct!.abandoned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic: {
      value: cdktf.stringToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static: {
      value: cdktf.stringToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.stringToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used: {
      value: cdktf.stringToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsUtilizationV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamRangesResultsUtilizationV6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandoned !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandoned = this._abandoned;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResultsUtilizationV6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abandoned = undefined;
      this._dynamic = undefined;
      this._static = undefined;
      this._total = undefined;
      this._used = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abandoned = value.abandoned;
      this._dynamic = value.dynamic;
      this._static = value.static;
      this._total = value.total;
      this._used = value.used;
    }
  }

  // abandoned - computed: true, optional: true, required: false
  private _abandoned?: string; 
  public get abandoned() {
    return this.getStringAttribute('abandoned');
  }
  public set abandoned(value: string) {
    this._abandoned = value;
  }
  public resetAbandoned() {
    this._abandoned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedInput() {
    return this._abandoned;
  }

  // dynamic - computed: true, optional: true, required: false
  private _dynamic?: string; 
  public get dynamic() {
    return this.getStringAttribute('dynamic');
  }
  public set dynamic(value: string) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // static - computed: true, optional: true, required: false
  private _static?: string; 
  public get static() {
    return this.getStringAttribute('static');
  }
  public set static(value: string) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // total - computed: true, optional: true, required: false
  private _total?: string; 
  public get total() {
    return this.getStringAttribute('total');
  }
  public set total(value: string) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // used - computed: true, optional: true, required: false
  private _used?: string; 
  public get used() {
    return this.getStringAttribute('used');
  }
  public set used(value: string) {
    this._used = value;
  }
  public resetUsed() {
    this._used = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }
}
export interface DataBloxoneIpamRangesResults {
  /**
  * The description for the range. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#comment DataBloxoneIpamRanges#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#dhcp_host DataBloxoneIpamRanges#dhcp_host}
  */
  readonly dhcpHost?: string;
  /**
  * The list of DHCP options. May be either a specific option or a group of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#dhcp_options DataBloxoneIpamRanges#dhcp_options}
  */
  readonly dhcpOptions?: DataBloxoneIpamRangesResultsDhcpOptions[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to disable object. A disabled object is effectively non-existent when generating configuration.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#disable_dhcp DataBloxoneIpamRanges#disable_dhcp}
  */
  readonly disableDhcp?: boolean | cdktf.IResolvable;
  /**
  * The end IP address of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#end DataBloxoneIpamRanges#end}
  */
  readonly end: string;
  /**
  * The list of all exclusion ranges in the scope of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#exclusion_ranges DataBloxoneIpamRanges#exclusion_ranges}
  */
  readonly exclusionRanges?: DataBloxoneIpamRangesResultsExclusionRanges[] | cdktf.IResolvable;
  /**
  * The list of all allow/deny filters of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#filters DataBloxoneIpamRanges#filters}
  */
  readonly filters?: DataBloxoneIpamRangesResultsFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#inheritance_sources DataBloxoneIpamRanges#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneIpamRangesResultsInheritanceSources;
  /**
  * The name of the range. May contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#name DataBloxoneIpamRanges#name}
  */
  readonly name?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#space DataBloxoneIpamRanges#space}
  */
  readonly space: string;
  /**
  * The start IP address of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#start DataBloxoneIpamRanges#start}
  */
  readonly start: string;
  /**
  * The tags for the range in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#tags DataBloxoneIpamRanges#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneIpamRangesResultsToTerraform(struct?: DataBloxoneIpamRangesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    dhcp_host: cdktf.stringToTerraform(struct!.dhcpHost),
    dhcp_options: cdktf.listMapper(dataBloxoneIpamRangesResultsDhcpOptionsToTerraform, false)(struct!.dhcpOptions),
    disable_dhcp: cdktf.booleanToTerraform(struct!.disableDhcp),
    end: cdktf.stringToTerraform(struct!.end),
    exclusion_ranges: cdktf.listMapper(dataBloxoneIpamRangesResultsExclusionRangesToTerraform, false)(struct!.exclusionRanges),
    filters: cdktf.listMapper(dataBloxoneIpamRangesResultsFiltersToTerraform, false)(struct!.filters),
    inheritance_sources: dataBloxoneIpamRangesResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    name: cdktf.stringToTerraform(struct!.name),
    space: cdktf.stringToTerraform(struct!.space),
    start: cdktf.stringToTerraform(struct!.start),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneIpamRangesResultsToHclTerraform(struct?: DataBloxoneIpamRangesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_host: {
      value: cdktf.stringToHclTerraform(struct!.dhcpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_options: {
      value: cdktf.listMapperHcl(dataBloxoneIpamRangesResultsDhcpOptionsToHclTerraform, false)(struct!.dhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamRangesResultsDhcpOptionsList",
    },
    disable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.disableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion_ranges: {
      value: cdktf.listMapperHcl(dataBloxoneIpamRangesResultsExclusionRangesToHclTerraform, false)(struct!.exclusionRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamRangesResultsExclusionRangesList",
    },
    filters: {
      value: cdktf.listMapperHcl(dataBloxoneIpamRangesResultsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamRangesResultsFiltersList",
    },
    inheritance_sources: {
      value: dataBloxoneIpamRangesResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamRangesResultsInheritanceSources",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamRangesResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamRangesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dhcpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpHost = this._dhcpHost;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._disableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDhcp = this._disableDhcp;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._exclusionRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionRanges = this._exclusionRanges?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._inheritanceSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritanceSources = this._inheritanceSources?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamRangesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._dhcpHost = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._disableDhcp = undefined;
      this._end = undefined;
      this._exclusionRanges.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._inheritanceSources.internalValue = undefined;
      this._name = undefined;
      this._space = undefined;
      this._start = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._dhcpHost = value.dhcpHost;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._disableDhcp = value.disableDhcp;
      this._end = value.end;
      this._exclusionRanges.internalValue = value.exclusionRanges;
      this._filters.internalValue = value.filters;
      this._inheritanceSources.internalValue = value.inheritanceSources;
      this._name = value.name;
      this._space = value.space;
      this._start = value.start;
      this._tags = value.tags;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dhcp_host - computed: true, optional: true, required: false
  private _dhcpHost?: string; 
  public get dhcpHost() {
    return this.getStringAttribute('dhcp_host');
  }
  public set dhcpHost(value: string) {
    this._dhcpHost = value;
  }
  public resetDhcpHost() {
    this._dhcpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpHostInput() {
    return this._dhcpHost;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DataBloxoneIpamRangesResultsDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DataBloxoneIpamRangesResultsDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // disable_dhcp - computed: true, optional: true, required: false
  private _disableDhcp?: boolean | cdktf.IResolvable; 
  public get disableDhcp() {
    return this.getBooleanAttribute('disable_dhcp');
  }
  public set disableDhcp(value: boolean | cdktf.IResolvable) {
    this._disableDhcp = value;
  }
  public resetDisableDhcp() {
    this._disableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDhcpInput() {
    return this._disableDhcp;
  }

  // end - computed: true, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // exclusion_ranges - computed: true, optional: true, required: false
  private _exclusionRanges = new DataBloxoneIpamRangesResultsExclusionRangesList(this, "exclusion_ranges", false);
  public get exclusionRanges() {
    return this._exclusionRanges;
  }
  public putExclusionRanges(value: DataBloxoneIpamRangesResultsExclusionRanges[] | cdktf.IResolvable) {
    this._exclusionRanges.internalValue = value;
  }
  public resetExclusionRanges() {
    this._exclusionRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRangesInput() {
    return this._exclusionRanges.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DataBloxoneIpamRangesResultsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataBloxoneIpamRangesResultsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_assigned_hosts - computed: true, optional: false, required: false
  private _inheritanceAssignedHosts = new DataBloxoneIpamRangesResultsInheritanceAssignedHostsList(this, "inheritance_assigned_hosts", false);
  public get inheritanceAssignedHosts() {
    return this._inheritanceAssignedHosts;
  }

  // inheritance_parent - computed: true, optional: false, required: false
  public get inheritanceParent() {
    return this.getStringAttribute('inheritance_parent');
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DataBloxoneIpamRangesResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneIpamRangesResultsInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
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

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // space - computed: true, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // space_name - computed: true, optional: false, required: false
  public get spaceName() {
    return this.getStringAttribute('space_name');
  }

  // start - computed: true, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // threshold - computed: true, optional: false, required: false
  private _threshold = new DataBloxoneIpamRangesResultsThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // utilization - computed: true, optional: false, required: false
  private _utilization = new DataBloxoneIpamRangesResultsUtilizationOutputReference(this, "utilization");
  public get utilization() {
    return this._utilization;
  }

  // utilization_v6 - computed: true, optional: false, required: false
  private _utilizationV6 = new DataBloxoneIpamRangesResultsUtilizationV6OutputReference(this, "utilization_v6");
  public get utilizationV6() {
    return this._utilizationV6;
  }
}

export class DataBloxoneIpamRangesResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamRangesResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamRangesResultsOutputReference {
    return new DataBloxoneIpamRangesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges bloxone_ipam_ranges}
*/
export class DataBloxoneIpamRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneIpamRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneIpamRanges to import
  * @param importFromId The id of the existing DataBloxoneIpamRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneIpamRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_ranges bloxone_ipam_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneIpamRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneIpamRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_ranges',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneIpamRangesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
