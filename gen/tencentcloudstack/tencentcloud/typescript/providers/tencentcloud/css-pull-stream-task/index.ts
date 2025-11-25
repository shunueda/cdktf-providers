// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssPullStreamTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * push app name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#app_name CssPullStreamTask#app_name}
  */
  readonly appName: string;
  /**
  * backup pull source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#backup_source_type CssPullStreamTask#backup_source_type}
  */
  readonly backupSourceType?: string;
  /**
  * backup pull source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#backup_source_url CssPullStreamTask#backup_source_url}
  */
  readonly backupSourceUrl?: string;
  /**
  * defind the callback event you need, null for all. TaskStart, TaskExit, VodSourceFileStart, VodSourceFileFinish, ResetTaskConfig, PullFileUnstable, PushStreamUnstable, PullFileFailed, PushStreamFailed, FileEndEarly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#callback_events CssPullStreamTask#callback_events}
  */
  readonly callbackEvents?: string[];
  /**
  * task event callback url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#callback_url CssPullStreamTask#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * desc for pull task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#comment CssPullStreamTask#comment}
  */
  readonly comment?: string;
  /**
  * push domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#domain_name CssPullStreamTask#domain_name}
  */
  readonly domainName: string;
  /**
  * task end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#end_time CssPullStreamTask#end_time}
  */
  readonly endTime: string;
  /**
  * ignore_region for ignore the input region and reblance inside the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#extra_cmd CssPullStreamTask#extra_cmd}
  */
  readonly extraCmd?: string;
  /**
  * task enable or disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#file_index CssPullStreamTask#file_index}
  */
  readonly fileIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#id CssPullStreamTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * task enable or disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#offset_time CssPullStreamTask#offset_time}
  */
  readonly offsetTime?: number;
  /**
  * desc operator user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#operator CssPullStreamTask#operator}
  */
  readonly operator?: string;
  /**
  * other pushing args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#push_args CssPullStreamTask#push_args}
  */
  readonly pushArgs?: string;
  /**
  * `PullLivePushLive`: SourceUrls live type, `PullVodPushLive`: SourceUrls vod type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#source_type CssPullStreamTask#source_type}
  */
  readonly sourceType: string;
  /**
  * Pull Source media, SourceType=PullLivePushLive only 1 value, SourceType=PullLivePushLive can input multi values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#source_urls CssPullStreamTask#source_urls}
  */
  readonly sourceUrls: string[];
  /**
  * task begin time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#start_time CssPullStreamTask#start_time}
  */
  readonly startTime: string;
  /**
  * task enable or disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#status CssPullStreamTask#status}
  */
  readonly status?: string;
  /**
  * push stream name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#stream_name CssPullStreamTask#stream_name}
  */
  readonly streamName: string;
  /**
  * full target push url, DomainName, AppName, StreamName field must be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#to_url CssPullStreamTask#to_url}
  */
  readonly toUrl?: string;
  /**
  * loop time for vod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#vod_loop_times CssPullStreamTask#vod_loop_times}
  */
  readonly vodLoopTimes?: number;
  /**
  * vod refresh method. `ImmediateNewSource`: switch to new source at once, `ContinueBreakPoint`: switch to new source while old source finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#vod_refresh_type CssPullStreamTask#vod_refresh_type}
  */
  readonly vodRefreshType?: string;
  /**
  * watermark_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#watermark_list CssPullStreamTask#watermark_list}
  */
  readonly watermarkList?: CssPullStreamTaskWatermarkListStruct[] | cdktf.IResolvable;
}
export interface CssPullStreamTaskWatermarkListStruct {
  /**
  * pic height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#height CssPullStreamTask#height}
  */
  readonly height: number;
  /**
  * position type, 0:left top, 1:right top, 2:right bot, 3: left bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#location CssPullStreamTask#location}
  */
  readonly location: number;
  /**
  * watermark picture url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#picture_url CssPullStreamTask#picture_url}
  */
  readonly pictureUrl: string;
  /**
  * pic width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#width CssPullStreamTask#width}
  */
  readonly width: number;
  /**
  * x position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#x_position CssPullStreamTask#x_position}
  */
  readonly xPosition: number;
  /**
  * y position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#y_position CssPullStreamTask#y_position}
  */
  readonly yPosition: number;
}

export function cssPullStreamTaskWatermarkListStructToTerraform(struct?: CssPullStreamTaskWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    location: cdktf.numberToTerraform(struct!.location),
    picture_url: cdktf.stringToTerraform(struct!.pictureUrl),
    width: cdktf.numberToTerraform(struct!.width),
    x_position: cdktf.numberToTerraform(struct!.xPosition),
    y_position: cdktf.numberToTerraform(struct!.yPosition),
  }
}


