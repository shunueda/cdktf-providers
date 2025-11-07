// https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/cluster_maintainer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterMaintainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/cluster_maintainer#cluster_id ClusterMaintainer#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The UUID of the team to add as a maintainer. This is mutually exclusive with user_id.
  * Only one of user_id or team_id can be specified.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/cluster_maintainer#team_id ClusterMaintainer#team_id}
  */
  readonly teamId?: string;
  /**
  * The UUID of the user to add as a maintainer. This is mutually exclusive with team_id.
  * Only one of user_id or team_id can be specified.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/cluster_maintainer#user_id ClusterMaintainer#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/cluster_maintainer buildkite_cluster_maintainer}
*/
export class ClusterMaintainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_cluster_maintainer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterMaintainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterMaintainer to import
  * @param importFromId The id of the existing ClusterMaintainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/cluster_maintainer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterMaintainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_cluster_maintainer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/cluster_maintainer buildkite_cluster_maintainer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterMaintainerConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterMaintainerConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_cluster_maintainer',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.26.0'
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
    this._teamId = config.teamId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actor_email - computed: true, optional: false, required: false
  public get actorEmail() {
    return this.getStringAttribute('actor_email');
  }

  // actor_id - computed: true, optional: false, required: false
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }

  // actor_name - computed: true, optional: false, required: false
  public get actorName() {
    return this.getStringAttribute('actor_name');
  }

  // actor_slug - computed: true, optional: false, required: false
  public get actorSlug() {
    return this.getStringAttribute('actor_slug');
  }

  // actor_type - computed: true, optional: false, required: false
  public get actorType() {
    return this.getStringAttribute('actor_type');
  }

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

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      team_id: cdktf.stringToTerraform(this._teamId),
      user_id: cdktf.stringToTerraform(this._userId),
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
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
