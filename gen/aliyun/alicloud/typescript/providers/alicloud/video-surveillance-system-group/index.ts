// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VideoSurveillanceSystemGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#callback VideoSurveillanceSystemGroup#callback}
  */
  readonly callback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#description VideoSurveillanceSystemGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#enabled VideoSurveillanceSystemGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#group_name VideoSurveillanceSystemGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#id VideoSurveillanceSystemGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#in_protocol VideoSurveillanceSystemGroup#in_protocol}
  */
  readonly inProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#out_protocol VideoSurveillanceSystemGroup#out_protocol}
  */
  readonly outProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#play_domain VideoSurveillanceSystemGroup#play_domain}
  */
  readonly playDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#push_domain VideoSurveillanceSystemGroup#push_domain}
  */
  readonly pushDomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group alicloud_video_surveillance_system_group}
*/
export class VideoSurveillanceSystemGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_video_surveillance_system_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VideoSurveillanceSystemGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VideoSurveillanceSystemGroup to import
  * @param importFromId The id of the existing VideoSurveillanceSystemGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VideoSurveillanceSystemGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_video_surveillance_system_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/video_surveillance_system_group alicloud_video_surveillance_system_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VideoSurveillanceSystemGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VideoSurveillanceSystemGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_video_surveillance_system_group',
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
    this._callback = config.callback;
    this._description = config.description;
    this._enabled = config.enabled;
    this._groupName = config.groupName;
    this._id = config.id;
    this._inProtocol = config.inProtocol;
    this._outProtocol = config.outProtocol;
    this._playDomain = config.playDomain;
    this._pushDomain = config.pushDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback - computed: false, optional: true, required: false
  private _callback?: string; 
  public get callback() {
    return this.getStringAttribute('callback');
  }
  public set callback(value: string) {
    this._callback = value;
  }
  public resetCallback() {
    this._callback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackInput() {
    return this._callback;
  }

  // capture_image - computed: true, optional: false, required: false
  public get captureImage() {
    return this.getNumberAttribute('capture_image');
  }

  // capture_interval - computed: true, optional: false, required: false
  public get captureInterval() {
    return this.getNumberAttribute('capture_interval');
  }

  // capture_oss_bucket - computed: true, optional: false, required: false
  public get captureOssBucket() {
    return this.getStringAttribute('capture_oss_bucket');
  }

  // capture_oss_path - computed: true, optional: false, required: false
  public get captureOssPath() {
    return this.getStringAttribute('capture_oss_path');
  }

  // capture_video - computed: true, optional: false, required: false
  public get captureVideo() {
    return this.getNumberAttribute('capture_video');
  }

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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // in_protocol - computed: false, optional: false, required: true
  private _inProtocol?: string; 
  public get inProtocol() {
    return this.getStringAttribute('in_protocol');
  }
  public set inProtocol(value: string) {
    this._inProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inProtocolInput() {
    return this._inProtocol;
  }

  // lazy_pull - computed: true, optional: false, required: false
  public get lazyPull() {
    return this.getBooleanAttribute('lazy_pull');
  }

  // out_protocol - computed: false, optional: false, required: true
  private _outProtocol?: string; 
  public get outProtocol() {
    return this.getStringAttribute('out_protocol');
  }
  public set outProtocol(value: string) {
    this._outProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outProtocolInput() {
    return this._outProtocol;
  }

  // play_domain - computed: false, optional: false, required: true
  private _playDomain?: string; 
  public get playDomain() {
    return this.getStringAttribute('play_domain');
  }
  public set playDomain(value: string) {
    this._playDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playDomainInput() {
    return this._playDomain;
  }

  // push_domain - computed: false, optional: false, required: true
  private _pushDomain?: string; 
  public get pushDomain() {
    return this.getStringAttribute('push_domain');
  }
  public set pushDomain(value: string) {
    this._pushDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushDomainInput() {
    return this._pushDomain;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callback: cdktf.stringToTerraform(this._callback),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      in_protocol: cdktf.stringToTerraform(this._inProtocol),
      out_protocol: cdktf.stringToTerraform(this._outProtocol),
      play_domain: cdktf.stringToTerraform(this._playDomain),
      push_domain: cdktf.stringToTerraform(this._pushDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback: {
        value: cdktf.stringToHclTerraform(this._callback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      in_protocol: {
        value: cdktf.stringToHclTerraform(this._inProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_protocol: {
        value: cdktf.stringToHclTerraform(this._outProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      play_domain: {
        value: cdktf.stringToHclTerraform(this._playDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_domain: {
        value: cdktf.stringToHclTerraform(this._pushDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
