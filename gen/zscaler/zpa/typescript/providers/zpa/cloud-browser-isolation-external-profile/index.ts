// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBrowserIsolationExternalProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#banner_id CloudBrowserIsolationExternalProfile#banner_id}
  */
  readonly bannerId: string;
  /**
  * This field defines the list of certificate IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#certificate_ids CloudBrowserIsolationExternalProfile#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#description CloudBrowserIsolationExternalProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#name CloudBrowserIsolationExternalProfile#name}
  */
  readonly name: string;
  /**
  * This field defines the list of region IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#region_ids CloudBrowserIsolationExternalProfile#region_ids}
  */
  readonly regionIds?: string[];
  /**
  * debug_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#debug_mode CloudBrowserIsolationExternalProfile#debug_mode}
  */
  readonly debugMode?: CloudBrowserIsolationExternalProfileDebugMode;
  /**
  * security_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#security_controls CloudBrowserIsolationExternalProfile#security_controls}
  */
  readonly securityControls?: CloudBrowserIsolationExternalProfileSecurityControls;
  /**
  * user_experience block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#user_experience CloudBrowserIsolationExternalProfile#user_experience}
  */
  readonly userExperience?: CloudBrowserIsolationExternalProfileUserExperience;
}
export interface CloudBrowserIsolationExternalProfileDebugMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#allowed CloudBrowserIsolationExternalProfile#allowed}
  */
  readonly allowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#file_password CloudBrowserIsolationExternalProfile#file_password}
  */
  readonly filePassword?: string;
}

export function cloudBrowserIsolationExternalProfileDebugModeToTerraform(struct?: CloudBrowserIsolationExternalProfileDebugModeOutputReference | CloudBrowserIsolationExternalProfileDebugMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    file_password: cdktf.stringToTerraform(struct!.filePassword),
  }
}


export function cloudBrowserIsolationExternalProfileDebugModeToHclTerraform(struct?: CloudBrowserIsolationExternalProfileDebugModeOutputReference | CloudBrowserIsolationExternalProfileDebugMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_password: {
      value: cdktf.stringToHclTerraform(struct!.filePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBrowserIsolationExternalProfileDebugModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBrowserIsolationExternalProfileDebugMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._filePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePassword = this._filePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBrowserIsolationExternalProfileDebugMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowed = undefined;
      this._filePassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowed = value.allowed;
      this._filePassword = value.filePassword;
    }
  }

  // allowed - computed: true, optional: true, required: false
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // file_password - computed: false, optional: true, required: false
  private _filePassword?: string; 
  public get filePassword() {
    return this.getStringAttribute('file_password');
  }
  public set filePassword(value: string) {
    this._filePassword = value;
  }
  public resetFilePassword() {
    this._filePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePasswordInput() {
    return this._filePassword;
  }
}
export interface CloudBrowserIsolationExternalProfileSecurityControlsDeepLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#applications CloudBrowserIsolationExternalProfile#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#enabled CloudBrowserIsolationExternalProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cloudBrowserIsolationExternalProfileSecurityControlsDeepLinkToTerraform(struct?: CloudBrowserIsolationExternalProfileSecurityControlsDeepLinkOutputReference | CloudBrowserIsolationExternalProfileSecurityControlsDeepLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudBrowserIsolationExternalProfileSecurityControlsDeepLinkToHclTerraform(struct?: CloudBrowserIsolationExternalProfileSecurityControlsDeepLinkOutputReference | CloudBrowserIsolationExternalProfileSecurityControlsDeepLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBrowserIsolationExternalProfileSecurityControlsDeepLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBrowserIsolationExternalProfileSecurityControlsDeepLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBrowserIsolationExternalProfileSecurityControlsDeepLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applications = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applications = value.applications;
      this._enabled = value.enabled;
    }
  }

  // applications - computed: true, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
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
}
export interface CloudBrowserIsolationExternalProfileSecurityControlsWatermark {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#enabled CloudBrowserIsolationExternalProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#message CloudBrowserIsolationExternalProfile#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#show_message CloudBrowserIsolationExternalProfile#show_message}
  */
  readonly showMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#show_timestamp CloudBrowserIsolationExternalProfile#show_timestamp}
  */
  readonly showTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#show_user_id CloudBrowserIsolationExternalProfile#show_user_id}
  */
  readonly showUserId?: boolean | cdktf.IResolvable;
}

