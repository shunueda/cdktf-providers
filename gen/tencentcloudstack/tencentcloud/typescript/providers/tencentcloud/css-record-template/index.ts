// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssRecordTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#description CssRecordTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#id CssRecordTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Live broadcast type, 0 by default. 0: Ordinary live broadcast, 1: Slow broadcast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#is_delay_live CssRecordTemplate#is_delay_live}
  */
  readonly isDelayLive?: number;
  /**
  * Whether to remove the watermark. This parameter is invalid when the type is slow live broadcast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#remove_watermark CssRecordTemplate#remove_watermark}
  */
  readonly removeWatermark?: boolean | cdktf.IResolvable;
  /**
  * Template name. Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#template_name CssRecordTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * aac_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#aac_param CssRecordTemplate#aac_param}
  */
  readonly aacParam?: CssRecordTemplateAacParam;
  /**
  * flv_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#flv_param CssRecordTemplate#flv_param}
  */
  readonly flvParam?: CssRecordTemplateFlvParam;
  /**
  * flv_special_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#flv_special_param CssRecordTemplate#flv_special_param}
  */
  readonly flvSpecialParam?: CssRecordTemplateFlvSpecialParam;
  /**
  * hls_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#hls_param CssRecordTemplate#hls_param}
  */
  readonly hlsParam?: CssRecordTemplateHlsParam;
  /**
  * hls_special_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#hls_special_param CssRecordTemplate#hls_special_param}
  */
  readonly hlsSpecialParam?: CssRecordTemplateHlsSpecialParam;
  /**
  * mp3_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#mp3_param CssRecordTemplate#mp3_param}
  */
  readonly mp3Param?: CssRecordTemplateMp3Param;
  /**
  * mp4_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#mp4_param CssRecordTemplate#mp4_param}
  */
  readonly mp4Param?: CssRecordTemplateMp4Param;
}
export interface CssRecordTemplateAacParam {
  /**
  * Classification of on-demand applications. This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#class_id CssRecordTemplate#class_id}
  */
  readonly classId?: number;
  /**
  * Whether to enable recording in the current format. The default value is 0. 0: No, 1: Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#enable CssRecordTemplate#enable}
  */
  readonly enable?: number;
  /**
  * Task flow. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#procedure CssRecordTemplate#procedure}
  */
  readonly procedure?: string;
  /**
  * Recording interval. Unit: second, default: 1800. Value range: 30-7200. This parameter is invalid for HLS. When recording HLS, a file is generated from streaming to streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#record_interval CssRecordTemplate#record_interval}
  */
  readonly recordInterval?: number;
  /**
  * Video storage strategy. Normal: standard storage. Cold: low frequency storage. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_mode CssRecordTemplate#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Recording storage duration. Unit: second. Value range: 0 - 1500 days. 0: indicates permanent storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_time CssRecordTemplate#storage_time}
  */
  readonly storageTime?: number;
  /**
  * Record file name.Special placeholders supported are: `StreamID`: Stream ID,`StartYear`: Start time - year,`StartMonth`: Start time - month,`StartDay`: Start time - day,`StartHour`: Start time - hour,`StartMinute`: Start time - minutes,`StartSecond`: Start time - seconds,`StartMillisecond`: Start time - milliseconds,`EndYear`: End time - year,`EndMonth`: End time - month,`EndDay`: End time - day,`EndHour`: End time - hour,`EndMinute`: End time - minutes,`EndSecond`: End time - seconds,`EndMillisecond`: End time - millisecondsIf the default recording file name is not set as ,`StreamID`,`StartYear`,`StartMonth`,`StartDay`,`StartHour`,`StartMinute`,`StartSecond`,`EndYear`,`EndMonth`,`EndDay`,`EndHour`,`EndMinute`,`EndSecond`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_file_name CssRecordTemplate#vod_file_name}
  */
  readonly vodFileName?: string;
  /**
  * The ID of the on-demand sub app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_sub_app_id CssRecordTemplate#vod_sub_app_id}
  */
  readonly vodSubAppId?: number;
}

export function cssRecordTemplateAacParamToTerraform(struct?: CssRecordTemplateAacParamOutputReference | CssRecordTemplateAacParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_id: cdktf.numberToTerraform(struct!.classId),
    enable: cdktf.numberToTerraform(struct!.enable),
    procedure: cdktf.stringToTerraform(struct!.procedure),
    record_interval: cdktf.numberToTerraform(struct!.recordInterval),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_time: cdktf.numberToTerraform(struct!.storageTime),
    vod_file_name: cdktf.stringToTerraform(struct!.vodFileName),
    vod_sub_app_id: cdktf.numberToTerraform(struct!.vodSubAppId),
  }
}


