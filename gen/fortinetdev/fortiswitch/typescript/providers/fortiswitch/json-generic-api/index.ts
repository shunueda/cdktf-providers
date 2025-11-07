// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JsonGenericApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api#force_recreate JsonGenericApi#force_recreate}
  */
  readonly forceRecreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api#id JsonGenericApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api#json JsonGenericApi#json}
  */
  readonly json?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api#method JsonGenericApi#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api#path JsonGenericApi#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api#specialparams JsonGenericApi#specialparams}
  */
  readonly specialparams?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api fortiswitch_json_generic_api}
*/
export class JsonGenericApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_json_generic_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JsonGenericApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JsonGenericApi to import
  * @param importFromId The id of the existing JsonGenericApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JsonGenericApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_json_generic_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/json_generic_api fortiswitch_json_generic_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JsonGenericApiConfig
  */
  public constructor(scope: Construct, id: string, config: JsonGenericApiConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_json_generic_api',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceRecreate = config.forceRecreate;
    this._id = config.id;
    this._json = config.json;
    this._method = config.method;
    this._path = config.path;
    this._specialparams = config.specialparams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_recreate - computed: false, optional: true, required: false
  private _forceRecreate?: string; 
  public get forceRecreate() {
    return this.getStringAttribute('force_recreate');
  }
  public set forceRecreate(value: string) {
    this._forceRecreate = value;
  }
  public resetForceRecreate() {
    this._forceRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateInput() {
    return this._forceRecreate;
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

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }

  // specialparams - computed: false, optional: true, required: false
  private _specialparams?: string; 
  public get specialparams() {
    return this.getStringAttribute('specialparams');
  }
  public set specialparams(value: string) {
    this._specialparams = value;
  }
  public resetSpecialparams() {
    this._specialparams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialparamsInput() {
    return this._specialparams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_recreate: cdktf.stringToTerraform(this._forceRecreate),
      id: cdktf.stringToTerraform(this._id),
      json: cdktf.stringToTerraform(this._json),
      method: cdktf.stringToTerraform(this._method),
      path: cdktf.stringToTerraform(this._path),
      specialparams: cdktf.stringToTerraform(this._specialparams),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_recreate: {
        value: cdktf.stringToHclTerraform(this._forceRecreate),
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
      json: {
        value: cdktf.stringToHclTerraform(this._json),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specialparams: {
        value: cdktf.stringToHclTerraform(this._specialparams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
