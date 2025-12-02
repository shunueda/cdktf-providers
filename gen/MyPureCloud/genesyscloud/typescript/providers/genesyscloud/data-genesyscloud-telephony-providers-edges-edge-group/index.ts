// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_edge_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudTelephonyProvidersEdgesEdgeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_edge_group#id DataGenesyscloudTelephonyProvidersEdgesEdgeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Return entities that are managed by Genesys Cloud. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_edge_group#managed DataGenesyscloudTelephonyProvidersEdgesEdgeGroup#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Edge Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_edge_group#name DataGenesyscloudTelephonyProvidersEdgesEdgeGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_edge_group genesyscloud_telephony_providers_edges_edge_group}
*/
export class DataGenesyscloudTelephonyProvidersEdgesEdgeGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_edge_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudTelephonyProvidersEdgesEdgeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudTelephonyProvidersEdgesEdgeGroup to import
  * @param importFromId The id of the existing DataGenesyscloudTelephonyProvidersEdgesEdgeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_edge_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudTelephonyProvidersEdgesEdgeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_edge_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_edge_group genesyscloud_telephony_providers_edges_edge_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudTelephonyProvidersEdgesEdgeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudTelephonyProvidersEdgesEdgeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_edge_group',
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
    this._id = config.id;
    this._managed = config.managed;
    this._name = config.name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed: cdktf.booleanToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
