// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_resolver_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDnsResolverEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_resolver_endpoint#resolver_endpoint_name DataOciDnsResolverEndpoint#resolver_endpoint_name}
  */
  readonly resolverEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_resolver_endpoint#resolver_id DataOciDnsResolverEndpoint#resolver_id}
  */
  readonly resolverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_resolver_endpoint#scope DataOciDnsResolverEndpoint#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_resolver_endpoint oci_dns_resolver_endpoint}
*/
export class DataOciDnsResolverEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dns_resolver_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDnsResolverEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDnsResolverEndpoint to import
  * @param importFromId The id of the existing DataOciDnsResolverEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_resolver_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDnsResolverEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dns_resolver_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_resolver_endpoint oci_dns_resolver_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDnsResolverEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDnsResolverEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_resolver_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._resolverEndpointName = config.resolverEndpointName;
    this._resolverId = config.resolverId;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // forwarding_address - computed: true, optional: false, required: false
  public get forwardingAddress() {
    return this.getStringAttribute('forwarding_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_forwarding - computed: true, optional: false, required: false
  public get isForwarding() {
    return this.getBooleanAttribute('is_forwarding');
  }

  // is_listening - computed: true, optional: false, required: false
  public get isListening() {
    return this.getBooleanAttribute('is_listening');
  }

  // listening_address - computed: true, optional: false, required: false
  public get listeningAddress() {
    return this.getStringAttribute('listening_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // resolver_endpoint_name - computed: false, optional: false, required: true
  private _resolverEndpointName?: string; 
  public get resolverEndpointName() {
    return this.getStringAttribute('resolver_endpoint_name');
  }
  public set resolverEndpointName(value: string) {
    this._resolverEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverEndpointNameInput() {
    return this._resolverEndpointName;
  }

  // resolver_id - computed: false, optional: false, required: true
  private _resolverId?: string; 
  public get resolverId() {
    return this.getStringAttribute('resolver_id');
  }
  public set resolverId(value: string) {
    this._resolverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverIdInput() {
    return this._resolverId;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // self - computed: true, optional: false, required: false
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resolver_endpoint_name: cdktf.stringToTerraform(this._resolverEndpointName),
      resolver_id: cdktf.stringToTerraform(this._resolverId),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resolver_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._resolverEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolver_id: {
        value: cdktf.stringToHclTerraform(this._resolverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
