// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_maintainer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterMaintainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_maintainer#cluster_uuid ClusterMaintainer#cluster_uuid}
  */
  readonly clusterUuid: string;
  /**
  * The UUID of the team to add as a maintainer. This is mutually exclusive with user_uuid.
  * Only one of user_uuid or team_uuid can be specified.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_maintainer#team_uuid ClusterMaintainer#team_uuid}
  */
  readonly teamUuid?: string;
  /**
  * The UUID of the user to add as a maintainer. This is mutually exclusive with team_uuid.
  * Only one of user_uuid or team_uuid can be specified.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_maintainer#user_uuid ClusterMaintainer#user_uuid}
  */
  readonly userUuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_maintainer buildkite_cluster_maintainer}
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
  * @param importFromId The id of the existing ClusterMaintainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_maintainer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterMaintainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_cluster_maintainer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_maintainer buildkite_cluster_maintainer} Resource
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
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterUuid = config.clusterUuid;
    this._teamUuid = config.teamUuid;
    this._userUuid = config.userUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actor_email - computed: true, optional: false, required: false
  public get actorEmail() {
    return this.getStringAttribute('actor_email');
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

  // actor_uuid - computed: true, optional: false, required: false
  public get actorUuid() {
    return this.getStringAttribute('actor_uuid');
  }

  // cluster_uuid - computed: false, optional: false, required: true
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // team_uuid - computed: false, optional: true, required: false
  private _teamUuid?: string; 
  public get teamUuid() {
    return this.getStringAttribute('team_uuid');
  }
  public set teamUuid(value: string) {
    this._teamUuid = value;
  }
  public resetTeamUuid() {
    this._teamUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamUuidInput() {
    return this._teamUuid;
  }

  // user_uuid - computed: false, optional: true, required: false
  private _userUuid?: string; 
  public get userUuid() {
    return this.getStringAttribute('user_uuid');
  }
  public set userUuid(value: string) {
    this._userUuid = value;
  }
  public resetUserUuid() {
    this._userUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userUuidInput() {
    return this._userUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      team_uuid: cdktf.stringToTerraform(this._teamUuid),
      user_uuid: cdktf.stringToTerraform(this._userUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_uuid: {
        value: cdktf.stringToHclTerraform(this._teamUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_uuid: {
        value: cdktf.stringToHclTerraform(this._userUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
