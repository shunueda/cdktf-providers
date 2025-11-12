// https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `create_method` set on the provider. Allows per-resource override of `create_method` (see `create_method` provider config documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#create_method ObjectResource#create_method}
  */
  readonly createMethod?: string;
  /**
  * Defaults to `path`. The API path that represents where to CREATE (POST) objects of this type on the API server. The string `{id}` will be replaced with the terraform ID of the object if the data contains the `id_attribute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#create_path ObjectResource#create_path}
  */
  readonly createPath?: string;
  /**
  * Valid JSON data that this provider will manage with the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#data ObjectResource#data}
  */
  readonly data: string;
  /**
  * Whether to emit verbose debug output while working with the API object on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#debug ObjectResource#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `destroy_method` set on the provider. Allows per-resource override of `destroy_method` (see `destroy_method` provider config documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#destroy_method ObjectResource#destroy_method}
  */
  readonly destroyMethod?: string;
  /**
  * Defaults to `path/{id}`. The API path that represents where to DESTROY (DELETE) objects of this type on the API server. The string `{id}` will be replaced with the terraform ID of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#destroy_path ObjectResource#destroy_path}
  */
  readonly destroyPath?: string;
  /**
  * Any changes to these values will result in recreating the resource instead of updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#force_new ObjectResource#force_new}
  */
  readonly forceNew?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#id ObjectResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `id_attribute` set on the provider. Allows per-resource override of `id_attribute` (see `id_attribute` provider config documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#id_attribute ObjectResource#id_attribute}
  */
  readonly idAttribute?: string;
  /**
  * Defaults to the id learned by the provider during normal operations and `id_attribute`. Allows you to set the id manually. This is used in conjunction with the `*_path` attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#object_id ObjectResource#object_id}
  */
  readonly objectId?: string;
  /**
  * The API path on top of the base URL set in the provider that represents objects of this type on the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#path ObjectResource#path}
  */
  readonly path: string;
  /**
  * Defaults to `read_method` set on the provider. Allows per-resource override of `read_method` (see `read_method` provider config documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#read_method ObjectResource#read_method}
  */
  readonly readMethod?: string;
  /**
  * Defaults to `path/{id}`. The API path that represents where to READ (GET) objects of this type on the API server. The string `{id}` will be replaced with the terraform ID of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#read_path ObjectResource#read_path}
  */
  readonly readPath?: string;
  /**
  * Custom search for `read_path`. This map will take `search_key`, `search_value`, `results_key` and `query_string` (see datasource config documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#read_search ObjectResource#read_search}
  */
  readonly readSearch?: { [key: string]: string };
  /**
  * Defaults to `update_method` set on the provider. Allows per-resource override of `update_method` (see `update_method` provider config documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#update_method ObjectResource#update_method}
  */
  readonly updateMethod?: string;
  /**
  * Defaults to `path/{id}`. The API path that represents where to UPDATE (PUT) objects of this type on the API server. The string `{id}` will be replaced with the terraform ID of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#update_path ObjectResource#update_path}
  */
  readonly updatePath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object restapi_object}
