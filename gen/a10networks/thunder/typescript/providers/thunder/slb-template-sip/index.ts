// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateSipConfig extends cdktf.TerraformMetaArguments {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#acl_id SlbTemplateSip#acl_id}
  */
  readonly aclId?: number;
  /**
  * IPv4 Access List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#acl_name_value SlbTemplateSip#acl_name_value}
  */
  readonly aclNameValue?: string;
  /**
  * Translate VIP to real server IP in SIP message when destination NAT is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#alg_dest_nat SlbTemplateSip#alg_dest_nat}
  */
  readonly algDestNat?: number;
  /**
  * Translate source IP to NAT IP in SIP message when source NAT is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#alg_source_nat SlbTemplateSip#alg_source_nat}
  */
  readonly algSourceNat?: number;
  /**
  * Disable call-ID persistence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#call_id_persist_disable SlbTemplateSip#call_id_persist_disable}
  */
  readonly callIdPersistDisable?: number;
  /**
  * Respond client keep-alive packet directly instead of forwarding to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_keep_alive SlbTemplateSip#client_keep_alive}
  */
  readonly clientKeepAlive?: number;
  /**
  * Permit system processes dialog session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#dialog_aware SlbTemplateSip#dialog_aware}
  */
  readonly dialogAware?: number;
  /**
  * Drop current SIP message when select client fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#drop_when_client_fail SlbTemplateSip#drop_when_client_fail}
  */
  readonly dropWhenClientFail?: number;
  /**
  * Drop current SIP message when select server fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#drop_when_server_fail SlbTemplateSip#drop_when_server_fail}
  */
  readonly dropWhenServerFail?: number;
  /**
  * Define action when select client fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#failed_client_selection SlbTemplateSip#failed_client_selection}
  */
  readonly failedClientSelection?: number;
  /**
  * Send SIP message (includs status code) to server when select client fail(Format: 3 digits(1XX~6XX) space reason)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#failed_client_selection_message SlbTemplateSip#failed_client_selection_message}
  */
  readonly failedClientSelectionMessage?: string;
  /**
  * Define action when select server fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#failed_server_selection SlbTemplateSip#failed_server_selection}
  */
  readonly failedServerSelection?: number;
  /**
  * Send SIP message (includs status code) to client when select server fail(Format: 3 digits(1XX~6XX) space reason)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#failed_server_selection_message SlbTemplateSip#failed_server_selection_message}
  */
  readonly failedServerSelectionMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#id SlbTemplateSip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Insert Client IP address into SIP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#insert_client_ip SlbTemplateSip#insert_client_ip}
  */
  readonly insertClientIp?: number;
  /**
  * The interval of keep-alive packet for each persist connection (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#interval SlbTemplateSip#interval}
  */
  readonly interval?: number;
  /**
  * Use Real Server IP for addresses matching the ACL for a Call-Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#keep_server_ip_if_match_acl SlbTemplateSip#keep_server_ip_if_match_acl}
  */
  readonly keepServerIpIfMatchAcl?: number;
  /**
  * SIP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#name SlbTemplateSip#name}
  */
  readonly name: string;
  /**
  * configure pstn gw host name for tel: uri translate to sip: uri (Hostname String, default is "pstn")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#pstn_gw SlbTemplateSip#pstn_gw}
  */
  readonly pstnGw?: string;
  /**
  * Send server keep-alive packet for every persist connection when enable conn-reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_keep_alive SlbTemplateSip#server_keep_alive}
  */
  readonly serverKeepAlive?: number;
  /**
  * Force server selection on every SIP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_selection_per_request SlbTemplateSip#server_selection_per_request}
  */
  readonly serverSelectionPerRequest?: number;
  /**
  * service group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#service_group SlbTemplateSip#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Create the across cpu call-id rtp session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#smp_call_id_rtp_session SlbTemplateSip#smp_call_id_rtp_session}
  */
  readonly smpCallIdRtpSession?: number;
  /**
  * Time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#timeout SlbTemplateSip#timeout}
  */
  readonly timeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#user_tag SlbTemplateSip#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#uuid SlbTemplateSip#uuid}
  */
  readonly uuid?: string;
  /**
  * client_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_request_header SlbTemplateSip#client_request_header}
  */
  readonly clientRequestHeader?: SlbTemplateSipClientRequestHeader[] | cdktf.IResolvable;
  /**
  * client_response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_response_header SlbTemplateSip#client_response_header}
  */
  readonly clientResponseHeader?: SlbTemplateSipClientResponseHeader[] | cdktf.IResolvable;
  /**
  * exclude_translation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#exclude_translation SlbTemplateSip#exclude_translation}
  */
  readonly excludeTranslation?: SlbTemplateSipExcludeTranslation[] | cdktf.IResolvable;
  /**
  * server_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_request_header SlbTemplateSip#server_request_header}
  */
  readonly serverRequestHeader?: SlbTemplateSipServerRequestHeader[] | cdktf.IResolvable;
  /**
  * server_response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_response_header SlbTemplateSip#server_response_header}
  */
  readonly serverResponseHeader?: SlbTemplateSipServerResponseHeader[] | cdktf.IResolvable;
}
export interface SlbTemplateSipClientRequestHeader {
  /**
  * Erase all headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_request_erase_all SlbTemplateSip#client_request_erase_all}
  */
  readonly clientRequestEraseAll?: number;
  /**
  * Erase a SIP header (Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_request_header_erase SlbTemplateSip#client_request_header_erase}
  */
  readonly clientRequestHeaderErase?: string;
  /**
  * Insert a SIP header (Header Content (Format: "name:value"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_request_header_insert SlbTemplateSip#client_request_header_insert}
  */
  readonly clientRequestHeaderInsert?: string;
  /**
  * 'insert-if-not-exist': Only insert the header when it does not exist; 'insert-always': Always insert the header even when there is a header with the same name;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#insert_condition_client_request SlbTemplateSip#insert_condition_client_request}
  */
  readonly insertConditionClientRequest?: string;
}

