// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementResourceUriConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#color ManagementResourceUri#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#comments ManagementResourceUri#comments}
  */
  readonly comments?: string;
  /**
  * Connection methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#connection_methods ManagementResourceUri#connection_methods}
  */
  readonly connectionMethods?: { [key: string]: string };
  /**
  * Configures how to track connections that match this rule but fail the content security checks. An example of an exception is a connection with an unsupported scheme or method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#exception_track ManagementResourceUri#exception_track}
  */
  readonly exceptionTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#id ManagementResourceUri#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#ignore_errors ManagementResourceUri#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#ignore_warnings ManagementResourceUri#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#name ManagementResourceUri#name}
  */
  readonly name: string;
  /**
  * SOAP settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#soap ManagementResourceUri#soap}
  */
  readonly soap?: { [key: string]: string };
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#tags ManagementResourceUri#tags}
  */
  readonly tags?: string[];
  /**
  * The type can be Wild Cards or UFP, where a UFP server holds categories of forbidden web sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#uri_match_specification_type ManagementResourceUri#uri_match_specification_type}
  */
  readonly uriMatchSpecificationType?: string;
  /**
  * Select the use of the URI resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#use_this_resource_to ManagementResourceUri#use_this_resource_to}
  */
  readonly useThisResourceTo?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#action ManagementResourceUri#action}
  */
  readonly action?: ManagementResourceUriAction;
  /**
  * cvp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#cvp ManagementResourceUri#cvp}
  */
  readonly cvp?: ManagementResourceUriCvp;
  /**
  * match_ufp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#match_ufp ManagementResourceUri#match_ufp}
  */
  readonly matchUfp?: ManagementResourceUriMatchUfp;
  /**
  * match_wildcards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#match_wildcards ManagementResourceUri#match_wildcards}
  */
  readonly matchWildcards?: ManagementResourceUriMatchWildcards;
}
export interface ManagementResourceUriAction {
  /**
  * If the Action in a rule which uses this resource is Drop or Reject, then the Replacement URI is displayed instead of the one requested by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#replacement_uri ManagementResourceUri#replacement_uri}
  */
  readonly replacementUri?: string;
  /**
  * Strip activeX tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#strip_activex_tags ManagementResourceUri#strip_activex_tags}
  */
  readonly stripActivexTags?: boolean | cdktf.IResolvable;
  /**
  * Strip JAVA applets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#strip_applet_tags ManagementResourceUri#strip_applet_tags}
  */
  readonly stripAppletTags?: boolean | cdktf.IResolvable;
  /**
  * Strip ftp links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#strip_ftp_links ManagementResourceUri#strip_ftp_links}
  */
  readonly stripFtpLinks?: boolean | cdktf.IResolvable;
  /**
  * Strip ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#strip_port_strings ManagementResourceUri#strip_port_strings}
  */
  readonly stripPortStrings?: boolean | cdktf.IResolvable;
  /**
  * Strip JAVA scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#strip_script_tags ManagementResourceUri#strip_script_tags}
  */
  readonly stripScriptTags?: boolean | cdktf.IResolvable;
}

export function managementResourceUriActionToTerraform(struct?: ManagementResourceUriActionOutputReference | ManagementResourceUriAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replacement_uri: cdktf.stringToTerraform(struct!.replacementUri),
    strip_activex_tags: cdktf.booleanToTerraform(struct!.stripActivexTags),
    strip_applet_tags: cdktf.booleanToTerraform(struct!.stripAppletTags),
    strip_ftp_links: cdktf.booleanToTerraform(struct!.stripFtpLinks),
    strip_port_strings: cdktf.booleanToTerraform(struct!.stripPortStrings),
    strip_script_tags: cdktf.booleanToTerraform(struct!.stripScriptTags),
  }
}


