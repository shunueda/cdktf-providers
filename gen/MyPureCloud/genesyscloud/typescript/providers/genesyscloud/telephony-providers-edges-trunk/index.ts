// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesTrunkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The edge group associated with this trunk. Either this or "edge_id" must be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk#edge_group_id TelephonyProvidersEdgesTrunk#edge_group_id}
  */
  readonly edgeGroupId?: string;
  /**
  * The edge associated with this trunk. Either this or "edge_group_id" must be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk#edge_id TelephonyProvidersEdgesTrunk#edge_id}
  */
  readonly edgeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk#id TelephonyProvidersEdgesTrunk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the trunk. This property is read only and populated with the auto generated name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk#name TelephonyProvidersEdgesTrunk#name}
  */
  readonly name?: string;
  /**
  * The trunk base settings reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk#trunk_base_settings_id TelephonyProvidersEdgesTrunk#trunk_base_settings_id}
  */
  readonly trunkBaseSettingsId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk genesyscloud_telephony_providers_edges_trunk}
*/
export class TelephonyProvidersEdgesTrunk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_trunk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesTrunk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesTrunk to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesTrunk that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesTrunk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_trunk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_trunk genesyscloud_telephony_providers_edges_trunk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesTrunkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesTrunkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_trunk',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGroupId = config.edgeGroupId;
    this._edgeId = config.edgeId;
    this._id = config.id;
    this._name = config.name;
    this._trunkBaseSettingsId = config.trunkBaseSettingsId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_group_id - computed: true, optional: true, required: false
  private _edgeGroupId?: string; 
  public get edgeGroupId() {
    return this.getStringAttribute('edge_group_id');
  }
  public set edgeGroupId(value: string) {
    this._edgeGroupId = value;
  }
  public resetEdgeGroupId() {
    this._edgeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGroupIdInput() {
    return this._edgeGroupId;
  }

  // edge_id - computed: true, optional: true, required: false
  private _edgeId?: string; 
  public get edgeId() {
    return this.getStringAttribute('edge_id');
  }
  public set edgeId(value: string) {
    this._edgeId = value;
  }
  public resetEdgeId() {
    this._edgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIdInput() {
    return this._edgeId;
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

  // trunk_base_settings_id - computed: false, optional: true, required: false
  private _trunkBaseSettingsId?: string; 
  public get trunkBaseSettingsId() {
    return this.getStringAttribute('trunk_base_settings_id');
  }
  public set trunkBaseSettingsId(value: string) {
    this._trunkBaseSettingsId = value;
  }
  public resetTrunkBaseSettingsId() {
    this._trunkBaseSettingsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkBaseSettingsIdInput() {
    return this._trunkBaseSettingsId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_group_id: cdktf.stringToTerraform(this._edgeGroupId),
      edge_id: cdktf.stringToTerraform(this._edgeId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      trunk_base_settings_id: cdktf.stringToTerraform(this._trunkBaseSettingsId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_group_id: {
        value: cdktf.stringToHclTerraform(this._edgeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_id: {
        value: cdktf.stringToHclTerraform(this._edgeId),
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
      trunk_base_settings_id: {
        value: cdktf.stringToHclTerraform(this._trunkBaseSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