export function cssRecordTemplateAacParamToHclTerraform(struct?: CssRecordTemplateAacParamOutputReference | CssRecordTemplateAacParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_id: {
      value: cdktf.numberToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    procedure: {
      value: cdktf.stringToHclTerraform(struct!.procedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_interval: {
      value: cdktf.numberToHclTerraform(struct!.recordInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_time: {
      value: cdktf.numberToHclTerraform(struct!.storageTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vod_file_name: {
      value: cdktf.stringToHclTerraform(struct!.vodFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_sub_app_id: {
      value: cdktf.numberToHclTerraform(struct!.vodSubAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssRecordTemplateAacParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssRecordTemplateAacParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._procedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedure = this._procedure;
    }
    if (this._recordInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInterval = this._recordInterval;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storageTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTime = this._storageTime;
    }
    if (this._vodFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodFileName = this._vodFileName;
    }
    if (this._vodSubAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSubAppId = this._vodSubAppId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssRecordTemplateAacParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classId = undefined;
      this._enable = undefined;
      this._procedure = undefined;
      this._recordInterval = undefined;
      this._storageMode = undefined;
      this._storageTime = undefined;
      this._vodFileName = undefined;
      this._vodSubAppId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classId = value.classId;
      this._enable = value.enable;
      this._procedure = value.procedure;
      this._recordInterval = value.recordInterval;
      this._storageMode = value.storageMode;
      this._storageTime = value.storageTime;
      this._vodFileName = value.vodFileName;
      this._vodSubAppId = value.vodSubAppId;
    }
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: number; 
  public get classId() {
    return this.getNumberAttribute('class_id');
  }
  public set classId(value: number) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // procedure - computed: false, optional: true, required: false
  private _procedure?: string; 
  public get procedure() {
    return this.getStringAttribute('procedure');
  }
  public set procedure(value: string) {
    this._procedure = value;
  }
  public resetProcedure() {
    this._procedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureInput() {
    return this._procedure;
  }

  // record_interval - computed: false, optional: true, required: false
  private _recordInterval?: number; 
  public get recordInterval() {
    return this.getNumberAttribute('record_interval');
  }
  public set recordInterval(value: number) {
    this._recordInterval = value;
  }
  public resetRecordInterval() {
    this._recordInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIntervalInput() {
    return this._recordInterval;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_time - computed: false, optional: true, required: false
  private _storageTime?: number; 
  public get storageTime() {
    return this.getNumberAttribute('storage_time');
  }
  public set storageTime(value: number) {
    this._storageTime = value;
  }
  public resetStorageTime() {
    this._storageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTimeInput() {
    return this._storageTime;
  }

  // vod_file_name - computed: false, optional: true, required: false
  private _vodFileName?: string; 
  public get vodFileName() {
    return this.getStringAttribute('vod_file_name');
  }
  public set vodFileName(value: string) {
    this._vodFileName = value;
  }
  public resetVodFileName() {
    this._vodFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodFileNameInput() {
    return this._vodFileName;
  }

  // vod_sub_app_id - computed: false, optional: true, required: false
  private _vodSubAppId?: number; 
  public get vodSubAppId() {
    return this.getNumberAttribute('vod_sub_app_id');
  }
  public set vodSubAppId(value: number) {
    this._vodSubAppId = value;
  }
  public resetVodSubAppId() {
    this._vodSubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSubAppIdInput() {
    return this._vodSubAppId;
  }
}
export interface CssRecordTemplateFlvParam {
  /**
  * Classification of on-demand applications. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#class_id CssRecordTemplate#class_id}
  */
  readonly classId?: number;
  /**
  * Whether to enable recording in the current format. The default value is 0. 0: No, 1: Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#enable CssRecordTemplate#enable}
  */
  readonly enable?: number;
  /**
  * Task flow. This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#procedure CssRecordTemplate#procedure}
  */
  readonly procedure?: string;
  /**
  * Recording interval.  Unit: second, default: 1800.  Value range: 30-7200.  This parameter is invalid for HLS. When recording HLS, a file is generated from streaming to streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#record_interval CssRecordTemplate#record_interval}
  */
  readonly recordInterval?: number;
  /**
  * Video storage strategy. Normal: standard storage. Cold: low frequency storage. This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_mode CssRecordTemplate#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Recording storage duration.  Unit: second. Value range: 0 - 1500 days.  0: indicates permanent storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_time CssRecordTemplate#storage_time}
  */
  readonly storageTime?: number;
  /**
  * Record file name.Special placeholders supported are: `StreamID`: Stream ID,`StartYear`: Start time - year,`StartMonth`: Start time - month,`StartDay`: Start time - day,`StartHour`: Start time - hour,`StartMinute`: Start time - minutes,`StartSecond`: Start time - seconds,`StartMillisecond`: Start time - milliseconds,`EndYear`: End time - year,`EndMonth`: End time - month,`EndDay`: End time - day,`EndHour`: End time - hour,`EndMinute`: End time - minutes,`EndSecond`: End time - seconds,`EndMillisecond`: End time - millisecondsIf the default recording file name is not set as ,`StreamID`_ ,`StartYear`-,`StartMonth`-,`StartDay`-,`StartHour`-,`StartMinute`-,`StartSecond`_ ,`EndYear`-,`EndMonth`-,`EndDay`-,`EndHour`-,`EndMinute`-,`EndSecond`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_file_name CssRecordTemplate#vod_file_name}
  */
  readonly vodFileName?: string;
  /**
  *  The ID of the vodSub app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_sub_app_id CssRecordTemplate#vod_sub_app_id}
  */
  readonly vodSubAppId?: number;
}

export function cssRecordTemplateFlvParamToTerraform(struct?: CssRecordTemplateFlvParamOutputReference | CssRecordTemplateFlvParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_id: cdktf.numberToTerraform(struct!.classId),
    enable: cdktf.numberToTerraform(struct!.enable),
    procedure: cdktf.stringToTerraform(struct!.procedure),
    record_interval: cdktf.numberToTerraform(struct!.recordInterval),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_time: cdktf.numberToTerraform(struct!.storageTime),
    vod_file_name: cdktf.stringToTerraform(struct!.vodFileName),
    vod_sub_app_id: cdktf.numberToTerraform(struct!.vodSubAppId),
  }
}


export function cssRecordTemplateFlvParamToHclTerraform(struct?: CssRecordTemplateFlvParamOutputReference | CssRecordTemplateFlvParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_id: {
      value: cdktf.numberToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    procedure: {
      value: cdktf.stringToHclTerraform(struct!.procedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_interval: {
      value: cdktf.numberToHclTerraform(struct!.recordInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_time: {
      value: cdktf.numberToHclTerraform(struct!.storageTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vod_file_name: {
      value: cdktf.stringToHclTerraform(struct!.vodFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_sub_app_id: {
      value: cdktf.numberToHclTerraform(struct!.vodSubAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssRecordTemplateFlvParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssRecordTemplateFlvParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._procedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedure = this._procedure;
    }
    if (this._recordInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInterval = this._recordInterval;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storageTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTime = this._storageTime;
    }
    if (this._vodFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodFileName = this._vodFileName;
    }
    if (this._vodSubAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSubAppId = this._vodSubAppId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssRecordTemplateFlvParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classId = undefined;
      this._enable = undefined;
      this._procedure = undefined;
      this._recordInterval = undefined;
      this._storageMode = undefined;
      this._storageTime = undefined;
      this._vodFileName = undefined;
      this._vodSubAppId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classId = value.classId;
      this._enable = value.enable;
      this._procedure = value.procedure;
      this._recordInterval = value.recordInterval;
      this._storageMode = value.storageMode;
      this._storageTime = value.storageTime;
      this._vodFileName = value.vodFileName;
      this._vodSubAppId = value.vodSubAppId;
    }
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: number; 
  public get classId() {
    return this.getNumberAttribute('class_id');
  }
  public set classId(value: number) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // procedure - computed: false, optional: true, required: false
  private _procedure?: string; 
  public get procedure() {
    return this.getStringAttribute('procedure');
  }
  public set procedure(value: string) {
    this._procedure = value;
  }
  public resetProcedure() {
    this._procedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureInput() {
    return this._procedure;
  }

  // record_interval - computed: false, optional: true, required: false
  private _recordInterval?: number; 
  public get recordInterval() {
    return this.getNumberAttribute('record_interval');
  }
  public set recordInterval(value: number) {
    this._recordInterval = value;
  }
  public resetRecordInterval() {
    this._recordInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIntervalInput() {
    return this._recordInterval;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_time - computed: false, optional: true, required: false
  private _storageTime?: number; 
  public get storageTime() {
    return this.getNumberAttribute('storage_time');
  }
  public set storageTime(value: number) {
    this._storageTime = value;
  }
  public resetStorageTime() {
    this._storageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTimeInput() {
    return this._storageTime;
  }

  // vod_file_name - computed: false, optional: true, required: false
  private _vodFileName?: string; 
  public get vodFileName() {
    return this.getStringAttribute('vod_file_name');
  }
  public set vodFileName(value: string) {
    this._vodFileName = value;
  }
  public resetVodFileName() {
    this._vodFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodFileNameInput() {
    return this._vodFileName;
  }

  // vod_sub_app_id - computed: false, optional: true, required: false
  private _vodSubAppId?: number; 
  public get vodSubAppId() {
    return this.getNumberAttribute('vod_sub_app_id');
  }
  public set vodSubAppId(value: number) {
    this._vodSubAppId = value;
  }
  public resetVodSubAppId() {
    this._vodSubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSubAppIdInput() {
    return this._vodSubAppId;
  }
}
export interface CssRecordTemplateFlvSpecialParam {
  /**
  * Whether to enable the transfer while recording is valid only in the flv format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#upload_in_recording CssRecordTemplate#upload_in_recording}
  */
  readonly uploadInRecording?: boolean | cdktf.IResolvable;
}

export function cssRecordTemplateFlvSpecialParamToTerraform(struct?: CssRecordTemplateFlvSpecialParamOutputReference | CssRecordTemplateFlvSpecialParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upload_in_recording: cdktf.booleanToTerraform(struct!.uploadInRecording),
  }
}


export function cssRecordTemplateFlvSpecialParamToHclTerraform(struct?: CssRecordTemplateFlvSpecialParamOutputReference | CssRecordTemplateFlvSpecialParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upload_in_recording: {
      value: cdktf.booleanToHclTerraform(struct!.uploadInRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssRecordTemplateFlvSpecialParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssRecordTemplateFlvSpecialParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uploadInRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadInRecording = this._uploadInRecording;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssRecordTemplateFlvSpecialParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uploadInRecording = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uploadInRecording = value.uploadInRecording;
    }
  }

  // upload_in_recording - computed: false, optional: true, required: false
  private _uploadInRecording?: boolean | cdktf.IResolvable; 
  public get uploadInRecording() {
    return this.getBooleanAttribute('upload_in_recording');
  }
  public set uploadInRecording(value: boolean | cdktf.IResolvable) {
    this._uploadInRecording = value;
  }
  public resetUploadInRecording() {
    this._uploadInRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInRecordingInput() {
    return this._uploadInRecording;
  }
}
export interface CssRecordTemplateHlsParam {
  /**
  * Classification of on-demand applications. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#class_id CssRecordTemplate#class_id}
  */
  readonly classId?: number;
  /**
  * Whether to enable recording in the current format. The default value is 0. 0: No, 1: Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#enable CssRecordTemplate#enable}
  */
  readonly enable?: number;
  /**
  * Task flow. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#procedure CssRecordTemplate#procedure}
  */
  readonly procedure?: string;
  /**
  * Recording interval. Unit: second, default: 1800. Value range: 30-7200. This parameter is invalid for HLS. When recording HLS, a file is generated from streaming to streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#record_interval CssRecordTemplate#record_interval}
  */
  readonly recordInterval?: number;
  /**
  * Video storage strategy. Normal: standard storage. Cold: low frequency storage. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_mode CssRecordTemplate#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Recording storage duration. Unit: second. Value range: 0 - 1500 days. 0: indicates permanent storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_time CssRecordTemplate#storage_time}
  */
  readonly storageTime?: number;
  /**
  * Record file name.Special placeholders supported are: `StreamID`: Stream ID,`StartYear`: Start time - year,`StartMonth`: Start time - month,`StartDay`: Start time - day,`StartHour`: Start time - hour,`StartMinute`: Start time - minutes,`StartSecond`: Start time - seconds,`StartMillisecond`: Start time - milliseconds,`EndYear`: End time - year,`EndMonth`: End time - month,`EndDay`: End time - day,`EndHour`: End time - hour,`EndMinute`: End time - minutes,`EndSecond`: End time - seconds,`EndMillisecond`: End time - millisecondsIf the default recording file name is not set as ,`StreamID`,`StartYear`,`StartMonth`,`StartDay`,`StartHour`,`StartMinute`,`StartSecond`,`EndYear`,`EndMonth`,`EndDay`,`EndHour`,`EndMinute`,`EndSecond`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_file_name CssRecordTemplate#vod_file_name}
  */
  readonly vodFileName?: string;
  /**
  * The ID of the vodSub app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_sub_app_id CssRecordTemplate#vod_sub_app_id}
  */
  readonly vodSubAppId?: number;
}

export function cssRecordTemplateHlsParamToTerraform(struct?: CssRecordTemplateHlsParamOutputReference | CssRecordTemplateHlsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_id: cdktf.numberToTerraform(struct!.classId),
    enable: cdktf.numberToTerraform(struct!.enable),
    procedure: cdktf.stringToTerraform(struct!.procedure),
    record_interval: cdktf.numberToTerraform(struct!.recordInterval),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_time: cdktf.numberToTerraform(struct!.storageTime),
    vod_file_name: cdktf.stringToTerraform(struct!.vodFileName),
    vod_sub_app_id: cdktf.numberToTerraform(struct!.vodSubAppId),
  }
}


export function cssRecordTemplateHlsParamToHclTerraform(struct?: CssRecordTemplateHlsParamOutputReference | CssRecordTemplateHlsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_id: {
      value: cdktf.numberToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    procedure: {
      value: cdktf.stringToHclTerraform(struct!.procedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_interval: {
      value: cdktf.numberToHclTerraform(struct!.recordInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_time: {
      value: cdktf.numberToHclTerraform(struct!.storageTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vod_file_name: {
      value: cdktf.stringToHclTerraform(struct!.vodFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_sub_app_id: {
      value: cdktf.numberToHclTerraform(struct!.vodSubAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssRecordTemplateHlsParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssRecordTemplateHlsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._procedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedure = this._procedure;
    }
    if (this._recordInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInterval = this._recordInterval;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storageTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTime = this._storageTime;
    }
    if (this._vodFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodFileName = this._vodFileName;
    }
    if (this._vodSubAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSubAppId = this._vodSubAppId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssRecordTemplateHlsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classId = undefined;
      this._enable = undefined;
      this._procedure = undefined;
      this._recordInterval = undefined;
      this._storageMode = undefined;
      this._storageTime = undefined;
      this._vodFileName = undefined;
      this._vodSubAppId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classId = value.classId;
      this._enable = value.enable;
      this._procedure = value.procedure;
      this._recordInterval = value.recordInterval;
      this._storageMode = value.storageMode;
      this._storageTime = value.storageTime;
      this._vodFileName = value.vodFileName;
      this._vodSubAppId = value.vodSubAppId;
    }
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: number; 
  public get classId() {
    return this.getNumberAttribute('class_id');
  }
  public set classId(value: number) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // procedure - computed: false, optional: true, required: false
  private _procedure?: string; 
  public get procedure() {
    return this.getStringAttribute('procedure');
  }
  public set procedure(value: string) {
    this._procedure = value;
  }
  public resetProcedure() {
    this._procedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureInput() {
    return this._procedure;
  }

  // record_interval - computed: false, optional: true, required: false
  private _recordInterval?: number; 
  public get recordInterval() {
    return this.getNumberAttribute('record_interval');
  }
  public set recordInterval(value: number) {
    this._recordInterval = value;
  }
  public resetRecordInterval() {
    this._recordInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIntervalInput() {
    return this._recordInterval;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_time - computed: false, optional: true, required: false
  private _storageTime?: number; 
  public get storageTime() {
    return this.getNumberAttribute('storage_time');
  }
  public set storageTime(value: number) {
    this._storageTime = value;
  }
  public resetStorageTime() {
    this._storageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTimeInput() {
    return this._storageTime;
  }

  // vod_file_name - computed: false, optional: true, required: false
  private _vodFileName?: string; 
  public get vodFileName() {
    return this.getStringAttribute('vod_file_name');
  }
  public set vodFileName(value: string) {
    this._vodFileName = value;
  }
  public resetVodFileName() {
    this._vodFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodFileNameInput() {
    return this._vodFileName;
  }

  // vod_sub_app_id - computed: false, optional: true, required: false
  private _vodSubAppId?: number; 
  public get vodSubAppId() {
    return this.getNumberAttribute('vod_sub_app_id');
  }
  public set vodSubAppId(value: number) {
    this._vodSubAppId = value;
  }
  public resetVodSubAppId() {
    this._vodSubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSubAppIdInput() {
    return this._vodSubAppId;
  }
}
export interface CssRecordTemplateHlsSpecialParam {
  /**
  * HLS freewheeling timeout. Value range [0, 1800].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#flow_continue_duration CssRecordTemplate#flow_continue_duration}
  */
  readonly flowContinueDuration?: number;
}

export function cssRecordTemplateHlsSpecialParamToTerraform(struct?: CssRecordTemplateHlsSpecialParamOutputReference | CssRecordTemplateHlsSpecialParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_continue_duration: cdktf.numberToTerraform(struct!.flowContinueDuration),
  }
}


export function cssRecordTemplateHlsSpecialParamToHclTerraform(struct?: CssRecordTemplateHlsSpecialParamOutputReference | CssRecordTemplateHlsSpecialParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_continue_duration: {
      value: cdktf.numberToHclTerraform(struct!.flowContinueDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssRecordTemplateHlsSpecialParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssRecordTemplateHlsSpecialParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowContinueDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowContinueDuration = this._flowContinueDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssRecordTemplateHlsSpecialParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flowContinueDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flowContinueDuration = value.flowContinueDuration;
    }
  }

  // flow_continue_duration - computed: false, optional: true, required: false
  private _flowContinueDuration?: number; 
  public get flowContinueDuration() {
    return this.getNumberAttribute('flow_continue_duration');
  }
  public set flowContinueDuration(value: number) {
    this._flowContinueDuration = value;
  }
  public resetFlowContinueDuration() {
    this._flowContinueDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowContinueDurationInput() {
    return this._flowContinueDuration;
  }
}
export interface CssRecordTemplateMp3Param {
  /**
  * Classification of vod applications. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#class_id CssRecordTemplate#class_id}
  */
  readonly classId?: number;
  /**
  * Whether to enable recording in the current format. The default value is 0. 0: No, 1: Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#enable CssRecordTemplate#enable}
  */
  readonly enable?: number;
  /**
  * Task flow. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#procedure CssRecordTemplate#procedure}
  */
  readonly procedure?: string;
  /**
  * Recording interval. Unit: second, default: 1800. Value range: 30-7200. This parameter is invalid for HLS. When recording HLS, a file is generated from streaming to streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#record_interval CssRecordTemplate#record_interval}
  */
  readonly recordInterval?: number;
  /**
  * Video storage strategy. Normal: standard storage. Cold: low frequency storage. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_mode CssRecordTemplate#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Recording storage duration. Unit: second. Value range: 0 - 1500 days. 0: indicates permanent storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_time CssRecordTemplate#storage_time}
  */
  readonly storageTime?: number;
  /**
  * Record file name.Special placeholders supported are: `StreamID`: Stream ID,`StartYear`: Start time - year,`StartMonth`: Start time - month,`StartDay`: Start time - day,`StartHour`: Start time - hour,`StartMinute`: Start time - minutes,`StartSecond`: Start time - seconds,`StartMillisecond`: Start time - milliseconds,`EndYear`: End time - year,`EndMonth`: End time - month,`EndDay`: End time - day,`EndHour`: End time - hour,`EndMinute`: End time - minutes,`EndSecond`: End time - seconds,`EndMillisecond`: End time - millisecondsIf the default recording file name is not set as ,`StreamID`,`StartYear`,`StartMonth`,`StartDay`,`StartHour`,`StartMinute`, `StartSecond`,`EndYear`,`EndMonth`,`EndDay`,`EndHour`,`EndMinute`,`EndSecond`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_file_name CssRecordTemplate#vod_file_name}
  */
  readonly vodFileName?: string;
  /**
  * The ID of the on-demand sub app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_sub_app_id CssRecordTemplate#vod_sub_app_id}
  */
  readonly vodSubAppId?: number;
}

export function cssRecordTemplateMp3ParamToTerraform(struct?: CssRecordTemplateMp3ParamOutputReference | CssRecordTemplateMp3Param): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_id: cdktf.numberToTerraform(struct!.classId),
    enable: cdktf.numberToTerraform(struct!.enable),
    procedure: cdktf.stringToTerraform(struct!.procedure),
    record_interval: cdktf.numberToTerraform(struct!.recordInterval),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_time: cdktf.numberToTerraform(struct!.storageTime),
    vod_file_name: cdktf.stringToTerraform(struct!.vodFileName),
    vod_sub_app_id: cdktf.numberToTerraform(struct!.vodSubAppId),
  }
}


export function cssRecordTemplateMp3ParamToHclTerraform(struct?: CssRecordTemplateMp3ParamOutputReference | CssRecordTemplateMp3Param): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_id: {
      value: cdktf.numberToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    procedure: {
      value: cdktf.stringToHclTerraform(struct!.procedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_interval: {
      value: cdktf.numberToHclTerraform(struct!.recordInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_time: {
      value: cdktf.numberToHclTerraform(struct!.storageTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vod_file_name: {
      value: cdktf.stringToHclTerraform(struct!.vodFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_sub_app_id: {
      value: cdktf.numberToHclTerraform(struct!.vodSubAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssRecordTemplateMp3ParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssRecordTemplateMp3Param | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._procedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedure = this._procedure;
    }
    if (this._recordInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInterval = this._recordInterval;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storageTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTime = this._storageTime;
    }
    if (this._vodFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodFileName = this._vodFileName;
    }
    if (this._vodSubAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSubAppId = this._vodSubAppId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssRecordTemplateMp3Param | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classId = undefined;
      this._enable = undefined;
      this._procedure = undefined;
      this._recordInterval = undefined;
      this._storageMode = undefined;
      this._storageTime = undefined;
      this._vodFileName = undefined;
      this._vodSubAppId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classId = value.classId;
      this._enable = value.enable;
      this._procedure = value.procedure;
      this._recordInterval = value.recordInterval;
      this._storageMode = value.storageMode;
      this._storageTime = value.storageTime;
      this._vodFileName = value.vodFileName;
      this._vodSubAppId = value.vodSubAppId;
    }
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: number; 
  public get classId() {
    return this.getNumberAttribute('class_id');
  }
  public set classId(value: number) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // procedure - computed: false, optional: true, required: false
  private _procedure?: string; 
  public get procedure() {
    return this.getStringAttribute('procedure');
  }
  public set procedure(value: string) {
    this._procedure = value;
  }
  public resetProcedure() {
    this._procedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureInput() {
    return this._procedure;
  }

  // record_interval - computed: false, optional: true, required: false
  private _recordInterval?: number; 
  public get recordInterval() {
    return this.getNumberAttribute('record_interval');
  }
  public set recordInterval(value: number) {
    this._recordInterval = value;
  }
  public resetRecordInterval() {
    this._recordInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIntervalInput() {
    return this._recordInterval;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_time - computed: false, optional: true, required: false
  private _storageTime?: number; 
  public get storageTime() {
    return this.getNumberAttribute('storage_time');
  }
  public set storageTime(value: number) {
    this._storageTime = value;
  }
  public resetStorageTime() {
    this._storageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTimeInput() {
    return this._storageTime;
  }

  // vod_file_name - computed: false, optional: true, required: false
  private _vodFileName?: string; 
  public get vodFileName() {
    return this.getStringAttribute('vod_file_name');
  }
  public set vodFileName(value: string) {
    this._vodFileName = value;
  }
  public resetVodFileName() {
    this._vodFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodFileNameInput() {
    return this._vodFileName;
  }

  // vod_sub_app_id - computed: false, optional: true, required: false
  private _vodSubAppId?: number; 
  public get vodSubAppId() {
    return this.getNumberAttribute('vod_sub_app_id');
  }
  public set vodSubAppId(value: number) {
    this._vodSubAppId = value;
  }
  public resetVodSubAppId() {
    this._vodSubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSubAppIdInput() {
    return this._vodSubAppId;
  }
}
export interface CssRecordTemplateMp4Param {
  /**
  * Classification of on-demand applications. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#class_id CssRecordTemplate#class_id}
  */
  readonly classId?: number;
  /**
  * Whether to enable recording in the current format. The default value is 0. 0: No, 1: Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#enable CssRecordTemplate#enable}
  */
  readonly enable?: number;
  /**
  * Task flow. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#procedure CssRecordTemplate#procedure}
  */
  readonly procedure?: string;
  /**
  * Recording interval. Unit: second, default: 1800. Value range: 30-7200. This parameter is invalid for HLS. When recording HLS, a file is generated from streaming to streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#record_interval CssRecordTemplate#record_interval}
  */
  readonly recordInterval?: number;
  /**
  * Video storage strategy. Normal: standard storage. Cold: low frequency storage. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_mode CssRecordTemplate#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Recording storage duration. Unit: second. Value range: 0 - 1500 days. 0: indicates permanent storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#storage_time CssRecordTemplate#storage_time}
  */
  readonly storageTime?: number;
  /**
  * Record file name.Special placeholders supported are: `StreamID`: Stream ID,`StartYear`: Start time - year,`StartMonth`: Start time - month,`StartDay`: Start time - day,`StartHour`: Start time - hour,`StartMinute`: Start time - minutes,`StartSecond`: Start time - seconds,`StartMillisecond`: Start time - milliseconds,`EndYear`: End time - year,`EndMonth`: End time - month,`EndDay`: End time - day,`EndHour`: End time - hour,`EndMinute`: End time - minutes,`EndSecond`: End time - seconds,`EndMillisecond`: End time - millisecondsIf the default recording file name is not set as ,`StreamID`,`StartYear`,`StartMonth`,`StartDay`,`StartHour`,`StartMinute`,`StartSecond`,`EndYear`,`EndMonth`,`EndDay`,`EndHour`,`EndMinute`,`EndSecond`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_file_name CssRecordTemplate#vod_file_name}
  */
  readonly vodFileName?: string;
  /**
  * The ID of the on-demand sub app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#vod_sub_app_id CssRecordTemplate#vod_sub_app_id}
  */
  readonly vodSubAppId?: number;
}

export function cssRecordTemplateMp4ParamToTerraform(struct?: CssRecordTemplateMp4ParamOutputReference | CssRecordTemplateMp4Param): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_id: cdktf.numberToTerraform(struct!.classId),
    enable: cdktf.numberToTerraform(struct!.enable),
    procedure: cdktf.stringToTerraform(struct!.procedure),
    record_interval: cdktf.numberToTerraform(struct!.recordInterval),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_time: cdktf.numberToTerraform(struct!.storageTime),
    vod_file_name: cdktf.stringToTerraform(struct!.vodFileName),
    vod_sub_app_id: cdktf.numberToTerraform(struct!.vodSubAppId),
  }
}


export function cssRecordTemplateMp4ParamToHclTerraform(struct?: CssRecordTemplateMp4ParamOutputReference | CssRecordTemplateMp4Param): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_id: {
      value: cdktf.numberToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    procedure: {
      value: cdktf.stringToHclTerraform(struct!.procedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_interval: {
      value: cdktf.numberToHclTerraform(struct!.recordInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_time: {
      value: cdktf.numberToHclTerraform(struct!.storageTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vod_file_name: {
      value: cdktf.stringToHclTerraform(struct!.vodFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_sub_app_id: {
      value: cdktf.numberToHclTerraform(struct!.vodSubAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssRecordTemplateMp4ParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssRecordTemplateMp4Param | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._procedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedure = this._procedure;
    }
    if (this._recordInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInterval = this._recordInterval;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storageTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTime = this._storageTime;
    }
    if (this._vodFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodFileName = this._vodFileName;
    }
    if (this._vodSubAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSubAppId = this._vodSubAppId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssRecordTemplateMp4Param | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classId = undefined;
      this._enable = undefined;
      this._procedure = undefined;
      this._recordInterval = undefined;
      this._storageMode = undefined;
      this._storageTime = undefined;
      this._vodFileName = undefined;
      this._vodSubAppId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classId = value.classId;
      this._enable = value.enable;
      this._procedure = value.procedure;
      this._recordInterval = value.recordInterval;
      this._storageMode = value.storageMode;
      this._storageTime = value.storageTime;
      this._vodFileName = value.vodFileName;
      this._vodSubAppId = value.vodSubAppId;
    }
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: number; 
  public get classId() {
    return this.getNumberAttribute('class_id');
  }
  public set classId(value: number) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // procedure - computed: false, optional: true, required: false
  private _procedure?: string; 
  public get procedure() {
    return this.getStringAttribute('procedure');
  }
  public set procedure(value: string) {
    this._procedure = value;
  }
  public resetProcedure() {
    this._procedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureInput() {
    return this._procedure;
  }

  // record_interval - computed: false, optional: true, required: false
  private _recordInterval?: number; 
  public get recordInterval() {
    return this.getNumberAttribute('record_interval');
  }
  public set recordInterval(value: number) {
    this._recordInterval = value;
  }
  public resetRecordInterval() {
    this._recordInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIntervalInput() {
    return this._recordInterval;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_time - computed: false, optional: true, required: false
  private _storageTime?: number; 
  public get storageTime() {
    return this.getNumberAttribute('storage_time');
  }
  public set storageTime(value: number) {
    this._storageTime = value;
  }
  public resetStorageTime() {
    this._storageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTimeInput() {
    return this._storageTime;
  }

  // vod_file_name - computed: false, optional: true, required: false
  private _vodFileName?: string; 
  public get vodFileName() {
    return this.getStringAttribute('vod_file_name');
  }
  public set vodFileName(value: string) {
    this._vodFileName = value;
  }
  public resetVodFileName() {
    this._vodFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodFileNameInput() {
    return this._vodFileName;
  }

  // vod_sub_app_id - computed: false, optional: true, required: false
  private _vodSubAppId?: number; 
  public get vodSubAppId() {
    return this.getNumberAttribute('vod_sub_app_id');
  }
  public set vodSubAppId(value: number) {
    this._vodSubAppId = value;
  }
  public resetVodSubAppId() {
    this._vodSubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSubAppIdInput() {
    return this._vodSubAppId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template tencentcloud_css_record_template}
*/
export class CssRecordTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_record_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssRecordTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssRecordTemplate to import
  * @param importFromId The id of the existing CssRecordTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssRecordTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_record_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_record_template tencentcloud_css_record_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssRecordTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CssRecordTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_record_template',
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
    this._description = config.description;
    this._id = config.id;
    this._isDelayLive = config.isDelayLive;
    this._removeWatermark = config.removeWatermark;
    this._templateName = config.templateName;
    this._aacParam.internalValue = config.aacParam;
    this._flvParam.internalValue = config.flvParam;
    this._flvSpecialParam.internalValue = config.flvSpecialParam;
    this._hlsParam.internalValue = config.hlsParam;
    this._hlsSpecialParam.internalValue = config.hlsSpecialParam;
    this._mp3Param.internalValue = config.mp3Param;
    this._mp4Param.internalValue = config.mp4Param;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_delay_live - computed: false, optional: true, required: false
  private _isDelayLive?: number; 
  public get isDelayLive() {
    return this.getNumberAttribute('is_delay_live');
  }
  public set isDelayLive(value: number) {
    this._isDelayLive = value;
  }
  public resetIsDelayLive() {
    this._isDelayLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDelayLiveInput() {
    return this._isDelayLive;
  }

  // remove_watermark - computed: false, optional: true, required: false
  private _removeWatermark?: boolean | cdktf.IResolvable; 
  public get removeWatermark() {
    return this.getBooleanAttribute('remove_watermark');
  }
  public set removeWatermark(value: boolean | cdktf.IResolvable) {
    this._removeWatermark = value;
  }
  public resetRemoveWatermark() {
    this._removeWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeWatermarkInput() {
    return this._removeWatermark;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // aac_param - computed: false, optional: true, required: false
  private _aacParam = new CssRecordTemplateAacParamOutputReference(this, "aac_param");
  public get aacParam() {
    return this._aacParam;
  }
  public putAacParam(value: CssRecordTemplateAacParam) {
    this._aacParam.internalValue = value;
  }
  public resetAacParam() {
    this._aacParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aacParamInput() {
    return this._aacParam.internalValue;
  }

  // flv_param - computed: false, optional: true, required: false
  private _flvParam = new CssRecordTemplateFlvParamOutputReference(this, "flv_param");
  public get flvParam() {
    return this._flvParam;
  }
  public putFlvParam(value: CssRecordTemplateFlvParam) {
    this._flvParam.internalValue = value;
  }
  public resetFlvParam() {
    this._flvParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flvParamInput() {
    return this._flvParam.internalValue;
  }

  // flv_special_param - computed: false, optional: true, required: false
  private _flvSpecialParam = new CssRecordTemplateFlvSpecialParamOutputReference(this, "flv_special_param");
  public get flvSpecialParam() {
    return this._flvSpecialParam;
  }
  public putFlvSpecialParam(value: CssRecordTemplateFlvSpecialParam) {
    this._flvSpecialParam.internalValue = value;
  }
  public resetFlvSpecialParam() {
    this._flvSpecialParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flvSpecialParamInput() {
    return this._flvSpecialParam.internalValue;
  }

  // hls_param - computed: false, optional: true, required: false
  private _hlsParam = new CssRecordTemplateHlsParamOutputReference(this, "hls_param");
  public get hlsParam() {
    return this._hlsParam;
  }
  public putHlsParam(value: CssRecordTemplateHlsParam) {
    this._hlsParam.internalValue = value;
  }
  public resetHlsParam() {
    this._hlsParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsParamInput() {
    return this._hlsParam.internalValue;
  }

  // hls_special_param - computed: false, optional: true, required: false
  private _hlsSpecialParam = new CssRecordTemplateHlsSpecialParamOutputReference(this, "hls_special_param");
  public get hlsSpecialParam() {
    return this._hlsSpecialParam;
  }
  public putHlsSpecialParam(value: CssRecordTemplateHlsSpecialParam) {
    this._hlsSpecialParam.internalValue = value;
  }
  public resetHlsSpecialParam() {
    this._hlsSpecialParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsSpecialParamInput() {
    return this._hlsSpecialParam.internalValue;
  }

  // mp3_param - computed: false, optional: true, required: false
  private _mp3Param = new CssRecordTemplateMp3ParamOutputReference(this, "mp3_param");
  public get mp3Param() {
    return this._mp3Param;
  }
  public putMp3Param(value: CssRecordTemplateMp3Param) {
    this._mp3Param.internalValue = value;
  }
  public resetMp3Param() {
    this._mp3Param.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp3ParamInput() {
    return this._mp3Param.internalValue;
  }

  // mp4_param - computed: false, optional: true, required: false
  private _mp4Param = new CssRecordTemplateMp4ParamOutputReference(this, "mp4_param");
  public get mp4Param() {
    return this._mp4Param;
  }
  public putMp4Param(value: CssRecordTemplateMp4Param) {
    this._mp4Param.internalValue = value;
  }
  public resetMp4Param() {
    this._mp4Param.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp4ParamInput() {
    return this._mp4Param.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_delay_live: cdktf.numberToTerraform(this._isDelayLive),
      remove_watermark: cdktf.booleanToTerraform(this._removeWatermark),
      template_name: cdktf.stringToTerraform(this._templateName),
      aac_param: cssRecordTemplateAacParamToTerraform(this._aacParam.internalValue),
      flv_param: cssRecordTemplateFlvParamToTerraform(this._flvParam.internalValue),
      flv_special_param: cssRecordTemplateFlvSpecialParamToTerraform(this._flvSpecialParam.internalValue),
      hls_param: cssRecordTemplateHlsParamToTerraform(this._hlsParam.internalValue),
      hls_special_param: cssRecordTemplateHlsSpecialParamToTerraform(this._hlsSpecialParam.internalValue),
      mp3_param: cssRecordTemplateMp3ParamToTerraform(this._mp3Param.internalValue),
      mp4_param: cssRecordTemplateMp4ParamToTerraform(this._mp4Param.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_delay_live: {
        value: cdktf.numberToHclTerraform(this._isDelayLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_watermark: {
        value: cdktf.booleanToHclTerraform(this._removeWatermark),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aac_param: {
        value: cssRecordTemplateAacParamToHclTerraform(this._aacParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssRecordTemplateAacParamList",
      },
      flv_param: {
        value: cssRecordTemplateFlvParamToHclTerraform(this._flvParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssRecordTemplateFlvParamList",
      },
      flv_special_param: {
        value: cssRecordTemplateFlvSpecialParamToHclTerraform(this._flvSpecialParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssRecordTemplateFlvSpecialParamList",
      },
      hls_param: {
        value: cssRecordTemplateHlsParamToHclTerraform(this._hlsParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssRecordTemplateHlsParamList",
      },
      hls_special_param: {
        value: cssRecordTemplateHlsSpecialParamToHclTerraform(this._hlsSpecialParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssRecordTemplateHlsSpecialParamList",
      },
      mp3_param: {
        value: cssRecordTemplateMp3ParamToHclTerraform(this._mp3Param.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssRecordTemplateMp3ParamList",
      },
      mp4_param: {
        value: cssRecordTemplateMp4ParamToHclTerraform(this._mp4Param.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssRecordTemplateMp4ParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
