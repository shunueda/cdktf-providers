// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackExpressconnectRouterinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#description ApsarastackExpressconnectRouterinterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#health_check_source_ip ApsarastackExpressconnectRouterinterface#health_check_source_ip}
  */
  readonly healthCheckSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#health_check_target_ip ApsarastackExpressconnectRouterinterface#health_check_target_ip}
  */
  readonly healthCheckTargetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#id ApsarastackExpressconnectRouterinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#name ApsarastackExpressconnectRouterinterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#opposite_access_point_id ApsarastackExpressconnectRouterinterface#opposite_access_point_id}
  */
  readonly oppositeAccessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#opposite_interface_id ApsarastackExpressconnectRouterinterface#opposite_interface_id}
  */
  readonly oppositeInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#opposite_interface_owner_id ApsarastackExpressconnectRouterinterface#opposite_interface_owner_id}
  */
  readonly oppositeInterfaceOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#opposite_region ApsarastackExpressconnectRouterinterface#opposite_region}
  */
  readonly oppositeRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#opposite_router_id ApsarastackExpressconnectRouterinterface#opposite_router_id}
  */
  readonly oppositeRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#opposite_router_type ApsarastackExpressconnectRouterinterface#opposite_router_type}
  */
  readonly oppositeRouterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#role ApsarastackExpressconnectRouterinterface#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#router_id ApsarastackExpressconnectRouterinterface#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#router_type ApsarastackExpressconnectRouterinterface#router_type}
  */
  readonly routerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#specification ApsarastackExpressconnectRouterinterface#specification}
  */
  readonly specification?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface apsarastack_expressconnect_routerinterface}
*/
export class ApsarastackExpressconnectRouterinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_expressconnect_routerinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackExpressconnectRouterinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackExpressconnectRouterinterface to import
  * @param importFromId The id of the existing ApsarastackExpressconnectRouterinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackExpressconnectRouterinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_expressconnect_routerinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_routerinterface apsarastack_expressconnect_routerinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackExpressconnectRouterinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackExpressconnectRouterinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_expressconnect_routerinterface',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._name = config.name;
    this._oppositeAccessPointId = config.oppositeAccessPointId;
    this._oppositeInterfaceId = config.oppositeInterfaceId;
    this._oppositeInterfaceOwnerId = config.oppositeInterfaceOwnerId;
    this._oppositeRegion = config.oppositeRegion;
    this._oppositeRouterId = config.oppositeRouterId;
    this._oppositeRouterType = config.oppositeRouterType;
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

  // opposite_interface_id - computed: true, optional: true, required: false
  private _oppositeInterfaceId?: string; 
  public get oppositeInterfaceId() {
    return this.getStringAttribute('opposite_interface_id');
  }
  public set oppositeInterfaceId(value: string) {
    this._oppositeInterfaceId = value;
  }
  public resetOppositeInterfaceId() {
    this._oppositeInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceIdInput() {
    return this._oppositeInterfaceId;
  }

  // opposite_interface_owner_id - computed: true, optional: true, required: false
  private _oppositeInterfaceOwnerId?: string; 
  public get oppositeInterfaceOwnerId() {
    return this.getStringAttribute('opposite_interface_owner_id');
  }
  public set oppositeInterfaceOwnerId(value: string) {
    this._oppositeInterfaceOwnerId = value;
  }
  public resetOppositeInterfaceOwnerId() {
    this._oppositeInterfaceOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceOwnerIdInput() {
    return this._oppositeInterfaceOwnerId;
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

  // opposite_router_id - computed: true, optional: true, required: false
  private _oppositeRouterId?: string; 
  public get oppositeRouterId() {
    return this.getStringAttribute('opposite_router_id');
  }
  public set oppositeRouterId(value: string) {
    this._oppositeRouterId = value;
  }
  public resetOppositeRouterId() {
    this._oppositeRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRouterIdInput() {
    return this._oppositeRouterId;
  }

  // opposite_router_type - computed: true, optional: true, required: false
  private _oppositeRouterType?: string; 
  public get oppositeRouterType() {
    return this.getStringAttribute('opposite_router_type');
  }
  public set oppositeRouterType(value: string) {
    this._oppositeRouterType = value;
  }
  public resetOppositeRouterType() {
    this._oppositeRouterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRouterTypeInput() {
    return this._oppositeRouterType;
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
      name: cdktf.stringToTerraform(this._name),
      opposite_access_point_id: cdktf.stringToTerraform(this._oppositeAccessPointId),
      opposite_interface_id: cdktf.stringToTerraform(this._oppositeInterfaceId),
      opposite_interface_owner_id: cdktf.stringToTerraform(this._oppositeInterfaceOwnerId),
      opposite_region: cdktf.stringToTerraform(this._oppositeRegion),
      opposite_router_id: cdktf.stringToTerraform(this._oppositeRouterId),
      opposite_router_type: cdktf.stringToTerraform(this._oppositeRouterType),
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
      opposite_interface_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_interface_owner_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceOwnerId),
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
      opposite_router_id: {
        value: cdktf.stringToHclTerraform(this._oppositeRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_router_type: {
        value: cdktf.stringToHclTerraform(this._oppositeRouterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
