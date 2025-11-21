// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#description RouterInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#health_check_source_ip RouterInterface#health_check_source_ip}
  */
  readonly healthCheckSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#health_check_target_ip RouterInterface#health_check_target_ip}
  */
  readonly healthCheckTargetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#id RouterInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#instance_charge_type RouterInterface#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#name RouterInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#opposite_access_point_id RouterInterface#opposite_access_point_id}
  */
  readonly oppositeAccessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#opposite_region RouterInterface#opposite_region}
  */
  readonly oppositeRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#period RouterInterface#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#role RouterInterface#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#router_id RouterInterface#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#router_type RouterInterface#router_type}
  */
  readonly routerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#specification RouterInterface#specification}
  */
  readonly specification?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface alicloud_router_interface}
*/
export class RouterInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_router_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterInterface to import
  * @param importFromId The id of the existing RouterInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_router_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/router_interface alicloud_router_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RouterInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_router_interface',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._healthCheckSourceIp = config.healthCheckSourceIp;
    this._healthCheckTargetIp = config.healthCheckTargetIp;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._name = config.name;
    this._oppositeAccessPointId = config.oppositeAccessPointId;
    this._oppositeRegion = config.oppositeRegion;
    this._period = config.period;
    this._role = config.role;
    this._routerId = config.routerId;
    this._routerType = config.routerType;
    this._specification = config.specification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // health_check_source_ip - computed: false, optional: true, required: false
  private _healthCheckSourceIp?: string; 
  public get healthCheckSourceIp() {
    return this.getStringAttribute('health_check_source_ip');
  }
  public set healthCheckSourceIp(value: string) {
    this._healthCheckSourceIp = value;
  }
  public resetHealthCheckSourceIp() {
    this._healthCheckSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSourceIpInput() {
    return this._healthCheckSourceIp;
  }

  // health_check_target_ip - computed: false, optional: true, required: false
  private _healthCheckTargetIp?: string; 
  public get healthCheckTargetIp() {
    return this.getStringAttribute('health_check_target_ip');
  }
  public set healthCheckTargetIp(value: string) {
    this._healthCheckTargetIp = value;
  }
  public resetHealthCheckTargetIp() {
    this._healthCheckTargetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTargetIpInput() {
    return this._healthCheckTargetIp;
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // opposite_access_point_id - computed: false, optional: true, required: false
  private _oppositeAccessPointId?: string; 
  public get oppositeAccessPointId() {
    return this.getStringAttribute('opposite_access_point_id');
  }
  public set oppositeAccessPointId(value: string) {
    this._oppositeAccessPointId = value;
  }
  public resetOppositeAccessPointId() {
    this._oppositeAccessPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeAccessPointIdInput() {
    return this._oppositeAccessPointId;
  }

  // opposite_interface_id - computed: true, optional: false, required: false
  public get oppositeInterfaceId() {
    return this.getStringAttribute('opposite_interface_id');
  }

  // opposite_interface_owner_id - computed: true, optional: false, required: false
  public get oppositeInterfaceOwnerId() {
    return this.getStringAttribute('opposite_interface_owner_id');
  }

  // opposite_region - computed: false, optional: false, required: true
  private _oppositeRegion?: string; 
  public get oppositeRegion() {
    return this.getStringAttribute('opposite_region');
  }
  public set oppositeRegion(value: string) {
    this._oppositeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRegionInput() {
    return this._oppositeRegion;
  }

  // opposite_router_id - computed: true, optional: false, required: false
  public get oppositeRouterId() {
    return this.getStringAttribute('opposite_router_id');
  }

  // opposite_router_type - computed: true, optional: false, required: false
  public get oppositeRouterType() {
    return this.getStringAttribute('opposite_router_type');
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // router_type - computed: false, optional: false, required: true
  private _routerType?: string; 
  public get routerType() {
    return this.getStringAttribute('router_type');
  }
  public set routerType(value: string) {
    this._routerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTypeInput() {
    return this._routerType;
  }

  // specification - computed: false, optional: true, required: false
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  public resetSpecification() {
    this._specification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      health_check_source_ip: cdktf.stringToTerraform(this._healthCheckSourceIp),
      health_check_target_ip: cdktf.stringToTerraform(this._healthCheckTargetIp),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      name: cdktf.stringToTerraform(this._name),
      opposite_access_point_id: cdktf.stringToTerraform(this._oppositeAccessPointId),
      opposite_region: cdktf.stringToTerraform(this._oppositeRegion),
      period: cdktf.numberToTerraform(this._period),
      role: cdktf.stringToTerraform(this._role),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_type: cdktf.stringToTerraform(this._routerType),
      specification: cdktf.stringToTerraform(this._specification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_source_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_target_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckTargetIp),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
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
      opposite_access_point_id: {
        value: cdktf.stringToHclTerraform(this._oppositeAccessPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_region: {
        value: cdktf.stringToHclTerraform(this._oppositeRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_type: {
        value: cdktf.stringToHclTerraform(this._routerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specification: {
        value: cdktf.stringToHclTerraform(this._specification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
