// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/integration_custom_auth_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudIntegrationCustomAuthActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/integration_custom_auth_action#id DataGenesyscloudIntegrationCustomAuthAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of the integration associated with the custom auth action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/integration_custom_auth_action#parent_integration_id DataGenesyscloudIntegrationCustomAuthAction#parent_integration_id}
  */
  readonly parentIntegrationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/integration_custom_auth_action genesyscloud_integration_custom_auth_action}
*/
export class DataGenesyscloudIntegrationCustomAuthAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_integration_custom_auth_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudIntegrationCustomAuthAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudIntegrationCustomAuthAction to import
  * @param importFromId The id of the existing DataGenesyscloudIntegrationCustomAuthAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/integration_custom_auth_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudIntegrationCustomAuthAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_integration_custom_auth_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/integration_custom_auth_action genesyscloud_integration_custom_auth_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudIntegrationCustomAuthActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudIntegrationCustomAuthActionConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_integration_custom_auth_action',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._parentIntegrationId = config.parentIntegrationId;
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

  // parent_integration_id - computed: false, optional: false, required: true
  private _parentIntegrationId?: string; 
  public get parentIntegrationId() {
    return this.getStringAttribute('parent_integration_id');
  }
  public set parentIntegrationId(value: string) {
    this._parentIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIntegrationIdInput() {
    return this._parentIntegrationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parent_integration_id: cdktf.stringToTerraform(this._parentIntegrationId),
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
      parent_integration_id: {
        value: cdktf.stringToHclTerraform(this._parentIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
