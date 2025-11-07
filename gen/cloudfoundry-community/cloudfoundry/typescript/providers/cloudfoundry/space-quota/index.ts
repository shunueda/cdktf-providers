// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#allow_paid_service_plans SpaceQuota#allow_paid_service_plans}
  */
  readonly allowPaidServicePlans: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#id SpaceQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#instance_memory SpaceQuota#instance_memory}
  */
  readonly instanceMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#name SpaceQuota#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#org SpaceQuota#org}
  */
  readonly org: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#total_app_instances SpaceQuota#total_app_instances}
  */
  readonly totalAppInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#total_app_tasks SpaceQuota#total_app_tasks}
  */
  readonly totalAppTasks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#total_memory SpaceQuota#total_memory}
  */
  readonly totalMemory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#total_route_ports SpaceQuota#total_route_ports}
  */
  readonly totalRoutePorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#total_routes SpaceQuota#total_routes}
  */
  readonly totalRoutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#total_service_keys SpaceQuota#total_service_keys}
  */
  readonly totalServiceKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#total_services SpaceQuota#total_services}
  */
  readonly totalServices: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota cloudfoundry_space_quota}
*/
export class SpaceQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_space_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpaceQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpaceQuota to import
  * @param importFromId The id of the existing SpaceQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpaceQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_space_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_quota cloudfoundry_space_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_space_quota',
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
    this._allowPaidServicePlans = config.allowPaidServicePlans;
    this._id = config.id;
    this._instanceMemory = config.instanceMemory;
    this._name = config.name;
    this._org = config.org;
    this._totalAppInstances = config.totalAppInstances;
    this._totalAppTasks = config.totalAppTasks;
    this._totalMemory = config.totalMemory;
    this._totalRoutePorts = config.totalRoutePorts;
    this._totalRoutes = config.totalRoutes;
    this._totalServiceKeys = config.totalServiceKeys;
    this._totalServices = config.totalServices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_paid_service_plans - computed: false, optional: false, required: true
  private _allowPaidServicePlans?: boolean | cdktf.IResolvable; 
  public get allowPaidServicePlans() {
    return this.getBooleanAttribute('allow_paid_service_plans');
  }
  public set allowPaidServicePlans(value: boolean | cdktf.IResolvable) {
    this._allowPaidServicePlans = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPaidServicePlansInput() {
    return this._allowPaidServicePlans;
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

  // instance_memory - computed: false, optional: true, required: false
  private _instanceMemory?: number; 
  public get instanceMemory() {
    return this.getNumberAttribute('instance_memory');
  }
  public set instanceMemory(value: number) {
    this._instanceMemory = value;
  }
  public resetInstanceMemory() {
    this._instanceMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMemoryInput() {
    return this._instanceMemory;
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

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // total_app_instances - computed: false, optional: true, required: false
  private _totalAppInstances?: number; 
  public get totalAppInstances() {
    return this.getNumberAttribute('total_app_instances');
  }
  public set totalAppInstances(value: number) {
    this._totalAppInstances = value;
  }
  public resetTotalAppInstances() {
    this._totalAppInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAppInstancesInput() {
    return this._totalAppInstances;
  }

  // total_app_tasks - computed: false, optional: true, required: false
  private _totalAppTasks?: number; 
  public get totalAppTasks() {
    return this.getNumberAttribute('total_app_tasks');
  }
  public set totalAppTasks(value: number) {
    this._totalAppTasks = value;
  }
  public resetTotalAppTasks() {
    this._totalAppTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAppTasksInput() {
    return this._totalAppTasks;
  }

  // total_memory - computed: false, optional: false, required: true
  private _totalMemory?: number; 
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }
  public set totalMemory(value: number) {
    this._totalMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryInput() {
    return this._totalMemory;
  }

  // total_route_ports - computed: false, optional: true, required: false
  private _totalRoutePorts?: number; 
  public get totalRoutePorts() {
    return this.getNumberAttribute('total_route_ports');
  }
  public set totalRoutePorts(value: number) {
    this._totalRoutePorts = value;
  }
  public resetTotalRoutePorts() {
    this._totalRoutePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRoutePortsInput() {
    return this._totalRoutePorts;
  }

  // total_routes - computed: false, optional: false, required: true
  private _totalRoutes?: number; 
  public get totalRoutes() {
    return this.getNumberAttribute('total_routes');
  }
  public set totalRoutes(value: number) {
    this._totalRoutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRoutesInput() {
    return this._totalRoutes;
  }

  // total_service_keys - computed: false, optional: true, required: false
  private _totalServiceKeys?: number; 
  public get totalServiceKeys() {
    return this.getNumberAttribute('total_service_keys');
  }
  public set totalServiceKeys(value: number) {
    this._totalServiceKeys = value;
  }
  public resetTotalServiceKeys() {
    this._totalServiceKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServiceKeysInput() {
    return this._totalServiceKeys;
  }

  // total_services - computed: false, optional: false, required: true
  private _totalServices?: number; 
  public get totalServices() {
    return this.getNumberAttribute('total_services');
  }
  public set totalServices(value: number) {
    this._totalServices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServicesInput() {
    return this._totalServices;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_paid_service_plans: cdktf.booleanToTerraform(this._allowPaidServicePlans),
      id: cdktf.stringToTerraform(this._id),
      instance_memory: cdktf.numberToTerraform(this._instanceMemory),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      total_app_instances: cdktf.numberToTerraform(this._totalAppInstances),
      total_app_tasks: cdktf.numberToTerraform(this._totalAppTasks),
      total_memory: cdktf.numberToTerraform(this._totalMemory),
      total_route_ports: cdktf.numberToTerraform(this._totalRoutePorts),
      total_routes: cdktf.numberToTerraform(this._totalRoutes),
      total_service_keys: cdktf.numberToTerraform(this._totalServiceKeys),
      total_services: cdktf.numberToTerraform(this._totalServices),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_paid_service_plans: {
        value: cdktf.booleanToHclTerraform(this._allowPaidServicePlans),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_memory: {
        value: cdktf.numberToHclTerraform(this._instanceMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_app_instances: {
        value: cdktf.numberToHclTerraform(this._totalAppInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_app_tasks: {
        value: cdktf.numberToHclTerraform(this._totalAppTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_memory: {
        value: cdktf.numberToHclTerraform(this._totalMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_route_ports: {
        value: cdktf.numberToHclTerraform(this._totalRoutePorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_routes: {
        value: cdktf.numberToHclTerraform(this._totalRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_service_keys: {
        value: cdktf.numberToHclTerraform(this._totalServiceKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_services: {
        value: cdktf.numberToHclTerraform(this._totalServices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
