// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable DNS Logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#disable SlbTemplateDnsLogging#disable}
  */
  readonly disable?: number;
  /**
  * 'both': Log DNS over tcp and udp; 'tcp': Log DNS over tcp; 'udp': Log DNS over udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#dns_logging_protocol SlbTemplateDnsLogging#dns_logging_protocol}
  */
  readonly dnsLoggingProtocol?: string;
  /**
  * 'all': Log DNS header and question section; 'header': Log DNS header information; 'question': Log DNS question section;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#dns_logging_request_section SlbTemplateDnsLogging#dns_logging_request_section}
  */
  readonly dnsLoggingRequestSection?: string;
  /**
  * 'all': Log DNS header information, answer, authority, additional section content; 'header': Log DNS header information; 'answer': Log DNS header information and answer section content;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#dns_logging_response_section SlbTemplateDnsLogging#dns_logging_response_section}
  */
  readonly dnsLoggingResponseSection?: string;
  /**
  * 'query': DNS Query Logging; 'response': DNS Response Logging; 'both': DNS Query and Response Logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#dns_logging_type SlbTemplateDnsLogging#dns_logging_type}
  */
  readonly dnsLoggingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#id SlbTemplateDnsLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNS Logging Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#name SlbTemplateDnsLogging#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#user_tag SlbTemplateDnsLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#uuid SlbTemplateDnsLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * response_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#response_type SlbTemplateDnsLogging#response_type}
  */
  readonly responseType?: SlbTemplateDnsLoggingResponseType;
}
export interface SlbTemplateDnsLoggingResponseTypeTypeListStruct {
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#caa_type_limit_num SlbTemplateDnsLogging#caa_type_limit_num}
  */
  readonly caaTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#caa_type_no_limit SlbTemplateDnsLogging#caa_type_no_limit}
  */
  readonly caaTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#digest SlbTemplateDnsLogging#digest}
  */
  readonly digest?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#dnskey_type_limit_num SlbTemplateDnsLogging#dnskey_type_limit_num}
  */
  readonly dnskeyTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#dnskey_type_no_limit SlbTemplateDnsLogging#dnskey_type_no_limit}
  */
  readonly dnskeyTypeNoLimit?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#ds_type_limit_num SlbTemplateDnsLogging#ds_type_limit_num}
  */
  readonly dsTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#ds_type_no_limit SlbTemplateDnsLogging#ds_type_no_limit}
  */
  readonly dsTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#length_limit_flag SlbTemplateDnsLogging#length_limit_flag}
  */
  readonly lengthLimitFlag?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#naptr_type_limit_num SlbTemplateDnsLogging#naptr_type_limit_num}
  */
  readonly naptrTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#naptr_type_no_limit SlbTemplateDnsLogging#naptr_type_no_limit}
  */
  readonly naptrTypeNoLimit?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#opt_type_limit_num SlbTemplateDnsLogging#opt_type_limit_num}
  */
  readonly optTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#opt_type_no_limit SlbTemplateDnsLogging#opt_type_no_limit}
  */
  readonly optTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#other_data SlbTemplateDnsLogging#other_data}
  */
  readonly otherData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#public_key SlbTemplateDnsLogging#public_key}
  */
  readonly publicKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#rdata_field SlbTemplateDnsLogging#rdata_field}
  */
  readonly rdataField?: number;
  /**
  * 'TXT': TXT; 'RRSIG': RRSIG; 'TSIG': TSIG; 'DNSKEY': DNSKEY; 'DS': DS; 'CAA': CAA; 'NAPTR': NAPTR; 'OPT': OPT;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#response_type_name SlbTemplateDnsLogging#response_type_name}
  */
  readonly responseTypeName: string;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#rrsig_type_limit_num SlbTemplateDnsLogging#rrsig_type_limit_num}
  */
  readonly rrsigTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#rrsig_type_no_limit SlbTemplateDnsLogging#rrsig_type_no_limit}
  */
  readonly rrsigTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#service_field SlbTemplateDnsLogging#service_field}
  */
  readonly serviceField?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#signature SlbTemplateDnsLogging#signature}
  */
  readonly signature?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#tsig_type_limit_num SlbTemplateDnsLogging#tsig_type_limit_num}
  */
  readonly tsigTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#tsig_type_no_limit SlbTemplateDnsLogging#tsig_type_no_limit}
  */
  readonly tsigTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#txt_data SlbTemplateDnsLogging#txt_data}
  */
  readonly txtData?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#txt_type_limit_num SlbTemplateDnsLogging#txt_type_limit_num}
  */
  readonly txtTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#txt_type_no_limit SlbTemplateDnsLogging#txt_type_no_limit}
  */
  readonly txtTypeNoLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#user_tag SlbTemplateDnsLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#uuid SlbTemplateDnsLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#value_field SlbTemplateDnsLogging#value_field}
  */
  readonly valueField?: number;
}

