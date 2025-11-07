// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwTemplateLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'kernel': 0: Kernel; 'user': 1: User-level; 'mail': 2: Mail; 'daemon': 3: System daemons; 'security-authorization': 4: Security/authorization; 'syslog': 5: Syslog internal; 'line-printer': 6: Line printer; 'news': 7: Network news; 'uucp': 8: UUCP subsystem; 'cron': 9: Time-related; 'security-authorization-private': 10: Private security/authorization; 'ftp': 11: FTP; 'ntp': 12: NTP; 'audit': 13: Audit; 'alert': 14: Alert; 'clock': 15: Clock-related; 'local0': 16: Local use 0; 'local1': 17: Local use 1; 'local2': 18: Local use 2; 'local3': 19: Local use 3; 'local4': 20: Local use 4; 'local5': 21: Local use 5; 'local6': 22: Local use 6; 'local7': 23: Local use 7;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#facility FwTemplateLogging#facility}
  */
  readonly facility?: string;
  /**
  * 'ascii': A10 Text logging format (ASCII); 'cef': Common Event Format for logging (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#format FwTemplateLogging#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#id FwTemplateLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include destination FQDN string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#include_dest_fqdn FwTemplateLogging#include_dest_fqdn}
  */
  readonly includeDestFqdn?: number;
  /**
  * Merge creation and deletion of session logs to one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#merged_style FwTemplateLogging#merged_style}
  */
  readonly mergedStyle?: number;
  /**
  * Logging Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#name FwTemplateLogging#name}
  */
  readonly name: string;
  /**
  * 'seconds': Logging timestamp resolution in seconds (default); '10-milliseconds': Logging timestamp resolution in 10s of milli-seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#resolution FwTemplateLogging#resolution}
  */
  readonly resolution?: string;
  /**
  * Bind a Service Group to the logging template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#service_group FwTemplateLogging#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * 'emergency': 0: Emergency; 'alert': 1: Alert; 'critical': 2: Critical; 'error': 3: Error; 'warning': 4: Warning; 'notice': 5: Notice; 'informational': 6: Informational; 'debug': 7: Debug;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#severity FwTemplateLogging#severity}
  */
  readonly severity?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#user_tag FwTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * include_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#include_http FwTemplateLogging#include_http}
  */
  readonly includeHttp?: FwTemplateLoggingIncludeHttp;
  /**
  * include_radius_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#include_radius_attribute FwTemplateLogging#include_radius_attribute}
  */
  readonly includeRadiusAttribute?: FwTemplateLoggingIncludeRadiusAttribute;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#log FwTemplateLogging#log}
  */
  readonly log?: FwTemplateLoggingLog;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#rule FwTemplateLogging#rule}
  */
  readonly rule?: FwTemplateLoggingRule;
  /**
  * session_periodic_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#session_periodic_log FwTemplateLogging#session_periodic_log}
  */
  readonly sessionPeriodicLog?: FwTemplateLoggingSessionPeriodicLog;
  /**
  * source_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#source_address FwTemplateLogging#source_address}
  */
  readonly sourceAddress?: FwTemplateLoggingSourceAddress;
}
export interface FwTemplateLoggingIncludeHttpHeaderCfg {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#custom_header_name FwTemplateLogging#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * Max length for a HTTP request log (Max header length (Default: 100 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#custom_max_length FwTemplateLogging#custom_max_length}
  */
  readonly customMaxLength?: number;
  /**
  * 'cookie': Log HTTP Cookie Header; 'referer': Log HTTP Referer Header; 'user-agent': Log HTTP User-Agent Header; 'header1': Log HTTP Header 1; 'header2': Log HTTP Header 2; 'header3': Log HTTP Header 3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#http_header FwTemplateLogging#http_header}
  */
  readonly httpHeader?: string;
  /**
  * Max length for a HTTP request log (Max header length (Default: 100 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#max_length FwTemplateLogging#max_length}
  */
  readonly maxLength?: number;
}

export function fwTemplateLoggingIncludeHttpHeaderCfgToTerraform(struct?: FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_max_length: cdktf.numberToTerraform(struct!.customMaxLength),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
  }
}


