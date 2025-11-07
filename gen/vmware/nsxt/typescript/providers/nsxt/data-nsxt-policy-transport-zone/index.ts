// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtPolicyTransportZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone#description DataNsxtPolicyTransportZone#description}
  */
  readonly description?: string;
  /**
  * Display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone#display_name DataNsxtPolicyTransportZone#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone#id DataNsxtPolicyTransportZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the transport zone is default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone#is_default DataNsxtPolicyTransportZone#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Path of the site this Transport Zone belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone#site_path DataNsxtPolicyTransportZone#site_path}
  */
  readonly sitePath?: string;
  /**
  * Type of Transport Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone#transport_type DataNsxtPolicyTransportZone#transport_type}
  */
  readonly transportType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone nsxt_policy_transport_zone}
*/
export class DataNsxtPolicyTransportZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_transport_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtPolicyTransportZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtPolicyTransportZone to import
  * @param importFromId The id of the existing DataNsxtPolicyTransportZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtPolicyTransportZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_transport_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transport_zone nsxt_policy_transport_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtPolicyTransportZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsxtPolicyTransportZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_transport_zone',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._sitePath = config.sitePath;
    this._transportType = config.transportType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // realized_id - computed: true, optional: false, required: false
  public get realizedId() {
    return this.getStringAttribute('realized_id');
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // transport_type - computed: true, optional: true, required: false
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  public resetTransportType() {
    this._transportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      site_path: cdktf.stringToTerraform(this._sitePath),
      transport_type: cdktf.stringToTerraform(this._transportType),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_type: {
        value: cdktf.stringToHclTerraform(this._transportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
