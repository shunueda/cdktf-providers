// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteServiceBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding#id RouteServiceBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding#json_params RouteServiceBinding#json_params}
  */
  readonly jsonParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding#route RouteServiceBinding#route}
  */
  readonly route: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding#service_instance RouteServiceBinding#service_instance}
  */
  readonly serviceInstance: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding cloudfoundry_route_service_binding}
*/
export class RouteServiceBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_route_service_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteServiceBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteServiceBinding to import
  * @param importFromId The id of the existing RouteServiceBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteServiceBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_route_service_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/route_service_binding cloudfoundry_route_service_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteServiceBindingConfig
  */
  public constructor(scope: Construct, id: string, config: RouteServiceBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_route_service_binding',
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
    this._jsonParams = config.jsonParams;
    this._route = config.route;
    this._serviceInstance = config.serviceInstance;
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

  // json_params - computed: false, optional: true, required: false
  private _jsonParams?: string; 
  public get jsonParams() {
    return this.getStringAttribute('json_params');
  }
  public set jsonParams(value: string) {
    this._jsonParams = value;
  }
  public resetJsonParams() {
    this._jsonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParamsInput() {
    return this._jsonParams;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
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
      json_params: cdktf.stringToTerraform(this._jsonParams),
      route: cdktf.stringToTerraform(this._route),
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
      json_params: {
        value: cdktf.stringToHclTerraform(this._jsonParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route: {
        value: cdktf.stringToHclTerraform(this._route),
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
