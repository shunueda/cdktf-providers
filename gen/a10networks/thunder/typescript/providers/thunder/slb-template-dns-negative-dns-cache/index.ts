// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsNegativeDnsCacheAConfig extends cdktf.TerraformMetaArguments {
  /**
  * the threshold bypass the query, default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache#bypass_query_threshold SlbTemplateDnsNegativeDnsCacheA#bypass_query_threshold}
  */
  readonly bypassQueryThreshold?: number;
  /**
  * Enable DNS negative cache (Need to turn-on the dns-cache for this feature)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache#enable_negative_dns_cache SlbTemplateDnsNegativeDnsCacheA#enable_negative_dns_cache}
  */
  readonly enableNegativeDnsCache: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache#id SlbTemplateDnsNegativeDnsCacheA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max negative cache ttl, default is 2 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache#max_negative_cache_ttl SlbTemplateDnsNegativeDnsCacheA#max_negative_cache_ttl}
  */
  readonly maxNegativeCacheTtl?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache#name SlbTemplateDnsNegativeDnsCacheA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache#uuid SlbTemplateDnsNegativeDnsCacheA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache thunder_slb_template_dns_negative_dns_cache}
*/
export class SlbTemplateDnsNegativeDnsCacheA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_negative_dns_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsNegativeDnsCacheA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsNegativeDnsCacheA to import
  * @param importFromId The id of the existing SlbTemplateDnsNegativeDnsCacheA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsNegativeDnsCacheA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_negative_dns_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dns_negative_dns_cache thunder_slb_template_dns_negative_dns_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsNegativeDnsCacheAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsNegativeDnsCacheAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_negative_dns_cache',
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
    this._bypassQueryThreshold = config.bypassQueryThreshold;
    this._enableNegativeDnsCache = config.enableNegativeDnsCache;
    this._id = config.id;
    this._maxNegativeCacheTtl = config.maxNegativeCacheTtl;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_query_threshold - computed: false, optional: true, required: false
  private _bypassQueryThreshold?: number; 
  public get bypassQueryThreshold() {
    return this.getNumberAttribute('bypass_query_threshold');
  }
  public set bypassQueryThreshold(value: number) {
    this._bypassQueryThreshold = value;
  }
  public resetBypassQueryThreshold() {
    this._bypassQueryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassQueryThresholdInput() {
    return this._bypassQueryThreshold;
  }

  // enable_negative_dns_cache - computed: false, optional: false, required: true
  private _enableNegativeDnsCache?: number; 
  public get enableNegativeDnsCache() {
    return this.getNumberAttribute('enable_negative_dns_cache');
  }
  public set enableNegativeDnsCache(value: number) {
    this._enableNegativeDnsCache = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNegativeDnsCacheInput() {
    return this._enableNegativeDnsCache;
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

  // max_negative_cache_ttl - computed: false, optional: true, required: false
  private _maxNegativeCacheTtl?: number; 
  public get maxNegativeCacheTtl() {
    return this.getNumberAttribute('max_negative_cache_ttl');
  }
  public set maxNegativeCacheTtl(value: number) {
    this._maxNegativeCacheTtl = value;
  }
  public resetMaxNegativeCacheTtl() {
    this._maxNegativeCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeCacheTtlInput() {
    return this._maxNegativeCacheTtl;
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
      bypass_query_threshold: cdktf.numberToTerraform(this._bypassQueryThreshold),
      enable_negative_dns_cache: cdktf.numberToTerraform(this._enableNegativeDnsCache),
      id: cdktf.stringToTerraform(this._id),
      max_negative_cache_ttl: cdktf.numberToTerraform(this._maxNegativeCacheTtl),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_query_threshold: {
        value: cdktf.numberToHclTerraform(this._bypassQueryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_negative_dns_cache: {
        value: cdktf.numberToHclTerraform(this._enableNegativeDnsCache),
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
      max_negative_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._maxNegativeCacheTtl),
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
