// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#id ClsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the log to be collected. Valid values: json_log: log in JSON format; delimiter_log: log in delimited format; minimalist_log: minimalist log; multiline_log: log in multi-line format; fullregex_log: log in full regex format. Default value: minimalist_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#log_type ClsConfig#log_type}
  */
  readonly logType?: string;
  /**
  * Collection configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#name ClsConfig#name}
  */
  readonly name: string;
  /**
  * Log topic ID (TopicId) of collection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#output ClsConfig#output}
  */
  readonly output?: string;
  /**
  * Log collection path containing the filename. Required for document collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#path ClsConfig#path}
  */
  readonly path?: string;
  /**
  * Custom collection rule, which is a serialized JSON string. Required when LogType is user_define_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#user_define_rule ClsConfig#user_define_rule}
  */
  readonly userDefineRule?: string;
  /**
  * exclude_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#exclude_paths ClsConfig#exclude_paths}
  */
  readonly excludePaths?: ClsConfigExcludePaths[] | cdktf.IResolvable;
  /**
  * extract_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#extract_rule ClsConfig#extract_rule}
  */
  readonly extractRule: ClsConfigExtractRule;
}
export interface ClsConfigExcludePaths {
  /**
  * Type. Valid values: File, Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#type ClsConfig#type}
  */
  readonly type?: string;
  /**
  * Specific content corresponding to Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#value ClsConfig#value}
  */
  readonly value?: string;
}

