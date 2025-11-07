// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemReplacemsggroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#comment SystemReplacemsggroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#dynamic_sort_subtable SystemReplacemsggroup#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#get_all_tables SystemReplacemsggroup#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#group_type SystemReplacemsggroup#group_type}
  */
  readonly groupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#id SystemReplacemsggroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#name SystemReplacemsggroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#vdomparam SystemReplacemsggroup#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * admin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#admin SystemReplacemsggroup#admin}
  */
  readonly admin?: SystemReplacemsggroupAdmin[] | cdktf.IResolvable;
  /**
  * alertmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#alertmail SystemReplacemsggroup#alertmail}
  */
  readonly alertmail?: SystemReplacemsggroupAlertmail[] | cdktf.IResolvable;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#auth SystemReplacemsggroup#auth}
  */
  readonly auth?: SystemReplacemsggroupAuth[] | cdktf.IResolvable;
  /**
  * automation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#automation SystemReplacemsggroup#automation}
  */
  readonly automation?: SystemReplacemsggroupAutomation[] | cdktf.IResolvable;
  /**
  * custom_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#custom_message SystemReplacemsggroup#custom_message}
  */
  readonly customMessage?: SystemReplacemsggroupCustomMessage[] | cdktf.IResolvable;
  /**
  * device_detection_portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#device_detection_portal SystemReplacemsggroup#device_detection_portal}
  */
  readonly deviceDetectionPortal?: SystemReplacemsggroupDeviceDetectionPortal[] | cdktf.IResolvable;
  /**
  * ec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#ec SystemReplacemsggroup#ec}
  */
  readonly ec?: SystemReplacemsggroupEc[] | cdktf.IResolvable;
  /**
  * fortiguard_wf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#fortiguard_wf SystemReplacemsggroup#fortiguard_wf}
  */
  readonly fortiguardWf?: SystemReplacemsggroupFortiguardWf[] | cdktf.IResolvable;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#ftp SystemReplacemsggroup#ftp}
  */
  readonly ftp?: SystemReplacemsggroupFtp[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#http SystemReplacemsggroup#http}
  */
  readonly http?: SystemReplacemsggroupHttp[] | cdktf.IResolvable;
  /**
  * icap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#icap SystemReplacemsggroup#icap}
  */
  readonly icap?: SystemReplacemsggroupIcap[] | cdktf.IResolvable;
  /**
  * mail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#mail SystemReplacemsggroup#mail}
  */
  readonly mail?: SystemReplacemsggroupMail[] | cdktf.IResolvable;
  /**
  * nac_quar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#nac_quar SystemReplacemsggroup#nac_quar}
  */
  readonly nacQuar?: SystemReplacemsggroupNacQuar[] | cdktf.IResolvable;
  /**
  * nntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#nntp SystemReplacemsggroup#nntp}
  */
  readonly nntp?: SystemReplacemsggroupNntp[] | cdktf.IResolvable;
  /**
  * spam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#spam SystemReplacemsggroup#spam}
  */
  readonly spam?: SystemReplacemsggroupSpam[] | cdktf.IResolvable;
  /**
  * sslvpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#sslvpn SystemReplacemsggroup#sslvpn}
  */
  readonly sslvpn?: SystemReplacemsggroupSslvpn[] | cdktf.IResolvable;
  /**
  * traffic_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#traffic_quota SystemReplacemsggroup#traffic_quota}
  */
  readonly trafficQuota?: SystemReplacemsggroupTrafficQuota[] | cdktf.IResolvable;
  /**
  * utm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#utm SystemReplacemsggroup#utm}
  */
  readonly utm?: SystemReplacemsggroupUtm[] | cdktf.IResolvable;
  /**
  * webproxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#webproxy SystemReplacemsggroup#webproxy}
  */
  readonly webproxy?: SystemReplacemsggroupWebproxy[] | cdktf.IResolvable;
}
export interface SystemReplacemsggroupAdmin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupAdminToTerraform(struct?: SystemReplacemsggroupAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupAdminToHclTerraform(struct?: SystemReplacemsggroupAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupAdminOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupAdmin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupAdmin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupAdminList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupAdmin[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupAdminOutputReference {
    return new SystemReplacemsggroupAdminOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupAlertmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupAlertmailToTerraform(struct?: SystemReplacemsggroupAlertmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupAlertmailToHclTerraform(struct?: SystemReplacemsggroupAlertmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupAlertmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupAlertmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupAlertmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupAlertmailList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupAlertmail[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupAlertmailOutputReference {
    return new SystemReplacemsggroupAlertmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupAuthToTerraform(struct?: SystemReplacemsggroupAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupAuthToHclTerraform(struct?: SystemReplacemsggroupAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupAuthList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupAuth[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupAuthOutputReference {
    return new SystemReplacemsggroupAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupAutomation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupAutomationToTerraform(struct?: SystemReplacemsggroupAutomation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupAutomationToHclTerraform(struct?: SystemReplacemsggroupAutomation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupAutomationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupAutomation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupAutomation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupAutomationList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupAutomation[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupAutomationOutputReference {
    return new SystemReplacemsggroupAutomationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupCustomMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupCustomMessageToTerraform(struct?: SystemReplacemsggroupCustomMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupCustomMessageToHclTerraform(struct?: SystemReplacemsggroupCustomMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupCustomMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupCustomMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupCustomMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupCustomMessageList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupCustomMessage[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupCustomMessageOutputReference {
    return new SystemReplacemsggroupCustomMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupDeviceDetectionPortal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupDeviceDetectionPortalToTerraform(struct?: SystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupDeviceDetectionPortalToHclTerraform(struct?: SystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupDeviceDetectionPortalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
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

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupDeviceDetectionPortalList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupDeviceDetectionPortal[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupDeviceDetectionPortalOutputReference {
    return new SystemReplacemsggroupDeviceDetectionPortalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupEc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupEcToTerraform(struct?: SystemReplacemsggroupEc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupEcToHclTerraform(struct?: SystemReplacemsggroupEc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupEcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupEc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupEc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
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

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupEcList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupEc[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupEcOutputReference {
    return new SystemReplacemsggroupEcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupFortiguardWf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupFortiguardWfToTerraform(struct?: SystemReplacemsggroupFortiguardWf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupFortiguardWfToHclTerraform(struct?: SystemReplacemsggroupFortiguardWf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupFortiguardWfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupFortiguardWf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupFortiguardWf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupFortiguardWfList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupFortiguardWf[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupFortiguardWfOutputReference {
    return new SystemReplacemsggroupFortiguardWfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupFtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupFtpToTerraform(struct?: SystemReplacemsggroupFtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupFtpToHclTerraform(struct?: SystemReplacemsggroupFtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupFtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupFtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupFtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupFtpList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupFtp[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupFtpOutputReference {
    return new SystemReplacemsggroupFtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupHttpToTerraform(struct?: SystemReplacemsggroupHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupHttpToHclTerraform(struct?: SystemReplacemsggroupHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupHttpList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupHttp[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupHttpOutputReference {
    return new SystemReplacemsggroupHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupIcap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupIcapToTerraform(struct?: SystemReplacemsggroupIcap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupIcapToHclTerraform(struct?: SystemReplacemsggroupIcap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupIcapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupIcap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupIcap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupIcapList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupIcap[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupIcapOutputReference {
    return new SystemReplacemsggroupIcapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupMail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupMailToTerraform(struct?: SystemReplacemsggroupMail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupMailToHclTerraform(struct?: SystemReplacemsggroupMail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupMailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupMail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupMail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupMailList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupMail[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupMailOutputReference {
    return new SystemReplacemsggroupMailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupNacQuar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupNacQuarToTerraform(struct?: SystemReplacemsggroupNacQuar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupNacQuarToHclTerraform(struct?: SystemReplacemsggroupNacQuar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupNacQuarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupNacQuar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupNacQuar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupNacQuarList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupNacQuar[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupNacQuarOutputReference {
    return new SystemReplacemsggroupNacQuarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupNntp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupNntpToTerraform(struct?: SystemReplacemsggroupNntp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupNntpToHclTerraform(struct?: SystemReplacemsggroupNntp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupNntpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupNntp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupNntp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
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

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupNntpList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupNntp[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupNntpOutputReference {
    return new SystemReplacemsggroupNntpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupSpam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupSpamToTerraform(struct?: SystemReplacemsggroupSpam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupSpamToHclTerraform(struct?: SystemReplacemsggroupSpam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupSpamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupSpam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupSpam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupSpamList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupSpam[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupSpamOutputReference {
    return new SystemReplacemsggroupSpamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupSslvpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupSslvpnToTerraform(struct?: SystemReplacemsggroupSslvpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupSslvpnToHclTerraform(struct?: SystemReplacemsggroupSslvpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupSslvpnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupSslvpn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupSslvpn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupSslvpnList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupSslvpn[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupSslvpnOutputReference {
    return new SystemReplacemsggroupSslvpnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupTrafficQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupTrafficQuotaToTerraform(struct?: SystemReplacemsggroupTrafficQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupTrafficQuotaToHclTerraform(struct?: SystemReplacemsggroupTrafficQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupTrafficQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupTrafficQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupTrafficQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupTrafficQuotaList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupTrafficQuota[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupTrafficQuotaOutputReference {
    return new SystemReplacemsggroupTrafficQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupUtm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupUtmToTerraform(struct?: SystemReplacemsggroupUtm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupUtmToHclTerraform(struct?: SystemReplacemsggroupUtm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupUtmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupUtm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupUtm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupUtmList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupUtm[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupUtmOutputReference {
    return new SystemReplacemsggroupUtmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemReplacemsggroupWebproxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#buffer SystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#format SystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#header SystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#msg_type SystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function systemReplacemsggroupWebproxyToTerraform(struct?: SystemReplacemsggroupWebproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function systemReplacemsggroupWebproxyToHclTerraform(struct?: SystemReplacemsggroupWebproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemReplacemsggroupWebproxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemReplacemsggroupWebproxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReplacemsggroupWebproxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._msgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._format = value.format;
      this._header = value.header;
      this._msgType = value.msgType;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // format - computed: true, optional: true, required: false
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

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }
}

export class SystemReplacemsggroupWebproxyList extends cdktf.ComplexList {
  public internalValue? : SystemReplacemsggroupWebproxy[] | cdktf.IResolvable

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
  public get(index: number): SystemReplacemsggroupWebproxyOutputReference {
    return new SystemReplacemsggroupWebproxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup fortios_system_replacemsggroup}
*/
export class SystemReplacemsggroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_replacemsggroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemReplacemsggroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemReplacemsggroup to import
  * @param importFromId The id of the existing SystemReplacemsggroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemReplacemsggroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_replacemsggroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_replacemsggroup fortios_system_replacemsggroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemReplacemsggroupConfig
  */
  public constructor(scope: Construct, id: string, config: SystemReplacemsggroupConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_replacemsggroup',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._groupType = config.groupType;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._admin.internalValue = config.admin;
    this._alertmail.internalValue = config.alertmail;
    this._auth.internalValue = config.auth;
    this._automation.internalValue = config.automation;
    this._customMessage.internalValue = config.customMessage;
    this._deviceDetectionPortal.internalValue = config.deviceDetectionPortal;
    this._ec.internalValue = config.ec;
    this._fortiguardWf.internalValue = config.fortiguardWf;
    this._ftp.internalValue = config.ftp;
    this._http.internalValue = config.http;
    this._icap.internalValue = config.icap;
    this._mail.internalValue = config.mail;
    this._nacQuar.internalValue = config.nacQuar;
    this._nntp.internalValue = config.nntp;
    this._spam.internalValue = config.spam;
    this._sslvpn.internalValue = config.sslvpn;
    this._trafficQuota.internalValue = config.trafficQuota;
    this._utm.internalValue = config.utm;
    this._webproxy.internalValue = config.webproxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // group_type - computed: false, optional: false, required: true
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // name - computed: true, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // admin - computed: false, optional: true, required: false
  private _admin = new SystemReplacemsggroupAdminList(this, "admin", false);
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: SystemReplacemsggroupAdmin[] | cdktf.IResolvable) {
    this._admin.internalValue = value;
  }
  public resetAdmin() {
    this._admin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // alertmail - computed: false, optional: true, required: false
  private _alertmail = new SystemReplacemsggroupAlertmailList(this, "alertmail", false);
  public get alertmail() {
    return this._alertmail;
  }
  public putAlertmail(value: SystemReplacemsggroupAlertmail[] | cdktf.IResolvable) {
    this._alertmail.internalValue = value;
  }
  public resetAlertmail() {
    this._alertmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmailInput() {
    return this._alertmail.internalValue;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new SystemReplacemsggroupAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: SystemReplacemsggroupAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // automation - computed: false, optional: true, required: false
  private _automation = new SystemReplacemsggroupAutomationList(this, "automation", false);
  public get automation() {
    return this._automation;
  }
  public putAutomation(value: SystemReplacemsggroupAutomation[] | cdktf.IResolvable) {
    this._automation.internalValue = value;
  }
  public resetAutomation() {
    this._automation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationInput() {
    return this._automation.internalValue;
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage = new SystemReplacemsggroupCustomMessageList(this, "custom_message", false);
  public get customMessage() {
    return this._customMessage;
  }
  public putCustomMessage(value: SystemReplacemsggroupCustomMessage[] | cdktf.IResolvable) {
    this._customMessage.internalValue = value;
  }
  public resetCustomMessage() {
    this._customMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage.internalValue;
  }

  // device_detection_portal - computed: false, optional: true, required: false
  private _deviceDetectionPortal = new SystemReplacemsggroupDeviceDetectionPortalList(this, "device_detection_portal", false);
  public get deviceDetectionPortal() {
    return this._deviceDetectionPortal;
  }
  public putDeviceDetectionPortal(value: SystemReplacemsggroupDeviceDetectionPortal[] | cdktf.IResolvable) {
    this._deviceDetectionPortal.internalValue = value;
  }
  public resetDeviceDetectionPortal() {
    this._deviceDetectionPortal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDetectionPortalInput() {
    return this._deviceDetectionPortal.internalValue;
  }

  // ec - computed: false, optional: true, required: false
  private _ec = new SystemReplacemsggroupEcList(this, "ec", false);
  public get ec() {
    return this._ec;
  }
  public putEc(value: SystemReplacemsggroupEc[] | cdktf.IResolvable) {
    this._ec.internalValue = value;
  }
  public resetEc() {
    this._ec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecInput() {
    return this._ec.internalValue;
  }

  // fortiguard_wf - computed: false, optional: true, required: false
  private _fortiguardWf = new SystemReplacemsggroupFortiguardWfList(this, "fortiguard_wf", false);
  public get fortiguardWf() {
    return this._fortiguardWf;
  }
  public putFortiguardWf(value: SystemReplacemsggroupFortiguardWf[] | cdktf.IResolvable) {
    this._fortiguardWf.internalValue = value;
  }
  public resetFortiguardWf() {
    this._fortiguardWf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardWfInput() {
    return this._fortiguardWf.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new SystemReplacemsggroupFtpList(this, "ftp", false);
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: SystemReplacemsggroupFtp[] | cdktf.IResolvable) {
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
  private _http = new SystemReplacemsggroupHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: SystemReplacemsggroupHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // icap - computed: false, optional: true, required: false
  private _icap = new SystemReplacemsggroupIcapList(this, "icap", false);
  public get icap() {
    return this._icap;
  }
  public putIcap(value: SystemReplacemsggroupIcap[] | cdktf.IResolvable) {
    this._icap.internalValue = value;
  }
  public resetIcap() {
    this._icap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapInput() {
    return this._icap.internalValue;
  }

  // mail - computed: false, optional: true, required: false
  private _mail = new SystemReplacemsggroupMailList(this, "mail", false);
  public get mail() {
    return this._mail;
  }
  public putMail(value: SystemReplacemsggroupMail[] | cdktf.IResolvable) {
    this._mail.internalValue = value;
  }
  public resetMail() {
    this._mail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailInput() {
    return this._mail.internalValue;
  }

  // nac_quar - computed: false, optional: true, required: false
  private _nacQuar = new SystemReplacemsggroupNacQuarList(this, "nac_quar", false);
  public get nacQuar() {
    return this._nacQuar;
  }
  public putNacQuar(value: SystemReplacemsggroupNacQuar[] | cdktf.IResolvable) {
    this._nacQuar.internalValue = value;
  }
  public resetNacQuar() {
    this._nacQuar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacQuarInput() {
    return this._nacQuar.internalValue;
  }

  // nntp - computed: false, optional: true, required: false
  private _nntp = new SystemReplacemsggroupNntpList(this, "nntp", false);
  public get nntp() {
    return this._nntp;
  }
  public putNntp(value: SystemReplacemsggroupNntp[] | cdktf.IResolvable) {
    this._nntp.internalValue = value;
  }
  public resetNntp() {
    this._nntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nntpInput() {
    return this._nntp.internalValue;
  }

  // spam - computed: false, optional: true, required: false
  private _spam = new SystemReplacemsggroupSpamList(this, "spam", false);
  public get spam() {
    return this._spam;
  }
  public putSpam(value: SystemReplacemsggroupSpam[] | cdktf.IResolvable) {
    this._spam.internalValue = value;
  }
  public resetSpam() {
    this._spam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamInput() {
    return this._spam.internalValue;
  }

  // sslvpn - computed: false, optional: true, required: false
  private _sslvpn = new SystemReplacemsggroupSslvpnList(this, "sslvpn", false);
  public get sslvpn() {
    return this._sslvpn;
  }
  public putSslvpn(value: SystemReplacemsggroupSslvpn[] | cdktf.IResolvable) {
    this._sslvpn.internalValue = value;
  }
  public resetSslvpn() {
    this._sslvpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnInput() {
    return this._sslvpn.internalValue;
  }

  // traffic_quota - computed: false, optional: true, required: false
  private _trafficQuota = new SystemReplacemsggroupTrafficQuotaList(this, "traffic_quota", false);
  public get trafficQuota() {
    return this._trafficQuota;
  }
  public putTrafficQuota(value: SystemReplacemsggroupTrafficQuota[] | cdktf.IResolvable) {
    this._trafficQuota.internalValue = value;
  }
  public resetTrafficQuota() {
    this._trafficQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficQuotaInput() {
    return this._trafficQuota.internalValue;
  }

  // utm - computed: false, optional: true, required: false
  private _utm = new SystemReplacemsggroupUtmList(this, "utm", false);
  public get utm() {
    return this._utm;
  }
  public putUtm(value: SystemReplacemsggroupUtm[] | cdktf.IResolvable) {
    this._utm.internalValue = value;
  }
  public resetUtm() {
    this._utm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmInput() {
    return this._utm.internalValue;
  }

  // webproxy - computed: false, optional: true, required: false
  private _webproxy = new SystemReplacemsggroupWebproxyList(this, "webproxy", false);
  public get webproxy() {
    return this._webproxy;
  }
  public putWebproxy(value: SystemReplacemsggroupWebproxy[] | cdktf.IResolvable) {
    this._webproxy.internalValue = value;
  }
  public resetWebproxy() {
    this._webproxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webproxyInput() {
    return this._webproxy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      admin: cdktf.listMapper(systemReplacemsggroupAdminToTerraform, true)(this._admin.internalValue),
      alertmail: cdktf.listMapper(systemReplacemsggroupAlertmailToTerraform, true)(this._alertmail.internalValue),
      auth: cdktf.listMapper(systemReplacemsggroupAuthToTerraform, true)(this._auth.internalValue),
      automation: cdktf.listMapper(systemReplacemsggroupAutomationToTerraform, true)(this._automation.internalValue),
      custom_message: cdktf.listMapper(systemReplacemsggroupCustomMessageToTerraform, true)(this._customMessage.internalValue),
      device_detection_portal: cdktf.listMapper(systemReplacemsggroupDeviceDetectionPortalToTerraform, true)(this._deviceDetectionPortal.internalValue),
      ec: cdktf.listMapper(systemReplacemsggroupEcToTerraform, true)(this._ec.internalValue),
      fortiguard_wf: cdktf.listMapper(systemReplacemsggroupFortiguardWfToTerraform, true)(this._fortiguardWf.internalValue),
      ftp: cdktf.listMapper(systemReplacemsggroupFtpToTerraform, true)(this._ftp.internalValue),
      http: cdktf.listMapper(systemReplacemsggroupHttpToTerraform, true)(this._http.internalValue),
      icap: cdktf.listMapper(systemReplacemsggroupIcapToTerraform, true)(this._icap.internalValue),
      mail: cdktf.listMapper(systemReplacemsggroupMailToTerraform, true)(this._mail.internalValue),
      nac_quar: cdktf.listMapper(systemReplacemsggroupNacQuarToTerraform, true)(this._nacQuar.internalValue),
      nntp: cdktf.listMapper(systemReplacemsggroupNntpToTerraform, true)(this._nntp.internalValue),
      spam: cdktf.listMapper(systemReplacemsggroupSpamToTerraform, true)(this._spam.internalValue),
      sslvpn: cdktf.listMapper(systemReplacemsggroupSslvpnToTerraform, true)(this._sslvpn.internalValue),
      traffic_quota: cdktf.listMapper(systemReplacemsggroupTrafficQuotaToTerraform, true)(this._trafficQuota.internalValue),
      utm: cdktf.listMapper(systemReplacemsggroupUtmToTerraform, true)(this._utm.internalValue),
      webproxy: cdktf.listMapper(systemReplacemsggroupWebproxyToTerraform, true)(this._webproxy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin: {
        value: cdktf.listMapperHcl(systemReplacemsggroupAdminToHclTerraform, true)(this._admin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupAdminList",
      },
      alertmail: {
        value: cdktf.listMapperHcl(systemReplacemsggroupAlertmailToHclTerraform, true)(this._alertmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupAlertmailList",
      },
      auth: {
        value: cdktf.listMapperHcl(systemReplacemsggroupAuthToHclTerraform, true)(this._auth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupAuthList",
      },
      automation: {
        value: cdktf.listMapperHcl(systemReplacemsggroupAutomationToHclTerraform, true)(this._automation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupAutomationList",
      },
      custom_message: {
        value: cdktf.listMapperHcl(systemReplacemsggroupCustomMessageToHclTerraform, true)(this._customMessage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupCustomMessageList",
      },
      device_detection_portal: {
        value: cdktf.listMapperHcl(systemReplacemsggroupDeviceDetectionPortalToHclTerraform, true)(this._deviceDetectionPortal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupDeviceDetectionPortalList",
      },
      ec: {
        value: cdktf.listMapperHcl(systemReplacemsggroupEcToHclTerraform, true)(this._ec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupEcList",
      },
      fortiguard_wf: {
        value: cdktf.listMapperHcl(systemReplacemsggroupFortiguardWfToHclTerraform, true)(this._fortiguardWf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupFortiguardWfList",
      },
      ftp: {
        value: cdktf.listMapperHcl(systemReplacemsggroupFtpToHclTerraform, true)(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupFtpList",
      },
      http: {
        value: cdktf.listMapperHcl(systemReplacemsggroupHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupHttpList",
      },
      icap: {
        value: cdktf.listMapperHcl(systemReplacemsggroupIcapToHclTerraform, true)(this._icap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupIcapList",
      },
      mail: {
        value: cdktf.listMapperHcl(systemReplacemsggroupMailToHclTerraform, true)(this._mail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupMailList",
      },
      nac_quar: {
        value: cdktf.listMapperHcl(systemReplacemsggroupNacQuarToHclTerraform, true)(this._nacQuar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupNacQuarList",
      },
      nntp: {
        value: cdktf.listMapperHcl(systemReplacemsggroupNntpToHclTerraform, true)(this._nntp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupNntpList",
      },
      spam: {
        value: cdktf.listMapperHcl(systemReplacemsggroupSpamToHclTerraform, true)(this._spam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupSpamList",
      },
      sslvpn: {
        value: cdktf.listMapperHcl(systemReplacemsggroupSslvpnToHclTerraform, true)(this._sslvpn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupSslvpnList",
      },
      traffic_quota: {
        value: cdktf.listMapperHcl(systemReplacemsggroupTrafficQuotaToHclTerraform, true)(this._trafficQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupTrafficQuotaList",
      },
      utm: {
        value: cdktf.listMapperHcl(systemReplacemsggroupUtmToHclTerraform, true)(this._utm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupUtmList",
      },
      webproxy: {
        value: cdktf.listMapperHcl(systemReplacemsggroupWebproxyToHclTerraform, true)(this._webproxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemReplacemsggroupWebproxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