export function slbTemplateDnsLoggingResponseTypeTypeListStructToTerraform(struct?: SlbTemplateDnsLoggingResponseTypeTypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caa_type_limit_num: cdktf.numberToTerraform(struct!.caaTypeLimitNum),
    caa_type_no_limit: cdktf.numberToTerraform(struct!.caaTypeNoLimit),
    digest: cdktf.numberToTerraform(struct!.digest),
    dnskey_type_limit_num: cdktf.numberToTerraform(struct!.dnskeyTypeLimitNum),
    dnskey_type_no_limit: cdktf.numberToTerraform(struct!.dnskeyTypeNoLimit),
    ds_type_limit_num: cdktf.numberToTerraform(struct!.dsTypeLimitNum),
    ds_type_no_limit: cdktf.numberToTerraform(struct!.dsTypeNoLimit),
    length_limit_flag: cdktf.numberToTerraform(struct!.lengthLimitFlag),
    naptr_type_limit_num: cdktf.numberToTerraform(struct!.naptrTypeLimitNum),
    naptr_type_no_limit: cdktf.numberToTerraform(struct!.naptrTypeNoLimit),
    opt_type_limit_num: cdktf.numberToTerraform(struct!.optTypeLimitNum),
    opt_type_no_limit: cdktf.numberToTerraform(struct!.optTypeNoLimit),
    other_data: cdktf.numberToTerraform(struct!.otherData),
    public_key: cdktf.numberToTerraform(struct!.publicKey),
    rdata_field: cdktf.numberToTerraform(struct!.rdataField),
    response_type_name: cdktf.stringToTerraform(struct!.responseTypeName),
    rrsig_type_limit_num: cdktf.numberToTerraform(struct!.rrsigTypeLimitNum),
    rrsig_type_no_limit: cdktf.numberToTerraform(struct!.rrsigTypeNoLimit),
    service_field: cdktf.numberToTerraform(struct!.serviceField),
    signature: cdktf.numberToTerraform(struct!.signature),
    tsig_type_limit_num: cdktf.numberToTerraform(struct!.tsigTypeLimitNum),
    tsig_type_no_limit: cdktf.numberToTerraform(struct!.tsigTypeNoLimit),
    txt_data: cdktf.numberToTerraform(struct!.txtData),
    txt_type_limit_num: cdktf.numberToTerraform(struct!.txtTypeLimitNum),
    txt_type_no_limit: cdktf.numberToTerraform(struct!.txtTypeNoLimit),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value_field: cdktf.numberToTerraform(struct!.valueField),
  }
}