*/
export class ObjectResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "restapi_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectResource to import
  * @param importFromId The id of the existing ObjectResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "restapi_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs/resources/object restapi_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'restapi_object',
      terraformGeneratorMetadata: {
        providerName: 'restapi',
        providerVersion: '1.14.1',
        providerVersionConstraint: '1.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createMethod = config.createMethod;
    this._createPath = config.createPath;
    this._data = config.data;
    this._debug = config.debug;
    this._destroyMethod = config.destroyMethod;
    this._destroyPath = config.destroyPath;
    this._forceNew = config.forceNew;
    this._id = config.id;
    this._idAttribute = config.idAttribute;
    this._objectId = config.objectId;
    this._path = config.path;
    this._readMethod = config.readMethod;
    this._readPath = config.readPath;
    this._readSearch = config.readSearch;
    this._updateMethod = config.updateMethod;
    this._updatePath = config.updatePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_data - computed: true, optional: false, required: false
  private _apiData = new cdktf.StringMap(this, "api_data");
  public get apiData() {
    return this._apiData;
  }

  // api_response - computed: true, optional: false, required: false
  public get apiResponse() {
    return this.getStringAttribute('api_response');
  }

  // create_method - computed: false, optional: true, required: false
  private _createMethod?: string; 
  public get createMethod() {
    return this.getStringAttribute('create_method');
  }
  public set createMethod(value: string) {
    this._createMethod = value;
  }
  public resetCreateMethod() {
    this._createMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMethodInput() {
    return this._createMethod;
  }

  // create_path - computed: false, optional: true, required: false
  private _createPath?: string; 
  public get createPath() {
    return this.getStringAttribute('create_path');
  }
  public set createPath(value: string) {
    this._createPath = value;
  }
  public resetCreatePath() {
    this._createPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPathInput() {
    return this._createPath;
  }

  // create_response - computed: true, optional: false, required: false
  public get createResponse() {
    return this.getStringAttribute('create_response');
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // destroy_method - computed: false, optional: true, required: false
  private _destroyMethod?: string; 
  public get destroyMethod() {
    return this.getStringAttribute('destroy_method');
  }
  public set destroyMethod(value: string) {
    this._destroyMethod = value;
  }
  public resetDestroyMethod() {
    this._destroyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyMethodInput() {
    return this._destroyMethod;
  }

  // destroy_path - computed: false, optional: true, required: false
  private _destroyPath?: string; 
  public get destroyPath() {
    return this.getStringAttribute('destroy_path');
  }
  public set destroyPath(value: string) {
    this._destroyPath = value;
  }
  public resetDestroyPath() {
    this._destroyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyPathInput() {
    return this._destroyPath;
  }

  // force_new - computed: false, optional: true, required: false
  private _forceNew?: string[]; 
  public get forceNew() {
    return this.getListAttribute('force_new');
  }
  public set forceNew(value: string[]) {
    this._forceNew = value;
  }
  public resetForceNew() {
    this._forceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewInput() {
    return this._forceNew;
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

  // id_attribute - computed: false, optional: true, required: false
  private _idAttribute?: string; 
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }
  public set idAttribute(value: string) {
    this._idAttribute = value;
  }
  public resetIdAttribute() {
    this._idAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idAttributeInput() {
    return this._idAttribute;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
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

  // read_method - computed: false, optional: true, required: false
  private _readMethod?: string; 
  public get readMethod() {
    return this.getStringAttribute('read_method');
  }
  public set readMethod(value: string) {
    this._readMethod = value;
  }
  public resetReadMethod() {
    this._readMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readMethodInput() {
    return this._readMethod;
  }

  // read_path - computed: false, optional: true, required: false
  private _readPath?: string; 
  public get readPath() {
    return this.getStringAttribute('read_path');
  }
  public set readPath(value: string) {
    this._readPath = value;
  }
  public resetReadPath() {
    this._readPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPathInput() {
    return this._readPath;
  }

  // read_search - computed: false, optional: true, required: false
  private _readSearch?: { [key: string]: string }; 
  public get readSearch() {
    return this.getStringMapAttribute('read_search');
  }
  public set readSearch(value: { [key: string]: string }) {
    this._readSearch = value;
  }
  public resetReadSearch() {
    this._readSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readSearchInput() {
    return this._readSearch;
  }

  // update_method - computed: false, optional: true, required: false
  private _updateMethod?: string; 
  public get updateMethod() {
    return this.getStringAttribute('update_method');
  }
  public set updateMethod(value: string) {
    this._updateMethod = value;
  }
  public resetUpdateMethod() {
    this._updateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMethodInput() {
    return this._updateMethod;
  }

  // update_path - computed: false, optional: true, required: false
  private _updatePath?: string; 
  public get updatePath() {
    return this.getStringAttribute('update_path');
  }
  public set updatePath(value: string) {
    this._updatePath = value;
  }
  public resetUpdatePath() {
    this._updatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePathInput() {
    return this._updatePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_method: cdktf.stringToTerraform(this._createMethod),
      create_path: cdktf.stringToTerraform(this._createPath),
      data: cdktf.stringToTerraform(this._data),
      debug: cdktf.booleanToTerraform(this._debug),
      destroy_method: cdktf.stringToTerraform(this._destroyMethod),
      destroy_path: cdktf.stringToTerraform(this._destroyPath),
      force_new: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forceNew),
      id: cdktf.stringToTerraform(this._id),
      id_attribute: cdktf.stringToTerraform(this._idAttribute),
      object_id: cdktf.stringToTerraform(this._objectId),
      path: cdktf.stringToTerraform(this._path),
      read_method: cdktf.stringToTerraform(this._readMethod),
      read_path: cdktf.stringToTerraform(this._readPath),
      read_search: cdktf.hashMapper(cdktf.stringToTerraform)(this._readSearch),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      update_path: cdktf.stringToTerraform(this._updatePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_method: {
        value: cdktf.stringToHclTerraform(this._createMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_path: {
        value: cdktf.stringToHclTerraform(this._createPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destroy_method: {
        value: cdktf.stringToHclTerraform(this._destroyMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_path: {
        value: cdktf.stringToHclTerraform(this._destroyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_new: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forceNew),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_attribute: {
        value: cdktf.stringToHclTerraform(this._idAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
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
      read_method: {
        value: cdktf.stringToHclTerraform(this._readMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_path: {
        value: cdktf.stringToHclTerraform(this._readPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_search: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._readSearch),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_path: {
        value: cdktf.stringToHclTerraform(this._updatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
