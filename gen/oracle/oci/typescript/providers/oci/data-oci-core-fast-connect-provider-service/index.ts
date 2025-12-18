// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_fast_connect_provider_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreFastConnectProviderServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_fast_connect_provider_service#id DataOciCoreFastConnectProviderService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_fast_connect_provider_service#provider_service_id DataOciCoreFastConnectProviderService#provider_service_id}
  */
  readonly providerServiceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_fast_connect_provider_service oci_core_fast_connect_provider_service}
*/
export class DataOciCoreFastConnectProviderService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_fast_connect_provider_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreFastConnectProviderService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreFastConnectProviderService to import
  * @param importFromId The id of the existing DataOciCoreFastConnectProviderService that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_fast_connect_provider_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreFastConnectProviderService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_fast_connect_provider_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_fast_connect_provider_service oci_core_fast_connect_provider_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreFastConnectProviderServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_fast_connect_provider_service',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._providerServiceId = config.providerServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwith_shape_management - computed: true, optional: false, required: false
  public get bandwithShapeManagement() {
    return this.getStringAttribute('bandwith_shape_management');
  }

  // customer_asn_management - computed: true, optional: false, required: false
  public get customerAsnManagement() {
    return this.getStringAttribute('customer_asn_management');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // private_peering_bgp_management - computed: true, optional: false, required: false
  public get privatePeeringBgpManagement() {
    return this.getStringAttribute('private_peering_bgp_management');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // provider_service_id - computed: false, optional: false, required: true
  private _providerServiceId?: string; 
  public get providerServiceId() {
    return this.getStringAttribute('provider_service_id');
  }
  public set providerServiceId(value: string) {
    this._providerServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerServiceIdInput() {
    return this._providerServiceId;
  }

  // provider_service_key_management - computed: true, optional: false, required: false
  public get providerServiceKeyManagement() {
    return this.getStringAttribute('provider_service_key_management');
  }

  // provider_service_name - computed: true, optional: false, required: false
  public get providerServiceName() {
    return this.getStringAttribute('provider_service_name');
  }

  // public_peering_bgp_management - computed: true, optional: false, required: false
  public get publicPeeringBgpManagement() {
    return this.getStringAttribute('public_peering_bgp_management');
  }

  // required_total_cross_connects - computed: true, optional: false, required: false
  public get requiredTotalCrossConnects() {
    return this.getNumberAttribute('required_total_cross_connects');
  }

  // supported_virtual_circuit_types - computed: true, optional: false, required: false
  public get supportedVirtualCircuitTypes() {
    return this.getListAttribute('supported_virtual_circuit_types');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      provider_service_id: cdktf.stringToTerraform(this._providerServiceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_service_id: {
        value: cdktf.stringToHclTerraform(this._providerServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
