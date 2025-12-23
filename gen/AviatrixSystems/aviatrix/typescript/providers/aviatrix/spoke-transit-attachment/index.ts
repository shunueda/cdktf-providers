// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpokeTransitAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the maximum amount of HPE tunnels will be created. Only valid when transit and spoke gateways are each launched in Insane Mode and in the same cloud type. Available as of provider version R2.22.2+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#enable_max_performance SpokeTransitAttachment#enable_max_performance}
  */
  readonly enableMaxPerformance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#id SpokeTransitAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Learned routes will be propagated to these route tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#route_tables SpokeTransitAttachment#route_tables}
  */
  readonly routeTables?: string[];
  /**
  * Name of the spoke gateway to attach to transit network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#spoke_gw_name SpokeTransitAttachment#spoke_gw_name}
  */
  readonly spokeGwName: string;
  /**
  * AS Path Prepend customized by specifying AS PATH for a BGP connection. Applies on spoke gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#spoke_prepend_as_path SpokeTransitAttachment#spoke_prepend_as_path}
  */
  readonly spokePrependAsPath?: string[];
  /**
  * Transit gateway logical interface names for edge gateways, where the peering terminates. Required for all edge gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#transit_gateway_logical_ifnames SpokeTransitAttachment#transit_gateway_logical_ifnames}
  */
  readonly transitGatewayLogicalIfnames?: string[];
  /**
  * Name of the transit gateway to attach the spoke gateway to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#transit_gw_name SpokeTransitAttachment#transit_gw_name}
  */
  readonly transitGwName: string;
  /**
  * AS Path Prepend customized by specifying AS PATH for a BGP connection. Applies on transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#transit_prepend_as_path SpokeTransitAttachment#transit_prepend_as_path}
  */
  readonly transitPrependAsPath?: string[];
  /**
  * (Optional) Advanced option. Number of public tunnels. Required with both Spoke and Transitto be insane mode enabled and max performance enabled. Type: Integer. Valid Range: 1-49.Available as of provider version R3.1.3+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#tunnel_count SpokeTransitAttachment#tunnel_count}
  */
  readonly tunnelCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment aviatrix_spoke_transit_attachment}
*/
export class SpokeTransitAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_spoke_transit_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpokeTransitAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpokeTransitAttachment to import
  * @param importFromId The id of the existing SpokeTransitAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpokeTransitAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_spoke_transit_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_transit_attachment aviatrix_spoke_transit_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpokeTransitAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: SpokeTransitAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_spoke_transit_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableMaxPerformance = config.enableMaxPerformance;
    this._id = config.id;
    this._routeTables = config.routeTables;
    this._spokeGwName = config.spokeGwName;
    this._spokePrependAsPath = config.spokePrependAsPath;
    this._transitGatewayLogicalIfnames = config.transitGatewayLogicalIfnames;
    this._transitGwName = config.transitGwName;
    this._transitPrependAsPath = config.transitPrependAsPath;
    this._tunnelCount = config.tunnelCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_max_performance - computed: false, optional: true, required: false
  private _enableMaxPerformance?: boolean | cdktf.IResolvable; 
  public get enableMaxPerformance() {
    return this.getBooleanAttribute('enable_max_performance');
  }
  public set enableMaxPerformance(value: boolean | cdktf.IResolvable) {
    this._enableMaxPerformance = value;
  }
  public resetEnableMaxPerformance() {
    this._enableMaxPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMaxPerformanceInput() {
    return this._enableMaxPerformance;
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

  // route_tables - computed: false, optional: true, required: false
  private _routeTables?: string[]; 
  public get routeTables() {
    return cdktf.Fn.tolist(this.getListAttribute('route_tables'));
  }
  public set routeTables(value: string[]) {
    this._routeTables = value;
  }
  public resetRouteTables() {
    this._routeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTablesInput() {
    return this._routeTables;
  }

  // spoke_bgp_enabled - computed: true, optional: false, required: false
  public get spokeBgpEnabled() {
    return this.getBooleanAttribute('spoke_bgp_enabled');
  }

  // spoke_gw_name - computed: false, optional: false, required: true
  private _spokeGwName?: string; 
  public get spokeGwName() {
    return this.getStringAttribute('spoke_gw_name');
  }
  public set spokeGwName(value: string) {
    this._spokeGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeGwNameInput() {
    return this._spokeGwName;
  }

  // spoke_prepend_as_path - computed: false, optional: true, required: false
  private _spokePrependAsPath?: string[]; 
  public get spokePrependAsPath() {
    return this.getListAttribute('spoke_prepend_as_path');
  }
  public set spokePrependAsPath(value: string[]) {
    this._spokePrependAsPath = value;
  }
  public resetSpokePrependAsPath() {
    this._spokePrependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokePrependAsPathInput() {
    return this._spokePrependAsPath;
  }

  // transit_gateway_logical_ifnames - computed: false, optional: true, required: false
  private _transitGatewayLogicalIfnames?: string[]; 
  public get transitGatewayLogicalIfnames() {
    return this.getListAttribute('transit_gateway_logical_ifnames');
  }
  public set transitGatewayLogicalIfnames(value: string[]) {
    this._transitGatewayLogicalIfnames = value;
  }
  public resetTransitGatewayLogicalIfnames() {
    this._transitGatewayLogicalIfnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayLogicalIfnamesInput() {
    return this._transitGatewayLogicalIfnames;
  }

  // transit_gw_name - computed: false, optional: false, required: true
  private _transitGwName?: string; 
  public get transitGwName() {
    return this.getStringAttribute('transit_gw_name');
  }
  public set transitGwName(value: string) {
    this._transitGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGwNameInput() {
    return this._transitGwName;
  }

  // transit_prepend_as_path - computed: false, optional: true, required: false
  private _transitPrependAsPath?: string[]; 
  public get transitPrependAsPath() {
    return this.getListAttribute('transit_prepend_as_path');
  }
  public set transitPrependAsPath(value: string[]) {
    this._transitPrependAsPath = value;
  }
  public resetTransitPrependAsPath() {
    this._transitPrependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitPrependAsPathInput() {
    return this._transitPrependAsPath;
  }

  // tunnel_count - computed: false, optional: true, required: false
  private _tunnelCount?: number; 
  public get tunnelCount() {
    return this.getNumberAttribute('tunnel_count');
  }
  public set tunnelCount(value: number) {
    this._tunnelCount = value;
  }
  public resetTunnelCount() {
    this._tunnelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCountInput() {
    return this._tunnelCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_max_performance: cdktf.booleanToTerraform(this._enableMaxPerformance),
      id: cdktf.stringToTerraform(this._id),
      route_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTables),
      spoke_gw_name: cdktf.stringToTerraform(this._spokeGwName),
      spoke_prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spokePrependAsPath),
      transit_gateway_logical_ifnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitGatewayLogicalIfnames),
      transit_gw_name: cdktf.stringToTerraform(this._transitGwName),
      transit_prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitPrependAsPath),
      tunnel_count: cdktf.numberToTerraform(this._tunnelCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_max_performance: {
        value: cdktf.booleanToHclTerraform(this._enableMaxPerformance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_tables: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spoke_gw_name: {
        value: cdktf.stringToHclTerraform(this._spokeGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spokePrependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_gateway_logical_ifnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitGatewayLogicalIfnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_gw_name: {
        value: cdktf.stringToHclTerraform(this._transitGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitPrependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tunnel_count: {
        value: cdktf.numberToHclTerraform(this._tunnelCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
