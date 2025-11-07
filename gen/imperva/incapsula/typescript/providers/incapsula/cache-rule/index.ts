// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CacheRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule action. See the detailed descriptions in the API documentation. Possible values: `HTTP_CACHE_MAKE_STATIC`, `HTTP_CACHE_CLIENT_CACHE_CTL`, `HTTP_CACHE_FORCE_UNCACHEABLE`, `HTTP_CACHE_ADD_TAG`, `HTTP_CACHE_DIFFERENTIATE_SSL`, `HTTP_CACHE_DIFFERENTIATE_BY_HEADER`, `HTTP_CACHE_DIFFERENTIATE_BY_COOKIE`, `HTTP_CACHE_DIFFERENTIATE_BY_GEO`, `HTTP_CACHE_IGNORE_PARAMS`, `HTTP_CACHE_ENRICH_CACHE_KEY`, `HTTP_CACHE_FORCE_VALIDATION`, `HTTP_CACHE_IGNORE_AUTH_HEADER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#action CacheRule#action}
  */
  readonly action: string;
  /**
  * Value to differentiate resources by. Relevant for `HTTP_CACHE_DIFFERENTIATE_BY_HEADER`, `HTTP_CACHE_DIFFERENTIATE_BY_COOKIE` and `HTTP_CACHE_DIFFERENTIATE_BY_GEO` actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#differentiate_by_value CacheRule#differentiate_by_value}
  */
  readonly differentiateByValue?: string;
  /**
  * Boolean that specifies if the rule should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#enabled CacheRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The filter defines the conditions that trigger the rule action, if left empty, the rule is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#filter CacheRule#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#id CacheRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parameters to ignore. Relevant for `HTTP_CACHE_IGNORE_PARAMS` action. An array containing `'*'` means all parameters are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#ignored_params CacheRule#ignored_params}
  */
  readonly ignoredParams?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#name CacheRule#name}
  */
  readonly name: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#site_id CacheRule#site_id}
  */
  readonly siteId: string;
  /**
  * Tag name if action is `HTTP_CACHE_ADD_TAG` action, text to be added to the cache key as suffix if action is `HTTP_CACHE_ENRICH_CACHE_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#text CacheRule#text}
  */
  readonly text?: string;
  /**
  * TTL in seconds. Relevant for `HTTP_CACHE_MAKE_STATIC` and `HTTP_CACHE_CLIENT_CACHE_CTL` actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#ttl CacheRule#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule incapsula_cache_rule}
*/
export class CacheRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_cache_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CacheRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CacheRule to import
  * @param importFromId The id of the existing CacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CacheRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_cache_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/cache_rule incapsula_cache_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_cache_rule',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._differentiateByValue = config.differentiateByValue;
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._id = config.id;
    this._ignoredParams = config.ignoredParams;
    this._name = config.name;
    this._siteId = config.siteId;
    this._text = config.text;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // differentiate_by_value - computed: false, optional: true, required: false
  private _differentiateByValue?: string; 
  public get differentiateByValue() {
    return this.getStringAttribute('differentiate_by_value');
  }
  public set differentiateByValue(value: string) {
    this._differentiateByValue = value;
  }
  public resetDifferentiateByValue() {
    this._differentiateByValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get differentiateByValueInput() {
    return this._differentiateByValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // ignored_params - computed: false, optional: true, required: false
  private _ignoredParams?: string; 
  public get ignoredParams() {
    return this.getStringAttribute('ignored_params');
  }
  public set ignoredParams(value: string) {
    this._ignoredParams = value;
  }
  public resetIgnoredParams() {
    this._ignoredParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredParamsInput() {
    return this._ignoredParams;
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      differentiate_by_value: cdktf.stringToTerraform(this._differentiateByValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      ignored_params: cdktf.stringToTerraform(this._ignoredParams),
      name: cdktf.stringToTerraform(this._name),
      site_id: cdktf.stringToTerraform(this._siteId),
      text: cdktf.stringToTerraform(this._text),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      differentiate_by_value: {
        value: cdktf.stringToHclTerraform(this._differentiateByValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      ignored_params: {
        value: cdktf.stringToHclTerraform(this._ignoredParams),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
