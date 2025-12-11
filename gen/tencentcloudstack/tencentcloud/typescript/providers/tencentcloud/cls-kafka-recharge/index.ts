// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsKafkaRechargeConfig extends cdktf.TerraformMetaArguments {
  /**
  * user consumer group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#consumer_group_name ClsKafkaRecharge#consumer_group_name}
  */
  readonly consumerGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#id ClsKafkaRecharge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ServerAddr is encryption addr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#is_encryption_addr ClsKafkaRecharge#is_encryption_addr}
  */
  readonly isEncryptionAddr?: boolean | cdktf.IResolvable;
  /**
  * CKafka Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#kafka_instance ClsKafkaRecharge#kafka_instance}
  */
  readonly kafkaInstance?: string;
  /**
  * kafka recharge type, 0 for CKafka, 1 fro user define Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#kafka_type ClsKafkaRecharge#kafka_type}
  */
  readonly kafkaType: number;
  /**
  * kafka recharge name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#name ClsKafkaRecharge#name}
  */
  readonly name: string;
  /**
  * The translation is: -2: Earliest (default) -1: Latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#offset ClsKafkaRecharge#offset}
  */
  readonly offset: number;
  /**
  * Server addr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#server_addr ClsKafkaRecharge#server_addr}
  */
  readonly serverAddr?: string;
  /**
  * recharge for cls TopicId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#topic_id ClsKafkaRecharge#topic_id}
  */
  readonly topicId: string;
  /**
  * user need recharge kafka topic list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#user_kafka_topics ClsKafkaRecharge#user_kafka_topics}
  */
  readonly userKafkaTopics: string;
  /**
  * log_recharge_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#log_recharge_rule ClsKafkaRecharge#log_recharge_rule}
  */
  readonly logRechargeRule?: ClsKafkaRechargeLogRechargeRule;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#protocol ClsKafkaRecharge#protocol}
  */
  readonly protocol?: ClsKafkaRechargeProtocol;
}
export interface ClsKafkaRechargeLogRechargeRule {
  /**
  * default time from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#default_time_src ClsKafkaRecharge#default_time_src}
  */
  readonly defaultTimeSrc?: number;
  /**
  * user default time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#default_time_switch ClsKafkaRecharge#default_time_switch}
  */
  readonly defaultTimeSwitch: boolean | cdktf.IResolvable;
  /**
  * encoding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#encoding_format ClsKafkaRecharge#encoding_format}
  */
  readonly encodingFormat: number;
  /**
  * log key list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#keys ClsKafkaRecharge#keys}
  */
  readonly keys?: string[];
  /**
  * log regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#log_regex ClsKafkaRecharge#log_regex}
  */
  readonly logRegex?: string;
  /**
  * metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#metadata ClsKafkaRecharge#metadata}
  */
  readonly metadata?: string[];
  /**
  * recharge type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#recharge_type ClsKafkaRecharge#recharge_type}
  */
  readonly rechargeType: string;
  /**
  * time format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#time_format ClsKafkaRecharge#time_format}
  */
  readonly timeFormat?: string;
  /**
  * time key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#time_key ClsKafkaRecharge#time_key}
  */
  readonly timeKey?: string;
  /**
  * time regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#time_regex ClsKafkaRecharge#time_regex}
  */
  readonly timeRegex?: string;
  /**
  * time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#time_zone ClsKafkaRecharge#time_zone}
  */
  readonly timeZone?: string;
  /**
  * parse failed log key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#un_match_log_key ClsKafkaRecharge#un_match_log_key}
  */
  readonly unMatchLogKey?: string;
  /**
  * is push parse failed log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#un_match_log_switch ClsKafkaRecharge#un_match_log_switch}
  */
  readonly unMatchLogSwitch?: boolean | cdktf.IResolvable;
  /**
  * parse failed log time from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#un_match_log_time_src ClsKafkaRecharge#un_match_log_time_src}
  */
  readonly unMatchLogTimeSrc?: number;
}

