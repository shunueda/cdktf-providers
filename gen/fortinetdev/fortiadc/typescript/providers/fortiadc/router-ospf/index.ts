// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#default_information_metric RouterOspf#default_information_metric}
  */
  readonly defaultInformationMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#default_information_metric_type RouterOspf#default_information_metric_type}
  */
  readonly defaultInformationMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#default_information_originate RouterOspf#default_information_originate}
  */
  readonly defaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#default_metric RouterOspf#default_metric}
  */
  readonly defaultMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#distance RouterOspf#distance}
  */
  readonly distance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#redistribute_connected RouterOspf#redistribute_connected}
  */
  readonly redistributeConnected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#redistribute_connected_metric RouterOspf#redistribute_connected_metric}
  */
  readonly redistributeConnectedMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#redistribute_connected_metric_type RouterOspf#redistribute_connected_metric_type}
  */
  readonly redistributeConnectedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#redistribute_static RouterOspf#redistribute_static}
  */
  readonly redistributeStatic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#redistribute_static_metric RouterOspf#redistribute_static_metric}
  */
  readonly redistributeStaticMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#redistribute_static_metric_type RouterOspf#redistribute_static_metric_type}
  */
  readonly redistributeStaticMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#router_id RouterOspf#router_id}
  */
  readonly routerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf fortiadc_router_ospf}
