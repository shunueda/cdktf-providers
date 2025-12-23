// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced option. Customized route(s) to be advertised to other VPCs that are connected to the same TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#customized_route_advertisement AwsTgwVpcAttachment#customized_route_advertisement}
  */
  readonly customizedRouteAdvertisement?: string;
  /**
  * Advanced option. Customized Spoke VPC Routes. It allows the admin to enter non-RFC1918 routes in the VPC route table targeting the TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#customized_routes AwsTgwVpcAttachment#customized_routes}
  */
  readonly customizedRoutes?: string;
  /**
  * Advanced option. If set to true, it disables automatic route propagation of this VPC to other VPCs within the same network domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#disable_local_route_propagation AwsTgwVpcAttachment#disable_local_route_propagation}
  */
  readonly disableLocalRoutePropagation?: boolean | cdktf.IResolvable;
  /**
  * Edge attachment ID. To allow access to the private IP of the MGMT interface of the Firewalls, set this attribute to enable Management Access From Onprem. This feature advertises the Firewalls private MGMT subnet to your Edge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#edge_attachment AwsTgwVpcAttachment#edge_attachment}
  */
  readonly edgeAttachment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#id AwsTgwVpcAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the network domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#network_domain_name AwsTgwVpcAttachment#network_domain_name}
  */
  readonly networkDomainName: string;
  /**
  * Region of cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#region AwsTgwVpcAttachment#region}
  */
  readonly region: string;
  /**
  * Advanced option. Route tables separated by ',' to participate in TGW Orchestrator, i.e., learned routes will be propagated to these route tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#route_tables AwsTgwVpcAttachment#route_tables}
  */
  readonly routeTables?: string;
  /**
  * Advanced option. VPC subnets separated by ',' to attach to the VPC. If left blank, Aviatrix Controller automatically selects a subnet representing each AZ for the VPC attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#subnets AwsTgwVpcAttachment#subnets}
  */
  readonly subnets?: string;
  /**
  * Name of the AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#tgw_name AwsTgwVpcAttachment#tgw_name}
  */
  readonly tgwName: string;
  /**
  * This parameter represents the name of a Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#vpc_account_name AwsTgwVpcAttachment#vpc_account_name}
  */
  readonly vpcAccountName: string;
  /**
  * This parameter represents the ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#vpc_id AwsTgwVpcAttachment#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment aviatrix_aws_tgw_vpc_attachment}
*/
export class AwsTgwVpcAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_vpc_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwVpcAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwVpcAttachment to import
  * @param importFromId The id of the existing AwsTgwVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwVpcAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_vpc_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/aws_tgw_vpc_attachment aviatrix_aws_tgw_vpc_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_vpc_attachment',
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
    this._customizedRouteAdvertisement = config.customizedRouteAdvertisement;
    this._customizedRoutes = config.customizedRoutes;
    this._disableLocalRoutePropagation = config.disableLocalRoutePropagation;
    this._edgeAttachment = config.edgeAttachment;
    this._id = config.id;
    this._networkDomainName = config.networkDomainName;
    this._region = config.region;
    this._routeTables = config.routeTables;
    this._subnets = config.subnets;
    this._tgwName = config.tgwName;
    this._vpcAccountName = config.vpcAccountName;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customized_route_advertisement - computed: false, optional: true, required: false
  private _customizedRouteAdvertisement?: string; 
  public get customizedRouteAdvertisement() {
    return this.getStringAttribute('customized_route_advertisement');
  }
  public set customizedRouteAdvertisement(value: string) {
    this._customizedRouteAdvertisement = value;
  }
  public resetCustomizedRouteAdvertisement() {
    this._customizedRouteAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedRouteAdvertisementInput() {
    return this._customizedRouteAdvertisement;
  }

  // customized_routes - computed: false, optional: true, required: false
  private _customizedRoutes?: string; 
  public get customizedRoutes() {
    return this.getStringAttribute('customized_routes');
  }
  public set customizedRoutes(value: string) {
    this._customizedRoutes = value;
  }
  public resetCustomizedRoutes() {
    this._customizedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedRoutesInput() {
    return this._customizedRoutes;
  }

  // disable_local_route_propagation - computed: false, optional: true, required: false
  private _disableLocalRoutePropagation?: boolean | cdktf.IResolvable; 
  public get disableLocalRoutePropagation() {
    return this.getBooleanAttribute('disable_local_route_propagation');
  }
  public set disableLocalRoutePropagation(value: boolean | cdktf.IResolvable) {
    this._disableLocalRoutePropagation = value;
  }
  public resetDisableLocalRoutePropagation() {
    this._disableLocalRoutePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalRoutePropagationInput() {
    return this._disableLocalRoutePropagation;
  }

  // edge_attachment - computed: false, optional: true, required: false
  private _edgeAttachment?: string; 
  public get edgeAttachment() {
    return this.getStringAttribute('edge_attachment');
  }
  public set edgeAttachment(value: string) {
    this._edgeAttachment = value;
  }
  public resetEdgeAttachment() {
    this._edgeAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeAttachmentInput() {
    return this._edgeAttachment;
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

  // network_domain_name - computed: false, optional: false, required: true
  private _networkDomainName?: string; 
  public get networkDomainName() {
    return this.getStringAttribute('network_domain_name');
  }
  public set networkDomainName(value: string) {
    this._networkDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDomainNameInput() {
    return this._networkDomainName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // route_tables - computed: true, optional: true, required: false
  private _routeTables?: string; 
  public get routeTables() {
    return this.getStringAttribute('route_tables');
  }
  public set routeTables(value: string) {
    this._routeTables = value;
  }
  public resetRouteTables() {
    this._routeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTablesInput() {
    return this._routeTables;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string; 
  public get subnets() {
    return this.getStringAttribute('subnets');
  }
  public set subnets(value: string) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tgw_name - computed: false, optional: false, required: true
  private _tgwName?: string; 
  public get tgwName() {
    return this.getStringAttribute('tgw_name');
  }
  public set tgwName(value: string) {
    this._tgwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwNameInput() {
    return this._tgwName;
  }

  // vpc_account_name - computed: false, optional: false, required: true
  private _vpcAccountName?: string; 
  public get vpcAccountName() {
    return this.getStringAttribute('vpc_account_name');
  }
  public set vpcAccountName(value: string) {
    this._vpcAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccountNameInput() {
    return this._vpcAccountName;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customized_route_advertisement: cdktf.stringToTerraform(this._customizedRouteAdvertisement),
      customized_routes: cdktf.stringToTerraform(this._customizedRoutes),
      disable_local_route_propagation: cdktf.booleanToTerraform(this._disableLocalRoutePropagation),
      edge_attachment: cdktf.stringToTerraform(this._edgeAttachment),
      id: cdktf.stringToTerraform(this._id),
      network_domain_name: cdktf.stringToTerraform(this._networkDomainName),
      region: cdktf.stringToTerraform(this._region),
      route_tables: cdktf.stringToTerraform(this._routeTables),
      subnets: cdktf.stringToTerraform(this._subnets),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
      vpc_account_name: cdktf.stringToTerraform(this._vpcAccountName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customized_route_advertisement: {
        value: cdktf.stringToHclTerraform(this._customizedRouteAdvertisement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_routes: {
        value: cdktf.stringToHclTerraform(this._customizedRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_local_route_propagation: {
        value: cdktf.booleanToHclTerraform(this._disableLocalRoutePropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_attachment: {
        value: cdktf.stringToHclTerraform(this._edgeAttachment),
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
      network_domain_name: {
        value: cdktf.stringToHclTerraform(this._networkDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_tables: {
        value: cdktf.stringToHclTerraform(this._routeTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.stringToHclTerraform(this._subnets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_name: {
        value: cdktf.stringToHclTerraform(this._tgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_account_name: {
        value: cdktf.stringToHclTerraform(this._vpcAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
