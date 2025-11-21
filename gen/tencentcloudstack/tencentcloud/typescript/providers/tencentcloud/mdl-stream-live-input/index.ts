// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdlStreamLiveInputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#id MdlStreamLiveInput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Input name, which can contain 1-32 case-sensitive letters, digits, and underscores and must be unique at the region level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#name MdlStreamLiveInput#name}
  */
  readonly name: string;
  /**
  * ID of the input security group to attachYou can attach only one security group to an input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#security_group_ids MdlStreamLiveInput#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Input typeValid values: `RTMP_PUSH`, `RTP_PUSH`, `UDP_PUSH`, `RTMP_PULL`, `HLS_PULL`, `MP4_PULL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#type MdlStreamLiveInput#type}
  */
  readonly type: string;
  /**
  * input_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#input_settings MdlStreamLiveInput#input_settings}
  */
  readonly inputSettings?: MdlStreamLiveInputInputSettings[] | cdktf.IResolvable;
}
export interface MdlStreamLiveInputInputSettings {
  /**
  * Application name, which is valid if `Type` is `RTMP_PUSH` and can contain 1-32 letters and digitsNote: This field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#app_name MdlStreamLiveInput#app_name}
  */
  readonly appName?: string;
  /**
  * Delayed time (ms) for playback, which is valid if `Type` is `RTMP_PUSH`Value range: 0 (default) or 10000-600000The value must be a multiple of 1,000.Note: This field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#delay_time MdlStreamLiveInput#delay_time}
  */
  readonly delayTime?: number;
  /**
  * RTP/UDP input address, which does not need to be entered for the input parameter.Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#input_address MdlStreamLiveInput#input_address}
  */
  readonly inputAddress?: string;
  /**
  * The domain of an SRT_PUSH address. If this is a request parameter, you do not need to specify it.Note: This field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#input_domain MdlStreamLiveInput#input_domain}
  */
  readonly inputDomain?: string;
  /**
  * The password, which is used for authentication.Note: This field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#password MdlStreamLiveInput#password}
  */
  readonly password?: string;
  /**
  * Source type for stream pulling and relaying. To pull content from private-read COS buckets under the current account, set this parameter to `TencentCOS`; otherwise, leave it empty.Note: this field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#source_type MdlStreamLiveInput#source_type}
  */
  readonly sourceType?: string;
  /**
  * Source URL, which is valid if `Type` is `RTMP_PULL`, `HLS_PULL`, or `MP4_PULL` and can contain 1-512 charactersNote: This field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#source_url MdlStreamLiveInput#source_url}
  */
  readonly sourceUrl?: string;
  /**
  * Stream name, which is valid if `Type` is `RTMP_PUSH` and can contain 1-32 letters and digitsNote: This field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#stream_name MdlStreamLiveInput#stream_name}
  */
  readonly streamName?: string;
  /**
  * The username, which is used for authentication.Note: This field may return `null`, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#user_name MdlStreamLiveInput#user_name}
  */
  readonly userName?: string;
}

export function mdlStreamLiveInputInputSettingsToTerraform(struct?: MdlStreamLiveInputInputSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_name: cdktf.stringToTerraform(struct!.appName),
    delay_time: cdktf.numberToTerraform(struct!.delayTime),
    input_address: cdktf.stringToTerraform(struct!.inputAddress),
    input_domain: cdktf.stringToTerraform(struct!.inputDomain),
    password: cdktf.stringToTerraform(struct!.password),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function mdlStreamLiveInputInputSettingsToHclTerraform(struct?: MdlStreamLiveInputInputSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_time: {
      value: cdktf.numberToHclTerraform(struct!.delayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_address: {
      value: cdktf.stringToHclTerraform(struct!.inputAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_domain: {
      value: cdktf.stringToHclTerraform(struct!.inputDomain),
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
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
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

export class MdlStreamLiveInputInputSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdlStreamLiveInputInputSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._delayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayTime = this._delayTime;
    }
    if (this._inputAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAddress = this._inputAddress;
    }
    if (this._inputDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDomain = this._inputDomain;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdlStreamLiveInputInputSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appName = undefined;
      this._delayTime = undefined;
      this._inputAddress = undefined;
      this._inputDomain = undefined;
      this._password = undefined;
      this._sourceType = undefined;
      this._sourceUrl = undefined;
      this._streamName = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appName = value.appName;
      this._delayTime = value.delayTime;
      this._inputAddress = value.inputAddress;
      this._inputDomain = value.inputDomain;
      this._password = value.password;
      this._sourceType = value.sourceType;
      this._sourceUrl = value.sourceUrl;
      this._streamName = value.streamName;
      this._userName = value.userName;
    }
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // delay_time - computed: false, optional: true, required: false
  private _delayTime?: number; 
  public get delayTime() {
    return this.getNumberAttribute('delay_time');
  }
  public set delayTime(value: number) {
    this._delayTime = value;
  }
  public resetDelayTime() {
    this._delayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayTimeInput() {
    return this._delayTime;
  }

  // input_address - computed: false, optional: true, required: false
  private _inputAddress?: string; 
  public get inputAddress() {
    return this.getStringAttribute('input_address');
  }
  public set inputAddress(value: string) {
    this._inputAddress = value;
  }
  public resetInputAddress() {
    this._inputAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputAddressInput() {
    return this._inputAddress;
  }

  // input_domain - computed: false, optional: true, required: false
  private _inputDomain?: string; 
  public get inputDomain() {
    return this.getStringAttribute('input_domain');
  }
  public set inputDomain(value: string) {
    this._inputDomain = value;
  }
  public resetInputDomain() {
    this._inputDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDomainInput() {
    return this._inputDomain;
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

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  public resetSourceUrl() {
    this._sourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // stream_name - computed: false, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
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

export class MdlStreamLiveInputInputSettingsList extends cdktf.ComplexList {
  public internalValue? : MdlStreamLiveInputInputSettings[] | cdktf.IResolvable

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
  public get(index: number): MdlStreamLiveInputInputSettingsOutputReference {
    return new MdlStreamLiveInputInputSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input tencentcloud_mdl_stream_live_input}
*/
export class MdlStreamLiveInput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mdl_stream_live_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdlStreamLiveInput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdlStreamLiveInput to import
  * @param importFromId The id of the existing MdlStreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdlStreamLiveInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mdl_stream_live_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mdl_stream_live_input tencentcloud_mdl_stream_live_input} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdlStreamLiveInputConfig
  */
  public constructor(scope: Construct, id: string, config: MdlStreamLiveInputConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mdl_stream_live_input',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._name = config.name;
    this._securityGroupIds = config.securityGroupIds;
    this._type = config.type;
    this._inputSettings.internalValue = config.inputSettings;
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // input_settings - computed: false, optional: true, required: false
  private _inputSettings = new MdlStreamLiveInputInputSettingsList(this, "input_settings", false);
  public get inputSettings() {
    return this._inputSettings;
  }
  public putInputSettings(value: MdlStreamLiveInputInputSettings[] | cdktf.IResolvable) {
    this._inputSettings.internalValue = value;
  }
  public resetInputSettings() {
    this._inputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSettingsInput() {
    return this._inputSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      type: cdktf.stringToTerraform(this._type),
      input_settings: cdktf.listMapper(mdlStreamLiveInputInputSettingsToTerraform, true)(this._inputSettings.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_settings: {
        value: cdktf.listMapperHcl(mdlStreamLiveInputInputSettingsToHclTerraform, true)(this._inputSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdlStreamLiveInputInputSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