export function slbTemplateSipClientRequestHeaderToTerraform(struct?: SlbTemplateSipClientRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_request_erase_all: cdktf.numberToTerraform(struct!.clientRequestEraseAll),
    client_request_header_erase: cdktf.stringToTerraform(struct!.clientRequestHeaderErase),
    client_request_header_insert: cdktf.stringToTerraform(struct!.clientRequestHeaderInsert),
    insert_condition_client_request: cdktf.stringToTerraform(struct!.insertConditionClientRequest),
  }
}


export function slbTemplateSipClientRequestHeaderToHclTerraform(struct?: SlbTemplateSipClientRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_request_erase_all: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestEraseAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_header_erase: {
      value: cdktf.stringToHclTerraform(struct!.clientRequestHeaderErase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_request_header_insert: {
      value: cdktf.stringToHclTerraform(struct!.clientRequestHeaderInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_condition_client_request: {
      value: cdktf.stringToHclTerraform(struct!.insertConditionClientRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSipClientRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateSipClientRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRequestEraseAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestEraseAll = this._clientRequestEraseAll;
    }
    if (this._clientRequestHeaderErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestHeaderErase = this._clientRequestHeaderErase;
    }
    if (this._clientRequestHeaderInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestHeaderInsert = this._clientRequestHeaderInsert;
    }
    if (this._insertConditionClientRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertConditionClientRequest = this._insertConditionClientRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSipClientRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientRequestEraseAll = undefined;
      this._clientRequestHeaderErase = undefined;
      this._clientRequestHeaderInsert = undefined;
      this._insertConditionClientRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientRequestEraseAll = value.clientRequestEraseAll;
      this._clientRequestHeaderErase = value.clientRequestHeaderErase;
      this._clientRequestHeaderInsert = value.clientRequestHeaderInsert;
      this._insertConditionClientRequest = value.insertConditionClientRequest;
    }
  }

  // client_request_erase_all - computed: false, optional: true, required: false
  private _clientRequestEraseAll?: number; 
  public get clientRequestEraseAll() {
    return this.getNumberAttribute('client_request_erase_all');
  }
  public set clientRequestEraseAll(value: number) {
    this._clientRequestEraseAll = value;
  }
  public resetClientRequestEraseAll() {
    this._clientRequestEraseAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestEraseAllInput() {
    return this._clientRequestEraseAll;
  }

  // client_request_header_erase - computed: false, optional: true, required: false
  private _clientRequestHeaderErase?: string; 
  public get clientRequestHeaderErase() {
    return this.getStringAttribute('client_request_header_erase');
  }
  public set clientRequestHeaderErase(value: string) {
    this._clientRequestHeaderErase = value;
  }
  public resetClientRequestHeaderErase() {
    this._clientRequestHeaderErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestHeaderEraseInput() {
    return this._clientRequestHeaderErase;
  }

  // client_request_header_insert - computed: false, optional: true, required: false
  private _clientRequestHeaderInsert?: string; 
  public get clientRequestHeaderInsert() {
    return this.getStringAttribute('client_request_header_insert');
  }
  public set clientRequestHeaderInsert(value: string) {
    this._clientRequestHeaderInsert = value;
  }
  public resetClientRequestHeaderInsert() {
    this._clientRequestHeaderInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestHeaderInsertInput() {
    return this._clientRequestHeaderInsert;
  }

  // insert_condition_client_request - computed: false, optional: true, required: false
  private _insertConditionClientRequest?: string; 
  public get insertConditionClientRequest() {
    return this.getStringAttribute('insert_condition_client_request');
  }
  public set insertConditionClientRequest(value: string) {
    this._insertConditionClientRequest = value;
  }
  public resetInsertConditionClientRequest() {
    this._insertConditionClientRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertConditionClientRequestInput() {
    return this._insertConditionClientRequest;
  }
}

export class SlbTemplateSipClientRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateSipClientRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateSipClientRequestHeaderOutputReference {
    return new SlbTemplateSipClientRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateSipClientResponseHeader {
  /**
  * Erase all headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_response_erase_all SlbTemplateSip#client_response_erase_all}
  */
  readonly clientResponseEraseAll?: number;
  /**
  * Erase a SIP header (Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_response_header_erase SlbTemplateSip#client_response_header_erase}
  */
  readonly clientResponseHeaderErase?: string;
  /**
  * Insert a SIP header (Header Content (Format: "name:value"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#client_response_header_insert SlbTemplateSip#client_response_header_insert}
  */
  readonly clientResponseHeaderInsert?: string;
  /**
  * 'insert-if-not-exist': Only insert the header when it does not exist; 'insert-always': Always insert the header even when there is a header with the same name;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#insert_condition_client_response SlbTemplateSip#insert_condition_client_response}
  */
  readonly insertConditionClientResponse?: string;
}

export function slbTemplateSipClientResponseHeaderToTerraform(struct?: SlbTemplateSipClientResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_response_erase_all: cdktf.numberToTerraform(struct!.clientResponseEraseAll),
    client_response_header_erase: cdktf.stringToTerraform(struct!.clientResponseHeaderErase),
    client_response_header_insert: cdktf.stringToTerraform(struct!.clientResponseHeaderInsert),
    insert_condition_client_response: cdktf.stringToTerraform(struct!.insertConditionClientResponse),
  }
}


export function slbTemplateSipClientResponseHeaderToHclTerraform(struct?: SlbTemplateSipClientResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_response_erase_all: {
      value: cdktf.numberToHclTerraform(struct!.clientResponseEraseAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_response_header_erase: {
      value: cdktf.stringToHclTerraform(struct!.clientResponseHeaderErase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_response_header_insert: {
      value: cdktf.stringToHclTerraform(struct!.clientResponseHeaderInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_condition_client_response: {
      value: cdktf.stringToHclTerraform(struct!.insertConditionClientResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSipClientResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateSipClientResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientResponseEraseAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientResponseEraseAll = this._clientResponseEraseAll;
    }
    if (this._clientResponseHeaderErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientResponseHeaderErase = this._clientResponseHeaderErase;
    }
    if (this._clientResponseHeaderInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientResponseHeaderInsert = this._clientResponseHeaderInsert;
    }
    if (this._insertConditionClientResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertConditionClientResponse = this._insertConditionClientResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSipClientResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientResponseEraseAll = undefined;
      this._clientResponseHeaderErase = undefined;
      this._clientResponseHeaderInsert = undefined;
      this._insertConditionClientResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientResponseEraseAll = value.clientResponseEraseAll;
      this._clientResponseHeaderErase = value.clientResponseHeaderErase;
      this._clientResponseHeaderInsert = value.clientResponseHeaderInsert;
      this._insertConditionClientResponse = value.insertConditionClientResponse;
    }
  }

  // client_response_erase_all - computed: false, optional: true, required: false
  private _clientResponseEraseAll?: number; 
  public get clientResponseEraseAll() {
    return this.getNumberAttribute('client_response_erase_all');
  }
  public set clientResponseEraseAll(value: number) {
    this._clientResponseEraseAll = value;
  }
  public resetClientResponseEraseAll() {
    this._clientResponseEraseAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResponseEraseAllInput() {
    return this._clientResponseEraseAll;
  }

  // client_response_header_erase - computed: false, optional: true, required: false
  private _clientResponseHeaderErase?: string; 
  public get clientResponseHeaderErase() {
    return this.getStringAttribute('client_response_header_erase');
  }
  public set clientResponseHeaderErase(value: string) {
    this._clientResponseHeaderErase = value;
  }
  public resetClientResponseHeaderErase() {
    this._clientResponseHeaderErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResponseHeaderEraseInput() {
    return this._clientResponseHeaderErase;
  }

  // client_response_header_insert - computed: false, optional: true, required: false
  private _clientResponseHeaderInsert?: string; 
  public get clientResponseHeaderInsert() {
    return this.getStringAttribute('client_response_header_insert');
  }
  public set clientResponseHeaderInsert(value: string) {
    this._clientResponseHeaderInsert = value;
  }
  public resetClientResponseHeaderInsert() {
    this._clientResponseHeaderInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResponseHeaderInsertInput() {
    return this._clientResponseHeaderInsert;
  }

  // insert_condition_client_response - computed: false, optional: true, required: false
  private _insertConditionClientResponse?: string; 
  public get insertConditionClientResponse() {
    return this.getStringAttribute('insert_condition_client_response');
  }
  public set insertConditionClientResponse(value: string) {
    this._insertConditionClientResponse = value;
  }
  public resetInsertConditionClientResponse() {
    this._insertConditionClientResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertConditionClientResponseInput() {
    return this._insertConditionClientResponse;
  }
}

export class SlbTemplateSipClientResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateSipClientResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateSipClientResponseHeaderOutputReference {
    return new SlbTemplateSipClientResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateSipExcludeTranslation {
  /**
  * SIP header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#header_string SlbTemplateSip#header_string}
  */
  readonly headerString?: string;
  /**
  * 'start-line': SIP request line or status line; 'header': SIP message headers; 'body': SIP message body;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#translation_value SlbTemplateSip#translation_value}
  */
  readonly translationValue?: string;
}

export function slbTemplateSipExcludeTranslationToTerraform(struct?: SlbTemplateSipExcludeTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_string: cdktf.stringToTerraform(struct!.headerString),
    translation_value: cdktf.stringToTerraform(struct!.translationValue),
  }
}


export function slbTemplateSipExcludeTranslationToHclTerraform(struct?: SlbTemplateSipExcludeTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_string: {
      value: cdktf.stringToHclTerraform(struct!.headerString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translation_value: {
      value: cdktf.stringToHclTerraform(struct!.translationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSipExcludeTranslationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateSipExcludeTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerString = this._headerString;
    }
    if (this._translationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.translationValue = this._translationValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSipExcludeTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerString = undefined;
      this._translationValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerString = value.headerString;
      this._translationValue = value.translationValue;
    }
  }

  // header_string - computed: false, optional: true, required: false
  private _headerString?: string; 
  public get headerString() {
    return this.getStringAttribute('header_string');
  }
  public set headerString(value: string) {
    this._headerString = value;
  }
  public resetHeaderString() {
    this._headerString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerStringInput() {
    return this._headerString;
  }

  // translation_value - computed: false, optional: true, required: false
  private _translationValue?: string; 
  public get translationValue() {
    return this.getStringAttribute('translation_value');
  }
  public set translationValue(value: string) {
    this._translationValue = value;
  }
  public resetTranslationValue() {
    this._translationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationValueInput() {
    return this._translationValue;
  }
}

export class SlbTemplateSipExcludeTranslationList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateSipExcludeTranslation[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateSipExcludeTranslationOutputReference {
    return new SlbTemplateSipExcludeTranslationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateSipServerRequestHeader {
  /**
  * 'insert-if-not-exist': Only insert the header when it does not exist; 'insert-always': Always insert the header even when there is a header with the same name;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#insert_condition_server_request SlbTemplateSip#insert_condition_server_request}
  */
  readonly insertConditionServerRequest?: string;
  /**
  * Erase all headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_request_erase_all SlbTemplateSip#server_request_erase_all}
  */
  readonly serverRequestEraseAll?: number;
  /**
  * Erase a SIP header (Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_request_header_erase SlbTemplateSip#server_request_header_erase}
  */
  readonly serverRequestHeaderErase?: string;
  /**
  * Insert a SIP header (Header Content (Format: "name:value"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_request_header_insert SlbTemplateSip#server_request_header_insert}
  */
  readonly serverRequestHeaderInsert?: string;
}

export function slbTemplateSipServerRequestHeaderToTerraform(struct?: SlbTemplateSipServerRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_condition_server_request: cdktf.stringToTerraform(struct!.insertConditionServerRequest),
    server_request_erase_all: cdktf.numberToTerraform(struct!.serverRequestEraseAll),
    server_request_header_erase: cdktf.stringToTerraform(struct!.serverRequestHeaderErase),
    server_request_header_insert: cdktf.stringToTerraform(struct!.serverRequestHeaderInsert),
  }
}


export function slbTemplateSipServerRequestHeaderToHclTerraform(struct?: SlbTemplateSipServerRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_condition_server_request: {
      value: cdktf.stringToHclTerraform(struct!.insertConditionServerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_request_erase_all: {
      value: cdktf.numberToHclTerraform(struct!.serverRequestEraseAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_request_header_erase: {
      value: cdktf.stringToHclTerraform(struct!.serverRequestHeaderErase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_request_header_insert: {
      value: cdktf.stringToHclTerraform(struct!.serverRequestHeaderInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSipServerRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateSipServerRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertConditionServerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertConditionServerRequest = this._insertConditionServerRequest;
    }
    if (this._serverRequestEraseAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestEraseAll = this._serverRequestEraseAll;
    }
    if (this._serverRequestHeaderErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestHeaderErase = this._serverRequestHeaderErase;
    }
    if (this._serverRequestHeaderInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestHeaderInsert = this._serverRequestHeaderInsert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSipServerRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertConditionServerRequest = undefined;
      this._serverRequestEraseAll = undefined;
      this._serverRequestHeaderErase = undefined;
      this._serverRequestHeaderInsert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertConditionServerRequest = value.insertConditionServerRequest;
      this._serverRequestEraseAll = value.serverRequestEraseAll;
      this._serverRequestHeaderErase = value.serverRequestHeaderErase;
      this._serverRequestHeaderInsert = value.serverRequestHeaderInsert;
    }
  }

  // insert_condition_server_request - computed: false, optional: true, required: false
  private _insertConditionServerRequest?: string; 
  public get insertConditionServerRequest() {
    return this.getStringAttribute('insert_condition_server_request');
  }
  public set insertConditionServerRequest(value: string) {
    this._insertConditionServerRequest = value;
  }
  public resetInsertConditionServerRequest() {
    this._insertConditionServerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertConditionServerRequestInput() {
    return this._insertConditionServerRequest;
  }

  // server_request_erase_all - computed: false, optional: true, required: false
  private _serverRequestEraseAll?: number; 
  public get serverRequestEraseAll() {
    return this.getNumberAttribute('server_request_erase_all');
  }
  public set serverRequestEraseAll(value: number) {
    this._serverRequestEraseAll = value;
  }
  public resetServerRequestEraseAll() {
    this._serverRequestEraseAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestEraseAllInput() {
    return this._serverRequestEraseAll;
  }

  // server_request_header_erase - computed: false, optional: true, required: false
  private _serverRequestHeaderErase?: string; 
  public get serverRequestHeaderErase() {
    return this.getStringAttribute('server_request_header_erase');
  }
  public set serverRequestHeaderErase(value: string) {
    this._serverRequestHeaderErase = value;
  }
  public resetServerRequestHeaderErase() {
    this._serverRequestHeaderErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestHeaderEraseInput() {
    return this._serverRequestHeaderErase;
  }

  // server_request_header_insert - computed: false, optional: true, required: false
  private _serverRequestHeaderInsert?: string; 
  public get serverRequestHeaderInsert() {
    return this.getStringAttribute('server_request_header_insert');
  }
  public set serverRequestHeaderInsert(value: string) {
    this._serverRequestHeaderInsert = value;
  }
  public resetServerRequestHeaderInsert() {
    this._serverRequestHeaderInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestHeaderInsertInput() {
    return this._serverRequestHeaderInsert;
  }
}

export class SlbTemplateSipServerRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateSipServerRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateSipServerRequestHeaderOutputReference {
    return new SlbTemplateSipServerRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateSipServerResponseHeader {
  /**
  * 'insert-if-not-exist': Only insert the header when it does not exist; 'insert-always': Always insert the header even when there is a header with the same name;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#insert_condition_server_response SlbTemplateSip#insert_condition_server_response}
  */
  readonly insertConditionServerResponse?: string;
  /**
  * Erase all headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_response_erase_all SlbTemplateSip#server_response_erase_all}
  */
  readonly serverResponseEraseAll?: number;
  /**
  * Erase a SIP header (Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_response_header_erase SlbTemplateSip#server_response_header_erase}
  */
  readonly serverResponseHeaderErase?: string;
  /**
  * Insert a SIP header (Header Content (Format: "name:value"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#server_response_header_insert SlbTemplateSip#server_response_header_insert}
  */
  readonly serverResponseHeaderInsert?: string;
}

export function slbTemplateSipServerResponseHeaderToTerraform(struct?: SlbTemplateSipServerResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_condition_server_response: cdktf.stringToTerraform(struct!.insertConditionServerResponse),
    server_response_erase_all: cdktf.numberToTerraform(struct!.serverResponseEraseAll),
    server_response_header_erase: cdktf.stringToTerraform(struct!.serverResponseHeaderErase),
    server_response_header_insert: cdktf.stringToTerraform(struct!.serverResponseHeaderInsert),
  }
}


export function slbTemplateSipServerResponseHeaderToHclTerraform(struct?: SlbTemplateSipServerResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_condition_server_response: {
      value: cdktf.stringToHclTerraform(struct!.insertConditionServerResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_response_erase_all: {
      value: cdktf.numberToHclTerraform(struct!.serverResponseEraseAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_response_header_erase: {
      value: cdktf.stringToHclTerraform(struct!.serverResponseHeaderErase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_response_header_insert: {
      value: cdktf.stringToHclTerraform(struct!.serverResponseHeaderInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSipServerResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateSipServerResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertConditionServerResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertConditionServerResponse = this._insertConditionServerResponse;
    }
    if (this._serverResponseEraseAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseEraseAll = this._serverResponseEraseAll;
    }
    if (this._serverResponseHeaderErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseHeaderErase = this._serverResponseHeaderErase;
    }
    if (this._serverResponseHeaderInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseHeaderInsert = this._serverResponseHeaderInsert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSipServerResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertConditionServerResponse = undefined;
      this._serverResponseEraseAll = undefined;
      this._serverResponseHeaderErase = undefined;
      this._serverResponseHeaderInsert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertConditionServerResponse = value.insertConditionServerResponse;
      this._serverResponseEraseAll = value.serverResponseEraseAll;
      this._serverResponseHeaderErase = value.serverResponseHeaderErase;
      this._serverResponseHeaderInsert = value.serverResponseHeaderInsert;
    }
  }

  // insert_condition_server_response - computed: false, optional: true, required: false
  private _insertConditionServerResponse?: string; 
  public get insertConditionServerResponse() {
    return this.getStringAttribute('insert_condition_server_response');
  }
  public set insertConditionServerResponse(value: string) {
    this._insertConditionServerResponse = value;
  }
  public resetInsertConditionServerResponse() {
    this._insertConditionServerResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertConditionServerResponseInput() {
    return this._insertConditionServerResponse;
  }

  // server_response_erase_all - computed: false, optional: true, required: false
  private _serverResponseEraseAll?: number; 
  public get serverResponseEraseAll() {
    return this.getNumberAttribute('server_response_erase_all');
  }
  public set serverResponseEraseAll(value: number) {
    this._serverResponseEraseAll = value;
  }
  public resetServerResponseEraseAll() {
    this._serverResponseEraseAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseEraseAllInput() {
    return this._serverResponseEraseAll;
  }

  // server_response_header_erase - computed: false, optional: true, required: false
  private _serverResponseHeaderErase?: string; 
  public get serverResponseHeaderErase() {
    return this.getStringAttribute('server_response_header_erase');
  }
  public set serverResponseHeaderErase(value: string) {
    this._serverResponseHeaderErase = value;
  }
  public resetServerResponseHeaderErase() {
    this._serverResponseHeaderErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseHeaderEraseInput() {
    return this._serverResponseHeaderErase;
  }

  // server_response_header_insert - computed: false, optional: true, required: false
  private _serverResponseHeaderInsert?: string; 
  public get serverResponseHeaderInsert() {
    return this.getStringAttribute('server_response_header_insert');
  }
  public set serverResponseHeaderInsert(value: string) {
    this._serverResponseHeaderInsert = value;
  }
  public resetServerResponseHeaderInsert() {
    this._serverResponseHeaderInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseHeaderInsertInput() {
    return this._serverResponseHeaderInsert;
  }
}

export class SlbTemplateSipServerResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateSipServerResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateSipServerResponseHeaderOutputReference {
    return new SlbTemplateSipServerResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip thunder_slb_template_sip}
*/
export class SlbTemplateSip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateSip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateSip to import
  * @param importFromId The id of the existing SlbTemplateSip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateSip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_sip thunder_slb_template_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateSipConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateSipConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_sip',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclId = config.aclId;
    this._aclNameValue = config.aclNameValue;
    this._algDestNat = config.algDestNat;
    this._algSourceNat = config.algSourceNat;
    this._callIdPersistDisable = config.callIdPersistDisable;
    this._clientKeepAlive = config.clientKeepAlive;
    this._dialogAware = config.dialogAware;
    this._dropWhenClientFail = config.dropWhenClientFail;
    this._dropWhenServerFail = config.dropWhenServerFail;
    this._failedClientSelection = config.failedClientSelection;
    this._failedClientSelectionMessage = config.failedClientSelectionMessage;
    this._failedServerSelection = config.failedServerSelection;
    this._failedServerSelectionMessage = config.failedServerSelectionMessage;
    this._id = config.id;
    this._insertClientIp = config.insertClientIp;
    this._interval = config.interval;
    this._keepServerIpIfMatchAcl = config.keepServerIpIfMatchAcl;
    this._name = config.name;
    this._pstnGw = config.pstnGw;
    this._serverKeepAlive = config.serverKeepAlive;
    this._serverSelectionPerRequest = config.serverSelectionPerRequest;
    this._serviceGroup = config.serviceGroup;
    this._smpCallIdRtpSession = config.smpCallIdRtpSession;
    this._timeout = config.timeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._clientRequestHeader.internalValue = config.clientRequestHeader;
    this._clientResponseHeader.internalValue = config.clientResponseHeader;
    this._excludeTranslation.internalValue = config.excludeTranslation;
    this._serverRequestHeader.internalValue = config.serverRequestHeader;
    this._serverResponseHeader.internalValue = config.serverResponseHeader;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_name_value - computed: false, optional: true, required: false
  private _aclNameValue?: string; 
  public get aclNameValue() {
    return this.getStringAttribute('acl_name_value');
  }
  public set aclNameValue(value: string) {
    this._aclNameValue = value;
  }
  public resetAclNameValue() {
    this._aclNameValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameValueInput() {
    return this._aclNameValue;
  }

  // alg_dest_nat - computed: false, optional: true, required: false
  private _algDestNat?: number; 
  public get algDestNat() {
    return this.getNumberAttribute('alg_dest_nat');
  }
  public set algDestNat(value: number) {
    this._algDestNat = value;
  }
  public resetAlgDestNat() {
    this._algDestNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algDestNatInput() {
    return this._algDestNat;
  }

  // alg_source_nat - computed: false, optional: true, required: false
  private _algSourceNat?: number; 
  public get algSourceNat() {
    return this.getNumberAttribute('alg_source_nat');
  }
  public set algSourceNat(value: number) {
    this._algSourceNat = value;
  }
  public resetAlgSourceNat() {
    this._algSourceNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algSourceNatInput() {
    return this._algSourceNat;
  }

  // call_id_persist_disable - computed: false, optional: true, required: false
  private _callIdPersistDisable?: number; 
  public get callIdPersistDisable() {
    return this.getNumberAttribute('call_id_persist_disable');
  }
  public set callIdPersistDisable(value: number) {
    this._callIdPersistDisable = value;
  }
  public resetCallIdPersistDisable() {
    this._callIdPersistDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callIdPersistDisableInput() {
    return this._callIdPersistDisable;
  }

  // client_keep_alive - computed: false, optional: true, required: false
  private _clientKeepAlive?: number; 
  public get clientKeepAlive() {
    return this.getNumberAttribute('client_keep_alive');
  }
  public set clientKeepAlive(value: number) {
    this._clientKeepAlive = value;
  }
  public resetClientKeepAlive() {
    this._clientKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeepAliveInput() {
    return this._clientKeepAlive;
  }

  // dialog_aware - computed: false, optional: true, required: false
  private _dialogAware?: number; 
  public get dialogAware() {
    return this.getNumberAttribute('dialog_aware');
  }
  public set dialogAware(value: number) {
    this._dialogAware = value;
  }
  public resetDialogAware() {
    this._dialogAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogAwareInput() {
    return this._dialogAware;
  }

  // drop_when_client_fail - computed: false, optional: true, required: false
  private _dropWhenClientFail?: number; 
  public get dropWhenClientFail() {
    return this.getNumberAttribute('drop_when_client_fail');
  }
  public set dropWhenClientFail(value: number) {
    this._dropWhenClientFail = value;
  }
  public resetDropWhenClientFail() {
    this._dropWhenClientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWhenClientFailInput() {
    return this._dropWhenClientFail;
  }

  // drop_when_server_fail - computed: false, optional: true, required: false
  private _dropWhenServerFail?: number; 
  public get dropWhenServerFail() {
    return this.getNumberAttribute('drop_when_server_fail');
  }
  public set dropWhenServerFail(value: number) {
    this._dropWhenServerFail = value;
  }
  public resetDropWhenServerFail() {
    this._dropWhenServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWhenServerFailInput() {
    return this._dropWhenServerFail;
  }

  // failed_client_selection - computed: false, optional: true, required: false
  private _failedClientSelection?: number; 
  public get failedClientSelection() {
    return this.getNumberAttribute('failed_client_selection');
  }
  public set failedClientSelection(value: number) {
    this._failedClientSelection = value;
  }
  public resetFailedClientSelection() {
    this._failedClientSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedClientSelectionInput() {
    return this._failedClientSelection;
  }

  // failed_client_selection_message - computed: false, optional: true, required: false
  private _failedClientSelectionMessage?: string; 
  public get failedClientSelectionMessage() {
    return this.getStringAttribute('failed_client_selection_message');
  }
  public set failedClientSelectionMessage(value: string) {
    this._failedClientSelectionMessage = value;
  }
  public resetFailedClientSelectionMessage() {
    this._failedClientSelectionMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedClientSelectionMessageInput() {
    return this._failedClientSelectionMessage;
  }

  // failed_server_selection - computed: false, optional: true, required: false
  private _failedServerSelection?: number; 
  public get failedServerSelection() {
    return this.getNumberAttribute('failed_server_selection');
  }
  public set failedServerSelection(value: number) {
    this._failedServerSelection = value;
  }
  public resetFailedServerSelection() {
    this._failedServerSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedServerSelectionInput() {
    return this._failedServerSelection;
  }

  // failed_server_selection_message - computed: false, optional: true, required: false
  private _failedServerSelectionMessage?: string; 
  public get failedServerSelectionMessage() {
    return this.getStringAttribute('failed_server_selection_message');
  }
  public set failedServerSelectionMessage(value: string) {
    this._failedServerSelectionMessage = value;
  }
  public resetFailedServerSelectionMessage() {
    this._failedServerSelectionMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedServerSelectionMessageInput() {
    return this._failedServerSelectionMessage;
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

  // insert_client_ip - computed: false, optional: true, required: false
  private _insertClientIp?: number; 
  public get insertClientIp() {
    return this.getNumberAttribute('insert_client_ip');
  }
  public set insertClientIp(value: number) {
    this._insertClientIp = value;
  }
  public resetInsertClientIp() {
    this._insertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpInput() {
    return this._insertClientIp;
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

  // keep_server_ip_if_match_acl - computed: false, optional: true, required: false
  private _keepServerIpIfMatchAcl?: number; 
  public get keepServerIpIfMatchAcl() {
    return this.getNumberAttribute('keep_server_ip_if_match_acl');
  }
  public set keepServerIpIfMatchAcl(value: number) {
    this._keepServerIpIfMatchAcl = value;
  }
  public resetKeepServerIpIfMatchAcl() {
    this._keepServerIpIfMatchAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepServerIpIfMatchAclInput() {
    return this._keepServerIpIfMatchAcl;
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

  // pstn_gw - computed: false, optional: true, required: false
  private _pstnGw?: string; 
  public get pstnGw() {
    return this.getStringAttribute('pstn_gw');
  }
  public set pstnGw(value: string) {
    this._pstnGw = value;
  }
  public resetPstnGw() {
    this._pstnGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pstnGwInput() {
    return this._pstnGw;
  }

  // server_keep_alive - computed: false, optional: true, required: false
  private _serverKeepAlive?: number; 
  public get serverKeepAlive() {
    return this.getNumberAttribute('server_keep_alive');
  }
  public set serverKeepAlive(value: number) {
    this._serverKeepAlive = value;
  }
  public resetServerKeepAlive() {
    this._serverKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeepAliveInput() {
    return this._serverKeepAlive;
  }

  // server_selection_per_request - computed: false, optional: true, required: false
  private _serverSelectionPerRequest?: number; 
  public get serverSelectionPerRequest() {
    return this.getNumberAttribute('server_selection_per_request');
  }
  public set serverSelectionPerRequest(value: number) {
    this._serverSelectionPerRequest = value;
  }
  public resetServerSelectionPerRequest() {
    this._serverSelectionPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionPerRequestInput() {
    return this._serverSelectionPerRequest;
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

  // smp_call_id_rtp_session - computed: false, optional: true, required: false
  private _smpCallIdRtpSession?: number; 
  public get smpCallIdRtpSession() {
    return this.getNumberAttribute('smp_call_id_rtp_session');
  }
  public set smpCallIdRtpSession(value: number) {
    this._smpCallIdRtpSession = value;
  }
  public resetSmpCallIdRtpSession() {
    this._smpCallIdRtpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpCallIdRtpSessionInput() {
    return this._smpCallIdRtpSession;
  }

  // timeout - computed: false, optional: true, required: false
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

  // client_request_header - computed: false, optional: true, required: false
  private _clientRequestHeader = new SlbTemplateSipClientRequestHeaderList(this, "client_request_header", false);
  public get clientRequestHeader() {
    return this._clientRequestHeader;
  }
  public putClientRequestHeader(value: SlbTemplateSipClientRequestHeader[] | cdktf.IResolvable) {
    this._clientRequestHeader.internalValue = value;
  }
  public resetClientRequestHeader() {
    this._clientRequestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestHeaderInput() {
    return this._clientRequestHeader.internalValue;
  }

  // client_response_header - computed: false, optional: true, required: false
  private _clientResponseHeader = new SlbTemplateSipClientResponseHeaderList(this, "client_response_header", false);
  public get clientResponseHeader() {
    return this._clientResponseHeader;
  }
  public putClientResponseHeader(value: SlbTemplateSipClientResponseHeader[] | cdktf.IResolvable) {
    this._clientResponseHeader.internalValue = value;
  }
  public resetClientResponseHeader() {
    this._clientResponseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResponseHeaderInput() {
    return this._clientResponseHeader.internalValue;
  }

  // exclude_translation - computed: false, optional: true, required: false
  private _excludeTranslation = new SlbTemplateSipExcludeTranslationList(this, "exclude_translation", false);
  public get excludeTranslation() {
    return this._excludeTranslation;
  }
  public putExcludeTranslation(value: SlbTemplateSipExcludeTranslation[] | cdktf.IResolvable) {
    this._excludeTranslation.internalValue = value;
  }
  public resetExcludeTranslation() {
    this._excludeTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTranslationInput() {
    return this._excludeTranslation.internalValue;
  }

  // server_request_header - computed: false, optional: true, required: false
  private _serverRequestHeader = new SlbTemplateSipServerRequestHeaderList(this, "server_request_header", false);
  public get serverRequestHeader() {
    return this._serverRequestHeader;
  }
  public putServerRequestHeader(value: SlbTemplateSipServerRequestHeader[] | cdktf.IResolvable) {
    this._serverRequestHeader.internalValue = value;
  }
  public resetServerRequestHeader() {
    this._serverRequestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestHeaderInput() {
    return this._serverRequestHeader.internalValue;
  }

  // server_response_header - computed: false, optional: true, required: false
  private _serverResponseHeader = new SlbTemplateSipServerResponseHeaderList(this, "server_response_header", false);
  public get serverResponseHeader() {
    return this._serverResponseHeader;
  }
  public putServerResponseHeader(value: SlbTemplateSipServerResponseHeader[] | cdktf.IResolvable) {
    this._serverResponseHeader.internalValue = value;
  }
  public resetServerResponseHeader() {
    this._serverResponseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseHeaderInput() {
    return this._serverResponseHeader.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_id: cdktf.numberToTerraform(this._aclId),
      acl_name_value: cdktf.stringToTerraform(this._aclNameValue),
      alg_dest_nat: cdktf.numberToTerraform(this._algDestNat),
      alg_source_nat: cdktf.numberToTerraform(this._algSourceNat),
      call_id_persist_disable: cdktf.numberToTerraform(this._callIdPersistDisable),
      client_keep_alive: cdktf.numberToTerraform(this._clientKeepAlive),
      dialog_aware: cdktf.numberToTerraform(this._dialogAware),
      drop_when_client_fail: cdktf.numberToTerraform(this._dropWhenClientFail),
      drop_when_server_fail: cdktf.numberToTerraform(this._dropWhenServerFail),
      failed_client_selection: cdktf.numberToTerraform(this._failedClientSelection),
      failed_client_selection_message: cdktf.stringToTerraform(this._failedClientSelectionMessage),
      failed_server_selection: cdktf.numberToTerraform(this._failedServerSelection),
      failed_server_selection_message: cdktf.stringToTerraform(this._failedServerSelectionMessage),
      id: cdktf.stringToTerraform(this._id),
      insert_client_ip: cdktf.numberToTerraform(this._insertClientIp),
      interval: cdktf.numberToTerraform(this._interval),
      keep_server_ip_if_match_acl: cdktf.numberToTerraform(this._keepServerIpIfMatchAcl),
      name: cdktf.stringToTerraform(this._name),
      pstn_gw: cdktf.stringToTerraform(this._pstnGw),
      server_keep_alive: cdktf.numberToTerraform(this._serverKeepAlive),
      server_selection_per_request: cdktf.numberToTerraform(this._serverSelectionPerRequest),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      smp_call_id_rtp_session: cdktf.numberToTerraform(this._smpCallIdRtpSession),
      timeout: cdktf.numberToTerraform(this._timeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      client_request_header: cdktf.listMapper(slbTemplateSipClientRequestHeaderToTerraform, true)(this._clientRequestHeader.internalValue),
      client_response_header: cdktf.listMapper(slbTemplateSipClientResponseHeaderToTerraform, true)(this._clientResponseHeader.internalValue),
      exclude_translation: cdktf.listMapper(slbTemplateSipExcludeTranslationToTerraform, true)(this._excludeTranslation.internalValue),
      server_request_header: cdktf.listMapper(slbTemplateSipServerRequestHeaderToTerraform, true)(this._serverRequestHeader.internalValue),
      server_response_header: cdktf.listMapper(slbTemplateSipServerResponseHeaderToTerraform, true)(this._serverResponseHeader.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_id: {
        value: cdktf.numberToHclTerraform(this._aclId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acl_name_value: {
        value: cdktf.stringToHclTerraform(this._aclNameValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alg_dest_nat: {
        value: cdktf.numberToHclTerraform(this._algDestNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alg_source_nat: {
        value: cdktf.numberToHclTerraform(this._algSourceNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      call_id_persist_disable: {
        value: cdktf.numberToHclTerraform(this._callIdPersistDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_keep_alive: {
        value: cdktf.numberToHclTerraform(this._clientKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dialog_aware: {
        value: cdktf.numberToHclTerraform(this._dialogAware),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_when_client_fail: {
        value: cdktf.numberToHclTerraform(this._dropWhenClientFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_when_server_fail: {
        value: cdktf.numberToHclTerraform(this._dropWhenServerFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_client_selection: {
        value: cdktf.numberToHclTerraform(this._failedClientSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_client_selection_message: {
        value: cdktf.stringToHclTerraform(this._failedClientSelectionMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_server_selection: {
        value: cdktf.numberToHclTerraform(this._failedServerSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_server_selection_message: {
        value: cdktf.stringToHclTerraform(this._failedServerSelectionMessage),
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
      insert_client_ip: {
        value: cdktf.numberToHclTerraform(this._insertClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_server_ip_if_match_acl: {
        value: cdktf.numberToHclTerraform(this._keepServerIpIfMatchAcl),
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
      pstn_gw: {
        value: cdktf.stringToHclTerraform(this._pstnGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_keep_alive: {
        value: cdktf.numberToHclTerraform(this._serverKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_selection_per_request: {
        value: cdktf.numberToHclTerraform(this._serverSelectionPerRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smp_call_id_rtp_session: {
        value: cdktf.numberToHclTerraform(this._smpCallIdRtpSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      client_request_header: {
        value: cdktf.listMapperHcl(slbTemplateSipClientRequestHeaderToHclTerraform, true)(this._clientRequestHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSipClientRequestHeaderList",
      },
      client_response_header: {
        value: cdktf.listMapperHcl(slbTemplateSipClientResponseHeaderToHclTerraform, true)(this._clientResponseHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSipClientResponseHeaderList",
      },
      exclude_translation: {
        value: cdktf.listMapperHcl(slbTemplateSipExcludeTranslationToHclTerraform, true)(this._excludeTranslation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSipExcludeTranslationList",
      },
      server_request_header: {
        value: cdktf.listMapperHcl(slbTemplateSipServerRequestHeaderToHclTerraform, true)(this._serverRequestHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSipServerRequestHeaderList",
      },
      server_response_header: {
        value: cdktf.listMapperHcl(slbTemplateSipServerResponseHeaderToHclTerraform, true)(this._serverResponseHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSipServerResponseHeaderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
