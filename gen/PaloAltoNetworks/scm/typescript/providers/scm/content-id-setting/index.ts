// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentIdSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#content_id ContentIdSetting#content_id}
  */
  readonly contentId?: ContentIdSettingContentId;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#device ContentIdSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#folder ContentIdSetting#folder}
  */
  readonly folder?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#snippet ContentIdSetting#snippet}
  */
  readonly snippet?: string;
}
export interface ContentIdSettingContentIdApplication {
  /**
  * Bypass exceed queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#bypass_exceed_queue ContentIdSetting#bypass_exceed_queue}
  */
  readonly bypassExceedQueue?: boolean | cdktf.IResolvable;
}

export function contentIdSettingContentIdApplicationToTerraform(struct?: ContentIdSettingContentIdApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_exceed_queue: cdktf.booleanToTerraform(struct!.bypassExceedQueue),
  }
}


export function contentIdSettingContentIdApplicationToHclTerraform(struct?: ContentIdSettingContentIdApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_exceed_queue: {
      value: cdktf.booleanToHclTerraform(struct!.bypassExceedQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContentIdSettingContentIdApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContentIdSettingContentIdApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassExceedQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassExceedQueue = this._bypassExceedQueue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentIdSettingContentIdApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassExceedQueue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassExceedQueue = value.bypassExceedQueue;
    }
  }

  // bypass_exceed_queue - computed: true, optional: true, required: false
  private _bypassExceedQueue?: boolean | cdktf.IResolvable; 
  public get bypassExceedQueue() {
    return this.getBooleanAttribute('bypass_exceed_queue');
  }
  public set bypassExceedQueue(value: boolean | cdktf.IResolvable) {
    this._bypassExceedQueue = value;
  }
  public resetBypassExceedQueue() {
    this._bypassExceedQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassExceedQueueInput() {
    return this._bypassExceedQueue;
  }
}
export interface ContentIdSettingContentId {
  /**
  * Allow forward decrypted content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#allow_forward_decrypted_content ContentIdSetting#allow_forward_decrypted_content}
  */
  readonly allowForwardDecryptedContent?: boolean | cdktf.IResolvable;
  /**
  * Allow http range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#allow_http_range ContentIdSetting#allow_http_range}
  */
  readonly allowHttpRange?: boolean | cdktf.IResolvable;
  /**
  * Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#application ContentIdSetting#application}
  */
  readonly application?: ContentIdSettingContentIdApplication;
  /**
  * Extended capture segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#extended_capture_segment ContentIdSetting#extended_capture_segment}
  */
  readonly extendedCaptureSegment?: number;
  /**
  * Strip x fwd for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#strip_x_fwd_for ContentIdSetting#strip_x_fwd_for}
  */
  readonly stripXFwdFor?: boolean | cdktf.IResolvable;
  /**
  * Tcp bypass exceed queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#tcp_bypass_exceed_queue ContentIdSetting#tcp_bypass_exceed_queue}
  */
  readonly tcpBypassExceedQueue?: boolean | cdktf.IResolvable;
  /**
  * Udp bypass exceed queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#udp_bypass_exceed_queue ContentIdSetting#udp_bypass_exceed_queue}
  */
  readonly udpBypassExceedQueue?: boolean | cdktf.IResolvable;
  /**
  * X forwarded for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#x_forwarded_for ContentIdSetting#x_forwarded_for}
  */
  readonly xForwardedFor?: string;
}

export function contentIdSettingContentIdToTerraform(struct?: ContentIdSettingContentId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_forward_decrypted_content: cdktf.booleanToTerraform(struct!.allowForwardDecryptedContent),
    allow_http_range: cdktf.booleanToTerraform(struct!.allowHttpRange),
    application: contentIdSettingContentIdApplicationToTerraform(struct!.application),
    extended_capture_segment: cdktf.numberToTerraform(struct!.extendedCaptureSegment),
    strip_x_fwd_for: cdktf.booleanToTerraform(struct!.stripXFwdFor),
    tcp_bypass_exceed_queue: cdktf.booleanToTerraform(struct!.tcpBypassExceedQueue),
    udp_bypass_exceed_queue: cdktf.booleanToTerraform(struct!.udpBypassExceedQueue),
    x_forwarded_for: cdktf.stringToTerraform(struct!.xForwardedFor),
  }
}


