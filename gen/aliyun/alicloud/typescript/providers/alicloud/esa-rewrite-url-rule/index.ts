// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaRewriteUrlRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#id EsaRewriteUrlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#query_string EsaRewriteUrlRule#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#rewrite_query_string_type EsaRewriteUrlRule#rewrite_query_string_type}
  */
  readonly rewriteQueryStringType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#rewrite_uri_type EsaRewriteUrlRule#rewrite_uri_type}
  */
  readonly rewriteUriType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#rule EsaRewriteUrlRule#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#rule_enable EsaRewriteUrlRule#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#rule_name EsaRewriteUrlRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#sequence EsaRewriteUrlRule#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#site_id EsaRewriteUrlRule#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#site_version EsaRewriteUrlRule#site_version}
  */
  readonly siteVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#uri EsaRewriteUrlRule#uri}
  */
  readonly uri?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#timeouts EsaRewriteUrlRule#timeouts}
  */
  readonly timeouts?: EsaRewriteUrlRuleTimeouts;
}
export interface EsaRewriteUrlRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#create EsaRewriteUrlRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#delete EsaRewriteUrlRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#update EsaRewriteUrlRule#update}
  */
  readonly update?: string;
}

export function esaRewriteUrlRuleTimeoutsToTerraform(struct?: EsaRewriteUrlRuleTimeouts | cdktf.IResolvable): any {
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


export function esaRewriteUrlRuleTimeoutsToHclTerraform(struct?: EsaRewriteUrlRuleTimeouts | cdktf.IResolvable): any {
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

export class EsaRewriteUrlRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaRewriteUrlRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaRewriteUrlRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule alicloud_esa_rewrite_url_rule}
*/
export class EsaRewriteUrlRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_rewrite_url_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaRewriteUrlRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaRewriteUrlRule to import
  * @param importFromId The id of the existing EsaRewriteUrlRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaRewriteUrlRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_rewrite_url_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_rewrite_url_rule alicloud_esa_rewrite_url_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaRewriteUrlRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EsaRewriteUrlRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_rewrite_url_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._queryString = config.queryString;
    this._rewriteQueryStringType = config.rewriteQueryStringType;
    this._rewriteUriType = config.rewriteUriType;
    this._rule = config.rule;
    this._ruleEnable = config.ruleEnable;
    this._ruleName = config.ruleName;
    this._sequence = config.sequence;
    this._siteId = config.siteId;
    this._siteVersion = config.siteVersion;
    this._uri = config.uri;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
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

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // rewrite_query_string_type - computed: false, optional: true, required: false
  private _rewriteQueryStringType?: string; 
  public get rewriteQueryStringType() {
    return this.getStringAttribute('rewrite_query_string_type');
  }
  public set rewriteQueryStringType(value: string) {
    this._rewriteQueryStringType = value;
  }
  public resetRewriteQueryStringType() {
    this._rewriteQueryStringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteQueryStringTypeInput() {
    return this._rewriteQueryStringType;
  }

  // rewrite_uri_type - computed: false, optional: true, required: false
  private _rewriteUriType?: string; 
  public get rewriteUriType() {
    return this.getStringAttribute('rewrite_uri_type');
  }
  public set rewriteUriType(value: string) {
    this._rewriteUriType = value;
  }
  public resetRewriteUriType() {
    this._rewriteUriType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteUriTypeInput() {
    return this._rewriteUriType;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaRewriteUrlRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaRewriteUrlRuleTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      query_string: cdktf.stringToTerraform(this._queryString),
      rewrite_query_string_type: cdktf.stringToTerraform(this._rewriteQueryStringType),
      rewrite_uri_type: cdktf.stringToTerraform(this._rewriteUriType),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      uri: cdktf.stringToTerraform(this._uri),
      timeouts: esaRewriteUrlRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_string: {
        value: cdktf.stringToHclTerraform(this._queryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_query_string_type: {
        value: cdktf.stringToHclTerraform(this._rewriteQueryStringType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_uri_type: {
        value: cdktf.stringToHclTerraform(this._rewriteUriType),
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
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaRewriteUrlRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaRewriteUrlRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
