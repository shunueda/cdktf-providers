// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaHttpsApplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#alt_svc EsaHttpsApplicationConfiguration#alt_svc}
  */
  readonly altSvc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#alt_svc_clear EsaHttpsApplicationConfiguration#alt_svc_clear}
  */
  readonly altSvcClear?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#alt_svc_ma EsaHttpsApplicationConfiguration#alt_svc_ma}
  */
  readonly altSvcMa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#alt_svc_persist EsaHttpsApplicationConfiguration#alt_svc_persist}
  */
  readonly altSvcPersist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#hsts EsaHttpsApplicationConfiguration#hsts}
  */
  readonly hsts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#hsts_include_subdomains EsaHttpsApplicationConfiguration#hsts_include_subdomains}
  */
  readonly hstsIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#hsts_max_age EsaHttpsApplicationConfiguration#hsts_max_age}
  */
  readonly hstsMaxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#hsts_preload EsaHttpsApplicationConfiguration#hsts_preload}
  */
  readonly hstsPreload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#https_force EsaHttpsApplicationConfiguration#https_force}
  */
  readonly httpsForce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#https_force_code EsaHttpsApplicationConfiguration#https_force_code}
  */
  readonly httpsForceCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#https_no_sni_deny EsaHttpsApplicationConfiguration#https_no_sni_deny}
  */
  readonly httpsNoSniDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#https_sni_verify EsaHttpsApplicationConfiguration#https_sni_verify}
  */
  readonly httpsSniVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#https_sni_whitelist EsaHttpsApplicationConfiguration#https_sni_whitelist}
  */
  readonly httpsSniWhitelist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#id EsaHttpsApplicationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#rule EsaHttpsApplicationConfiguration#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#rule_enable EsaHttpsApplicationConfiguration#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#rule_name EsaHttpsApplicationConfiguration#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#sequence EsaHttpsApplicationConfiguration#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#site_id EsaHttpsApplicationConfiguration#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#site_version EsaHttpsApplicationConfiguration#site_version}
  */
  readonly siteVersion?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#timeouts EsaHttpsApplicationConfiguration#timeouts}
  */
  readonly timeouts?: EsaHttpsApplicationConfigurationTimeouts;
}
export interface EsaHttpsApplicationConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#create EsaHttpsApplicationConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#delete EsaHttpsApplicationConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#update EsaHttpsApplicationConfiguration#update}
  */
  readonly update?: string;
}

