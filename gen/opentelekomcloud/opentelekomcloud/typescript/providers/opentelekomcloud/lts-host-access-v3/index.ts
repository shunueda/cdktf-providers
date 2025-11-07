// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtsHostAccessV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}
  */
  readonly binaryCollect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}
  */
  readonly hostGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}
  */
  readonly logSplit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}
  */
  readonly logStreamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#access_config LtsHostAccessV3#access_config}
  */
  readonly accessConfig: LtsHostAccessV3AccessConfig;
}
export interface LtsHostAccessV3AccessConfigMultiLogFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}
  */
  readonly value?: string;
}

export function ltsHostAccessV3AccessConfigMultiLogFormatToTerraform(struct?: LtsHostAccessV3AccessConfigMultiLogFormatOutputReference | LtsHostAccessV3AccessConfigMultiLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ltsHostAccessV3AccessConfigMultiLogFormatToHclTerraform(struct?: LtsHostAccessV3AccessConfigMultiLogFormatOutputReference | LtsHostAccessV3AccessConfigMultiLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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

export class LtsHostAccessV3AccessConfigMultiLogFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsHostAccessV3AccessConfigMultiLogFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsHostAccessV3AccessConfigMultiLogFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: true, optional: true, required: false
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
export interface LtsHostAccessV3AccessConfigSingleLogFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}
  */
  readonly value?: string;
}

export function ltsHostAccessV3AccessConfigSingleLogFormatToTerraform(struct?: LtsHostAccessV3AccessConfigSingleLogFormatOutputReference | LtsHostAccessV3AccessConfigSingleLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ltsHostAccessV3AccessConfigSingleLogFormatToHclTerraform(struct?: LtsHostAccessV3AccessConfigSingleLogFormatOutputReference | LtsHostAccessV3AccessConfigSingleLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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

export class LtsHostAccessV3AccessConfigSingleLogFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsHostAccessV3AccessConfigSingleLogFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsHostAccessV3AccessConfigSingleLogFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: true, optional: true, required: false
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
export interface LtsHostAccessV3AccessConfigWindowsLogInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}
  */
  readonly categories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}
  */
  readonly eventLevel: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}
  */
  readonly timeOffset: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}
  */
  readonly timeOffsetUnit: string;
}

export function ltsHostAccessV3AccessConfigWindowsLogInfoToTerraform(struct?: LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference | LtsHostAccessV3AccessConfigWindowsLogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    event_level: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventLevel),
    time_offset: cdktf.numberToTerraform(struct!.timeOffset),
    time_offset_unit: cdktf.stringToTerraform(struct!.timeOffsetUnit),
  }
}


export function ltsHostAccessV3AccessConfigWindowsLogInfoToHclTerraform(struct?: LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference | LtsHostAccessV3AccessConfigWindowsLogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_level: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventLevel),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_offset: {
      value: cdktf.numberToHclTerraform(struct!.timeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_offset_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeOffsetUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsHostAccessV3AccessConfigWindowsLogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._eventLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLevel = this._eventLevel;
    }
    if (this._timeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOffset = this._timeOffset;
    }
    if (this._timeOffsetUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOffsetUnit = this._timeOffsetUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsHostAccessV3AccessConfigWindowsLogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._eventLevel = undefined;
      this._timeOffset = undefined;
      this._timeOffsetUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._eventLevel = value.eventLevel;
      this._timeOffset = value.timeOffset;
      this._timeOffsetUnit = value.timeOffsetUnit;
    }
  }

  // categories - computed: false, optional: false, required: true
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // event_level - computed: false, optional: false, required: true
  private _eventLevel?: string[]; 
  public get eventLevel() {
    return this.getListAttribute('event_level');
  }
  public set eventLevel(value: string[]) {
    this._eventLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLevelInput() {
    return this._eventLevel;
  }

  // time_offset - computed: false, optional: false, required: true
  private _timeOffset?: number; 
  public get timeOffset() {
    return this.getNumberAttribute('time_offset');
  }
  public set timeOffset(value: number) {
    this._timeOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOffsetInput() {
    return this._timeOffset;
  }

  // time_offset_unit - computed: false, optional: false, required: true
  private _timeOffsetUnit?: string; 
  public get timeOffsetUnit() {
    return this.getStringAttribute('time_offset_unit');
  }
  public set timeOffsetUnit(value: string) {
    this._timeOffsetUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOffsetUnitInput() {
    return this._timeOffsetUnit;
  }
}
export interface LtsHostAccessV3AccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}
  */
  readonly blackPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}
  */
  readonly paths: string[];
  /**
  * multi_log_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#multi_log_format LtsHostAccessV3#multi_log_format}
  */
  readonly multiLogFormat?: LtsHostAccessV3AccessConfigMultiLogFormat;
  /**
  * single_log_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#single_log_format LtsHostAccessV3#single_log_format}
  */
  readonly singleLogFormat?: LtsHostAccessV3AccessConfigSingleLogFormat;
  /**
  * windows_log_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#windows_log_info LtsHostAccessV3#windows_log_info}
  */
  readonly windowsLogInfo?: LtsHostAccessV3AccessConfigWindowsLogInfo;
}

