// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsDns64AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use a cached A-query response to provide AAAA query responses for the same hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#cache SlbTemplateDnsDns64A#cache}
  */
  readonly cache?: number;
  /**
  * Always change incoming AAAA DNS Query to A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#change_query SlbTemplateDnsDns64A#change_query}
  */
  readonly changeQuery?: number;
  /**
  * Enable DNS64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#enable SlbTemplateDnsDns64A#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#id SlbTemplateDnsDns64A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#name SlbTemplateDnsDns64A#name}
  */
  readonly name: string;
  /**
  * Forward AAAA Query & generate A Query in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#parallel_query SlbTemplateDnsDns64A#parallel_query}
  */
  readonly parallelQuery?: number;
  /**
  * Retry count, default is 3 (Retry Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#retry SlbTemplateDnsDns64A#retry}
  */
  readonly retry?: number;
  /**
  * Disable Single Response which is used to avoid ambiguity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#single_response_disable SlbTemplateDnsDns64A#single_response_disable}
  */
  readonly singleResponseDisable?: number;
  /**
  * Timeout to send additional Queries, unit: second, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#timeout SlbTemplateDnsDns64A#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#uuid SlbTemplateDnsDns64A#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64 thunder_slb_template_dns_dns64}
*/
export class SlbTemplateDnsDns64A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_dns64";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsDns64A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsDns64A to import
  * @param importFromId The id of the existing SlbTemplateDnsDns64A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsDns64A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_dns64", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_dns64 thunder_slb_template_dns_dns64} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsDns64AConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsDns64AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_dns64',
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
    this._cache = config.cache;
    this._changeQuery = config.changeQuery;
    this._enable = config.enable;
    this._id = config.id;
    this._name = config.name;
    this._parallelQuery = config.parallelQuery;
    this._retry = config.retry;
    this._singleResponseDisable = config.singleResponseDisable;
    this._timeout = config.timeout;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      cache: cdktf.numberToTerraform(this._cache),
      change_query: cdktf.numberToTerraform(this._changeQuery),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parallel_query: cdktf.numberToTerraform(this._parallelQuery),
      retry: cdktf.numberToTerraform(this._retry),
      single_response_disable: cdktf.numberToTerraform(this._singleResponseDisable),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
