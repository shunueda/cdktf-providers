// https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/cluster_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/cluster_group_member#cluster_group ClusterGroupMember#cluster_group}
  */
  readonly clusterGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/cluster_group_member#member ClusterGroupMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/cluster_group_member#remote ClusterGroupMember#remote}
  */
  readonly remote?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/cluster_group_member incus_cluster_group_member}
*/
export class ClusterGroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incus_cluster_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterGroupMember to import
  * @param importFromId The id of the existing ClusterGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/cluster_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incus_cluster_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/cluster_group_member incus_cluster_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'incus_cluster_group_member',
      terraformGeneratorMetadata: {
        providerName: 'incus',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterGroup = config.clusterGroup;
    this._member = config.member;
    this._remote = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_group - computed: false, optional: false, required: true
  private _clusterGroup?: string; 
  public get clusterGroup() {
    return this.getStringAttribute('cluster_group');
  }
  public set clusterGroup(value: string) {
    this._clusterGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup;
  }

  // member - computed: false, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_group: cdktf.stringToTerraform(this._clusterGroup),
      member: cdktf.stringToTerraform(this._member),
      remote: cdktf.stringToTerraform(this._remote),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_group: {
        value: cdktf.stringToHclTerraform(this._clusterGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
