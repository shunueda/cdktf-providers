// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementResourceTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#color ManagementResourceTcp#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#comments ManagementResourceTcp#comments}
  */
  readonly comments?: string;
  /**
  * Configures how to track connections that match this rule but fail the content security checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#exception_track ManagementResourceTcp#exception_track}
  */
  readonly exceptionTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#id ManagementResourceTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#ignore_errors ManagementResourceTcp#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#ignore_warnings ManagementResourceTcp#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#name ManagementResourceTcp#name}
  */
  readonly name: string;
  /**
  * The type of the TCP resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#resource_type ManagementResourceTcp#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#tags ManagementResourceTcp#tags}
  */
  readonly tags?: string[];
  /**
  * cvp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#cvp_settings ManagementResourceTcp#cvp_settings}
  */
  readonly cvpSettings?: ManagementResourceTcpCvpSettings;
  /**
  * ufp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#ufp_settings ManagementResourceTcp#ufp_settings}
  */
  readonly ufpSettings?: ManagementResourceTcpUfpSettings;
}
export interface ManagementResourceTcpCvpSettings {
  /**
  * Configures the CVP server to inspect but not modify content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#allowed_to_modify_content ManagementResourceTcp#allowed_to_modify_content}
  */
  readonly allowedToModifyContent?: boolean | cdktf.IResolvable;
  /**
  * Designates when the CVP server returns data to the Security Gateway security server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#reply_order ManagementResourceTcp#reply_order}
  */
  readonly replyOrder?: string;
  /**
  * CVP server identified by name or UID. The CVP server must already be defined as an OPSEC Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#server ManagementResourceTcp#server}
  */
  readonly server: string;
}

