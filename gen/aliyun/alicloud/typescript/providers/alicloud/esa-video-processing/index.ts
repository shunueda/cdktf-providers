// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaVideoProcessingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#flv_seek_end EsaVideoProcessing#flv_seek_end}
  */
  readonly flvSeekEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#flv_seek_start EsaVideoProcessing#flv_seek_start}
  */
  readonly flvSeekStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#flv_video_seek_mode EsaVideoProcessing#flv_video_seek_mode}
  */
  readonly flvVideoSeekMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#id EsaVideoProcessing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#mp4_seek_end EsaVideoProcessing#mp4_seek_end}
  */
  readonly mp4SeekEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#mp4_seek_start EsaVideoProcessing#mp4_seek_start}
  */
  readonly mp4SeekStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#rule EsaVideoProcessing#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#rule_enable EsaVideoProcessing#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#rule_name EsaVideoProcessing#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#sequence EsaVideoProcessing#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#site_id EsaVideoProcessing#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#site_version EsaVideoProcessing#site_version}
  */
  readonly siteVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#video_seek_enable EsaVideoProcessing#video_seek_enable}
  */
  readonly videoSeekEnable?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#timeouts EsaVideoProcessing#timeouts}
  */
  readonly timeouts?: EsaVideoProcessingTimeouts;
}
export interface EsaVideoProcessingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#create EsaVideoProcessing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#delete EsaVideoProcessing#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#update EsaVideoProcessing#update}
  */
  readonly update?: string;
}

export function esaVideoProcessingTimeoutsToTerraform(struct?: EsaVideoProcessingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function esaVideoProcessingTimeoutsToHclTerraform(struct?: EsaVideoProcessingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaVideoProcessingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaVideoProcessingTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaVideoProcessingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing alicloud_esa_video_processing}
*/
export class EsaVideoProcessing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_video_processing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaVideoProcessing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaVideoProcessing to import
  * @param importFromId The id of the existing EsaVideoProcessing that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaVideoProcessing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_video_processing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_video_processing alicloud_esa_video_processing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaVideoProcessingConfig
  */
  public constructor(scope: Construct, id: string, config: EsaVideoProcessingConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_video_processing',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flvSeekEnd = config.flvSeekEnd;
    this._flvSeekStart = config.flvSeekStart;
    this._flvVideoSeekMode = config.flvVideoSeekMode;
    this._id = config.id;
    this._mp4SeekEnd = config.mp4SeekEnd;
    this._mp4SeekStart = config.mp4SeekStart;
    this._rule = config.rule;
    this._ruleEnable = config.ruleEnable;
    this._ruleName = config.ruleName;
    this._sequence = config.sequence;
    this._siteId = config.siteId;
    this._siteVersion = config.siteVersion;
    this._videoSeekEnable = config.videoSeekEnable;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // flv_seek_end - computed: false, optional: true, required: false
  private _flvSeekEnd?: string; 
  public get flvSeekEnd() {
    return this.getStringAttribute('flv_seek_end');
  }
  public set flvSeekEnd(value: string) {
    this._flvSeekEnd = value;
  }
  public resetFlvSeekEnd() {
    this._flvSeekEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flvSeekEndInput() {
    return this._flvSeekEnd;
  }

  // flv_seek_start - computed: false, optional: true, required: false
  private _flvSeekStart?: string; 
  public get flvSeekStart() {
    return this.getStringAttribute('flv_seek_start');
  }
  public set flvSeekStart(value: string) {
    this._flvSeekStart = value;
  }
  public resetFlvSeekStart() {
    this._flvSeekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flvSeekStartInput() {
    return this._flvSeekStart;
  }

  // flv_video_seek_mode - computed: false, optional: true, required: false
  private _flvVideoSeekMode?: string; 
  public get flvVideoSeekMode() {
    return this.getStringAttribute('flv_video_seek_mode');
  }
  public set flvVideoSeekMode(value: string) {
    this._flvVideoSeekMode = value;
  }
  public resetFlvVideoSeekMode() {
    this._flvVideoSeekMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flvVideoSeekModeInput() {
    return this._flvVideoSeekMode;
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

  // mp4_seek_end - computed: false, optional: true, required: false
  private _mp4SeekEnd?: string; 
  public get mp4SeekEnd() {
    return this.getStringAttribute('mp4_seek_end');
  }
  public set mp4SeekEnd(value: string) {
    this._mp4SeekEnd = value;
  }
  public resetMp4SeekEnd() {
    this._mp4SeekEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp4SeekEndInput() {
    return this._mp4SeekEnd;
  }

  // mp4_seek_start - computed: false, optional: true, required: false
  private _mp4SeekStart?: string; 
  public get mp4SeekStart() {
    return this.getStringAttribute('mp4_seek_start');
  }
  public set mp4SeekStart(value: string) {
    this._mp4SeekStart = value;
  }
  public resetMp4SeekStart() {
    this._mp4SeekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp4SeekStartInput() {
    return this._mp4SeekStart;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_enable - computed: false, optional: true, required: false
  private _ruleEnable?: string; 
  public get ruleEnable() {
    return this.getStringAttribute('rule_enable');
  }
  public set ruleEnable(value: string) {
    this._ruleEnable = value;
  }
  public resetRuleEnable() {
    this._ruleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEnableInput() {
    return this._ruleEnable;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_version - computed: false, optional: true, required: false
  private _siteVersion?: number; 
  public get siteVersion() {
    return this.getNumberAttribute('site_version');
  }
  public set siteVersion(value: number) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // video_seek_enable - computed: false, optional: true, required: false
  private _videoSeekEnable?: string; 
  public get videoSeekEnable() {
    return this.getStringAttribute('video_seek_enable');
  }
  public set videoSeekEnable(value: string) {
    this._videoSeekEnable = value;
  }
  public resetVideoSeekEnable() {
    this._videoSeekEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSeekEnableInput() {
    return this._videoSeekEnable;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaVideoProcessingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaVideoProcessingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flv_seek_end: cdktf.stringToTerraform(this._flvSeekEnd),
      flv_seek_start: cdktf.stringToTerraform(this._flvSeekStart),
      flv_video_seek_mode: cdktf.stringToTerraform(this._flvVideoSeekMode),
      id: cdktf.stringToTerraform(this._id),
      mp4_seek_end: cdktf.stringToTerraform(this._mp4SeekEnd),
      mp4_seek_start: cdktf.stringToTerraform(this._mp4SeekStart),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      video_seek_enable: cdktf.stringToTerraform(this._videoSeekEnable),
      timeouts: esaVideoProcessingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flv_seek_end: {
        value: cdktf.stringToHclTerraform(this._flvSeekEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flv_seek_start: {
        value: cdktf.stringToHclTerraform(this._flvSeekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flv_video_seek_mode: {
        value: cdktf.stringToHclTerraform(this._flvVideoSeekMode),
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
      mp4_seek_end: {
        value: cdktf.stringToHclTerraform(this._mp4SeekEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mp4_seek_start: {
        value: cdktf.stringToHclTerraform(this._mp4SeekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_enable: {
        value: cdktf.stringToHclTerraform(this._ruleEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_version: {
        value: cdktf.numberToHclTerraform(this._siteVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      video_seek_enable: {
        value: cdktf.stringToHclTerraform(this._videoSeekEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaVideoProcessingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaVideoProcessingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
