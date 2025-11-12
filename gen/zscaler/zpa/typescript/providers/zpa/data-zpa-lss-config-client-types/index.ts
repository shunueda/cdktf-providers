// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/lss_config_client_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaLssConfigClientTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/lss_config_client_types#id DataZpaLssConfigClientTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/lss_config_client_types zpa_lss_config_client_types}
*/
export class DataZpaLssConfigClientTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_lss_config_client_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaLssConfigClientTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaLssConfigClientTypes to import
  * @param importFromId The id of the existing DataZpaLssConfigClientTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/lss_config_client_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaLssConfigClientTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_lss_config_client_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/lss_config_client_types zpa_lss_config_client_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaLssConfigClientTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaLssConfigClientTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_lss_config_client_types',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // zpn_client_type_edge_connector - computed: true, optional: false, required: false
  public get zpnClientTypeEdgeConnector() {
    return this.getStringAttribute('zpn_client_type_edge_connector');
  }

  // zpn_client_type_exporter - computed: true, optional: false, required: false
  public get zpnClientTypeExporter() {
    return this.getStringAttribute('zpn_client_type_exporter');
  }

  // zpn_client_type_ip_anchoring - computed: true, optional: false, required: false
  public get zpnClientTypeIpAnchoring() {
    return this.getStringAttribute('zpn_client_type_ip_anchoring');
  }

  // zpn_client_type_machine_tunnel - computed: true, optional: false, required: false
  public get zpnClientTypeMachineTunnel() {
    return this.getStringAttribute('zpn_client_type_machine_tunnel');
  }

  // zpn_client_type_slogger - computed: true, optional: false, required: false
  public get zpnClientTypeSlogger() {
    return this.getStringAttribute('zpn_client_type_slogger');
  }

  // zpn_client_type_zapp - computed: true, optional: false, required: false
  public get zpnClientTypeZapp() {
    return this.getStringAttribute('zpn_client_type_zapp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