export function slbTemplateDnsLoggingResponseTypeTypeListStructToHclTerraform(struct?: SlbTemplateDnsLoggingResponseTypeTypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caa_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.caaTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    caa_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.caaTypeNoLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    digest: {
      value: cdktf.numberToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnskey_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.dnskeyTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnskey_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.dnskeyTypeNoLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ds_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.dsTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ds_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.dsTypeNoLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length_limit_flag: {
      value: cdktf.numberToHclTerraform(struct!.lengthLimitFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    naptr_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.naptrTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    naptr_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.naptrTypeNoLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.optTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.optTypeNoLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_data: {
      value: cdktf.numberToHclTerraform(struct!.otherData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktf.numberToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdata_field: {
      value: cdktf.numberToHclTerraform(struct!.rdataField),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_type_name: {
      value: cdktf.stringToHclTerraform(struct!.responseTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rrsig_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.rrsigTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrsig_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.rrsigTypeNoLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_field: {
      value: cdktf.numberToHclTerraform(struct!.serviceField),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signature: {
      value: cdktf.numberToHclTerraform(struct!.signature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tsig_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.tsigTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tsig_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.tsigTypeNoLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_data: {
      value: cdktf.numberToHclTerraform(struct!.txtData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_type_limit_num: {
      value: cdktf.numberToHclTerraform(struct!.txtTypeLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_type_no_limit: {
      value: cdktf.numberToHclTerraform(struct!.txtTypeNoLimit),
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
    value_field: {
      value: cdktf.numberToHclTerraform(struct!.valueField),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLoggingResponseTypeTypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsLoggingResponseTypeTypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caaTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.caaTypeLimitNum = this._caaTypeLimitNum;
    }
    if (this._caaTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.caaTypeNoLimit = this._caaTypeNoLimit;
    }
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._dnskeyTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnskeyTypeLimitNum = this._dnskeyTypeLimitNum;
    }
    if (this._dnskeyTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnskeyTypeNoLimit = this._dnskeyTypeNoLimit;
    }
    if (this._dsTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsTypeLimitNum = this._dsTypeLimitNum;
    }
    if (this._dsTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsTypeNoLimit = this._dsTypeNoLimit;
    }
    if (this._lengthLimitFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthLimitFlag = this._lengthLimitFlag;
    }
    if (this._naptrTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrTypeLimitNum = this._naptrTypeLimitNum;
    }
    if (this._naptrTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrTypeNoLimit = this._naptrTypeNoLimit;
    }
    if (this._optTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.optTypeLimitNum = this._optTypeLimitNum;
    }
    if (this._optTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.optTypeNoLimit = this._optTypeNoLimit;
    }
    if (this._otherData !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherData = this._otherData;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._rdataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdataField = this._rdataField;
    }
    if (this._responseTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTypeName = this._responseTypeName;
    }
    if (this._rrsigTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsigTypeLimitNum = this._rrsigTypeLimitNum;
    }
    if (this._rrsigTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsigTypeNoLimit = this._rrsigTypeNoLimit;
    }
    if (this._serviceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceField = this._serviceField;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._tsigTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigTypeLimitNum = this._tsigTypeLimitNum;
    }
    if (this._tsigTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigTypeNoLimit = this._tsigTypeNoLimit;
    }
    if (this._txtData !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtData = this._txtData;
    }
    if (this._txtTypeLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtTypeLimitNum = this._txtTypeLimitNum;
    }
    if (this._txtTypeNoLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtTypeNoLimit = this._txtTypeNoLimit;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._valueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueField = this._valueField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLoggingResponseTypeTypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caaTypeLimitNum = undefined;
      this._caaTypeNoLimit = undefined;
      this._digest = undefined;
      this._dnskeyTypeLimitNum = undefined;
      this._dnskeyTypeNoLimit = undefined;
      this._dsTypeLimitNum = undefined;
      this._dsTypeNoLimit = undefined;
      this._lengthLimitFlag = undefined;
      this._naptrTypeLimitNum = undefined;
      this._naptrTypeNoLimit = undefined;
      this._optTypeLimitNum = undefined;
      this._optTypeNoLimit = undefined;
      this._otherData = undefined;
      this._publicKey = undefined;
      this._rdataField = undefined;
      this._responseTypeName = undefined;
      this._rrsigTypeLimitNum = undefined;
      this._rrsigTypeNoLimit = undefined;
      this._serviceField = undefined;
      this._signature = undefined;
      this._tsigTypeLimitNum = undefined;
      this._tsigTypeNoLimit = undefined;
      this._txtData = undefined;
      this._txtTypeLimitNum = undefined;
      this._txtTypeNoLimit = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._valueField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caaTypeLimitNum = value.caaTypeLimitNum;
      this._caaTypeNoLimit = value.caaTypeNoLimit;
      this._digest = value.digest;
      this._dnskeyTypeLimitNum = value.dnskeyTypeLimitNum;
      this._dnskeyTypeNoLimit = value.dnskeyTypeNoLimit;
      this._dsTypeLimitNum = value.dsTypeLimitNum;
      this._dsTypeNoLimit = value.dsTypeNoLimit;
      this._lengthLimitFlag = value.lengthLimitFlag;
      this._naptrTypeLimitNum = value.naptrTypeLimitNum;
      this._naptrTypeNoLimit = value.naptrTypeNoLimit;
      this._optTypeLimitNum = value.optTypeLimitNum;
      this._optTypeNoLimit = value.optTypeNoLimit;
      this._otherData = value.otherData;
      this._publicKey = value.publicKey;
      this._rdataField = value.rdataField;
      this._responseTypeName = value.responseTypeName;
      this._rrsigTypeLimitNum = value.rrsigTypeLimitNum;
      this._rrsigTypeNoLimit = value.rrsigTypeNoLimit;
      this._serviceField = value.serviceField;
      this._signature = value.signature;
      this._tsigTypeLimitNum = value.tsigTypeLimitNum;
      this._tsigTypeNoLimit = value.tsigTypeNoLimit;
      this._txtData = value.txtData;
      this._txtTypeLimitNum = value.txtTypeLimitNum;
      this._txtTypeNoLimit = value.txtTypeNoLimit;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._valueField = value.valueField;
    }
  }

  // caa_type_limit_num - computed: false, optional: true, required: false
  private _caaTypeLimitNum?: number; 
  public get caaTypeLimitNum() {
    return this.getNumberAttribute('caa_type_limit_num');
  }
  public set caaTypeLimitNum(value: number) {
    this._caaTypeLimitNum = value;
  }
  public resetCaaTypeLimitNum() {
    this._caaTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caaTypeLimitNumInput() {
    return this._caaTypeLimitNum;
  }

  // caa_type_no_limit - computed: false, optional: true, required: false
  private _caaTypeNoLimit?: number; 
  public get caaTypeNoLimit() {
    return this.getNumberAttribute('caa_type_no_limit');
  }
  public set caaTypeNoLimit(value: number) {
    this._caaTypeNoLimit = value;
  }
  public resetCaaTypeNoLimit() {
    this._caaTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caaTypeNoLimitInput() {
    return this._caaTypeNoLimit;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: number; 
  public get digest() {
    return this.getNumberAttribute('digest');
  }
  public set digest(value: number) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // dnskey_type_limit_num - computed: false, optional: true, required: false
  private _dnskeyTypeLimitNum?: number; 
  public get dnskeyTypeLimitNum() {
    return this.getNumberAttribute('dnskey_type_limit_num');
  }
  public set dnskeyTypeLimitNum(value: number) {
    this._dnskeyTypeLimitNum = value;
  }
  public resetDnskeyTypeLimitNum() {
    this._dnskeyTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyTypeLimitNumInput() {
    return this._dnskeyTypeLimitNum;
  }

  // dnskey_type_no_limit - computed: false, optional: true, required: false
  private _dnskeyTypeNoLimit?: number; 
  public get dnskeyTypeNoLimit() {
    return this.getNumberAttribute('dnskey_type_no_limit');
  }
  public set dnskeyTypeNoLimit(value: number) {
    this._dnskeyTypeNoLimit = value;
  }
  public resetDnskeyTypeNoLimit() {
    this._dnskeyTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyTypeNoLimitInput() {
    return this._dnskeyTypeNoLimit;
  }

  // ds_type_limit_num - computed: false, optional: true, required: false
  private _dsTypeLimitNum?: number; 
  public get dsTypeLimitNum() {
    return this.getNumberAttribute('ds_type_limit_num');
  }
  public set dsTypeLimitNum(value: number) {
    this._dsTypeLimitNum = value;
  }
  public resetDsTypeLimitNum() {
    this._dsTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsTypeLimitNumInput() {
    return this._dsTypeLimitNum;
  }

  // ds_type_no_limit - computed: false, optional: true, required: false
  private _dsTypeNoLimit?: number; 
  public get dsTypeNoLimit() {
    return this.getNumberAttribute('ds_type_no_limit');
  }
  public set dsTypeNoLimit(value: number) {
    this._dsTypeNoLimit = value;
  }
  public resetDsTypeNoLimit() {
    this._dsTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsTypeNoLimitInput() {
    return this._dsTypeNoLimit;
  }

  // length_limit_flag - computed: false, optional: true, required: false
  private _lengthLimitFlag?: number; 
  public get lengthLimitFlag() {
    return this.getNumberAttribute('length_limit_flag');
  }
  public set lengthLimitFlag(value: number) {
    this._lengthLimitFlag = value;
  }
  public resetLengthLimitFlag() {
    this._lengthLimitFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthLimitFlagInput() {
    return this._lengthLimitFlag;
  }

  // naptr_type_limit_num - computed: false, optional: true, required: false
  private _naptrTypeLimitNum?: number; 
  public get naptrTypeLimitNum() {
    return this.getNumberAttribute('naptr_type_limit_num');
  }
  public set naptrTypeLimitNum(value: number) {
    this._naptrTypeLimitNum = value;
  }
  public resetNaptrTypeLimitNum() {
    this._naptrTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrTypeLimitNumInput() {
    return this._naptrTypeLimitNum;
  }

  // naptr_type_no_limit - computed: false, optional: true, required: false
  private _naptrTypeNoLimit?: number; 
  public get naptrTypeNoLimit() {
    return this.getNumberAttribute('naptr_type_no_limit');
  }
  public set naptrTypeNoLimit(value: number) {
    this._naptrTypeNoLimit = value;
  }
  public resetNaptrTypeNoLimit() {
    this._naptrTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrTypeNoLimitInput() {
    return this._naptrTypeNoLimit;
  }

  // opt_type_limit_num - computed: false, optional: true, required: false
  private _optTypeLimitNum?: number; 
  public get optTypeLimitNum() {
    return this.getNumberAttribute('opt_type_limit_num');
  }
  public set optTypeLimitNum(value: number) {
    this._optTypeLimitNum = value;
  }
  public resetOptTypeLimitNum() {
    this._optTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optTypeLimitNumInput() {
    return this._optTypeLimitNum;
  }

  // opt_type_no_limit - computed: false, optional: true, required: false
  private _optTypeNoLimit?: number; 
  public get optTypeNoLimit() {
    return this.getNumberAttribute('opt_type_no_limit');
  }
  public set optTypeNoLimit(value: number) {
    this._optTypeNoLimit = value;
  }
  public resetOptTypeNoLimit() {
    this._optTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optTypeNoLimitInput() {
    return this._optTypeNoLimit;
  }

  // other_data - computed: false, optional: true, required: false
  private _otherData?: number; 
  public get otherData() {
    return this.getNumberAttribute('other_data');
  }
  public set otherData(value: number) {
    this._otherData = value;
  }
  public resetOtherData() {
    this._otherData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDataInput() {
    return this._otherData;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: number; 
  public get publicKey() {
    return this.getNumberAttribute('public_key');
  }
  public set publicKey(value: number) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // rdata_field - computed: false, optional: true, required: false
  private _rdataField?: number; 
  public get rdataField() {
    return this.getNumberAttribute('rdata_field');
  }
  public set rdataField(value: number) {
    this._rdataField = value;
  }
  public resetRdataField() {
    this._rdataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataFieldInput() {
    return this._rdataField;
  }

  // response_type_name - computed: false, optional: false, required: true
  private _responseTypeName?: string; 
  public get responseTypeName() {
    return this.getStringAttribute('response_type_name');
  }
  public set responseTypeName(value: string) {
    this._responseTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeNameInput() {
    return this._responseTypeName;
  }

  // rrsig_type_limit_num - computed: false, optional: true, required: false
  private _rrsigTypeLimitNum?: number; 
  public get rrsigTypeLimitNum() {
    return this.getNumberAttribute('rrsig_type_limit_num');
  }
  public set rrsigTypeLimitNum(value: number) {
    this._rrsigTypeLimitNum = value;
  }
  public resetRrsigTypeLimitNum() {
    this._rrsigTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsigTypeLimitNumInput() {
    return this._rrsigTypeLimitNum;
  }

  // rrsig_type_no_limit - computed: false, optional: true, required: false
  private _rrsigTypeNoLimit?: number; 
  public get rrsigTypeNoLimit() {
    return this.getNumberAttribute('rrsig_type_no_limit');
  }
  public set rrsigTypeNoLimit(value: number) {
    this._rrsigTypeNoLimit = value;
  }
  public resetRrsigTypeNoLimit() {
    this._rrsigTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsigTypeNoLimitInput() {
    return this._rrsigTypeNoLimit;
  }

  // service_field - computed: false, optional: true, required: false
  private _serviceField?: number; 
  public get serviceField() {
    return this.getNumberAttribute('service_field');
  }
  public set serviceField(value: number) {
    this._serviceField = value;
  }
  public resetServiceField() {
    this._serviceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFieldInput() {
    return this._serviceField;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: number; 
  public get signature() {
    return this.getNumberAttribute('signature');
  }
  public set signature(value: number) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // tsig_type_limit_num - computed: false, optional: true, required: false
  private _tsigTypeLimitNum?: number; 
  public get tsigTypeLimitNum() {
    return this.getNumberAttribute('tsig_type_limit_num');
  }
  public set tsigTypeLimitNum(value: number) {
    this._tsigTypeLimitNum = value;
  }
  public resetTsigTypeLimitNum() {
    this._tsigTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigTypeLimitNumInput() {
    return this._tsigTypeLimitNum;
  }

  // tsig_type_no_limit - computed: false, optional: true, required: false
  private _tsigTypeNoLimit?: number; 
  public get tsigTypeNoLimit() {
    return this.getNumberAttribute('tsig_type_no_limit');
  }
  public set tsigTypeNoLimit(value: number) {
    this._tsigTypeNoLimit = value;
  }
  public resetTsigTypeNoLimit() {
    this._tsigTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigTypeNoLimitInput() {
    return this._tsigTypeNoLimit;
  }

  // txt_data - computed: false, optional: true, required: false
  private _txtData?: number; 
  public get txtData() {
    return this.getNumberAttribute('txt_data');
  }
  public set txtData(value: number) {
    this._txtData = value;
  }
  public resetTxtData() {
    this._txtData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtDataInput() {
    return this._txtData;
  }

  // txt_type_limit_num - computed: false, optional: true, required: false
  private _txtTypeLimitNum?: number; 
  public get txtTypeLimitNum() {
    return this.getNumberAttribute('txt_type_limit_num');
  }
  public set txtTypeLimitNum(value: number) {
    this._txtTypeLimitNum = value;
  }
  public resetTxtTypeLimitNum() {
    this._txtTypeLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtTypeLimitNumInput() {
    return this._txtTypeLimitNum;
  }

  // txt_type_no_limit - computed: false, optional: true, required: false
  private _txtTypeNoLimit?: number; 
  public get txtTypeNoLimit() {
    return this.getNumberAttribute('txt_type_no_limit');
  }
  public set txtTypeNoLimit(value: number) {
    this._txtTypeNoLimit = value;
  }
  public resetTxtTypeNoLimit() {
    this._txtTypeNoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtTypeNoLimitInput() {
    return this._txtTypeNoLimit;
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

  // value_field - computed: false, optional: true, required: false
  private _valueField?: number; 
  public get valueField() {
    return this.getNumberAttribute('value_field');
  }
  public set valueField(value: number) {
    this._valueField = value;
  }
  public resetValueField() {
    this._valueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFieldInput() {
    return this._valueField;
  }
}

export class SlbTemplateDnsLoggingResponseTypeTypeListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsLoggingResponseTypeTypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsLoggingResponseTypeTypeListStructOutputReference {
    return new SlbTemplateDnsLoggingResponseTypeTypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsLoggingResponseType {
  /**
  * start config the response type detail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#config SlbTemplateDnsLogging#config}
  */
  readonly config?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#uuid SlbTemplateDnsLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#type_list SlbTemplateDnsLogging#type_list}
  */
  readonly typeList?: SlbTemplateDnsLoggingResponseTypeTypeListStruct[] | cdktf.IResolvable;
}

export function slbTemplateDnsLoggingResponseTypeToTerraform(struct?: SlbTemplateDnsLoggingResponseTypeOutputReference | SlbTemplateDnsLoggingResponseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.numberToTerraform(struct!.config),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    type_list: cdktf.listMapper(slbTemplateDnsLoggingResponseTypeTypeListStructToTerraform, true)(struct!.typeList),
  }
}


export function slbTemplateDnsLoggingResponseTypeToHclTerraform(struct?: SlbTemplateDnsLoggingResponseTypeOutputReference | SlbTemplateDnsLoggingResponseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.numberToHclTerraform(struct!.config),
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
    type_list: {
      value: cdktf.listMapperHcl(slbTemplateDnsLoggingResponseTypeTypeListStructToHclTerraform, true)(struct!.typeList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDnsLoggingResponseTypeTypeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLoggingResponseTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDnsLoggingResponseType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._typeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeList = this._typeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLoggingResponseType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config = undefined;
      this._uuid = undefined;
      this._typeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config = value.config;
      this._uuid = value.uuid;
      this._typeList.internalValue = value.typeList;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: number; 
  public get config() {
    return this.getNumberAttribute('config');
  }
  public set config(value: number) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // type_list - computed: false, optional: true, required: false
  private _typeList = new SlbTemplateDnsLoggingResponseTypeTypeListStructList(this, "type_list", false);
  public get typeList() {
    return this._typeList;
  }
  public putTypeList(value: SlbTemplateDnsLoggingResponseTypeTypeListStruct[] | cdktf.IResolvable) {
    this._typeList.internalValue = value;
  }
  public resetTypeList() {
    this._typeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeListInput() {
    return this._typeList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging thunder_slb_template_dns_logging}
*/
export class SlbTemplateDnsLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsLogging to import
  * @param importFromId The id of the existing SlbTemplateDnsLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_logging thunder_slb_template_dns_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_logging',
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
    this._disable = config.disable;
    this._dnsLoggingProtocol = config.dnsLoggingProtocol;
    this._dnsLoggingRequestSection = config.dnsLoggingRequestSection;
    this._dnsLoggingResponseSection = config.dnsLoggingResponseSection;
    this._dnsLoggingType = config.dnsLoggingType;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._responseType.internalValue = config.responseType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_logging_protocol - computed: false, optional: true, required: false
  private _dnsLoggingProtocol?: string; 
  public get dnsLoggingProtocol() {
    return this.getStringAttribute('dns_logging_protocol');
  }
  public set dnsLoggingProtocol(value: string) {
    this._dnsLoggingProtocol = value;
  }
  public resetDnsLoggingProtocol() {
    this._dnsLoggingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingProtocolInput() {
    return this._dnsLoggingProtocol;
  }

  // dns_logging_request_section - computed: false, optional: true, required: false
  private _dnsLoggingRequestSection?: string; 
  public get dnsLoggingRequestSection() {
    return this.getStringAttribute('dns_logging_request_section');
  }
  public set dnsLoggingRequestSection(value: string) {
    this._dnsLoggingRequestSection = value;
  }
  public resetDnsLoggingRequestSection() {
    this._dnsLoggingRequestSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingRequestSectionInput() {
    return this._dnsLoggingRequestSection;
  }

  // dns_logging_response_section - computed: false, optional: true, required: false
  private _dnsLoggingResponseSection?: string; 
  public get dnsLoggingResponseSection() {
    return this.getStringAttribute('dns_logging_response_section');
  }
  public set dnsLoggingResponseSection(value: string) {
    this._dnsLoggingResponseSection = value;
  }
  public resetDnsLoggingResponseSection() {
    this._dnsLoggingResponseSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingResponseSectionInput() {
    return this._dnsLoggingResponseSection;
  }

  // dns_logging_type - computed: false, optional: true, required: false
  private _dnsLoggingType?: string; 
  public get dnsLoggingType() {
    return this.getStringAttribute('dns_logging_type');
  }
  public set dnsLoggingType(value: string) {
    this._dnsLoggingType = value;
  }
  public resetDnsLoggingType() {
    this._dnsLoggingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingTypeInput() {
    return this._dnsLoggingType;
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

  // response_type - computed: false, optional: true, required: false
  private _responseType = new SlbTemplateDnsLoggingResponseTypeOutputReference(this, "response_type");
  public get responseType() {
    return this._responseType;
  }
  public putResponseType(value: SlbTemplateDnsLoggingResponseType) {
    this._responseType.internalValue = value;
  }
  public resetResponseType() {
    this._responseType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      dns_logging_protocol: cdktf.stringToTerraform(this._dnsLoggingProtocol),
      dns_logging_request_section: cdktf.stringToTerraform(this._dnsLoggingRequestSection),
      dns_logging_response_section: cdktf.stringToTerraform(this._dnsLoggingResponseSection),
      dns_logging_type: cdktf.stringToTerraform(this._dnsLoggingType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      response_type: slbTemplateDnsLoggingResponseTypeToTerraform(this._responseType.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_logging_protocol: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_logging_request_section: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingRequestSection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_logging_response_section: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingResponseSection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_logging_type: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingType),
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
      response_type: {
        value: slbTemplateDnsLoggingResponseTypeToHclTerraform(this._responseType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsLoggingResponseTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