export function managementResourceUriActionToHclTerraform(struct?: ManagementResourceUriActionOutputReference | ManagementResourceUriAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replacement_uri: {
      value: cdktf.stringToHclTerraform(struct!.replacementUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_activex_tags: {
      value: cdktf.booleanToHclTerraform(struct!.stripActivexTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_applet_tags: {
      value: cdktf.booleanToHclTerraform(struct!.stripAppletTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_ftp_links: {
      value: cdktf.booleanToHclTerraform(struct!.stripFtpLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_port_strings: {
      value: cdktf.booleanToHclTerraform(struct!.stripPortStrings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_script_tags: {
      value: cdktf.booleanToHclTerraform(struct!.stripScriptTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceUriActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceUriAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replacementUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementUri = this._replacementUri;
    }
    if (this._stripActivexTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripActivexTags = this._stripActivexTags;
    }
    if (this._stripAppletTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripAppletTags = this._stripAppletTags;
    }
    if (this._stripFtpLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripFtpLinks = this._stripFtpLinks;
    }
    if (this._stripPortStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripPortStrings = this._stripPortStrings;
    }
    if (this._stripScriptTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripScriptTags = this._stripScriptTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceUriAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replacementUri = undefined;
      this._stripActivexTags = undefined;
      this._stripAppletTags = undefined;
      this._stripFtpLinks = undefined;
      this._stripPortStrings = undefined;
      this._stripScriptTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replacementUri = value.replacementUri;
      this._stripActivexTags = value.stripActivexTags;
      this._stripAppletTags = value.stripAppletTags;
      this._stripFtpLinks = value.stripFtpLinks;
      this._stripPortStrings = value.stripPortStrings;
      this._stripScriptTags = value.stripScriptTags;
    }
  }

  // replacement_uri - computed: false, optional: true, required: false
  private _replacementUri?: string; 
  public get replacementUri() {
    return this.getStringAttribute('replacement_uri');
  }
  public set replacementUri(value: string) {
    this._replacementUri = value;
  }
  public resetReplacementUri() {
    this._replacementUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementUriInput() {
    return this._replacementUri;
  }

  // strip_activex_tags - computed: false, optional: true, required: false
  private _stripActivexTags?: boolean | cdktf.IResolvable; 
  public get stripActivexTags() {
    return this.getBooleanAttribute('strip_activex_tags');
  }
  public set stripActivexTags(value: boolean | cdktf.IResolvable) {
    this._stripActivexTags = value;
  }
  public resetStripActivexTags() {
    this._stripActivexTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripActivexTagsInput() {
    return this._stripActivexTags;
  }

  // strip_applet_tags - computed: false, optional: true, required: false
  private _stripAppletTags?: boolean | cdktf.IResolvable; 
  public get stripAppletTags() {
    return this.getBooleanAttribute('strip_applet_tags');
  }
  public set stripAppletTags(value: boolean | cdktf.IResolvable) {
    this._stripAppletTags = value;
  }
  public resetStripAppletTags() {
    this._stripAppletTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripAppletTagsInput() {
    return this._stripAppletTags;
  }

  // strip_ftp_links - computed: false, optional: true, required: false
  private _stripFtpLinks?: boolean | cdktf.IResolvable; 
  public get stripFtpLinks() {
    return this.getBooleanAttribute('strip_ftp_links');
  }
  public set stripFtpLinks(value: boolean | cdktf.IResolvable) {
    this._stripFtpLinks = value;
  }
  public resetStripFtpLinks() {
    this._stripFtpLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripFtpLinksInput() {
    return this._stripFtpLinks;
  }

  // strip_port_strings - computed: false, optional: true, required: false
  private _stripPortStrings?: boolean | cdktf.IResolvable; 
  public get stripPortStrings() {
    return this.getBooleanAttribute('strip_port_strings');
  }
  public set stripPortStrings(value: boolean | cdktf.IResolvable) {
    this._stripPortStrings = value;
  }
  public resetStripPortStrings() {
    this._stripPortStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPortStringsInput() {
    return this._stripPortStrings;
  }

  // strip_script_tags - computed: false, optional: true, required: false
  private _stripScriptTags?: boolean | cdktf.IResolvable; 
  public get stripScriptTags() {
    return this.getBooleanAttribute('strip_script_tags');
  }
  public set stripScriptTags(value: boolean | cdktf.IResolvable) {
    this._stripScriptTags = value;
  }
  public resetStripScriptTags() {
    this._stripScriptTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripScriptTagsInput() {
    return this._stripScriptTags;
  }
}
export interface ManagementResourceUriCvp {
  /**
  * Configures the CVP server to inspect but not modify content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#allowed_to_modify_content ManagementResourceUri#allowed_to_modify_content}
  */
  readonly allowedToModifyContent?: boolean | cdktf.IResolvable;
  /**
  * Select to enable the Content Vectoring Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#enable_cvp ManagementResourceUri#enable_cvp}
  */
  readonly enableCvp?: boolean | cdktf.IResolvable;
  /**
  * Designates when the CVP server returns data to the Security Gateway security server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#reply_order ManagementResourceUri#reply_order}
  */
  readonly replyOrder?: string;
  /**
  * Select, if you would like the CVP server to check the HTTP headers of the message packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#send_http_headers_to_cvp ManagementResourceUri#send_http_headers_to_cvp}
  */
  readonly sendHttpHeadersToCvp?: boolean | cdktf.IResolvable;
  /**
  * Used to protect against undesirable content in the HTTP request, for example, when inspecting peer-to-peer connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#send_http_request_to_cvp ManagementResourceUri#send_http_request_to_cvp}
  */
  readonly sendHttpRequestToCvp?: boolean | cdktf.IResolvable;
  /**
  * Improves the performance of the CVP server. This option does not send to the CVP server traffic that is considered safe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#send_only_unsafe_file_types ManagementResourceUri#send_only_unsafe_file_types}
  */
  readonly sendOnlyUnsafeFileTypes?: boolean | cdktf.IResolvable;
  /**
  * The UID or Name of the CVP server, make sure the CVP server is already be defined as an OPSEC Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#server ManagementResourceUri#server}
  */
  readonly server?: string;
}

export function managementResourceUriCvpToTerraform(struct?: ManagementResourceUriCvpOutputReference | ManagementResourceUriCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_to_modify_content: cdktf.booleanToTerraform(struct!.allowedToModifyContent),
    enable_cvp: cdktf.booleanToTerraform(struct!.enableCvp),
    reply_order: cdktf.stringToTerraform(struct!.replyOrder),
    send_http_headers_to_cvp: cdktf.booleanToTerraform(struct!.sendHttpHeadersToCvp),
    send_http_request_to_cvp: cdktf.booleanToTerraform(struct!.sendHttpRequestToCvp),
    send_only_unsafe_file_types: cdktf.booleanToTerraform(struct!.sendOnlyUnsafeFileTypes),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function managementResourceUriCvpToHclTerraform(struct?: ManagementResourceUriCvpOutputReference | ManagementResourceUriCvp): any {
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
    enable_cvp: {
      value: cdktf.booleanToHclTerraform(struct!.enableCvp),
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
    send_http_headers_to_cvp: {
      value: cdktf.booleanToHclTerraform(struct!.sendHttpHeadersToCvp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_http_request_to_cvp: {
      value: cdktf.booleanToHclTerraform(struct!.sendHttpRequestToCvp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_only_unsafe_file_types: {
      value: cdktf.booleanToHclTerraform(struct!.sendOnlyUnsafeFileTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ManagementResourceUriCvpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceUriCvp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedToModifyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToModifyContent = this._allowedToModifyContent;
    }
    if (this._enableCvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCvp = this._enableCvp;
    }
    if (this._replyOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyOrder = this._replyOrder;
    }
    if (this._sendHttpHeadersToCvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHttpHeadersToCvp = this._sendHttpHeadersToCvp;
    }
    if (this._sendHttpRequestToCvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHttpRequestToCvp = this._sendHttpRequestToCvp;
    }
    if (this._sendOnlyUnsafeFileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnlyUnsafeFileTypes = this._sendOnlyUnsafeFileTypes;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceUriCvp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedToModifyContent = undefined;
      this._enableCvp = undefined;
      this._replyOrder = undefined;
      this._sendHttpHeadersToCvp = undefined;
      this._sendHttpRequestToCvp = undefined;
      this._sendOnlyUnsafeFileTypes = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedToModifyContent = value.allowedToModifyContent;
      this._enableCvp = value.enableCvp;
      this._replyOrder = value.replyOrder;
      this._sendHttpHeadersToCvp = value.sendHttpHeadersToCvp;
      this._sendHttpRequestToCvp = value.sendHttpRequestToCvp;
      this._sendOnlyUnsafeFileTypes = value.sendOnlyUnsafeFileTypes;
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

  // enable_cvp - computed: false, optional: true, required: false
  private _enableCvp?: boolean | cdktf.IResolvable; 
  public get enableCvp() {
    return this.getBooleanAttribute('enable_cvp');
  }
  public set enableCvp(value: boolean | cdktf.IResolvable) {
    this._enableCvp = value;
  }
  public resetEnableCvp() {
    this._enableCvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCvpInput() {
    return this._enableCvp;
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

  // send_http_headers_to_cvp - computed: false, optional: true, required: false
  private _sendHttpHeadersToCvp?: boolean | cdktf.IResolvable; 
  public get sendHttpHeadersToCvp() {
    return this.getBooleanAttribute('send_http_headers_to_cvp');
  }
  public set sendHttpHeadersToCvp(value: boolean | cdktf.IResolvable) {
    this._sendHttpHeadersToCvp = value;
  }
  public resetSendHttpHeadersToCvp() {
    this._sendHttpHeadersToCvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHttpHeadersToCvpInput() {
    return this._sendHttpHeadersToCvp;
  }

  // send_http_request_to_cvp - computed: false, optional: true, required: false
  private _sendHttpRequestToCvp?: boolean | cdktf.IResolvable; 
  public get sendHttpRequestToCvp() {
    return this.getBooleanAttribute('send_http_request_to_cvp');
  }
  public set sendHttpRequestToCvp(value: boolean | cdktf.IResolvable) {
    this._sendHttpRequestToCvp = value;
  }
  public resetSendHttpRequestToCvp() {
    this._sendHttpRequestToCvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHttpRequestToCvpInput() {
    return this._sendHttpRequestToCvp;
  }

  // send_only_unsafe_file_types - computed: false, optional: true, required: false
  private _sendOnlyUnsafeFileTypes?: boolean | cdktf.IResolvable; 
  public get sendOnlyUnsafeFileTypes() {
    return this.getBooleanAttribute('send_only_unsafe_file_types');
  }
  public set sendOnlyUnsafeFileTypes(value: boolean | cdktf.IResolvable) {
    this._sendOnlyUnsafeFileTypes = value;
  }
  public resetSendOnlyUnsafeFileTypes() {
    this._sendOnlyUnsafeFileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyUnsafeFileTypesInput() {
    return this._sendOnlyUnsafeFileTypes;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ManagementResourceUriMatchUfp {
  /**
  * Specifies if and how caching is to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#caching_control ManagementResourceUri#caching_control}
  */
  readonly cachingControl?: string;
  /**
  * The UFP server will be ignored after numerous UFP server connections were unsuccessful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#ignore_ufp_server_after_failure ManagementResourceUri#ignore_ufp_server_after_failure}
  */
  readonly ignoreUfpServerAfterFailure?: boolean | cdktf.IResolvable;
  /**
  * Signifies at what point the UFP server should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#number_of_failures_before_ignore ManagementResourceUri#number_of_failures_before_ignore}
  */
  readonly numberOfFailuresBeforeIgnore?: number;
  /**
  * The UID or Name of the UFP server that is an OPSEC certified third party application that checks URLs against a list of permitted categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#server ManagementResourceUri#server}
  */
  readonly server?: string;
  /**
  * The amount of time that must pass before a UFP server connection should be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#timeout_before_reconnecting ManagementResourceUri#timeout_before_reconnecting}
  */
  readonly timeoutBeforeReconnecting?: number;
}

export function managementResourceUriMatchUfpToTerraform(struct?: ManagementResourceUriMatchUfpOutputReference | ManagementResourceUriMatchUfp): any {
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


export function managementResourceUriMatchUfpToHclTerraform(struct?: ManagementResourceUriMatchUfpOutputReference | ManagementResourceUriMatchUfp): any {
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

export class ManagementResourceUriMatchUfpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceUriMatchUfp | undefined {
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

  public set internalValue(value: ManagementResourceUriMatchUfp | undefined) {
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
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
export interface ManagementResourceUriMatchWildcardsMethods {
  /**
  * GET method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#get ManagementResourceUri#get}
  */
  readonly get?: boolean | cdktf.IResolvable;
  /**
  * HEAD method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#head ManagementResourceUri#head}
  */
  readonly head?: boolean | cdktf.IResolvable;
  /**
  * You can specify another method in the Other field. You can use wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#other ManagementResourceUri#other}
  */
  readonly other?: string;
  /**
  * POST method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#post ManagementResourceUri#post}
  */
  readonly post?: boolean | cdktf.IResolvable;
  /**
  * PUT method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#put ManagementResourceUri#put}
  */
  readonly put?: boolean | cdktf.IResolvable;
}

export function managementResourceUriMatchWildcardsMethodsToTerraform(struct?: ManagementResourceUriMatchWildcardsMethodsOutputReference | ManagementResourceUriMatchWildcardsMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    get: cdktf.booleanToTerraform(struct!.get),
    head: cdktf.booleanToTerraform(struct!.head),
    other: cdktf.stringToTerraform(struct!.other),
    post: cdktf.booleanToTerraform(struct!.post),
    put: cdktf.booleanToTerraform(struct!.put),
  }
}


export function managementResourceUriMatchWildcardsMethodsToHclTerraform(struct?: ManagementResourceUriMatchWildcardsMethodsOutputReference | ManagementResourceUriMatchWildcardsMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    get: {
      value: cdktf.booleanToHclTerraform(struct!.get),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    head: {
      value: cdktf.booleanToHclTerraform(struct!.head),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post: {
      value: cdktf.booleanToHclTerraform(struct!.post),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    put: {
      value: cdktf.booleanToHclTerraform(struct!.put),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceUriMatchWildcardsMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceUriMatchWildcardsMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._get !== undefined) {
      hasAnyValues = true;
      internalValueResult.get = this._get;
    }
    if (this._head !== undefined) {
      hasAnyValues = true;
      internalValueResult.head = this._head;
    }
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._post !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post;
    }
    if (this._put !== undefined) {
      hasAnyValues = true;
      internalValueResult.put = this._put;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceUriMatchWildcardsMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._get = undefined;
      this._head = undefined;
      this._other = undefined;
      this._post = undefined;
      this._put = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._get = value.get;
      this._head = value.head;
      this._other = value.other;
      this._post = value.post;
      this._put = value.put;
    }
  }

  // get - computed: false, optional: true, required: false
  private _get?: boolean | cdktf.IResolvable; 
  public get get() {
    return this.getBooleanAttribute('get');
  }
  public set get(value: boolean | cdktf.IResolvable) {
    this._get = value;
  }
  public resetGet() {
    this._get = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get getInput() {
    return this._get;
  }

  // head - computed: false, optional: true, required: false
  private _head?: boolean | cdktf.IResolvable; 
  public get head() {
    return this.getBooleanAttribute('head');
  }
  public set head(value: boolean | cdktf.IResolvable) {
    this._head = value;
  }
  public resetHead() {
    this._head = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headInput() {
    return this._head;
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // post - computed: false, optional: true, required: false
  private _post?: boolean | cdktf.IResolvable; 
  public get post() {
    return this.getBooleanAttribute('post');
  }
  public set post(value: boolean | cdktf.IResolvable) {
    this._post = value;
  }
  public resetPost() {
    this._post = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post;
  }

  // put - computed: false, optional: true, required: false
  private _put?: boolean | cdktf.IResolvable; 
  public get put() {
    return this.getBooleanAttribute('put');
  }
  public set put(value: boolean | cdktf.IResolvable) {
    this._put = value;
  }
  public resetPut() {
    this._put = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putInput() {
    return this._put;
  }
}
export interface ManagementResourceUriMatchWildcardsSchemes {
  /**
  * Ftp scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#ftp ManagementResourceUri#ftp}
  */
  readonly ftp?: boolean | cdktf.IResolvable;
  /**
  * Gopher scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#gopher ManagementResourceUri#gopher}
  */
  readonly gopher?: boolean | cdktf.IResolvable;
  /**
  * Http scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#http ManagementResourceUri#http}
  */
  readonly http?: boolean | cdktf.IResolvable;
  /**
  * Mailto scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#mailto ManagementResourceUri#mailto}
  */
  readonly mailto?: boolean | cdktf.IResolvable;
  /**
  * News scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#news ManagementResourceUri#news}
  */
  readonly news?: boolean | cdktf.IResolvable;
  /**
  * You can specify another scheme in the Other field. You can use wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#other ManagementResourceUri#other}
  */
  readonly other?: string;
  /**
  * Wais scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#wais ManagementResourceUri#wais}
  */
  readonly wais?: boolean | cdktf.IResolvable;
}

export function managementResourceUriMatchWildcardsSchemesToTerraform(struct?: ManagementResourceUriMatchWildcardsSchemesOutputReference | ManagementResourceUriMatchWildcardsSchemes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp: cdktf.booleanToTerraform(struct!.ftp),
    gopher: cdktf.booleanToTerraform(struct!.gopher),
    http: cdktf.booleanToTerraform(struct!.http),
    mailto: cdktf.booleanToTerraform(struct!.mailto),
    news: cdktf.booleanToTerraform(struct!.news),
    other: cdktf.stringToTerraform(struct!.other),
    wais: cdktf.booleanToTerraform(struct!.wais),
  }
}


export function managementResourceUriMatchWildcardsSchemesToHclTerraform(struct?: ManagementResourceUriMatchWildcardsSchemesOutputReference | ManagementResourceUriMatchWildcardsSchemes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp: {
      value: cdktf.booleanToHclTerraform(struct!.ftp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gopher: {
      value: cdktf.booleanToHclTerraform(struct!.gopher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http: {
      value: cdktf.booleanToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mailto: {
      value: cdktf.booleanToHclTerraform(struct!.mailto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    news: {
      value: cdktf.booleanToHclTerraform(struct!.news),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wais: {
      value: cdktf.booleanToHclTerraform(struct!.wais),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceUriMatchWildcardsSchemesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceUriMatchWildcardsSchemes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftp = this._ftp;
    }
    if (this._gopher !== undefined) {
      hasAnyValues = true;
      internalValueResult.gopher = this._gopher;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._mailto !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailto = this._mailto;
    }
    if (this._news !== undefined) {
      hasAnyValues = true;
      internalValueResult.news = this._news;
    }
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._wais !== undefined) {
      hasAnyValues = true;
      internalValueResult.wais = this._wais;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceUriMatchWildcardsSchemes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ftp = undefined;
      this._gopher = undefined;
      this._http = undefined;
      this._mailto = undefined;
      this._news = undefined;
      this._other = undefined;
      this._wais = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ftp = value.ftp;
      this._gopher = value.gopher;
      this._http = value.http;
      this._mailto = value.mailto;
      this._news = value.news;
      this._other = value.other;
      this._wais = value.wais;
    }
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp?: boolean | cdktf.IResolvable; 
  public get ftp() {
    return this.getBooleanAttribute('ftp');
  }
  public set ftp(value: boolean | cdktf.IResolvable) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // gopher - computed: false, optional: true, required: false
  private _gopher?: boolean | cdktf.IResolvable; 
  public get gopher() {
    return this.getBooleanAttribute('gopher');
  }
  public set gopher(value: boolean | cdktf.IResolvable) {
    this._gopher = value;
  }
  public resetGopher() {
    this._gopher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopherInput() {
    return this._gopher;
  }

  // http - computed: false, optional: true, required: false
  private _http?: boolean | cdktf.IResolvable; 
  public get http() {
    return this.getBooleanAttribute('http');
  }
  public set http(value: boolean | cdktf.IResolvable) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // mailto - computed: false, optional: true, required: false
  private _mailto?: boolean | cdktf.IResolvable; 
  public get mailto() {
    return this.getBooleanAttribute('mailto');
  }
  public set mailto(value: boolean | cdktf.IResolvable) {
    this._mailto = value;
  }
  public resetMailto() {
    this._mailto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailtoInput() {
    return this._mailto;
  }

  // news - computed: false, optional: true, required: false
  private _news?: boolean | cdktf.IResolvable; 
  public get news() {
    return this.getBooleanAttribute('news');
  }
  public set news(value: boolean | cdktf.IResolvable) {
    this._news = value;
  }
  public resetNews() {
    this._news = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newsInput() {
    return this._news;
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // wais - computed: false, optional: true, required: false
  private _wais?: boolean | cdktf.IResolvable; 
  public get wais() {
    return this.getBooleanAttribute('wais');
  }
  public set wais(value: boolean | cdktf.IResolvable) {
    this._wais = value;
  }
  public resetWais() {
    this._wais = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waisInput() {
    return this._wais;
  }
}
export interface ManagementResourceUriMatchWildcards {
  /**
  * The functionality of the Host parameter depends on the DNS setup of the addressed server. For the host, only the IP address or the full DNS name should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#host ManagementResourceUri#host}
  */
  readonly host?: string;
  /**
  * Name matching is based on appending the file name in the request to the current working directory (unless the file name is already a full path name) and comparing the result to the path specified in the Resource definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#path ManagementResourceUri#path}
  */
  readonly path?: string;
  /**
  * The parameters that are sent to the URI when it is accessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#query ManagementResourceUri#query}
  */
  readonly query?: string;
  /**
  * methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#methods ManagementResourceUri#methods}
  */
  readonly methods?: ManagementResourceUriMatchWildcardsMethods;
  /**
  * schemes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#schemes ManagementResourceUri#schemes}
  */
  readonly schemes?: ManagementResourceUriMatchWildcardsSchemes;
}

export function managementResourceUriMatchWildcardsToTerraform(struct?: ManagementResourceUriMatchWildcardsOutputReference | ManagementResourceUriMatchWildcards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.stringToTerraform(struct!.query),
    methods: managementResourceUriMatchWildcardsMethodsToTerraform(struct!.methods),
    schemes: managementResourceUriMatchWildcardsSchemesToTerraform(struct!.schemes),
  }
}


export function managementResourceUriMatchWildcardsToHclTerraform(struct?: ManagementResourceUriMatchWildcardsOutputReference | ManagementResourceUriMatchWildcards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: managementResourceUriMatchWildcardsMethodsToHclTerraform(struct!.methods),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementResourceUriMatchWildcardsMethodsList",
    },
    schemes: {
      value: managementResourceUriMatchWildcardsSchemesToHclTerraform(struct!.schemes),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementResourceUriMatchWildcardsSchemesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceUriMatchWildcardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceUriMatchWildcards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._schemes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemes = this._schemes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceUriMatchWildcards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._query = undefined;
      this._methods.internalValue = undefined;
      this._schemes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._query = value.query;
      this._methods.internalValue = value.methods;
      this._schemes.internalValue = value.schemes;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new ManagementResourceUriMatchWildcardsMethodsOutputReference(this, "methods");
  public get methods() {
    return this._methods;
  }
  public putMethods(value: ManagementResourceUriMatchWildcardsMethods) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // schemes - computed: false, optional: true, required: false
  private _schemes = new ManagementResourceUriMatchWildcardsSchemesOutputReference(this, "schemes");
  public get schemes() {
    return this._schemes;
  }
  public putSchemes(value: ManagementResourceUriMatchWildcardsSchemes) {
    this._schemes.internalValue = value;
  }
  public resetSchemes() {
    this._schemes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemesInput() {
    return this._schemes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri checkpoint_management_resource_uri}
*/
export class ManagementResourceUri extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_uri";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementResourceUri resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementResourceUri to import
  * @param importFromId The id of the existing ManagementResourceUri that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementResourceUri to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_uri", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_uri checkpoint_management_resource_uri} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementResourceUriConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementResourceUriConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_uri',
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
    this._connectionMethods = config.connectionMethods;
    this._exceptionTrack = config.exceptionTrack;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._soap = config.soap;
    this._tags = config.tags;
    this._uriMatchSpecificationType = config.uriMatchSpecificationType;
    this._useThisResourceTo = config.useThisResourceTo;
    this._action.internalValue = config.action;
    this._cvp.internalValue = config.cvp;
    this._matchUfp.internalValue = config.matchUfp;
    this._matchWildcards.internalValue = config.matchWildcards;
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

  // connection_methods - computed: false, optional: true, required: false
  private _connectionMethods?: { [key: string]: string }; 
  public get connectionMethods() {
    return this.getStringMapAttribute('connection_methods');
  }
  public set connectionMethods(value: { [key: string]: string }) {
    this._connectionMethods = value;
  }
  public resetConnectionMethods() {
    this._connectionMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMethodsInput() {
    return this._connectionMethods;
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

  // soap - computed: false, optional: true, required: false
  private _soap?: { [key: string]: string }; 
  public get soap() {
    return this.getStringMapAttribute('soap');
  }
  public set soap(value: { [key: string]: string }) {
    this._soap = value;
  }
  public resetSoap() {
    this._soap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapInput() {
    return this._soap;
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

  // uri_match_specification_type - computed: false, optional: true, required: false
  private _uriMatchSpecificationType?: string; 
  public get uriMatchSpecificationType() {
    return this.getStringAttribute('uri_match_specification_type');
  }
  public set uriMatchSpecificationType(value: string) {
    this._uriMatchSpecificationType = value;
  }
  public resetUriMatchSpecificationType() {
    this._uriMatchSpecificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchSpecificationTypeInput() {
    return this._uriMatchSpecificationType;
  }

  // use_this_resource_to - computed: false, optional: true, required: false
  private _useThisResourceTo?: string; 
  public get useThisResourceTo() {
    return this.getStringAttribute('use_this_resource_to');
  }
  public set useThisResourceTo(value: string) {
    this._useThisResourceTo = value;
  }
  public resetUseThisResourceTo() {
    this._useThisResourceTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useThisResourceToInput() {
    return this._useThisResourceTo;
  }

  // action - computed: false, optional: true, required: false
  private _action = new ManagementResourceUriActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ManagementResourceUriAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // cvp - computed: false, optional: true, required: false
  private _cvp = new ManagementResourceUriCvpOutputReference(this, "cvp");
  public get cvp() {
    return this._cvp;
  }
  public putCvp(value: ManagementResourceUriCvp) {
    this._cvp.internalValue = value;
  }
  public resetCvp() {
    this._cvp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvpInput() {
    return this._cvp.internalValue;
  }

  // match_ufp - computed: false, optional: true, required: false
  private _matchUfp = new ManagementResourceUriMatchUfpOutputReference(this, "match_ufp");
  public get matchUfp() {
    return this._matchUfp;
  }
  public putMatchUfp(value: ManagementResourceUriMatchUfp) {
    this._matchUfp.internalValue = value;
  }
  public resetMatchUfp() {
    this._matchUfp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchUfpInput() {
    return this._matchUfp.internalValue;
  }

  // match_wildcards - computed: false, optional: true, required: false
  private _matchWildcards = new ManagementResourceUriMatchWildcardsOutputReference(this, "match_wildcards");
  public get matchWildcards() {
    return this._matchWildcards;
  }
  public putMatchWildcards(value: ManagementResourceUriMatchWildcards) {
    this._matchWildcards.internalValue = value;
  }
  public resetMatchWildcards() {
    this._matchWildcards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchWildcardsInput() {
    return this._matchWildcards.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      connection_methods: cdktf.hashMapper(cdktf.stringToTerraform)(this._connectionMethods),
      exception_track: cdktf.stringToTerraform(this._exceptionTrack),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      soap: cdktf.hashMapper(cdktf.stringToTerraform)(this._soap),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      uri_match_specification_type: cdktf.stringToTerraform(this._uriMatchSpecificationType),
      use_this_resource_to: cdktf.stringToTerraform(this._useThisResourceTo),
      action: managementResourceUriActionToTerraform(this._action.internalValue),
      cvp: managementResourceUriCvpToTerraform(this._cvp.internalValue),
      match_ufp: managementResourceUriMatchUfpToTerraform(this._matchUfp.internalValue),
      match_wildcards: managementResourceUriMatchWildcardsToTerraform(this._matchWildcards.internalValue),
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
      connection_methods: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._connectionMethods),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      soap: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._soap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      uri_match_specification_type: {
        value: cdktf.stringToHclTerraform(this._uriMatchSpecificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_this_resource_to: {
        value: cdktf.stringToHclTerraform(this._useThisResourceTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: managementResourceUriActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceUriActionList",
      },
      cvp: {
        value: managementResourceUriCvpToHclTerraform(this._cvp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceUriCvpList",
      },
      match_ufp: {
        value: managementResourceUriMatchUfpToHclTerraform(this._matchUfp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceUriMatchUfpList",
      },
      match_wildcards: {
        value: managementResourceUriMatchWildcardsToHclTerraform(this._matchWildcards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceUriMatchWildcardsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
