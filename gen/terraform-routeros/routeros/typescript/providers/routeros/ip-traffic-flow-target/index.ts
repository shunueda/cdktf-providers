// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpTrafficFlowTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#___path___ IpTrafficFlowTarget#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#disabled IpTrafficFlowTarget#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * IP address of the host which receives Traffic-Flow statistic packets from the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#dst_address IpTrafficFlowTarget#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#id IpTrafficFlowTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port (UDP) of the host which receives Traffic-Flow statistic packets from the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#port IpTrafficFlowTarget#port}
  */
  readonly port?: number;
  /**
  * IP address used as source when sending Traffic-Flow statistics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#src_address IpTrafficFlowTarget#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Number of packets after which the template is sent to the receiving host (only for NetFlow version 9 and IPFIX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#v9_template_refresh IpTrafficFlowTarget#v9_template_refresh}
  */
  readonly v9TemplateRefresh?: number;
  /**
  * After how long to send the template, if it has not been sent. (only for NetFlow version 9 and IPFIX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#v9_template_timeout IpTrafficFlowTarget#v9_template_timeout}
  */
  readonly v9TemplateTimeout?: string;
  /**
  * Which version format of NetFlow to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#version IpTrafficFlowTarget#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target routeros_ip_traffic_flow_target}
*/
export class IpTrafficFlowTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_traffic_flow_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpTrafficFlowTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpTrafficFlowTarget to import
  * @param importFromId The id of the existing IpTrafficFlowTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpTrafficFlowTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_traffic_flow_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_traffic_flow_target routeros_ip_traffic_flow_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpTrafficFlowTargetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpTrafficFlowTargetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_traffic_flow_target',
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
    this._disabled = config.disabled;
    this._dstAddress = config.dstAddress;
    this._id = config.id;
    this._port = config.port;
    this._srcAddress = config.srcAddress;
    this._v9TemplateRefresh = config.v9TemplateRefresh;
    this._v9TemplateTimeout = config.v9TemplateTimeout;
    this._version = config.version;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dst_address - computed: false, optional: true, required: false
  private _dstAddress?: string; 
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }
  public set dstAddress(value: string) {
    this._dstAddress = value;
  }
  public resetDstAddress() {
    this._dstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressInput() {
    return this._dstAddress;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // v9_template_refresh - computed: false, optional: true, required: false
  private _v9TemplateRefresh?: number; 
  public get v9TemplateRefresh() {
    return this.getNumberAttribute('v9_template_refresh');
  }
  public set v9TemplateRefresh(value: number) {
    this._v9TemplateRefresh = value;
  }
  public resetV9TemplateRefresh() {
    this._v9TemplateRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v9TemplateRefreshInput() {
    return this._v9TemplateRefresh;
  }

  // v9_template_timeout - computed: false, optional: true, required: false
  private _v9TemplateTimeout?: string; 
  public get v9TemplateTimeout() {
    return this.getStringAttribute('v9_template_timeout');
  }
  public set v9TemplateTimeout(value: string) {
    this._v9TemplateTimeout = value;
  }
  public resetV9TemplateTimeout() {
    this._v9TemplateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v9TemplateTimeoutInput() {
    return this._v9TemplateTimeout;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      v9_template_refresh: cdktf.numberToTerraform(this._v9TemplateRefresh),
      v9_template_timeout: cdktf.stringToTerraform(this._v9TemplateTimeout),
      version: cdktf.stringToTerraform(this._version),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v9_template_refresh: {
        value: cdktf.numberToHclTerraform(this._v9TemplateRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v9_template_timeout: {
        value: cdktf.stringToHclTerraform(this._v9TemplateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
