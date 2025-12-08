// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpTrafficFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#___path___ IpTrafficFlow#___path___}
  */
  readonly path?: string;
  /**
  * Maximum life-time of a flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#active_flow_timeout IpTrafficFlow#active_flow_timeout}
  */
  readonly activeFlowTimeout?: string;
  /**
  * Number of flows which can be in router's memory simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#cache_entries IpTrafficFlow#cache_entries}
  */
  readonly cacheEntries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#id IpTrafficFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How long to keep the flow active, if it is idle. If a connection does not see any packet within this timeout, then traffic-flow will send a packet out as a new flow. If this timeout is too small it can create a significant amount of flows and overflow the buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#inactive_flow_timeout IpTrafficFlow#inactive_flow_timeout}
  */
  readonly inactiveFlowTimeout?: string;
  /**
  * Names of those interfaces will be used to gather statistics for traffic-flow. To specify more than one interface, separate them with a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#interfaces IpTrafficFlow#interfaces}
  */
  readonly interfaces?: string;
  /**
  * Enable or disable packet sampling feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#packet_sampling IpTrafficFlow#packet_sampling}
  */
  readonly packetSampling?: boolean | cdktf.IResolvable;
  /**
  * The number of packets that are consecutively sampled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#sampling_interval IpTrafficFlow#sampling_interval}
  */
  readonly samplingInterval?: number;
  /**
  * The number of packets that are consecutively omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#sampling_space IpTrafficFlow#sampling_space}
  */
  readonly samplingSpace?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow routeros_ip_traffic_flow}
*/
export class IpTrafficFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_traffic_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpTrafficFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpTrafficFlow to import
  * @param importFromId The id of the existing IpTrafficFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpTrafficFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_traffic_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow routeros_ip_traffic_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpTrafficFlowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpTrafficFlowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_traffic_flow',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._activeFlowTimeout = config.activeFlowTimeout;
    this._cacheEntries = config.cacheEntries;
    this._id = config.id;
    this._inactiveFlowTimeout = config.inactiveFlowTimeout;
    this._interfaces = config.interfaces;
    this._packetSampling = config.packetSampling;
    this._samplingInterval = config.samplingInterval;
    this._samplingSpace = config.samplingSpace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // active_flow_timeout - computed: false, optional: true, required: false
  private _activeFlowTimeout?: string; 
  public get activeFlowTimeout() {
    return this.getStringAttribute('active_flow_timeout');
  }
  public set activeFlowTimeout(value: string) {
    this._activeFlowTimeout = value;
  }
  public resetActiveFlowTimeout() {
    this._activeFlowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeFlowTimeoutInput() {
    return this._activeFlowTimeout;
  }

  // cache_entries - computed: false, optional: true, required: false
  private _cacheEntries?: string; 
  public get cacheEntries() {
    return this.getStringAttribute('cache_entries');
  }
  public set cacheEntries(value: string) {
    this._cacheEntries = value;
  }
  public resetCacheEntries() {
    this._cacheEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEntriesInput() {
    return this._cacheEntries;
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

  // inactive_flow_timeout - computed: false, optional: true, required: false
  private _inactiveFlowTimeout?: string; 
  public get inactiveFlowTimeout() {
    return this.getStringAttribute('inactive_flow_timeout');
  }
  public set inactiveFlowTimeout(value: string) {
    this._inactiveFlowTimeout = value;
  }
  public resetInactiveFlowTimeout() {
    this._inactiveFlowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveFlowTimeoutInput() {
    return this._inactiveFlowTimeout;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string; 
  public get interfaces() {
    return this.getStringAttribute('interfaces');
  }
  public set interfaces(value: string) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // packet_sampling - computed: false, optional: true, required: false
  private _packetSampling?: boolean | cdktf.IResolvable; 
  public get packetSampling() {
    return this.getBooleanAttribute('packet_sampling');
  }
  public set packetSampling(value: boolean | cdktf.IResolvable) {
    this._packetSampling = value;
  }
  public resetPacketSampling() {
    this._packetSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSamplingInput() {
    return this._packetSampling;
  }

  // sampling_interval - computed: false, optional: true, required: false
  private _samplingInterval?: number; 
  public get samplingInterval() {
    return this.getNumberAttribute('sampling_interval');
  }
  public set samplingInterval(value: number) {
    this._samplingInterval = value;
  }
  public resetSamplingInterval() {
    this._samplingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingIntervalInput() {
    return this._samplingInterval;
  }

  // sampling_space - computed: false, optional: true, required: false
  private _samplingSpace?: number; 
  public get samplingSpace() {
    return this.getNumberAttribute('sampling_space');
  }
  public set samplingSpace(value: number) {
    this._samplingSpace = value;
  }
  public resetSamplingSpace() {
    this._samplingSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingSpaceInput() {
    return this._samplingSpace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      active_flow_timeout: cdktf.stringToTerraform(this._activeFlowTimeout),
      cache_entries: cdktf.stringToTerraform(this._cacheEntries),
      id: cdktf.stringToTerraform(this._id),
      inactive_flow_timeout: cdktf.stringToTerraform(this._inactiveFlowTimeout),
      interfaces: cdktf.stringToTerraform(this._interfaces),
      packet_sampling: cdktf.booleanToTerraform(this._packetSampling),
      sampling_interval: cdktf.numberToTerraform(this._samplingInterval),
      sampling_space: cdktf.numberToTerraform(this._samplingSpace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_flow_timeout: {
        value: cdktf.stringToHclTerraform(this._activeFlowTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_entries: {
        value: cdktf.stringToHclTerraform(this._cacheEntries),
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
      inactive_flow_timeout: {
        value: cdktf.stringToHclTerraform(this._inactiveFlowTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.stringToHclTerraform(this._interfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_sampling: {
        value: cdktf.booleanToHclTerraform(this._packetSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sampling_interval: {
        value: cdktf.numberToHclTerraform(this._samplingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_space: {
        value: cdktf.numberToHclTerraform(this._samplingSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
