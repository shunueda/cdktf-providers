// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the External Endpoint where this API Filter will process the requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter#external_endpoint_id ApiFilter#external_endpoint_id}
  */
  readonly externalEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter#id ApiFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Request URL pattern, written as a regular expression pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter#url_matcher_pattern ApiFilter#url_matcher_pattern}
  */
  readonly urlMatcherPattern: string;
  /**
  * Allowed values are EXT_API, EXT_UI_PROVIDER, EXT_UI_TENANT corresponding to /ext-api, /ext-ui/provider, /ext-ui/tenant/<tenant-name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter#url_matcher_scope ApiFilter#url_matcher_scope}
  */
  readonly urlMatcherScope: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter vcd_api_filter}
*/
export class ApiFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_api_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiFilter to import
  * @param importFromId The id of the existing ApiFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_api_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/api_filter vcd_api_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiFilterConfig
  */
  public constructor(scope: Construct, id: string, config: ApiFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_api_filter',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalEndpointId = config.externalEndpointId;
    this._id = config.id;
    this._urlMatcherPattern = config.urlMatcherPattern;
    this._urlMatcherScope = config.urlMatcherScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_endpoint_id - computed: false, optional: false, required: true
  private _externalEndpointId?: string; 
  public get externalEndpointId() {
    return this.getStringAttribute('external_endpoint_id');
  }
  public set externalEndpointId(value: string) {
    this._externalEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEndpointIdInput() {
    return this._externalEndpointId;
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

  // url_matcher_pattern - computed: false, optional: false, required: true
  private _urlMatcherPattern?: string; 
  public get urlMatcherPattern() {
    return this.getStringAttribute('url_matcher_pattern');
  }
  public set urlMatcherPattern(value: string) {
    this._urlMatcherPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMatcherPatternInput() {
    return this._urlMatcherPattern;
  }

  // url_matcher_scope - computed: false, optional: false, required: true
  private _urlMatcherScope?: string; 
  public get urlMatcherScope() {
    return this.getStringAttribute('url_matcher_scope');
  }
  public set urlMatcherScope(value: string) {
    this._urlMatcherScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMatcherScopeInput() {
    return this._urlMatcherScope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_endpoint_id: cdktf.stringToTerraform(this._externalEndpointId),
      id: cdktf.stringToTerraform(this._id),
      url_matcher_pattern: cdktf.stringToTerraform(this._urlMatcherPattern),
      url_matcher_scope: cdktf.stringToTerraform(this._urlMatcherScope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._externalEndpointId),
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
      url_matcher_pattern: {
        value: cdktf.stringToHclTerraform(this._urlMatcherPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_matcher_scope: {
        value: cdktf.stringToHclTerraform(this._urlMatcherScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