export function clsConfigExcludePathsToTerraform(struct?: ClsConfigExcludePaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clsConfigExcludePathsToHclTerraform(struct?: ClsConfigExcludePaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ClsConfigExcludePathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsConfigExcludePaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExcludePaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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

export class ClsConfigExcludePathsList extends cdktf.ComplexList {
  public internalValue? : ClsConfigExcludePaths[] | cdktf.IResolvable

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
  public get(index: number): ClsConfigExcludePathsOutputReference {
    return new ClsConfigExcludePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsConfigExtractRuleFilterKeyRegex {
  /**
  * Log key to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#key ClsConfig#key}
  */
  readonly key?: string;
  /**
  * Filter rule regex corresponding to key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#regex ClsConfig#regex}
  */
  readonly regex?: string;
}

export function clsConfigExtractRuleFilterKeyRegexToTerraform(struct?: ClsConfigExtractRuleFilterKeyRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function clsConfigExtractRuleFilterKeyRegexToHclTerraform(struct?: ClsConfigExtractRuleFilterKeyRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtractRuleFilterKeyRegexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsConfigExtractRuleFilterKeyRegex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtractRuleFilterKeyRegex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._regex = value.regex;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ClsConfigExtractRuleFilterKeyRegexList extends cdktf.ComplexList {
  public internalValue? : ClsConfigExtractRuleFilterKeyRegex[] | cdktf.IResolvable

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
  public get(index: number): ClsConfigExtractRuleFilterKeyRegexOutputReference {
    return new ClsConfigExtractRuleFilterKeyRegexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsConfigExtractRuleMetaTags {
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#key ClsConfig#key}
  */
  readonly key?: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#value ClsConfig#value}
  */
  readonly value?: string;
}

export function clsConfigExtractRuleMetaTagsToTerraform(struct?: ClsConfigExtractRuleMetaTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clsConfigExtractRuleMetaTagsToHclTerraform(struct?: ClsConfigExtractRuleMetaTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ClsConfigExtractRuleMetaTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsConfigExtractRuleMetaTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtractRuleMetaTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class ClsConfigExtractRuleMetaTagsList extends cdktf.ComplexList {
  public internalValue? : ClsConfigExtractRuleMetaTags[] | cdktf.IResolvable

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
  public get(index: number): ClsConfigExtractRuleMetaTagsOutputReference {
    return new ClsConfigExtractRuleMetaTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsConfigExtractRule {
  /**
  * syslog system log collection specifies the address and port that the collector listens to. This parameter is only valid when LogType is service_syslog. It does not need to be filled in for other types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#address ClsConfig#address}
  */
  readonly address?: string;
  /**
  * Size of the data to be rewound in incremental collection mode. Default value: -1 (full collection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#backtracking ClsConfig#backtracking}
  */
  readonly backtracking?: number;
  /**
  * First-Line matching rule, which is valid only if log_type is multiline_log or fullregex_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#begin_regex ClsConfig#begin_regex}
  */
  readonly beginRegex?: string;
  /**
  * Delimiter for delimited log, which is valid only if log_type is delimiter_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#delimiter ClsConfig#delimiter}
  */
  readonly delimiter?: string;
  /**
  * GBK encoding. Default 0. Note: - Currently, when the value is 0, it means UTF-8 encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#is_gbk ClsConfig#is_gbk}
  */
  readonly isGbk?: number;
  /**
  * standard json. Default 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#json_standard ClsConfig#json_standard}
  */
  readonly jsonStandard?: number;
  /**
  * Key name of each extracted field. An empty key indicates to discard the field. This parameter is valid only if log_type is delimiter_log. json_log logs use the key of JSON itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#keys ClsConfig#keys}
  */
  readonly keys?: string[];
  /**
  * Full log matching rule, which is valid only if log_type is fullregex_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#log_regex ClsConfig#log_regex}
  */
  readonly logRegex?: string;
  /**
  * metadata type. 0: Do not use metadata information; 1: Use machine group metadata; 2: Use user-defined metadata; 3: Use collection configuration path. Note: COS import does not support this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#metadata_type ClsConfig#metadata_type}
  */
  readonly metadataType?: number;
  /**
  * parse protocol. This parameter is only valid when LogType is service_syslog. It does not need to be filled in for other types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#parse_protocol ClsConfig#parse_protocol}
  */
  readonly parseProtocol?: string;
  /**
  * metadata path regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#path_regex ClsConfig#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * syslog protocol, tcp or udp. The value can be tcp or udp. It is effective only when LogType is service_syslog. Other types do not need to be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#protocol ClsConfig#protocol}
  */
  readonly protocol?: string;
  /**
  * Time field format. For more information, please see the output parameters of the time format description of the strftime function in C language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#time_format ClsConfig#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Time field key name. time_key and time_format must appear in pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#time_key ClsConfig#time_key}
  */
  readonly timeKey?: string;
  /**
  * Unmatched log key. Required when UnMatchUpLoadSwitch is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#un_match_log_key ClsConfig#un_match_log_key}
  */
  readonly unMatchLogKey?: string;
  /**
  * Whether to upload the logs that failed to be parsed. Valid values: true: yes; false: no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#un_match_up_load_switch ClsConfig#un_match_up_load_switch}
  */
  readonly unMatchUpLoadSwitch?: boolean | cdktf.IResolvable;
  /**
  * filter_key_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#filter_key_regex ClsConfig#filter_key_regex}
  */
  readonly filterKeyRegex?: ClsConfigExtractRuleFilterKeyRegex[] | cdktf.IResolvable;
  /**
  * meta_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#meta_tags ClsConfig#meta_tags}
  */
  readonly metaTags?: ClsConfigExtractRuleMetaTags[] | cdktf.IResolvable;
}

export function clsConfigExtractRuleToTerraform(struct?: ClsConfigExtractRuleOutputReference | ClsConfigExtractRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    backtracking: cdktf.numberToTerraform(struct!.backtracking),
    begin_regex: cdktf.stringToTerraform(struct!.beginRegex),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    is_gbk: cdktf.numberToTerraform(struct!.isGbk),
    json_standard: cdktf.numberToTerraform(struct!.jsonStandard),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    log_regex: cdktf.stringToTerraform(struct!.logRegex),
    metadata_type: cdktf.numberToTerraform(struct!.metadataType),
    parse_protocol: cdktf.stringToTerraform(struct!.parseProtocol),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    un_match_log_key: cdktf.stringToTerraform(struct!.unMatchLogKey),
    un_match_up_load_switch: cdktf.booleanToTerraform(struct!.unMatchUpLoadSwitch),
    filter_key_regex: cdktf.listMapper(clsConfigExtractRuleFilterKeyRegexToTerraform, true)(struct!.filterKeyRegex),
    meta_tags: cdktf.listMapper(clsConfigExtractRuleMetaTagsToTerraform, true)(struct!.metaTags),
  }
}


export function clsConfigExtractRuleToHclTerraform(struct?: ClsConfigExtractRuleOutputReference | ClsConfigExtractRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backtracking: {
      value: cdktf.numberToHclTerraform(struct!.backtracking),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    begin_regex: {
      value: cdktf.stringToHclTerraform(struct!.beginRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_gbk: {
      value: cdktf.numberToHclTerraform(struct!.isGbk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    json_standard: {
      value: cdktf.numberToHclTerraform(struct!.jsonStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log_regex: {
      value: cdktf.stringToHclTerraform(struct!.logRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_type: {
      value: cdktf.numberToHclTerraform(struct!.metadataType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_protocol: {
      value: cdktf.stringToHclTerraform(struct!.parseProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    un_match_log_key: {
      value: cdktf.stringToHclTerraform(struct!.unMatchLogKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    un_match_up_load_switch: {
      value: cdktf.booleanToHclTerraform(struct!.unMatchUpLoadSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_key_regex: {
      value: cdktf.listMapperHcl(clsConfigExtractRuleFilterKeyRegexToHclTerraform, true)(struct!.filterKeyRegex),
      isBlock: true,
      type: "list",
      storageClassType: "ClsConfigExtractRuleFilterKeyRegexList",
    },
    meta_tags: {
      value: cdktf.listMapperHcl(clsConfigExtractRuleMetaTagsToHclTerraform, true)(struct!.metaTags),
      isBlock: true,
      type: "list",
      storageClassType: "ClsConfigExtractRuleMetaTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtractRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsConfigExtractRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._backtracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.backtracking = this._backtracking;
    }
    if (this._beginRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginRegex = this._beginRegex;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._isGbk !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGbk = this._isGbk;
    }
    if (this._jsonStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonStandard = this._jsonStandard;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._logRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRegex = this._logRegex;
    }
    if (this._metadataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataType = this._metadataType;
    }
    if (this._parseProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseProtocol = this._parseProtocol;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._unMatchLogKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.unMatchLogKey = this._unMatchLogKey;
    }
    if (this._unMatchUpLoadSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.unMatchUpLoadSwitch = this._unMatchUpLoadSwitch;
    }
    if (this._filterKeyRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKeyRegex = this._filterKeyRegex?.internalValue;
    }
    if (this._metaTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaTags = this._metaTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtractRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._backtracking = undefined;
      this._beginRegex = undefined;
      this._delimiter = undefined;
      this._isGbk = undefined;
      this._jsonStandard = undefined;
      this._keys = undefined;
      this._logRegex = undefined;
      this._metadataType = undefined;
      this._parseProtocol = undefined;
      this._pathRegex = undefined;
      this._protocol = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._unMatchLogKey = undefined;
      this._unMatchUpLoadSwitch = undefined;
      this._filterKeyRegex.internalValue = undefined;
      this._metaTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._backtracking = value.backtracking;
      this._beginRegex = value.beginRegex;
      this._delimiter = value.delimiter;
      this._isGbk = value.isGbk;
      this._jsonStandard = value.jsonStandard;
      this._keys = value.keys;
      this._logRegex = value.logRegex;
      this._metadataType = value.metadataType;
      this._parseProtocol = value.parseProtocol;
      this._pathRegex = value.pathRegex;
      this._protocol = value.protocol;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._unMatchLogKey = value.unMatchLogKey;
      this._unMatchUpLoadSwitch = value.unMatchUpLoadSwitch;
      this._filterKeyRegex.internalValue = value.filterKeyRegex;
      this._metaTags.internalValue = value.metaTags;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // backtracking - computed: false, optional: true, required: false
  private _backtracking?: number; 
  public get backtracking() {
    return this.getNumberAttribute('backtracking');
  }
  public set backtracking(value: number) {
    this._backtracking = value;
  }
  public resetBacktracking() {
    this._backtracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backtrackingInput() {
    return this._backtracking;
  }

  // begin_regex - computed: false, optional: true, required: false
  private _beginRegex?: string; 
  public get beginRegex() {
    return this.getStringAttribute('begin_regex');
  }
  public set beginRegex(value: string) {
    this._beginRegex = value;
  }
  public resetBeginRegex() {
    this._beginRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginRegexInput() {
    return this._beginRegex;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // is_gbk - computed: false, optional: true, required: false
  private _isGbk?: number; 
  public get isGbk() {
    return this.getNumberAttribute('is_gbk');
  }
  public set isGbk(value: number) {
    this._isGbk = value;
  }
  public resetIsGbk() {
    this._isGbk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGbkInput() {
    return this._isGbk;
  }

  // json_standard - computed: false, optional: true, required: false
  private _jsonStandard?: number; 
  public get jsonStandard() {
    return this.getNumberAttribute('json_standard');
  }
  public set jsonStandard(value: number) {
    this._jsonStandard = value;
  }
  public resetJsonStandard() {
    this._jsonStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonStandardInput() {
    return this._jsonStandard;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // log_regex - computed: false, optional: true, required: false
  private _logRegex?: string; 
  public get logRegex() {
    return this.getStringAttribute('log_regex');
  }
  public set logRegex(value: string) {
    this._logRegex = value;
  }
  public resetLogRegex() {
    this._logRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRegexInput() {
    return this._logRegex;
  }

  // metadata_type - computed: false, optional: true, required: false
  private _metadataType?: number; 
  public get metadataType() {
    return this.getNumberAttribute('metadata_type');
  }
  public set metadataType(value: number) {
    this._metadataType = value;
  }
  public resetMetadataType() {
    this._metadataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataTypeInput() {
    return this._metadataType;
  }

  // parse_protocol - computed: false, optional: true, required: false
  private _parseProtocol?: string; 
  public get parseProtocol() {
    return this.getStringAttribute('parse_protocol');
  }
  public set parseProtocol(value: string) {
    this._parseProtocol = value;
  }
  public resetParseProtocol() {
    this._parseProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseProtocolInput() {
    return this._parseProtocol;
  }

  // path_regex - computed: false, optional: true, required: false
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  public resetPathRegex() {
    this._pathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // un_match_log_key - computed: false, optional: true, required: false
  private _unMatchLogKey?: string; 
  public get unMatchLogKey() {
    return this.getStringAttribute('un_match_log_key');
  }
  public set unMatchLogKey(value: string) {
    this._unMatchLogKey = value;
  }
  public resetUnMatchLogKey() {
    this._unMatchLogKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unMatchLogKeyInput() {
    return this._unMatchLogKey;
  }

  // un_match_up_load_switch - computed: false, optional: true, required: false
  private _unMatchUpLoadSwitch?: boolean | cdktf.IResolvable; 
  public get unMatchUpLoadSwitch() {
    return this.getBooleanAttribute('un_match_up_load_switch');
  }
  public set unMatchUpLoadSwitch(value: boolean | cdktf.IResolvable) {
    this._unMatchUpLoadSwitch = value;
  }
  public resetUnMatchUpLoadSwitch() {
    this._unMatchUpLoadSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unMatchUpLoadSwitchInput() {
    return this._unMatchUpLoadSwitch;
  }

  // filter_key_regex - computed: false, optional: true, required: false
  private _filterKeyRegex = new ClsConfigExtractRuleFilterKeyRegexList(this, "filter_key_regex", false);
  public get filterKeyRegex() {
    return this._filterKeyRegex;
  }
  public putFilterKeyRegex(value: ClsConfigExtractRuleFilterKeyRegex[] | cdktf.IResolvable) {
    this._filterKeyRegex.internalValue = value;
  }
  public resetFilterKeyRegex() {
    this._filterKeyRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeyRegexInput() {
    return this._filterKeyRegex.internalValue;
  }

  // meta_tags - computed: false, optional: true, required: false
  private _metaTags = new ClsConfigExtractRuleMetaTagsList(this, "meta_tags", false);
  public get metaTags() {
    return this._metaTags;
  }
  public putMetaTags(value: ClsConfigExtractRuleMetaTags[] | cdktf.IResolvable) {
    this._metaTags.internalValue = value;
  }
  public resetMetaTags() {
    this._metaTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaTagsInput() {
    return this._metaTags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config tencentcloud_cls_config}
*/
export class ClsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsConfig to import
  * @param importFromId The id of the existing ClsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config tencentcloud_cls_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ClsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._logType = config.logType;
    this._name = config.name;
    this._output = config.output;
    this._path = config.path;
    this._userDefineRule = config.userDefineRule;
    this._excludePaths.internalValue = config.excludePaths;
    this._extractRule.internalValue = config.extractRule;
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

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
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

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // user_define_rule - computed: false, optional: true, required: false
  private _userDefineRule?: string; 
  public get userDefineRule() {
    return this.getStringAttribute('user_define_rule');
  }
  public set userDefineRule(value: string) {
    this._userDefineRule = value;
  }
  public resetUserDefineRule() {
    this._userDefineRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefineRuleInput() {
    return this._userDefineRule;
  }

  // exclude_paths - computed: false, optional: true, required: false
  private _excludePaths = new ClsConfigExcludePathsList(this, "exclude_paths", false);
  public get excludePaths() {
    return this._excludePaths;
  }
  public putExcludePaths(value: ClsConfigExcludePaths[] | cdktf.IResolvable) {
    this._excludePaths.internalValue = value;
  }
  public resetExcludePaths() {
    this._excludePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths.internalValue;
  }

  // extract_rule - computed: false, optional: false, required: true
  private _extractRule = new ClsConfigExtractRuleOutputReference(this, "extract_rule");
  public get extractRule() {
    return this._extractRule;
  }
  public putExtractRule(value: ClsConfigExtractRule) {
    this._extractRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extractRuleInput() {
    return this._extractRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_type: cdktf.stringToTerraform(this._logType),
      name: cdktf.stringToTerraform(this._name),
      output: cdktf.stringToTerraform(this._output),
      path: cdktf.stringToTerraform(this._path),
      user_define_rule: cdktf.stringToTerraform(this._userDefineRule),
      exclude_paths: cdktf.listMapper(clsConfigExcludePathsToTerraform, true)(this._excludePaths.internalValue),
      extract_rule: clsConfigExtractRuleToTerraform(this._extractRule.internalValue),
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
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
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
      output: {
        value: cdktf.stringToHclTerraform(this._output),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_define_rule: {
        value: cdktf.stringToHclTerraform(this._userDefineRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_paths: {
        value: cdktf.listMapperHcl(clsConfigExcludePathsToHclTerraform, true)(this._excludePaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsConfigExcludePathsList",
      },
      extract_rule: {
        value: clsConfigExtractRuleToHclTerraform(this._extractRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsConfigExtractRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