export function managementResourceTcpCvpSettingsToTerraform(struct?: ManagementResourceTcpCvpSettingsOutputReference | ManagementResourceTcpCvpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_to_modify_content: cdktf.booleanToTerraform(struct!.allowedToModifyContent),
    reply_order: cdktf.stringToTerraform(struct!.replyOrder),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function managementResourceTcpCvpSettingsToHclTerraform(struct?: ManagementResourceTcpCvpSettingsOutputReference | ManagementResourceTcpCvpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_to_modify_content: {
      value: cdktf.booleanToHclTerraform(struct!.allowedToModifyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reply_order: {
      value: cdktf.stringToHclTerraform(struct!.replyOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceTcpCvpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceTcpCvpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedToModifyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToModifyContent = this._allowedToModifyContent;
    }
    if (this._replyOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyOrder = this._replyOrder;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceTcpCvpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedToModifyContent = undefined;
      this._replyOrder = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedToModifyContent = value.allowedToModifyContent;
      this._replyOrder = value.replyOrder;
      this._server = value.server;
    }
  }

  // allowed_to_modify_content - computed: false, optional: true, required: false
  private _allowedToModifyContent?: boolean | cdktf.IResolvable; 
  public get allowedToModifyContent() {
    return this.getBooleanAttribute('allowed_to_modify_content');
  }
  public set allowedToModifyContent(value: boolean | cdktf.IResolvable) {
    this._allowedToModifyContent = value;
  }
  public resetAllowedToModifyContent() {
    this._allowedToModifyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToModifyContentInput() {
    return this._allowedToModifyContent;
  }

  // reply_order - computed: false, optional: true, required: false
  private _replyOrder?: string; 
  public get replyOrder() {
    return this.getStringAttribute('reply_order');
  }
  public set replyOrder(value: string) {
    this._replyOrder = value;
  }
  public resetReplyOrder() {
    this._replyOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyOrderInput() {
    return this._replyOrder;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ManagementResourceTcpUfpSettings {
  /**
  * Specifies if and how caching is to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#caching_control ManagementResourceTcp#caching_control}
  */
  readonly cachingControl?: string;
  /**
  * The UFP server will be ignored after numerous UFP server connections were unsuccessful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#ignore_ufp_server_after_failure ManagementResourceTcp#ignore_ufp_server_after_failure}
  */
  readonly ignoreUfpServerAfterFailure?: boolean | cdktf.IResolvable;
  /**
  * Signifies at what point the UFP server should be ignored, Applicable only if 'ignore after fail' is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#number_of_failures_before_ignore ManagementResourceTcp#number_of_failures_before_ignore}
  */
  readonly numberOfFailuresBeforeIgnore?: number;
  /**
  * UFP server identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#server ManagementResourceTcp#server}
  */
  readonly server: string;
  /**
  * The amount of time, in seconds, that must pass before a UFP server connection should be attempted, Applicable only if 'ignore after fail' is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#timeout_before_reconnecting ManagementResourceTcp#timeout_before_reconnecting}
  */
  readonly timeoutBeforeReconnecting?: number;
}

export function managementResourceTcpUfpSettingsToTerraform(struct?: ManagementResourceTcpUfpSettingsOutputReference | ManagementResourceTcpUfpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_control: cdktf.stringToTerraform(struct!.cachingControl),
    ignore_ufp_server_after_failure: cdktf.booleanToTerraform(struct!.ignoreUfpServerAfterFailure),
    number_of_failures_before_ignore: cdktf.numberToTerraform(struct!.numberOfFailuresBeforeIgnore),
    server: cdktf.stringToTerraform(struct!.server),
    timeout_before_reconnecting: cdktf.numberToTerraform(struct!.timeoutBeforeReconnecting),
  }
}


export function managementResourceTcpUfpSettingsToHclTerraform(struct?: ManagementResourceTcpUfpSettingsOutputReference | ManagementResourceTcpUfpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_control: {
      value: cdktf.stringToHclTerraform(struct!.cachingControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_ufp_server_after_failure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUfpServerAfterFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_failures_before_ignore: {
      value: cdktf.numberToHclTerraform(struct!.numberOfFailuresBeforeIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_before_reconnecting: {
      value: cdktf.numberToHclTerraform(struct!.timeoutBeforeReconnecting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceTcpUfpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceTcpUfpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingControl = this._cachingControl;
    }
    if (this._ignoreUfpServerAfterFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUfpServerAfterFailure = this._ignoreUfpServerAfterFailure;
    }
    if (this._numberOfFailuresBeforeIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfFailuresBeforeIgnore = this._numberOfFailuresBeforeIgnore;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._timeoutBeforeReconnecting !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutBeforeReconnecting = this._timeoutBeforeReconnecting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceTcpUfpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachingControl = undefined;
      this._ignoreUfpServerAfterFailure = undefined;
      this._numberOfFailuresBeforeIgnore = undefined;
      this._server = undefined;
      this._timeoutBeforeReconnecting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachingControl = value.cachingControl;
      this._ignoreUfpServerAfterFailure = value.ignoreUfpServerAfterFailure;
      this._numberOfFailuresBeforeIgnore = value.numberOfFailuresBeforeIgnore;
      this._server = value.server;
      this._timeoutBeforeReconnecting = value.timeoutBeforeReconnecting;
    }
  }

  // caching_control - computed: false, optional: true, required: false
  private _cachingControl?: string; 
  public get cachingControl() {
    return this.getStringAttribute('caching_control');
  }
  public set cachingControl(value: string) {
    this._cachingControl = value;
  }
  public resetCachingControl() {
    this._cachingControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingControlInput() {
    return this._cachingControl;
  }

  // ignore_ufp_server_after_failure - computed: false, optional: true, required: false
  private _ignoreUfpServerAfterFailure?: boolean | cdktf.IResolvable; 
  public get ignoreUfpServerAfterFailure() {
    return this.getBooleanAttribute('ignore_ufp_server_after_failure');
  }
  public set ignoreUfpServerAfterFailure(value: boolean | cdktf.IResolvable) {
    this._ignoreUfpServerAfterFailure = value;
  }
  public resetIgnoreUfpServerAfterFailure() {
    this._ignoreUfpServerAfterFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUfpServerAfterFailureInput() {
    return this._ignoreUfpServerAfterFailure;
  }

  // number_of_failures_before_ignore - computed: false, optional: true, required: false
  private _numberOfFailuresBeforeIgnore?: number; 
  public get numberOfFailuresBeforeIgnore() {
    return this.getNumberAttribute('number_of_failures_before_ignore');
  }
  public set numberOfFailuresBeforeIgnore(value: number) {
    this._numberOfFailuresBeforeIgnore = value;
  }
  public resetNumberOfFailuresBeforeIgnore() {
    this._numberOfFailuresBeforeIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFailuresBeforeIgnoreInput() {
    return this._numberOfFailuresBeforeIgnore;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // timeout_before_reconnecting - computed: false, optional: true, required: false
  private _timeoutBeforeReconnecting?: number; 
  public get timeoutBeforeReconnecting() {
    return this.getNumberAttribute('timeout_before_reconnecting');
  }
  public set timeoutBeforeReconnecting(value: number) {
    this._timeoutBeforeReconnecting = value;
  }
  public resetTimeoutBeforeReconnecting() {
    this._timeoutBeforeReconnecting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutBeforeReconnectingInput() {
    return this._timeoutBeforeReconnecting;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp checkpoint_management_resource_tcp}
*/
export class ManagementResourceTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementResourceTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementResourceTcp to import
  * @param importFromId The id of the existing ManagementResourceTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementResourceTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_tcp checkpoint_management_resource_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementResourceTcpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementResourceTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_tcp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._exceptionTrack = config.exceptionTrack;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._resourceType = config.resourceType;
    this._tags = config.tags;
    this._cvpSettings.internalValue = config.cvpSettings;
    this._ufpSettings.internalValue = config.ufpSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // exception_track - computed: false, optional: true, required: false
  private _exceptionTrack?: string; 
  public get exceptionTrack() {
    return this.getStringAttribute('exception_track');
  }
  public set exceptionTrack(value: string) {
    this._exceptionTrack = value;
  }
  public resetExceptionTrack() {
    this._exceptionTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTrackInput() {
    return this._exceptionTrack;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // cvp_settings - computed: false, optional: true, required: false
  private _cvpSettings = new ManagementResourceTcpCvpSettingsOutputReference(this, "cvp_settings");
  public get cvpSettings() {
    return this._cvpSettings;
  }
  public putCvpSettings(value: ManagementResourceTcpCvpSettings) {
    this._cvpSettings.internalValue = value;
  }
  public resetCvpSettings() {
    this._cvpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvpSettingsInput() {
    return this._cvpSettings.internalValue;
  }

  // ufp_settings - computed: false, optional: true, required: false
  private _ufpSettings = new ManagementResourceTcpUfpSettingsOutputReference(this, "ufp_settings");
  public get ufpSettings() {
    return this._ufpSettings;
  }
  public putUfpSettings(value: ManagementResourceTcpUfpSettings) {
    this._ufpSettings.internalValue = value;
  }
  public resetUfpSettings() {
    this._ufpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ufpSettingsInput() {
    return this._ufpSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      exception_track: cdktf.stringToTerraform(this._exceptionTrack),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      cvp_settings: managementResourceTcpCvpSettingsToTerraform(this._cvpSettings.internalValue),
      ufp_settings: managementResourceTcpUfpSettingsToTerraform(this._ufpSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_track: {
        value: cdktf.stringToHclTerraform(this._exceptionTrack),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cvp_settings: {
        value: managementResourceTcpCvpSettingsToHclTerraform(this._cvpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceTcpCvpSettingsList",
      },
      ufp_settings: {
        value: managementResourceTcpUfpSettingsToHclTerraform(this._ufpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceTcpUfpSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