export function cssPullStreamTaskWatermarkListStructToHclTerraform(struct?: CssPullStreamTaskWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.numberToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    picture_url: {
      value: cdktf.stringToHclTerraform(struct!.pictureUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_position: {
      value: cdktf.numberToHclTerraform(struct!.xPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_position: {
      value: cdktf.numberToHclTerraform(struct!.yPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssPullStreamTaskWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CssPullStreamTaskWatermarkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._pictureUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pictureUrl = this._pictureUrl;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPosition = this._xPosition;
    }
    if (this._yPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPosition = this._yPosition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssPullStreamTaskWatermarkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._location = undefined;
      this._pictureUrl = undefined;
      this._width = undefined;
      this._xPosition = undefined;
      this._yPosition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._location = value.location;
      this._pictureUrl = value.pictureUrl;
      this._width = value.width;
      this._xPosition = value.xPosition;
      this._yPosition = value.yPosition;
    }
  }

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // location - computed: false, optional: false, required: true
  private _location?: number; 
  public get location() {
    return this.getNumberAttribute('location');
  }
  public set location(value: number) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // picture_url - computed: false, optional: false, required: true
  private _pictureUrl?: string; 
  public get pictureUrl() {
    return this.getStringAttribute('picture_url');
  }
  public set pictureUrl(value: string) {
    this._pictureUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pictureUrlInput() {
    return this._pictureUrl;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_position - computed: false, optional: false, required: true
  private _xPosition?: number; 
  public get xPosition() {
    return this.getNumberAttribute('x_position');
  }
  public set xPosition(value: number) {
    this._xPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xPositionInput() {
    return this._xPosition;
  }

  // y_position - computed: false, optional: false, required: true
  private _yPosition?: number; 
  public get yPosition() {
    return this.getNumberAttribute('y_position');
  }
  public set yPosition(value: number) {
    this._yPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yPositionInput() {
    return this._yPosition;
  }
}

export class CssPullStreamTaskWatermarkListStructList extends cdktf.ComplexList {
  public internalValue? : CssPullStreamTaskWatermarkListStruct[] | cdktf.IResolvable

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
  public get(index: number): CssPullStreamTaskWatermarkListStructOutputReference {
    return new CssPullStreamTaskWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task tencentcloud_css_pull_stream_task}
*/
export class CssPullStreamTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_pull_stream_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssPullStreamTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssPullStreamTask to import
  * @param importFromId The id of the existing CssPullStreamTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssPullStreamTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_pull_stream_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_pull_stream_task tencentcloud_css_pull_stream_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssPullStreamTaskConfig
  */
  public constructor(scope: Construct, id: string, config: CssPullStreamTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_pull_stream_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._backupSourceType = config.backupSourceType;
    this._backupSourceUrl = config.backupSourceUrl;
    this._callbackEvents = config.callbackEvents;
    this._callbackUrl = config.callbackUrl;
    this._comment = config.comment;
    this._domainName = config.domainName;
    this._endTime = config.endTime;
    this._extraCmd = config.extraCmd;
    this._fileIndex = config.fileIndex;
    this._id = config.id;
    this._offsetTime = config.offsetTime;
    this._operator = config.operator;
    this._pushArgs = config.pushArgs;
    this._sourceType = config.sourceType;
    this._sourceUrls = config.sourceUrls;
    this._startTime = config.startTime;
    this._status = config.status;
    this._streamName = config.streamName;
    this._toUrl = config.toUrl;
    this._vodLoopTimes = config.vodLoopTimes;
    this._vodRefreshType = config.vodRefreshType;
    this._watermarkList.internalValue = config.watermarkList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // backup_source_type - computed: false, optional: true, required: false
  private _backupSourceType?: string; 
  public get backupSourceType() {
    return this.getStringAttribute('backup_source_type');
  }
  public set backupSourceType(value: string) {
    this._backupSourceType = value;
  }
  public resetBackupSourceType() {
    this._backupSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSourceTypeInput() {
    return this._backupSourceType;
  }

  // backup_source_url - computed: false, optional: true, required: false
  private _backupSourceUrl?: string; 
  public get backupSourceUrl() {
    return this.getStringAttribute('backup_source_url');
  }
  public set backupSourceUrl(value: string) {
    this._backupSourceUrl = value;
  }
  public resetBackupSourceUrl() {
    this._backupSourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSourceUrlInput() {
    return this._backupSourceUrl;
  }

  // callback_events - computed: true, optional: true, required: false
  private _callbackEvents?: string[]; 
  public get callbackEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('callback_events'));
  }
  public set callbackEvents(value: string[]) {
    this._callbackEvents = value;
  }
  public resetCallbackEvents() {
    this._callbackEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackEventsInput() {
    return this._callbackEvents;
  }

  // callback_url - computed: false, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // comment - computed: false, optional: true, required: false
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

  // create_by - computed: true, optional: false, required: false
  public get createBy() {
    return this.getStringAttribute('create_by');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // extra_cmd - computed: false, optional: true, required: false
  private _extraCmd?: string; 
  public get extraCmd() {
    return this.getStringAttribute('extra_cmd');
  }
  public set extraCmd(value: string) {
    this._extraCmd = value;
  }
  public resetExtraCmd() {
    this._extraCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraCmdInput() {
    return this._extraCmd;
  }

  // file_index - computed: false, optional: true, required: false
  private _fileIndex?: number; 
  public get fileIndex() {
    return this.getNumberAttribute('file_index');
  }
  public set fileIndex(value: number) {
    this._fileIndex = value;
  }
  public resetFileIndex() {
    this._fileIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIndexInput() {
    return this._fileIndex;
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

  // offset_time - computed: false, optional: true, required: false
  private _offsetTime?: number; 
  public get offsetTime() {
    return this.getNumberAttribute('offset_time');
  }
  public set offsetTime(value: number) {
    this._offsetTime = value;
  }
  public resetOffsetTime() {
    this._offsetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetTimeInput() {
    return this._offsetTime;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // push_args - computed: false, optional: true, required: false
  private _pushArgs?: string; 
  public get pushArgs() {
    return this.getStringAttribute('push_args');
  }
  public set pushArgs(value: string) {
    this._pushArgs = value;
  }
  public resetPushArgs() {
    this._pushArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushArgsInput() {
    return this._pushArgs;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // source_urls - computed: false, optional: false, required: true
  private _sourceUrls?: string[]; 
  public get sourceUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('source_urls'));
  }
  public set sourceUrls(value: string[]) {
    this._sourceUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlsInput() {
    return this._sourceUrls;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // to_url - computed: false, optional: true, required: false
  private _toUrl?: string; 
  public get toUrl() {
    return this.getStringAttribute('to_url');
  }
  public set toUrl(value: string) {
    this._toUrl = value;
  }
  public resetToUrl() {
    this._toUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toUrlInput() {
    return this._toUrl;
  }

  // update_by - computed: true, optional: false, required: false
  public get updateBy() {
    return this.getStringAttribute('update_by');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vod_loop_times - computed: true, optional: true, required: false
  private _vodLoopTimes?: number; 
  public get vodLoopTimes() {
    return this.getNumberAttribute('vod_loop_times');
  }
  public set vodLoopTimes(value: number) {
    this._vodLoopTimes = value;
  }
  public resetVodLoopTimes() {
    this._vodLoopTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodLoopTimesInput() {
    return this._vodLoopTimes;
  }

  // vod_refresh_type - computed: true, optional: true, required: false
  private _vodRefreshType?: string; 
  public get vodRefreshType() {
    return this.getStringAttribute('vod_refresh_type');
  }
  public set vodRefreshType(value: string) {
    this._vodRefreshType = value;
  }
  public resetVodRefreshType() {
    this._vodRefreshType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodRefreshTypeInput() {
    return this._vodRefreshType;
  }

  // watermark_list - computed: false, optional: true, required: false
  private _watermarkList = new CssPullStreamTaskWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
  public putWatermarkList(value: CssPullStreamTaskWatermarkListStruct[] | cdktf.IResolvable) {
    this._watermarkList.internalValue = value;
  }
  public resetWatermarkList() {
    this._watermarkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkListInput() {
    return this._watermarkList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      backup_source_type: cdktf.stringToTerraform(this._backupSourceType),
      backup_source_url: cdktf.stringToTerraform(this._backupSourceUrl),
      callback_events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackEvents),
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      comment: cdktf.stringToTerraform(this._comment),
      domain_name: cdktf.stringToTerraform(this._domainName),
      end_time: cdktf.stringToTerraform(this._endTime),
      extra_cmd: cdktf.stringToTerraform(this._extraCmd),
      file_index: cdktf.numberToTerraform(this._fileIndex),
      id: cdktf.stringToTerraform(this._id),
      offset_time: cdktf.numberToTerraform(this._offsetTime),
      operator: cdktf.stringToTerraform(this._operator),
      push_args: cdktf.stringToTerraform(this._pushArgs),
      source_type: cdktf.stringToTerraform(this._sourceType),
      source_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceUrls),
      start_time: cdktf.stringToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      stream_name: cdktf.stringToTerraform(this._streamName),
      to_url: cdktf.stringToTerraform(this._toUrl),
      vod_loop_times: cdktf.numberToTerraform(this._vodLoopTimes),
      vod_refresh_type: cdktf.stringToTerraform(this._vodRefreshType),
      watermark_list: cdktf.listMapper(cssPullStreamTaskWatermarkListStructToTerraform, true)(this._watermarkList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_source_type: {
        value: cdktf.stringToHclTerraform(this._backupSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_source_url: {
        value: cdktf.stringToHclTerraform(this._backupSourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callback_events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbackEvents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      callback_url: {
        value: cdktf.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_cmd: {
        value: cdktf.stringToHclTerraform(this._extraCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_index: {
        value: cdktf.numberToHclTerraform(this._fileIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset_time: {
        value: cdktf.numberToHclTerraform(this._offsetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operator: {
        value: cdktf.stringToHclTerraform(this._operator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_args: {
        value: cdktf.stringToHclTerraform(this._pushArgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_url: {
        value: cdktf.stringToHclTerraform(this._toUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vod_loop_times: {
        value: cdktf.numberToHclTerraform(this._vodLoopTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vod_refresh_type: {
        value: cdktf.stringToHclTerraform(this._vodRefreshType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watermark_list: {
        value: cdktf.listMapperHcl(cssPullStreamTaskWatermarkListStructToHclTerraform, true)(this._watermarkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssPullStreamTaskWatermarkListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
