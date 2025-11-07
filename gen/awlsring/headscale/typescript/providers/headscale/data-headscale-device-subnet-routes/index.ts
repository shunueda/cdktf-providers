// https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/device_subnet_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHeadscaleDeviceSubnetRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device to get the routes of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/device_subnet_routes#device_id DataHeadscaleDeviceSubnetRoutes#device_id}
  */
  readonly deviceId: string;
  /**
  * Filters the route list to elements whose status matches what is provided. Can be `enabled` or `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/device_subnet_routes#status DataHeadscaleDeviceSubnetRoutes#status}
  */
  readonly status?: string;
}
export interface DataHeadscaleDeviceSubnetRoutesRoutes {
}

export function dataHeadscaleDeviceSubnetRoutesRoutesToTerraform(struct?: DataHeadscaleDeviceSubnetRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHeadscaleDeviceSubnetRoutesRoutesToHclTerraform(struct?: DataHeadscaleDeviceSubnetRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHeadscaleDeviceSubnetRoutesRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHeadscaleDeviceSubnetRoutesRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHeadscaleDeviceSubnetRoutesRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }
}

export class DataHeadscaleDeviceSubnetRoutesRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHeadscaleDeviceSubnetRoutesRoutesOutputReference {
    return new DataHeadscaleDeviceSubnetRoutesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/device_subnet_routes headscale_device_subnet_routes}
*/
export class DataHeadscaleDeviceSubnetRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "headscale_device_subnet_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHeadscaleDeviceSubnetRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHeadscaleDeviceSubnetRoutes to import
  * @param importFromId The id of the existing DataHeadscaleDeviceSubnetRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/device_subnet_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHeadscaleDeviceSubnetRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "headscale_device_subnet_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/device_subnet_routes headscale_device_subnet_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHeadscaleDeviceSubnetRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: DataHeadscaleDeviceSubnetRoutesConfig) {
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
    this._status = config.status;
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

  // routes - computed: true, optional: false, required: false
  private _routes = new DataHeadscaleDeviceSubnetRoutesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      status: cdktf.stringToTerraform(this._status),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
