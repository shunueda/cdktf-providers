// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaOriginRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#dns_record EsaOriginRule#dns_record}
  */
  readonly dnsRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#follow302_enable EsaOriginRule#follow302_enable}
  */
  readonly follow302Enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#follow302_max_tries EsaOriginRule#follow302_max_tries}
  */
  readonly follow302MaxTries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#follow302_retain_args EsaOriginRule#follow302_retain_args}
  */
  readonly follow302RetainArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#follow302_retain_header EsaOriginRule#follow302_retain_header}
  */
  readonly follow302RetainHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#follow302_target_host EsaOriginRule#follow302_target_host}
  */
  readonly follow302TargetHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#id EsaOriginRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_host EsaOriginRule#origin_host}
  */
  readonly originHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_http_port EsaOriginRule#origin_http_port}
  */
  readonly originHttpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_https_port EsaOriginRule#origin_https_port}
  */
  readonly originHttpsPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_mtls EsaOriginRule#origin_mtls}
  */
  readonly originMtls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_read_timeout EsaOriginRule#origin_read_timeout}
  */
  readonly originReadTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_scheme EsaOriginRule#origin_scheme}
  */
  readonly originScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_sni EsaOriginRule#origin_sni}
  */
  readonly originSni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#origin_verify EsaOriginRule#origin_verify}
  */
  readonly originVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#range EsaOriginRule#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#range_chunk_size EsaOriginRule#range_chunk_size}
  */
  readonly rangeChunkSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#rule EsaOriginRule#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#rule_enable EsaOriginRule#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#rule_name EsaOriginRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#sequence EsaOriginRule#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#site_id EsaOriginRule#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#site_version EsaOriginRule#site_version}
  */
  readonly siteVersion?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#timeouts EsaOriginRule#timeouts}
  */
  readonly timeouts?: EsaOriginRuleTimeouts;
}
export interface EsaOriginRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#create EsaOriginRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#delete EsaOriginRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#update EsaOriginRule#update}
  */
  readonly update?: string;
}