export function ltsHostAccessV3AccessConfigToTerraform(struct?: LtsHostAccessV3AccessConfigOutputReference | LtsHostAccessV3AccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blackPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    multi_log_format: ltsHostAccessV3AccessConfigMultiLogFormatToTerraform(struct!.multiLogFormat),
    single_log_format: ltsHostAccessV3AccessConfigSingleLogFormatToTerraform(struct!.singleLogFormat),
    windows_log_info: ltsHostAccessV3AccessConfigWindowsLogInfoToTerraform(struct!.windowsLogInfo),
  }
}


export function ltsHostAccessV3AccessConfigToHclTerraform(struct?: LtsHostAccessV3AccessConfigOutputReference | LtsHostAccessV3AccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blackPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    multi_log_format: {
      value: ltsHostAccessV3AccessConfigMultiLogFormatToHclTerraform(struct!.multiLogFormat),
      isBlock: true,
      type: "list",
      storageClassType: "LtsHostAccessV3AccessConfigMultiLogFormatList",
    },
    single_log_format: {
      value: ltsHostAccessV3AccessConfigSingleLogFormatToHclTerraform(struct!.singleLogFormat),
      isBlock: true,
      type: "list",
      storageClassType: "LtsHostAccessV3AccessConfigSingleLogFormatList",
    },
    windows_log_info: {
      value: ltsHostAccessV3AccessConfigWindowsLogInfoToHclTerraform(struct!.windowsLogInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LtsHostAccessV3AccessConfigWindowsLogInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsHostAccessV3AccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsHostAccessV3AccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackPaths = this._blackPaths;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._multiLogFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLogFormat = this._multiLogFormat?.internalValue;
    }
    if (this._singleLogFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleLogFormat = this._singleLogFormat?.internalValue;
    }
    if (this._windowsLogInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsLogInfo = this._windowsLogInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsHostAccessV3AccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blackPaths = undefined;
      this._paths = undefined;
      this._multiLogFormat.internalValue = undefined;
      this._singleLogFormat.internalValue = undefined;
      this._windowsLogInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blackPaths = value.blackPaths;
      this._paths = value.paths;
      this._multiLogFormat.internalValue = value.multiLogFormat;
      this._singleLogFormat.internalValue = value.singleLogFormat;
      this._windowsLogInfo.internalValue = value.windowsLogInfo;
    }
  }

  // black_paths - computed: true, optional: true, required: false
  private _blackPaths?: string[]; 
  public get blackPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('black_paths'));
  }
  public set blackPaths(value: string[]) {
    this._blackPaths = value;
  }
  public resetBlackPaths() {
    this._blackPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackPathsInput() {
    return this._blackPaths;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // multi_log_format - computed: false, optional: true, required: false
  private _multiLogFormat = new LtsHostAccessV3AccessConfigMultiLogFormatOutputReference(this, "multi_log_format");
  public get multiLogFormat() {
    return this._multiLogFormat;
  }
  public putMultiLogFormat(value: LtsHostAccessV3AccessConfigMultiLogFormat) {
    this._multiLogFormat.internalValue = value;
  }
  public resetMultiLogFormat() {
    this._multiLogFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLogFormatInput() {
    return this._multiLogFormat.internalValue;
  }

  // single_log_format - computed: false, optional: true, required: false
  private _singleLogFormat = new LtsHostAccessV3AccessConfigSingleLogFormatOutputReference(this, "single_log_format");
  public get singleLogFormat() {
    return this._singleLogFormat;
  }
  public putSingleLogFormat(value: LtsHostAccessV3AccessConfigSingleLogFormat) {
    this._singleLogFormat.internalValue = value;
  }
  public resetSingleLogFormat() {
    this._singleLogFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogFormatInput() {
    return this._singleLogFormat.internalValue;
  }

  // windows_log_info - computed: false, optional: true, required: false
  private _windowsLogInfo = new LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference(this, "windows_log_info");
  public get windowsLogInfo() {
    return this._windowsLogInfo;
  }
  public putWindowsLogInfo(value: LtsHostAccessV3AccessConfigWindowsLogInfo) {
    this._windowsLogInfo.internalValue = value;
  }
  public resetWindowsLogInfo() {
    this._windowsLogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsLogInfoInput() {
    return this._windowsLogInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3 opentelekomcloud_lts_host_access_v3}
*/
export class LtsHostAccessV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lts_host_access_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtsHostAccessV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtsHostAccessV3 to import
  * @param importFromId The id of the existing LtsHostAccessV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtsHostAccessV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lts_host_access_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/lts_host_access_v3 opentelekomcloud_lts_host_access_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtsHostAccessV3Config
  */
  public constructor(scope: Construct, id: string, config: LtsHostAccessV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lts_host_access_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binaryCollect = config.binaryCollect;
    this._hostGroupIds = config.hostGroupIds;
    this._id = config.id;
    this._logGroupId = config.logGroupId;
    this._logSplit = config.logSplit;
    this._logStreamId = config.logStreamId;
    this._name = config.name;
    this._tags = config.tags;
    this._accessConfig.internalValue = config.accessConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // binary_collect - computed: true, optional: true, required: false
  private _binaryCollect?: boolean | cdktf.IResolvable; 
  public get binaryCollect() {
    return this.getBooleanAttribute('binary_collect');
  }
  public set binaryCollect(value: boolean | cdktf.IResolvable) {
    this._binaryCollect = value;
  }
  public resetBinaryCollect() {
    this._binaryCollect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryCollectInput() {
    return this._binaryCollect;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // host_group_ids - computed: true, optional: true, required: false
  private _hostGroupIds?: string[]; 
  public get hostGroupIds() {
    return this.getListAttribute('host_group_ids');
  }
  public set hostGroupIds(value: string[]) {
    this._hostGroupIds = value;
  }
  public resetHostGroupIds() {
    this._hostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdsInput() {
    return this._hostGroupIds;
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

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_split - computed: true, optional: true, required: false
  private _logSplit?: boolean | cdktf.IResolvable; 
  public get logSplit() {
    return this.getBooleanAttribute('log_split');
  }
  public set logSplit(value: boolean | cdktf.IResolvable) {
    this._logSplit = value;
  }
  public resetLogSplit() {
    this._logSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSplitInput() {
    return this._logSplit;
  }

  // log_stream_id - computed: false, optional: false, required: true
  private _logStreamId?: string; 
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }
  public set logStreamId(value: string) {
    this._logStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamIdInput() {
    return this._logStreamId;
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tags - computed: false, optional: true, required: false
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

  // access_config - computed: false, optional: false, required: true
  private _accessConfig = new LtsHostAccessV3AccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: LtsHostAccessV3AccessConfig) {
    this._accessConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binary_collect: cdktf.booleanToTerraform(this._binaryCollect),
      host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroupIds),
      id: cdktf.stringToTerraform(this._id),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      log_split: cdktf.booleanToTerraform(this._logSplit),
      log_stream_id: cdktf.stringToTerraform(this._logStreamId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      access_config: ltsHostAccessV3AccessConfigToTerraform(this._accessConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binary_collect: {
        value: cdktf.booleanToHclTerraform(this._binaryCollect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_split: {
        value: cdktf.booleanToHclTerraform(this._logSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_stream_id: {
        value: cdktf.stringToHclTerraform(this._logStreamId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      access_config: {
        value: ltsHostAccessV3AccessConfigToHclTerraform(this._accessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtsHostAccessV3AccessConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
