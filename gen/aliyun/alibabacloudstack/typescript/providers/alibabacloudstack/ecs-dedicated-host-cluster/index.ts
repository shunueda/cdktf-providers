// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsDedicatedHostClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster#dedicated_host_cluster_name EcsDedicatedHostCluster#dedicated_host_cluster_name}
  */
  readonly dedicatedHostClusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster#description EcsDedicatedHostCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster#id EcsDedicatedHostCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster#zone_id EcsDedicatedHostCluster#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster alibabacloudstack_ecs_dedicated_host_cluster}
*/
export class EcsDedicatedHostCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ecs_dedicated_host_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsDedicatedHostCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsDedicatedHostCluster to import
  * @param importFromId The id of the existing EcsDedicatedHostCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsDedicatedHostCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ecs_dedicated_host_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_dedicated_host_cluster alibabacloudstack_ecs_dedicated_host_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsDedicatedHostClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcsDedicatedHostClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ecs_dedicated_host_cluster',
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
    this._dedicatedHostClusterName = config.dedicatedHostClusterName;
    this._description = config.description;
    this._id = config.id;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_host_cluster_id - computed: true, optional: false, required: false
  public get dedicatedHostClusterId() {
    return this.getStringAttribute('dedicated_host_cluster_id');
  }

  // dedicated_host_cluster_name - computed: false, optional: true, required: false
  private _dedicatedHostClusterName?: string; 
  public get dedicatedHostClusterName() {
    return this.getStringAttribute('dedicated_host_cluster_name');
  }
  public set dedicatedHostClusterName(value: string) {
    this._dedicatedHostClusterName = value;
  }
  public resetDedicatedHostClusterName() {
    this._dedicatedHostClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostClusterNameInput() {
    return this._dedicatedHostClusterName;
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

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_host_cluster_name: cdktf.stringToTerraform(this._dedicatedHostClusterName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_host_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