export function esaOriginRuleTimeoutsToTerraform(struct?: EsaOriginRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function esaOriginRuleTimeoutsToHclTerraform(struct?: EsaOriginRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaOriginRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaOriginRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaOriginRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule alicloud_esa_origin_rule}
*/
export class EsaOriginRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_origin_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaOriginRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaOriginRule to import
  * @param importFromId The id of the existing EsaOriginRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaOriginRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_origin_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_origin_rule alicloud_esa_origin_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaOriginRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EsaOriginRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_origin_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsRecord = config.dnsRecord;
    this._follow302Enable = config.follow302Enable;
    this._follow302MaxTries = config.follow302MaxTries;
    this._follow302RetainArgs = config.follow302RetainArgs;
    this._follow302RetainHeader = config.follow302RetainHeader;
    this._follow302TargetHost = config.follow302TargetHost;
    this._id = config.id;
    this._originHost = config.originHost;
    this._originHttpPort = config.originHttpPort;
    this._originHttpsPort = config.originHttpsPort;
    this._originMtls = config.originMtls;
    this._originReadTimeout = config.originReadTimeout;
    this._originScheme = config.originScheme;
    this._originSni = config.originSni;
    this._originVerify = config.originVerify;
    this._range = config.range;
    this._rangeChunkSize = config.rangeChunkSize;
    this._rule = config.rule;
    this._ruleEnable = config.ruleEnable;
    this._ruleName = config.ruleName;
    this._sequence = config.sequence;
    this._siteId = config.siteId;
    this._siteVersion = config.siteVersion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // dns_record - computed: false, optional: true, required: false
  private _dnsRecord?: string; 
  public get dnsRecord() {
    return this.getStringAttribute('dns_record');
  }
  public set dnsRecord(value: string) {
    this._dnsRecord = value;
  }
  public resetDnsRecord() {
    this._dnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordInput() {
    return this._dnsRecord;
  }

  // follow302_enable - computed: false, optional: true, required: false
  private _follow302Enable?: string; 
  public get follow302Enable() {
    return this.getStringAttribute('follow302_enable');
  }
  public set follow302Enable(value: string) {
    this._follow302Enable = value;
  }
  public resetFollow302Enable() {
    this._follow302Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get follow302EnableInput() {
    return this._follow302Enable;
  }

  // follow302_max_tries - computed: false, optional: true, required: false
  private _follow302MaxTries?: string; 
  public get follow302MaxTries() {
    return this.getStringAttribute('follow302_max_tries');
  }
  public set follow302MaxTries(value: string) {
    this._follow302MaxTries = value;
  }
  public resetFollow302MaxTries() {
    this._follow302MaxTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get follow302MaxTriesInput() {
    return this._follow302MaxTries;
  }

  // follow302_retain_args - computed: false, optional: true, required: false
  private _follow302RetainArgs?: string; 
  public get follow302RetainArgs() {
    return this.getStringAttribute('follow302_retain_args');
  }
  public set follow302RetainArgs(value: string) {
    this._follow302RetainArgs = value;
  }
  public resetFollow302RetainArgs() {
    this._follow302RetainArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get follow302RetainArgsInput() {
    return this._follow302RetainArgs;
  }

  // follow302_retain_header - computed: false, optional: true, required: false
  private _follow302RetainHeader?: string; 
  public get follow302RetainHeader() {
    return this.getStringAttribute('follow302_retain_header');
  }
  public set follow302RetainHeader(value: string) {
    this._follow302RetainHeader = value;
  }
  public resetFollow302RetainHeader() {
    this._follow302RetainHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get follow302RetainHeaderInput() {
    return this._follow302RetainHeader;
  }

  // follow302_target_host - computed: false, optional: true, required: false
  private _follow302TargetHost?: string; 
  public get follow302TargetHost() {
    return this.getStringAttribute('follow302_target_host');
  }
  public set follow302TargetHost(value: string) {
    this._follow302TargetHost = value;
  }
  public resetFollow302TargetHost() {
    this._follow302TargetHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get follow302TargetHostInput() {
    return this._follow302TargetHost;
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

  // origin_host - computed: false, optional: true, required: false
  private _originHost?: string; 
  public get originHost() {
    return this.getStringAttribute('origin_host');
  }
  public set originHost(value: string) {
    this._originHost = value;
  }
  public resetOriginHost() {
    this._originHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHostInput() {
    return this._originHost;
  }

  // origin_http_port - computed: false, optional: true, required: false
  private _originHttpPort?: string; 
  public get originHttpPort() {
    return this.getStringAttribute('origin_http_port');
  }
  public set originHttpPort(value: string) {
    this._originHttpPort = value;
  }
  public resetOriginHttpPort() {
    this._originHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHttpPortInput() {
    return this._originHttpPort;
  }

  // origin_https_port - computed: false, optional: true, required: false
  private _originHttpsPort?: string; 
  public get originHttpsPort() {
    return this.getStringAttribute('origin_https_port');
  }
  public set originHttpsPort(value: string) {
    this._originHttpsPort = value;
  }
  public resetOriginHttpsPort() {
    this._originHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHttpsPortInput() {
    return this._originHttpsPort;
  }

  // origin_mtls - computed: false, optional: true, required: false
  private _originMtls?: string; 
  public get originMtls() {
    return this.getStringAttribute('origin_mtls');
  }
  public set originMtls(value: string) {
    this._originMtls = value;
  }
  public resetOriginMtls() {
    this._originMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originMtlsInput() {
    return this._originMtls;
  }

  // origin_read_timeout - computed: false, optional: true, required: false
  private _originReadTimeout?: string; 
  public get originReadTimeout() {
    return this.getStringAttribute('origin_read_timeout');
  }
  public set originReadTimeout(value: string) {
    this._originReadTimeout = value;
  }
  public resetOriginReadTimeout() {
    this._originReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originReadTimeoutInput() {
    return this._originReadTimeout;
  }

  // origin_scheme - computed: false, optional: true, required: false
  private _originScheme?: string; 
  public get originScheme() {
    return this.getStringAttribute('origin_scheme');
  }
  public set originScheme(value: string) {
    this._originScheme = value;
  }
  public resetOriginScheme() {
    this._originScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSchemeInput() {
    return this._originScheme;
  }

  // origin_sni - computed: false, optional: true, required: false
  private _originSni?: string; 
  public get originSni() {
    return this.getStringAttribute('origin_sni');
  }
  public set originSni(value: string) {
    this._originSni = value;
  }
  public resetOriginSni() {
    this._originSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSniInput() {
    return this._originSni;
  }

  // origin_verify - computed: false, optional: true, required: false
  private _originVerify?: string; 
  public get originVerify() {
    return this.getStringAttribute('origin_verify');
  }
  public set originVerify(value: string) {
    this._originVerify = value;
  }
  public resetOriginVerify() {
    this._originVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originVerifyInput() {
    return this._originVerify;
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // range_chunk_size - computed: false, optional: true, required: false
  private _rangeChunkSize?: string; 
  public get rangeChunkSize() {
    return this.getStringAttribute('range_chunk_size');
  }
  public set rangeChunkSize(value: string) {
    this._rangeChunkSize = value;
  }
  public resetRangeChunkSize() {
    this._rangeChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeChunkSizeInput() {
    return this._rangeChunkSize;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_enable - computed: false, optional: true, required: false
  private _ruleEnable?: string; 
  public get ruleEnable() {
    return this.getStringAttribute('rule_enable');
  }
  public set ruleEnable(value: string) {
    this._ruleEnable = value;
  }
  public resetRuleEnable() {
    this._ruleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEnableInput() {
    return this._ruleEnable;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_version - computed: false, optional: true, required: false
  private _siteVersion?: number; 
  public get siteVersion() {
    return this.getNumberAttribute('site_version');
  }
  public set siteVersion(value: number) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaOriginRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaOriginRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_record: cdktf.stringToTerraform(this._dnsRecord),
      follow302_enable: cdktf.stringToTerraform(this._follow302Enable),
      follow302_max_tries: cdktf.stringToTerraform(this._follow302MaxTries),
      follow302_retain_args: cdktf.stringToTerraform(this._follow302RetainArgs),
      follow302_retain_header: cdktf.stringToTerraform(this._follow302RetainHeader),
      follow302_target_host: cdktf.stringToTerraform(this._follow302TargetHost),
      id: cdktf.stringToTerraform(this._id),
      origin_host: cdktf.stringToTerraform(this._originHost),
      origin_http_port: cdktf.stringToTerraform(this._originHttpPort),
      origin_https_port: cdktf.stringToTerraform(this._originHttpsPort),
      origin_mtls: cdktf.stringToTerraform(this._originMtls),
      origin_read_timeout: cdktf.stringToTerraform(this._originReadTimeout),
      origin_scheme: cdktf.stringToTerraform(this._originScheme),
      origin_sni: cdktf.stringToTerraform(this._originSni),
      origin_verify: cdktf.stringToTerraform(this._originVerify),
      range: cdktf.stringToTerraform(this._range),
      range_chunk_size: cdktf.stringToTerraform(this._rangeChunkSize),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.stringToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      timeouts: esaOriginRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_record: {
        value: cdktf.stringToHclTerraform(this._dnsRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow302_enable: {
        value: cdktf.stringToHclTerraform(this._follow302Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow302_max_tries: {
        value: cdktf.stringToHclTerraform(this._follow302MaxTries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow302_retain_args: {
        value: cdktf.stringToHclTerraform(this._follow302RetainArgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow302_retain_header: {
        value: cdktf.stringToHclTerraform(this._follow302RetainHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow302_target_host: {
        value: cdktf.stringToHclTerraform(this._follow302TargetHost),
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
      origin_host: {
        value: cdktf.stringToHclTerraform(this._originHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_http_port: {
        value: cdktf.stringToHclTerraform(this._originHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_https_port: {
        value: cdktf.stringToHclTerraform(this._originHttpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_mtls: {
        value: cdktf.stringToHclTerraform(this._originMtls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_read_timeout: {
        value: cdktf.stringToHclTerraform(this._originReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_scheme: {
        value: cdktf.stringToHclTerraform(this._originScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_sni: {
        value: cdktf.stringToHclTerraform(this._originSni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_verify: {
        value: cdktf.stringToHclTerraform(this._originVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.stringToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_chunk_size: {
        value: cdktf.stringToHclTerraform(this._rangeChunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_enable: {
        value: cdktf.stringToHclTerraform(this._ruleEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_version: {
        value: cdktf.numberToHclTerraform(this._siteVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: esaOriginRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaOriginRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
