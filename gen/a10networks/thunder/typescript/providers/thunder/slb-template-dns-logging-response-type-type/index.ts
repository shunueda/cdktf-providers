// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsLoggingResponseTypeTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#caa_type_limit_num SlbTemplateDnsLoggingResponseTypeType#caa_type_limit_num}
  */
  readonly caaTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#caa_type_no_limit SlbTemplateDnsLoggingResponseTypeType#caa_type_no_limit}
  */
  readonly caaTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#digest SlbTemplateDnsLoggingResponseTypeType#digest}
  */
  readonly digest?: number;
  /**
  * Dns_logging_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#dns_logging_name SlbTemplateDnsLoggingResponseTypeType#dns_logging_name}
  */
  readonly dnsLoggingName: string;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#dnskey_type_limit_num SlbTemplateDnsLoggingResponseTypeType#dnskey_type_limit_num}
  */
  readonly dnskeyTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#dnskey_type_no_limit SlbTemplateDnsLoggingResponseTypeType#dnskey_type_no_limit}
  */
  readonly dnskeyTypeNoLimit?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#ds_type_limit_num SlbTemplateDnsLoggingResponseTypeType#ds_type_limit_num}
  */
  readonly dsTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#ds_type_no_limit SlbTemplateDnsLoggingResponseTypeType#ds_type_no_limit}
  */
  readonly dsTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#id SlbTemplateDnsLoggingResponseTypeType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#length_limit_flag SlbTemplateDnsLoggingResponseTypeType#length_limit_flag}
  */
  readonly lengthLimitFlag?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#naptr_type_limit_num SlbTemplateDnsLoggingResponseTypeType#naptr_type_limit_num}
  */
  readonly naptrTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#naptr_type_no_limit SlbTemplateDnsLoggingResponseTypeType#naptr_type_no_limit}
  */
  readonly naptrTypeNoLimit?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#opt_type_limit_num SlbTemplateDnsLoggingResponseTypeType#opt_type_limit_num}
  */
  readonly optTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#opt_type_no_limit SlbTemplateDnsLoggingResponseTypeType#opt_type_no_limit}
  */
  readonly optTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#other_data SlbTemplateDnsLoggingResponseTypeType#other_data}
  */
  readonly otherData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#public_key SlbTemplateDnsLoggingResponseTypeType#public_key}
  */
  readonly publicKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#rdata_field SlbTemplateDnsLoggingResponseTypeType#rdata_field}
  */
  readonly rdataField?: number;
  /**
  * 'TXT': TXT; 'RRSIG': RRSIG; 'TSIG': TSIG; 'DNSKEY': DNSKEY; 'DS': DS; 'CAA': CAA; 'NAPTR': NAPTR; 'OPT': OPT;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#response_type_name SlbTemplateDnsLoggingResponseTypeType#response_type_name}
  */
  readonly responseTypeName: string;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#rrsig_type_limit_num SlbTemplateDnsLoggingResponseTypeType#rrsig_type_limit_num}
  */
  readonly rrsigTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#rrsig_type_no_limit SlbTemplateDnsLoggingResponseTypeType#rrsig_type_no_limit}
  */
  readonly rrsigTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#service_field SlbTemplateDnsLoggingResponseTypeType#service_field}
  */
  readonly serviceField?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#signature SlbTemplateDnsLoggingResponseTypeType#signature}
  */
  readonly signature?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#tsig_type_limit_num SlbTemplateDnsLoggingResponseTypeType#tsig_type_limit_num}
  */
  readonly tsigTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#tsig_type_no_limit SlbTemplateDnsLoggingResponseTypeType#tsig_type_no_limit}
  */
  readonly tsigTypeNoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#txt_data SlbTemplateDnsLoggingResponseTypeType#txt_data}
  */
  readonly txtData?: number;
  /**
  * Limit the field length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#txt_type_limit_num SlbTemplateDnsLoggingResponseTypeType#txt_type_limit_num}
  */
  readonly txtTypeLimitNum?: number;
  /**
  * Print the field as much as possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#txt_type_no_limit SlbTemplateDnsLoggingResponseTypeType#txt_type_no_limit}
  */
  readonly txtTypeNoLimit?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#user_tag SlbTemplateDnsLoggingResponseTypeType#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#uuid SlbTemplateDnsLoggingResponseTypeType#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#value_field SlbTemplateDnsLoggingResponseTypeType#value_field}
  */
  readonly valueField?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type thunder_slb_template_dns_logging_response_type_type}
