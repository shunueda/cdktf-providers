// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerDmrClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster#dmr_cluster_name DataSolacebrokerDmrCluster#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster solacebroker_dmr_cluster}
*/
export class DataSolacebrokerDmrCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerDmrCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerDmrCluster to import
  * @param importFromId The id of the existing DataSolacebrokerDmrCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerDmrCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster solacebroker_dmr_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerDmrClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerDmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dmrClusterName = config.dmrClusterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_basic_enabled - computed: true, optional: false, required: false
  public get authenticationBasicEnabled() {
    return this.getBooleanAttribute('authentication_basic_enabled');
  }

  // authentication_basic_type - computed: true, optional: false, required: false
  public get authenticationBasicType() {
    return this.getStringAttribute('authentication_basic_type');
  }

  // authentication_client_cert_enabled - computed: true, optional: false, required: false
  public get authenticationClientCertEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_enabled');
  }

  // direct_only_enabled - computed: true, optional: false, required: false
  public get directOnlyEnabled() {
    return this.getBooleanAttribute('direct_only_enabled');
  }

  // dmr_cluster_name - computed: false, optional: false, required: true
  private _dmrClusterName?: string; 
  public get dmrClusterName() {
    return this.getStringAttribute('dmr_cluster_name');
  }
  public set dmrClusterName(value: string) {
    this._dmrClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dmrClusterNameInput() {
    return this._dmrClusterName;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // tls_server_cert_max_chain_depth - computed: true, optional: false, required: false
  public get tlsServerCertMaxChainDepth() {
    return this.getNumberAttribute('tls_server_cert_max_chain_depth');
  }

  // tls_server_cert_validate_date_enabled - computed: true, optional: false, required: false
  public get tlsServerCertValidateDateEnabled() {
    return this.getBooleanAttribute('tls_server_cert_validate_date_enabled');
  }

  // tls_server_cert_validate_name_enabled - computed: true, optional: false, required: false
  public get tlsServerCertValidateNameEnabled() {
    return this.getBooleanAttribute('tls_server_cert_validate_name_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
