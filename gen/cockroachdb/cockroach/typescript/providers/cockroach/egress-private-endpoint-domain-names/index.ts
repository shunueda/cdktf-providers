// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint_domain_names
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EgressPrivateEndpointDomainNamesConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster_id identifies the cluster to which this egress private endpoint applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint_domain_names#cluster_id EgressPrivateEndpointDomainNames#cluster_id}
  */
  readonly clusterId: string;
  /**
  * domain_names contains a list of domain names to associate with the egress private endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint_domain_names#domain_names EgressPrivateEndpointDomainNames#domain_names}
  */
  readonly domainNames: string[];
  /**
  * endpoint_id is the `id` value of the egress private endpoint in CockroachDB Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint_domain_names#endpoint_id EgressPrivateEndpointDomainNames#endpoint_id}
  */
  readonly endpointId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint_domain_names cockroach_egress_private_endpoint_domain_names}
*/
export class EgressPrivateEndpointDomainNames extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_egress_private_endpoint_domain_names";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EgressPrivateEndpointDomainNames resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EgressPrivateEndpointDomainNames to import
  * @param importFromId The id of the existing EgressPrivateEndpointDomainNames that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint_domain_names#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EgressPrivateEndpointDomainNames to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_egress_private_endpoint_domain_names", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/egress_private_endpoint_domain_names cockroach_egress_private_endpoint_domain_names} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EgressPrivateEndpointDomainNamesConfig
  */
  public constructor(scope: Construct, id: string, config: EgressPrivateEndpointDomainNamesConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_egress_private_endpoint_domain_names',
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
    this._domainNames = config.domainNames;
    this._endpointId = config.endpointId;
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

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
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
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoint_id: {
        value: cdktf.stringToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
