// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_segment_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtNetworkSegmentProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_segment_profile#id DataVcdNsxtNetworkSegmentProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_segment_profile#org DataVcdNsxtNetworkSegmentProfile#org}
  */
  readonly org?: string;
  /**
  * ID of the Organization Network that uses the Segment Profile Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_segment_profile#org_network_id DataVcdNsxtNetworkSegmentProfile#org_network_id}
  */
  readonly orgNetworkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_segment_profile vcd_nsxt_network_segment_profile}
*/
export class DataVcdNsxtNetworkSegmentProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_network_segment_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtNetworkSegmentProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtNetworkSegmentProfile to import
  * @param importFromId The id of the existing DataVcdNsxtNetworkSegmentProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_segment_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtNetworkSegmentProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_network_segment_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_segment_profile vcd_nsxt_network_segment_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtNetworkSegmentProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtNetworkSegmentProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_network_segment_profile',
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
    this._id = config.id;
    this._org = config.org;
    this._orgNetworkId = config.orgNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_discovery_profile_id - computed: true, optional: false, required: false
  public get ipDiscoveryProfileId() {
    return this.getStringAttribute('ip_discovery_profile_id');
  }

  // mac_discovery_profile_id - computed: true, optional: false, required: false
  public get macDiscoveryProfileId() {
    return this.getStringAttribute('mac_discovery_profile_id');
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

  // org_network_id - computed: false, optional: false, required: true
  private _orgNetworkId?: string; 
  public get orgNetworkId() {
    return this.getStringAttribute('org_network_id');
  }
  public set orgNetworkId(value: string) {
    this._orgNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNetworkIdInput() {
    return this._orgNetworkId;
  }

  // qos_profile_id - computed: true, optional: false, required: false
  public get qosProfileId() {
    return this.getStringAttribute('qos_profile_id');
  }

  // segment_profile_template_id - computed: true, optional: false, required: false
  public get segmentProfileTemplateId() {
    return this.getStringAttribute('segment_profile_template_id');
  }

  // segment_profile_template_name - computed: true, optional: false, required: false
  public get segmentProfileTemplateName() {
    return this.getStringAttribute('segment_profile_template_name');
  }

  // segment_security_profile_id - computed: true, optional: false, required: false
  public get segmentSecurityProfileId() {
    return this.getStringAttribute('segment_security_profile_id');
  }

  // spoof_guard_profile_id - computed: true, optional: false, required: false
  public get spoofGuardProfileId() {
    return this.getStringAttribute('spoof_guard_profile_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      org_network_id: cdktf.stringToTerraform(this._orgNetworkId),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_network_id: {
        value: cdktf.stringToHclTerraform(this._orgNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
