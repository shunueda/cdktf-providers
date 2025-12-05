// https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/private_endpoint_trusted_owner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateEndpointTrustedOwnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the cluster the private endpoint trusted owner entry belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/private_endpoint_trusted_owner#cluster_id PrivateEndpointTrustedOwner#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Owner ID of the private endpoint connection in the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/private_endpoint_trusted_owner#external_owner_id PrivateEndpointTrustedOwner#external_owner_id}
  */
  readonly externalOwnerId: string;
  /**
  * Representation of the external_owner_id field. Allowed values are:
  *   * AWS_ACCOUNT_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/private_endpoint_trusted_owner#type PrivateEndpointTrustedOwner#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/private_endpoint_trusted_owner cockroach_private_endpoint_trusted_owner}
*/
export class PrivateEndpointTrustedOwner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_private_endpoint_trusted_owner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateEndpointTrustedOwner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateEndpointTrustedOwner to import
  * @param importFromId The id of the existing PrivateEndpointTrustedOwner that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/private_endpoint_trusted_owner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateEndpointTrustedOwner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_private_endpoint_trusted_owner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/private_endpoint_trusted_owner cockroach_private_endpoint_trusted_owner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateEndpointTrustedOwnerConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateEndpointTrustedOwnerConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_private_endpoint_trusted_owner',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
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
    this._externalOwnerId = config.externalOwnerId;
    this._type = config.type;
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

  // external_owner_id - computed: false, optional: false, required: true
  private _externalOwnerId?: string; 
  public get externalOwnerId() {
    return this.getStringAttribute('external_owner_id');
  }
  public set externalOwnerId(value: string) {
    this._externalOwnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOwnerIdInput() {
    return this._externalOwnerId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      external_owner_id: cdktf.stringToTerraform(this._externalOwnerId),
      type: cdktf.stringToTerraform(this._type),
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
      external_owner_id: {
        value: cdktf.stringToHclTerraform(this._externalOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
