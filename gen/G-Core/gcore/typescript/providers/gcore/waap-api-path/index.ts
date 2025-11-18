// https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapApiPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of API groups associated with the API path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#api_groups WaapApiPath#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * The API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#api_version WaapApiPath#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The WAAP domain ID for which the API Path is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#domain_id WaapApiPath#domain_id}
  */
  readonly domainId: number;
  /**
  * The different HTTP schemes an API path can have. It must be one of these values: HTTP, HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#http_scheme WaapApiPath#http_scheme}
  */
  readonly httpScheme: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#id WaapApiPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The different methods an API path can have. It must be one of these values: GET, POST, PUT, PATCH, DELETE, TRACE, HEAD, OPTIONS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#method WaapApiPath#method}
  */
  readonly method: string;
  /**
  * The API path, locations that are saved for resource IDs will be put in curly brackets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#path WaapApiPath#path}
  */
  readonly path: string;
  /**
  * The status of the discovered API path. It must be one of these values: CONFIRMED_API, POTENTIAL_API, NOT_API, DELISTED_API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#status WaapApiPath#status}
  */
  readonly status?: string;
  /**
  * An array of tags associated with the API path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#tags WaapApiPath#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path gcore_waap_api_path}
*/
export class WaapApiPath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_api_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapApiPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapApiPath to import
  * @param importFromId The id of the existing WaapApiPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapApiPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_api_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_api_path gcore_waap_api_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapApiPathConfig
  */
  public constructor(scope: Construct, id: string, config: WaapApiPathConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_api_path',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.0',
        providerVersionConstraint: '0.32.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiGroups = config.apiGroups;
    this._apiVersion = config.apiVersion;
    this._domainId = config.domainId;
    this._httpScheme = config.httpScheme;
    this._id = config.id;
    this._method = config.method;
    this._path = config.path;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('api_groups'));
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // http_scheme - computed: false, optional: false, required: true
  private _httpScheme?: string; 
  public get httpScheme() {
    return this.getStringAttribute('http_scheme');
  }
  public set httpScheme(value: string) {
    this._httpScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSchemeInput() {
    return this._httpScheme;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiGroups),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      domain_id: cdktf.numberToTerraform(this._domainId),
      http_scheme: cdktf.stringToTerraform(this._httpScheme),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      path: cdktf.stringToTerraform(this._path),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_scheme: {
        value: cdktf.stringToHclTerraform(this._httpScheme),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
