// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsCosRechargeConfig extends cdktf.TerraformMetaArguments {
  /**
  * cos bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#bucket ClsCosRecharge#bucket}
  */
  readonly bucket: string;
  /**
  * cos bucket region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#bucket_region ClsCosRecharge#bucket_region}
  */
  readonly bucketRegion: string;
  /**
  * supported gzip, lzop, snappy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#compress ClsCosRecharge#compress}
  */
  readonly compress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#id ClsCosRecharge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * log type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#log_type ClsCosRecharge#log_type}
  */
  readonly logType: string;
  /**
  * logset id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#logset_id ClsCosRecharge#logset_id}
  */
  readonly logsetId: string;
  /**
  * recharge name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#name ClsCosRecharge#name}
  */
  readonly name: string;
  /**
  * cos file prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#prefix ClsCosRecharge#prefix}
  */
  readonly prefix: string;
  /**
  * topic id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#topic_id ClsCosRecharge#topic_id}
  */
  readonly topicId: string;
  /**
  * extract_rule_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#extract_rule_info ClsCosRecharge#extract_rule_info}
  */
  readonly extractRuleInfo?: ClsCosRechargeExtractRuleInfo;
}
export interface ClsCosRechargeExtractRuleInfoFilterKeyRegex {
  /**
  * need filter log key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#key ClsCosRecharge#key}
  */
  readonly key: string;
  /**
  * need filter log regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#regex ClsCosRecharge#regex}
  */
  readonly regex: string;
}

