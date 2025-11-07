// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EgressPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster_id identifies the cluster to which this egress private endpoint applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint#cluster_id EgressPrivateEndpoint#cluster_id}
  */
  readonly clusterId: string;
  /**
  * region represents the region that the endpoint will be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint#region EgressPrivateEndpoint#region}
  */
  readonly region: string;
  /**
  * target_service_identifier represents the identifier of the target service that the CockroachDB endpoint connects to. For example, this would be the Service Name for AWS, Service Attachment for GCP, or ARN for AWS MSK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint#target_service_identifier EgressPrivateEndpoint#target_service_identifier}
  */
  readonly targetServiceIdentifier: string;
  /**
  * target_service_type represents the type of target service. Allowed values are:
  *   * PRIVATE_SERVICE
  *   * MSK_SASL_SCRAM
  *   * MSK_SASL_IAM
  *   * MSK_TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint#target_service_type EgressPrivateEndpoint#target_service_type}
  */
  readonly targetServiceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint cockroach_egress_private_endpoint}
*/
export class EgressPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_egress_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EgressPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EgressPrivateEndpoint to import
  * @param importFromId The id of the existing EgressPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EgressPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_egress_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint cockroach_egress_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EgressPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EgressPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_egress_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0'
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
    this._region = config.region;
    this._targetServiceIdentifier = config.targetServiceIdentifier;
    this._targetServiceType = config.targetServiceType;
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

  // endpoint_address - computed: true, optional: false, required: false
  public get endpointAddress() {
    return this.getStringAttribute('endpoint_address');
  }

  // endpoint_connection_id - computed: true, optional: false, required: false
  public get endpointConnectionId() {
    return this.getStringAttribute('endpoint_connection_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_service_identifier - computed: false, optional: false, required: true
  private _targetServiceIdentifier?: string; 
  public get targetServiceIdentifier() {
    return this.getStringAttribute('target_service_identifier');
  }
  public set targetServiceIdentifier(value: string) {
    this._targetServiceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceIdentifierInput() {
    return this._targetServiceIdentifier;
  }

  // target_service_type - computed: false, optional: false, required: true
  private _targetServiceType?: string; 
  public get targetServiceType() {
    return this.getStringAttribute('target_service_type');
  }
  public set targetServiceType(value: string) {
    this._targetServiceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceTypeInput() {
    return this._targetServiceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      region: cdktf.stringToTerraform(this._region),
      target_service_identifier: cdktf.stringToTerraform(this._targetServiceIdentifier),
      target_service_type: cdktf.stringToTerraform(this._targetServiceType),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_identifier: {
        value: cdktf.stringToHclTerraform(this._targetServiceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_type: {
        value: cdktf.stringToHclTerraform(this._targetServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
