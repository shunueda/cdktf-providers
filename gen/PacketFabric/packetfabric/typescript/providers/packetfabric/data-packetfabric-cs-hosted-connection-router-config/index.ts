// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_hosted_connection_router_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricCsHostedConnectionRouterConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique PF circuit ID for this connection
  * 		Example: PF-AP-LAX1-1002
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_hosted_connection_router_config#cloud_circuit_id DataPacketfabricCsHostedConnectionRouterConfig#cloud_circuit_id}
  */
  readonly cloudCircuitId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_hosted_connection_router_config#id DataPacketfabricCsHostedConnectionRouterConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Router Type Identifier. CiscoSystemsInc-3700SeriesRouters-IOS124 and JuniperNetworksInc-MMXSeriesRouters-JunOS95 for Google. 
  * 
  * 	Enum: ["CiscoSystemsInc-2900SeriesRouters-IOS124", "CiscoSystemsInc-3700SeriesRouters-IOS124", "CiscoSystemsInc-7200SeriesRouters-IOS124", "CiscoSystemsInc-Nexus7000SeriesSwitches-NXOS51", "CiscoSystemsInc-Nexus9KSeriesSwitches-NXOS93", "JuniperNetworksInc-MMXSeriesRouters-JunOS95", "JuniperNetworksInc-SRXSeriesRouters-JunOS95", "JuniperNetworksInc-TSeriesRouters-JunOS95", "PaloAltoNetworks-PA3000and5000series-PANOS803"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_hosted_connection_router_config#router_type DataPacketfabricCsHostedConnectionRouterConfig#router_type}
  */
  readonly routerType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_hosted_connection_router_config packetfabric_cs_hosted_connection_router_config}
*/
export class DataPacketfabricCsHostedConnectionRouterConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cs_hosted_connection_router_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricCsHostedConnectionRouterConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricCsHostedConnectionRouterConfig to import
  * @param importFromId The id of the existing DataPacketfabricCsHostedConnectionRouterConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_hosted_connection_router_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricCsHostedConnectionRouterConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cs_hosted_connection_router_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_hosted_connection_router_config packetfabric_cs_hosted_connection_router_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricCsHostedConnectionRouterConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricCsHostedConnectionRouterConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cs_hosted_connection_router_config',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudCircuitId = config.cloudCircuitId;
    this._id = config.id;
    this._routerType = config.routerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_circuit_id - computed: false, optional: false, required: true
  private _cloudCircuitId?: string; 
  public get cloudCircuitId() {
    return this.getStringAttribute('cloud_circuit_id');
  }
  public set cloudCircuitId(value: string) {
    this._cloudCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCircuitIdInput() {
    return this._cloudCircuitId;
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

  // router_config - computed: true, optional: false, required: false
  public get routerConfig() {
    return this.getStringAttribute('router_config');
  }

  // router_type - computed: false, optional: false, required: true
  private _routerType?: string; 
  public get routerType() {
    return this.getStringAttribute('router_type');
  }
  public set routerType(value: string) {
    this._routerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTypeInput() {
    return this._routerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_circuit_id: cdktf.stringToTerraform(this._cloudCircuitId),
      id: cdktf.stringToTerraform(this._id),
      router_type: cdktf.stringToTerraform(this._routerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_circuit_id: {
        value: cdktf.stringToHclTerraform(this._cloudCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_type: {
        value: cdktf.stringToHclTerraform(this._routerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
