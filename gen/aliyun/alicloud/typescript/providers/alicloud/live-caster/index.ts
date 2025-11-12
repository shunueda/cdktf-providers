// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LiveCasterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#auto_switch_urgent_config LiveCaster#auto_switch_urgent_config}
  */
  readonly autoSwitchUrgentConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#auto_switch_urgent_on LiveCaster#auto_switch_urgent_on}
  */
  readonly autoSwitchUrgentOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#callback_url LiveCaster#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#caster_name LiveCaster#caster_name}
  */
  readonly casterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#delay LiveCaster#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#domain_name LiveCaster#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#id LiveCaster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#norm_type LiveCaster#norm_type}
  */
  readonly normType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#payment_type LiveCaster#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#program_effect LiveCaster#program_effect}
  */
  readonly programEffect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#program_name LiveCaster#program_name}
  */
  readonly programName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#record_config LiveCaster#record_config}
  */
  readonly recordConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#resource_group_id LiveCaster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#resource_type LiveCaster#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#side_output_url LiveCaster#side_output_url}
  */
  readonly sideOutputUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#side_output_url_list LiveCaster#side_output_url_list}
  */
  readonly sideOutputUrlList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#sync_groups_config LiveCaster#sync_groups_config}
  */
  readonly syncGroupsConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#tags LiveCaster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#transcode_config LiveCaster#transcode_config}
  */
  readonly transcodeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#urgent_image_id LiveCaster#urgent_image_id}
  */
  readonly urgentImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#urgent_image_url LiveCaster#urgent_image_url}
  */
  readonly urgentImageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#urgent_live_stream_url LiveCaster#urgent_live_stream_url}
  */
  readonly urgentLiveStreamUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#urgent_material_id LiveCaster#urgent_material_id}
  */
  readonly urgentMaterialId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#timeouts LiveCaster#timeouts}
  */
  readonly timeouts?: LiveCasterTimeouts;
}
export interface LiveCasterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#create LiveCaster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#delete LiveCaster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#update LiveCaster#update}
  */
  readonly update?: string;
}