export function fwTemplateLoggingIncludeHttpHeaderCfgToHclTerraform(struct?: FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_max_length: {
      value: cdktf.numberToHclTerraform(struct!.customMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeHttpHeaderCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMaxLength = this._customMaxLength;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customHeaderName = undefined;
      this._customMaxLength = undefined;
      this._httpHeader = undefined;
      this._maxLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customHeaderName = value.customHeaderName;
      this._customMaxLength = value.customMaxLength;
      this._httpHeader = value.httpHeader;
      this._maxLength = value.maxLength;
    }
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_max_length - computed: false, optional: true, required: false
  private _customMaxLength?: number; 
  public get customMaxLength() {
    return this.getNumberAttribute('custom_max_length');
  }
  public set customMaxLength(value: number) {
    this._customMaxLength = value;
  }
  public resetCustomMaxLength() {
    this._customMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMaxLengthInput() {
    return this._customMaxLength;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }
}

export class FwTemplateLoggingIncludeHttpHeaderCfgList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingIncludeHttpHeaderCfgOutputReference {
    return new FwTemplateLoggingIncludeHttpHeaderCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingIncludeHttp {
  /**
  * HTTP file extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#file_extension FwTemplateLogging#file_extension}
  */
  readonly fileExtension?: number;
  /**
  * Log the L4 session information of the HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#l4_session_info FwTemplateLogging#l4_session_info}
  */
  readonly l4SessionInfo?: number;
  /**
  * Log the HTTP Request Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#method FwTemplateLogging#method}
  */
  readonly method?: number;
  /**
  * HTTP Request Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#request_number FwTemplateLogging#request_number}
  */
  readonly requestNumber?: number;
  /**
  * header_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#header_cfg FwTemplateLogging#header_cfg}
  */
  readonly headerCfg?: FwTemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable;
}

export function fwTemplateLoggingIncludeHttpToTerraform(struct?: FwTemplateLoggingIncludeHttpOutputReference | FwTemplateLoggingIncludeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension: cdktf.numberToTerraform(struct!.fileExtension),
    l4_session_info: cdktf.numberToTerraform(struct!.l4SessionInfo),
    method: cdktf.numberToTerraform(struct!.method),
    request_number: cdktf.numberToTerraform(struct!.requestNumber),
    header_cfg: cdktf.listMapper(fwTemplateLoggingIncludeHttpHeaderCfgToTerraform, true)(struct!.headerCfg),
  }
}


export function fwTemplateLoggingIncludeHttpToHclTerraform(struct?: FwTemplateLoggingIncludeHttpOutputReference | FwTemplateLoggingIncludeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension: {
      value: cdktf.numberToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_info: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.numberToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_number: {
      value: cdktf.numberToHclTerraform(struct!.requestNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_cfg: {
      value: cdktf.listMapperHcl(fwTemplateLoggingIncludeHttpHeaderCfgToHclTerraform, true)(struct!.headerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingIncludeHttpHeaderCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingIncludeHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._l4SessionInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionInfo = this._l4SessionInfo;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._requestNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNumber = this._requestNumber;
    }
    if (this._headerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCfg = this._headerCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtension = undefined;
      this._l4SessionInfo = undefined;
      this._method = undefined;
      this._requestNumber = undefined;
      this._headerCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtension = value.fileExtension;
      this._l4SessionInfo = value.l4SessionInfo;
      this._method = value.method;
      this._requestNumber = value.requestNumber;
      this._headerCfg.internalValue = value.headerCfg;
    }
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: number; 
  public get fileExtension() {
    return this.getNumberAttribute('file_extension');
  }
  public set fileExtension(value: number) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // l4_session_info - computed: false, optional: true, required: false
  private _l4SessionInfo?: number; 
  public get l4SessionInfo() {
    return this.getNumberAttribute('l4_session_info');
  }
  public set l4SessionInfo(value: number) {
    this._l4SessionInfo = value;
  }
  public resetL4SessionInfo() {
    this._l4SessionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionInfoInput() {
    return this._l4SessionInfo;
  }

  // method - computed: false, optional: true, required: false
  private _method?: number; 
  public get method() {
    return this.getNumberAttribute('method');
  }
  public set method(value: number) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // request_number - computed: false, optional: true, required: false
  private _requestNumber?: number; 
  public get requestNumber() {
    return this.getNumberAttribute('request_number');
  }
  public set requestNumber(value: number) {
    this._requestNumber = value;
  }
  public resetRequestNumber() {
    this._requestNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNumberInput() {
    return this._requestNumber;
  }

  // header_cfg - computed: false, optional: true, required: false
  private _headerCfg = new FwTemplateLoggingIncludeHttpHeaderCfgList(this, "header_cfg", false);
  public get headerCfg() {
    return this._headerCfg;
  }
  public putHeaderCfg(value: FwTemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable) {
    this._headerCfg.internalValue = value;
  }
  public resetHeaderCfg() {
    this._headerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerCfgInput() {
    return this._headerCfg.internalValue;
  }
}
export interface FwTemplateLoggingIncludeRadiusAttributeAttrCfg {
  /**
  * 'imei': Include IMEI; 'imsi': Include IMSI; 'msisdn': Include MSISDN; 'custom1': Customized attribute 1; 'custom2': Customized attribute 2; 'custom3': Customized attribute 3; 'custom4': Customized attribute 4; 'custom5': Customized attribute 5; 'custom6': Customized attribute 6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#attr FwTemplateLogging#attr}
  */
  readonly attr?: string;
  /**
  * 'http-requests': Include in HTTP request logs; 'sessions': Include in session logs; 'limit-policy': Include in limit policy logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#attr_event FwTemplateLogging#attr_event}
  */
  readonly attrEvent?: string;
}

export function fwTemplateLoggingIncludeRadiusAttributeAttrCfgToTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr: cdktf.stringToTerraform(struct!.attr),
    attr_event: cdktf.stringToTerraform(struct!.attrEvent),
  }
}


export function fwTemplateLoggingIncludeRadiusAttributeAttrCfgToHclTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr: {
      value: cdktf.stringToHclTerraform(struct!.attr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_event: {
      value: cdktf.stringToHclTerraform(struct!.attrEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attr !== undefined) {
      hasAnyValues = true;
      internalValueResult.attr = this._attr;
    }
    if (this._attrEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrEvent = this._attrEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attr = undefined;
      this._attrEvent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attr = value.attr;
      this._attrEvent = value.attrEvent;
    }
  }

  // attr - computed: false, optional: true, required: false
  private _attr?: string; 
  public get attr() {
    return this.getStringAttribute('attr');
  }
  public set attr(value: string) {
    this._attr = value;
  }
  public resetAttr() {
    this._attr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrInput() {
    return this._attr;
  }

  // attr_event - computed: false, optional: true, required: false
  private _attrEvent?: string; 
  public get attrEvent() {
    return this.getStringAttribute('attr_event');
  }
  public set attrEvent(value: string) {
    this._attrEvent = value;
  }
  public resetAttrEvent() {
    this._attrEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrEventInput() {
    return this._attrEvent;
  }
}

export class FwTemplateLoggingIncludeRadiusAttributeAttrCfgList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference {
    return new FwTemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingIncludeRadiusAttribute {
  /**
  * Include radius attributes for the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#framed_ipv6_prefix FwTemplateLogging#framed_ipv6_prefix}
  */
  readonly framedIpv6Prefix?: number;
  /**
  * Configure what string is to be inserted for custom RADIUS attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#insert_if_not_existing FwTemplateLogging#insert_if_not_existing}
  */
  readonly insertIfNotExisting?: number;
  /**
  * No quotation marks for RADIUS attributes in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#no_quote FwTemplateLogging#no_quote}
  */
  readonly noQuote?: number;
  /**
  * '32': Prefix length 32; '48': Prefix length 48; '64': Prefix length 64; '80': Prefix length 80; '96': Prefix length 96; '112': Prefix length 112;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#prefix_length FwTemplateLogging#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * Insert 0000 for standard and custom attributes in log string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#zero_in_custom_attr FwTemplateLogging#zero_in_custom_attr}
  */
  readonly zeroInCustomAttr?: number;
  /**
  * attr_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#attr_cfg FwTemplateLogging#attr_cfg}
  */
  readonly attrCfg?: FwTemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable;
}

export function fwTemplateLoggingIncludeRadiusAttributeToTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeOutputReference | FwTemplateLoggingIncludeRadiusAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    framed_ipv6_prefix: cdktf.numberToTerraform(struct!.framedIpv6Prefix),
    insert_if_not_existing: cdktf.numberToTerraform(struct!.insertIfNotExisting),
    no_quote: cdktf.numberToTerraform(struct!.noQuote),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    zero_in_custom_attr: cdktf.numberToTerraform(struct!.zeroInCustomAttr),
    attr_cfg: cdktf.listMapper(fwTemplateLoggingIncludeRadiusAttributeAttrCfgToTerraform, true)(struct!.attrCfg),
  }
}


export function fwTemplateLoggingIncludeRadiusAttributeToHclTerraform(struct?: FwTemplateLoggingIncludeRadiusAttributeOutputReference | FwTemplateLoggingIncludeRadiusAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    framed_ipv6_prefix: {
      value: cdktf.numberToHclTerraform(struct!.framedIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_if_not_existing: {
      value: cdktf.numberToHclTerraform(struct!.insertIfNotExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_quote: {
      value: cdktf.numberToHclTerraform(struct!.noQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_in_custom_attr: {
      value: cdktf.numberToHclTerraform(struct!.zeroInCustomAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_cfg: {
      value: cdktf.listMapperHcl(fwTemplateLoggingIncludeRadiusAttributeAttrCfgToHclTerraform, true)(struct!.attrCfg),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingIncludeRadiusAttributeAttrCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingIncludeRadiusAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingIncludeRadiusAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._framedIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.framedIpv6Prefix = this._framedIpv6Prefix;
    }
    if (this._insertIfNotExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertIfNotExisting = this._insertIfNotExisting;
    }
    if (this._noQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQuote = this._noQuote;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._zeroInCustomAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInCustomAttr = this._zeroInCustomAttr;
    }
    if (this._attrCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrCfg = this._attrCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingIncludeRadiusAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._framedIpv6Prefix = undefined;
      this._insertIfNotExisting = undefined;
      this._noQuote = undefined;
      this._prefixLength = undefined;
      this._zeroInCustomAttr = undefined;
      this._attrCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._framedIpv6Prefix = value.framedIpv6Prefix;
      this._insertIfNotExisting = value.insertIfNotExisting;
      this._noQuote = value.noQuote;
      this._prefixLength = value.prefixLength;
      this._zeroInCustomAttr = value.zeroInCustomAttr;
      this._attrCfg.internalValue = value.attrCfg;
    }
  }

  // framed_ipv6_prefix - computed: false, optional: true, required: false
  private _framedIpv6Prefix?: number; 
  public get framedIpv6Prefix() {
    return this.getNumberAttribute('framed_ipv6_prefix');
  }
  public set framedIpv6Prefix(value: number) {
    this._framedIpv6Prefix = value;
  }
  public resetFramedIpv6Prefix() {
    this._framedIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framedIpv6PrefixInput() {
    return this._framedIpv6Prefix;
  }

  // insert_if_not_existing - computed: false, optional: true, required: false
  private _insertIfNotExisting?: number; 
  public get insertIfNotExisting() {
    return this.getNumberAttribute('insert_if_not_existing');
  }
  public set insertIfNotExisting(value: number) {
    this._insertIfNotExisting = value;
  }
  public resetInsertIfNotExisting() {
    this._insertIfNotExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertIfNotExistingInput() {
    return this._insertIfNotExisting;
  }

  // no_quote - computed: false, optional: true, required: false
  private _noQuote?: number; 
  public get noQuote() {
    return this.getNumberAttribute('no_quote');
  }
  public set noQuote(value: number) {
    this._noQuote = value;
  }
  public resetNoQuote() {
    this._noQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQuoteInput() {
    return this._noQuote;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // zero_in_custom_attr - computed: false, optional: true, required: false
  private _zeroInCustomAttr?: number; 
  public get zeroInCustomAttr() {
    return this.getNumberAttribute('zero_in_custom_attr');
  }
  public set zeroInCustomAttr(value: number) {
    this._zeroInCustomAttr = value;
  }
  public resetZeroInCustomAttr() {
    this._zeroInCustomAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInCustomAttrInput() {
    return this._zeroInCustomAttr;
  }

  // attr_cfg - computed: false, optional: true, required: false
  private _attrCfg = new FwTemplateLoggingIncludeRadiusAttributeAttrCfgList(this, "attr_cfg", false);
  public get attrCfg() {
    return this._attrCfg;
  }
  public putAttrCfg(value: FwTemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable) {
    this._attrCfg.internalValue = value;
  }
  public resetAttrCfg() {
    this._attrCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrCfgInput() {
    return this._attrCfg.internalValue;
  }
}
export interface FwTemplateLoggingLog {
  /**
  * 'host': Log the HTTP Host Header; 'url': Log the HTTP Request URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#http_requests FwTemplateLogging#http_requests}
  */
  readonly httpRequests?: string;
}

export function fwTemplateLoggingLogToTerraform(struct?: FwTemplateLoggingLogOutputReference | FwTemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_requests: cdktf.stringToTerraform(struct!.httpRequests),
  }
}


export function fwTemplateLoggingLogToHclTerraform(struct?: FwTemplateLoggingLogOutputReference | FwTemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_requests: {
      value: cdktf.stringToHclTerraform(struct!.httpRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequests = this._httpRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRequests = value.httpRequests;
    }
  }

  // http_requests - computed: false, optional: true, required: false
  private _httpRequests?: string; 
  public get httpRequests() {
    return this.getStringAttribute('http_requests');
  }
  public set httpRequests(value: string) {
    this._httpRequests = value;
  }
  public resetHttpRequests() {
    this._httpRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestsInput() {
    return this._httpRequests;
  }
}
export interface FwTemplateLoggingRuleRuleHttpRequestsDestPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#dest_port_number FwTemplateLogging#dest_port_number}
  */
  readonly destPortNumber?: number;
  /**
  * Include the byte count of HTTP Request/Response in FW session deletion logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#include_byte_count FwTemplateLogging#include_byte_count}
  */
  readonly includeByteCount?: number;
}

export function fwTemplateLoggingRuleRuleHttpRequestsDestPortToTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_port_number: cdktf.numberToTerraform(struct!.destPortNumber),
    include_byte_count: cdktf.numberToTerraform(struct!.includeByteCount),
  }
}


export function fwTemplateLoggingRuleRuleHttpRequestsDestPortToHclTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_port_number: {
      value: cdktf.numberToHclTerraform(struct!.destPortNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_byte_count: {
      value: cdktf.numberToHclTerraform(struct!.includeByteCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingRuleRuleHttpRequestsDestPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destPortNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPortNumber = this._destPortNumber;
    }
    if (this._includeByteCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeByteCount = this._includeByteCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destPortNumber = undefined;
      this._includeByteCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destPortNumber = value.destPortNumber;
      this._includeByteCount = value.includeByteCount;
    }
  }

  // dest_port_number - computed: false, optional: true, required: false
  private _destPortNumber?: number; 
  public get destPortNumber() {
    return this.getNumberAttribute('dest_port_number');
  }
  public set destPortNumber(value: number) {
    this._destPortNumber = value;
  }
  public resetDestPortNumber() {
    this._destPortNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortNumberInput() {
    return this._destPortNumber;
  }

  // include_byte_count - computed: false, optional: true, required: false
  private _includeByteCount?: number; 
  public get includeByteCount() {
    return this.getNumberAttribute('include_byte_count');
  }
  public set includeByteCount(value: number) {
    this._includeByteCount = value;
  }
  public resetIncludeByteCount() {
    this._includeByteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeByteCountInput() {
    return this._includeByteCount;
  }
}

export class FwTemplateLoggingRuleRuleHttpRequestsDestPortList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingRuleRuleHttpRequestsDestPortOutputReference {
    return new FwTemplateLoggingRuleRuleHttpRequestsDestPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingRuleRuleHttpRequests {
  /**
  * Disable http packet sequence check and don't drop out of order packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#disable_sequence_check FwTemplateLogging#disable_sequence_check}
  */
  readonly disableSequenceCheck?: number;
  /**
  * Include all configured headers despite of absence in HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#include_all_headers FwTemplateLogging#include_all_headers}
  */
  readonly includeAllHeaders?: number;
  /**
  * Log every HTTP request in an HTTP 1.1 session (Default: Log the first HTTP request in a session)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#log_every_http_request FwTemplateLogging#log_every_http_request}
  */
  readonly logEveryHttpRequest?: number;
  /**
  * Max length of URL log (Max URL length (Default: 128 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#max_url_len FwTemplateLogging#max_url_len}
  */
  readonly maxUrlLen?: number;
  /**
  * dest_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#dest_port FwTemplateLogging#dest_port}
  */
  readonly destPort?: FwTemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable;
}

export function fwTemplateLoggingRuleRuleHttpRequestsToTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsOutputReference | FwTemplateLoggingRuleRuleHttpRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_sequence_check: cdktf.numberToTerraform(struct!.disableSequenceCheck),
    include_all_headers: cdktf.numberToTerraform(struct!.includeAllHeaders),
    log_every_http_request: cdktf.numberToTerraform(struct!.logEveryHttpRequest),
    max_url_len: cdktf.numberToTerraform(struct!.maxUrlLen),
    dest_port: cdktf.listMapper(fwTemplateLoggingRuleRuleHttpRequestsDestPortToTerraform, true)(struct!.destPort),
  }
}


export function fwTemplateLoggingRuleRuleHttpRequestsToHclTerraform(struct?: FwTemplateLoggingRuleRuleHttpRequestsOutputReference | FwTemplateLoggingRuleRuleHttpRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_sequence_check: {
      value: cdktf.numberToHclTerraform(struct!.disableSequenceCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_all_headers: {
      value: cdktf.numberToHclTerraform(struct!.includeAllHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_every_http_request: {
      value: cdktf.numberToHclTerraform(struct!.logEveryHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_url_len: {
      value: cdktf.numberToHclTerraform(struct!.maxUrlLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_port: {
      value: cdktf.listMapperHcl(fwTemplateLoggingRuleRuleHttpRequestsDestPortToHclTerraform, true)(struct!.destPort),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingRuleRuleHttpRequestsDestPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingRuleRuleHttpRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingRuleRuleHttpRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSequenceCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSequenceCheck = this._disableSequenceCheck;
    }
    if (this._includeAllHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllHeaders = this._includeAllHeaders;
    }
    if (this._logEveryHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEveryHttpRequest = this._logEveryHttpRequest;
    }
    if (this._maxUrlLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlLen = this._maxUrlLen;
    }
    if (this._destPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingRuleRuleHttpRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSequenceCheck = undefined;
      this._includeAllHeaders = undefined;
      this._logEveryHttpRequest = undefined;
      this._maxUrlLen = undefined;
      this._destPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSequenceCheck = value.disableSequenceCheck;
      this._includeAllHeaders = value.includeAllHeaders;
      this._logEveryHttpRequest = value.logEveryHttpRequest;
      this._maxUrlLen = value.maxUrlLen;
      this._destPort.internalValue = value.destPort;
    }
  }

  // disable_sequence_check - computed: false, optional: true, required: false
  private _disableSequenceCheck?: number; 
  public get disableSequenceCheck() {
    return this.getNumberAttribute('disable_sequence_check');
  }
  public set disableSequenceCheck(value: number) {
    this._disableSequenceCheck = value;
  }
  public resetDisableSequenceCheck() {
    this._disableSequenceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSequenceCheckInput() {
    return this._disableSequenceCheck;
  }

  // include_all_headers - computed: false, optional: true, required: false
  private _includeAllHeaders?: number; 
  public get includeAllHeaders() {
    return this.getNumberAttribute('include_all_headers');
  }
  public set includeAllHeaders(value: number) {
    this._includeAllHeaders = value;
  }
  public resetIncludeAllHeaders() {
    this._includeAllHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllHeadersInput() {
    return this._includeAllHeaders;
  }

  // log_every_http_request - computed: false, optional: true, required: false
  private _logEveryHttpRequest?: number; 
  public get logEveryHttpRequest() {
    return this.getNumberAttribute('log_every_http_request');
  }
  public set logEveryHttpRequest(value: number) {
    this._logEveryHttpRequest = value;
  }
  public resetLogEveryHttpRequest() {
    this._logEveryHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEveryHttpRequestInput() {
    return this._logEveryHttpRequest;
  }

  // max_url_len - computed: false, optional: true, required: false
  private _maxUrlLen?: number; 
  public get maxUrlLen() {
    return this.getNumberAttribute('max_url_len');
  }
  public set maxUrlLen(value: number) {
    this._maxUrlLen = value;
  }
  public resetMaxUrlLen() {
    this._maxUrlLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlLenInput() {
    return this._maxUrlLen;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort = new FwTemplateLoggingRuleRuleHttpRequestsDestPortList(this, "dest_port", false);
  public get destPort() {
    return this._destPort;
  }
  public putDestPort(value: FwTemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable) {
    this._destPort.internalValue = value;
  }
  public resetDestPort() {
    this._destPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort.internalValue;
  }
}
export interface FwTemplateLoggingRule {
  /**
  * rule_http_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#rule_http_requests FwTemplateLogging#rule_http_requests}
  */
  readonly ruleHttpRequests?: FwTemplateLoggingRuleRuleHttpRequests;
}

export function fwTemplateLoggingRuleToTerraform(struct?: FwTemplateLoggingRuleOutputReference | FwTemplateLoggingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_http_requests: fwTemplateLoggingRuleRuleHttpRequestsToTerraform(struct!.ruleHttpRequests),
  }
}


export function fwTemplateLoggingRuleToHclTerraform(struct?: FwTemplateLoggingRuleOutputReference | FwTemplateLoggingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_http_requests: {
      value: fwTemplateLoggingRuleRuleHttpRequestsToHclTerraform(struct!.ruleHttpRequests),
      isBlock: true,
      type: "list",
      storageClassType: "FwTemplateLoggingRuleRuleHttpRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleHttpRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHttpRequests = this._ruleHttpRequests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleHttpRequests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleHttpRequests.internalValue = value.ruleHttpRequests;
    }
  }

  // rule_http_requests - computed: false, optional: true, required: false
  private _ruleHttpRequests = new FwTemplateLoggingRuleRuleHttpRequestsOutputReference(this, "rule_http_requests");
  public get ruleHttpRequests() {
    return this._ruleHttpRequests;
  }
  public putRuleHttpRequests(value: FwTemplateLoggingRuleRuleHttpRequests) {
    this._ruleHttpRequests.internalValue = value;
  }
  public resetRuleHttpRequests() {
    this._ruleHttpRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHttpRequestsInput() {
    return this._ruleHttpRequests.internalValue;
  }
}
export interface FwTemplateLoggingSessionPeriodicLog {
  /**
  * Logging time interval (minutes) for long lived sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#interval FwTemplateLogging#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
}

export function fwTemplateLoggingSessionPeriodicLogToTerraform(struct?: FwTemplateLoggingSessionPeriodicLogOutputReference | FwTemplateLoggingSessionPeriodicLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwTemplateLoggingSessionPeriodicLogToHclTerraform(struct?: FwTemplateLoggingSessionPeriodicLogOutputReference | FwTemplateLoggingSessionPeriodicLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTemplateLoggingSessionPeriodicLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingSessionPeriodicLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingSessionPeriodicLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._uuid = value.uuid;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
export interface FwTemplateLoggingSourceAddress {
  /**
  * Specify source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#ip FwTemplateLogging#ip}
  */
  readonly ip?: string;
  /**
  * Specify source IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#ipv6 FwTemplateLogging#ipv6}
  */
  readonly ipv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#uuid FwTemplateLogging#uuid}
  */
  readonly uuid?: string;
}

export function fwTemplateLoggingSourceAddressToTerraform(struct?: FwTemplateLoggingSourceAddressOutputReference | FwTemplateLoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwTemplateLoggingSourceAddressToHclTerraform(struct?: FwTemplateLoggingSourceAddressOutputReference | FwTemplateLoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
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

export class FwTemplateLoggingSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwTemplateLoggingSourceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTemplateLoggingSourceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._uuid = value.uuid;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging thunder_fw_template_logging}
*/
export class FwTemplateLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_template_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwTemplateLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwTemplateLogging to import
  * @param importFromId The id of the existing FwTemplateLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwTemplateLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_template_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_template_logging thunder_fw_template_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwTemplateLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: FwTemplateLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_template_logging',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._facility = config.facility;
    this._format = config.format;
    this._id = config.id;
    this._includeDestFqdn = config.includeDestFqdn;
    this._mergedStyle = config.mergedStyle;
    this._name = config.name;
    this._resolution = config.resolution;
    this._serviceGroup = config.serviceGroup;
    this._severity = config.severity;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._includeHttp.internalValue = config.includeHttp;
    this._includeRadiusAttribute.internalValue = config.includeRadiusAttribute;
    this._log.internalValue = config.log;
    this._rule.internalValue = config.rule;
    this._sessionPeriodicLog.internalValue = config.sessionPeriodicLog;
    this._sourceAddress.internalValue = config.sourceAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // include_dest_fqdn - computed: false, optional: true, required: false
  private _includeDestFqdn?: number; 
  public get includeDestFqdn() {
    return this.getNumberAttribute('include_dest_fqdn');
  }
  public set includeDestFqdn(value: number) {
    this._includeDestFqdn = value;
  }
  public resetIncludeDestFqdn() {
    this._includeDestFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDestFqdnInput() {
    return this._includeDestFqdn;
  }

  // merged_style - computed: false, optional: true, required: false
  private _mergedStyle?: number; 
  public get mergedStyle() {
    return this.getNumberAttribute('merged_style');
  }
  public set mergedStyle(value: number) {
    this._mergedStyle = value;
  }
  public resetMergedStyle() {
    this._mergedStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedStyleInput() {
    return this._mergedStyle;
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

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // include_http - computed: false, optional: true, required: false
  private _includeHttp = new FwTemplateLoggingIncludeHttpOutputReference(this, "include_http");
  public get includeHttp() {
    return this._includeHttp;
  }
  public putIncludeHttp(value: FwTemplateLoggingIncludeHttp) {
    this._includeHttp.internalValue = value;
  }
  public resetIncludeHttp() {
    this._includeHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHttpInput() {
    return this._includeHttp.internalValue;
  }

  // include_radius_attribute - computed: false, optional: true, required: false
  private _includeRadiusAttribute = new FwTemplateLoggingIncludeRadiusAttributeOutputReference(this, "include_radius_attribute");
  public get includeRadiusAttribute() {
    return this._includeRadiusAttribute;
  }
  public putIncludeRadiusAttribute(value: FwTemplateLoggingIncludeRadiusAttribute) {
    this._includeRadiusAttribute.internalValue = value;
  }
  public resetIncludeRadiusAttribute() {
    this._includeRadiusAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRadiusAttributeInput() {
    return this._includeRadiusAttribute.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new FwTemplateLoggingLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: FwTemplateLoggingLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new FwTemplateLoggingRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: FwTemplateLoggingRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // session_periodic_log - computed: false, optional: true, required: false
  private _sessionPeriodicLog = new FwTemplateLoggingSessionPeriodicLogOutputReference(this, "session_periodic_log");
  public get sessionPeriodicLog() {
    return this._sessionPeriodicLog;
  }
  public putSessionPeriodicLog(value: FwTemplateLoggingSessionPeriodicLog) {
    this._sessionPeriodicLog.internalValue = value;
  }
  public resetSessionPeriodicLog() {
    this._sessionPeriodicLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPeriodicLogInput() {
    return this._sessionPeriodicLog.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new FwTemplateLoggingSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: FwTemplateLoggingSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      facility: cdktf.stringToTerraform(this._facility),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      include_dest_fqdn: cdktf.numberToTerraform(this._includeDestFqdn),
      merged_style: cdktf.numberToTerraform(this._mergedStyle),
      name: cdktf.stringToTerraform(this._name),
      resolution: cdktf.stringToTerraform(this._resolution),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      severity: cdktf.stringToTerraform(this._severity),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      include_http: fwTemplateLoggingIncludeHttpToTerraform(this._includeHttp.internalValue),
      include_radius_attribute: fwTemplateLoggingIncludeRadiusAttributeToTerraform(this._includeRadiusAttribute.internalValue),
      log: fwTemplateLoggingLogToTerraform(this._log.internalValue),
      rule: fwTemplateLoggingRuleToTerraform(this._rule.internalValue),
      session_periodic_log: fwTemplateLoggingSessionPeriodicLogToTerraform(this._sessionPeriodicLog.internalValue),
      source_address: fwTemplateLoggingSourceAddressToTerraform(this._sourceAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      include_dest_fqdn: {
        value: cdktf.numberToHclTerraform(this._includeDestFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      merged_style: {
        value: cdktf.numberToHclTerraform(this._mergedStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      include_http: {
        value: fwTemplateLoggingIncludeHttpToHclTerraform(this._includeHttp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingIncludeHttpList",
      },
      include_radius_attribute: {
        value: fwTemplateLoggingIncludeRadiusAttributeToHclTerraform(this._includeRadiusAttribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingIncludeRadiusAttributeList",
      },
      log: {
        value: fwTemplateLoggingLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingLogList",
      },
      rule: {
        value: fwTemplateLoggingRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingRuleList",
      },
      session_periodic_log: {
        value: fwTemplateLoggingSessionPeriodicLogToHclTerraform(this._sessionPeriodicLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingSessionPeriodicLogList",
      },
      source_address: {
        value: fwTemplateLoggingSourceAddressToHclTerraform(this._sourceAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingSourceAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
