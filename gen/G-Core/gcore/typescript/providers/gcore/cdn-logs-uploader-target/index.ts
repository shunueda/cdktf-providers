// https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnLogsUploaderTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the target. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#description CdnLogsUploaderTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#id CdnLogsUploaderTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the target. Default value is "Target".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#name CdnLogsUploaderTarget#name}
  */
  readonly name?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#config CdnLogsUploaderTarget#config}
  */
  readonly config: CdnLogsUploaderTargetConfigA;
}
export interface CdnLogsUploaderTargetConfigFtp {
  /**
  * Directory on the FTP server where logs will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#directory CdnLogsUploaderTarget#directory}
  */
  readonly directory?: string;
  /**
  * Hostname or IP address of the FTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#hostname CdnLogsUploaderTarget#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the FTP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#password CdnLogsUploaderTarget#password}
  */
  readonly password: string;
  /**
  * Timeout for the FTP connection in seconds. Default value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#timeout_seconds CdnLogsUploaderTarget#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Username for the FTP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#user CdnLogsUploaderTarget#user}
  */
  readonly user: string;
}

export function cdnLogsUploaderTargetConfigFtpToTerraform(struct?: CdnLogsUploaderTargetConfigFtpOutputReference | CdnLogsUploaderTargetConfigFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function cdnLogsUploaderTargetConfigFtpToHclTerraform(struct?: CdnLogsUploaderTargetConfigFtpOutputReference | CdnLogsUploaderTargetConfigFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._timeoutSeconds = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._hostname = value.hostname;
      this._password = value.password;
      this._timeoutSeconds = value.timeoutSeconds;
      this._user = value.user;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface CdnLogsUploaderTargetConfigHttpAppendResponseActions {
  /**
  * Action to perform if the response matches the specified criteria. Supported values are 'drop', 'retry', and 'append'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#action CdnLogsUploaderTarget#action}
  */
  readonly action: string;
  /**
  * Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#description CdnLogsUploaderTarget#description}
  */
  readonly description?: string;
  /**
  * Payload to match in the response. If not specified, no payload will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#match_payload CdnLogsUploaderTarget#match_payload}
  */
  readonly matchPayload?: string;
  /**
  * HTTP status code to match. If not specified, no status code will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#match_status_code CdnLogsUploaderTarget#match_status_code}
  */
  readonly matchStatusCode?: number;
}

export function cdnLogsUploaderTargetConfigHttpAppendResponseActionsToTerraform(struct?: CdnLogsUploaderTargetConfigHttpAppendResponseActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match_payload: cdktf.stringToTerraform(struct!.matchPayload),
    match_status_code: cdktf.numberToTerraform(struct!.matchStatusCode),
  }
}


export function cdnLogsUploaderTargetConfigHttpAppendResponseActionsToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpAppendResponseActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_payload: {
      value: cdktf.stringToHclTerraform(struct!.matchPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_status_code: {
      value: cdktf.numberToHclTerraform(struct!.matchStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpAppendResponseActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLogsUploaderTargetConfigHttpAppendResponseActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPayload = this._matchPayload;
    }
    if (this._matchStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStatusCode = this._matchStatusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpAppendResponseActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._matchPayload = undefined;
      this._matchStatusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._matchPayload = value.matchPayload;
      this._matchStatusCode = value.matchStatusCode;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match_payload - computed: false, optional: true, required: false
  private _matchPayload?: string; 
  public get matchPayload() {
    return this.getStringAttribute('match_payload');
  }
  public set matchPayload(value: string) {
    this._matchPayload = value;
  }
  public resetMatchPayload() {
    this._matchPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPayloadInput() {
    return this._matchPayload;
  }

  // match_status_code - computed: false, optional: true, required: false
  private _matchStatusCode?: number; 
  public get matchStatusCode() {
    return this.getNumberAttribute('match_status_code');
  }
  public set matchStatusCode(value: number) {
    this._matchStatusCode = value;
  }
  public resetMatchStatusCode() {
    this._matchStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStatusCodeInput() {
    return this._matchStatusCode;
  }
}

export class CdnLogsUploaderTargetConfigHttpAppendResponseActionsList extends cdktf.ComplexList {
  public internalValue? : CdnLogsUploaderTargetConfigHttpAppendResponseActions[] | cdktf.IResolvable

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
  public get(index: number): CdnLogsUploaderTargetConfigHttpAppendResponseActionsOutputReference {
    return new CdnLogsUploaderTargetConfigHttpAppendResponseActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLogsUploaderTargetConfigHttpAppend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#headers CdnLogsUploaderTarget#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * HTTP method to use for the request. Supported values are 'POST' and 'PUT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#method CdnLogsUploaderTarget#method}
  */
  readonly method?: string;
  /**
  * Timeout for the HTTP request in seconds. Default value is 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#timeout_seconds CdnLogsUploaderTarget#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * URL to which logs should be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#url CdnLogsUploaderTarget#url}
  */
  readonly url: string;
  /**
  * Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#use_compression CdnLogsUploaderTarget#use_compression}
  */
  readonly useCompression?: boolean | cdktf.IResolvable;
  /**
  * response_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#response_actions CdnLogsUploaderTarget#response_actions}
  */
  readonly responseActions?: CdnLogsUploaderTargetConfigHttpAppendResponseActions[] | cdktf.IResolvable;
}

export function cdnLogsUploaderTargetConfigHttpAppendToTerraform(struct?: CdnLogsUploaderTargetConfigHttpAppendOutputReference | CdnLogsUploaderTargetConfigHttpAppend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    url: cdktf.stringToTerraform(struct!.url),
    use_compression: cdktf.booleanToTerraform(struct!.useCompression),
    response_actions: cdktf.listMapper(cdnLogsUploaderTargetConfigHttpAppendResponseActionsToTerraform, true)(struct!.responseActions),
  }
}


export function cdnLogsUploaderTargetConfigHttpAppendToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpAppendOutputReference | CdnLogsUploaderTargetConfigHttpAppend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_compression: {
      value: cdktf.booleanToHclTerraform(struct!.useCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_actions: {
      value: cdktf.listMapperHcl(cdnLogsUploaderTargetConfigHttpAppendResponseActionsToHclTerraform, true)(struct!.responseActions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpAppendResponseActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpAppendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigHttpAppend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCompression = this._useCompression;
    }
    if (this._responseActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseActions = this._responseActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpAppend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._method = undefined;
      this._timeoutSeconds = undefined;
      this._url = undefined;
      this._useCompression = undefined;
      this._responseActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._method = value.method;
      this._timeoutSeconds = value.timeoutSeconds;
      this._url = value.url;
      this._useCompression = value.useCompression;
      this._responseActions.internalValue = value.responseActions;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_compression - computed: false, optional: true, required: false
  private _useCompression?: boolean | cdktf.IResolvable; 
  public get useCompression() {
    return this.getBooleanAttribute('use_compression');
  }
  public set useCompression(value: boolean | cdktf.IResolvable) {
    this._useCompression = value;
  }
  public resetUseCompression() {
    this._useCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCompressionInput() {
    return this._useCompression;
  }

  // response_actions - computed: false, optional: true, required: false
  private _responseActions = new CdnLogsUploaderTargetConfigHttpAppendResponseActionsList(this, "response_actions", false);
  public get responseActions() {
    return this._responseActions;
  }
  public putResponseActions(value: CdnLogsUploaderTargetConfigHttpAppendResponseActions[] | cdktf.IResolvable) {
    this._responseActions.internalValue = value;
  }
  public resetResponseActions() {
    this._responseActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseActionsInput() {
    return this._responseActions.internalValue;
  }
}
export interface CdnLogsUploaderTargetConfigHttpAuthConfig {
  /**
  * Name of the header to which the token will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#header_name CdnLogsUploaderTarget#header_name}
  */
  readonly headerName: string;
  /**
  * Token to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#token CdnLogsUploaderTarget#token}
  */
  readonly token: string;
}

export function cdnLogsUploaderTargetConfigHttpAuthConfigToTerraform(struct?: CdnLogsUploaderTargetConfigHttpAuthConfigOutputReference | CdnLogsUploaderTargetConfigHttpAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function cdnLogsUploaderTargetConfigHttpAuthConfigToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpAuthConfigOutputReference | CdnLogsUploaderTargetConfigHttpAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigHttpAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
      this._token = value.token;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface CdnLogsUploaderTargetConfigHttpAuth {
  /**
  * Type of authentication. Supported values are 'token'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#type CdnLogsUploaderTarget#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#config CdnLogsUploaderTarget#config}
  */
  readonly config: CdnLogsUploaderTargetConfigHttpAuthConfig;
}

export function cdnLogsUploaderTargetConfigHttpAuthToTerraform(struct?: CdnLogsUploaderTargetConfigHttpAuthOutputReference | CdnLogsUploaderTargetConfigHttpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: cdnLogsUploaderTargetConfigHttpAuthConfigToTerraform(struct!.config),
  }
}


export function cdnLogsUploaderTargetConfigHttpAuthToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpAuthOutputReference | CdnLogsUploaderTargetConfigHttpAuth): any {
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
    config: {
      value: cdnLogsUploaderTargetConfigHttpAuthConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigHttpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
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

  // config - computed: false, optional: false, required: true
  private _config = new CdnLogsUploaderTargetConfigHttpAuthConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CdnLogsUploaderTargetConfigHttpAuthConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface CdnLogsUploaderTargetConfigHttpRetryResponseActions {
  /**
  * Action to perform if the response matches the specified criteria. Supported values are 'drop', 'retry', and 'append'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#action CdnLogsUploaderTarget#action}
  */
  readonly action: string;
  /**
  * Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#description CdnLogsUploaderTarget#description}
  */
  readonly description?: string;
  /**
  * Payload to match in the response. If not specified, no payload will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#match_payload CdnLogsUploaderTarget#match_payload}
  */
  readonly matchPayload?: string;
  /**
  * HTTP status code to match. If not specified, no status code will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#match_status_code CdnLogsUploaderTarget#match_status_code}
  */
  readonly matchStatusCode?: number;
}

export function cdnLogsUploaderTargetConfigHttpRetryResponseActionsToTerraform(struct?: CdnLogsUploaderTargetConfigHttpRetryResponseActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match_payload: cdktf.stringToTerraform(struct!.matchPayload),
    match_status_code: cdktf.numberToTerraform(struct!.matchStatusCode),
  }
}


export function cdnLogsUploaderTargetConfigHttpRetryResponseActionsToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpRetryResponseActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_payload: {
      value: cdktf.stringToHclTerraform(struct!.matchPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_status_code: {
      value: cdktf.numberToHclTerraform(struct!.matchStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpRetryResponseActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLogsUploaderTargetConfigHttpRetryResponseActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPayload = this._matchPayload;
    }
    if (this._matchStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStatusCode = this._matchStatusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpRetryResponseActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._matchPayload = undefined;
      this._matchStatusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._matchPayload = value.matchPayload;
      this._matchStatusCode = value.matchStatusCode;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match_payload - computed: false, optional: true, required: false
  private _matchPayload?: string; 
  public get matchPayload() {
    return this.getStringAttribute('match_payload');
  }
  public set matchPayload(value: string) {
    this._matchPayload = value;
  }
  public resetMatchPayload() {
    this._matchPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPayloadInput() {
    return this._matchPayload;
  }

  // match_status_code - computed: false, optional: true, required: false
  private _matchStatusCode?: number; 
  public get matchStatusCode() {
    return this.getNumberAttribute('match_status_code');
  }
  public set matchStatusCode(value: number) {
    this._matchStatusCode = value;
  }
  public resetMatchStatusCode() {
    this._matchStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStatusCodeInput() {
    return this._matchStatusCode;
  }
}

export class CdnLogsUploaderTargetConfigHttpRetryResponseActionsList extends cdktf.ComplexList {
  public internalValue? : CdnLogsUploaderTargetConfigHttpRetryResponseActions[] | cdktf.IResolvable

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
  public get(index: number): CdnLogsUploaderTargetConfigHttpRetryResponseActionsOutputReference {
    return new CdnLogsUploaderTargetConfigHttpRetryResponseActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLogsUploaderTargetConfigHttpRetry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#headers CdnLogsUploaderTarget#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * HTTP method to use for the request. Supported values are 'POST' and 'PUT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#method CdnLogsUploaderTarget#method}
  */
  readonly method?: string;
  /**
  * Timeout for the HTTP request in seconds. Default value is 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#timeout_seconds CdnLogsUploaderTarget#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * URL to which logs should be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#url CdnLogsUploaderTarget#url}
  */
  readonly url: string;
  /**
  * Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#use_compression CdnLogsUploaderTarget#use_compression}
  */
  readonly useCompression?: boolean | cdktf.IResolvable;
  /**
  * response_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#response_actions CdnLogsUploaderTarget#response_actions}
  */
  readonly responseActions?: CdnLogsUploaderTargetConfigHttpRetryResponseActions[] | cdktf.IResolvable;
}

export function cdnLogsUploaderTargetConfigHttpRetryToTerraform(struct?: CdnLogsUploaderTargetConfigHttpRetryOutputReference | CdnLogsUploaderTargetConfigHttpRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    url: cdktf.stringToTerraform(struct!.url),
    use_compression: cdktf.booleanToTerraform(struct!.useCompression),
    response_actions: cdktf.listMapper(cdnLogsUploaderTargetConfigHttpRetryResponseActionsToTerraform, true)(struct!.responseActions),
  }
}


export function cdnLogsUploaderTargetConfigHttpRetryToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpRetryOutputReference | CdnLogsUploaderTargetConfigHttpRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_compression: {
      value: cdktf.booleanToHclTerraform(struct!.useCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_actions: {
      value: cdktf.listMapperHcl(cdnLogsUploaderTargetConfigHttpRetryResponseActionsToHclTerraform, true)(struct!.responseActions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpRetryResponseActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigHttpRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCompression = this._useCompression;
    }
    if (this._responseActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseActions = this._responseActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._method = undefined;
      this._timeoutSeconds = undefined;
      this._url = undefined;
      this._useCompression = undefined;
      this._responseActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._method = value.method;
      this._timeoutSeconds = value.timeoutSeconds;
      this._url = value.url;
      this._useCompression = value.useCompression;
      this._responseActions.internalValue = value.responseActions;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_compression - computed: false, optional: true, required: false
  private _useCompression?: boolean | cdktf.IResolvable; 
  public get useCompression() {
    return this.getBooleanAttribute('use_compression');
  }
  public set useCompression(value: boolean | cdktf.IResolvable) {
    this._useCompression = value;
  }
  public resetUseCompression() {
    this._useCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCompressionInput() {
    return this._useCompression;
  }

  // response_actions - computed: false, optional: true, required: false
  private _responseActions = new CdnLogsUploaderTargetConfigHttpRetryResponseActionsList(this, "response_actions", false);
  public get responseActions() {
    return this._responseActions;
  }
  public putResponseActions(value: CdnLogsUploaderTargetConfigHttpRetryResponseActions[] | cdktf.IResolvable) {
    this._responseActions.internalValue = value;
  }
  public resetResponseActions() {
    this._responseActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseActionsInput() {
    return this._responseActions.internalValue;
  }
}
export interface CdnLogsUploaderTargetConfigHttpUploadResponseActions {
  /**
  * Action to perform if the response matches the specified criteria. Supported values are 'drop', 'retry', and 'append'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#action CdnLogsUploaderTarget#action}
  */
  readonly action: string;
  /**
  * Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#description CdnLogsUploaderTarget#description}
  */
  readonly description?: string;
  /**
  * Payload to match in the response. If not specified, no payload will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#match_payload CdnLogsUploaderTarget#match_payload}
  */
  readonly matchPayload?: string;
  /**
  * HTTP status code to match. If not specified, no status code will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#match_status_code CdnLogsUploaderTarget#match_status_code}
  */
  readonly matchStatusCode?: number;
}

export function cdnLogsUploaderTargetConfigHttpUploadResponseActionsToTerraform(struct?: CdnLogsUploaderTargetConfigHttpUploadResponseActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match_payload: cdktf.stringToTerraform(struct!.matchPayload),
    match_status_code: cdktf.numberToTerraform(struct!.matchStatusCode),
  }
}


export function cdnLogsUploaderTargetConfigHttpUploadResponseActionsToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpUploadResponseActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_payload: {
      value: cdktf.stringToHclTerraform(struct!.matchPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_status_code: {
      value: cdktf.numberToHclTerraform(struct!.matchStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpUploadResponseActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLogsUploaderTargetConfigHttpUploadResponseActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPayload = this._matchPayload;
    }
    if (this._matchStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStatusCode = this._matchStatusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpUploadResponseActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._matchPayload = undefined;
      this._matchStatusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._matchPayload = value.matchPayload;
      this._matchStatusCode = value.matchStatusCode;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match_payload - computed: false, optional: true, required: false
  private _matchPayload?: string; 
  public get matchPayload() {
    return this.getStringAttribute('match_payload');
  }
  public set matchPayload(value: string) {
    this._matchPayload = value;
  }
  public resetMatchPayload() {
    this._matchPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPayloadInput() {
    return this._matchPayload;
  }

  // match_status_code - computed: false, optional: true, required: false
  private _matchStatusCode?: number; 
  public get matchStatusCode() {
    return this.getNumberAttribute('match_status_code');
  }
  public set matchStatusCode(value: number) {
    this._matchStatusCode = value;
  }
  public resetMatchStatusCode() {
    this._matchStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStatusCodeInput() {
    return this._matchStatusCode;
  }
}

export class CdnLogsUploaderTargetConfigHttpUploadResponseActionsList extends cdktf.ComplexList {
  public internalValue? : CdnLogsUploaderTargetConfigHttpUploadResponseActions[] | cdktf.IResolvable

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
  public get(index: number): CdnLogsUploaderTargetConfigHttpUploadResponseActionsOutputReference {
    return new CdnLogsUploaderTargetConfigHttpUploadResponseActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLogsUploaderTargetConfigHttpUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#headers CdnLogsUploaderTarget#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * HTTP method to use for the request. Supported values are 'POST' and 'PUT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#method CdnLogsUploaderTarget#method}
  */
  readonly method?: string;
  /**
  * Timeout for the HTTP request in seconds. Default value is 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#timeout_seconds CdnLogsUploaderTarget#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * URL to which logs should be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#url CdnLogsUploaderTarget#url}
  */
  readonly url: string;
  /**
  * Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#use_compression CdnLogsUploaderTarget#use_compression}
  */
  readonly useCompression?: boolean | cdktf.IResolvable;
  /**
  * response_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#response_actions CdnLogsUploaderTarget#response_actions}
  */
  readonly responseActions?: CdnLogsUploaderTargetConfigHttpUploadResponseActions[] | cdktf.IResolvable;
}

export function cdnLogsUploaderTargetConfigHttpUploadToTerraform(struct?: CdnLogsUploaderTargetConfigHttpUploadOutputReference | CdnLogsUploaderTargetConfigHttpUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    url: cdktf.stringToTerraform(struct!.url),
    use_compression: cdktf.booleanToTerraform(struct!.useCompression),
    response_actions: cdktf.listMapper(cdnLogsUploaderTargetConfigHttpUploadResponseActionsToTerraform, true)(struct!.responseActions),
  }
}


export function cdnLogsUploaderTargetConfigHttpUploadToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpUploadOutputReference | CdnLogsUploaderTargetConfigHttpUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_compression: {
      value: cdktf.booleanToHclTerraform(struct!.useCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_actions: {
      value: cdktf.listMapperHcl(cdnLogsUploaderTargetConfigHttpUploadResponseActionsToHclTerraform, true)(struct!.responseActions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpUploadResponseActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigHttpUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCompression = this._useCompression;
    }
    if (this._responseActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseActions = this._responseActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttpUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._method = undefined;
      this._timeoutSeconds = undefined;
      this._url = undefined;
      this._useCompression = undefined;
      this._responseActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._method = value.method;
      this._timeoutSeconds = value.timeoutSeconds;
      this._url = value.url;
      this._useCompression = value.useCompression;
      this._responseActions.internalValue = value.responseActions;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_compression - computed: false, optional: true, required: false
  private _useCompression?: boolean | cdktf.IResolvable; 
  public get useCompression() {
    return this.getBooleanAttribute('use_compression');
  }
  public set useCompression(value: boolean | cdktf.IResolvable) {
    this._useCompression = value;
  }
  public resetUseCompression() {
    this._useCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCompressionInput() {
    return this._useCompression;
  }

  // response_actions - computed: false, optional: true, required: false
  private _responseActions = new CdnLogsUploaderTargetConfigHttpUploadResponseActionsList(this, "response_actions", false);
  public get responseActions() {
    return this._responseActions;
  }
  public putResponseActions(value: CdnLogsUploaderTargetConfigHttpUploadResponseActions[] | cdktf.IResolvable) {
    this._responseActions.internalValue = value;
  }
  public resetResponseActions() {
    this._responseActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseActionsInput() {
    return this._responseActions.internalValue;
  }
}
export interface CdnLogsUploaderTargetConfigHttp {
  /**
  * Content type of the logs being uploaded. Supported values are 'json' and 'text'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#content_type CdnLogsUploaderTarget#content_type}
  */
  readonly contentType?: string;
  /**
  * append block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#append CdnLogsUploaderTarget#append}
  */
  readonly append?: CdnLogsUploaderTargetConfigHttpAppend;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#auth CdnLogsUploaderTarget#auth}
  */
  readonly auth?: CdnLogsUploaderTargetConfigHttpAuth;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#retry CdnLogsUploaderTarget#retry}
  */
  readonly retry?: CdnLogsUploaderTargetConfigHttpRetry;
  /**
  * upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#upload CdnLogsUploaderTarget#upload}
  */
  readonly upload: CdnLogsUploaderTargetConfigHttpUpload;
}

export function cdnLogsUploaderTargetConfigHttpToTerraform(struct?: CdnLogsUploaderTargetConfigHttpOutputReference | CdnLogsUploaderTargetConfigHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    append: cdnLogsUploaderTargetConfigHttpAppendToTerraform(struct!.append),
    auth: cdnLogsUploaderTargetConfigHttpAuthToTerraform(struct!.auth),
    retry: cdnLogsUploaderTargetConfigHttpRetryToTerraform(struct!.retry),
    upload: cdnLogsUploaderTargetConfigHttpUploadToTerraform(struct!.upload),
  }
}


export function cdnLogsUploaderTargetConfigHttpToHclTerraform(struct?: CdnLogsUploaderTargetConfigHttpOutputReference | CdnLogsUploaderTargetConfigHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append: {
      value: cdnLogsUploaderTargetConfigHttpAppendToHclTerraform(struct!.append),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpAppendList",
    },
    auth: {
      value: cdnLogsUploaderTargetConfigHttpAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpAuthList",
    },
    retry: {
      value: cdnLogsUploaderTargetConfigHttpRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpRetryList",
    },
    upload: {
      value: cdnLogsUploaderTargetConfigHttpUploadToHclTerraform(struct!.upload),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpUploadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._append?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append?.internalValue;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._upload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._append.internalValue = undefined;
      this._auth.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._upload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._append.internalValue = value.append;
      this._auth.internalValue = value.auth;
      this._retry.internalValue = value.retry;
      this._upload.internalValue = value.upload;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // append - computed: false, optional: true, required: false
  private _append = new CdnLogsUploaderTargetConfigHttpAppendOutputReference(this, "append");
  public get append() {
    return this._append;
  }
  public putAppend(value: CdnLogsUploaderTargetConfigHttpAppend) {
    this._append.internalValue = value;
  }
  public resetAppend() {
    this._append.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append.internalValue;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new CdnLogsUploaderTargetConfigHttpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: CdnLogsUploaderTargetConfigHttpAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new CdnLogsUploaderTargetConfigHttpRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: CdnLogsUploaderTargetConfigHttpRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // upload - computed: false, optional: false, required: true
  private _upload = new CdnLogsUploaderTargetConfigHttpUploadOutputReference(this, "upload");
  public get upload() {
    return this._upload;
  }
  public putUpload(value: CdnLogsUploaderTargetConfigHttpUpload) {
    this._upload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload.internalValue;
  }
}
export interface CdnLogsUploaderTargetConfigS3Amazon {
  /**
  * Access key ID for the Amazon S3 account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#access_key_id CdnLogsUploaderTarget#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Name of the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#bucket_name CdnLogsUploaderTarget#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Directory in the Amazon S3 bucket where logs will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#directory CdnLogsUploaderTarget#directory}
  */
  readonly directory?: string;
  /**
  * Region of the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#region CdnLogsUploaderTarget#region}
  */
  readonly region: string;
  /**
  * Secret access key for the Amazon S3 account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#secret_access_key CdnLogsUploaderTarget#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function cdnLogsUploaderTargetConfigS3AmazonToTerraform(struct?: CdnLogsUploaderTargetConfigS3AmazonOutputReference | CdnLogsUploaderTargetConfigS3Amazon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    directory: cdktf.stringToTerraform(struct!.directory),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function cdnLogsUploaderTargetConfigS3AmazonToHclTerraform(struct?: CdnLogsUploaderTargetConfigS3AmazonOutputReference | CdnLogsUploaderTargetConfigS3Amazon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigS3AmazonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigS3Amazon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigS3Amazon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._bucketName = undefined;
      this._directory = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._bucketName = value.bucketName;
      this._directory = value.directory;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface CdnLogsUploaderTargetConfigS3Gcore {
  /**
  * Access key ID for the S3-compatible storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#access_key_id CdnLogsUploaderTarget#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Name of the S3-compatible storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#bucket_name CdnLogsUploaderTarget#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Directory in the S3-compatible storage bucket where logs will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#directory CdnLogsUploaderTarget#directory}
  */
  readonly directory?: string;
  /**
  * Endpoint of the S3-compatible storage service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#endpoint CdnLogsUploaderTarget#endpoint}
  */
  readonly endpoint: string;
  /**
  * Region of the S3-compatible storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#region CdnLogsUploaderTarget#region}
  */
  readonly region: string;
  /**
  * Secret access key for the S3-compatible storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#secret_access_key CdnLogsUploaderTarget#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#use_path_style CdnLogsUploaderTarget#use_path_style}
  */
  readonly usePathStyle?: boolean | cdktf.IResolvable;
}

export function cdnLogsUploaderTargetConfigS3GcoreToTerraform(struct?: CdnLogsUploaderTargetConfigS3GcoreOutputReference | CdnLogsUploaderTargetConfigS3Gcore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    directory: cdktf.stringToTerraform(struct!.directory),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    use_path_style: cdktf.booleanToTerraform(struct!.usePathStyle),
  }
}


export function cdnLogsUploaderTargetConfigS3GcoreToHclTerraform(struct?: CdnLogsUploaderTargetConfigS3GcoreOutputReference | CdnLogsUploaderTargetConfigS3Gcore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.usePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigS3GcoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigS3Gcore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._usePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePathStyle = this._usePathStyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigS3Gcore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._bucketName = undefined;
      this._directory = undefined;
      this._endpoint = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._usePathStyle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._bucketName = value.bucketName;
      this._directory = value.directory;
      this._endpoint = value.endpoint;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._usePathStyle = value.usePathStyle;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // use_path_style - computed: false, optional: true, required: false
  private _usePathStyle?: boolean | cdktf.IResolvable; 
  public get usePathStyle() {
    return this.getBooleanAttribute('use_path_style');
  }
  public set usePathStyle(value: boolean | cdktf.IResolvable) {
    this._usePathStyle = value;
  }
  public resetUsePathStyle() {
    this._usePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePathStyleInput() {
    return this._usePathStyle;
  }
}
export interface CdnLogsUploaderTargetConfigS3Oss {
  /**
  * Access key ID for the OSS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#access_key_id CdnLogsUploaderTarget#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Name of the OSS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#bucket_name CdnLogsUploaderTarget#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Directory in the OSS bucket where logs will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#directory CdnLogsUploaderTarget#directory}
  */
  readonly directory?: string;
  /**
  * Region of the OSS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#region CdnLogsUploaderTarget#region}
  */
  readonly region?: string;
  /**
  * Secret access key for the OSS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#secret_access_key CdnLogsUploaderTarget#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function cdnLogsUploaderTargetConfigS3OssToTerraform(struct?: CdnLogsUploaderTargetConfigS3OssOutputReference | CdnLogsUploaderTargetConfigS3Oss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    directory: cdktf.stringToTerraform(struct!.directory),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function cdnLogsUploaderTargetConfigS3OssToHclTerraform(struct?: CdnLogsUploaderTargetConfigS3OssOutputReference | CdnLogsUploaderTargetConfigS3Oss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigS3OssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigS3Oss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigS3Oss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._bucketName = undefined;
      this._directory = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._bucketName = value.bucketName;
      this._directory = value.directory;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface CdnLogsUploaderTargetConfigS3Other {
  /**
  * Access key ID for the S3-compatible storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#access_key_id CdnLogsUploaderTarget#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Name of the S3-compatible storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#bucket_name CdnLogsUploaderTarget#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Directory in the S3-compatible storage bucket where logs will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#directory CdnLogsUploaderTarget#directory}
  */
  readonly directory?: string;
  /**
  * Endpoint of the S3-compatible storage service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#endpoint CdnLogsUploaderTarget#endpoint}
  */
  readonly endpoint: string;
  /**
  * Region of the S3-compatible storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#region CdnLogsUploaderTarget#region}
  */
  readonly region: string;
  /**
  * Secret access key for the S3-compatible storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#secret_access_key CdnLogsUploaderTarget#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#use_path_style CdnLogsUploaderTarget#use_path_style}
  */
  readonly usePathStyle?: boolean | cdktf.IResolvable;
}

export function cdnLogsUploaderTargetConfigS3OtherToTerraform(struct?: CdnLogsUploaderTargetConfigS3OtherOutputReference | CdnLogsUploaderTargetConfigS3Other): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    directory: cdktf.stringToTerraform(struct!.directory),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    use_path_style: cdktf.booleanToTerraform(struct!.usePathStyle),
  }
}


export function cdnLogsUploaderTargetConfigS3OtherToHclTerraform(struct?: CdnLogsUploaderTargetConfigS3OtherOutputReference | CdnLogsUploaderTargetConfigS3Other): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.usePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigS3OtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigS3Other | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._usePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePathStyle = this._usePathStyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigS3Other | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._bucketName = undefined;
      this._directory = undefined;
      this._endpoint = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._usePathStyle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._bucketName = value.bucketName;
      this._directory = value.directory;
      this._endpoint = value.endpoint;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._usePathStyle = value.usePathStyle;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // use_path_style - computed: false, optional: true, required: false
  private _usePathStyle?: boolean | cdktf.IResolvable; 
  public get usePathStyle() {
    return this.getBooleanAttribute('use_path_style');
  }
  public set usePathStyle(value: boolean | cdktf.IResolvable) {
    this._usePathStyle = value;
  }
  public resetUsePathStyle() {
    this._usePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePathStyleInput() {
    return this._usePathStyle;
  }
}
export interface CdnLogsUploaderTargetConfigS3V1 {
  /**
  * Access key ID for the S3-compatible storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#access_key_id CdnLogsUploaderTarget#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Name of the S3-compatible storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#bucket_name CdnLogsUploaderTarget#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Directory in the S3-compatible storage bucket where logs will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#directory CdnLogsUploaderTarget#directory}
  */
  readonly directory?: string;
  /**
  * Endpoint of the S3-compatible storage service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#endpoint CdnLogsUploaderTarget#endpoint}
  */
  readonly endpoint: string;
  /**
  * Region of the S3-compatible storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#region CdnLogsUploaderTarget#region}
  */
  readonly region: string;
  /**
  * Secret access key for the S3-compatible storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#secret_access_key CdnLogsUploaderTarget#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#use_path_style CdnLogsUploaderTarget#use_path_style}
  */
  readonly usePathStyle?: boolean | cdktf.IResolvable;
}

export function cdnLogsUploaderTargetConfigS3V1ToTerraform(struct?: CdnLogsUploaderTargetConfigS3V1OutputReference | CdnLogsUploaderTargetConfigS3V1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    directory: cdktf.stringToTerraform(struct!.directory),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    use_path_style: cdktf.booleanToTerraform(struct!.usePathStyle),
  }
}


export function cdnLogsUploaderTargetConfigS3V1ToHclTerraform(struct?: CdnLogsUploaderTargetConfigS3V1OutputReference | CdnLogsUploaderTargetConfigS3V1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.usePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigS3V1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigS3V1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._usePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePathStyle = this._usePathStyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigS3V1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._bucketName = undefined;
      this._directory = undefined;
      this._endpoint = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._usePathStyle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._bucketName = value.bucketName;
      this._directory = value.directory;
      this._endpoint = value.endpoint;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._usePathStyle = value.usePathStyle;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // use_path_style - computed: false, optional: true, required: false
  private _usePathStyle?: boolean | cdktf.IResolvable; 
  public get usePathStyle() {
    return this.getBooleanAttribute('use_path_style');
  }
  public set usePathStyle(value: boolean | cdktf.IResolvable) {
    this._usePathStyle = value;
  }
  public resetUsePathStyle() {
    this._usePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePathStyleInput() {
    return this._usePathStyle;
  }
}
export interface CdnLogsUploaderTargetConfigSftp {
  /**
  * Directory on the SFTP server where logs will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#directory CdnLogsUploaderTarget#directory}
  */
  readonly directory?: string;
  /**
  * Hostname or IP address of the SFTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#hostname CdnLogsUploaderTarget#hostname}
  */
  readonly hostname: string;
  /**
  * Passphrase for the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#key_passphrase CdnLogsUploaderTarget#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Password for the SFTP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#password CdnLogsUploaderTarget#password}
  */
  readonly password?: string;
  /**
  * Private key for the SFTP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#private_key CdnLogsUploaderTarget#private_key}
  */
  readonly privateKey?: string;
  /**
  * Timeout for the SFTP connection in seconds. Default value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#timeout_seconds CdnLogsUploaderTarget#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Username for the SFTP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#user CdnLogsUploaderTarget#user}
  */
  readonly user: string;
}

export function cdnLogsUploaderTargetConfigSftpToTerraform(struct?: CdnLogsUploaderTargetConfigSftpOutputReference | CdnLogsUploaderTargetConfigSftp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    key_passphrase: cdktf.stringToTerraform(struct!.keyPassphrase),
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function cdnLogsUploaderTargetConfigSftpToHclTerraform(struct?: CdnLogsUploaderTargetConfigSftpOutputReference | CdnLogsUploaderTargetConfigSftp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.keyPassphrase),
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigSftpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigSftp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._keyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassphrase = this._keyPassphrase;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigSftp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._hostname = undefined;
      this._keyPassphrase = undefined;
      this._password = undefined;
      this._privateKey = undefined;
      this._timeoutSeconds = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._hostname = value.hostname;
      this._keyPassphrase = value.keyPassphrase;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._timeoutSeconds = value.timeoutSeconds;
      this._user = value.user;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface CdnLogsUploaderTargetConfigA {
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#ftp CdnLogsUploaderTarget#ftp}
  */
  readonly ftp?: CdnLogsUploaderTargetConfigFtp;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#http CdnLogsUploaderTarget#http}
  */
  readonly http?: CdnLogsUploaderTargetConfigHttp;
  /**
  * s3_amazon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#s3_amazon CdnLogsUploaderTarget#s3_amazon}
  */
  readonly s3Amazon?: CdnLogsUploaderTargetConfigS3Amazon;
  /**
  * s3_gcore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#s3_gcore CdnLogsUploaderTarget#s3_gcore}
  */
  readonly s3Gcore?: CdnLogsUploaderTargetConfigS3Gcore;
  /**
  * s3_oss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#s3_oss CdnLogsUploaderTarget#s3_oss}
  */
  readonly s3Oss?: CdnLogsUploaderTargetConfigS3Oss;
  /**
  * s3_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#s3_other CdnLogsUploaderTarget#s3_other}
  */
  readonly s3Other?: CdnLogsUploaderTargetConfigS3Other;
  /**
  * s3_v1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#s3_v1 CdnLogsUploaderTarget#s3_v1}
  */
  readonly s3V1?: CdnLogsUploaderTargetConfigS3V1;
  /**
  * sftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#sftp CdnLogsUploaderTarget#sftp}
  */
  readonly sftp?: CdnLogsUploaderTargetConfigSftp;
}

export function cdnLogsUploaderTargetConfigAToTerraform(struct?: CdnLogsUploaderTargetConfigAOutputReference | CdnLogsUploaderTargetConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp: cdnLogsUploaderTargetConfigFtpToTerraform(struct!.ftp),
    http: cdnLogsUploaderTargetConfigHttpToTerraform(struct!.http),
    s3_amazon: cdnLogsUploaderTargetConfigS3AmazonToTerraform(struct!.s3Amazon),
    s3_gcore: cdnLogsUploaderTargetConfigS3GcoreToTerraform(struct!.s3Gcore),
    s3_oss: cdnLogsUploaderTargetConfigS3OssToTerraform(struct!.s3Oss),
    s3_other: cdnLogsUploaderTargetConfigS3OtherToTerraform(struct!.s3Other),
    s3_v1: cdnLogsUploaderTargetConfigS3V1ToTerraform(struct!.s3V1),
    sftp: cdnLogsUploaderTargetConfigSftpToTerraform(struct!.sftp),
  }
}


export function cdnLogsUploaderTargetConfigAToHclTerraform(struct?: CdnLogsUploaderTargetConfigAOutputReference | CdnLogsUploaderTargetConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp: {
      value: cdnLogsUploaderTargetConfigFtpToHclTerraform(struct!.ftp),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigFtpList",
    },
    http: {
      value: cdnLogsUploaderTargetConfigHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigHttpList",
    },
    s3_amazon: {
      value: cdnLogsUploaderTargetConfigS3AmazonToHclTerraform(struct!.s3Amazon),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigS3AmazonList",
    },
    s3_gcore: {
      value: cdnLogsUploaderTargetConfigS3GcoreToHclTerraform(struct!.s3Gcore),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigS3GcoreList",
    },
    s3_oss: {
      value: cdnLogsUploaderTargetConfigS3OssToHclTerraform(struct!.s3Oss),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigS3OssList",
    },
    s3_other: {
      value: cdnLogsUploaderTargetConfigS3OtherToHclTerraform(struct!.s3Other),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigS3OtherList",
    },
    s3_v1: {
      value: cdnLogsUploaderTargetConfigS3V1ToHclTerraform(struct!.s3V1),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigS3V1List",
    },
    sftp: {
      value: cdnLogsUploaderTargetConfigSftpToHclTerraform(struct!.sftp),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLogsUploaderTargetConfigSftpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLogsUploaderTargetConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLogsUploaderTargetConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftp = this._ftp?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._s3Amazon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Amazon = this._s3Amazon?.internalValue;
    }
    if (this._s3Gcore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Gcore = this._s3Gcore?.internalValue;
    }
    if (this._s3Oss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Oss = this._s3Oss?.internalValue;
    }
    if (this._s3Other?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Other = this._s3Other?.internalValue;
    }
    if (this._s3V1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3V1 = this._s3V1?.internalValue;
    }
    if (this._sftp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftp = this._sftp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLogsUploaderTargetConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ftp.internalValue = undefined;
      this._http.internalValue = undefined;
      this._s3Amazon.internalValue = undefined;
      this._s3Gcore.internalValue = undefined;
      this._s3Oss.internalValue = undefined;
      this._s3Other.internalValue = undefined;
      this._s3V1.internalValue = undefined;
      this._sftp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ftp.internalValue = value.ftp;
      this._http.internalValue = value.http;
      this._s3Amazon.internalValue = value.s3Amazon;
      this._s3Gcore.internalValue = value.s3Gcore;
      this._s3Oss.internalValue = value.s3Oss;
      this._s3Other.internalValue = value.s3Other;
      this._s3V1.internalValue = value.s3V1;
      this._sftp.internalValue = value.sftp;
    }
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new CdnLogsUploaderTargetConfigFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: CdnLogsUploaderTargetConfigFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new CdnLogsUploaderTargetConfigHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: CdnLogsUploaderTargetConfigHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // s3_amazon - computed: false, optional: true, required: false
  private _s3Amazon = new CdnLogsUploaderTargetConfigS3AmazonOutputReference(this, "s3_amazon");
  public get s3Amazon() {
    return this._s3Amazon;
  }
  public putS3Amazon(value: CdnLogsUploaderTargetConfigS3Amazon) {
    this._s3Amazon.internalValue = value;
  }
  public resetS3Amazon() {
    this._s3Amazon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AmazonInput() {
    return this._s3Amazon.internalValue;
  }

  // s3_gcore - computed: false, optional: true, required: false
  private _s3Gcore = new CdnLogsUploaderTargetConfigS3GcoreOutputReference(this, "s3_gcore");
  public get s3Gcore() {
    return this._s3Gcore;
  }
  public putS3Gcore(value: CdnLogsUploaderTargetConfigS3Gcore) {
    this._s3Gcore.internalValue = value;
  }
  public resetS3Gcore() {
    this._s3Gcore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3GcoreInput() {
    return this._s3Gcore.internalValue;
  }

  // s3_oss - computed: false, optional: true, required: false
  private _s3Oss = new CdnLogsUploaderTargetConfigS3OssOutputReference(this, "s3_oss");
  public get s3Oss() {
    return this._s3Oss;
  }
  public putS3Oss(value: CdnLogsUploaderTargetConfigS3Oss) {
    this._s3Oss.internalValue = value;
  }
  public resetS3Oss() {
    this._s3Oss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OssInput() {
    return this._s3Oss.internalValue;
  }

  // s3_other - computed: false, optional: true, required: false
  private _s3Other = new CdnLogsUploaderTargetConfigS3OtherOutputReference(this, "s3_other");
  public get s3Other() {
    return this._s3Other;
  }
  public putS3Other(value: CdnLogsUploaderTargetConfigS3Other) {
    this._s3Other.internalValue = value;
  }
  public resetS3Other() {
    this._s3Other.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OtherInput() {
    return this._s3Other.internalValue;
  }

  // s3_v1 - computed: false, optional: true, required: false
  private _s3V1 = new CdnLogsUploaderTargetConfigS3V1OutputReference(this, "s3_v1");
  public get s3V1() {
    return this._s3V1;
  }
  public putS3V1(value: CdnLogsUploaderTargetConfigS3V1) {
    this._s3V1.internalValue = value;
  }
  public resetS3V1() {
    this._s3V1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3V1Input() {
    return this._s3V1.internalValue;
  }

  // sftp - computed: false, optional: true, required: false
  private _sftp = new CdnLogsUploaderTargetConfigSftpOutputReference(this, "sftp");
  public get sftp() {
    return this._sftp;
  }
  public putSftp(value: CdnLogsUploaderTargetConfigSftp) {
    this._sftp.internalValue = value;
  }
  public resetSftp() {
    this._sftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInput() {
    return this._sftp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target gcore_cdn_logs_uploader_target}
*/
export class CdnLogsUploaderTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_logs_uploader_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnLogsUploaderTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnLogsUploaderTarget to import
  * @param importFromId The id of the existing CdnLogsUploaderTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnLogsUploaderTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_logs_uploader_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_target gcore_cdn_logs_uploader_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnLogsUploaderTargetConfig
  */
  public constructor(scope: Construct, id: string, config: CdnLogsUploaderTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_logs_uploader_target',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.4',
        providerVersionConstraint: '0.32.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // config - computed: false, optional: false, required: true
  private _config = new CdnLogsUploaderTargetConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CdnLogsUploaderTargetConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      config: cdnLogsUploaderTargetConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdnLogsUploaderTargetConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnLogsUploaderTargetConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
