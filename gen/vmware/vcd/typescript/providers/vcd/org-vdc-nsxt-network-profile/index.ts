// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgVdcNsxtNetworkProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of NSX-T Edge Cluster (provider vApp networking services and DHCP capability for Isolated networks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile#edge_cluster_id OrgVdcNsxtNetworkProfile#edge_cluster_id}
  */
  readonly edgeClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile#id OrgVdcNsxtNetworkProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile#org OrgVdcNsxtNetworkProfile#org}
  */
  readonly org?: string;
  /**
  * Default NSX-T Segment Profile for vApp networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile#vapp_networks_default_segment_profile_template_id OrgVdcNsxtNetworkProfile#vapp_networks_default_segment_profile_template_id}
  */
  readonly vappNetworksDefaultSegmentProfileTemplateId?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile#vdc OrgVdcNsxtNetworkProfile#vdc}
  */
  readonly vdc?: string;
  /**
  * Default NSX-T Segment Profile for Org VDC networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile#vdc_networks_default_segment_profile_template_id OrgVdcNsxtNetworkProfile#vdc_networks_default_segment_profile_template_id}
  */
  readonly vdcNetworksDefaultSegmentProfileTemplateId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile vcd_org_vdc_nsxt_network_profile}
*/
export class OrgVdcNsxtNetworkProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_vdc_nsxt_network_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgVdcNsxtNetworkProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgVdcNsxtNetworkProfile to import
  * @param importFromId The id of the existing OrgVdcNsxtNetworkProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgVdcNsxtNetworkProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_vdc_nsxt_network_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_nsxt_network_profile vcd_org_vdc_nsxt_network_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgVdcNsxtNetworkProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrgVdcNsxtNetworkProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_vdc_nsxt_network_profile',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeClusterId = config.edgeClusterId;
    this._id = config.id;
    this._org = config.org;
    this._vappNetworksDefaultSegmentProfileTemplateId = config.vappNetworksDefaultSegmentProfileTemplateId;
    this._vdc = config.vdc;
    this._vdcNetworksDefaultSegmentProfileTemplateId = config.vdcNetworksDefaultSegmentProfileTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_cluster_id - computed: false, optional: true, required: false
  private _edgeClusterId?: string; 
  public get edgeClusterId() {
    return this.getStringAttribute('edge_cluster_id');
  }
  public set edgeClusterId(value: string) {
    this._edgeClusterId = value;
  }
  public resetEdgeClusterId() {
    this._edgeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterIdInput() {
    return this._edgeClusterId;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // vapp_networks_default_segment_profile_template_id - computed: false, optional: true, required: false
  private _vappNetworksDefaultSegmentProfileTemplateId?: string; 
  public get vappNetworksDefaultSegmentProfileTemplateId() {
    return this.getStringAttribute('vapp_networks_default_segment_profile_template_id');
  }
  public set vappNetworksDefaultSegmentProfileTemplateId(value: string) {
    this._vappNetworksDefaultSegmentProfileTemplateId = value;
  }
  public resetVappNetworksDefaultSegmentProfileTemplateId() {
    this._vappNetworksDefaultSegmentProfileTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappNetworksDefaultSegmentProfileTemplateIdInput() {
    return this._vappNetworksDefaultSegmentProfileTemplateId;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // vdc_networks_default_segment_profile_template_id - computed: false, optional: true, required: false
  private _vdcNetworksDefaultSegmentProfileTemplateId?: string; 
  public get vdcNetworksDefaultSegmentProfileTemplateId() {
    return this.getStringAttribute('vdc_networks_default_segment_profile_template_id');
  }
  public set vdcNetworksDefaultSegmentProfileTemplateId(value: string) {
    this._vdcNetworksDefaultSegmentProfileTemplateId = value;
  }
  public resetVdcNetworksDefaultSegmentProfileTemplateId() {
    this._vdcNetworksDefaultSegmentProfileTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcNetworksDefaultSegmentProfileTemplateIdInput() {
    return this._vdcNetworksDefaultSegmentProfileTemplateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_cluster_id: cdktf.stringToTerraform(this._edgeClusterId),
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      vapp_networks_default_segment_profile_template_id: cdktf.stringToTerraform(this._vappNetworksDefaultSegmentProfileTemplateId),
      vdc: cdktf.stringToTerraform(this._vdc),
      vdc_networks_default_segment_profile_template_id: cdktf.stringToTerraform(this._vdcNetworksDefaultSegmentProfileTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_cluster_id: {
        value: cdktf.stringToHclTerraform(this._edgeClusterId),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vapp_networks_default_segment_profile_template_id: {
        value: cdktf.stringToHclTerraform(this._vappNetworksDefaultSegmentProfileTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_networks_default_segment_profile_template_id: {
        value: cdktf.stringToHclTerraform(this._vdcNetworksDefaultSegmentProfileTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
