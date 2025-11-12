// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityReportingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#id VisibilityReportingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable session logging; 'disable': Disable session logging(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#session_logging VisibilityReportingA#session_logging}
  */
  readonly sessionLogging?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#uuid VisibilityReportingA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#sampling_enable VisibilityReportingA#sampling_enable}
  */
  readonly samplingEnable?: VisibilityReportingSamplingEnableA[] | cdktf.IResolvable;
  /**
  * telemetry_export_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#telemetry_export_interval VisibilityReportingA#telemetry_export_interval}
  */
  readonly telemetryExportInterval?: VisibilityReportingTelemetryExportIntervalA;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#template VisibilityReportingA#template}
  */
  readonly template?: VisibilityReportingTemplateA;
}
export interface VisibilityReportingSamplingEnableA {
  /**
  * 'all': all; 'log-transmit-failure': Total log transmit failures; 'buffer-alloc-failure': Total reporting buffer allocation failures; 'notif-jobs-in-queue': Total notification jobs in queue; 'enqueue-fail': Total enqueue jobs failed; 'enqueue-pass': Total enqueue jobs passed; 'dequeued': Total jobs dequeued;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#counters1 VisibilityReportingA#counters1}
  */
  readonly counters1?: string;
}

export function visibilityReportingSamplingEnableAToTerraform(struct?: VisibilityReportingSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function visibilityReportingSamplingEnableAToHclTerraform(struct?: VisibilityReportingSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityReportingSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class VisibilityReportingSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : VisibilityReportingSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityReportingSamplingEnableAOutputReference {
    return new VisibilityReportingSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityReportingTelemetryExportIntervalA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#uuid VisibilityReportingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Monitored entity telemetry data export interval in mins (Default 5 mins)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#value VisibilityReportingA#value}
  */
  readonly value?: number;
}

export function visibilityReportingTelemetryExportIntervalAToTerraform(struct?: VisibilityReportingTelemetryExportIntervalAOutputReference | VisibilityReportingTelemetryExportIntervalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function visibilityReportingTelemetryExportIntervalAToHclTerraform(struct?: VisibilityReportingTelemetryExportIntervalAOutputReference | VisibilityReportingTelemetryExportIntervalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTelemetryExportIntervalAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityReportingTelemetryExportIntervalA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTelemetryExportIntervalA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VisibilityReportingTemplateNotificationDebugA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#uuid VisibilityReportingA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityReportingTemplateNotificationDebugAToTerraform(struct?: VisibilityReportingTemplateNotificationDebugAOutputReference | VisibilityReportingTemplateNotificationDebugA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityReportingTemplateNotificationDebugAToHclTerraform(struct?: VisibilityReportingTemplateNotificationDebugAOutputReference | VisibilityReportingTemplateNotificationDebugA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTemplateNotificationDebugAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityReportingTemplateNotificationDebugA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTemplateNotificationDebugA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface VisibilityReportingTemplateNotificationTemplateNameListAuthenticationA {
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#api_key VisibilityReportingA#api_key}
  */
  readonly apiKey?: number;
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#api_key_string VisibilityReportingA#api_key_string}
  */
  readonly apiKeyString?: string;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#auth_password VisibilityReportingA#auth_password}
  */
  readonly authPassword?: number;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#auth_password_string VisibilityReportingA#auth_password_string}
  */
  readonly authPasswordString?: string;
  /**
  * Configure the authentication user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#auth_username VisibilityReportingA#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Configure the authentication login uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#relative_login_uri VisibilityReportingA#relative_login_uri}
  */
  readonly relativeLoginUri?: string;
  /**
  * Configure the authentication logoff uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#relative_logoff_uri VisibilityReportingA#relative_logoff_uri}
  */
  readonly relativeLogoffUri?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#uuid VisibilityReportingA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityReportingTemplateNotificationTemplateNameListAuthenticationAToTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameListAuthenticationAOutputReference | VisibilityReportingTemplateNotificationTemplateNameListAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.numberToTerraform(struct!.apiKey),
    api_key_string: cdktf.stringToTerraform(struct!.apiKeyString),
    auth_password: cdktf.numberToTerraform(struct!.authPassword),
    auth_password_string: cdktf.stringToTerraform(struct!.authPasswordString),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    relative_login_uri: cdktf.stringToTerraform(struct!.relativeLoginUri),
    relative_logoff_uri: cdktf.stringToTerraform(struct!.relativeLogoffUri),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityReportingTemplateNotificationTemplateNameListAuthenticationAToHclTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameListAuthenticationAOutputReference | VisibilityReportingTemplateNotificationTemplateNameListAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.numberToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    api_key_string: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password: {
      value: cdktf.numberToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_password_string: {
      value: cdktf.stringToHclTerraform(struct!.authPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_username: {
      value: cdktf.stringToHclTerraform(struct!.authUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_login_uri: {
      value: cdktf.stringToHclTerraform(struct!.relativeLoginUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_logoff_uri: {
      value: cdktf.stringToHclTerraform(struct!.relativeLogoffUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTemplateNotificationTemplateNameListAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityReportingTemplateNotificationTemplateNameListAuthenticationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyString = this._apiKeyString;
    }
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPasswordString = this._authPasswordString;
    }
    if (this._authUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsername = this._authUsername;
    }
    if (this._relativeLoginUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLoginUri = this._relativeLoginUri;
    }
    if (this._relativeLogoffUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLogoffUri = this._relativeLogoffUri;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTemplateNotificationTemplateNameListAuthenticationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._apiKeyString = undefined;
      this._authPassword = undefined;
      this._authPasswordString = undefined;
      this._authUsername = undefined;
      this._relativeLoginUri = undefined;
      this._relativeLogoffUri = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._apiKeyString = value.apiKeyString;
      this._authPassword = value.authPassword;
      this._authPasswordString = value.authPasswordString;
      this._authUsername = value.authUsername;
      this._relativeLoginUri = value.relativeLoginUri;
      this._relativeLogoffUri = value.relativeLogoffUri;
      this._uuid = value.uuid;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: number; 
  public get apiKey() {
    return this.getNumberAttribute('api_key');
  }
  public set apiKey(value: number) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_string - computed: false, optional: true, required: false
  private _apiKeyString?: string; 
  public get apiKeyString() {
    return this.getStringAttribute('api_key_string');
  }
  public set apiKeyString(value: string) {
    this._apiKeyString = value;
  }
  public resetApiKeyString() {
    this._apiKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyStringInput() {
    return this._apiKeyString;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: number; 
  public get authPassword() {
    return this.getNumberAttribute('auth_password');
  }
  public set authPassword(value: number) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_password_string - computed: false, optional: true, required: false
  private _authPasswordString?: string; 
  public get authPasswordString() {
    return this.getStringAttribute('auth_password_string');
  }
  public set authPasswordString(value: string) {
    this._authPasswordString = value;
  }
  public resetAuthPasswordString() {
    this._authPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordStringInput() {
    return this._authPasswordString;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // relative_login_uri - computed: false, optional: true, required: false
  private _relativeLoginUri?: string; 
  public get relativeLoginUri() {
    return this.getStringAttribute('relative_login_uri');
  }
  public set relativeLoginUri(value: string) {
    this._relativeLoginUri = value;
  }
  public resetRelativeLoginUri() {
    this._relativeLoginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLoginUriInput() {
    return this._relativeLoginUri;
  }

  // relative_logoff_uri - computed: false, optional: true, required: false
  private _relativeLogoffUri?: string; 
  public get relativeLogoffUri() {
    return this.getStringAttribute('relative_logoff_uri');
  }
  public set relativeLogoffUri(value: string) {
    this._relativeLogoffUri = value;
  }
  public resetRelativeLogoffUri() {
    this._relativeLogoffUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLogoffUriInput() {
    return this._relativeLogoffUri;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA {
  /**
  * 'all': all; 'sent_successful': Sent successful; 'send_fail': Send failures; 'response_fail': Response failures;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#counters1 VisibilityReportingA#counters1}
  */
  readonly counters1?: string;
}

export function visibilityReportingTemplateNotificationTemplateNameListSamplingEnableAToTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function visibilityReportingTemplateNotificationTemplateNameListSamplingEnableAToHclTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableAOutputReference {
    return new VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityReportingTemplateNotificationTemplateNameListStructA {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#action VisibilityReportingA#action}
  */
  readonly action?: string;
  /**
  * Enable debug mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#debug_mode VisibilityReportingA#debug_mode}
  */
  readonly debugMode?: number;
  /**
  * Configure the host name(e.g www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#host_name VisibilityReportingA#host_name}
  */
  readonly hostName?: string;
  /**
  * Configure the http port to use(default 80) (http port(default 80))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#http_port VisibilityReportingA#http_port}
  */
  readonly httpPort?: number;
  /**
  * Configure the https port to use(default 443) (http port(default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#https_port VisibilityReportingA#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Configure the host IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#ipv4_address VisibilityReportingA#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Configure the host IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#ipv6_address VisibilityReportingA#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Notification template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#name VisibilityReportingA#name}
  */
  readonly name: string;
  /**
  * 'http': Use http protocol; 'https': Use https protocol(default);  (http protocol)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#protocol VisibilityReportingA#protocol}
  */
  readonly protocol?: string;
  /**
  * Configure the relative uri(e.g /example , default /)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#relative_uri VisibilityReportingA#relative_uri}
  */
  readonly relativeUri?: string;
  /**
  * Test connectivity to notification receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#test_connectivity VisibilityReportingA#test_connectivity}
  */
  readonly testConnectivity?: number;
  /**
  * Use management port for notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#use_mgmt_port VisibilityReportingA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#uuid VisibilityReportingA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#authentication VisibilityReportingA#authentication}
  */
  readonly authentication?: VisibilityReportingTemplateNotificationTemplateNameListAuthenticationA;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#sampling_enable VisibilityReportingA#sampling_enable}
  */
  readonly samplingEnable?: VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA[] | cdktf.IResolvable;
}

export function visibilityReportingTemplateNotificationTemplateNameListStructAToTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    debug_mode: cdktf.numberToTerraform(struct!.debugMode),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    relative_uri: cdktf.stringToTerraform(struct!.relativeUri),
    test_connectivity: cdktf.numberToTerraform(struct!.testConnectivity),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: visibilityReportingTemplateNotificationTemplateNameListAuthenticationAToTerraform(struct!.authentication),
    sampling_enable: cdktf.listMapper(visibilityReportingTemplateNotificationTemplateNameListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function visibilityReportingTemplateNotificationTemplateNameListStructAToHclTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameListStructA | cdktf.IResolvable): any {
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
    debug_mode: {
      value: cdktf.numberToHclTerraform(struct!.debugMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_uri: {
      value: cdktf.stringToHclTerraform(struct!.relativeUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_connectivity: {
      value: cdktf.numberToHclTerraform(struct!.testConnectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: visibilityReportingTemplateNotificationTemplateNameListAuthenticationAToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityReportingTemplateNotificationTemplateNameListAuthenticationAList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(visibilityReportingTemplateNotificationTemplateNameListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTemplateNotificationTemplateNameListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityReportingTemplateNotificationTemplateNameListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._debugMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMode = this._debugMode;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._relativeUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeUri = this._relativeUri;
    }
    if (this._testConnectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.testConnectivity = this._testConnectivity;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTemplateNotificationTemplateNameListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._debugMode = undefined;
      this._hostName = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._relativeUri = undefined;
      this._testConnectivity = undefined;
      this._useMgmtPort = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._debugMode = value.debugMode;
      this._hostName = value.hostName;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._name = value.name;
      this._protocol = value.protocol;
      this._relativeUri = value.relativeUri;
      this._testConnectivity = value.testConnectivity;
      this._useMgmtPort = value.useMgmtPort;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode?: number; 
  public get debugMode() {
    return this.getNumberAttribute('debug_mode');
  }
  public set debugMode(value: number) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // relative_uri - computed: false, optional: true, required: false
  private _relativeUri?: string; 
  public get relativeUri() {
    return this.getStringAttribute('relative_uri');
  }
  public set relativeUri(value: string) {
    this._relativeUri = value;
  }
  public resetRelativeUri() {
    this._relativeUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeUriInput() {
    return this._relativeUri;
  }

  // test_connectivity - computed: false, optional: true, required: false
  private _testConnectivity?: number; 
  public get testConnectivity() {
    return this.getNumberAttribute('test_connectivity');
  }
  public set testConnectivity(value: number) {
    this._testConnectivity = value;
  }
  public resetTestConnectivity() {
    this._testConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testConnectivityInput() {
    return this._testConnectivity;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new VisibilityReportingTemplateNotificationTemplateNameListAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: VisibilityReportingTemplateNotificationTemplateNameListAuthenticationA) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VisibilityReportingTemplateNotificationTemplateNameListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class VisibilityReportingTemplateNotificationTemplateNameListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityReportingTemplateNotificationTemplateNameListStructA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityReportingTemplateNotificationTemplateNameListStructAOutputReference {
    return new VisibilityReportingTemplateNotificationTemplateNameListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityReportingTemplateNotificationA {
  /**
  * debug block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#debug VisibilityReportingA#debug}
  */
  readonly debug?: VisibilityReportingTemplateNotificationDebugA;
  /**
  * template_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#template_name_list VisibilityReportingA#template_name_list}
  */
  readonly templateNameList?: VisibilityReportingTemplateNotificationTemplateNameListStructA[] | cdktf.IResolvable;
}

export function visibilityReportingTemplateNotificationAToTerraform(struct?: VisibilityReportingTemplateNotificationAOutputReference | VisibilityReportingTemplateNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: visibilityReportingTemplateNotificationDebugAToTerraform(struct!.debug),
    template_name_list: cdktf.listMapper(visibilityReportingTemplateNotificationTemplateNameListStructAToTerraform, true)(struct!.templateNameList),
  }
}


export function visibilityReportingTemplateNotificationAToHclTerraform(struct?: VisibilityReportingTemplateNotificationAOutputReference | VisibilityReportingTemplateNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: visibilityReportingTemplateNotificationDebugAToHclTerraform(struct!.debug),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityReportingTemplateNotificationDebugAList",
    },
    template_name_list: {
      value: cdktf.listMapperHcl(visibilityReportingTemplateNotificationTemplateNameListStructAToHclTerraform, true)(struct!.templateNameList),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityReportingTemplateNotificationTemplateNameListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTemplateNotificationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityReportingTemplateNotificationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._templateNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateNameList = this._templateNameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTemplateNotificationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debug.internalValue = undefined;
      this._templateNameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debug.internalValue = value.debug;
      this._templateNameList.internalValue = value.templateNameList;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new VisibilityReportingTemplateNotificationDebugAOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: VisibilityReportingTemplateNotificationDebugA) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // template_name_list - computed: false, optional: true, required: false
  private _templateNameList = new VisibilityReportingTemplateNotificationTemplateNameListStructAList(this, "template_name_list", false);
  public get templateNameList() {
    return this._templateNameList;
  }
  public putTemplateNameList(value: VisibilityReportingTemplateNotificationTemplateNameListStructA[] | cdktf.IResolvable) {
    this._templateNameList.internalValue = value;
  }
  public resetTemplateNameList() {
    this._templateNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameListInput() {
    return this._templateNameList.internalValue;
  }
}
export interface VisibilityReportingTemplateA {
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#notification VisibilityReportingA#notification}
  */
  readonly notification?: VisibilityReportingTemplateNotificationA;
}

export function visibilityReportingTemplateAToTerraform(struct?: VisibilityReportingTemplateAOutputReference | VisibilityReportingTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification: visibilityReportingTemplateNotificationAToTerraform(struct!.notification),
  }
}


export function visibilityReportingTemplateAToHclTerraform(struct?: VisibilityReportingTemplateAOutputReference | VisibilityReportingTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification: {
      value: visibilityReportingTemplateNotificationAToHclTerraform(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityReportingTemplateNotificationAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTemplateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityReportingTemplateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTemplateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notification.internalValue = value.notification;
    }
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new VisibilityReportingTemplateNotificationAOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: VisibilityReportingTemplateNotificationA) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting thunder_visibility_reporting}
*/
export class VisibilityReportingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_reporting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityReportingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityReportingA to import
  * @param importFromId The id of the existing VisibilityReportingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityReportingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_reporting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_reporting thunder_visibility_reporting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityReportingAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityReportingAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_reporting',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._sessionLogging = config.sessionLogging;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._telemetryExportInterval.internalValue = config.telemetryExportInterval;
    this._template.internalValue = config.template;
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

  // session_logging - computed: false, optional: true, required: false
  private _sessionLogging?: string; 
  public get sessionLogging() {
    return this.getStringAttribute('session_logging');
  }
  public set sessionLogging(value: string) {
    this._sessionLogging = value;
  }
  public resetSessionLogging() {
    this._sessionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLoggingInput() {
    return this._sessionLogging;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VisibilityReportingSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VisibilityReportingSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // telemetry_export_interval - computed: false, optional: true, required: false
  private _telemetryExportInterval = new VisibilityReportingTelemetryExportIntervalAOutputReference(this, "telemetry_export_interval");
  public get telemetryExportInterval() {
    return this._telemetryExportInterval;
  }
  public putTelemetryExportInterval(value: VisibilityReportingTelemetryExportIntervalA) {
    this._telemetryExportInterval.internalValue = value;
  }
  public resetTelemetryExportInterval() {
    this._telemetryExportInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryExportIntervalInput() {
    return this._telemetryExportInterval.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new VisibilityReportingTemplateAOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: VisibilityReportingTemplateA) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      session_logging: cdktf.stringToTerraform(this._sessionLogging),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(visibilityReportingSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
      telemetry_export_interval: visibilityReportingTelemetryExportIntervalAToTerraform(this._telemetryExportInterval.internalValue),
      template: visibilityReportingTemplateAToTerraform(this._template.internalValue),
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
      session_logging: {
        value: cdktf.stringToHclTerraform(this._sessionLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(visibilityReportingSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityReportingSamplingEnableAList",
      },
      telemetry_export_interval: {
        value: visibilityReportingTelemetryExportIntervalAToHclTerraform(this._telemetryExportInterval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityReportingTelemetryExportIntervalAList",
      },
      template: {
        value: visibilityReportingTemplateAToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityReportingTemplateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
