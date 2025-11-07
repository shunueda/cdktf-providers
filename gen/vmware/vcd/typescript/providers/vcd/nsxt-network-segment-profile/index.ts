// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtNetworkSegmentProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#id NsxtNetworkSegmentProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T IP Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#ip_discovery_profile_id NsxtNetworkSegmentProfile#ip_discovery_profile_id}
  */
  readonly ipDiscoveryProfileId?: string;
  /**
  * NSX-T Mac Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#mac_discovery_profile_id NsxtNetworkSegmentProfile#mac_discovery_profile_id}
  */
  readonly macDiscoveryProfileId?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#org NsxtNetworkSegmentProfile#org}
  */
  readonly org?: string;
  /**
  * ID of the Organization Network that will have the segment profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#org_network_id NsxtNetworkSegmentProfile#org_network_id}
  */
  readonly orgNetworkId: string;
  /**
  * NSX-T QoS Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#qos_profile_id NsxtNetworkSegmentProfile#qos_profile_id}
  */
  readonly qosProfileId?: string;
  /**
  * Segment Profile Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#segment_profile_template_id NsxtNetworkSegmentProfile#segment_profile_template_id}
  */
  readonly segmentProfileTemplateId?: string;
  /**
  * NSX-T Segment Security Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#segment_security_profile_id NsxtNetworkSegmentProfile#segment_security_profile_id}
  */
  readonly segmentSecurityProfileId?: string;
  /**
  * NSX-T Spoof Guard Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#spoof_guard_profile_id NsxtNetworkSegmentProfile#spoof_guard_profile_id}
  */
  readonly spoofGuardProfileId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile vcd_nsxt_network_segment_profile}
*/
export class NsxtNetworkSegmentProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_network_segment_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtNetworkSegmentProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtNetworkSegmentProfile to import
  * @param importFromId The id of the existing NsxtNetworkSegmentProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtNetworkSegmentProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_network_segment_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_segment_profile vcd_nsxt_network_segment_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtNetworkSegmentProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtNetworkSegmentProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_network_segment_profile',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._ipDiscoveryProfileId = config.ipDiscoveryProfileId;
    this._macDiscoveryProfileId = config.macDiscoveryProfileId;
    this._org = config.org;
    this._orgNetworkId = config.orgNetworkId;
    this._qosProfileId = config.qosProfileId;
    this._segmentProfileTemplateId = config.segmentProfileTemplateId;
    this._segmentSecurityProfileId = config.segmentSecurityProfileId;
    this._spoofGuardProfileId = config.spoofGuardProfileId;
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

  // ip_discovery_profile_id - computed: true, optional: true, required: false
  private _ipDiscoveryProfileId?: string; 
  public get ipDiscoveryProfileId() {
    return this.getStringAttribute('ip_discovery_profile_id');
  }
  public set ipDiscoveryProfileId(value: string) {
    this._ipDiscoveryProfileId = value;
  }
  public resetIpDiscoveryProfileId() {
    this._ipDiscoveryProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDiscoveryProfileIdInput() {
    return this._ipDiscoveryProfileId;
  }

  // mac_discovery_profile_id - computed: true, optional: true, required: false
  private _macDiscoveryProfileId?: string; 
  public get macDiscoveryProfileId() {
    return this.getStringAttribute('mac_discovery_profile_id');
  }
  public set macDiscoveryProfileId(value: string) {
    this._macDiscoveryProfileId = value;
  }
  public resetMacDiscoveryProfileId() {
    this._macDiscoveryProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macDiscoveryProfileIdInput() {
    return this._macDiscoveryProfileId;
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

  // qos_profile_id - computed: true, optional: true, required: false
  private _qosProfileId?: string; 
  public get qosProfileId() {
    return this.getStringAttribute('qos_profile_id');
  }
  public set qosProfileId(value: string) {
    this._qosProfileId = value;
  }
  public resetQosProfileId() {
    this._qosProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileIdInput() {
    return this._qosProfileId;
  }

  // segment_profile_template_id - computed: false, optional: true, required: false
  private _segmentProfileTemplateId?: string; 
  public get segmentProfileTemplateId() {
    return this.getStringAttribute('segment_profile_template_id');
  }
  public set segmentProfileTemplateId(value: string) {
    this._segmentProfileTemplateId = value;
  }
  public resetSegmentProfileTemplateId() {
    this._segmentProfileTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentProfileTemplateIdInput() {
    return this._segmentProfileTemplateId;
  }

  // segment_profile_template_name - computed: true, optional: false, required: false
  public get segmentProfileTemplateName() {
    return this.getStringAttribute('segment_profile_template_name');
  }

  // segment_security_profile_id - computed: true, optional: true, required: false
  private _segmentSecurityProfileId?: string; 
  public get segmentSecurityProfileId() {
    return this.getStringAttribute('segment_security_profile_id');
  }
  public set segmentSecurityProfileId(value: string) {
    this._segmentSecurityProfileId = value;
  }
  public resetSegmentSecurityProfileId() {
    this._segmentSecurityProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentSecurityProfileIdInput() {
    return this._segmentSecurityProfileId;
  }

  // spoof_guard_profile_id - computed: true, optional: true, required: false
  private _spoofGuardProfileId?: string; 
  public get spoofGuardProfileId() {
    return this.getStringAttribute('spoof_guard_profile_id');
  }
  public set spoofGuardProfileId(value: string) {
    this._spoofGuardProfileId = value;
  }
  public resetSpoofGuardProfileId() {
    this._spoofGuardProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofGuardProfileIdInput() {
    return this._spoofGuardProfileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_discovery_profile_id: cdktf.stringToTerraform(this._ipDiscoveryProfileId),
      mac_discovery_profile_id: cdktf.stringToTerraform(this._macDiscoveryProfileId),
      org: cdktf.stringToTerraform(this._org),
      org_network_id: cdktf.stringToTerraform(this._orgNetworkId),
      qos_profile_id: cdktf.stringToTerraform(this._qosProfileId),
      segment_profile_template_id: cdktf.stringToTerraform(this._segmentProfileTemplateId),
      segment_security_profile_id: cdktf.stringToTerraform(this._segmentSecurityProfileId),
      spoof_guard_profile_id: cdktf.stringToTerraform(this._spoofGuardProfileId),
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
      ip_discovery_profile_id: {
        value: cdktf.stringToHclTerraform(this._ipDiscoveryProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_discovery_profile_id: {
        value: cdktf.stringToHclTerraform(this._macDiscoveryProfileId),
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
      qos_profile_id: {
        value: cdktf.stringToHclTerraform(this._qosProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_profile_template_id: {
        value: cdktf.stringToHclTerraform(this._segmentProfileTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_security_profile_id: {
        value: cdktf.stringToHclTerraform(this._segmentSecurityProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_guard_profile_id: {
        value: cdktf.stringToHclTerraform(this._spoofGuardProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
