// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key#id ServiceKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key#name ServiceKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key#params ServiceKey#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key#params_json ServiceKey#params_json}
  */
  readonly paramsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key#service_instance ServiceKey#service_instance}
  */
  readonly serviceInstance: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key cloudfoundry_service_key}
*/
export class ServiceKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_service_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceKey to import
  * @param importFromId The id of the existing ServiceKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_service_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_key cloudfoundry_service_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_service_key',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1'
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
    this._name = config.name;
    this._params = config.params;
    this._paramsJson = config.paramsJson;
    this._serviceInstance = config.serviceInstance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: true, optional: false, required: false
  private _credentials = new cdktf.StringMap(this, "credentials");
  public get credentials() {
    return this._credentials;
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // params_json - computed: false, optional: true, required: false
  private _paramsJson?: string; 
  public get paramsJson() {
    return this.getStringAttribute('params_json');
  }
  public set paramsJson(value: string) {
    this._paramsJson = value;
  }
  public resetParamsJson() {
    this._paramsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsJsonInput() {
    return this._paramsJson;
  }

  // service_instance - computed: false, optional: false, required: true
  private _serviceInstance?: string; 
  public get serviceInstance() {
    return this.getStringAttribute('service_instance');
  }
  public set serviceInstance(value: string) {
    this._serviceInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceInput() {
    return this._serviceInstance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      params: cdktf.hashMapper(cdktf.stringToTerraform)(this._params),
      params_json: cdktf.stringToTerraform(this._paramsJson),
      service_instance: cdktf.stringToTerraform(this._serviceInstance),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._params),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      params_json: {
        value: cdktf.stringToHclTerraform(this._paramsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_instance: {
        value: cdktf.stringToHclTerraform(this._serviceInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
