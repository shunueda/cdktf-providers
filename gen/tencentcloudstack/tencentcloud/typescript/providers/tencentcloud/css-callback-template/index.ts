// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssCallbackTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Callback Key, public callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#callback_key CssCallbackTemplate#callback_key}
  */
  readonly callbackKey?: string;
  /**
  * Description information.Maximum length: 1024 bytes.Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#description CssCallbackTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#id CssCallbackTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PornCensorship callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#porn_censorship_notify_url CssCallbackTemplate#porn_censorship_notify_url}
  */
  readonly pornCensorshipNotifyUrl?: string;
  /**
  * Streaming Exception Callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#push_exception_notify_url CssCallbackTemplate#push_exception_notify_url}
  */
  readonly pushExceptionNotifyUrl?: string;
  /**
  * Recording callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#record_notify_url CssCallbackTemplate#record_notify_url}
  */
  readonly recordNotifyUrl?: string;
  /**
  * Snapshot callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#snapshot_notify_url CssCallbackTemplate#snapshot_notify_url}
  */
  readonly snapshotNotifyUrl?: string;
  /**
  * Launch callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#stream_begin_notify_url CssCallbackTemplate#stream_begin_notify_url}
  */
  readonly streamBeginNotifyUrl?: string;
  /**
  * Cutoff callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#stream_end_notify_url CssCallbackTemplate#stream_end_notify_url}
  */
  readonly streamEndNotifyUrl?: string;
  /**
  * Template name.Maximum length: 255 bytes. Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#template_name CssCallbackTemplate#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template tencentcloud_css_callback_template}
*/
export class CssCallbackTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_callback_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssCallbackTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssCallbackTemplate to import
  * @param importFromId The id of the existing CssCallbackTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssCallbackTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_callback_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_callback_template tencentcloud_css_callback_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssCallbackTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CssCallbackTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_callback_template',
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
    this._callbackKey = config.callbackKey;
    this._description = config.description;
    this._id = config.id;
    this._pornCensorshipNotifyUrl = config.pornCensorshipNotifyUrl;
    this._pushExceptionNotifyUrl = config.pushExceptionNotifyUrl;
    this._recordNotifyUrl = config.recordNotifyUrl;
    this._snapshotNotifyUrl = config.snapshotNotifyUrl;
    this._streamBeginNotifyUrl = config.streamBeginNotifyUrl;
    this._streamEndNotifyUrl = config.streamEndNotifyUrl;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_key - computed: false, optional: true, required: false
  private _callbackKey?: string; 
  public get callbackKey() {
    return this.getStringAttribute('callback_key');
  }
  public set callbackKey(value: string) {
    this._callbackKey = value;
  }
  public resetCallbackKey() {
    this._callbackKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackKeyInput() {
    return this._callbackKey;
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

  // porn_censorship_notify_url - computed: false, optional: true, required: false
  private _pornCensorshipNotifyUrl?: string; 
  public get pornCensorshipNotifyUrl() {
    return this.getStringAttribute('porn_censorship_notify_url');
  }
  public set pornCensorshipNotifyUrl(value: string) {
    this._pornCensorshipNotifyUrl = value;
  }
  public resetPornCensorshipNotifyUrl() {
    this._pornCensorshipNotifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pornCensorshipNotifyUrlInput() {
    return this._pornCensorshipNotifyUrl;
  }

  // push_exception_notify_url - computed: false, optional: true, required: false
  private _pushExceptionNotifyUrl?: string; 
  public get pushExceptionNotifyUrl() {
    return this.getStringAttribute('push_exception_notify_url');
  }
  public set pushExceptionNotifyUrl(value: string) {
    this._pushExceptionNotifyUrl = value;
  }
  public resetPushExceptionNotifyUrl() {
    this._pushExceptionNotifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushExceptionNotifyUrlInput() {
    return this._pushExceptionNotifyUrl;
  }

  // record_notify_url - computed: false, optional: true, required: false
  private _recordNotifyUrl?: string; 
  public get recordNotifyUrl() {
    return this.getStringAttribute('record_notify_url');
  }
  public set recordNotifyUrl(value: string) {
    this._recordNotifyUrl = value;
  }
  public resetRecordNotifyUrl() {
    this._recordNotifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNotifyUrlInput() {
    return this._recordNotifyUrl;
  }

  // snapshot_notify_url - computed: false, optional: true, required: false
  private _snapshotNotifyUrl?: string; 
  public get snapshotNotifyUrl() {
    return this.getStringAttribute('snapshot_notify_url');
  }
  public set snapshotNotifyUrl(value: string) {
    this._snapshotNotifyUrl = value;
  }
  public resetSnapshotNotifyUrl() {
    this._snapshotNotifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNotifyUrlInput() {
    return this._snapshotNotifyUrl;
  }

  // stream_begin_notify_url - computed: false, optional: true, required: false
  private _streamBeginNotifyUrl?: string; 
  public get streamBeginNotifyUrl() {
    return this.getStringAttribute('stream_begin_notify_url');
  }
  public set streamBeginNotifyUrl(value: string) {
    this._streamBeginNotifyUrl = value;
  }
  public resetStreamBeginNotifyUrl() {
    this._streamBeginNotifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBeginNotifyUrlInput() {
    return this._streamBeginNotifyUrl;
  }

  // stream_end_notify_url - computed: false, optional: true, required: false
  private _streamEndNotifyUrl?: string; 
  public get streamEndNotifyUrl() {
    return this.getStringAttribute('stream_end_notify_url');
  }
  public set streamEndNotifyUrl(value: string) {
    this._streamEndNotifyUrl = value;
  }
  public resetStreamEndNotifyUrl() {
    this._streamEndNotifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamEndNotifyUrlInput() {
    return this._streamEndNotifyUrl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callback_key: cdktf.stringToTerraform(this._callbackKey),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      porn_censorship_notify_url: cdktf.stringToTerraform(this._pornCensorshipNotifyUrl),
      push_exception_notify_url: cdktf.stringToTerraform(this._pushExceptionNotifyUrl),
      record_notify_url: cdktf.stringToTerraform(this._recordNotifyUrl),
      snapshot_notify_url: cdktf.stringToTerraform(this._snapshotNotifyUrl),
      stream_begin_notify_url: cdktf.stringToTerraform(this._streamBeginNotifyUrl),
      stream_end_notify_url: cdktf.stringToTerraform(this._streamEndNotifyUrl),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback_key: {
        value: cdktf.stringToHclTerraform(this._callbackKey),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      porn_censorship_notify_url: {
        value: cdktf.stringToHclTerraform(this._pornCensorshipNotifyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_exception_notify_url: {
        value: cdktf.stringToHclTerraform(this._pushExceptionNotifyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_notify_url: {
        value: cdktf.stringToHclTerraform(this._recordNotifyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_notify_url: {
        value: cdktf.stringToHclTerraform(this._snapshotNotifyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_begin_notify_url: {
        value: cdktf.stringToHclTerraform(this._streamBeginNotifyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_end_notify_url: {
        value: cdktf.stringToHclTerraform(this._streamEndNotifyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
