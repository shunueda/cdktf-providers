// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IcapProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#chunk_encap IcapProfile#chunk_encap}
  */
  readonly chunkEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#comment IcapProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#dynamic_sort_subtable IcapProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#extension_feature IcapProfile#extension_feature}
  */
  readonly extensionFeature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#file_transfer IcapProfile#file_transfer}
  */
  readonly fileTransfer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#file_transfer_failure IcapProfile#file_transfer_failure}
  */
  readonly fileTransferFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#file_transfer_path IcapProfile#file_transfer_path}
  */
  readonly fileTransferPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#file_transfer_server IcapProfile#file_transfer_server}
  */
  readonly fileTransferServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#get_all_tables IcapProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#icap_block_log IcapProfile#icap_block_log}
  */
  readonly icapBlockLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#id IcapProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#methods IcapProfile#methods}
  */
  readonly methods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#n204_response IcapProfile#n204_response}
  */
  readonly n204Response?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#n204_size_limit IcapProfile#n204_size_limit}
  */
  readonly n204SizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#name IcapProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#ocr_only IcapProfile#ocr_only}
  */
  readonly ocrOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#preview IcapProfile#preview}
  */
  readonly preview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#preview_data_length IcapProfile#preview_data_length}
  */
  readonly previewDataLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#replacemsg_group IcapProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#request IcapProfile#request}
  */
  readonly request?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#request_failure IcapProfile#request_failure}
  */
  readonly requestFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#request_path IcapProfile#request_path}
  */
  readonly requestPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#request_server IcapProfile#request_server}
  */
  readonly requestServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#respmod_default_action IcapProfile#respmod_default_action}
  */
  readonly respmodDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#response IcapProfile#response}
  */
  readonly response?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#response_failure IcapProfile#response_failure}
  */
  readonly responseFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#response_path IcapProfile#response_path}
  */
  readonly responsePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#response_req_hdr IcapProfile#response_req_hdr}
  */
  readonly responseReqHdr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#response_server IcapProfile#response_server}
  */
  readonly responseServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#scan_progress_interval IcapProfile#scan_progress_interval}
  */
  readonly scanProgressInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#streaming_content_bypass IcapProfile#streaming_content_bypass}
  */
  readonly streamingContentBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#timeout IcapProfile#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#vdomparam IcapProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * icap_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#icap_headers IcapProfile#icap_headers}
  */
  readonly icapHeaders?: IcapProfileIcapHeaders[] | cdktf.IResolvable;
  /**
  * respmod_forward_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#respmod_forward_rules IcapProfile#respmod_forward_rules}
  */
  readonly respmodForwardRules?: IcapProfileRespmodForwardRules[] | cdktf.IResolvable;
}
export interface IcapProfileIcapHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#base64_encoding IcapProfile#base64_encoding}
  */
  readonly base64Encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#content IcapProfile#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#id IcapProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#name IcapProfile#name}
  */
  readonly name?: string;
}