export function cloudBrowserIsolationExternalProfileSecurityControlsWatermarkToTerraform(struct?: CloudBrowserIsolationExternalProfileSecurityControlsWatermarkOutputReference | CloudBrowserIsolationExternalProfileSecurityControlsWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    message: cdktf.stringToTerraform(struct!.message),
    show_message: cdktf.booleanToTerraform(struct!.showMessage),
    show_timestamp: cdktf.booleanToTerraform(struct!.showTimestamp),
    show_user_id: cdktf.booleanToTerraform(struct!.showUserId),
  }
}


export function cloudBrowserIsolationExternalProfileSecurityControlsWatermarkToHclTerraform(struct?: CloudBrowserIsolationExternalProfileSecurityControlsWatermarkOutputReference | CloudBrowserIsolationExternalProfileSecurityControlsWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_message: {
      value: cdktf.booleanToHclTerraform(struct!.showMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.showTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.showUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBrowserIsolationExternalProfileSecurityControlsWatermarkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBrowserIsolationExternalProfileSecurityControlsWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._showMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMessage = this._showMessage;
    }
    if (this._showTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTimestamp = this._showTimestamp;
    }
    if (this._showUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUserId = this._showUserId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBrowserIsolationExternalProfileSecurityControlsWatermark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._message = undefined;
      this._showMessage = undefined;
      this._showTimestamp = undefined;
      this._showUserId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._message = value.message;
      this._showMessage = value.showMessage;
      this._showTimestamp = value.showTimestamp;
      this._showUserId = value.showUserId;
    }
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

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // show_message - computed: true, optional: true, required: false
  private _showMessage?: boolean | cdktf.IResolvable; 
  public get showMessage() {
    return this.getBooleanAttribute('show_message');
  }
  public set showMessage(value: boolean | cdktf.IResolvable) {
    this._showMessage = value;
  }
  public resetShowMessage() {
    this._showMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMessageInput() {
    return this._showMessage;
  }

  // show_timestamp - computed: true, optional: true, required: false
  private _showTimestamp?: boolean | cdktf.IResolvable; 
  public get showTimestamp() {
    return this.getBooleanAttribute('show_timestamp');
  }
  public set showTimestamp(value: boolean | cdktf.IResolvable) {
    this._showTimestamp = value;
  }
  public resetShowTimestamp() {
    this._showTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTimestampInput() {
    return this._showTimestamp;
  }

  // show_user_id - computed: true, optional: true, required: false
  private _showUserId?: boolean | cdktf.IResolvable; 
  public get showUserId() {
    return this.getBooleanAttribute('show_user_id');
  }
  public set showUserId(value: boolean | cdktf.IResolvable) {
    this._showUserId = value;
  }
  public resetShowUserId() {
    this._showUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUserIdInput() {
    return this._showUserId;
  }
}
export interface CloudBrowserIsolationExternalProfileSecurityControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#allow_printing CloudBrowserIsolationExternalProfile#allow_printing}
  */
  readonly allowPrinting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#copy_paste CloudBrowserIsolationExternalProfile#copy_paste}
  */
  readonly copyPaste?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#document_viewer CloudBrowserIsolationExternalProfile#document_viewer}
  */
  readonly documentViewer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#flattened_pdf CloudBrowserIsolationExternalProfile#flattened_pdf}
  */
  readonly flattenedPdf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#local_render CloudBrowserIsolationExternalProfile#local_render}
  */
  readonly localRender?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#restrict_keystrokes CloudBrowserIsolationExternalProfile#restrict_keystrokes}
  */
  readonly restrictKeystrokes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#upload_download CloudBrowserIsolationExternalProfile#upload_download}
  */
  readonly uploadDownload?: string;
  /**
  * deep_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#deep_link CloudBrowserIsolationExternalProfile#deep_link}
  */
  readonly deepLink?: CloudBrowserIsolationExternalProfileSecurityControlsDeepLink;
  /**
  * watermark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#watermark CloudBrowserIsolationExternalProfile#watermark}
  */
  readonly watermark?: CloudBrowserIsolationExternalProfileSecurityControlsWatermark;
}

export function cloudBrowserIsolationExternalProfileSecurityControlsToTerraform(struct?: CloudBrowserIsolationExternalProfileSecurityControlsOutputReference | CloudBrowserIsolationExternalProfileSecurityControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_printing: cdktf.booleanToTerraform(struct!.allowPrinting),
    copy_paste: cdktf.stringToTerraform(struct!.copyPaste),
    document_viewer: cdktf.booleanToTerraform(struct!.documentViewer),
    flattened_pdf: cdktf.booleanToTerraform(struct!.flattenedPdf),
    local_render: cdktf.booleanToTerraform(struct!.localRender),
    restrict_keystrokes: cdktf.booleanToTerraform(struct!.restrictKeystrokes),
    upload_download: cdktf.stringToTerraform(struct!.uploadDownload),
    deep_link: cloudBrowserIsolationExternalProfileSecurityControlsDeepLinkToTerraform(struct!.deepLink),
    watermark: cloudBrowserIsolationExternalProfileSecurityControlsWatermarkToTerraform(struct!.watermark),
  }
}


export function cloudBrowserIsolationExternalProfileSecurityControlsToHclTerraform(struct?: CloudBrowserIsolationExternalProfileSecurityControlsOutputReference | CloudBrowserIsolationExternalProfileSecurityControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_printing: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrinting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    copy_paste: {
      value: cdktf.stringToHclTerraform(struct!.copyPaste),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_viewer: {
      value: cdktf.booleanToHclTerraform(struct!.documentViewer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flattened_pdf: {
      value: cdktf.booleanToHclTerraform(struct!.flattenedPdf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_render: {
      value: cdktf.booleanToHclTerraform(struct!.localRender),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_keystrokes: {
      value: cdktf.booleanToHclTerraform(struct!.restrictKeystrokes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upload_download: {
      value: cdktf.stringToHclTerraform(struct!.uploadDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deep_link: {
      value: cloudBrowserIsolationExternalProfileSecurityControlsDeepLinkToHclTerraform(struct!.deepLink),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBrowserIsolationExternalProfileSecurityControlsDeepLinkList",
    },
    watermark: {
      value: cloudBrowserIsolationExternalProfileSecurityControlsWatermarkToHclTerraform(struct!.watermark),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBrowserIsolationExternalProfileSecurityControlsWatermarkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBrowserIsolationExternalProfileSecurityControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBrowserIsolationExternalProfileSecurityControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrinting !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrinting = this._allowPrinting;
    }
    if (this._copyPaste !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyPaste = this._copyPaste;
    }
    if (this._documentViewer !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentViewer = this._documentViewer;
    }
    if (this._flattenedPdf !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenedPdf = this._flattenedPdf;
    }
    if (this._localRender !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRender = this._localRender;
    }
    if (this._restrictKeystrokes !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictKeystrokes = this._restrictKeystrokes;
    }
    if (this._uploadDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadDownload = this._uploadDownload;
    }
    if (this._deepLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deepLink = this._deepLink?.internalValue;
    }
    if (this._watermark?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermark = this._watermark?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBrowserIsolationExternalProfileSecurityControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrinting = undefined;
      this._copyPaste = undefined;
      this._documentViewer = undefined;
      this._flattenedPdf = undefined;
      this._localRender = undefined;
      this._restrictKeystrokes = undefined;
      this._uploadDownload = undefined;
      this._deepLink.internalValue = undefined;
      this._watermark.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrinting = value.allowPrinting;
      this._copyPaste = value.copyPaste;
      this._documentViewer = value.documentViewer;
      this._flattenedPdf = value.flattenedPdf;
      this._localRender = value.localRender;
      this._restrictKeystrokes = value.restrictKeystrokes;
      this._uploadDownload = value.uploadDownload;
      this._deepLink.internalValue = value.deepLink;
      this._watermark.internalValue = value.watermark;
    }
  }

  // allow_printing - computed: true, optional: true, required: false
  private _allowPrinting?: boolean | cdktf.IResolvable; 
  public get allowPrinting() {
    return this.getBooleanAttribute('allow_printing');
  }
  public set allowPrinting(value: boolean | cdktf.IResolvable) {
    this._allowPrinting = value;
  }
  public resetAllowPrinting() {
    this._allowPrinting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrintingInput() {
    return this._allowPrinting;
  }

  // copy_paste - computed: false, optional: true, required: false
  private _copyPaste?: string; 
  public get copyPaste() {
    return this.getStringAttribute('copy_paste');
  }
  public set copyPaste(value: string) {
    this._copyPaste = value;
  }
  public resetCopyPaste() {
    this._copyPaste = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyPasteInput() {
    return this._copyPaste;
  }

  // document_viewer - computed: true, optional: true, required: false
  private _documentViewer?: boolean | cdktf.IResolvable; 
  public get documentViewer() {
    return this.getBooleanAttribute('document_viewer');
  }
  public set documentViewer(value: boolean | cdktf.IResolvable) {
    this._documentViewer = value;
  }
  public resetDocumentViewer() {
    this._documentViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentViewerInput() {
    return this._documentViewer;
  }

  // flattened_pdf - computed: true, optional: true, required: false
  private _flattenedPdf?: boolean | cdktf.IResolvable; 
  public get flattenedPdf() {
    return this.getBooleanAttribute('flattened_pdf');
  }
  public set flattenedPdf(value: boolean | cdktf.IResolvable) {
    this._flattenedPdf = value;
  }
  public resetFlattenedPdf() {
    this._flattenedPdf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenedPdfInput() {
    return this._flattenedPdf;
  }

  // local_render - computed: true, optional: true, required: false
  private _localRender?: boolean | cdktf.IResolvable; 
  public get localRender() {
    return this.getBooleanAttribute('local_render');
  }
  public set localRender(value: boolean | cdktf.IResolvable) {
    this._localRender = value;
  }
  public resetLocalRender() {
    this._localRender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRenderInput() {
    return this._localRender;
  }

  // restrict_keystrokes - computed: true, optional: true, required: false
  private _restrictKeystrokes?: boolean | cdktf.IResolvable; 
  public get restrictKeystrokes() {
    return this.getBooleanAttribute('restrict_keystrokes');
  }
  public set restrictKeystrokes(value: boolean | cdktf.IResolvable) {
    this._restrictKeystrokes = value;
  }
  public resetRestrictKeystrokes() {
    this._restrictKeystrokes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictKeystrokesInput() {
    return this._restrictKeystrokes;
  }

  // upload_download - computed: false, optional: true, required: false
  private _uploadDownload?: string; 
  public get uploadDownload() {
    return this.getStringAttribute('upload_download');
  }
  public set uploadDownload(value: string) {
    this._uploadDownload = value;
  }
  public resetUploadDownload() {
    this._uploadDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDownloadInput() {
    return this._uploadDownload;
  }

  // deep_link - computed: false, optional: true, required: false
  private _deepLink = new CloudBrowserIsolationExternalProfileSecurityControlsDeepLinkOutputReference(this, "deep_link");
  public get deepLink() {
    return this._deepLink;
  }
  public putDeepLink(value: CloudBrowserIsolationExternalProfileSecurityControlsDeepLink) {
    this._deepLink.internalValue = value;
  }
  public resetDeepLink() {
    this._deepLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepLinkInput() {
    return this._deepLink.internalValue;
  }

  // watermark - computed: false, optional: true, required: false
  private _watermark = new CloudBrowserIsolationExternalProfileSecurityControlsWatermarkOutputReference(this, "watermark");
  public get watermark() {
    return this._watermark;
  }
  public putWatermark(value: CloudBrowserIsolationExternalProfileSecurityControlsWatermark) {
    this._watermark.internalValue = value;
  }
  public resetWatermark() {
    this._watermark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkInput() {
    return this._watermark.internalValue;
  }
}
export interface CloudBrowserIsolationExternalProfileUserExperienceForwardToZia {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#cloud_name CloudBrowserIsolationExternalProfile#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#enabled CloudBrowserIsolationExternalProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#organization_id CloudBrowserIsolationExternalProfile#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#pac_file_url CloudBrowserIsolationExternalProfile#pac_file_url}
  */
  readonly pacFileUrl?: string;
}

export function cloudBrowserIsolationExternalProfileUserExperienceForwardToZiaToTerraform(struct?: CloudBrowserIsolationExternalProfileUserExperienceForwardToZiaOutputReference | CloudBrowserIsolationExternalProfileUserExperienceForwardToZia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    pac_file_url: cdktf.stringToTerraform(struct!.pacFileUrl),
  }
}


export function cloudBrowserIsolationExternalProfileUserExperienceForwardToZiaToHclTerraform(struct?: CloudBrowserIsolationExternalProfileUserExperienceForwardToZiaOutputReference | CloudBrowserIsolationExternalProfileUserExperienceForwardToZia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pac_file_url: {
      value: cdktf.stringToHclTerraform(struct!.pacFileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBrowserIsolationExternalProfileUserExperienceForwardToZiaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBrowserIsolationExternalProfileUserExperienceForwardToZia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudName = this._cloudName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._pacFileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacFileUrl = this._pacFileUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBrowserIsolationExternalProfileUserExperienceForwardToZia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudName = undefined;
      this._enabled = undefined;
      this._organizationId = undefined;
      this._pacFileUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudName = value.cloudName;
      this._enabled = value.enabled;
      this._organizationId = value.organizationId;
      this._pacFileUrl = value.pacFileUrl;
    }
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // enabled - computed: false, optional: true, required: false
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

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // pac_file_url - computed: false, optional: true, required: false
  private _pacFileUrl?: string; 
  public get pacFileUrl() {
    return this.getStringAttribute('pac_file_url');
  }
  public set pacFileUrl(value: string) {
    this._pacFileUrl = value;
  }
  public resetPacFileUrl() {
    this._pacFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileUrlInput() {
    return this._pacFileUrl;
  }
}
export interface CloudBrowserIsolationExternalProfileUserExperience {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#browser_in_browser CloudBrowserIsolationExternalProfile#browser_in_browser}
  */
  readonly browserInBrowser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#persist_isolation_bar CloudBrowserIsolationExternalProfile#persist_isolation_bar}
  */
  readonly persistIsolationBar?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#session_persistence CloudBrowserIsolationExternalProfile#session_persistence}
  */
  readonly sessionPersistence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#translate CloudBrowserIsolationExternalProfile#translate}
  */
  readonly translate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#zgpu CloudBrowserIsolationExternalProfile#zgpu}
  */
  readonly zgpu?: boolean | cdktf.IResolvable;
  /**
  * forward_to_zia block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#forward_to_zia CloudBrowserIsolationExternalProfile#forward_to_zia}
  */
  readonly forwardToZia?: CloudBrowserIsolationExternalProfileUserExperienceForwardToZia;
}

export function cloudBrowserIsolationExternalProfileUserExperienceToTerraform(struct?: CloudBrowserIsolationExternalProfileUserExperienceOutputReference | CloudBrowserIsolationExternalProfileUserExperience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_in_browser: cdktf.booleanToTerraform(struct!.browserInBrowser),
    persist_isolation_bar: cdktf.booleanToTerraform(struct!.persistIsolationBar),
    session_persistence: cdktf.booleanToTerraform(struct!.sessionPersistence),
    translate: cdktf.booleanToTerraform(struct!.translate),
    zgpu: cdktf.booleanToTerraform(struct!.zgpu),
    forward_to_zia: cloudBrowserIsolationExternalProfileUserExperienceForwardToZiaToTerraform(struct!.forwardToZia),
  }
}


export function cloudBrowserIsolationExternalProfileUserExperienceToHclTerraform(struct?: CloudBrowserIsolationExternalProfileUserExperienceOutputReference | CloudBrowserIsolationExternalProfileUserExperience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser_in_browser: {
      value: cdktf.booleanToHclTerraform(struct!.browserInBrowser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist_isolation_bar: {
      value: cdktf.booleanToHclTerraform(struct!.persistIsolationBar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_persistence: {
      value: cdktf.booleanToHclTerraform(struct!.sessionPersistence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    translate: {
      value: cdktf.booleanToHclTerraform(struct!.translate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zgpu: {
      value: cdktf.booleanToHclTerraform(struct!.zgpu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_to_zia: {
      value: cloudBrowserIsolationExternalProfileUserExperienceForwardToZiaToHclTerraform(struct!.forwardToZia),
      isBlock: true,
      type: "list",
      storageClassType: "CloudBrowserIsolationExternalProfileUserExperienceForwardToZiaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBrowserIsolationExternalProfileUserExperienceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBrowserIsolationExternalProfileUserExperience | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserInBrowser !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserInBrowser = this._browserInBrowser;
    }
    if (this._persistIsolationBar !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistIsolationBar = this._persistIsolationBar;
    }
    if (this._sessionPersistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistence = this._sessionPersistence;
    }
    if (this._translate !== undefined) {
      hasAnyValues = true;
      internalValueResult.translate = this._translate;
    }
    if (this._zgpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.zgpu = this._zgpu;
    }
    if (this._forwardToZia?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardToZia = this._forwardToZia?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBrowserIsolationExternalProfileUserExperience | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browserInBrowser = undefined;
      this._persistIsolationBar = undefined;
      this._sessionPersistence = undefined;
      this._translate = undefined;
      this._zgpu = undefined;
      this._forwardToZia.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browserInBrowser = value.browserInBrowser;
      this._persistIsolationBar = value.persistIsolationBar;
      this._sessionPersistence = value.sessionPersistence;
      this._translate = value.translate;
      this._zgpu = value.zgpu;
      this._forwardToZia.internalValue = value.forwardToZia;
    }
  }

  // browser_in_browser - computed: true, optional: true, required: false
  private _browserInBrowser?: boolean | cdktf.IResolvable; 
  public get browserInBrowser() {
    return this.getBooleanAttribute('browser_in_browser');
  }
  public set browserInBrowser(value: boolean | cdktf.IResolvable) {
    this._browserInBrowser = value;
  }
  public resetBrowserInBrowser() {
    this._browserInBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserInBrowserInput() {
    return this._browserInBrowser;
  }

  // persist_isolation_bar - computed: true, optional: true, required: false
  private _persistIsolationBar?: boolean | cdktf.IResolvable; 
  public get persistIsolationBar() {
    return this.getBooleanAttribute('persist_isolation_bar');
  }
  public set persistIsolationBar(value: boolean | cdktf.IResolvable) {
    this._persistIsolationBar = value;
  }
  public resetPersistIsolationBar() {
    this._persistIsolationBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistIsolationBarInput() {
    return this._persistIsolationBar;
  }

  // session_persistence - computed: true, optional: true, required: false
  private _sessionPersistence?: boolean | cdktf.IResolvable; 
  public get sessionPersistence() {
    return this.getBooleanAttribute('session_persistence');
  }
  public set sessionPersistence(value: boolean | cdktf.IResolvable) {
    this._sessionPersistence = value;
  }
  public resetSessionPersistence() {
    this._sessionPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceInput() {
    return this._sessionPersistence;
  }

  // translate - computed: true, optional: true, required: false
  private _translate?: boolean | cdktf.IResolvable; 
  public get translate() {
    return this.getBooleanAttribute('translate');
  }
  public set translate(value: boolean | cdktf.IResolvable) {
    this._translate = value;
  }
  public resetTranslate() {
    this._translate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateInput() {
    return this._translate;
  }

  // zgpu - computed: true, optional: true, required: false
  private _zgpu?: boolean | cdktf.IResolvable; 
  public get zgpu() {
    return this.getBooleanAttribute('zgpu');
  }
  public set zgpu(value: boolean | cdktf.IResolvable) {
    this._zgpu = value;
  }
  public resetZgpu() {
    this._zgpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zgpuInput() {
    return this._zgpu;
  }

  // forward_to_zia - computed: false, optional: true, required: false
  private _forwardToZia = new CloudBrowserIsolationExternalProfileUserExperienceForwardToZiaOutputReference(this, "forward_to_zia");
  public get forwardToZia() {
    return this._forwardToZia;
  }
  public putForwardToZia(value: CloudBrowserIsolationExternalProfileUserExperienceForwardToZia) {
    this._forwardToZia.internalValue = value;
  }
  public resetForwardToZia() {
    this._forwardToZia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToZiaInput() {
    return this._forwardToZia.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile zpa_cloud_browser_isolation_external_profile}
*/
export class CloudBrowserIsolationExternalProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_cloud_browser_isolation_external_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBrowserIsolationExternalProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBrowserIsolationExternalProfile to import
  * @param importFromId The id of the existing CloudBrowserIsolationExternalProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBrowserIsolationExternalProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_cloud_browser_isolation_external_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/cloud_browser_isolation_external_profile zpa_cloud_browser_isolation_external_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBrowserIsolationExternalProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CloudBrowserIsolationExternalProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_cloud_browser_isolation_external_profile',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bannerId = config.bannerId;
    this._certificateIds = config.certificateIds;
    this._description = config.description;
    this._name = config.name;
    this._regionIds = config.regionIds;
    this._debugMode.internalValue = config.debugMode;
    this._securityControls.internalValue = config.securityControls;
    this._userExperience.internalValue = config.userExperience;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // banner_id - computed: false, optional: false, required: true
  private _bannerId?: string; 
  public get bannerId() {
    return this.getStringAttribute('banner_id');
  }
  public set bannerId(value: string) {
    this._bannerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerIdInput() {
    return this._bannerId;
  }

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // region_ids - computed: false, optional: true, required: false
  private _regionIds?: string[]; 
  public get regionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('region_ids'));
  }
  public set regionIds(value: string[]) {
    this._regionIds = value;
  }
  public resetRegionIds() {
    this._regionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdsInput() {
    return this._regionIds;
  }

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode = new CloudBrowserIsolationExternalProfileDebugModeOutputReference(this, "debug_mode");
  public get debugMode() {
    return this._debugMode;
  }
  public putDebugMode(value: CloudBrowserIsolationExternalProfileDebugMode) {
    this._debugMode.internalValue = value;
  }
  public resetDebugMode() {
    this._debugMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode.internalValue;
  }

  // security_controls - computed: false, optional: true, required: false
  private _securityControls = new CloudBrowserIsolationExternalProfileSecurityControlsOutputReference(this, "security_controls");
  public get securityControls() {
    return this._securityControls;
  }
  public putSecurityControls(value: CloudBrowserIsolationExternalProfileSecurityControls) {
    this._securityControls.internalValue = value;
  }
  public resetSecurityControls() {
    this._securityControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlsInput() {
    return this._securityControls.internalValue;
  }

  // user_experience - computed: false, optional: true, required: false
  private _userExperience = new CloudBrowserIsolationExternalProfileUserExperienceOutputReference(this, "user_experience");
  public get userExperience() {
    return this._userExperience;
  }
  public putUserExperience(value: CloudBrowserIsolationExternalProfileUserExperience) {
    this._userExperience.internalValue = value;
  }
  public resetUserExperience() {
    this._userExperience.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userExperienceInput() {
    return this._userExperience.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      banner_id: cdktf.stringToTerraform(this._bannerId),
      certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateIds),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      region_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionIds),
      debug_mode: cloudBrowserIsolationExternalProfileDebugModeToTerraform(this._debugMode.internalValue),
      security_controls: cloudBrowserIsolationExternalProfileSecurityControlsToTerraform(this._securityControls.internalValue),
      user_experience: cloudBrowserIsolationExternalProfileUserExperienceToTerraform(this._userExperience.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      banner_id: {
        value: cdktf.stringToHclTerraform(this._bannerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      region_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      debug_mode: {
        value: cloudBrowserIsolationExternalProfileDebugModeToHclTerraform(this._debugMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBrowserIsolationExternalProfileDebugModeList",
      },
      security_controls: {
        value: cloudBrowserIsolationExternalProfileSecurityControlsToHclTerraform(this._securityControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBrowserIsolationExternalProfileSecurityControlsList",
      },
      user_experience: {
        value: cloudBrowserIsolationExternalProfileUserExperienceToHclTerraform(this._userExperience.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBrowserIsolationExternalProfileUserExperienceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
