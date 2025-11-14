// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemReplacemsggroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#adom ObjectSystemReplacemsggroup#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#comment ObjectSystemReplacemsggroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#dynamic_sort_subtable ObjectSystemReplacemsggroup#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#group_type ObjectSystemReplacemsggroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#id ObjectSystemReplacemsggroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#name ObjectSystemReplacemsggroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#scopetype ObjectSystemReplacemsggroup#scopetype}
  */
  readonly scopetype?: string;
  /**
  * admin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#admin ObjectSystemReplacemsggroup#admin}
  */
  readonly admin?: ObjectSystemReplacemsggroupAdmin[] | cdktf.IResolvable;
  /**
  * alertmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#alertmail ObjectSystemReplacemsggroup#alertmail}
  */
  readonly alertmail?: ObjectSystemReplacemsggroupAlertmail[] | cdktf.IResolvable;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#auth ObjectSystemReplacemsggroup#auth}
  */
  readonly auth?: ObjectSystemReplacemsggroupAuth[] | cdktf.IResolvable;
  /**
  * automation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#automation ObjectSystemReplacemsggroup#automation}
  */
  readonly automation?: ObjectSystemReplacemsggroupAutomation[] | cdktf.IResolvable;
  /**
  * custom_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#custom_message ObjectSystemReplacemsggroup#custom_message}
  */
  readonly customMessage?: ObjectSystemReplacemsggroupCustomMessage[] | cdktf.IResolvable;
  /**
  * device_detection_portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#device_detection_portal ObjectSystemReplacemsggroup#device_detection_portal}
  */
  readonly deviceDetectionPortal?: ObjectSystemReplacemsggroupDeviceDetectionPortal[] | cdktf.IResolvable;
  /**
  * ec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#ec ObjectSystemReplacemsggroup#ec}
  */
  readonly ec?: ObjectSystemReplacemsggroupEc[] | cdktf.IResolvable;
  /**
  * fortiguard_wf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#fortiguard_wf ObjectSystemReplacemsggroup#fortiguard_wf}
  */
  readonly fortiguardWf?: ObjectSystemReplacemsggroupFortiguardWf[] | cdktf.IResolvable;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#ftp ObjectSystemReplacemsggroup#ftp}
  */
  readonly ftp?: ObjectSystemReplacemsggroupFtp[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#http ObjectSystemReplacemsggroup#http}
  */
  readonly http?: ObjectSystemReplacemsggroupHttp[] | cdktf.IResolvable;
  /**
  * icap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#icap ObjectSystemReplacemsggroup#icap}
  */
  readonly icap?: ObjectSystemReplacemsggroupIcap[] | cdktf.IResolvable;
  /**
  * mail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#mail ObjectSystemReplacemsggroup#mail}
  */
  readonly mail?: ObjectSystemReplacemsggroupMail[] | cdktf.IResolvable;
  /**
  * mm1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#mm1 ObjectSystemReplacemsggroup#mm1}
  */
  readonly mm1?: ObjectSystemReplacemsggroupMm1[] | cdktf.IResolvable;
  /**
  * mm3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#mm3 ObjectSystemReplacemsggroup#mm3}
  */
  readonly mm3?: ObjectSystemReplacemsggroupMm3[] | cdktf.IResolvable;
  /**
  * mm4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#mm4 ObjectSystemReplacemsggroup#mm4}
  */
  readonly mm4?: ObjectSystemReplacemsggroupMm4[] | cdktf.IResolvable;
  /**
  * mm7 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#mm7 ObjectSystemReplacemsggroup#mm7}
  */
  readonly mm7?: ObjectSystemReplacemsggroupMm7[] | cdktf.IResolvable;
  /**
  * mms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#mms ObjectSystemReplacemsggroup#mms}
  */
  readonly mms?: ObjectSystemReplacemsggroupMms[] | cdktf.IResolvable;
  /**
  * nac_quar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#nac_quar ObjectSystemReplacemsggroup#nac_quar}
  */
  readonly nacQuar?: ObjectSystemReplacemsggroupNacQuar[] | cdktf.IResolvable;
  /**
  * nntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#nntp ObjectSystemReplacemsggroup#nntp}
  */
  readonly nntp?: ObjectSystemReplacemsggroupNntp[] | cdktf.IResolvable;
  /**
  * spam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#spam ObjectSystemReplacemsggroup#spam}
  */
  readonly spam?: ObjectSystemReplacemsggroupSpam[] | cdktf.IResolvable;
  /**
  * sslvpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#sslvpn ObjectSystemReplacemsggroup#sslvpn}
  */
  readonly sslvpn?: ObjectSystemReplacemsggroupSslvpn[] | cdktf.IResolvable;
  /**
  * traffic_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#traffic_quota ObjectSystemReplacemsggroup#traffic_quota}
  */
  readonly trafficQuota?: ObjectSystemReplacemsggroupTrafficQuota[] | cdktf.IResolvable;
  /**
  * utm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#utm ObjectSystemReplacemsggroup#utm}
  */
  readonly utm?: ObjectSystemReplacemsggroupUtm[] | cdktf.IResolvable;
  /**
  * webproxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#webproxy ObjectSystemReplacemsggroup#webproxy}
  */
  readonly webproxy?: ObjectSystemReplacemsggroupWebproxy[] | cdktf.IResolvable;
}
export interface ObjectSystemReplacemsggroupAdmin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupAdminToTerraform(struct?: ObjectSystemReplacemsggroupAdmin | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupAdminToHclTerraform(struct?: ObjectSystemReplacemsggroupAdmin | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupAdminOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupAdmin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupAdmin | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupAdminList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupAdmin[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupAdminOutputReference {
    return new ObjectSystemReplacemsggroupAdminOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupAlertmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#id ObjectSystemReplacemsggroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupAlertmailToTerraform(struct?: ObjectSystemReplacemsggroupAlertmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    id: cdktf.numberToTerraform(struct!.id),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function objectSystemReplacemsggroupAlertmailToHclTerraform(struct?: ObjectSystemReplacemsggroupAlertmail | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectSystemReplacemsggroupAlertmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupAlertmail | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemReplacemsggroupAlertmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._id = undefined;
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
      this._id = value.id;
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class ObjectSystemReplacemsggroupAlertmailList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupAlertmail[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupAlertmailOutputReference {
    return new ObjectSystemReplacemsggroupAlertmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupAuthToTerraform(struct?: ObjectSystemReplacemsggroupAuth | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupAuthToHclTerraform(struct?: ObjectSystemReplacemsggroupAuth | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupAuth | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupAuthList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupAuth[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupAuthOutputReference {
    return new ObjectSystemReplacemsggroupAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupAutomation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupAutomationToTerraform(struct?: ObjectSystemReplacemsggroupAutomation | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupAutomationToHclTerraform(struct?: ObjectSystemReplacemsggroupAutomation | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupAutomationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupAutomation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupAutomation | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupAutomationList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupAutomation[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupAutomationOutputReference {
    return new ObjectSystemReplacemsggroupAutomationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupCustomMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupCustomMessageToTerraform(struct?: ObjectSystemReplacemsggroupCustomMessage | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupCustomMessageToHclTerraform(struct?: ObjectSystemReplacemsggroupCustomMessage | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupCustomMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupCustomMessage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupCustomMessage | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupCustomMessageList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupCustomMessage[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupCustomMessageOutputReference {
    return new ObjectSystemReplacemsggroupCustomMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupDeviceDetectionPortal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupDeviceDetectionPortalToTerraform(struct?: ObjectSystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupDeviceDetectionPortalToHclTerraform(struct?: ObjectSystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupDeviceDetectionPortalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupDeviceDetectionPortal | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupDeviceDetectionPortalList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupDeviceDetectionPortal[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupDeviceDetectionPortalOutputReference {
    return new ObjectSystemReplacemsggroupDeviceDetectionPortalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupEc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupEcToTerraform(struct?: ObjectSystemReplacemsggroupEc | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupEcToHclTerraform(struct?: ObjectSystemReplacemsggroupEc | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupEcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupEc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupEc | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupEcList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupEc[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupEcOutputReference {
    return new ObjectSystemReplacemsggroupEcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupFortiguardWf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupFortiguardWfToTerraform(struct?: ObjectSystemReplacemsggroupFortiguardWf | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupFortiguardWfToHclTerraform(struct?: ObjectSystemReplacemsggroupFortiguardWf | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupFortiguardWfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupFortiguardWf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupFortiguardWf | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupFortiguardWfList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupFortiguardWf[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupFortiguardWfOutputReference {
    return new ObjectSystemReplacemsggroupFortiguardWfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupFtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupFtpToTerraform(struct?: ObjectSystemReplacemsggroupFtp | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupFtpToHclTerraform(struct?: ObjectSystemReplacemsggroupFtp | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupFtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupFtp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupFtp | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupFtpList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupFtp[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupFtpOutputReference {
    return new ObjectSystemReplacemsggroupFtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupHttpToTerraform(struct?: ObjectSystemReplacemsggroupHttp | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupHttpToHclTerraform(struct?: ObjectSystemReplacemsggroupHttp | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupHttp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupHttp | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupHttpList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupHttp[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupHttpOutputReference {
    return new ObjectSystemReplacemsggroupHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupIcap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupIcapToTerraform(struct?: ObjectSystemReplacemsggroupIcap | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupIcapToHclTerraform(struct?: ObjectSystemReplacemsggroupIcap | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupIcapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupIcap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupIcap | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupIcapList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupIcap[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupIcapOutputReference {
    return new ObjectSystemReplacemsggroupIcapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupMail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupMailToTerraform(struct?: ObjectSystemReplacemsggroupMail | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupMailToHclTerraform(struct?: ObjectSystemReplacemsggroupMail | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupMailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupMail | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupMail | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupMailList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupMail[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupMailOutputReference {
    return new ObjectSystemReplacemsggroupMailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupMm1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#add_smil ObjectSystemReplacemsggroup#add_smil}
  */
  readonly addSmil?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#charset ObjectSystemReplacemsggroup#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#class ObjectSystemReplacemsggroup#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from ObjectSystemReplacemsggroup#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from_sender ObjectSystemReplacemsggroup#from_sender}
  */
  readonly fromSender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#image ObjectSystemReplacemsggroup#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#message ObjectSystemReplacemsggroup#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#priority ObjectSystemReplacemsggroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#rsp_status ObjectSystemReplacemsggroup#rsp_status}
  */
  readonly rspStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#rsp_text ObjectSystemReplacemsggroup#rsp_text}
  */
  readonly rspText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#sender_visibility ObjectSystemReplacemsggroup#sender_visibility}
  */
  readonly senderVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#smil_part ObjectSystemReplacemsggroup#smil_part}
  */
  readonly smilPart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#subject ObjectSystemReplacemsggroup#subject}
  */
  readonly subject?: string;
}

export function objectSystemReplacemsggroupMm1ToTerraform(struct?: ObjectSystemReplacemsggroupMm1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_smil: cdktf.stringToTerraform(struct!.addSmil),
    charset: cdktf.stringToTerraform(struct!.charset),
    class: cdktf.stringToTerraform(struct!.class),
    format: cdktf.stringToTerraform(struct!.format),
    from: cdktf.stringToTerraform(struct!.from),
    from_sender: cdktf.stringToTerraform(struct!.fromSender),
    header: cdktf.stringToTerraform(struct!.header),
    image: cdktf.stringToTerraform(struct!.image),
    message: cdktf.stringToTerraform(struct!.message),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
    priority: cdktf.stringToTerraform(struct!.priority),
    rsp_status: cdktf.stringToTerraform(struct!.rspStatus),
    rsp_text: cdktf.stringToTerraform(struct!.rspText),
    sender_visibility: cdktf.stringToTerraform(struct!.senderVisibility),
    smil_part: cdktf.stringToTerraform(struct!.smilPart),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function objectSystemReplacemsggroupMm1ToHclTerraform(struct?: ObjectSystemReplacemsggroupMm1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_smil: {
      value: cdktf.stringToHclTerraform(struct!.addSmil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charset: {
      value: cdktf.stringToHclTerraform(struct!.charset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
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
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_sender: {
      value: cdktf.stringToHclTerraform(struct!.fromSender),
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsp_status: {
      value: cdktf.stringToHclTerraform(struct!.rspStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsp_text: {
      value: cdktf.stringToHclTerraform(struct!.rspText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender_visibility: {
      value: cdktf.stringToHclTerraform(struct!.senderVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smil_part: {
      value: cdktf.stringToHclTerraform(struct!.smilPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemReplacemsggroupMm1OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupMm1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addSmil !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSmil = this._addSmil;
    }
    if (this._charset !== undefined) {
      hasAnyValues = true;
      internalValueResult.charset = this._charset;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._fromSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSender = this._fromSender;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rspStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspStatus = this._rspStatus;
    }
    if (this._rspText !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspText = this._rspText;
    }
    if (this._senderVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderVisibility = this._senderVisibility;
    }
    if (this._smilPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.smilPart = this._smilPart;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemReplacemsggroupMm1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addSmil = undefined;
      this._charset = undefined;
      this._class = undefined;
      this._format = undefined;
      this._from = undefined;
      this._fromSender = undefined;
      this._header = undefined;
      this._image = undefined;
      this._message = undefined;
      this._msgType = undefined;
      this._priority = undefined;
      this._rspStatus = undefined;
      this._rspText = undefined;
      this._senderVisibility = undefined;
      this._smilPart = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addSmil = value.addSmil;
      this._charset = value.charset;
      this._class = value.class;
      this._format = value.format;
      this._from = value.from;
      this._fromSender = value.fromSender;
      this._header = value.header;
      this._image = value.image;
      this._message = value.message;
      this._msgType = value.msgType;
      this._priority = value.priority;
      this._rspStatus = value.rspStatus;
      this._rspText = value.rspText;
      this._senderVisibility = value.senderVisibility;
      this._smilPart = value.smilPart;
      this._subject = value.subject;
    }
  }

  // add_smil - computed: false, optional: true, required: false
  private _addSmil?: string; 
  public get addSmil() {
    return this.getStringAttribute('add_smil');
  }
  public set addSmil(value: string) {
    this._addSmil = value;
  }
  public resetAddSmil() {
    this._addSmil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSmilInput() {
    return this._addSmil;
  }

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
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

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_sender - computed: false, optional: true, required: false
  private _fromSender?: string; 
  public get fromSender() {
    return this.getStringAttribute('from_sender');
  }
  public set fromSender(value: string) {
    this._fromSender = value;
  }
  public resetFromSender() {
    this._fromSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSenderInput() {
    return this._fromSender;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // message - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rsp_status - computed: false, optional: true, required: false
  private _rspStatus?: string; 
  public get rspStatus() {
    return this.getStringAttribute('rsp_status');
  }
  public set rspStatus(value: string) {
    this._rspStatus = value;
  }
  public resetRspStatus() {
    this._rspStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspStatusInput() {
    return this._rspStatus;
  }

  // rsp_text - computed: false, optional: true, required: false
  private _rspText?: string; 
  public get rspText() {
    return this.getStringAttribute('rsp_text');
  }
  public set rspText(value: string) {
    this._rspText = value;
  }
  public resetRspText() {
    this._rspText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspTextInput() {
    return this._rspText;
  }

  // sender_visibility - computed: false, optional: true, required: false
  private _senderVisibility?: string; 
  public get senderVisibility() {
    return this.getStringAttribute('sender_visibility');
  }
  public set senderVisibility(value: string) {
    this._senderVisibility = value;
  }
  public resetSenderVisibility() {
    this._senderVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderVisibilityInput() {
    return this._senderVisibility;
  }

  // smil_part - computed: false, optional: true, required: false
  private _smilPart?: string; 
  public get smilPart() {
    return this.getStringAttribute('smil_part');
  }
  public set smilPart(value: string) {
    this._smilPart = value;
  }
  public resetSmilPart() {
    this._smilPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smilPartInput() {
    return this._smilPart;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class ObjectSystemReplacemsggroupMm1List extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupMm1[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupMm1OutputReference {
    return new ObjectSystemReplacemsggroupMm1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupMm3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#add_html ObjectSystemReplacemsggroup#add_html}
  */
  readonly addHtml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#charset ObjectSystemReplacemsggroup#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from ObjectSystemReplacemsggroup#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from_sender ObjectSystemReplacemsggroup#from_sender}
  */
  readonly fromSender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#html_part ObjectSystemReplacemsggroup#html_part}
  */
  readonly htmlPart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#image ObjectSystemReplacemsggroup#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#message ObjectSystemReplacemsggroup#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#priority ObjectSystemReplacemsggroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#subject ObjectSystemReplacemsggroup#subject}
  */
  readonly subject?: string;
}

export function objectSystemReplacemsggroupMm3ToTerraform(struct?: ObjectSystemReplacemsggroupMm3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_html: cdktf.stringToTerraform(struct!.addHtml),
    charset: cdktf.stringToTerraform(struct!.charset),
    format: cdktf.stringToTerraform(struct!.format),
    from: cdktf.stringToTerraform(struct!.from),
    from_sender: cdktf.stringToTerraform(struct!.fromSender),
    header: cdktf.stringToTerraform(struct!.header),
    html_part: cdktf.stringToTerraform(struct!.htmlPart),
    image: cdktf.stringToTerraform(struct!.image),
    message: cdktf.stringToTerraform(struct!.message),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
    priority: cdktf.stringToTerraform(struct!.priority),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function objectSystemReplacemsggroupMm3ToHclTerraform(struct?: ObjectSystemReplacemsggroupMm3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_html: {
      value: cdktf.stringToHclTerraform(struct!.addHtml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charset: {
      value: cdktf.stringToHclTerraform(struct!.charset),
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
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_sender: {
      value: cdktf.stringToHclTerraform(struct!.fromSender),
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
    html_part: {
      value: cdktf.stringToHclTerraform(struct!.htmlPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemReplacemsggroupMm3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupMm3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHtml !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHtml = this._addHtml;
    }
    if (this._charset !== undefined) {
      hasAnyValues = true;
      internalValueResult.charset = this._charset;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._fromSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSender = this._fromSender;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._htmlPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlPart = this._htmlPart;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemReplacemsggroupMm3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHtml = undefined;
      this._charset = undefined;
      this._format = undefined;
      this._from = undefined;
      this._fromSender = undefined;
      this._header = undefined;
      this._htmlPart = undefined;
      this._image = undefined;
      this._message = undefined;
      this._msgType = undefined;
      this._priority = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHtml = value.addHtml;
      this._charset = value.charset;
      this._format = value.format;
      this._from = value.from;
      this._fromSender = value.fromSender;
      this._header = value.header;
      this._htmlPart = value.htmlPart;
      this._image = value.image;
      this._message = value.message;
      this._msgType = value.msgType;
      this._priority = value.priority;
      this._subject = value.subject;
    }
  }

  // add_html - computed: false, optional: true, required: false
  private _addHtml?: string; 
  public get addHtml() {
    return this.getStringAttribute('add_html');
  }
  public set addHtml(value: string) {
    this._addHtml = value;
  }
  public resetAddHtml() {
    this._addHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHtmlInput() {
    return this._addHtml;
  }

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
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

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_sender - computed: false, optional: true, required: false
  private _fromSender?: string; 
  public get fromSender() {
    return this.getStringAttribute('from_sender');
  }
  public set fromSender(value: string) {
    this._fromSender = value;
  }
  public resetFromSender() {
    this._fromSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSenderInput() {
    return this._fromSender;
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

  // html_part - computed: false, optional: true, required: false
  private _htmlPart?: string; 
  public get htmlPart() {
    return this.getStringAttribute('html_part');
  }
  public set htmlPart(value: string) {
    this._htmlPart = value;
  }
  public resetHtmlPart() {
    this._htmlPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlPartInput() {
    return this._htmlPart;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // message - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class ObjectSystemReplacemsggroupMm3List extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupMm3[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupMm3OutputReference {
    return new ObjectSystemReplacemsggroupMm3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupMm4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#add_smil ObjectSystemReplacemsggroup#add_smil}
  */
  readonly addSmil?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#charset ObjectSystemReplacemsggroup#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#class ObjectSystemReplacemsggroup#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#domain ObjectSystemReplacemsggroup#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from ObjectSystemReplacemsggroup#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from_sender ObjectSystemReplacemsggroup#from_sender}
  */
  readonly fromSender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#image ObjectSystemReplacemsggroup#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#message ObjectSystemReplacemsggroup#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#priority ObjectSystemReplacemsggroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#rsp_status ObjectSystemReplacemsggroup#rsp_status}
  */
  readonly rspStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#smil_part ObjectSystemReplacemsggroup#smil_part}
  */
  readonly smilPart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#subject ObjectSystemReplacemsggroup#subject}
  */
  readonly subject?: string;
}

export function objectSystemReplacemsggroupMm4ToTerraform(struct?: ObjectSystemReplacemsggroupMm4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_smil: cdktf.stringToTerraform(struct!.addSmil),
    charset: cdktf.stringToTerraform(struct!.charset),
    class: cdktf.stringToTerraform(struct!.class),
    domain: cdktf.stringToTerraform(struct!.domain),
    format: cdktf.stringToTerraform(struct!.format),
    from: cdktf.stringToTerraform(struct!.from),
    from_sender: cdktf.stringToTerraform(struct!.fromSender),
    header: cdktf.stringToTerraform(struct!.header),
    image: cdktf.stringToTerraform(struct!.image),
    message: cdktf.stringToTerraform(struct!.message),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
    priority: cdktf.stringToTerraform(struct!.priority),
    rsp_status: cdktf.stringToTerraform(struct!.rspStatus),
    smil_part: cdktf.stringToTerraform(struct!.smilPart),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function objectSystemReplacemsggroupMm4ToHclTerraform(struct?: ObjectSystemReplacemsggroupMm4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_smil: {
      value: cdktf.stringToHclTerraform(struct!.addSmil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charset: {
      value: cdktf.stringToHclTerraform(struct!.charset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_sender: {
      value: cdktf.stringToHclTerraform(struct!.fromSender),
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsp_status: {
      value: cdktf.stringToHclTerraform(struct!.rspStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smil_part: {
      value: cdktf.stringToHclTerraform(struct!.smilPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemReplacemsggroupMm4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupMm4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addSmil !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSmil = this._addSmil;
    }
    if (this._charset !== undefined) {
      hasAnyValues = true;
      internalValueResult.charset = this._charset;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._fromSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSender = this._fromSender;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rspStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspStatus = this._rspStatus;
    }
    if (this._smilPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.smilPart = this._smilPart;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemReplacemsggroupMm4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addSmil = undefined;
      this._charset = undefined;
      this._class = undefined;
      this._domain = undefined;
      this._format = undefined;
      this._from = undefined;
      this._fromSender = undefined;
      this._header = undefined;
      this._image = undefined;
      this._message = undefined;
      this._msgType = undefined;
      this._priority = undefined;
      this._rspStatus = undefined;
      this._smilPart = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addSmil = value.addSmil;
      this._charset = value.charset;
      this._class = value.class;
      this._domain = value.domain;
      this._format = value.format;
      this._from = value.from;
      this._fromSender = value.fromSender;
      this._header = value.header;
      this._image = value.image;
      this._message = value.message;
      this._msgType = value.msgType;
      this._priority = value.priority;
      this._rspStatus = value.rspStatus;
      this._smilPart = value.smilPart;
      this._subject = value.subject;
    }
  }

  // add_smil - computed: false, optional: true, required: false
  private _addSmil?: string; 
  public get addSmil() {
    return this.getStringAttribute('add_smil');
  }
  public set addSmil(value: string) {
    this._addSmil = value;
  }
  public resetAddSmil() {
    this._addSmil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSmilInput() {
    return this._addSmil;
  }

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_sender - computed: false, optional: true, required: false
  private _fromSender?: string; 
  public get fromSender() {
    return this.getStringAttribute('from_sender');
  }
  public set fromSender(value: string) {
    this._fromSender = value;
  }
  public resetFromSender() {
    this._fromSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSenderInput() {
    return this._fromSender;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // message - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rsp_status - computed: false, optional: true, required: false
  private _rspStatus?: string; 
  public get rspStatus() {
    return this.getStringAttribute('rsp_status');
  }
  public set rspStatus(value: string) {
    this._rspStatus = value;
  }
  public resetRspStatus() {
    this._rspStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspStatusInput() {
    return this._rspStatus;
  }

  // smil_part - computed: false, optional: true, required: false
  private _smilPart?: string; 
  public get smilPart() {
    return this.getStringAttribute('smil_part');
  }
  public set smilPart(value: string) {
    this._smilPart = value;
  }
  public resetSmilPart() {
    this._smilPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smilPartInput() {
    return this._smilPart;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class ObjectSystemReplacemsggroupMm4List extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupMm4[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupMm4OutputReference {
    return new ObjectSystemReplacemsggroupMm4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupMm7 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#add_smil ObjectSystemReplacemsggroup#add_smil}
  */
  readonly addSmil?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#addr_type ObjectSystemReplacemsggroup#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#allow_content_adaptation ObjectSystemReplacemsggroup#allow_content_adaptation}
  */
  readonly allowContentAdaptation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#charset ObjectSystemReplacemsggroup#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#class ObjectSystemReplacemsggroup#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from ObjectSystemReplacemsggroup#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#from_sender ObjectSystemReplacemsggroup#from_sender}
  */
  readonly fromSender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#image ObjectSystemReplacemsggroup#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#message ObjectSystemReplacemsggroup#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#priority ObjectSystemReplacemsggroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#rsp_status ObjectSystemReplacemsggroup#rsp_status}
  */
  readonly rspStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#smil_part ObjectSystemReplacemsggroup#smil_part}
  */
  readonly smilPart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#subject ObjectSystemReplacemsggroup#subject}
  */
  readonly subject?: string;
}

export function objectSystemReplacemsggroupMm7ToTerraform(struct?: ObjectSystemReplacemsggroupMm7 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_smil: cdktf.stringToTerraform(struct!.addSmil),
    addr_type: cdktf.stringToTerraform(struct!.addrType),
    allow_content_adaptation: cdktf.stringToTerraform(struct!.allowContentAdaptation),
    charset: cdktf.stringToTerraform(struct!.charset),
    class: cdktf.stringToTerraform(struct!.class),
    format: cdktf.stringToTerraform(struct!.format),
    from: cdktf.stringToTerraform(struct!.from),
    from_sender: cdktf.stringToTerraform(struct!.fromSender),
    header: cdktf.stringToTerraform(struct!.header),
    image: cdktf.stringToTerraform(struct!.image),
    message: cdktf.stringToTerraform(struct!.message),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
    priority: cdktf.stringToTerraform(struct!.priority),
    rsp_status: cdktf.stringToTerraform(struct!.rspStatus),
    smil_part: cdktf.stringToTerraform(struct!.smilPart),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function objectSystemReplacemsggroupMm7ToHclTerraform(struct?: ObjectSystemReplacemsggroupMm7 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_smil: {
      value: cdktf.stringToHclTerraform(struct!.addSmil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addr_type: {
      value: cdktf.stringToHclTerraform(struct!.addrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_content_adaptation: {
      value: cdktf.stringToHclTerraform(struct!.allowContentAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charset: {
      value: cdktf.stringToHclTerraform(struct!.charset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
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
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_sender: {
      value: cdktf.stringToHclTerraform(struct!.fromSender),
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsp_status: {
      value: cdktf.stringToHclTerraform(struct!.rspStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smil_part: {
      value: cdktf.stringToHclTerraform(struct!.smilPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemReplacemsggroupMm7OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupMm7 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addSmil !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSmil = this._addSmil;
    }
    if (this._addrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrType = this._addrType;
    }
    if (this._allowContentAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowContentAdaptation = this._allowContentAdaptation;
    }
    if (this._charset !== undefined) {
      hasAnyValues = true;
      internalValueResult.charset = this._charset;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._fromSender !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSender = this._fromSender;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rspStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspStatus = this._rspStatus;
    }
    if (this._smilPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.smilPart = this._smilPart;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemReplacemsggroupMm7 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addSmil = undefined;
      this._addrType = undefined;
      this._allowContentAdaptation = undefined;
      this._charset = undefined;
      this._class = undefined;
      this._format = undefined;
      this._from = undefined;
      this._fromSender = undefined;
      this._header = undefined;
      this._image = undefined;
      this._message = undefined;
      this._msgType = undefined;
      this._priority = undefined;
      this._rspStatus = undefined;
      this._smilPart = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addSmil = value.addSmil;
      this._addrType = value.addrType;
      this._allowContentAdaptation = value.allowContentAdaptation;
      this._charset = value.charset;
      this._class = value.class;
      this._format = value.format;
      this._from = value.from;
      this._fromSender = value.fromSender;
      this._header = value.header;
      this._image = value.image;
      this._message = value.message;
      this._msgType = value.msgType;
      this._priority = value.priority;
      this._rspStatus = value.rspStatus;
      this._smilPart = value.smilPart;
      this._subject = value.subject;
    }
  }

  // add_smil - computed: false, optional: true, required: false
  private _addSmil?: string; 
  public get addSmil() {
    return this.getStringAttribute('add_smil');
  }
  public set addSmil(value: string) {
    this._addSmil = value;
  }
  public resetAddSmil() {
    this._addSmil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSmilInput() {
    return this._addSmil;
  }

  // addr_type - computed: false, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // allow_content_adaptation - computed: false, optional: true, required: false
  private _allowContentAdaptation?: string; 
  public get allowContentAdaptation() {
    return this.getStringAttribute('allow_content_adaptation');
  }
  public set allowContentAdaptation(value: string) {
    this._allowContentAdaptation = value;
  }
  public resetAllowContentAdaptation() {
    this._allowContentAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowContentAdaptationInput() {
    return this._allowContentAdaptation;
  }

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
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

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_sender - computed: false, optional: true, required: false
  private _fromSender?: string; 
  public get fromSender() {
    return this.getStringAttribute('from_sender');
  }
  public set fromSender(value: string) {
    this._fromSender = value;
  }
  public resetFromSender() {
    this._fromSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSenderInput() {
    return this._fromSender;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // message - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rsp_status - computed: false, optional: true, required: false
  private _rspStatus?: string; 
  public get rspStatus() {
    return this.getStringAttribute('rsp_status');
  }
  public set rspStatus(value: string) {
    this._rspStatus = value;
  }
  public resetRspStatus() {
    this._rspStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspStatusInput() {
    return this._rspStatus;
  }

  // smil_part - computed: false, optional: true, required: false
  private _smilPart?: string; 
  public get smilPart() {
    return this.getStringAttribute('smil_part');
  }
  public set smilPart(value: string) {
    this._smilPart = value;
  }
  public resetSmilPart() {
    this._smilPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smilPartInput() {
    return this._smilPart;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class ObjectSystemReplacemsggroupMm7List extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupMm7[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupMm7OutputReference {
    return new ObjectSystemReplacemsggroupMm7OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupMms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#charset ObjectSystemReplacemsggroup#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#image ObjectSystemReplacemsggroup#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupMmsToTerraform(struct?: ObjectSystemReplacemsggroupMms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    charset: cdktf.stringToTerraform(struct!.charset),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    image: cdktf.stringToTerraform(struct!.image),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function objectSystemReplacemsggroupMmsToHclTerraform(struct?: ObjectSystemReplacemsggroupMms | cdktf.IResolvable): any {
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
    charset: {
      value: cdktf.stringToHclTerraform(struct!.charset),
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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

export class ObjectSystemReplacemsggroupMmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupMms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._charset !== undefined) {
      hasAnyValues = true;
      internalValueResult.charset = this._charset;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemReplacemsggroupMms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._charset = undefined;
      this._format = undefined;
      this._header = undefined;
      this._image = undefined;
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
      this._charset = value.charset;
      this._format = value.format;
      this._header = value.header;
      this._image = value.image;
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

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

export class ObjectSystemReplacemsggroupMmsList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupMms[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupMmsOutputReference {
    return new ObjectSystemReplacemsggroupMmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupNacQuar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#id ObjectSystemReplacemsggroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupNacQuarToTerraform(struct?: ObjectSystemReplacemsggroupNacQuar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    format: cdktf.stringToTerraform(struct!.format),
    header: cdktf.stringToTerraform(struct!.header),
    id: cdktf.numberToTerraform(struct!.id),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
  }
}


export function objectSystemReplacemsggroupNacQuarToHclTerraform(struct?: ObjectSystemReplacemsggroupNacQuar | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectSystemReplacemsggroupNacQuarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupNacQuar | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemReplacemsggroupNacQuar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._format = undefined;
      this._header = undefined;
      this._id = undefined;
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
      this._id = value.id;
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class ObjectSystemReplacemsggroupNacQuarList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupNacQuar[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupNacQuarOutputReference {
    return new ObjectSystemReplacemsggroupNacQuarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupNntp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupNntpToTerraform(struct?: ObjectSystemReplacemsggroupNntp | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupNntpToHclTerraform(struct?: ObjectSystemReplacemsggroupNntp | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupNntpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupNntp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupNntp | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupNntpList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupNntp[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupNntpOutputReference {
    return new ObjectSystemReplacemsggroupNntpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupSpam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupSpamToTerraform(struct?: ObjectSystemReplacemsggroupSpam | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupSpamToHclTerraform(struct?: ObjectSystemReplacemsggroupSpam | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupSpamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupSpam | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupSpam | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupSpamList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupSpam[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupSpamOutputReference {
    return new ObjectSystemReplacemsggroupSpamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupSslvpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupSslvpnToTerraform(struct?: ObjectSystemReplacemsggroupSslvpn | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupSslvpnToHclTerraform(struct?: ObjectSystemReplacemsggroupSslvpn | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupSslvpnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupSslvpn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupSslvpn | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupSslvpnList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupSslvpn[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupSslvpnOutputReference {
    return new ObjectSystemReplacemsggroupSslvpnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupTrafficQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupTrafficQuotaToTerraform(struct?: ObjectSystemReplacemsggroupTrafficQuota | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupTrafficQuotaToHclTerraform(struct?: ObjectSystemReplacemsggroupTrafficQuota | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupTrafficQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupTrafficQuota | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupTrafficQuota | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupTrafficQuotaList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupTrafficQuota[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupTrafficQuotaOutputReference {
    return new ObjectSystemReplacemsggroupTrafficQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupUtm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupUtmToTerraform(struct?: ObjectSystemReplacemsggroupUtm | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupUtmToHclTerraform(struct?: ObjectSystemReplacemsggroupUtm | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupUtmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupUtm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupUtm | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupUtmList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupUtm[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupUtmOutputReference {
    return new ObjectSystemReplacemsggroupUtmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemReplacemsggroupWebproxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#buffer ObjectSystemReplacemsggroup#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#format ObjectSystemReplacemsggroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#header ObjectSystemReplacemsggroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#msg_type ObjectSystemReplacemsggroup#msg_type}
  */
  readonly msgType?: string;
}

export function objectSystemReplacemsggroupWebproxyToTerraform(struct?: ObjectSystemReplacemsggroupWebproxy | cdktf.IResolvable): any {
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


export function objectSystemReplacemsggroupWebproxyToHclTerraform(struct?: ObjectSystemReplacemsggroupWebproxy | cdktf.IResolvable): any {
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

export class ObjectSystemReplacemsggroupWebproxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemReplacemsggroupWebproxy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectSystemReplacemsggroupWebproxy | cdktf.IResolvable | undefined) {
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

export class ObjectSystemReplacemsggroupWebproxyList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemReplacemsggroupWebproxy[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemReplacemsggroupWebproxyOutputReference {
    return new ObjectSystemReplacemsggroupWebproxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup fortimanager_object_system_replacemsggroup}
*/
export class ObjectSystemReplacemsggroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_replacemsggroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemReplacemsggroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemReplacemsggroup to import
  * @param importFromId The id of the existing ObjectSystemReplacemsggroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemReplacemsggroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_replacemsggroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_replacemsggroup fortimanager_object_system_replacemsggroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemReplacemsggroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemReplacemsggroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_replacemsggroup',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._groupType = config.groupType;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
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
    this._mm1.internalValue = config.mm1;
    this._mm3.internalValue = config.mm3;
    this._mm4.internalValue = config.mm4;
    this._mm7.internalValue = config.mm7;
    this._mms.internalValue = config.mms;
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

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

  // group_type - computed: true, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // admin - computed: false, optional: true, required: false
  private _admin = new ObjectSystemReplacemsggroupAdminList(this, "admin", false);
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: ObjectSystemReplacemsggroupAdmin[] | cdktf.IResolvable) {
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
  private _alertmail = new ObjectSystemReplacemsggroupAlertmailList(this, "alertmail", false);
  public get alertmail() {
    return this._alertmail;
  }
  public putAlertmail(value: ObjectSystemReplacemsggroupAlertmail[] | cdktf.IResolvable) {
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
  private _auth = new ObjectSystemReplacemsggroupAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObjectSystemReplacemsggroupAuth[] | cdktf.IResolvable) {
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
  private _automation = new ObjectSystemReplacemsggroupAutomationList(this, "automation", false);
  public get automation() {
    return this._automation;
  }
  public putAutomation(value: ObjectSystemReplacemsggroupAutomation[] | cdktf.IResolvable) {
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
  private _customMessage = new ObjectSystemReplacemsggroupCustomMessageList(this, "custom_message", false);
  public get customMessage() {
    return this._customMessage;
  }
  public putCustomMessage(value: ObjectSystemReplacemsggroupCustomMessage[] | cdktf.IResolvable) {
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
  private _deviceDetectionPortal = new ObjectSystemReplacemsggroupDeviceDetectionPortalList(this, "device_detection_portal", false);
  public get deviceDetectionPortal() {
    return this._deviceDetectionPortal;
  }
  public putDeviceDetectionPortal(value: ObjectSystemReplacemsggroupDeviceDetectionPortal[] | cdktf.IResolvable) {
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
  private _ec = new ObjectSystemReplacemsggroupEcList(this, "ec", false);
  public get ec() {
    return this._ec;
  }
  public putEc(value: ObjectSystemReplacemsggroupEc[] | cdktf.IResolvable) {
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
  private _fortiguardWf = new ObjectSystemReplacemsggroupFortiguardWfList(this, "fortiguard_wf", false);
  public get fortiguardWf() {
    return this._fortiguardWf;
  }
  public putFortiguardWf(value: ObjectSystemReplacemsggroupFortiguardWf[] | cdktf.IResolvable) {
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
  private _ftp = new ObjectSystemReplacemsggroupFtpList(this, "ftp", false);
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: ObjectSystemReplacemsggroupFtp[] | cdktf.IResolvable) {
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
  private _http = new ObjectSystemReplacemsggroupHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: ObjectSystemReplacemsggroupHttp[] | cdktf.IResolvable) {
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
  private _icap = new ObjectSystemReplacemsggroupIcapList(this, "icap", false);
  public get icap() {
    return this._icap;
  }
  public putIcap(value: ObjectSystemReplacemsggroupIcap[] | cdktf.IResolvable) {
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
  private _mail = new ObjectSystemReplacemsggroupMailList(this, "mail", false);
  public get mail() {
    return this._mail;
  }
  public putMail(value: ObjectSystemReplacemsggroupMail[] | cdktf.IResolvable) {
    this._mail.internalValue = value;
  }
  public resetMail() {
    this._mail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailInput() {
    return this._mail.internalValue;
  }

  // mm1 - computed: false, optional: true, required: false
  private _mm1 = new ObjectSystemReplacemsggroupMm1List(this, "mm1", false);
  public get mm1() {
    return this._mm1;
  }
  public putMm1(value: ObjectSystemReplacemsggroupMm1[] | cdktf.IResolvable) {
    this._mm1.internalValue = value;
  }
  public resetMm1() {
    this._mm1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1Input() {
    return this._mm1.internalValue;
  }

  // mm3 - computed: false, optional: true, required: false
  private _mm3 = new ObjectSystemReplacemsggroupMm3List(this, "mm3", false);
  public get mm3() {
    return this._mm3;
  }
  public putMm3(value: ObjectSystemReplacemsggroupMm3[] | cdktf.IResolvable) {
    this._mm3.internalValue = value;
  }
  public resetMm3() {
    this._mm3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm3Input() {
    return this._mm3.internalValue;
  }

  // mm4 - computed: false, optional: true, required: false
  private _mm4 = new ObjectSystemReplacemsggroupMm4List(this, "mm4", false);
  public get mm4() {
    return this._mm4;
  }
  public putMm4(value: ObjectSystemReplacemsggroupMm4[] | cdktf.IResolvable) {
    this._mm4.internalValue = value;
  }
  public resetMm4() {
    this._mm4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm4Input() {
    return this._mm4.internalValue;
  }

  // mm7 - computed: false, optional: true, required: false
  private _mm7 = new ObjectSystemReplacemsggroupMm7List(this, "mm7", false);
  public get mm7() {
    return this._mm7;
  }
  public putMm7(value: ObjectSystemReplacemsggroupMm7[] | cdktf.IResolvable) {
    this._mm7.internalValue = value;
  }
  public resetMm7() {
    this._mm7.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7Input() {
    return this._mm7.internalValue;
  }

  // mms - computed: false, optional: true, required: false
  private _mms = new ObjectSystemReplacemsggroupMmsList(this, "mms", false);
  public get mms() {
    return this._mms;
  }
  public putMms(value: ObjectSystemReplacemsggroupMms[] | cdktf.IResolvable) {
    this._mms.internalValue = value;
  }
  public resetMms() {
    this._mms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsInput() {
    return this._mms.internalValue;
  }

  // nac_quar - computed: false, optional: true, required: false
  private _nacQuar = new ObjectSystemReplacemsggroupNacQuarList(this, "nac_quar", false);
  public get nacQuar() {
    return this._nacQuar;
  }
  public putNacQuar(value: ObjectSystemReplacemsggroupNacQuar[] | cdktf.IResolvable) {
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
  private _nntp = new ObjectSystemReplacemsggroupNntpList(this, "nntp", false);
  public get nntp() {
    return this._nntp;
  }
  public putNntp(value: ObjectSystemReplacemsggroupNntp[] | cdktf.IResolvable) {
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
  private _spam = new ObjectSystemReplacemsggroupSpamList(this, "spam", false);
  public get spam() {
    return this._spam;
  }
  public putSpam(value: ObjectSystemReplacemsggroupSpam[] | cdktf.IResolvable) {
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
  private _sslvpn = new ObjectSystemReplacemsggroupSslvpnList(this, "sslvpn", false);
  public get sslvpn() {
    return this._sslvpn;
  }
  public putSslvpn(value: ObjectSystemReplacemsggroupSslvpn[] | cdktf.IResolvable) {
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
  private _trafficQuota = new ObjectSystemReplacemsggroupTrafficQuotaList(this, "traffic_quota", false);
  public get trafficQuota() {
    return this._trafficQuota;
  }
  public putTrafficQuota(value: ObjectSystemReplacemsggroupTrafficQuota[] | cdktf.IResolvable) {
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
  private _utm = new ObjectSystemReplacemsggroupUtmList(this, "utm", false);
  public get utm() {
    return this._utm;
  }
  public putUtm(value: ObjectSystemReplacemsggroupUtm[] | cdktf.IResolvable) {
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
  private _webproxy = new ObjectSystemReplacemsggroupWebproxyList(this, "webproxy", false);
  public get webproxy() {
    return this._webproxy;
  }
  public putWebproxy(value: ObjectSystemReplacemsggroupWebproxy[] | cdktf.IResolvable) {
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
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      admin: cdktf.listMapper(objectSystemReplacemsggroupAdminToTerraform, true)(this._admin.internalValue),
      alertmail: cdktf.listMapper(objectSystemReplacemsggroupAlertmailToTerraform, true)(this._alertmail.internalValue),
      auth: cdktf.listMapper(objectSystemReplacemsggroupAuthToTerraform, true)(this._auth.internalValue),
      automation: cdktf.listMapper(objectSystemReplacemsggroupAutomationToTerraform, true)(this._automation.internalValue),
      custom_message: cdktf.listMapper(objectSystemReplacemsggroupCustomMessageToTerraform, true)(this._customMessage.internalValue),
      device_detection_portal: cdktf.listMapper(objectSystemReplacemsggroupDeviceDetectionPortalToTerraform, true)(this._deviceDetectionPortal.internalValue),
      ec: cdktf.listMapper(objectSystemReplacemsggroupEcToTerraform, true)(this._ec.internalValue),
      fortiguard_wf: cdktf.listMapper(objectSystemReplacemsggroupFortiguardWfToTerraform, true)(this._fortiguardWf.internalValue),
      ftp: cdktf.listMapper(objectSystemReplacemsggroupFtpToTerraform, true)(this._ftp.internalValue),
      http: cdktf.listMapper(objectSystemReplacemsggroupHttpToTerraform, true)(this._http.internalValue),
      icap: cdktf.listMapper(objectSystemReplacemsggroupIcapToTerraform, true)(this._icap.internalValue),
      mail: cdktf.listMapper(objectSystemReplacemsggroupMailToTerraform, true)(this._mail.internalValue),
      mm1: cdktf.listMapper(objectSystemReplacemsggroupMm1ToTerraform, true)(this._mm1.internalValue),
      mm3: cdktf.listMapper(objectSystemReplacemsggroupMm3ToTerraform, true)(this._mm3.internalValue),
      mm4: cdktf.listMapper(objectSystemReplacemsggroupMm4ToTerraform, true)(this._mm4.internalValue),
      mm7: cdktf.listMapper(objectSystemReplacemsggroupMm7ToTerraform, true)(this._mm7.internalValue),
      mms: cdktf.listMapper(objectSystemReplacemsggroupMmsToTerraform, true)(this._mms.internalValue),
      nac_quar: cdktf.listMapper(objectSystemReplacemsggroupNacQuarToTerraform, true)(this._nacQuar.internalValue),
      nntp: cdktf.listMapper(objectSystemReplacemsggroupNntpToTerraform, true)(this._nntp.internalValue),
      spam: cdktf.listMapper(objectSystemReplacemsggroupSpamToTerraform, true)(this._spam.internalValue),
      sslvpn: cdktf.listMapper(objectSystemReplacemsggroupSslvpnToTerraform, true)(this._sslvpn.internalValue),
      traffic_quota: cdktf.listMapper(objectSystemReplacemsggroupTrafficQuotaToTerraform, true)(this._trafficQuota.internalValue),
      utm: cdktf.listMapper(objectSystemReplacemsggroupUtmToTerraform, true)(this._utm.internalValue),
      webproxy: cdktf.listMapper(objectSystemReplacemsggroupWebproxyToTerraform, true)(this._webproxy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupAdminToHclTerraform, true)(this._admin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupAdminList",
      },
      alertmail: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupAlertmailToHclTerraform, true)(this._alertmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupAlertmailList",
      },
      auth: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupAuthToHclTerraform, true)(this._auth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupAuthList",
      },
      automation: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupAutomationToHclTerraform, true)(this._automation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupAutomationList",
      },
      custom_message: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupCustomMessageToHclTerraform, true)(this._customMessage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupCustomMessageList",
      },
      device_detection_portal: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupDeviceDetectionPortalToHclTerraform, true)(this._deviceDetectionPortal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupDeviceDetectionPortalList",
      },
      ec: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupEcToHclTerraform, true)(this._ec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupEcList",
      },
      fortiguard_wf: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupFortiguardWfToHclTerraform, true)(this._fortiguardWf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupFortiguardWfList",
      },
      ftp: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupFtpToHclTerraform, true)(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupFtpList",
      },
      http: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupHttpList",
      },
      icap: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupIcapToHclTerraform, true)(this._icap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupIcapList",
      },
      mail: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupMailToHclTerraform, true)(this._mail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupMailList",
      },
      mm1: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupMm1ToHclTerraform, true)(this._mm1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupMm1List",
      },
      mm3: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupMm3ToHclTerraform, true)(this._mm3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupMm3List",
      },
      mm4: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupMm4ToHclTerraform, true)(this._mm4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupMm4List",
      },
      mm7: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupMm7ToHclTerraform, true)(this._mm7.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupMm7List",
      },
      mms: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupMmsToHclTerraform, true)(this._mms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupMmsList",
      },
      nac_quar: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupNacQuarToHclTerraform, true)(this._nacQuar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupNacQuarList",
      },
      nntp: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupNntpToHclTerraform, true)(this._nntp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupNntpList",
      },
      spam: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupSpamToHclTerraform, true)(this._spam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupSpamList",
      },
      sslvpn: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupSslvpnToHclTerraform, true)(this._sslvpn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupSslvpnList",
      },
      traffic_quota: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupTrafficQuotaToHclTerraform, true)(this._trafficQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupTrafficQuotaList",
      },
      utm: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupUtmToHclTerraform, true)(this._utm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupUtmList",
      },
      webproxy: {
        value: cdktf.listMapperHcl(objectSystemReplacemsggroupWebproxyToHclTerraform, true)(this._webproxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemReplacemsggroupWebproxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