export function esaHttpsApplicationConfigurationTimeoutsToTerraform(struct?: EsaHttpsApplicationConfigurationTimeouts | cdktf.IResolvable): any {
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


export function esaHttpsApplicationConfigurationTimeoutsToHclTerraform(struct?: EsaHttpsApplicationConfigurationTimeouts | cdktf.IResolvable): any {
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

export class EsaHttpsApplicationConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaHttpsApplicationConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaHttpsApplicationConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration alicloud_esa_https_application_configuration}
*/
export class EsaHttpsApplicationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_https_application_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaHttpsApplicationConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaHttpsApplicationConfiguration to import
  * @param importFromId The id of the existing EsaHttpsApplicationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaHttpsApplicationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_https_application_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_https_application_configuration alicloud_esa_https_application_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaHttpsApplicationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EsaHttpsApplicationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_https_application_configuration',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._altSvc = config.altSvc;
    this._altSvcClear = config.altSvcClear;
    this._altSvcMa = config.altSvcMa;
    this._altSvcPersist = config.altSvcPersist;
    this._hsts = config.hsts;
    this._hstsIncludeSubdomains = config.hstsIncludeSubdomains;
    this._hstsMaxAge = config.hstsMaxAge;
    this._hstsPreload = config.hstsPreload;
    this._httpsForce = config.httpsForce;
    this._httpsForceCode = config.httpsForceCode;
    this._httpsNoSniDeny = config.httpsNoSniDeny;
    this._httpsSniVerify = config.httpsSniVerify;
    this._httpsSniWhitelist = config.httpsSniWhitelist;
    this._id = config.id;
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

  // alt_svc - computed: false, optional: true, required: false
  private _altSvc?: string; 
  public get altSvc() {
    return this.getStringAttribute('alt_svc');
  }
  public set altSvc(value: string) {
    this._altSvc = value;
  }
  public resetAltSvc() {
    this._altSvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altSvcInput() {
    return this._altSvc;
  }

  // alt_svc_clear - computed: false, optional: true, required: false
  private _altSvcClear?: string; 
  public get altSvcClear() {
    return this.getStringAttribute('alt_svc_clear');
  }
  public set altSvcClear(value: string) {
    this._altSvcClear = value;
  }
  public resetAltSvcClear() {
    this._altSvcClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altSvcClearInput() {
    return this._altSvcClear;
  }

  // alt_svc_ma - computed: false, optional: true, required: false
  private _altSvcMa?: string; 
  public get altSvcMa() {
    return this.getStringAttribute('alt_svc_ma');
  }
  public set altSvcMa(value: string) {
    this._altSvcMa = value;
  }
  public resetAltSvcMa() {
    this._altSvcMa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altSvcMaInput() {
    return this._altSvcMa;
  }

  // alt_svc_persist - computed: false, optional: true, required: false
  private _altSvcPersist?: string; 
  public get altSvcPersist() {
    return this.getStringAttribute('alt_svc_persist');
  }
  public set altSvcPersist(value: string) {
    this._altSvcPersist = value;
  }
  public resetAltSvcPersist() {
    this._altSvcPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altSvcPersistInput() {
    return this._altSvcPersist;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // hsts - computed: false, optional: true, required: false
  private _hsts?: string; 
  public get hsts() {
    return this.getStringAttribute('hsts');
  }
  public set hsts(value: string) {
    this._hsts = value;
  }
  public resetHsts() {
    this._hsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsInput() {
    return this._hsts;
  }

  // hsts_include_subdomains - computed: false, optional: true, required: false
  private _hstsIncludeSubdomains?: string; 
  public get hstsIncludeSubdomains() {
    return this.getStringAttribute('hsts_include_subdomains');
  }
  public set hstsIncludeSubdomains(value: string) {
    this._hstsIncludeSubdomains = value;
  }
  public resetHstsIncludeSubdomains() {
    this._hstsIncludeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsIncludeSubdomainsInput() {
    return this._hstsIncludeSubdomains;
  }

  // hsts_max_age - computed: false, optional: true, required: false
  private _hstsMaxAge?: string; 
  public get hstsMaxAge() {
    return this.getStringAttribute('hsts_max_age');
  }
  public set hstsMaxAge(value: string) {
    this._hstsMaxAge = value;
  }
  public resetHstsMaxAge() {
    this._hstsMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsMaxAgeInput() {
    return this._hstsMaxAge;
  }

  // hsts_preload - computed: false, optional: true, required: false
  private _hstsPreload?: string; 
  public get hstsPreload() {
    return this.getStringAttribute('hsts_preload');
  }
  public set hstsPreload(value: string) {
    this._hstsPreload = value;
  }
  public resetHstsPreload() {
    this._hstsPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsPreloadInput() {
    return this._hstsPreload;
  }

  // https_force - computed: false, optional: true, required: false
  private _httpsForce?: string; 
  public get httpsForce() {
    return this.getStringAttribute('https_force');
  }
  public set httpsForce(value: string) {
    this._httpsForce = value;
  }
  public resetHttpsForce() {
    this._httpsForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsForceInput() {
    return this._httpsForce;
  }

  // https_force_code - computed: false, optional: true, required: false
  private _httpsForceCode?: string; 
  public get httpsForceCode() {
    return this.getStringAttribute('https_force_code');
  }
  public set httpsForceCode(value: string) {
    this._httpsForceCode = value;
  }
  public resetHttpsForceCode() {
    this._httpsForceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsForceCodeInput() {
    return this._httpsForceCode;
  }

  // https_no_sni_deny - computed: false, optional: true, required: false
  private _httpsNoSniDeny?: string; 
  public get httpsNoSniDeny() {
    return this.getStringAttribute('https_no_sni_deny');
  }
  public set httpsNoSniDeny(value: string) {
    this._httpsNoSniDeny = value;
  }
  public resetHttpsNoSniDeny() {
    this._httpsNoSniDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsNoSniDenyInput() {
    return this._httpsNoSniDeny;
  }

  // https_sni_verify - computed: false, optional: true, required: false
  private _httpsSniVerify?: string; 
  public get httpsSniVerify() {
    return this.getStringAttribute('https_sni_verify');
  }
  public set httpsSniVerify(value: string) {
    this._httpsSniVerify = value;
  }
  public resetHttpsSniVerify() {
    this._httpsSniVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSniVerifyInput() {
    return this._httpsSniVerify;
  }

  // https_sni_whitelist - computed: false, optional: true, required: false
  private _httpsSniWhitelist?: string; 
  public get httpsSniWhitelist() {
    return this.getStringAttribute('https_sni_whitelist');
  }
  public set httpsSniWhitelist(value: string) {
    this._httpsSniWhitelist = value;
  }
  public resetHttpsSniWhitelist() {
    this._httpsSniWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSniWhitelistInput() {
    return this._httpsSniWhitelist;
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
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
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
  private _timeouts = new EsaHttpsApplicationConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaHttpsApplicationConfigurationTimeouts) {
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
      alt_svc: cdktf.stringToTerraform(this._altSvc),
      alt_svc_clear: cdktf.stringToTerraform(this._altSvcClear),
      alt_svc_ma: cdktf.stringToTerraform(this._altSvcMa),
      alt_svc_persist: cdktf.stringToTerraform(this._altSvcPersist),
      hsts: cdktf.stringToTerraform(this._hsts),
      hsts_include_subdomains: cdktf.stringToTerraform(this._hstsIncludeSubdomains),
      hsts_max_age: cdktf.stringToTerraform(this._hstsMaxAge),
      hsts_preload: cdktf.stringToTerraform(this._hstsPreload),
      https_force: cdktf.stringToTerraform(this._httpsForce),
      https_force_code: cdktf.stringToTerraform(this._httpsForceCode),
      https_no_sni_deny: cdktf.stringToTerraform(this._httpsNoSniDeny),
      https_sni_verify: cdktf.stringToTerraform(this._httpsSniVerify),
      https_sni_whitelist: cdktf.stringToTerraform(this._httpsSniWhitelist),
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      timeouts: esaHttpsApplicationConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alt_svc: {
        value: cdktf.stringToHclTerraform(this._altSvc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_svc_clear: {
        value: cdktf.stringToHclTerraform(this._altSvcClear),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_svc_ma: {
        value: cdktf.stringToHclTerraform(this._altSvcMa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_svc_persist: {
        value: cdktf.stringToHclTerraform(this._altSvcPersist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts: {
        value: cdktf.stringToHclTerraform(this._hsts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts_include_subdomains: {
        value: cdktf.stringToHclTerraform(this._hstsIncludeSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts_max_age: {
        value: cdktf.stringToHclTerraform(this._hstsMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts_preload: {
        value: cdktf.stringToHclTerraform(this._hstsPreload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_force: {
        value: cdktf.stringToHclTerraform(this._httpsForce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_force_code: {
        value: cdktf.stringToHclTerraform(this._httpsForceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_no_sni_deny: {
        value: cdktf.stringToHclTerraform(this._httpsNoSniDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_sni_verify: {
        value: cdktf.stringToHclTerraform(this._httpsSniVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_sni_whitelist: {
        value: cdktf.stringToHclTerraform(this._httpsSniWhitelist),
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
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_version: {
        value: cdktf.numberToHclTerraform(this._siteVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: esaHttpsApplicationConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaHttpsApplicationConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
