// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasLogsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed networks for ARCHIVE flow type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster#archive_allowed_networks DbaasLogsCluster#archive_allowed_networks}
  */
  readonly archiveAllowedNetworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster#cluster_id DbaasLogsCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Allowed networks for DIRECT_INPUT flow type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster#direct_input_allowed_networks DbaasLogsCluster#direct_input_allowed_networks}
  */
  readonly directInputAllowedNetworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster#id DbaasLogsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed networks for QUERY flow type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster#query_allowed_networks DbaasLogsCluster#query_allowed_networks}
  */
  readonly queryAllowedNetworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster#service_name DbaasLogsCluster#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster ovh_dbaas_logs_cluster}
*/
export class DbaasLogsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dbaas_logs_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasLogsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasLogsCluster to import
  * @param importFromId The id of the existing DbaasLogsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasLogsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dbaas_logs_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_cluster ovh_dbaas_logs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasLogsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasLogsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dbaas_logs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveAllowedNetworks = config.archiveAllowedNetworks;
    this._clusterId = config.clusterId;
    this._directInputAllowedNetworks = config.directInputAllowedNetworks;
    this._id = config.id;
    this._queryAllowedNetworks = config.queryAllowedNetworks;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_allowed_networks - computed: false, optional: true, required: false
  private _archiveAllowedNetworks?: string[]; 
  public get archiveAllowedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_allowed_networks'));
  }
  public set archiveAllowedNetworks(value: string[]) {
    this._archiveAllowedNetworks = value;
  }
  public resetArchiveAllowedNetworks() {
    this._archiveAllowedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveAllowedNetworksInput() {
    return this._archiveAllowedNetworks;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // dedicated_input_pem - computed: true, optional: false, required: false
  public get dedicatedInputPem() {
    return this.getStringAttribute('dedicated_input_pem');
  }

  // direct_input_allowed_networks - computed: false, optional: true, required: false
  private _directInputAllowedNetworks?: string[]; 
  public get directInputAllowedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('direct_input_allowed_networks'));
  }
  public set directInputAllowedNetworks(value: string[]) {
    this._directInputAllowedNetworks = value;
  }
  public resetDirectInputAllowedNetworks() {
    this._directInputAllowedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInputAllowedNetworksInput() {
    return this._directInputAllowedNetworks;
  }

  // direct_input_pem - computed: true, optional: false, required: false
  public get directInputPem() {
    return this.getStringAttribute('direct_input_pem');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // initial_archive_allowed_networks - computed: true, optional: false, required: false
  public get initialArchiveAllowedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('initial_archive_allowed_networks'));
  }

  // initial_direct_input_allowed_networks - computed: true, optional: false, required: false
  public get initialDirectInputAllowedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('initial_direct_input_allowed_networks'));
  }

  // initial_query_allowed_networks - computed: true, optional: false, required: false
  public get initialQueryAllowedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('initial_query_allowed_networks'));
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_unlocked - computed: true, optional: false, required: false
  public get isUnlocked() {
    return this.getBooleanAttribute('is_unlocked');
  }

  // query_allowed_networks - computed: false, optional: true, required: false
  private _queryAllowedNetworks?: string[]; 
  public get queryAllowedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('query_allowed_networks'));
  }
  public set queryAllowedNetworks(value: string[]) {
    this._queryAllowedNetworks = value;
  }
  public resetQueryAllowedNetworks() {
    this._queryAllowedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAllowedNetworksInput() {
    return this._queryAllowedNetworks;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_allowed_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._archiveAllowedNetworks),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      direct_input_allowed_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._directInputAllowedNetworks),
      id: cdktf.stringToTerraform(this._id),
      query_allowed_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._queryAllowedNetworks),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_allowed_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._archiveAllowedNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_input_allowed_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._directInputAllowedNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_allowed_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._queryAllowedNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
