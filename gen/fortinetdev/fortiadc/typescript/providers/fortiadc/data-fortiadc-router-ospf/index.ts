// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcRouterOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_ospf#id DataFortiadcRouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_ospf fortiadc_router_ospf}
*/
export class DataFortiadcRouterOspf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_router_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcRouterOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcRouterOspf to import
  * @param importFromId The id of the existing DataFortiadcRouterOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcRouterOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_router_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_ospf fortiadc_router_ospf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcRouterOspfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcRouterOspfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_router_ospf',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
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

  // default_information_metric - computed: true, optional: false, required: false
  public get defaultInformationMetric() {
    return this.getStringAttribute('default_information_metric');
  }

  // default_information_metric_type - computed: true, optional: false, required: false
  public get defaultInformationMetricType() {
    return this.getStringAttribute('default_information_metric_type');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }

  // default_metric - computed: true, optional: false, required: false
  public get defaultMetric() {
    return this.getStringAttribute('default_metric');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getStringAttribute('distance');
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

  // redistribute_connected - computed: true, optional: false, required: false
  public get redistributeConnected() {
    return this.getStringAttribute('redistribute_connected');
  }

  // redistribute_connected_metric - computed: true, optional: false, required: false
  public get redistributeConnectedMetric() {
    return this.getStringAttribute('redistribute_connected_metric');
  }

  // redistribute_connected_metric_type - computed: true, optional: false, required: false
  public get redistributeConnectedMetricType() {
    return this.getStringAttribute('redistribute_connected_metric_type');
  }

  // redistribute_static - computed: true, optional: false, required: false
  public get redistributeStatic() {
    return this.getStringAttribute('redistribute_static');
  }

  // redistribute_static_metric - computed: true, optional: false, required: false
  public get redistributeStaticMetric() {
    return this.getStringAttribute('redistribute_static_metric');
  }

  // redistribute_static_metric_type - computed: true, optional: false, required: false
  public get redistributeStaticMetricType() {
    return this.getStringAttribute('redistribute_static_metric_type');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
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
