// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_global_default_segment_profile_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtGlobalDefaultSegmentProfileTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_global_default_segment_profile_template#id NsxtGlobalDefaultSegmentProfileTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Global default NSX-T Segment Profile for vApp networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_global_default_segment_profile_template#vapp_networks_default_segment_profile_template_id NsxtGlobalDefaultSegmentProfileTemplate#vapp_networks_default_segment_profile_template_id}
  */
  readonly vappNetworksDefaultSegmentProfileTemplateId?: string;
  /**
  * Global default NSX-T Segment Profile for Org VDC networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_global_default_segment_profile_template#vdc_networks_default_segment_profile_template_id NsxtGlobalDefaultSegmentProfileTemplate#vdc_networks_default_segment_profile_template_id}
  */
  readonly vdcNetworksDefaultSegmentProfileTemplateId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_global_default_segment_profile_template vcd_nsxt_global_default_segment_profile_template}
*/
export class NsxtGlobalDefaultSegmentProfileTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_global_default_segment_profile_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtGlobalDefaultSegmentProfileTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtGlobalDefaultSegmentProfileTemplate to import
  * @param importFromId The id of the existing NsxtGlobalDefaultSegmentProfileTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_global_default_segment_profile_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtGlobalDefaultSegmentProfileTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_global_default_segment_profile_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_global_default_segment_profile_template vcd_nsxt_global_default_segment_profile_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtGlobalDefaultSegmentProfileTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsxtGlobalDefaultSegmentProfileTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_global_default_segment_profile_template',
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
    this._vappNetworksDefaultSegmentProfileTemplateId = config.vappNetworksDefaultSegmentProfileTemplateId;
    this._vdcNetworksDefaultSegmentProfileTemplateId = config.vdcNetworksDefaultSegmentProfileTemplateId;
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
      id: cdktf.stringToTerraform(this._id),
      vapp_networks_default_segment_profile_template_id: cdktf.stringToTerraform(this._vappNetworksDefaultSegmentProfileTemplateId),
      vdc_networks_default_segment_profile_template_id: cdktf.stringToTerraform(this._vdcNetworksDefaultSegmentProfileTemplateId),
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
      vapp_networks_default_segment_profile_template_id: {
        value: cdktf.stringToHclTerraform(this._vappNetworksDefaultSegmentProfileTemplateId),
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
