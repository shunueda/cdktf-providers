// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsNoticeContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#id ClsNoticeContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notice content name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#name ClsNoticeContent#name}
  */
  readonly name: string;
  /**
  * Template content language. 0: Chinese 1: English.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#type ClsNoticeContent#type}
  */
  readonly type?: number;
  /**
  * notice_contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#notice_contents ClsNoticeContent#notice_contents}
  */
  readonly noticeContents?: ClsNoticeContentNoticeContents;
}
export interface ClsNoticeContentNoticeContentsRecoveryContent {
  /**
  * Notification content template body information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#content ClsNoticeContent#content}
  */
  readonly content?: string;
  /**
  * Request headers: In HTTP requests, request headers contain additional information sent by the client to the server, such as user agent, authorization credentials, expected response format, etc. Only `custom callback` supports this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#headers ClsNoticeContent#headers}
  */
  readonly headers?: string[];
  /**
  * Notification content template title information. Some notification channel types do not support 'title', please refer to the Tencent Cloud Console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#title ClsNoticeContent#title}
  */
  readonly title?: string;
}

export function clsNoticeContentNoticeContentsRecoveryContentToTerraform(struct?: ClsNoticeContentNoticeContentsRecoveryContentOutputReference | ClsNoticeContentNoticeContentsRecoveryContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function clsNoticeContentNoticeContentsRecoveryContentToHclTerraform(struct?: ClsNoticeContentNoticeContentsRecoveryContentOutputReference | ClsNoticeContentNoticeContentsRecoveryContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsNoticeContentNoticeContentsRecoveryContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsNoticeContentNoticeContentsRecoveryContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsNoticeContentNoticeContentsRecoveryContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._headers = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._headers = value.headers;
      this._title = value.title;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface ClsNoticeContentNoticeContentsTriggerContent {
  /**
  * Notification content template body information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#content ClsNoticeContent#content}
  */
  readonly content?: string;
  /**
  * Request headers: In HTTP requests, request headers contain additional information sent by the client to the server, such as user agent, authorization credentials, expected response format, etc. Only `custom callback` supports this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#headers ClsNoticeContent#headers}
  */
  readonly headers?: string[];
  /**
  * Notification content template title information. Some notification channel types do not support 'title', please refer to the Tencent Cloud Console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#title ClsNoticeContent#title}
  */
  readonly title?: string;
}

export function clsNoticeContentNoticeContentsTriggerContentToTerraform(struct?: ClsNoticeContentNoticeContentsTriggerContentOutputReference | ClsNoticeContentNoticeContentsTriggerContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function clsNoticeContentNoticeContentsTriggerContentToHclTerraform(struct?: ClsNoticeContentNoticeContentsTriggerContentOutputReference | ClsNoticeContentNoticeContentsTriggerContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsNoticeContentNoticeContentsTriggerContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsNoticeContentNoticeContentsTriggerContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsNoticeContentNoticeContentsTriggerContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._headers = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._headers = value.headers;
      this._title = value.title;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface ClsNoticeContentNoticeContents {
  /**
  * Channel type. Email: Email; Sms: SMS; WeChat: WeChat; Phone: Telephone; WeCom: Enterprise WeChat; DingTalk: DingTalk; Lark: Feishu; Http: Custom callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#type ClsNoticeContent#type}
  */
  readonly type: string;
  /**
  * recovery_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#recovery_content ClsNoticeContent#recovery_content}
  */
  readonly recoveryContent?: ClsNoticeContentNoticeContentsRecoveryContent;
  /**
  * trigger_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#trigger_content ClsNoticeContent#trigger_content}
  */
  readonly triggerContent?: ClsNoticeContentNoticeContentsTriggerContent;
}

export function clsNoticeContentNoticeContentsToTerraform(struct?: ClsNoticeContentNoticeContentsOutputReference | ClsNoticeContentNoticeContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    recovery_content: clsNoticeContentNoticeContentsRecoveryContentToTerraform(struct!.recoveryContent),
    trigger_content: clsNoticeContentNoticeContentsTriggerContentToTerraform(struct!.triggerContent),
  }
}


export function clsNoticeContentNoticeContentsToHclTerraform(struct?: ClsNoticeContentNoticeContentsOutputReference | ClsNoticeContentNoticeContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_content: {
      value: clsNoticeContentNoticeContentsRecoveryContentToHclTerraform(struct!.recoveryContent),
      isBlock: true,
      type: "list",
      storageClassType: "ClsNoticeContentNoticeContentsRecoveryContentList",
    },
    trigger_content: {
      value: clsNoticeContentNoticeContentsTriggerContentToHclTerraform(struct!.triggerContent),
      isBlock: true,
      type: "list",
      storageClassType: "ClsNoticeContentNoticeContentsTriggerContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsNoticeContentNoticeContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsNoticeContentNoticeContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._recoveryContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryContent = this._recoveryContent?.internalValue;
    }
    if (this._triggerContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerContent = this._triggerContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsNoticeContentNoticeContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._recoveryContent.internalValue = undefined;
      this._triggerContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._recoveryContent.internalValue = value.recoveryContent;
      this._triggerContent.internalValue = value.triggerContent;
    }
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

  // recovery_content - computed: false, optional: true, required: false
  private _recoveryContent = new ClsNoticeContentNoticeContentsRecoveryContentOutputReference(this, "recovery_content");
  public get recoveryContent() {
    return this._recoveryContent;
  }
  public putRecoveryContent(value: ClsNoticeContentNoticeContentsRecoveryContent) {
    this._recoveryContent.internalValue = value;
  }
  public resetRecoveryContent() {
    this._recoveryContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryContentInput() {
    return this._recoveryContent.internalValue;
  }

  // trigger_content - computed: false, optional: true, required: false
  private _triggerContent = new ClsNoticeContentNoticeContentsTriggerContentOutputReference(this, "trigger_content");
  public get triggerContent() {
    return this._triggerContent;
  }
  public putTriggerContent(value: ClsNoticeContentNoticeContentsTriggerContent) {
    this._triggerContent.internalValue = value;
  }
  public resetTriggerContent() {
    this._triggerContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerContentInput() {
    return this._triggerContent.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content tencentcloud_cls_notice_content}
*/
export class ClsNoticeContent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_notice_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsNoticeContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsNoticeContent to import
  * @param importFromId The id of the existing ClsNoticeContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsNoticeContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_notice_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cls_notice_content tencentcloud_cls_notice_content} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsNoticeContentConfig
  */
  public constructor(scope: Construct, id: string, config: ClsNoticeContentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_notice_content',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._type = config.type;
    this._noticeContents.internalValue = config.noticeContents;
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

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // notice_contents - computed: false, optional: true, required: false
  private _noticeContents = new ClsNoticeContentNoticeContentsOutputReference(this, "notice_contents");
  public get noticeContents() {
    return this._noticeContents;
  }
  public putNoticeContents(value: ClsNoticeContentNoticeContents) {
    this._noticeContents.internalValue = value;
  }
  public resetNoticeContents() {
    this._noticeContents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeContentsInput() {
    return this._noticeContents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.numberToTerraform(this._type),
      notice_contents: clsNoticeContentNoticeContentsToTerraform(this._noticeContents.internalValue),
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
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notice_contents: {
        value: clsNoticeContentNoticeContentsToHclTerraform(this._noticeContents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsNoticeContentNoticeContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
