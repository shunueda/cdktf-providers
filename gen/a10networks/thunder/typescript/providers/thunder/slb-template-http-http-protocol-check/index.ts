// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateHttpHttpProtocolCheckAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#get_and_payload SlbTemplateHttpHttpProtocolCheckA#get_and_payload}
  */
  readonly fetchAndPayload?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#h2up_content_length_alias SlbTemplateHttpHttpProtocolCheckA#h2up_content_length_alias}
  */
  readonly h2UpContentLengthAlias?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#h2up_with_host_and_auth SlbTemplateHttpHttpProtocolCheckA#h2up_with_host_and_auth}
  */
  readonly h2UpWithHostAndAuth?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#h2up_with_transfer_encoding SlbTemplateHttpHttpProtocolCheckA#h2up_with_transfer_encoding}
  */
  readonly h2UpWithTransferEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#id SlbTemplateHttpHttpProtocolCheckA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#malformed_h2up_header_value SlbTemplateHttpHttpProtocolCheckA#malformed_h2up_header_value}
  */
  readonly malformedH2UpHeaderValue?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#malformed_h2up_scheme_value SlbTemplateHttpHttpProtocolCheckA#malformed_h2up_scheme_value}
  */
  readonly malformedH2UpSchemeValue?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#multiple_content_length SlbTemplateHttpHttpProtocolCheckA#multiple_content_length}
  */
  readonly multipleContentLength?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#multiple_transfer_encoding SlbTemplateHttpHttpProtocolCheckA#multiple_transfer_encoding}
  */
  readonly multipleTransferEncoding?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#name SlbTemplateHttpHttpProtocolCheckA#name}
  */
  readonly name: string;
  /**
  * 'drop': Drop the request and Send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#transfer_encoding_and_content_length SlbTemplateHttpHttpProtocolCheckA#transfer_encoding_and_content_length}
  */
  readonly transferEncodingAndContentLength?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#uuid SlbTemplateHttpHttpProtocolCheckA#uuid}
  */
  readonly uuid?: string;
  /**
  * header_filter_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#header_filter_rule_list SlbTemplateHttpHttpProtocolCheckA#header_filter_rule_list}
  */
  readonly headerFilterRuleList?: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA[] | cdktf.IResolvable;
}
export interface SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA {
  /**
  * 'drop': Drop the request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#action_value SlbTemplateHttpHttpProtocolCheckA#action_value}
  */
  readonly actionValue?: string;
  /**
  * Header name value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#header_name_value SlbTemplateHttpHttpProtocolCheckA#header_name_value}
  */
  readonly headerNameValue?: string;
  /**
  * Header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#header_value_value SlbTemplateHttpHttpProtocolCheckA#header_value_value}
  */
  readonly headerValueValue?: string;
  /**
  * 'full-text': Full text match; 'pcre': PCRE match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#match_type_value SlbTemplateHttpHttpProtocolCheckA#match_type_value}
  */
  readonly matchTypeValue?: string;
  /**
  * Specify a sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#seq_num SlbTemplateHttpHttpProtocolCheckA#seq_num}
  */
  readonly seqNum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#user_tag SlbTemplateHttpHttpProtocolCheckA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#uuid SlbTemplateHttpHttpProtocolCheckA#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAToTerraform(struct?: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    header_name_value: cdktf.stringToTerraform(struct!.headerNameValue),
    header_value_value: cdktf.stringToTerraform(struct!.headerValueValue),
    match_type_value: cdktf.stringToTerraform(struct!.matchTypeValue),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAToHclTerraform(struct?: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_value: {
      value: cdktf.stringToHclTerraform(struct!.headerNameValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValueValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type_value: {
      value: cdktf.stringToHclTerraform(struct!.matchTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
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

export class SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._headerNameValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameValue = this._headerNameValue;
    }
    if (this._headerValueValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueValue = this._headerValueValue;
    }
    if (this._matchTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTypeValue = this._matchTypeValue;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionValue = undefined;
      this._headerNameValue = undefined;
      this._headerValueValue = undefined;
      this._matchTypeValue = undefined;
      this._seqNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionValue = value.actionValue;
      this._headerNameValue = value.headerNameValue;
      this._headerValueValue = value.headerValueValue;
      this._matchTypeValue = value.matchTypeValue;
      this._seqNum = value.seqNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
  }

  // header_name_value - computed: false, optional: true, required: false
  private _headerNameValue?: string; 
  public get headerNameValue() {
    return this.getStringAttribute('header_name_value');
  }
  public set headerNameValue(value: string) {
    this._headerNameValue = value;
  }
  public resetHeaderNameValue() {
    this._headerNameValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameValueInput() {
    return this._headerNameValue;
  }

  // header_value_value - computed: false, optional: true, required: false
  private _headerValueValue?: string; 
  public get headerValueValue() {
    return this.getStringAttribute('header_value_value');
  }
  public set headerValueValue(value: string) {
    this._headerValueValue = value;
  }
  public resetHeaderValueValue() {
    this._headerValueValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueValueInput() {
    return this._headerValueValue;
  }

  // match_type_value - computed: false, optional: true, required: false
  private _matchTypeValue?: string; 
  public get matchTypeValue() {
    return this.getStringAttribute('match_type_value');
  }
  public set matchTypeValue(value: string) {
    this._matchTypeValue = value;
  }
  public resetMatchTypeValue() {
    this._matchTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeValueInput() {
    return this._matchTypeValue;
  }

  // seq_num - computed: false, optional: false, required: true
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
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
}

export class SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAOutputReference {
    return new SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check thunder_slb_template_http_http_protocol_check}
*/
export class SlbTemplateHttpHttpProtocolCheckA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_http_http_protocol_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateHttpHttpProtocolCheckA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateHttpHttpProtocolCheckA to import
  * @param importFromId The id of the existing SlbTemplateHttpHttpProtocolCheckA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateHttpHttpProtocolCheckA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_http_http_protocol_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http_http_protocol_check thunder_slb_template_http_http_protocol_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateHttpHttpProtocolCheckAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateHttpHttpProtocolCheckAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_http_http_protocol_check',
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
    this._getAndPayload = config.fetchAndPayload;
    this._h2UpContentLengthAlias = config.h2UpContentLengthAlias;
    this._h2UpWithHostAndAuth = config.h2UpWithHostAndAuth;
    this._h2UpWithTransferEncoding = config.h2UpWithTransferEncoding;
    this._id = config.id;
    this._malformedH2UpHeaderValue = config.malformedH2UpHeaderValue;
    this._malformedH2UpSchemeValue = config.malformedH2UpSchemeValue;
    this._multipleContentLength = config.multipleContentLength;
    this._multipleTransferEncoding = config.multipleTransferEncoding;
    this._name = config.name;
    this._transferEncodingAndContentLength = config.transferEncodingAndContentLength;
    this._uuid = config.uuid;
    this._headerFilterRuleList.internalValue = config.headerFilterRuleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // get_and_payload - computed: false, optional: true, required: false
  private _getAndPayload?: string; 
  public get fetchAndPayload() {
    return this.getStringAttribute('get_and_payload');
  }
  public set fetchAndPayload(value: string) {
    this._getAndPayload = value;
  }
  public resetFetchAndPayload() {
    this._getAndPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAndPayloadInput() {
    return this._getAndPayload;
  }

  // h2up_content_length_alias - computed: false, optional: true, required: false
  private _h2UpContentLengthAlias?: string; 
  public get h2UpContentLengthAlias() {
    return this.getStringAttribute('h2up_content_length_alias');
  }
  public set h2UpContentLengthAlias(value: string) {
    this._h2UpContentLengthAlias = value;
  }
  public resetH2UpContentLengthAlias() {
    this._h2UpContentLengthAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpContentLengthAliasInput() {
    return this._h2UpContentLengthAlias;
  }

  // h2up_with_host_and_auth - computed: false, optional: true, required: false
  private _h2UpWithHostAndAuth?: string; 
  public get h2UpWithHostAndAuth() {
    return this.getStringAttribute('h2up_with_host_and_auth');
  }
  public set h2UpWithHostAndAuth(value: string) {
    this._h2UpWithHostAndAuth = value;
  }
  public resetH2UpWithHostAndAuth() {
    this._h2UpWithHostAndAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpWithHostAndAuthInput() {
    return this._h2UpWithHostAndAuth;
  }

  // h2up_with_transfer_encoding - computed: false, optional: true, required: false
  private _h2UpWithTransferEncoding?: string; 
  public get h2UpWithTransferEncoding() {
    return this.getStringAttribute('h2up_with_transfer_encoding');
  }
  public set h2UpWithTransferEncoding(value: string) {
    this._h2UpWithTransferEncoding = value;
  }
  public resetH2UpWithTransferEncoding() {
    this._h2UpWithTransferEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpWithTransferEncodingInput() {
    return this._h2UpWithTransferEncoding;
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

  // malformed_h2up_header_value - computed: false, optional: true, required: false
  private _malformedH2UpHeaderValue?: string; 
  public get malformedH2UpHeaderValue() {
    return this.getStringAttribute('malformed_h2up_header_value');
  }
  public set malformedH2UpHeaderValue(value: string) {
    this._malformedH2UpHeaderValue = value;
  }
  public resetMalformedH2UpHeaderValue() {
    this._malformedH2UpHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedH2UpHeaderValueInput() {
    return this._malformedH2UpHeaderValue;
  }

  // malformed_h2up_scheme_value - computed: false, optional: true, required: false
  private _malformedH2UpSchemeValue?: string; 
  public get malformedH2UpSchemeValue() {
    return this.getStringAttribute('malformed_h2up_scheme_value');
  }
  public set malformedH2UpSchemeValue(value: string) {
    this._malformedH2UpSchemeValue = value;
  }
  public resetMalformedH2UpSchemeValue() {
    this._malformedH2UpSchemeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedH2UpSchemeValueInput() {
    return this._malformedH2UpSchemeValue;
  }

  // multiple_content_length - computed: false, optional: true, required: false
  private _multipleContentLength?: string; 
  public get multipleContentLength() {
    return this.getStringAttribute('multiple_content_length');
  }
  public set multipleContentLength(value: string) {
    this._multipleContentLength = value;
  }
  public resetMultipleContentLength() {
    this._multipleContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleContentLengthInput() {
    return this._multipleContentLength;
  }

  // multiple_transfer_encoding - computed: false, optional: true, required: false
  private _multipleTransferEncoding?: string; 
  public get multipleTransferEncoding() {
    return this.getStringAttribute('multiple_transfer_encoding');
  }
  public set multipleTransferEncoding(value: string) {
    this._multipleTransferEncoding = value;
  }
  public resetMultipleTransferEncoding() {
    this._multipleTransferEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleTransferEncodingInput() {
    return this._multipleTransferEncoding;
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

  // transfer_encoding_and_content_length - computed: false, optional: true, required: false
  private _transferEncodingAndContentLength?: string; 
  public get transferEncodingAndContentLength() {
    return this.getStringAttribute('transfer_encoding_and_content_length');
  }
  public set transferEncodingAndContentLength(value: string) {
    this._transferEncodingAndContentLength = value;
  }
  public resetTransferEncodingAndContentLength() {
    this._transferEncodingAndContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferEncodingAndContentLengthInput() {
    return this._transferEncodingAndContentLength;
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

  // header_filter_rule_list - computed: false, optional: true, required: false
  private _headerFilterRuleList = new SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAList(this, "header_filter_rule_list", false);
  public get headerFilterRuleList() {
    return this._headerFilterRuleList;
  }
  public putHeaderFilterRuleList(value: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructA[] | cdktf.IResolvable) {
    this._headerFilterRuleList.internalValue = value;
  }
  public resetHeaderFilterRuleList() {
    this._headerFilterRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterRuleListInput() {
    return this._headerFilterRuleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      get_and_payload: cdktf.stringToTerraform(this._getAndPayload),
      h2up_content_length_alias: cdktf.stringToTerraform(this._h2UpContentLengthAlias),
      h2up_with_host_and_auth: cdktf.stringToTerraform(this._h2UpWithHostAndAuth),
      h2up_with_transfer_encoding: cdktf.stringToTerraform(this._h2UpWithTransferEncoding),
      id: cdktf.stringToTerraform(this._id),
      malformed_h2up_header_value: cdktf.stringToTerraform(this._malformedH2UpHeaderValue),
      malformed_h2up_scheme_value: cdktf.stringToTerraform(this._malformedH2UpSchemeValue),
      multiple_content_length: cdktf.stringToTerraform(this._multipleContentLength),
      multiple_transfer_encoding: cdktf.stringToTerraform(this._multipleTransferEncoding),
      name: cdktf.stringToTerraform(this._name),
      transfer_encoding_and_content_length: cdktf.stringToTerraform(this._transferEncodingAndContentLength),
      uuid: cdktf.stringToTerraform(this._uuid),
      header_filter_rule_list: cdktf.listMapper(slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAToTerraform, true)(this._headerFilterRuleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      get_and_payload: {
        value: cdktf.stringToHclTerraform(this._getAndPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h2up_content_length_alias: {
        value: cdktf.stringToHclTerraform(this._h2UpContentLengthAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h2up_with_host_and_auth: {
        value: cdktf.stringToHclTerraform(this._h2UpWithHostAndAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h2up_with_transfer_encoding: {
        value: cdktf.stringToHclTerraform(this._h2UpWithTransferEncoding),
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
      malformed_h2up_header_value: {
        value: cdktf.stringToHclTerraform(this._malformedH2UpHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_h2up_scheme_value: {
        value: cdktf.stringToHclTerraform(this._malformedH2UpSchemeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_content_length: {
        value: cdktf.stringToHclTerraform(this._multipleContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_transfer_encoding: {
        value: cdktf.stringToHclTerraform(this._multipleTransferEncoding),
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
      transfer_encoding_and_content_length: {
        value: cdktf.stringToHclTerraform(this._transferEncodingAndContentLength),
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
      header_filter_rule_list: {
        value: cdktf.listMapperHcl(slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAToHclTerraform, true)(this._headerFilterRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
