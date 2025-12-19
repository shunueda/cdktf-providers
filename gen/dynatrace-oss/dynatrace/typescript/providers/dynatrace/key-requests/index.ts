// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests#id KeyRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ids of the key requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests#key_request_ids KeyRequests#key_request_ids}
  */
  readonly keyRequestIds?: { [key: string]: string };
  /**
  * The names of the key requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests#names KeyRequests#names}
  */
  readonly names?: string[];
  /**
  * ID of Dynatrace Service, eg. SERVICE-123ABC45678EFGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests#service KeyRequests#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests dynatrace_key_requests}
*/
export class KeyRequests extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_key_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyRequests to import
  * @param importFromId The id of the existing KeyRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_key_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/key_requests dynatrace_key_requests} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: KeyRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_key_requests',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._keyRequestIds = config.keyRequestIds;
    this._names = config.names;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_request_ids - computed: true, optional: true, required: false
  private _keyRequestIds?: { [key: string]: string }; 
  public get keyRequestIds() {
    return this.getStringMapAttribute('key_request_ids');
  }
  public set keyRequestIds(value: { [key: string]: string }) {
    this._keyRequestIds = value;
  }
  public resetKeyRequestIds() {
    this._keyRequestIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRequestIdsInput() {
    return this._keyRequestIds;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_request_ids: cdktf.hashMapper(cdktf.stringToTerraform)(this._keyRequestIds),
      names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._names),
      service: cdktf.stringToTerraform(this._service),
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
      key_request_ids: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keyRequestIds),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._names),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
