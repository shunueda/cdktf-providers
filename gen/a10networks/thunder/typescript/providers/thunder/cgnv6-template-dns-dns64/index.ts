// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplateDnsDns64AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable Only translate the Answer Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#answer_only_disable Cgnv6TemplateDnsDns64A#answer_only_disable}
  */
  readonly answerOnlyDisable?: number;
  /**
  * Set AA flag in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#auth_data Cgnv6TemplateDnsDns64A#auth_data}
  */
  readonly authData?: number;
  /**
  * Use a cached A-query response to provide AAAA query responses for the same hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#cache Cgnv6TemplateDnsDns64A#cache}
  */
  readonly cache?: number;
  /**
  * Always change incoming AAAA DNS Query to A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#change_query Cgnv6TemplateDnsDns64A#change_query}
  */
  readonly changeQuery?: number;
  /**
  * Disable Always try DNS Compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#compress_disable Cgnv6TemplateDnsDns64A#compress_disable}
  */
  readonly compressDisable?: number;
  /**
  * Check DNS Question Record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#deep_check_qr Cgnv6TemplateDnsDns64A#deep_check_qr}
  */
  readonly deepCheckQr?: number;
  /**
  * Disable Check DNS Response Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#deep_check_rr_disable Cgnv6TemplateDnsDns64A#deep_check_rr_disable}
  */
  readonly deepCheckRrDisable?: number;
  /**
  * Disable Drop DNS CNAME Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#drop_cname_disable Cgnv6TemplateDnsDns64A#drop_cname_disable}
  */
  readonly dropCnameDisable?: number;
  /**
  * Append EDNS Record when send A Query to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#edns_append Cgnv6TemplateDnsDns64A#edns_append}
  */
  readonly ednsAppend?: number;
  /**
  * Enable DNS64 (Need to config this option before config any other dns64 options)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#enable Cgnv6TemplateDnsDns64A#enable}
  */
  readonly enable?: number;
  /**
  * Append translated Records when original Response only has Answer Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#fast_append Cgnv6TemplateDnsDns64A#fast_append}
  */
  readonly fastAppend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#id Cgnv6TemplateDnsDns64A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disable Ignore DNS error Response with rcode 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#ignore_rcode3_disable Cgnv6TemplateDnsDns64A#ignore_rcode3_disable}
  */
  readonly ignoreRcode3Disable?: number;
  /**
  * Max Question Record Length, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#max_qr_length Cgnv6TemplateDnsDns64A#max_qr_length}
  */
  readonly maxQrLength?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#name Cgnv6TemplateDnsDns64A#name}
  */
  readonly name: string;
  /**
  * Forward AAAA Query & generate A Query in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#parallel_query Cgnv6TemplateDnsDns64A#parallel_query}
  */
  readonly parallelQuery?: number;
  /**
  * Disable Generate A query upon empty or error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#passive_query_disable Cgnv6TemplateDnsDns64A#passive_query_disable}
  */
  readonly passiveQueryDisable?: number;
  /**
  * Retry count, default is 3 (Retry Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#retry Cgnv6TemplateDnsDns64A#retry}
  */
  readonly retry?: number;
  /**
  * Disable Single Response which is used to avoid ambiguity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#single_response_disable Cgnv6TemplateDnsDns64A#single_response_disable}
  */
  readonly singleResponseDisable?: number;
  /**
  * Timeout to send additional Queries, unit: second, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#timeout Cgnv6TemplateDnsDns64A#timeout}
  */
  readonly timeout?: number;
  /**
  * Translate DNS PTR Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#trans_ptr Cgnv6TemplateDnsDns64A#trans_ptr}
  */
  readonly transPtr?: number;
  /**
  * Translate DNS PTR Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#trans_ptr_query Cgnv6TemplateDnsDns64A#trans_ptr_query}
  */
  readonly transPtrQuery?: number;
  /**
  * Specify Max TTL in DNS Response, unit: second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#ttl Cgnv6TemplateDnsDns64A#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#uuid Cgnv6TemplateDnsDns64A#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64 thunder_cgnv6_template_dns_dns64}
*/
export class Cgnv6TemplateDnsDns64A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_dns_dns64";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplateDnsDns64A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplateDnsDns64A to import
  * @param importFromId The id of the existing Cgnv6TemplateDnsDns64A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplateDnsDns64A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_dns_dns64", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns_dns64 thunder_cgnv6_template_dns_dns64} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplateDnsDns64AConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplateDnsDns64AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_dns_dns64',
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
    this._answerOnlyDisable = config.answerOnlyDisable;
    this._authData = config.authData;
    this._cache = config.cache;
    this._changeQuery = config.changeQuery;
    this._compressDisable = config.compressDisable;
    this._deepCheckQr = config.deepCheckQr;
    this._deepCheckRrDisable = config.deepCheckRrDisable;
    this._dropCnameDisable = config.dropCnameDisable;
    this._ednsAppend = config.ednsAppend;
    this._enable = config.enable;
    this._fastAppend = config.fastAppend;
    this._id = config.id;
    this._ignoreRcode3Disable = config.ignoreRcode3Disable;
    this._maxQrLength = config.maxQrLength;
    this._name = config.name;
    this._parallelQuery = config.parallelQuery;
    this._passiveQueryDisable = config.passiveQueryDisable;
    this._retry = config.retry;
    this._singleResponseDisable = config.singleResponseDisable;
    this._timeout = config.timeout;
    this._transPtr = config.transPtr;
    this._transPtrQuery = config.transPtrQuery;
    this._ttl = config.ttl;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // answer_only_disable - computed: false, optional: true, required: false
  private _answerOnlyDisable?: number; 
  public get answerOnlyDisable() {
    return this.getNumberAttribute('answer_only_disable');
  }
  public set answerOnlyDisable(value: number) {
    this._answerOnlyDisable = value;
  }
  public resetAnswerOnlyDisable() {
    this._answerOnlyDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerOnlyDisableInput() {
    return this._answerOnlyDisable;
  }

  // auth_data - computed: false, optional: true, required: false
  private _authData?: number; 
  public get authData() {
    return this.getNumberAttribute('auth_data');
  }
  public set authData(value: number) {
    this._authData = value;
  }
  public resetAuthData() {
    this._authData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDataInput() {
    return this._authData;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: number; 
  public get cache() {
    return this.getNumberAttribute('cache');
  }
  public set cache(value: number) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // change_query - computed: false, optional: true, required: false
  private _changeQuery?: number; 
  public get changeQuery() {
    return this.getNumberAttribute('change_query');
  }
  public set changeQuery(value: number) {
    this._changeQuery = value;
  }
  public resetChangeQuery() {
    this._changeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeQueryInput() {
    return this._changeQuery;
  }

  // compress_disable - computed: false, optional: true, required: false
  private _compressDisable?: number; 
  public get compressDisable() {
    return this.getNumberAttribute('compress_disable');
  }
  public set compressDisable(value: number) {
    this._compressDisable = value;
  }
  public resetCompressDisable() {
    this._compressDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressDisableInput() {
    return this._compressDisable;
  }

  // deep_check_qr - computed: false, optional: true, required: false
  private _deepCheckQr?: number; 
  public get deepCheckQr() {
    return this.getNumberAttribute('deep_check_qr');
  }
  public set deepCheckQr(value: number) {
    this._deepCheckQr = value;
  }
  public resetDeepCheckQr() {
    this._deepCheckQr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepCheckQrInput() {
    return this._deepCheckQr;
  }

  // deep_check_rr_disable - computed: false, optional: true, required: false
  private _deepCheckRrDisable?: number; 
  public get deepCheckRrDisable() {
    return this.getNumberAttribute('deep_check_rr_disable');
  }
  public set deepCheckRrDisable(value: number) {
    this._deepCheckRrDisable = value;
  }
  public resetDeepCheckRrDisable() {
    this._deepCheckRrDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepCheckRrDisableInput() {
    return this._deepCheckRrDisable;
  }

  // drop_cname_disable - computed: false, optional: true, required: false
  private _dropCnameDisable?: number; 
  public get dropCnameDisable() {
    return this.getNumberAttribute('drop_cname_disable');
  }
  public set dropCnameDisable(value: number) {
    this._dropCnameDisable = value;
  }
  public resetDropCnameDisable() {
    this._dropCnameDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCnameDisableInput() {
    return this._dropCnameDisable;
  }

  // edns_append - computed: false, optional: true, required: false
  private _ednsAppend?: number; 
  public get ednsAppend() {
    return this.getNumberAttribute('edns_append');
  }
  public set ednsAppend(value: number) {
    this._ednsAppend = value;
  }
  public resetEdnsAppend() {
    this._ednsAppend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsAppendInput() {
    return this._ednsAppend;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fast_append - computed: false, optional: true, required: false
  private _fastAppend?: number; 
  public get fastAppend() {
    return this.getNumberAttribute('fast_append');
  }
  public set fastAppend(value: number) {
    this._fastAppend = value;
  }
  public resetFastAppend() {
    this._fastAppend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAppendInput() {
    return this._fastAppend;
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

  // ignore_rcode3_disable - computed: false, optional: true, required: false
  private _ignoreRcode3Disable?: number; 
  public get ignoreRcode3Disable() {
    return this.getNumberAttribute('ignore_rcode3_disable');
  }
  public set ignoreRcode3Disable(value: number) {
    this._ignoreRcode3Disable = value;
  }
  public resetIgnoreRcode3Disable() {
    this._ignoreRcode3Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRcode3DisableInput() {
    return this._ignoreRcode3Disable;
  }

  // max_qr_length - computed: false, optional: true, required: false
  private _maxQrLength?: number; 
  public get maxQrLength() {
    return this.getNumberAttribute('max_qr_length');
  }
  public set maxQrLength(value: number) {
    this._maxQrLength = value;
  }
  public resetMaxQrLength() {
    this._maxQrLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQrLengthInput() {
    return this._maxQrLength;
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

  // parallel_query - computed: false, optional: true, required: false
  private _parallelQuery?: number; 
  public get parallelQuery() {
    return this.getNumberAttribute('parallel_query');
  }
  public set parallelQuery(value: number) {
    this._parallelQuery = value;
  }
  public resetParallelQuery() {
    this._parallelQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelQueryInput() {
    return this._parallelQuery;
  }

  // passive_query_disable - computed: false, optional: true, required: false
  private _passiveQueryDisable?: number; 
  public get passiveQueryDisable() {
    return this.getNumberAttribute('passive_query_disable');
  }
  public set passiveQueryDisable(value: number) {
    this._passiveQueryDisable = value;
  }
  public resetPassiveQueryDisable() {
    this._passiveQueryDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveQueryDisableInput() {
    return this._passiveQueryDisable;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // single_response_disable - computed: false, optional: true, required: false
  private _singleResponseDisable?: number; 
  public get singleResponseDisable() {
    return this.getNumberAttribute('single_response_disable');
  }
  public set singleResponseDisable(value: number) {
    this._singleResponseDisable = value;
  }
  public resetSingleResponseDisable() {
    this._singleResponseDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleResponseDisableInput() {
    return this._singleResponseDisable;
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

  // trans_ptr - computed: false, optional: true, required: false
  private _transPtr?: number; 
  public get transPtr() {
    return this.getNumberAttribute('trans_ptr');
  }
  public set transPtr(value: number) {
    this._transPtr = value;
  }
  public resetTransPtr() {
    this._transPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transPtrInput() {
    return this._transPtr;
  }

  // trans_ptr_query - computed: false, optional: true, required: false
  private _transPtrQuery?: number; 
  public get transPtrQuery() {
    return this.getNumberAttribute('trans_ptr_query');
  }
  public set transPtrQuery(value: number) {
    this._transPtrQuery = value;
  }
  public resetTransPtrQuery() {
    this._transPtrQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transPtrQueryInput() {
    return this._transPtrQuery;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      answer_only_disable: cdktf.numberToTerraform(this._answerOnlyDisable),
      auth_data: cdktf.numberToTerraform(this._authData),
      cache: cdktf.numberToTerraform(this._cache),
      change_query: cdktf.numberToTerraform(this._changeQuery),
      compress_disable: cdktf.numberToTerraform(this._compressDisable),
      deep_check_qr: cdktf.numberToTerraform(this._deepCheckQr),
      deep_check_rr_disable: cdktf.numberToTerraform(this._deepCheckRrDisable),
      drop_cname_disable: cdktf.numberToTerraform(this._dropCnameDisable),
      edns_append: cdktf.numberToTerraform(this._ednsAppend),
      enable: cdktf.numberToTerraform(this._enable),
      fast_append: cdktf.numberToTerraform(this._fastAppend),
      id: cdktf.stringToTerraform(this._id),
      ignore_rcode3_disable: cdktf.numberToTerraform(this._ignoreRcode3Disable),
      max_qr_length: cdktf.numberToTerraform(this._maxQrLength),
      name: cdktf.stringToTerraform(this._name),
      parallel_query: cdktf.numberToTerraform(this._parallelQuery),
      passive_query_disable: cdktf.numberToTerraform(this._passiveQueryDisable),
      retry: cdktf.numberToTerraform(this._retry),
      single_response_disable: cdktf.numberToTerraform(this._singleResponseDisable),
      timeout: cdktf.numberToTerraform(this._timeout),
      trans_ptr: cdktf.numberToTerraform(this._transPtr),
      trans_ptr_query: cdktf.numberToTerraform(this._transPtrQuery),
      ttl: cdktf.numberToTerraform(this._ttl),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      answer_only_disable: {
        value: cdktf.numberToHclTerraform(this._answerOnlyDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_data: {
        value: cdktf.numberToHclTerraform(this._authData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache: {
        value: cdktf.numberToHclTerraform(this._cache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      change_query: {
        value: cdktf.numberToHclTerraform(this._changeQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compress_disable: {
        value: cdktf.numberToHclTerraform(this._compressDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deep_check_qr: {
        value: cdktf.numberToHclTerraform(this._deepCheckQr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deep_check_rr_disable: {
        value: cdktf.numberToHclTerraform(this._deepCheckRrDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_cname_disable: {
        value: cdktf.numberToHclTerraform(this._dropCnameDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edns_append: {
        value: cdktf.numberToHclTerraform(this._ednsAppend),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_append: {
        value: cdktf.numberToHclTerraform(this._fastAppend),
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
      ignore_rcode3_disable: {
        value: cdktf.numberToHclTerraform(this._ignoreRcode3Disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_qr_length: {
        value: cdktf.numberToHclTerraform(this._maxQrLength),
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
      parallel_query: {
        value: cdktf.numberToHclTerraform(this._parallelQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive_query_disable: {
        value: cdktf.numberToHclTerraform(this._passiveQueryDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      single_response_disable: {
        value: cdktf.numberToHclTerraform(this._singleResponseDisable),
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
      trans_ptr: {
        value: cdktf.numberToHclTerraform(this._transPtr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trans_ptr_query: {
        value: cdktf.numberToHclTerraform(this._transPtrQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
