// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpvpnRouterAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2#advertise_extra_routes BgpvpnRouterAssociateV2#advertise_extra_routes}
  */
  readonly advertiseExtraRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2#bgpvpn_id BgpvpnRouterAssociateV2#bgpvpn_id}
  */
  readonly bgpvpnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2#id BgpvpnRouterAssociateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2#project_id BgpvpnRouterAssociateV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2#region BgpvpnRouterAssociateV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2#router_id BgpvpnRouterAssociateV2#router_id}
  */
  readonly routerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2 openstack_bgpvpn_router_associate_v2}
*/
export class BgpvpnRouterAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_bgpvpn_router_associate_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpvpnRouterAssociateV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpvpnRouterAssociateV2 to import
  * @param importFromId The id of the existing BgpvpnRouterAssociateV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpvpnRouterAssociateV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_bgpvpn_router_associate_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_router_associate_v2 openstack_bgpvpn_router_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpvpnRouterAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: BgpvpnRouterAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_bgpvpn_router_associate_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseExtraRoutes = config.advertiseExtraRoutes;
    this._bgpvpnId = config.bgpvpnId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._region = config.region;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_extra_routes - computed: true, optional: true, required: false
  private _advertiseExtraRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseExtraRoutes() {
    return this.getBooleanAttribute('advertise_extra_routes');
  }
  public set advertiseExtraRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseExtraRoutes = value;
  }
  public resetAdvertiseExtraRoutes() {
    this._advertiseExtraRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseExtraRoutesInput() {
    return this._advertiseExtraRoutes;
  }

  // bgpvpn_id - computed: false, optional: false, required: true
  private _bgpvpnId?: string; 
  public get bgpvpnId() {
    return this.getStringAttribute('bgpvpn_id');
  }
  public set bgpvpnId(value: string) {
    this._bgpvpnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpvpnIdInput() {
    return this._bgpvpnId;
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
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
      advertise_extra_routes: cdktf.booleanToTerraform(this._advertiseExtraRoutes),
      bgpvpn_id: cdktf.stringToTerraform(this._bgpvpnId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_extra_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseExtraRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgpvpn_id: {
        value: cdktf.stringToHclTerraform(this._bgpvpnId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