export function icapProfileIcapHeadersToTerraform(struct?: IcapProfileIcapHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_encoding: cdktf.stringToTerraform(struct!.base64Encoding),
    content: cdktf.stringToTerraform(struct!.content),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function icapProfileIcapHeadersToHclTerraform(struct?: IcapProfileIcapHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64_encoding: {
      value: cdktf.stringToHclTerraform(struct!.base64Encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcapProfileIcapHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IcapProfileIcapHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64Encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Encoding = this._base64Encoding;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcapProfileIcapHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base64Encoding = undefined;
      this._content = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base64Encoding = value.base64Encoding;
      this._content = value.content;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // base64_encoding - computed: true, optional: true, required: false
  private _base64Encoding?: string; 
  public get base64Encoding() {
    return this.getStringAttribute('base64_encoding');
  }
  public set base64Encoding(value: string) {
    this._base64Encoding = value;
  }
  public resetBase64Encoding() {
    this._base64Encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodingInput() {
    return this._base64Encoding;
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

  // id - computed: true, optional: true, required: false
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
}

export class IcapProfileIcapHeadersList extends cdktf.ComplexList {
  public internalValue? : IcapProfileIcapHeaders[] | cdktf.IResolvable

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
  public get(index: number): IcapProfileIcapHeadersOutputReference {
    return new IcapProfileIcapHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcapProfileRespmodForwardRulesHeaderGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#case_sensitivity IcapProfile#case_sensitivity}
  */
  readonly caseSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#header IcapProfile#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#header_name IcapProfile#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#id IcapProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function icapProfileRespmodForwardRulesHeaderGroupToTerraform(struct?: IcapProfileRespmodForwardRulesHeaderGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitivity: cdktf.stringToTerraform(struct!.caseSensitivity),
    header: cdktf.stringToTerraform(struct!.header),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function icapProfileRespmodForwardRulesHeaderGroupToHclTerraform(struct?: IcapProfileRespmodForwardRulesHeaderGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.caseSensitivity),
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
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcapProfileRespmodForwardRulesHeaderGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IcapProfileRespmodForwardRulesHeaderGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitivity = this._caseSensitivity;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcapProfileRespmodForwardRulesHeaderGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitivity = undefined;
      this._header = undefined;
      this._headerName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitivity = value.caseSensitivity;
      this._header = value.header;
      this._headerName = value.headerName;
      this._id = value.id;
    }
  }

  // case_sensitivity - computed: true, optional: true, required: false
  private _caseSensitivity?: string; 
  public get caseSensitivity() {
    return this.getStringAttribute('case_sensitivity');
  }
  public set caseSensitivity(value: string) {
    this._caseSensitivity = value;
  }
  public resetCaseSensitivity() {
    this._caseSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitivityInput() {
    return this._caseSensitivity;
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

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // id - computed: true, optional: true, required: false
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
}

export class IcapProfileRespmodForwardRulesHeaderGroupList extends cdktf.ComplexList {
  public internalValue? : IcapProfileRespmodForwardRulesHeaderGroup[] | cdktf.IResolvable

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
  public get(index: number): IcapProfileRespmodForwardRulesHeaderGroupOutputReference {
    return new IcapProfileRespmodForwardRulesHeaderGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcapProfileRespmodForwardRulesHttpRespStatusCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#code IcapProfile#code}
  */
  readonly code?: number;
}

export function icapProfileRespmodForwardRulesHttpRespStatusCodeToTerraform(struct?: IcapProfileRespmodForwardRulesHttpRespStatusCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
  }
}


export function icapProfileRespmodForwardRulesHttpRespStatusCodeToHclTerraform(struct?: IcapProfileRespmodForwardRulesHttpRespStatusCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcapProfileRespmodForwardRulesHttpRespStatusCodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IcapProfileRespmodForwardRulesHttpRespStatusCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcapProfileRespmodForwardRulesHttpRespStatusCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}

export class IcapProfileRespmodForwardRulesHttpRespStatusCodeList extends cdktf.ComplexList {
  public internalValue? : IcapProfileRespmodForwardRulesHttpRespStatusCode[] | cdktf.IResolvable

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
  public get(index: number): IcapProfileRespmodForwardRulesHttpRespStatusCodeOutputReference {
    return new IcapProfileRespmodForwardRulesHttpRespStatusCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcapProfileRespmodForwardRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#action IcapProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#host IcapProfile#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#name IcapProfile#name}
  */
  readonly name?: string;
  /**
  * header_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#header_group IcapProfile#header_group}
  */
  readonly headerGroup?: IcapProfileRespmodForwardRulesHeaderGroup[] | cdktf.IResolvable;
  /**
  * http_resp_status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#http_resp_status_code IcapProfile#http_resp_status_code}
  */
  readonly httpRespStatusCode?: IcapProfileRespmodForwardRulesHttpRespStatusCode[] | cdktf.IResolvable;
}

export function icapProfileRespmodForwardRulesToTerraform(struct?: IcapProfileRespmodForwardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    host: cdktf.stringToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
    header_group: cdktf.listMapper(icapProfileRespmodForwardRulesHeaderGroupToTerraform, true)(struct!.headerGroup),
    http_resp_status_code: cdktf.listMapper(icapProfileRespmodForwardRulesHttpRespStatusCodeToTerraform, true)(struct!.httpRespStatusCode),
  }
}


export function icapProfileRespmodForwardRulesToHclTerraform(struct?: IcapProfileRespmodForwardRules | cdktf.IResolvable): any {
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    header_group: {
      value: cdktf.listMapperHcl(icapProfileRespmodForwardRulesHeaderGroupToHclTerraform, true)(struct!.headerGroup),
      isBlock: true,
      type: "list",
      storageClassType: "IcapProfileRespmodForwardRulesHeaderGroupList",
    },
    http_resp_status_code: {
      value: cdktf.listMapperHcl(icapProfileRespmodForwardRulesHttpRespStatusCodeToHclTerraform, true)(struct!.httpRespStatusCode),
      isBlock: true,
      type: "set",
      storageClassType: "IcapProfileRespmodForwardRulesHttpRespStatusCodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcapProfileRespmodForwardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IcapProfileRespmodForwardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._headerGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerGroup = this._headerGroup?.internalValue;
    }
    if (this._httpRespStatusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRespStatusCode = this._httpRespStatusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcapProfileRespmodForwardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._host = undefined;
      this._name = undefined;
      this._headerGroup.internalValue = undefined;
      this._httpRespStatusCode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._host = value.host;
      this._name = value.name;
      this._headerGroup.internalValue = value.headerGroup;
      this._httpRespStatusCode.internalValue = value.httpRespStatusCode;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // header_group - computed: false, optional: true, required: false
  private _headerGroup = new IcapProfileRespmodForwardRulesHeaderGroupList(this, "header_group", false);
  public get headerGroup() {
    return this._headerGroup;
  }
  public putHeaderGroup(value: IcapProfileRespmodForwardRulesHeaderGroup[] | cdktf.IResolvable) {
    this._headerGroup.internalValue = value;
  }
  public resetHeaderGroup() {
    this._headerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerGroupInput() {
    return this._headerGroup.internalValue;
  }

  // http_resp_status_code - computed: false, optional: true, required: false
  private _httpRespStatusCode = new IcapProfileRespmodForwardRulesHttpRespStatusCodeList(this, "http_resp_status_code", true);
  public get httpRespStatusCode() {
    return this._httpRespStatusCode;
  }
  public putHttpRespStatusCode(value: IcapProfileRespmodForwardRulesHttpRespStatusCode[] | cdktf.IResolvable) {
    this._httpRespStatusCode.internalValue = value;
  }
  public resetHttpRespStatusCode() {
    this._httpRespStatusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRespStatusCodeInput() {
    return this._httpRespStatusCode.internalValue;
  }
}

export class IcapProfileRespmodForwardRulesList extends cdktf.ComplexList {
  public internalValue? : IcapProfileRespmodForwardRules[] | cdktf.IResolvable

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
  public get(index: number): IcapProfileRespmodForwardRulesOutputReference {
    return new IcapProfileRespmodForwardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile fortios_icap_profile}
*/
export class IcapProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_icap_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IcapProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IcapProfile to import
  * @param importFromId The id of the existing IcapProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IcapProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_icap_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/icap_profile fortios_icap_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcapProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IcapProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_icap_profile',
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
    this._chunkEncap = config.chunkEncap;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extensionFeature = config.extensionFeature;
    this._fileTransfer = config.fileTransfer;
    this._fileTransferFailure = config.fileTransferFailure;
    this._fileTransferPath = config.fileTransferPath;
    this._fileTransferServer = config.fileTransferServer;
    this._getAllTables = config.fetchAllTables;
    this._icapBlockLog = config.icapBlockLog;
    this._id = config.id;
    this._methods = config.methods;
    this._n204Response = config.n204Response;
    this._n204SizeLimit = config.n204SizeLimit;
    this._name = config.name;
    this._ocrOnly = config.ocrOnly;
    this._preview = config.preview;
    this._previewDataLength = config.previewDataLength;
    this._replacemsgGroup = config.replacemsgGroup;
    this._request = config.request;
    this._requestFailure = config.requestFailure;
    this._requestPath = config.requestPath;
    this._requestServer = config.requestServer;
    this._respmodDefaultAction = config.respmodDefaultAction;
    this._response = config.response;
    this._responseFailure = config.responseFailure;
    this._responsePath = config.responsePath;
    this._responseReqHdr = config.responseReqHdr;
    this._responseServer = config.responseServer;
    this._scanProgressInterval = config.scanProgressInterval;
    this._streamingContentBypass = config.streamingContentBypass;
    this._timeout = config.timeout;
    this._vdomparam = config.vdomparam;
    this._icapHeaders.internalValue = config.icapHeaders;
    this._respmodForwardRules.internalValue = config.respmodForwardRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chunk_encap - computed: true, optional: true, required: false
  private _chunkEncap?: string; 
  public get chunkEncap() {
    return this.getStringAttribute('chunk_encap');
  }
  public set chunkEncap(value: string) {
    this._chunkEncap = value;
  }
  public resetChunkEncap() {
    this._chunkEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkEncapInput() {
    return this._chunkEncap;
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

  // extension_feature - computed: false, optional: true, required: false
  private _extensionFeature?: string; 
  public get extensionFeature() {
    return this.getStringAttribute('extension_feature');
  }
  public set extensionFeature(value: string) {
    this._extensionFeature = value;
  }
  public resetExtensionFeature() {
    this._extensionFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionFeatureInput() {
    return this._extensionFeature;
  }

  // file_transfer - computed: false, optional: true, required: false
  private _fileTransfer?: string; 
  public get fileTransfer() {
    return this.getStringAttribute('file_transfer');
  }
  public set fileTransfer(value: string) {
    this._fileTransfer = value;
  }
  public resetFileTransfer() {
    this._fileTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTransferInput() {
    return this._fileTransfer;
  }

  // file_transfer_failure - computed: true, optional: true, required: false
  private _fileTransferFailure?: string; 
  public get fileTransferFailure() {
    return this.getStringAttribute('file_transfer_failure');
  }
  public set fileTransferFailure(value: string) {
    this._fileTransferFailure = value;
  }
  public resetFileTransferFailure() {
    this._fileTransferFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTransferFailureInput() {
    return this._fileTransferFailure;
  }

  // file_transfer_path - computed: false, optional: true, required: false
  private _fileTransferPath?: string; 
  public get fileTransferPath() {
    return this.getStringAttribute('file_transfer_path');
  }
  public set fileTransferPath(value: string) {
    this._fileTransferPath = value;
  }
  public resetFileTransferPath() {
    this._fileTransferPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTransferPathInput() {
    return this._fileTransferPath;
  }

  // file_transfer_server - computed: false, optional: true, required: false
  private _fileTransferServer?: string; 
  public get fileTransferServer() {
    return this.getStringAttribute('file_transfer_server');
  }
  public set fileTransferServer(value: string) {
    this._fileTransferServer = value;
  }
  public resetFileTransferServer() {
    this._fileTransferServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTransferServerInput() {
    return this._fileTransferServer;
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

  // icap_block_log - computed: true, optional: true, required: false
  private _icapBlockLog?: string; 
  public get icapBlockLog() {
    return this.getStringAttribute('icap_block_log');
  }
  public set icapBlockLog(value: string) {
    this._icapBlockLog = value;
  }
  public resetIcapBlockLog() {
    this._icapBlockLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapBlockLogInput() {
    return this._icapBlockLog;
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

  // methods - computed: true, optional: true, required: false
  private _methods?: string; 
  public get methods() {
    return this.getStringAttribute('methods');
  }
  public set methods(value: string) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // n204_response - computed: true, optional: true, required: false
  private _n204Response?: string; 
  public get n204Response() {
    return this.getStringAttribute('n204_response');
  }
  public set n204Response(value: string) {
    this._n204Response = value;
  }
  public resetN204Response() {
    this._n204Response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n204ResponseInput() {
    return this._n204Response;
  }

  // n204_size_limit - computed: true, optional: true, required: false
  private _n204SizeLimit?: number; 
  public get n204SizeLimit() {
    return this.getNumberAttribute('n204_size_limit');
  }
  public set n204SizeLimit(value: number) {
    this._n204SizeLimit = value;
  }
  public resetN204SizeLimit() {
    this._n204SizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n204SizeLimitInput() {
    return this._n204SizeLimit;
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

  // ocr_only - computed: true, optional: true, required: false
  private _ocrOnly?: string; 
  public get ocrOnly() {
    return this.getStringAttribute('ocr_only');
  }
  public set ocrOnly(value: string) {
    this._ocrOnly = value;
  }
  public resetOcrOnly() {
    this._ocrOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrOnlyInput() {
    return this._ocrOnly;
  }

  // preview - computed: true, optional: true, required: false
  private _preview?: string; 
  public get preview() {
    return this.getStringAttribute('preview');
  }
  public set preview(value: string) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
  }

  // preview_data_length - computed: false, optional: true, required: false
  private _previewDataLength?: number; 
  public get previewDataLength() {
    return this.getNumberAttribute('preview_data_length');
  }
  public set previewDataLength(value: number) {
    this._previewDataLength = value;
  }
  public resetPreviewDataLength() {
    this._previewDataLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewDataLengthInput() {
    return this._previewDataLength;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // request - computed: true, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // request_failure - computed: true, optional: true, required: false
  private _requestFailure?: string; 
  public get requestFailure() {
    return this.getStringAttribute('request_failure');
  }
  public set requestFailure(value: string) {
    this._requestFailure = value;
  }
  public resetRequestFailure() {
    this._requestFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFailureInput() {
    return this._requestFailure;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // request_server - computed: false, optional: true, required: false
  private _requestServer?: string; 
  public get requestServer() {
    return this.getStringAttribute('request_server');
  }
  public set requestServer(value: string) {
    this._requestServer = value;
  }
  public resetRequestServer() {
    this._requestServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestServerInput() {
    return this._requestServer;
  }

  // respmod_default_action - computed: true, optional: true, required: false
  private _respmodDefaultAction?: string; 
  public get respmodDefaultAction() {
    return this.getStringAttribute('respmod_default_action');
  }
  public set respmodDefaultAction(value: string) {
    this._respmodDefaultAction = value;
  }
  public resetRespmodDefaultAction() {
    this._respmodDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respmodDefaultActionInput() {
    return this._respmodDefaultAction;
  }

  // response - computed: true, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // response_failure - computed: true, optional: true, required: false
  private _responseFailure?: string; 
  public get responseFailure() {
    return this.getStringAttribute('response_failure');
  }
  public set responseFailure(value: string) {
    this._responseFailure = value;
  }
  public resetResponseFailure() {
    this._responseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureInput() {
    return this._responseFailure;
  }

  // response_path - computed: false, optional: true, required: false
  private _responsePath?: string; 
  public get responsePath() {
    return this.getStringAttribute('response_path');
  }
  public set responsePath(value: string) {
    this._responsePath = value;
  }
  public resetResponsePath() {
    this._responsePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePathInput() {
    return this._responsePath;
  }

  // response_req_hdr - computed: true, optional: true, required: false
  private _responseReqHdr?: string; 
  public get responseReqHdr() {
    return this.getStringAttribute('response_req_hdr');
  }
  public set responseReqHdr(value: string) {
    this._responseReqHdr = value;
  }
  public resetResponseReqHdr() {
    this._responseReqHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseReqHdrInput() {
    return this._responseReqHdr;
  }

  // response_server - computed: false, optional: true, required: false
  private _responseServer?: string; 
  public get responseServer() {
    return this.getStringAttribute('response_server');
  }
  public set responseServer(value: string) {
    this._responseServer = value;
  }
  public resetResponseServer() {
    this._responseServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseServerInput() {
    return this._responseServer;
  }

  // scan_progress_interval - computed: true, optional: true, required: false
  private _scanProgressInterval?: number; 
  public get scanProgressInterval() {
    return this.getNumberAttribute('scan_progress_interval');
  }
  public set scanProgressInterval(value: number) {
    this._scanProgressInterval = value;
  }
  public resetScanProgressInterval() {
    this._scanProgressInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanProgressIntervalInput() {
    return this._scanProgressInterval;
  }

  // streaming_content_bypass - computed: true, optional: true, required: false
  private _streamingContentBypass?: string; 
  public get streamingContentBypass() {
    return this.getStringAttribute('streaming_content_bypass');
  }
  public set streamingContentBypass(value: string) {
    this._streamingContentBypass = value;
  }
  public resetStreamingContentBypass() {
    this._streamingContentBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingContentBypassInput() {
    return this._streamingContentBypass;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // icap_headers - computed: false, optional: true, required: false
  private _icapHeaders = new IcapProfileIcapHeadersList(this, "icap_headers", false);
  public get icapHeaders() {
    return this._icapHeaders;
  }
  public putIcapHeaders(value: IcapProfileIcapHeaders[] | cdktf.IResolvable) {
    this._icapHeaders.internalValue = value;
  }
  public resetIcapHeaders() {
    this._icapHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapHeadersInput() {
    return this._icapHeaders.internalValue;
  }

  // respmod_forward_rules - computed: false, optional: true, required: false
  private _respmodForwardRules = new IcapProfileRespmodForwardRulesList(this, "respmod_forward_rules", false);
  public get respmodForwardRules() {
    return this._respmodForwardRules;
  }
  public putRespmodForwardRules(value: IcapProfileRespmodForwardRules[] | cdktf.IResolvable) {
    this._respmodForwardRules.internalValue = value;
  }
  public resetRespmodForwardRules() {
    this._respmodForwardRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respmodForwardRulesInput() {
    return this._respmodForwardRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chunk_encap: cdktf.stringToTerraform(this._chunkEncap),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extension_feature: cdktf.stringToTerraform(this._extensionFeature),
      file_transfer: cdktf.stringToTerraform(this._fileTransfer),
      file_transfer_failure: cdktf.stringToTerraform(this._fileTransferFailure),
      file_transfer_path: cdktf.stringToTerraform(this._fileTransferPath),
      file_transfer_server: cdktf.stringToTerraform(this._fileTransferServer),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      icap_block_log: cdktf.stringToTerraform(this._icapBlockLog),
      id: cdktf.stringToTerraform(this._id),
      methods: cdktf.stringToTerraform(this._methods),
      n204_response: cdktf.stringToTerraform(this._n204Response),
      n204_size_limit: cdktf.numberToTerraform(this._n204SizeLimit),
      name: cdktf.stringToTerraform(this._name),
      ocr_only: cdktf.stringToTerraform(this._ocrOnly),
      preview: cdktf.stringToTerraform(this._preview),
      preview_data_length: cdktf.numberToTerraform(this._previewDataLength),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      request: cdktf.stringToTerraform(this._request),
      request_failure: cdktf.stringToTerraform(this._requestFailure),
      request_path: cdktf.stringToTerraform(this._requestPath),
      request_server: cdktf.stringToTerraform(this._requestServer),
      respmod_default_action: cdktf.stringToTerraform(this._respmodDefaultAction),
      response: cdktf.stringToTerraform(this._response),
      response_failure: cdktf.stringToTerraform(this._responseFailure),
      response_path: cdktf.stringToTerraform(this._responsePath),
      response_req_hdr: cdktf.stringToTerraform(this._responseReqHdr),
      response_server: cdktf.stringToTerraform(this._responseServer),
      scan_progress_interval: cdktf.numberToTerraform(this._scanProgressInterval),
      streaming_content_bypass: cdktf.stringToTerraform(this._streamingContentBypass),
      timeout: cdktf.numberToTerraform(this._timeout),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      icap_headers: cdktf.listMapper(icapProfileIcapHeadersToTerraform, true)(this._icapHeaders.internalValue),
      respmod_forward_rules: cdktf.listMapper(icapProfileRespmodForwardRulesToTerraform, true)(this._respmodForwardRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chunk_encap: {
        value: cdktf.stringToHclTerraform(this._chunkEncap),
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
      extension_feature: {
        value: cdktf.stringToHclTerraform(this._extensionFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_transfer: {
        value: cdktf.stringToHclTerraform(this._fileTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_transfer_failure: {
        value: cdktf.stringToHclTerraform(this._fileTransferFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_transfer_path: {
        value: cdktf.stringToHclTerraform(this._fileTransferPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_transfer_server: {
        value: cdktf.stringToHclTerraform(this._fileTransferServer),
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
      icap_block_log: {
        value: cdktf.stringToHclTerraform(this._icapBlockLog),
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
      methods: {
        value: cdktf.stringToHclTerraform(this._methods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n204_response: {
        value: cdktf.stringToHclTerraform(this._n204Response),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n204_size_limit: {
        value: cdktf.numberToHclTerraform(this._n204SizeLimit),
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
      ocr_only: {
        value: cdktf.stringToHclTerraform(this._ocrOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview: {
        value: cdktf.stringToHclTerraform(this._preview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview_data_length: {
        value: cdktf.numberToHclTerraform(this._previewDataLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request: {
        value: cdktf.stringToHclTerraform(this._request),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_failure: {
        value: cdktf.stringToHclTerraform(this._requestFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_path: {
        value: cdktf.stringToHclTerraform(this._requestPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_server: {
        value: cdktf.stringToHclTerraform(this._requestServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respmod_default_action: {
        value: cdktf.stringToHclTerraform(this._respmodDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response: {
        value: cdktf.stringToHclTerraform(this._response),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_failure: {
        value: cdktf.stringToHclTerraform(this._responseFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_path: {
        value: cdktf.stringToHclTerraform(this._responsePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_req_hdr: {
        value: cdktf.stringToHclTerraform(this._responseReqHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_server: {
        value: cdktf.stringToHclTerraform(this._responseServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_progress_interval: {
        value: cdktf.numberToHclTerraform(this._scanProgressInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      streaming_content_bypass: {
        value: cdktf.stringToHclTerraform(this._streamingContentBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icap_headers: {
        value: cdktf.listMapperHcl(icapProfileIcapHeadersToHclTerraform, true)(this._icapHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcapProfileIcapHeadersList",
      },
      respmod_forward_rules: {
        value: cdktf.listMapperHcl(icapProfileRespmodForwardRulesToHclTerraform, true)(this._respmodForwardRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcapProfileRespmodForwardRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
