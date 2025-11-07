// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/application_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFusionauthApplicationRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the application that this role is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/application_role#application_id DataFusionauthApplicationRole#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/application_role#id DataFusionauthApplicationRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/application_role#name DataFusionauthApplicationRole#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/application_role fusionauth_application_role}
*/
export class DataFusionauthApplicationRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_application_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFusionauthApplicationRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFusionauthApplicationRole to import
  * @param importFromId The id of the existing DataFusionauthApplicationRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/application_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFusionauthApplicationRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_application_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/application_role fusionauth_application_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFusionauthApplicationRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataFusionauthApplicationRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_application_role',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