export function clsCosRechargeExtractRuleInfoFilterKeyRegexToTerraform(struct?: ClsCosRechargeExtractRuleInfoFilterKeyRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function clsCosRechargeExtractRuleInfoFilterKeyRegexToHclTerraform(struct?: ClsCosRechargeExtractRuleInfoFilterKeyRegex | cdktf.IResolvable): any {
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

export class ClsCosRechargeExtractRuleInfoFilterKeyRegexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsCosRechargeExtractRuleInfoFilterKeyRegex | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClsCosRechargeExtractRuleInfoFilterKeyRegex | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ClsCosRechargeExtractRuleInfoFilterKeyRegexList extends cdktf.ComplexList {
  public internalValue? : ClsCosRechargeExtractRuleInfoFilterKeyRegex[] | cdktf.IResolvable

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
  public get(index: number): ClsCosRechargeExtractRuleInfoFilterKeyRegexOutputReference {
    return new ClsCosRechargeExtractRuleInfoFilterKeyRegexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsCosRechargeExtractRuleInfoMetaTags {
  /**
  * metadata key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#key ClsCosRecharge#key}
  */
  readonly key?: string;
  /**
  * metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#value ClsCosRecharge#value}
  */
  readonly value?: string;
}

export function clsCosRechargeExtractRuleInfoMetaTagsToTerraform(struct?: ClsCosRechargeExtractRuleInfoMetaTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clsCosRechargeExtractRuleInfoMetaTagsToHclTerraform(struct?: ClsCosRechargeExtractRuleInfoMetaTags | cdktf.IResolvable): any {
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

export class ClsCosRechargeExtractRuleInfoMetaTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsCosRechargeExtractRuleInfoMetaTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClsCosRechargeExtractRuleInfoMetaTags | cdktf.IResolvable | undefined) {
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

export class ClsCosRechargeExtractRuleInfoMetaTagsList extends cdktf.ComplexList {
  public internalValue? : ClsCosRechargeExtractRuleInfoMetaTags[] | cdktf.IResolvable

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
  public get(index: number): ClsCosRechargeExtractRuleInfoMetaTagsOutputReference {
    return new ClsCosRechargeExtractRuleInfoMetaTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsCosRechargeExtractRuleInfo {
  /**
  * syslog address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#address ClsCosRecharge#address}
  */
  readonly address?: string;
  /**
  * backtracking data volume in incremental acquisition mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#backtracking ClsCosRecharge#backtracking}
  */
  readonly backtracking?: number;
  /**
  * begin line regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#begin_regex ClsCosRecharge#begin_regex}
  */
  readonly beginRegex?: string;
  /**
  * log delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#delimiter ClsCosRecharge#delimiter}
  */
  readonly delimiter?: string;
  /**
  * gbk encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#is_gbk ClsCosRecharge#is_gbk}
  */
  readonly isGbk?: number;
  /**
  * is standard json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#json_standard ClsCosRecharge#json_standard}
  */
  readonly jsonStandard?: number;
  /**
  * key list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#keys ClsCosRecharge#keys}
  */
  readonly keys?: string[];
  /**
  * log regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#log_regex ClsCosRecharge#log_regex}
  */
  readonly logRegex?: string;
  /**
  * metadata type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#metadata_type ClsCosRecharge#metadata_type}
  */
  readonly metadataType?: number;
  /**
  * parse protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#parse_protocol ClsCosRecharge#parse_protocol}
  */
  readonly parseProtocol?: string;
  /**
  * metadata path regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#path_regex ClsCosRecharge#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * syslog protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#protocol ClsCosRecharge#protocol}
  */
  readonly protocol?: string;
  /**
  * time format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#time_format ClsCosRecharge#time_format}
  */
  readonly timeFormat?: string;
  /**
  * time key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#time_key ClsCosRecharge#time_key}
  */
  readonly timeKey?: string;
  /**
  * parsing failure log key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#un_match_log_key ClsCosRecharge#un_match_log_key}
  */
  readonly unMatchLogKey?: string;
  /**
  * whether to upload the parsing failure log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#un_match_up_load_switch ClsCosRecharge#un_match_up_load_switch}
  */
  readonly unMatchUpLoadSwitch?: boolean | cdktf.IResolvable;
  /**
  * filter_key_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#filter_key_regex ClsCosRecharge#filter_key_regex}
  */
  readonly filterKeyRegex?: ClsCosRechargeExtractRuleInfoFilterKeyRegex[] | cdktf.IResolvable;
  /**
  * meta_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#meta_tags ClsCosRecharge#meta_tags}
  */
  readonly metaTags?: ClsCosRechargeExtractRuleInfoMetaTags[] | cdktf.IResolvable;
}

export function clsCosRechargeExtractRuleInfoToTerraform(struct?: ClsCosRechargeExtractRuleInfoOutputReference | ClsCosRechargeExtractRuleInfo): any {
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
    filter_key_regex: cdktf.listMapper(clsCosRechargeExtractRuleInfoFilterKeyRegexToTerraform, true)(struct!.filterKeyRegex),
    meta_tags: cdktf.listMapper(clsCosRechargeExtractRuleInfoMetaTagsToTerraform, true)(struct!.metaTags),
  }
}


export function clsCosRechargeExtractRuleInfoToHclTerraform(struct?: ClsCosRechargeExtractRuleInfoOutputReference | ClsCosRechargeExtractRuleInfo): any {
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
      value: cdktf.listMapperHcl(clsCosRechargeExtractRuleInfoFilterKeyRegexToHclTerraform, true)(struct!.filterKeyRegex),
      isBlock: true,
      type: "list",
      storageClassType: "ClsCosRechargeExtractRuleInfoFilterKeyRegexList",
    },
    meta_tags: {
      value: cdktf.listMapperHcl(clsCosRechargeExtractRuleInfoMetaTagsToHclTerraform, true)(struct!.metaTags),
      isBlock: true,
      type: "list",
      storageClassType: "ClsCosRechargeExtractRuleInfoMetaTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCosRechargeExtractRuleInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsCosRechargeExtractRuleInfo | undefined {
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

  public set internalValue(value: ClsCosRechargeExtractRuleInfo | undefined) {
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
  private _filterKeyRegex = new ClsCosRechargeExtractRuleInfoFilterKeyRegexList(this, "filter_key_regex", false);
  public get filterKeyRegex() {
    return this._filterKeyRegex;
  }
  public putFilterKeyRegex(value: ClsCosRechargeExtractRuleInfoFilterKeyRegex[] | cdktf.IResolvable) {
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
  private _metaTags = new ClsCosRechargeExtractRuleInfoMetaTagsList(this, "meta_tags", false);
  public get metaTags() {
    return this._metaTags;
  }
  public putMetaTags(value: ClsCosRechargeExtractRuleInfoMetaTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge tencentcloud_cls_cos_recharge}
*/
export class ClsCosRecharge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_cos_recharge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsCosRecharge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsCosRecharge to import
  * @param importFromId The id of the existing ClsCosRecharge that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsCosRecharge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_cos_recharge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cls_cos_recharge tencentcloud_cls_cos_recharge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsCosRechargeConfig
  */
  public constructor(scope: Construct, id: string, config: ClsCosRechargeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_cos_recharge',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._bucketRegion = config.bucketRegion;
    this._compress = config.compress;
    this._id = config.id;
    this._logType = config.logType;
    this._logsetId = config.logsetId;
    this._name = config.name;
    this._prefix = config.prefix;
    this._topicId = config.topicId;
    this._extractRuleInfo.internalValue = config.extractRuleInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_region - computed: false, optional: false, required: true
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: string; 
  public get compress() {
    return this.getStringAttribute('compress');
  }
  public set compress(value: string) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
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

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // logset_id - computed: false, optional: false, required: true
  private _logsetId?: string; 
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }
  public set logsetId(value: string) {
    this._logsetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetIdInput() {
    return this._logsetId;
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

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // extract_rule_info - computed: false, optional: true, required: false
  private _extractRuleInfo = new ClsCosRechargeExtractRuleInfoOutputReference(this, "extract_rule_info");
  public get extractRuleInfo() {
    return this._extractRuleInfo;
  }
  public putExtractRuleInfo(value: ClsCosRechargeExtractRuleInfo) {
    this._extractRuleInfo.internalValue = value;
  }
  public resetExtractRuleInfo() {
    this._extractRuleInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractRuleInfoInput() {
    return this._extractRuleInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_region: cdktf.stringToTerraform(this._bucketRegion),
      compress: cdktf.stringToTerraform(this._compress),
      id: cdktf.stringToTerraform(this._id),
      log_type: cdktf.stringToTerraform(this._logType),
      logset_id: cdktf.stringToTerraform(this._logsetId),
      name: cdktf.stringToTerraform(this._name),
      prefix: cdktf.stringToTerraform(this._prefix),
      topic_id: cdktf.stringToTerraform(this._topicId),
      extract_rule_info: clsCosRechargeExtractRuleInfoToTerraform(this._extractRuleInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_region: {
        value: cdktf.stringToHclTerraform(this._bucketRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress: {
        value: cdktf.stringToHclTerraform(this._compress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      logset_id: {
        value: cdktf.stringToHclTerraform(this._logsetId),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extract_rule_info: {
        value: clsCosRechargeExtractRuleInfoToHclTerraform(this._extractRuleInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsCosRechargeExtractRuleInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
