// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviNsxtsegmentruntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime#cloud_ref DataAviNsxtsegmentruntime#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime#id DataAviNsxtsegmentruntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime#name DataAviNsxtsegmentruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime#tenant_ref DataAviNsxtsegmentruntime#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime#uuid DataAviNsxtsegmentruntime#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime avi_nsxtsegmentruntime}
*/
export class DataAviNsxtsegmentruntime extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_nsxtsegmentruntime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviNsxtsegmentruntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviNsxtsegmentruntime to import
  * @param importFromId The id of the existing DataAviNsxtsegmentruntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviNsxtsegmentruntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_nsxtsegmentruntime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/nsxtsegmentruntime avi_nsxtsegmentruntime} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviNsxtsegmentruntimeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviNsxtsegmentruntimeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_nsxtsegmentruntime',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudRef = config.cloudRef;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // dhcp6_ranges - computed: true, optional: false, required: false
  public get dhcp6Ranges() {
    return this.getListAttribute('dhcp6_ranges');
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }

  // dhcp_ranges - computed: true, optional: false, required: false
  public get dhcpRanges() {
    return this.getListAttribute('dhcp_ranges');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nw_name - computed: true, optional: false, required: false
  public get nwName() {
    return this.getStringAttribute('nw_name');
  }

  // nw_ref - computed: true, optional: false, required: false
  public get nwRef() {
    return this.getStringAttribute('nw_ref');
  }

  // opaque_network_id - computed: true, optional: false, required: false
  public get opaqueNetworkId() {
    return this.getStringAttribute('opaque_network_id');
  }

  // origin_id - computed: true, optional: false, required: false
  public get originId() {
    return this.getStringAttribute('origin_id');
  }

  // security_only_nsxt - computed: true, optional: false, required: false
  public get securityOnlyNsxt() {
    return this.getStringAttribute('security_only_nsxt');
  }

  // segment_gw - computed: true, optional: false, required: false
  public get segmentGw() {
    return this.getStringAttribute('segment_gw');
  }

  // segment_gw6 - computed: true, optional: false, required: false
  public get segmentGw6() {
    return this.getStringAttribute('segment_gw6');
  }

  // segment_id - computed: true, optional: false, required: false
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }

  // segname - computed: true, optional: false, required: false
  public get segname() {
    return this.getStringAttribute('segname');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // subnet6 - computed: true, optional: false, required: false
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // tier1_id - computed: true, optional: false, required: false
  public get tier1Id() {
    return this.getStringAttribute('tier1_id');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vlan_ids - computed: true, optional: false, required: false
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }

  // vrf_context_ref - computed: true, optional: false, required: false
  public get vrfContextRef() {
    return this.getStringAttribute('vrf_context_ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
