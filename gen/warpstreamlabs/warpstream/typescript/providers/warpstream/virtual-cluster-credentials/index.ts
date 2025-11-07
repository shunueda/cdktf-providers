// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualClusterCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Agent Pool ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials#agent_pool VirtualClusterCredentials#agent_pool}
  */
  readonly agentPool: string;
  /**
  * Whether the user is cluster superuser. If `true`, the credentials will be created with superuser privileges which enables ACL management via the Kafka Admin APIs. If `false`, and cluster ACLs are enabled, and no `ALLOW` ACLs are set, then these credentials will not be able to access the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials#cluster_superuser VirtualClusterCredentials#cluster_superuser}
  */
  readonly clusterSuperuser?: boolean | cdktf.IResolvable;
  /**
  * Virtual Cluster Credentials Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials#name VirtualClusterCredentials#name}
  */
  readonly name: string;
  /**
  * Virtual Cluster ID. Deprecated in favor of `virtual_cluster_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials#virtual_cluster VirtualClusterCredentials#virtual_cluster}
  */
  readonly virtualCluster?: string;
  /**
  * Virtual Cluster ID. Required unless `virtual_cluster` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials#virtual_cluster_id VirtualClusterCredentials#virtual_cluster_id}
  */
  readonly virtualClusterId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials warpstream_virtual_cluster_credentials}
*/
export class VirtualClusterCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_virtual_cluster_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualClusterCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualClusterCredentials to import
  * @param importFromId The id of the existing VirtualClusterCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualClusterCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_virtual_cluster_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/virtual_cluster_credentials warpstream_virtual_cluster_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualClusterCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualClusterCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'warpstream_virtual_cluster_credentials',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPool = config.agentPool;
    this._clusterSuperuser = config.clusterSuperuser;
    this._name = config.name;
    this._virtualCluster = config.virtualCluster;
    this._virtualClusterId = config.virtualClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_pool - computed: false, optional: false, required: true
  private _agentPool?: string; 
  public get agentPool() {
    return this.getStringAttribute('agent_pool');
  }
  public set agentPool(value: string) {
    this._agentPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolInput() {
    return this._agentPool;
  }

  // cluster_superuser - computed: true, optional: true, required: false
  private _clusterSuperuser?: boolean | cdktf.IResolvable; 
  public get clusterSuperuser() {
    return this.getBooleanAttribute('cluster_superuser');
  }
  public set clusterSuperuser(value: boolean | cdktf.IResolvable) {
    this._clusterSuperuser = value;
  }
  public resetClusterSuperuser() {
    this._clusterSuperuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSuperuserInput() {
    return this._clusterSuperuser;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // virtual_cluster - computed: false, optional: true, required: false
  private _virtualCluster?: string; 
  public get virtualCluster() {
    return this.getStringAttribute('virtual_cluster');
  }
  public set virtualCluster(value: string) {
    this._virtualCluster = value;
  }
  public resetVirtualCluster() {
    this._virtualCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterInput() {
    return this._virtualCluster;
  }

  // virtual_cluster_id - computed: false, optional: true, required: false
  private _virtualClusterId?: string; 
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
  public set virtualClusterId(value: string) {
    this._virtualClusterId = value;
  }
  public resetVirtualClusterId() {
    this._virtualClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterIdInput() {
    return this._virtualClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_pool: cdktf.stringToTerraform(this._agentPool),
      cluster_superuser: cdktf.booleanToTerraform(this._clusterSuperuser),
      name: cdktf.stringToTerraform(this._name),
      virtual_cluster: cdktf.stringToTerraform(this._virtualCluster),
      virtual_cluster_id: cdktf.stringToTerraform(this._virtualClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_pool: {
        value: cdktf.stringToHclTerraform(this._agentPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_superuser: {
        value: cdktf.booleanToHclTerraform(this._clusterSuperuser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_cluster: {
        value: cdktf.stringToHclTerraform(this._virtualCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_cluster_id: {
        value: cdktf.stringToHclTerraform(this._virtualClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
