// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesEdgeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#description TelephonyProvidersEdgesEdgeGroup#description}
  */
  readonly description?: string;
  /**
  * Is this edge group hybrid. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#hybrid TelephonyProvidersEdgesEdgeGroup#hybrid}
  */
  readonly hybrid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#id TelephonyProvidersEdgesEdgeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is this edge group being managed remotely. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#managed TelephonyProvidersEdgesEdgeGroup#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#name TelephonyProvidersEdgesEdgeGroup#name}
  */
  readonly name: string;
  /**
  * A list of trunk base settings IDs of trunkType "PHONE" to inherit to edge logical interface for phone communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#phone_trunk_base_ids TelephonyProvidersEdgesEdgeGroup#phone_trunk_base_ids}
  */
  readonly phoneTrunkBaseIds: string[];
  /**
  * Indicates if the resource is active, inactive, or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#state TelephonyProvidersEdgesEdgeGroup#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group genesyscloud_telephony_providers_edges_edge_group}
*/
export class TelephonyProvidersEdgesEdgeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_edge_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesEdgeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesEdgeGroup to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesEdgeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesEdgeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_edge_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_edge_group genesyscloud_telephony_providers_edges_edge_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesEdgeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesEdgeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_edge_group',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
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
    this._hybrid = config.hybrid;
    this._id = config.id;
    this._managed = config.managed;
    this._name = config.name;
    this._phoneTrunkBaseIds = config.phoneTrunkBaseIds;
    this._state = config.state;
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

  // hybrid - computed: false, optional: true, required: false
  private _hybrid?: boolean | cdktf.IResolvable; 
  public get hybrid() {
    return this.getBooleanAttribute('hybrid');
  }
  public set hybrid(value: boolean | cdktf.IResolvable) {
    this._hybrid = value;
  }
  public resetHybrid() {
    this._hybrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridInput() {
    return this._hybrid;
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

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
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

  // phone_trunk_base_ids - computed: false, optional: false, required: true
  private _phoneTrunkBaseIds?: string[]; 
  public get phoneTrunkBaseIds() {
    return cdktf.Fn.tolist(this.getListAttribute('phone_trunk_base_ids'));
  }
  public set phoneTrunkBaseIds(value: string[]) {
    this._phoneTrunkBaseIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneTrunkBaseIdsInput() {
    return this._phoneTrunkBaseIds;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      hybrid: cdktf.booleanToTerraform(this._hybrid),
      id: cdktf.stringToTerraform(this._id),
      managed: cdktf.booleanToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
      phone_trunk_base_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._phoneTrunkBaseIds),
      state: cdktf.stringToTerraform(this._state),
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
      hybrid: {
        value: cdktf.booleanToHclTerraform(this._hybrid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_trunk_base_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._phoneTrunkBaseIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
