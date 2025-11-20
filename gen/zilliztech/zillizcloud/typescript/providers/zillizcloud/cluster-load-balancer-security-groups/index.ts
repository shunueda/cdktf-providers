// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/cluster_load_balancer_security_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterLoadBalancerSecurityGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster to associate security groups with.
  * 
  * You can obtain this value from the output of the `zillizcloud_cluster` resource, for example:
  * `zillizcloud_cluster.example.id`
  * 
  * **Example:**
  * `in01-1234567890abcdef`
  * 
  * > **Note:** Changing this value will force recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/cluster_load_balancer_security_groups#cluster_id ClusterLoadBalancerSecurityGroups#cluster_id}
  */
  readonly clusterId: string;
  /**
  * A set of security group IDs to associate with the load balancer of the cluster.
  * 
  * **Example:**
  * `["sg-1234567890abcdef0"]`
  * 
  * > **Note:** The security groups must exist in the same VPC as the cluster and be accessible to the Zilliz Cloud service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/cluster_load_balancer_security_groups#security_group_ids ClusterLoadBalancerSecurityGroups#security_group_ids}
  */
  readonly securityGroupIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/cluster_load_balancer_security_groups zillizcloud_cluster_load_balancer_security_groups}
*/
export class ClusterLoadBalancerSecurityGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_cluster_load_balancer_security_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterLoadBalancerSecurityGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterLoadBalancerSecurityGroups to import
  * @param importFromId The id of the existing ClusterLoadBalancerSecurityGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/cluster_load_balancer_security_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterLoadBalancerSecurityGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_cluster_load_balancer_security_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/cluster_load_balancer_security_groups zillizcloud_cluster_load_balancer_security_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterLoadBalancerSecurityGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterLoadBalancerSecurityGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_cluster_load_balancer_security_groups',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.24',
        providerVersionConstraint: '0.6.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._securityGroupIds = config.securityGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
