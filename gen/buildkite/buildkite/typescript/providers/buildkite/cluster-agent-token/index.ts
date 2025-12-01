// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_agent_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterAgentTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of CIDR-notation IPv4 addresses from which agents can use this Cluster Agent Token.If not set, all IP addresses are allowed (the same as setting 0.0.0.0/0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_agent_token#allowed_ip_addresses ClusterAgentToken#allowed_ip_addresses}
  */
  readonly allowedIpAddresses?: string[];
  /**
  * The GraphQL ID of the Cluster that this Cluster Agent Token belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_agent_token#cluster_id ClusterAgentToken#cluster_id}
  */
  readonly clusterId: string;
  /**
  * A description about what this cluster agent token is used for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_agent_token#description ClusterAgentToken#description}
  */
  readonly description: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_agent_token buildkite_cluster_agent_token}
*/
export class ClusterAgentToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_cluster_agent_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterAgentToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterAgentToken to import
  * @param importFromId The id of the existing ClusterAgentToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_agent_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterAgentToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_cluster_agent_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/cluster_agent_token buildkite_cluster_agent_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterAgentTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterAgentTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_cluster_agent_token',
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
    this._allowedIpAddresses = config.allowedIpAddresses;
    this._clusterId = config.clusterId;
    this._description = config.description;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_addresses - computed: false, optional: true, required: false
  private _allowedIpAddresses?: string[]; 
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }
  public set allowedIpAddresses(value: string[]) {
    this._allowedIpAddresses = value;
  }
  public resetAllowedIpAddresses() {
    this._allowedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressesInput() {
    return this._allowedIpAddresses;
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

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIpAddresses),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