*/
export class RouterOspf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_router_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspf to import
  * @param importFromId The id of the existing RouterOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_router_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf fortiadc_router_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterOspfConfig = {}) {
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
    this._defaultInformationMetric = config.defaultInformationMetric;
    this._defaultInformationMetricType = config.defaultInformationMetricType;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultMetric = config.defaultMetric;
    this._distance = config.distance;
    this._id = config.id;
    this._redistributeConnected = config.redistributeConnected;
    this._redistributeConnectedMetric = config.redistributeConnectedMetric;
    this._redistributeConnectedMetricType = config.redistributeConnectedMetricType;
    this._redistributeStatic = config.redistributeStatic;
    this._redistributeStaticMetric = config.redistributeStaticMetric;
    this._redistributeStaticMetricType = config.redistributeStaticMetricType;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_information_metric - computed: true, optional: true, required: false
  private _defaultInformationMetric?: string; 
  public get defaultInformationMetric() {
    return this.getStringAttribute('default_information_metric');
  }
  public set defaultInformationMetric(value: string) {
    this._defaultInformationMetric = value;
  }
  public resetDefaultInformationMetric() {
    this._defaultInformationMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetricInput() {
    return this._defaultInformationMetric;
  }

  // default_information_metric_type - computed: true, optional: true, required: false
  private _defaultInformationMetricType?: string; 
  public get defaultInformationMetricType() {
    return this.getStringAttribute('default_information_metric_type');
  }
  public set defaultInformationMetricType(value: string) {
    this._defaultInformationMetricType = value;
  }
  public resetDefaultInformationMetricType() {
    this._defaultInformationMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetricTypeInput() {
    return this._defaultInformationMetricType;
  }

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate?: string; 
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: string) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // default_metric - computed: true, optional: true, required: false
  private _defaultMetric?: string; 
  public get defaultMetric() {
    return this.getStringAttribute('default_metric');
  }
  public set defaultMetric(value: string) {
    this._defaultMetric = value;
  }
  public resetDefaultMetric() {
    this._defaultMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMetricInput() {
    return this._defaultMetric;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: string; 
  public get distance() {
    return this.getStringAttribute('distance');
  }
  public set distance(value: string) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
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

  // redistribute_connected - computed: true, optional: true, required: false
  private _redistributeConnected?: string; 
  public get redistributeConnected() {
    return this.getStringAttribute('redistribute_connected');
  }
  public set redistributeConnected(value: string) {
    this._redistributeConnected = value;
  }
  public resetRedistributeConnected() {
    this._redistributeConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedInput() {
    return this._redistributeConnected;
  }

  // redistribute_connected_metric - computed: true, optional: true, required: false
  private _redistributeConnectedMetric?: string; 
  public get redistributeConnectedMetric() {
    return this.getStringAttribute('redistribute_connected_metric');
  }
  public set redistributeConnectedMetric(value: string) {
    this._redistributeConnectedMetric = value;
  }
  public resetRedistributeConnectedMetric() {
    this._redistributeConnectedMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedMetricInput() {
    return this._redistributeConnectedMetric;
  }

  // redistribute_connected_metric_type - computed: true, optional: true, required: false
  private _redistributeConnectedMetricType?: string; 
  public get redistributeConnectedMetricType() {
    return this.getStringAttribute('redistribute_connected_metric_type');
  }
  public set redistributeConnectedMetricType(value: string) {
    this._redistributeConnectedMetricType = value;
  }
  public resetRedistributeConnectedMetricType() {
    this._redistributeConnectedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedMetricTypeInput() {
    return this._redistributeConnectedMetricType;
  }

  // redistribute_static - computed: true, optional: true, required: false
  private _redistributeStatic?: string; 
  public get redistributeStatic() {
    return this.getStringAttribute('redistribute_static');
  }
  public set redistributeStatic(value: string) {
    this._redistributeStatic = value;
  }
  public resetRedistributeStatic() {
    this._redistributeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticInput() {
    return this._redistributeStatic;
  }

  // redistribute_static_metric - computed: true, optional: true, required: false
  private _redistributeStaticMetric?: string; 
  public get redistributeStaticMetric() {
    return this.getStringAttribute('redistribute_static_metric');
  }
  public set redistributeStaticMetric(value: string) {
    this._redistributeStaticMetric = value;
  }
  public resetRedistributeStaticMetric() {
    this._redistributeStaticMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticMetricInput() {
    return this._redistributeStaticMetric;
  }

  // redistribute_static_metric_type - computed: true, optional: true, required: false
  private _redistributeStaticMetricType?: string; 
  public get redistributeStaticMetricType() {
    return this.getStringAttribute('redistribute_static_metric_type');
  }
  public set redistributeStaticMetricType(value: string) {
    this._redistributeStaticMetricType = value;
  }
  public resetRedistributeStaticMetricType() {
    this._redistributeStaticMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticMetricTypeInput() {
    return this._redistributeStaticMetricType;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_information_metric: cdktf.stringToTerraform(this._defaultInformationMetric),
      default_information_metric_type: cdktf.stringToTerraform(this._defaultInformationMetricType),
      default_information_originate: cdktf.stringToTerraform(this._defaultInformationOriginate),
      default_metric: cdktf.stringToTerraform(this._defaultMetric),
      distance: cdktf.stringToTerraform(this._distance),
      id: cdktf.stringToTerraform(this._id),
      redistribute_connected: cdktf.stringToTerraform(this._redistributeConnected),
      redistribute_connected_metric: cdktf.stringToTerraform(this._redistributeConnectedMetric),
      redistribute_connected_metric_type: cdktf.stringToTerraform(this._redistributeConnectedMetricType),
      redistribute_static: cdktf.stringToTerraform(this._redistributeStatic),
      redistribute_static_metric: cdktf.stringToTerraform(this._redistributeStaticMetric),
      redistribute_static_metric_type: cdktf.stringToTerraform(this._redistributeStaticMetricType),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_information_metric: {
        value: cdktf.stringToHclTerraform(this._defaultInformationMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_metric_type: {
        value: cdktf.stringToHclTerraform(this._defaultInformationMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_metric: {
        value: cdktf.stringToHclTerraform(this._defaultMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.stringToHclTerraform(this._distance),
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
      redistribute_connected: {
        value: cdktf.stringToHclTerraform(this._redistributeConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_connected_metric: {
        value: cdktf.stringToHclTerraform(this._redistributeConnectedMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_connected_metric_type: {
        value: cdktf.stringToHclTerraform(this._redistributeConnectedMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_static: {
        value: cdktf.stringToHclTerraform(this._redistributeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_static_metric: {
        value: cdktf.stringToHclTerraform(this._redistributeStaticMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_static_metric_type: {
        value: cdktf.stringToHclTerraform(this._redistributeStaticMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