export function clsKafkaRechargeLogRechargeRuleToTerraform(struct?: ClsKafkaRechargeLogRechargeRuleOutputReference | ClsKafkaRechargeLogRechargeRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_time_src: cdktf.numberToTerraform(struct!.defaultTimeSrc),
    default_time_switch: cdktf.booleanToTerraform(struct!.defaultTimeSwitch),
    encoding_format: cdktf.numberToTerraform(struct!.encodingFormat),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    log_regex: cdktf.stringToTerraform(struct!.logRegex),
    metadata: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadata),
    recharge_type: cdktf.stringToTerraform(struct!.rechargeType),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_regex: cdktf.stringToTerraform(struct!.timeRegex),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    un_match_log_key: cdktf.stringToTerraform(struct!.unMatchLogKey),
    un_match_log_switch: cdktf.booleanToTerraform(struct!.unMatchLogSwitch),
    un_match_log_time_src: cdktf.numberToTerraform(struct!.unMatchLogTimeSrc),
  }
}


export function clsKafkaRechargeLogRechargeRuleToHclTerraform(struct?: ClsKafkaRechargeLogRechargeRuleOutputReference | ClsKafkaRechargeLogRechargeRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_time_src: {
      value: cdktf.numberToHclTerraform(struct!.defaultTimeSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_time_switch: {
      value: cdktf.booleanToHclTerraform(struct!.defaultTimeSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding_format: {
      value: cdktf.numberToHclTerraform(struct!.encodingFormat),
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
    metadata: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metadata),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    recharge_type: {
      value: cdktf.stringToHclTerraform(struct!.rechargeType),
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
    time_regex: {
      value: cdktf.stringToHclTerraform(struct!.timeRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
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
    un_match_log_switch: {
      value: cdktf.booleanToHclTerraform(struct!.unMatchLogSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    un_match_log_time_src: {
      value: cdktf.numberToHclTerraform(struct!.unMatchLogTimeSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsKafkaRechargeLogRechargeRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsKafkaRechargeLogRechargeRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTimeSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTimeSrc = this._defaultTimeSrc;
    }
    if (this._defaultTimeSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTimeSwitch = this._defaultTimeSwitch;
    }
    if (this._encodingFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingFormat = this._encodingFormat;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._logRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRegex = this._logRegex;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._rechargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rechargeType = this._rechargeType;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRegex = this._timeRegex;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._unMatchLogKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.unMatchLogKey = this._unMatchLogKey;
    }
    if (this._unMatchLogSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.unMatchLogSwitch = this._unMatchLogSwitch;
    }
    if (this._unMatchLogTimeSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.unMatchLogTimeSrc = this._unMatchLogTimeSrc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsKafkaRechargeLogRechargeRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTimeSrc = undefined;
      this._defaultTimeSwitch = undefined;
      this._encodingFormat = undefined;
      this._keys = undefined;
      this._logRegex = undefined;
      this._metadata = undefined;
      this._rechargeType = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeRegex = undefined;
      this._timeZone = undefined;
      this._unMatchLogKey = undefined;
      this._unMatchLogSwitch = undefined;
      this._unMatchLogTimeSrc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTimeSrc = value.defaultTimeSrc;
      this._defaultTimeSwitch = value.defaultTimeSwitch;
      this._encodingFormat = value.encodingFormat;
      this._keys = value.keys;
      this._logRegex = value.logRegex;
      this._metadata = value.metadata;
      this._rechargeType = value.rechargeType;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeRegex = value.timeRegex;
      this._timeZone = value.timeZone;
      this._unMatchLogKey = value.unMatchLogKey;
      this._unMatchLogSwitch = value.unMatchLogSwitch;
      this._unMatchLogTimeSrc = value.unMatchLogTimeSrc;
    }
  }

  // default_time_src - computed: false, optional: true, required: false
  private _defaultTimeSrc?: number; 
  public get defaultTimeSrc() {
    return this.getNumberAttribute('default_time_src');
  }
  public set defaultTimeSrc(value: number) {
    this._defaultTimeSrc = value;
  }
  public resetDefaultTimeSrc() {
    this._defaultTimeSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeSrcInput() {
    return this._defaultTimeSrc;
  }

  // default_time_switch - computed: false, optional: false, required: true
  private _defaultTimeSwitch?: boolean | cdktf.IResolvable; 
  public get defaultTimeSwitch() {
    return this.getBooleanAttribute('default_time_switch');
  }
  public set defaultTimeSwitch(value: boolean | cdktf.IResolvable) {
    this._defaultTimeSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeSwitchInput() {
    return this._defaultTimeSwitch;
  }

  // encoding_format - computed: false, optional: false, required: true
  private _encodingFormat?: number; 
  public get encodingFormat() {
    return this.getNumberAttribute('encoding_format');
  }
  public set encodingFormat(value: number) {
    this._encodingFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingFormatInput() {
    return this._encodingFormat;
  }

  // keys - computed: true, optional: true, required: false
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string[]; 
  public get metadata() {
    return cdktf.Fn.tolist(this.getListAttribute('metadata'));
  }
  public set metadata(value: string[]) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // recharge_type - computed: false, optional: false, required: true
  private _rechargeType?: string; 
  public get rechargeType() {
    return this.getStringAttribute('recharge_type');
  }
  public set rechargeType(value: string) {
    this._rechargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rechargeTypeInput() {
    return this._rechargeType;
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

  // time_regex - computed: false, optional: true, required: false
  private _timeRegex?: string; 
  public get timeRegex() {
    return this.getStringAttribute('time_regex');
  }
  public set timeRegex(value: string) {
    this._timeRegex = value;
  }
  public resetTimeRegex() {
    this._timeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRegexInput() {
    return this._timeRegex;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
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

  // un_match_log_switch - computed: false, optional: true, required: false
  private _unMatchLogSwitch?: boolean | cdktf.IResolvable; 
  public get unMatchLogSwitch() {
    return this.getBooleanAttribute('un_match_log_switch');
  }
  public set unMatchLogSwitch(value: boolean | cdktf.IResolvable) {
    this._unMatchLogSwitch = value;
  }
  public resetUnMatchLogSwitch() {
    this._unMatchLogSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unMatchLogSwitchInput() {
    return this._unMatchLogSwitch;
  }

  // un_match_log_time_src - computed: false, optional: true, required: false
  private _unMatchLogTimeSrc?: number; 
  public get unMatchLogTimeSrc() {
    return this.getNumberAttribute('un_match_log_time_src');
  }
  public set unMatchLogTimeSrc(value: number) {
    this._unMatchLogTimeSrc = value;
  }
  public resetUnMatchLogTimeSrc() {
    this._unMatchLogTimeSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unMatchLogTimeSrcInput() {
    return this._unMatchLogTimeSrc;
  }
}
export interface ClsKafkaRechargeProtocol {
  /**
  * encryption type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#mechanism ClsKafkaRecharge#mechanism}
  */
  readonly mechanism?: string;
  /**
  * user password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#password ClsKafkaRecharge#password}
  */
  readonly password?: string;
  /**
  * protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#protocol ClsKafkaRecharge#protocol}
  */
  readonly protocol?: string;
  /**
  * username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#user_name ClsKafkaRecharge#user_name}
  */
  readonly userName?: string;
}

export function clsKafkaRechargeProtocolToTerraform(struct?: ClsKafkaRechargeProtocolOutputReference | ClsKafkaRechargeProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    password: cdktf.stringToTerraform(struct!.password),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function clsKafkaRechargeProtocolToHclTerraform(struct?: ClsKafkaRechargeProtocolOutputReference | ClsKafkaRechargeProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsKafkaRechargeProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsKafkaRechargeProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsKafkaRechargeProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mechanism = undefined;
      this._password = undefined;
      this._protocol = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mechanism = value.mechanism;
      this._password = value.password;
      this._protocol = value.protocol;
      this._userName = value.userName;
    }
  }

  // mechanism - computed: false, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge tencentcloud_cls_kafka_recharge}
*/
export class ClsKafkaRecharge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_kafka_recharge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsKafkaRecharge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsKafkaRecharge to import
  * @param importFromId The id of the existing ClsKafkaRecharge that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsKafkaRecharge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_kafka_recharge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_kafka_recharge tencentcloud_cls_kafka_recharge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsKafkaRechargeConfig
  */
  public constructor(scope: Construct, id: string, config: ClsKafkaRechargeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_kafka_recharge',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerGroupName = config.consumerGroupName;
    this._id = config.id;
    this._isEncryptionAddr = config.isEncryptionAddr;
    this._kafkaInstance = config.kafkaInstance;
    this._kafkaType = config.kafkaType;
    this._name = config.name;
    this._offset = config.offset;
    this._serverAddr = config.serverAddr;
    this._topicId = config.topicId;
    this._userKafkaTopics = config.userKafkaTopics;
    this._logRechargeRule.internalValue = config.logRechargeRule;
    this._protocol.internalValue = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_group_name - computed: false, optional: true, required: false
  private _consumerGroupName?: string; 
  public get consumerGroupName() {
    return this.getStringAttribute('consumer_group_name');
  }
  public set consumerGroupName(value: string) {
    this._consumerGroupName = value;
  }
  public resetConsumerGroupName() {
    this._consumerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupNameInput() {
    return this._consumerGroupName;
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

  // is_encryption_addr - computed: true, optional: true, required: false
  private _isEncryptionAddr?: boolean | cdktf.IResolvable; 
  public get isEncryptionAddr() {
    return this.getBooleanAttribute('is_encryption_addr');
  }
  public set isEncryptionAddr(value: boolean | cdktf.IResolvable) {
    this._isEncryptionAddr = value;
  }
  public resetIsEncryptionAddr() {
    this._isEncryptionAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncryptionAddrInput() {
    return this._isEncryptionAddr;
  }

  // kafka_instance - computed: false, optional: true, required: false
  private _kafkaInstance?: string; 
  public get kafkaInstance() {
    return this.getStringAttribute('kafka_instance');
  }
  public set kafkaInstance(value: string) {
    this._kafkaInstance = value;
  }
  public resetKafkaInstance() {
    this._kafkaInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInstanceInput() {
    return this._kafkaInstance;
  }

  // kafka_type - computed: false, optional: false, required: true
  private _kafkaType?: number; 
  public get kafkaType() {
    return this.getNumberAttribute('kafka_type');
  }
  public set kafkaType(value: number) {
    this._kafkaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTypeInput() {
    return this._kafkaType;
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

  // offset - computed: false, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // server_addr - computed: false, optional: true, required: false
  private _serverAddr?: string; 
  public get serverAddr() {
    return this.getStringAttribute('server_addr');
  }
  public set serverAddr(value: string) {
    this._serverAddr = value;
  }
  public resetServerAddr() {
    this._serverAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddrInput() {
    return this._serverAddr;
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

  // user_kafka_topics - computed: false, optional: false, required: true
  private _userKafkaTopics?: string; 
  public get userKafkaTopics() {
    return this.getStringAttribute('user_kafka_topics');
  }
  public set userKafkaTopics(value: string) {
    this._userKafkaTopics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userKafkaTopicsInput() {
    return this._userKafkaTopics;
  }

  // log_recharge_rule - computed: false, optional: true, required: false
  private _logRechargeRule = new ClsKafkaRechargeLogRechargeRuleOutputReference(this, "log_recharge_rule");
  public get logRechargeRule() {
    return this._logRechargeRule;
  }
  public putLogRechargeRule(value: ClsKafkaRechargeLogRechargeRule) {
    this._logRechargeRule.internalValue = value;
  }
  public resetLogRechargeRule() {
    this._logRechargeRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRechargeRuleInput() {
    return this._logRechargeRule.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new ClsKafkaRechargeProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: ClsKafkaRechargeProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_group_name: cdktf.stringToTerraform(this._consumerGroupName),
      id: cdktf.stringToTerraform(this._id),
      is_encryption_addr: cdktf.booleanToTerraform(this._isEncryptionAddr),
      kafka_instance: cdktf.stringToTerraform(this._kafkaInstance),
      kafka_type: cdktf.numberToTerraform(this._kafkaType),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      server_addr: cdktf.stringToTerraform(this._serverAddr),
      topic_id: cdktf.stringToTerraform(this._topicId),
      user_kafka_topics: cdktf.stringToTerraform(this._userKafkaTopics),
      log_recharge_rule: clsKafkaRechargeLogRechargeRuleToTerraform(this._logRechargeRule.internalValue),
      protocol: clsKafkaRechargeProtocolToTerraform(this._protocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_group_name: {
        value: cdktf.stringToHclTerraform(this._consumerGroupName),
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
      is_encryption_addr: {
        value: cdktf.booleanToHclTerraform(this._isEncryptionAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_instance: {
        value: cdktf.stringToHclTerraform(this._kafkaInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_type: {
        value: cdktf.numberToHclTerraform(this._kafkaType),
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
      server_addr: {
        value: cdktf.stringToHclTerraform(this._serverAddr),
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
      user_kafka_topics: {
        value: cdktf.stringToHclTerraform(this._userKafkaTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_recharge_rule: {
        value: clsKafkaRechargeLogRechargeRuleToHclTerraform(this._logRechargeRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsKafkaRechargeLogRechargeRuleList",
      },
      protocol: {
        value: clsKafkaRechargeProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsKafkaRechargeProtocolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
