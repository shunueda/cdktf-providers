// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtSegmentProfileTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of Segment Profile Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#description NsxtSegmentProfileTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#id NsxtSegmentProfileTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Segment IP Discovery Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#ip_discovery_profile_id NsxtSegmentProfileTemplate#ip_discovery_profile_id}
  */
  readonly ipDiscoveryProfileId?: string;
  /**
  * Segment MAC Discovery Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#mac_discovery_profile_id NsxtSegmentProfileTemplate#mac_discovery_profile_id}
  */
  readonly macDiscoveryProfileId?: string;
  /**
  * Name of Segment Profile Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#name NsxtSegmentProfileTemplate#name}
  */
  readonly name: string;
  /**
  * NSX-T Manager ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#nsxt_manager_id NsxtSegmentProfileTemplate#nsxt_manager_id}
  */
  readonly nsxtManagerId: string;
  /**
  * Segment QoS Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#qos_profile_id NsxtSegmentProfileTemplate#qos_profile_id}
  */
  readonly qosProfileId?: string;
  /**
  * Segment Security Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#segment_security_profile_id NsxtSegmentProfileTemplate#segment_security_profile_id}
  */
  readonly segmentSecurityProfileId?: string;
  /**
  * Segment Spoof Guard Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#spoof_guard_profile_id NsxtSegmentProfileTemplate#spoof_guard_profile_id}
  */
  readonly spoofGuardProfileId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template vcd_nsxt_segment_profile_template}
*/
export class NsxtSegmentProfileTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_segment_profile_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtSegmentProfileTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtSegmentProfileTemplate to import
  * @param importFromId The id of the existing NsxtSegmentProfileTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtSegmentProfileTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_segment_profile_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_segment_profile_template vcd_nsxt_segment_profile_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtSegmentProfileTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtSegmentProfileTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_segment_profile_template',
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
    this._description = config.description;
    this._id = config.id;
    this._ipDiscoveryProfileId = config.ipDiscoveryProfileId;
    this._macDiscoveryProfileId = config.macDiscoveryProfileId;
    this._name = config.name;
    this._nsxtManagerId = config.nsxtManagerId;
    this._qosProfileId = config.qosProfileId;
    this._segmentSecurityProfileId = config.segmentSecurityProfileId;
    this._spoofGuardProfileId = config.spoofGuardProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // ip_discovery_profile_id - computed: false, optional: true, required: false
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

  // mac_discovery_profile_id - computed: false, optional: true, required: false
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

  // nsxt_manager_id - computed: false, optional: false, required: true
  private _nsxtManagerId?: string; 
  public get nsxtManagerId() {
    return this.getStringAttribute('nsxt_manager_id');
  }
  public set nsxtManagerId(value: string) {
    this._nsxtManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtManagerIdInput() {
    return this._nsxtManagerId;
  }

  // qos_profile_id - computed: false, optional: true, required: false
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

  // segment_security_profile_id - computed: false, optional: true, required: false
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

  // spoof_guard_profile_id - computed: false, optional: true, required: false
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_discovery_profile_id: cdktf.stringToTerraform(this._ipDiscoveryProfileId),
      mac_discovery_profile_id: cdktf.stringToTerraform(this._macDiscoveryProfileId),
      name: cdktf.stringToTerraform(this._name),
      nsxt_manager_id: cdktf.stringToTerraform(this._nsxtManagerId),
      qos_profile_id: cdktf.stringToTerraform(this._qosProfileId),
      segment_security_profile_id: cdktf.stringToTerraform(this._segmentSecurityProfileId),
      spoof_guard_profile_id: cdktf.stringToTerraform(this._spoofGuardProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_manager_id: {
        value: cdktf.stringToHclTerraform(this._nsxtManagerId),
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