export function contentIdSettingContentIdToHclTerraform(struct?: ContentIdSettingContentId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_forward_decrypted_content: {
      value: cdktf.booleanToHclTerraform(struct!.allowForwardDecryptedContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_http_range: {
      value: cdktf.booleanToHclTerraform(struct!.allowHttpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application: {
      value: contentIdSettingContentIdApplicationToHclTerraform(struct!.application),
      isBlock: true,
      type: "struct",
      storageClassType: "ContentIdSettingContentIdApplication",
    },
    extended_capture_segment: {
      value: cdktf.numberToHclTerraform(struct!.extendedCaptureSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strip_x_fwd_for: {
      value: cdktf.booleanToHclTerraform(struct!.stripXFwdFor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_bypass_exceed_queue: {
      value: cdktf.booleanToHclTerraform(struct!.tcpBypassExceedQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    udp_bypass_exceed_queue: {
      value: cdktf.booleanToHclTerraform(struct!.udpBypassExceedQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContentIdSettingContentIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContentIdSettingContentId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowForwardDecryptedContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowForwardDecryptedContent = this._allowForwardDecryptedContent;
    }
    if (this._allowHttpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttpRange = this._allowHttpRange;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._extendedCaptureSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCaptureSegment = this._extendedCaptureSegment;
    }
    if (this._stripXFwdFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripXFwdFor = this._stripXFwdFor;
    }
    if (this._tcpBypassExceedQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBypassExceedQueue = this._tcpBypassExceedQueue;
    }
    if (this._udpBypassExceedQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBypassExceedQueue = this._udpBypassExceedQueue;
    }
    if (this._xForwardedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedFor = this._xForwardedFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentIdSettingContentId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowForwardDecryptedContent = undefined;
      this._allowHttpRange = undefined;
      this._application.internalValue = undefined;
      this._extendedCaptureSegment = undefined;
      this._stripXFwdFor = undefined;
      this._tcpBypassExceedQueue = undefined;
      this._udpBypassExceedQueue = undefined;
      this._xForwardedFor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowForwardDecryptedContent = value.allowForwardDecryptedContent;
      this._allowHttpRange = value.allowHttpRange;
      this._application.internalValue = value.application;
      this._extendedCaptureSegment = value.extendedCaptureSegment;
      this._stripXFwdFor = value.stripXFwdFor;
      this._tcpBypassExceedQueue = value.tcpBypassExceedQueue;
      this._udpBypassExceedQueue = value.udpBypassExceedQueue;
      this._xForwardedFor = value.xForwardedFor;
    }
  }

  // allow_forward_decrypted_content - computed: true, optional: true, required: false
  private _allowForwardDecryptedContent?: boolean | cdktf.IResolvable; 
  public get allowForwardDecryptedContent() {
    return this.getBooleanAttribute('allow_forward_decrypted_content');
  }
  public set allowForwardDecryptedContent(value: boolean | cdktf.IResolvable) {
    this._allowForwardDecryptedContent = value;
  }
  public resetAllowForwardDecryptedContent() {
    this._allowForwardDecryptedContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForwardDecryptedContentInput() {
    return this._allowForwardDecryptedContent;
  }

  // allow_http_range - computed: true, optional: true, required: false
  private _allowHttpRange?: boolean | cdktf.IResolvable; 
  public get allowHttpRange() {
    return this.getBooleanAttribute('allow_http_range');
  }
  public set allowHttpRange(value: boolean | cdktf.IResolvable) {
    this._allowHttpRange = value;
  }
  public resetAllowHttpRange() {
    this._allowHttpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttpRangeInput() {
    return this._allowHttpRange;
  }

  // application - computed: false, optional: true, required: false
  private _application = new ContentIdSettingContentIdApplicationOutputReference(this, "application");
  public get application() {
    return this._application;
  }
  public putApplication(value: ContentIdSettingContentIdApplication) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // extended_capture_segment - computed: true, optional: true, required: false
  private _extendedCaptureSegment?: number; 
  public get extendedCaptureSegment() {
    return this.getNumberAttribute('extended_capture_segment');
  }
  public set extendedCaptureSegment(value: number) {
    this._extendedCaptureSegment = value;
  }
  public resetExtendedCaptureSegment() {
    this._extendedCaptureSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCaptureSegmentInput() {
    return this._extendedCaptureSegment;
  }

  // strip_x_fwd_for - computed: true, optional: true, required: false
  private _stripXFwdFor?: boolean | cdktf.IResolvable; 
  public get stripXFwdFor() {
    return this.getBooleanAttribute('strip_x_fwd_for');
  }
  public set stripXFwdFor(value: boolean | cdktf.IResolvable) {
    this._stripXFwdFor = value;
  }
  public resetStripXFwdFor() {
    this._stripXFwdFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripXFwdForInput() {
    return this._stripXFwdFor;
  }

  // tcp_bypass_exceed_queue - computed: true, optional: true, required: false
  private _tcpBypassExceedQueue?: boolean | cdktf.IResolvable; 
  public get tcpBypassExceedQueue() {
    return this.getBooleanAttribute('tcp_bypass_exceed_queue');
  }
  public set tcpBypassExceedQueue(value: boolean | cdktf.IResolvable) {
    this._tcpBypassExceedQueue = value;
  }
  public resetTcpBypassExceedQueue() {
    this._tcpBypassExceedQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBypassExceedQueueInput() {
    return this._tcpBypassExceedQueue;
  }

  // udp_bypass_exceed_queue - computed: true, optional: true, required: false
  private _udpBypassExceedQueue?: boolean | cdktf.IResolvable; 
  public get udpBypassExceedQueue() {
    return this.getBooleanAttribute('udp_bypass_exceed_queue');
  }
  public set udpBypassExceedQueue(value: boolean | cdktf.IResolvable) {
    this._udpBypassExceedQueue = value;
  }
  public resetUdpBypassExceedQueue() {
    this._udpBypassExceedQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBypassExceedQueueInput() {
    return this._udpBypassExceedQueue;
  }

  // x_forwarded_for - computed: true, optional: true, required: false
  private _xForwardedFor?: string; 
  public get xForwardedFor() {
    return this.getStringAttribute('x_forwarded_for');
  }
  public set xForwardedFor(value: string) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting scm_content_id_setting}
*/
export class ContentIdSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_content_id_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContentIdSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContentIdSetting to import
  * @param importFromId The id of the existing ContentIdSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContentIdSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_content_id_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/content_id_setting scm_content_id_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentIdSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ContentIdSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_content_id_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentId.internalValue = config.contentId;
    this._device = config.device;
    this._folder = config.folder;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_id - computed: false, optional: true, required: false
  private _contentId = new ContentIdSettingContentIdOutputReference(this, "content_id");
  public get contentId() {
    return this._contentId;
  }
  public putContentId(value: ContentIdSettingContentId) {
    this._contentId.internalValue = value;
  }
  public resetContentId() {
    this._contentId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_id: contentIdSettingContentIdToTerraform(this._contentId.internalValue),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_id: {
        value: contentIdSettingContentIdToHclTerraform(this._contentId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContentIdSettingContentId",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
