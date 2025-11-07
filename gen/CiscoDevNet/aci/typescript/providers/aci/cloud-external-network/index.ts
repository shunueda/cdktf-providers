// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudExternalNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#all_regions CloudExternalNetwork#all_regions}
  */
  readonly allRegions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#annotation CloudExternalNetwork#annotation}
  */
  readonly annotation?: string;
  /**
  * Name of the vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#cloud_vendor CloudExternalNetwork#cloud_vendor}
  */
  readonly cloudVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#description CloudExternalNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#host_router_name CloudExternalNetwork#host_router_name}
  */
  readonly hostRouterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#hub_network_name CloudExternalNetwork#hub_network_name}
  */
  readonly hubNetworkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#id CloudExternalNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#name CloudExternalNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#name_alias CloudExternalNetwork#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#regions CloudExternalNetwork#regions}
  */
  readonly regions?: string[];
  /**
  * Parameter used only for AWS cAPIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#router_type CloudExternalNetwork#router_type}
  */
  readonly routerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#vpn_router_name CloudExternalNetwork#vpn_router_name}
  */
  readonly vpnRouterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#vrf_dn CloudExternalNetwork#vrf_dn}
  */
  readonly vrfDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network aci_cloud_external_network}
*/
export class CloudExternalNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_external_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudExternalNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudExternalNetwork to import
  * @param importFromId The id of the existing CloudExternalNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudExternalNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_external_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_external_network aci_cloud_external_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudExternalNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: CloudExternalNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_external_network',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allRegions = config.allRegions;
    this._annotation = config.annotation;
    this._cloudVendor = config.cloudVendor;
    this._description = config.description;
    this._hostRouterName = config.hostRouterName;
    this._hubNetworkName = config.hubNetworkName;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._regions = config.regions;
    this._routerType = config.routerType;
    this._vpnRouterName = config.vpnRouterName;
    this._vrfDn = config.vrfDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: string; 
  public get allRegions() {
    return this.getStringAttribute('all_regions');
  }
  public set allRegions(value: string) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // cloud_vendor - computed: true, optional: true, required: false
  private _cloudVendor?: string; 
  public get cloudVendor() {
    return this.getStringAttribute('cloud_vendor');
  }
  public set cloudVendor(value: string) {
    this._cloudVendor = value;
  }
  public resetCloudVendor() {
    this._cloudVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVendorInput() {
    return this._cloudVendor;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host_router_name - computed: true, optional: true, required: false
  private _hostRouterName?: string; 
  public get hostRouterName() {
    return this.getStringAttribute('host_router_name');
  }
  public set hostRouterName(value: string) {
    this._hostRouterName = value;
  }
  public resetHostRouterName() {
    this._hostRouterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRouterNameInput() {
    return this._hostRouterName;
  }

  // hub_network_name - computed: true, optional: true, required: false
  private _hubNetworkName?: string; 
  public get hubNetworkName() {
    return this.getStringAttribute('hub_network_name');
  }
  public set hubNetworkName(value: string) {
    this._hubNetworkName = value;
  }
  public resetHubNetworkName() {
    this._hubNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNetworkNameInput() {
    return this._hubNetworkName;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // router_type - computed: true, optional: true, required: false
  private _routerType?: string; 
  public get routerType() {
    return this.getStringAttribute('router_type');
  }
  public set routerType(value: string) {
    this._routerType = value;
  }
  public resetRouterType() {
    this._routerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTypeInput() {
    return this._routerType;
  }

  // vpn_router_name - computed: true, optional: true, required: false
  private _vpnRouterName?: string; 
  public get vpnRouterName() {
    return this.getStringAttribute('vpn_router_name');
  }
  public set vpnRouterName(value: string) {
    this._vpnRouterName = value;
  }
  public resetVpnRouterName() {
    this._vpnRouterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnRouterNameInput() {
    return this._vpnRouterName;
  }

  // vrf_dn - computed: false, optional: false, required: true
  private _vrfDn?: string; 
  public get vrfDn() {
    return this.getStringAttribute('vrf_dn');
  }
  public set vrfDn(value: string) {
    this._vrfDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDnInput() {
    return this._vrfDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_regions: cdktf.stringToTerraform(this._allRegions),
      annotation: cdktf.stringToTerraform(this._annotation),
      cloud_vendor: cdktf.stringToTerraform(this._cloudVendor),
      description: cdktf.stringToTerraform(this._description),
      host_router_name: cdktf.stringToTerraform(this._hostRouterName),
      hub_network_name: cdktf.stringToTerraform(this._hubNetworkName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      router_type: cdktf.stringToTerraform(this._routerType),
      vpn_router_name: cdktf.stringToTerraform(this._vpnRouterName),
      vrf_dn: cdktf.stringToTerraform(this._vrfDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_regions: {
        value: cdktf.stringToHclTerraform(this._allRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_vendor: {
        value: cdktf.stringToHclTerraform(this._cloudVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_router_name: {
        value: cdktf.stringToHclTerraform(this._hostRouterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_network_name: {
        value: cdktf.stringToHclTerraform(this._hubNetworkName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      router_type: {
        value: cdktf.stringToHclTerraform(this._routerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_router_name: {
        value: cdktf.stringToHclTerraform(this._vpnRouterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_dn: {
        value: cdktf.stringToHclTerraform(this._vrfDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
