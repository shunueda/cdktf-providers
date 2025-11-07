// https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/device_subnet_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceSubnetRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the device to get subnet routes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/device_subnet_routes#device_id DeviceSubnetRoutes#device_id}
  */
  readonly deviceId: string;
  /**
  * The enabled routes of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/device_subnet_routes#routes DeviceSubnetRoutes#routes}
  */
  readonly routes: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/device_subnet_routes headscale_device_subnet_routes}
*/
export class DeviceSubnetRoutes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "headscale_device_subnet_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceSubnetRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceSubnetRoutes to import
  * @param importFromId The id of the existing DeviceSubnetRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/device_subnet_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceSubnetRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "headscale_device_subnet_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/device_subnet_routes headscale_device_subnet_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceSubnetRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceSubnetRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'headscale_device_subnet_routes',
      terraformGeneratorMetadata: {
        providerName: 'headscale',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._routes = config.routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // routes - computed: false, optional: false, required: true
  private _routes?: string[]; 
  public get routes() {
    return this.getListAttribute('routes');
  }
  public set routes(value: string[]) {
    this._routes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