export function liveCasterTimeoutsToTerraform(struct?: LiveCasterTimeouts | cdktf.IResolvable): any {
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


export function liveCasterTimeoutsToHclTerraform(struct?: LiveCasterTimeouts | cdktf.IResolvable): any {
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

export class LiveCasterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LiveCasterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LiveCasterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster alicloud_live_caster}
*/
export class LiveCaster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_live_caster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LiveCaster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LiveCaster to import
  * @param importFromId The id of the existing LiveCaster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LiveCaster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_live_caster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/live_caster alicloud_live_caster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LiveCasterConfig
  */
  public constructor(scope: Construct, id: string, config: LiveCasterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_live_caster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSwitchUrgentConfig = config.autoSwitchUrgentConfig;
    this._autoSwitchUrgentOn = config.autoSwitchUrgentOn;
    this._callbackUrl = config.callbackUrl;
    this._casterName = config.casterName;
    this._delay = config.delay;
    this._domainName = config.domainName;
    this._id = config.id;
    this._normType = config.normType;
    this._paymentType = config.paymentType;
    this._programEffect = config.programEffect;
    this._programName = config.programName;
    this._recordConfig = config.recordConfig;
    this._resourceGroupId = config.resourceGroupId;
    this._resourceType = config.resourceType;
    this._sideOutputUrl = config.sideOutputUrl;
    this._sideOutputUrlList = config.sideOutputUrlList;
    this._syncGroupsConfig = config.syncGroupsConfig;
    this._tags = config.tags;
    this._transcodeConfig = config.transcodeConfig;
    this._urgentImageId = config.urgentImageId;
    this._urgentImageUrl = config.urgentImageUrl;
    this._urgentLiveStreamUrl = config.urgentLiveStreamUrl;
    this._urgentMaterialId = config.urgentMaterialId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_switch_urgent_config - computed: false, optional: true, required: false
  private _autoSwitchUrgentConfig?: string; 
  public get autoSwitchUrgentConfig() {
    return this.getStringAttribute('auto_switch_urgent_config');
  }
  public set autoSwitchUrgentConfig(value: string) {
    this._autoSwitchUrgentConfig = value;
  }
  public resetAutoSwitchUrgentConfig() {
    this._autoSwitchUrgentConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchUrgentConfigInput() {
    return this._autoSwitchUrgentConfig;
  }

  // auto_switch_urgent_on - computed: false, optional: true, required: false
  private _autoSwitchUrgentOn?: boolean | cdktf.IResolvable; 
  public get autoSwitchUrgentOn() {
    return this.getBooleanAttribute('auto_switch_urgent_on');
  }
  public set autoSwitchUrgentOn(value: boolean | cdktf.IResolvable) {
    this._autoSwitchUrgentOn = value;
  }
  public resetAutoSwitchUrgentOn() {
    this._autoSwitchUrgentOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchUrgentOnInput() {
    return this._autoSwitchUrgentOn;
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

  // caster_name - computed: false, optional: true, required: false
  private _casterName?: string; 
  public get casterName() {
    return this.getStringAttribute('caster_name');
  }
  public set casterName(value: string) {
    this._casterName = value;
  }
  public resetCasterName() {
    this._casterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casterNameInput() {
    return this._casterName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // norm_type - computed: false, optional: false, required: true
  private _normType?: number; 
  public get normType() {
    return this.getNumberAttribute('norm_type');
  }
  public set normType(value: number) {
    this._normType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get normTypeInput() {
    return this._normType;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // program_effect - computed: false, optional: true, required: false
  private _programEffect?: number; 
  public get programEffect() {
    return this.getNumberAttribute('program_effect');
  }
  public set programEffect(value: number) {
    this._programEffect = value;
  }
  public resetProgramEffect() {
    this._programEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programEffectInput() {
    return this._programEffect;
  }

  // program_name - computed: false, optional: true, required: false
  private _programName?: string; 
  public get programName() {
    return this.getStringAttribute('program_name');
  }
  public set programName(value: string) {
    this._programName = value;
  }
  public resetProgramName() {
    this._programName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programNameInput() {
    return this._programName;
  }

  // record_config - computed: false, optional: true, required: false
  private _recordConfig?: string; 
  public get recordConfig() {
    return this.getStringAttribute('record_config');
  }
  public set recordConfig(value: string) {
    this._recordConfig = value;
  }
  public resetRecordConfig() {
    this._recordConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordConfigInput() {
    return this._recordConfig;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // side_output_url - computed: false, optional: true, required: false
  private _sideOutputUrl?: string; 
  public get sideOutputUrl() {
    return this.getStringAttribute('side_output_url');
  }
  public set sideOutputUrl(value: string) {
    this._sideOutputUrl = value;
  }
  public resetSideOutputUrl() {
    this._sideOutputUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideOutputUrlInput() {
    return this._sideOutputUrl;
  }

  // side_output_url_list - computed: false, optional: true, required: false
  private _sideOutputUrlList?: string; 
  public get sideOutputUrlList() {
    return this.getStringAttribute('side_output_url_list');
  }
  public set sideOutputUrlList(value: string) {
    this._sideOutputUrlList = value;
  }
  public resetSideOutputUrlList() {
    this._sideOutputUrlList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideOutputUrlListInput() {
    return this._sideOutputUrlList;
  }

  // sync_groups_config - computed: false, optional: true, required: false
  private _syncGroupsConfig?: string; 
  public get syncGroupsConfig() {
    return this.getStringAttribute('sync_groups_config');
  }
  public set syncGroupsConfig(value: string) {
    this._syncGroupsConfig = value;
  }
  public resetSyncGroupsConfig() {
    this._syncGroupsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGroupsConfigInput() {
    return this._syncGroupsConfig;
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

  // transcode_config - computed: false, optional: true, required: false
  private _transcodeConfig?: string; 
  public get transcodeConfig() {
    return this.getStringAttribute('transcode_config');
  }
  public set transcodeConfig(value: string) {
    this._transcodeConfig = value;
  }
  public resetTranscodeConfig() {
    this._transcodeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcodeConfigInput() {
    return this._transcodeConfig;
  }

  // urgent_image_id - computed: false, optional: true, required: false
  private _urgentImageId?: string; 
  public get urgentImageId() {
    return this.getStringAttribute('urgent_image_id');
  }
  public set urgentImageId(value: string) {
    this._urgentImageId = value;
  }
  public resetUrgentImageId() {
    this._urgentImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentImageIdInput() {
    return this._urgentImageId;
  }

  // urgent_image_url - computed: false, optional: true, required: false
  private _urgentImageUrl?: string; 
  public get urgentImageUrl() {
    return this.getStringAttribute('urgent_image_url');
  }
  public set urgentImageUrl(value: string) {
    this._urgentImageUrl = value;
  }
  public resetUrgentImageUrl() {
    this._urgentImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentImageUrlInput() {
    return this._urgentImageUrl;
  }

  // urgent_live_stream_url - computed: false, optional: true, required: false
  private _urgentLiveStreamUrl?: string; 
  public get urgentLiveStreamUrl() {
    return this.getStringAttribute('urgent_live_stream_url');
  }
  public set urgentLiveStreamUrl(value: string) {
    this._urgentLiveStreamUrl = value;
  }
  public resetUrgentLiveStreamUrl() {
    this._urgentLiveStreamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentLiveStreamUrlInput() {
    return this._urgentLiveStreamUrl;
  }

  // urgent_material_id - computed: false, optional: true, required: false
  private _urgentMaterialId?: string; 
  public get urgentMaterialId() {
    return this.getStringAttribute('urgent_material_id');
  }
  public set urgentMaterialId(value: string) {
    this._urgentMaterialId = value;
  }
  public resetUrgentMaterialId() {
    this._urgentMaterialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentMaterialIdInput() {
    return this._urgentMaterialId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LiveCasterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LiveCasterTimeouts) {
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
      auto_switch_urgent_config: cdktf.stringToTerraform(this._autoSwitchUrgentConfig),
      auto_switch_urgent_on: cdktf.booleanToTerraform(this._autoSwitchUrgentOn),
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      caster_name: cdktf.stringToTerraform(this._casterName),
      delay: cdktf.numberToTerraform(this._delay),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      norm_type: cdktf.numberToTerraform(this._normType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      program_effect: cdktf.numberToTerraform(this._programEffect),
      program_name: cdktf.stringToTerraform(this._programName),
      record_config: cdktf.stringToTerraform(this._recordConfig),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      side_output_url: cdktf.stringToTerraform(this._sideOutputUrl),
      side_output_url_list: cdktf.stringToTerraform(this._sideOutputUrlList),
      sync_groups_config: cdktf.stringToTerraform(this._syncGroupsConfig),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transcode_config: cdktf.stringToTerraform(this._transcodeConfig),
      urgent_image_id: cdktf.stringToTerraform(this._urgentImageId),
      urgent_image_url: cdktf.stringToTerraform(this._urgentImageUrl),
      urgent_live_stream_url: cdktf.stringToTerraform(this._urgentLiveStreamUrl),
      urgent_material_id: cdktf.stringToTerraform(this._urgentMaterialId),
      timeouts: liveCasterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_switch_urgent_config: {
        value: cdktf.stringToHclTerraform(this._autoSwitchUrgentConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_switch_urgent_on: {
        value: cdktf.booleanToHclTerraform(this._autoSwitchUrgentOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      callback_url: {
        value: cdktf.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caster_name: {
        value: cdktf.stringToHclTerraform(this._casterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      norm_type: {
        value: cdktf.numberToHclTerraform(this._normType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_effect: {
        value: cdktf.numberToHclTerraform(this._programEffect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      program_name: {
        value: cdktf.stringToHclTerraform(this._programName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_config: {
        value: cdktf.stringToHclTerraform(this._recordConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      side_output_url: {
        value: cdktf.stringToHclTerraform(this._sideOutputUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      side_output_url_list: {
        value: cdktf.stringToHclTerraform(this._sideOutputUrlList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_groups_config: {
        value: cdktf.stringToHclTerraform(this._syncGroupsConfig),
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
      transcode_config: {
        value: cdktf.stringToHclTerraform(this._transcodeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urgent_image_id: {
        value: cdktf.stringToHclTerraform(this._urgentImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urgent_image_url: {
        value: cdktf.stringToHclTerraform(this._urgentImageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urgent_live_stream_url: {
        value: cdktf.stringToHclTerraform(this._urgentLiveStreamUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urgent_material_id: {
        value: cdktf.stringToHclTerraform(this._urgentMaterialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: liveCasterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LiveCasterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