*/
export class SlbTemplateDnsLoggingResponseTypeType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_logging_response_type_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsLoggingResponseTypeType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsLoggingResponseTypeType to import
  * @param importFromId The id of the existing SlbTemplateDnsLoggingResponseTypeType that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsLoggingResponseTypeType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_logging_response_type_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_logging_response_type_type thunder_slb_template_dns_logging_response_type_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsLoggingResponseTypeTypeConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsLoggingResponseTypeTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_logging_response_type_type',
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
    this._caaTypeLimitNum = config.caaTypeLimitNum;
    this._caaTypeNoLimit = config.caaTypeNoLimit;
    this._digest = config.digest;
    this._dnsLoggingName = config.dnsLoggingName;
    this._dnskeyTypeLimitNum = config.dnskeyTypeLimitNum;
    this._dnskeyTypeNoLimit = config.dnskeyTypeNoLimit;
    this._dsTypeLimitNum = config.dsTypeLimitNum;
    this._dsTypeNoLimit = config.dsTypeNoLimit;
    this._id = config.id;
    this._lengthLimitFlag = config.lengthLimitFlag;
    this._naptrTypeLimitNum = config.naptrTypeLimitNum;
    this._naptrTypeNoLimit = config.naptrTypeNoLimit;
    this._optTypeLimitNum = config.optTypeLimitNum;
    this._optTypeNoLimit = config.optTypeNoLimit;
    this._otherData = config.otherData;
    this._publicKey = config.publicKey;
    this._rdataField = config.rdataField;
    this._responseTypeName = config.responseTypeName;
    this._rrsigTypeLimitNum = config.rrsigTypeLimitNum;
    this._rrsigTypeNoLimit = config.rrsigTypeNoLimit;
    this._serviceField = config.serviceField;
    this._signature = config.signature;
    this._tsigTypeLimitNum = config.tsigTypeLimitNum;
    this._tsigTypeNoLimit = config.tsigTypeNoLimit;
    this._txtData = config.txtData;
    this._txtTypeLimitNum = config.txtTypeLimitNum;
    this._txtTypeNoLimit = config.txtTypeNoLimit;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._valueField = config.valueField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns_logging_name - computed: false, optional: false, required: true
  private _dnsLoggingName?: string; 
  public get dnsLoggingName() {
    return this.getStringAttribute('dns_logging_name');
  }
  public set dnsLoggingName(value: string) {
    this._dnsLoggingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingNameInput() {
    return this._dnsLoggingName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      caa_type_limit_num: cdktf.numberToTerraform(this._caaTypeLimitNum),
      caa_type_no_limit: cdktf.numberToTerraform(this._caaTypeNoLimit),
      digest: cdktf.numberToTerraform(this._digest),
      dns_logging_name: cdktf.stringToTerraform(this._dnsLoggingName),
      dnskey_type_limit_num: cdktf.numberToTerraform(this._dnskeyTypeLimitNum),
      dnskey_type_no_limit: cdktf.numberToTerraform(this._dnskeyTypeNoLimit),
      ds_type_limit_num: cdktf.numberToTerraform(this._dsTypeLimitNum),
      ds_type_no_limit: cdktf.numberToTerraform(this._dsTypeNoLimit),
      id: cdktf.stringToTerraform(this._id),
      length_limit_flag: cdktf.numberToTerraform(this._lengthLimitFlag),
      naptr_type_limit_num: cdktf.numberToTerraform(this._naptrTypeLimitNum),
      naptr_type_no_limit: cdktf.numberToTerraform(this._naptrTypeNoLimit),
      opt_type_limit_num: cdktf.numberToTerraform(this._optTypeLimitNum),
      opt_type_no_limit: cdktf.numberToTerraform(this._optTypeNoLimit),
      other_data: cdktf.numberToTerraform(this._otherData),
      public_key: cdktf.numberToTerraform(this._publicKey),
      rdata_field: cdktf.numberToTerraform(this._rdataField),
      response_type_name: cdktf.stringToTerraform(this._responseTypeName),
      rrsig_type_limit_num: cdktf.numberToTerraform(this._rrsigTypeLimitNum),
      rrsig_type_no_limit: cdktf.numberToTerraform(this._rrsigTypeNoLimit),
      service_field: cdktf.numberToTerraform(this._serviceField),
      signature: cdktf.numberToTerraform(this._signature),
      tsig_type_limit_num: cdktf.numberToTerraform(this._tsigTypeLimitNum),
      tsig_type_no_limit: cdktf.numberToTerraform(this._tsigTypeNoLimit),
      txt_data: cdktf.numberToTerraform(this._txtData),
      txt_type_limit_num: cdktf.numberToTerraform(this._txtTypeLimitNum),
      txt_type_no_limit: cdktf.numberToTerraform(this._txtTypeNoLimit),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      value_field: cdktf.numberToTerraform(this._valueField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      caa_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._caaTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      caa_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._caaTypeNoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      digest: {
        value: cdktf.numberToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_logging_name: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnskey_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._dnskeyTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnskey_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._dnskeyTypeNoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ds_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._dsTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ds_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._dsTypeNoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length_limit_flag: {
        value: cdktf.numberToHclTerraform(this._lengthLimitFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naptr_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._naptrTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naptr_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._naptrTypeNoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opt_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._optTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opt_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._optTypeNoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      other_data: {
        value: cdktf.numberToHclTerraform(this._otherData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_key: {
        value: cdktf.numberToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdata_field: {
        value: cdktf.numberToHclTerraform(this._rdataField),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_type_name: {
        value: cdktf.stringToHclTerraform(this._responseTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rrsig_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._rrsigTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rrsig_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._rrsigTypeNoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_field: {
        value: cdktf.numberToHclTerraform(this._serviceField),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature: {
        value: cdktf.numberToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tsig_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._tsigTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tsig_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._tsigTypeNoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txt_data: {
        value: cdktf.numberToHclTerraform(this._txtData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txt_type_limit_num: {
        value: cdktf.numberToHclTerraform(this._txtTypeLimitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txt_type_no_limit: {
        value: cdktf.numberToHclTerraform(this._txtTypeNoLimit),
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
      value_field: {
        value: cdktf.numberToHclTerraform(this._valueField),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
