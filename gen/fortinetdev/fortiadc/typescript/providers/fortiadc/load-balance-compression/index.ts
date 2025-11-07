// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceCompressionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#cpu_limit LoadBalanceCompression#cpu_limit}
  */
  readonly cpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#gzip_memory_level LoadBalanceCompression#gzip_memory_level}
  */
  readonly gzipMemoryLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#gzip_window_size LoadBalanceCompression#gzip_window_size}
  */
  readonly gzipWindowSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#id LoadBalanceCompression#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#level LoadBalanceCompression#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#max_cpu_usage LoadBalanceCompression#max_cpu_usage}
  */
  readonly maxCpuUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#method LoadBalanceCompression#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#min_content_length LoadBalanceCompression#min_content_length}
  */
  readonly minContentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#mkey LoadBalanceCompression#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#uri_list_type LoadBalanceCompression#uri_list_type}
  */
  readonly uriListType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#vdom LoadBalanceCompression#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression fortiadc_load_balance_compression}
*/
export class LoadBalanceCompression extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_compression";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceCompression resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceCompression to import
  * @param importFromId The id of the existing LoadBalanceCompression that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceCompression to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_compression", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_compression fortiadc_load_balance_compression} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceCompressionConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceCompressionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_compression',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuLimit = config.cpuLimit;
    this._gzipMemoryLevel = config.gzipMemoryLevel;
    this._gzipWindowSize = config.gzipWindowSize;
    this._id = config.id;
    this._level = config.level;
    this._maxCpuUsage = config.maxCpuUsage;
    this._method = config.method;
    this._minContentLength = config.minContentLength;
    this._mkey = config.mkey;
    this._uriListType = config.uriListType;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_limit - computed: true, optional: true, required: false
  private _cpuLimit?: string; 
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }
  public set cpuLimit(value: string) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // gzip_memory_level - computed: true, optional: true, required: false
  private _gzipMemoryLevel?: string; 
  public get gzipMemoryLevel() {
    return this.getStringAttribute('gzip_memory_level');
  }
  public set gzipMemoryLevel(value: string) {
    this._gzipMemoryLevel = value;
  }
  public resetGzipMemoryLevel() {
    this._gzipMemoryLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipMemoryLevelInput() {
    return this._gzipMemoryLevel;
  }

  // gzip_window_size - computed: true, optional: true, required: false
  private _gzipWindowSize?: string; 
  public get gzipWindowSize() {
    return this.getStringAttribute('gzip_window_size');
  }
  public set gzipWindowSize(value: string) {
    this._gzipWindowSize = value;
  }
  public resetGzipWindowSize() {
    this._gzipWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipWindowSizeInput() {
    return this._gzipWindowSize;
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

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // max_cpu_usage - computed: true, optional: true, required: false
  private _maxCpuUsage?: string; 
  public get maxCpuUsage() {
    return this.getStringAttribute('max_cpu_usage');
  }
  public set maxCpuUsage(value: string) {
    this._maxCpuUsage = value;
  }
  public resetMaxCpuUsage() {
    this._maxCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuUsageInput() {
    return this._maxCpuUsage;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // min_content_length - computed: true, optional: true, required: false
  private _minContentLength?: string; 
  public get minContentLength() {
    return this.getStringAttribute('min_content_length');
  }
  public set minContentLength(value: string) {
    this._minContentLength = value;
  }
  public resetMinContentLength() {
    this._minContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minContentLengthInput() {
    return this._minContentLength;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // uri_list_type - computed: true, optional: true, required: false
  private _uriListType?: string; 
  public get uriListType() {
    return this.getStringAttribute('uri_list_type');
  }
  public set uriListType(value: string) {
    this._uriListType = value;
  }
  public resetUriListType() {
    this._uriListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriListTypeInput() {
    return this._uriListType;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_limit: cdktf.stringToTerraform(this._cpuLimit),
      gzip_memory_level: cdktf.stringToTerraform(this._gzipMemoryLevel),
      gzip_window_size: cdktf.stringToTerraform(this._gzipWindowSize),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      max_cpu_usage: cdktf.stringToTerraform(this._maxCpuUsage),
      method: cdktf.stringToTerraform(this._method),
      min_content_length: cdktf.stringToTerraform(this._minContentLength),
      mkey: cdktf.stringToTerraform(this._mkey),
      uri_list_type: cdktf.stringToTerraform(this._uriListType),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_limit: {
        value: cdktf.stringToHclTerraform(this._cpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gzip_memory_level: {
        value: cdktf.stringToHclTerraform(this._gzipMemoryLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gzip_window_size: {
        value: cdktf.stringToHclTerraform(this._gzipWindowSize),
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
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cpu_usage: {
        value: cdktf.stringToHclTerraform(this._maxCpuUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_content_length: {
        value: cdktf.stringToHclTerraform(this._minContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri_list_type: {
        value: cdktf.stringToHclTerraform(this._uriListType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
