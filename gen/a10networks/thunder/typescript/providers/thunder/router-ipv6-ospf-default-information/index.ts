// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIpv6OspfDefaultInformationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Always advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#always RouterIpv6OspfDefaultInformationA#always}
  */
  readonly always?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#id RouterIpv6OspfDefaultInformationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#metric RouterIpv6OspfDefaultInformationA#metric}
  */
  readonly metric?: number;
  /**
  * OSPF metric type for default routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#metric_type RouterIpv6OspfDefaultInformationA#metric_type}
  */
  readonly metricType?: number;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#originate RouterIpv6OspfDefaultInformationA#originate}
  */
  readonly originate?: number;
  /**
  * ProcessId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#process_id RouterIpv6OspfDefaultInformationA#process_id}
  */
  readonly processId: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#route_map RouterIpv6OspfDefaultInformationA#route_map}
  */
  readonly routeMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#uuid RouterIpv6OspfDefaultInformationA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information thunder_router_ipv6_ospf_default_information}
*/
export class RouterIpv6OspfDefaultInformationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ipv6_ospf_default_information";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIpv6OspfDefaultInformationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIpv6OspfDefaultInformationA to import
  * @param importFromId The id of the existing RouterIpv6OspfDefaultInformationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIpv6OspfDefaultInformationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ipv6_ospf_default_information", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_default_information thunder_router_ipv6_ospf_default_information} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIpv6OspfDefaultInformationAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIpv6OspfDefaultInformationAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ipv6_ospf_default_information',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._always = config.always;
    this._id = config.id;
    this._metric = config.metric;
    this._metricType = config.metricType;
    this._originate = config.originate;
    this._processId = config.processId;
    this._routeMap = config.routeMap;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always - computed: false, optional: true, required: false
  private _always?: number; 
  public get always() {
    return this.getNumberAttribute('always');
  }
  public set always(value: number) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: number; 
  public get metricType() {
    return this.getNumberAttribute('metric_type');
  }
  public set metricType(value: number) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // originate - computed: false, optional: true, required: false
  private _originate?: number; 
  public get originate() {
    return this.getNumberAttribute('originate');
  }
  public set originate(value: number) {
    this._originate = value;
  }
  public resetOriginate() {
    this._originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originateInput() {
    return this._originate;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always: cdktf.numberToTerraform(this._always),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.numberToTerraform(this._metric),
      metric_type: cdktf.numberToTerraform(this._metricType),
      originate: cdktf.numberToTerraform(this._originate),
      process_id: cdktf.stringToTerraform(this._processId),
      route_map: cdktf.stringToTerraform(this._routeMap),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always: {
        value: cdktf.numberToHclTerraform(this._always),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_type: {
        value: cdktf.numberToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      originate: {
        value: cdktf.numberToHclTerraform(this._originate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map: {
        value: cdktf.stringToHclTerraform(this._routeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
