// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZitadelApplicationSamlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls#id DataZitadelApplicationSamls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls#name DataZitadelApplicationSamls#name}
  */
  readonly name: string;
  /**
  * Method for querying applications by name, supported values: TEXT_QUERY_METHOD_EQUALS, TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE, TEXT_QUERY_METHOD_STARTS_WITH, TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE, TEXT_QUERY_METHOD_CONTAINS, TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE, TEXT_QUERY_METHOD_ENDS_WITH, TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls#name_method DataZitadelApplicationSamls#name_method}
  */
  readonly nameMethod?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls#org_id DataZitadelApplicationSamls#org_id}
  */
  readonly orgId?: string;
  /**
  * ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls#project_id DataZitadelApplicationSamls#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls zitadel_application_samls}
*/
export class DataZitadelApplicationSamls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_application_samls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZitadelApplicationSamls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZitadelApplicationSamls to import
  * @param importFromId The id of the existing DataZitadelApplicationSamls that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZitadelApplicationSamls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_application_samls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/application_samls zitadel_application_samls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZitadelApplicationSamlsConfig
  */
  public constructor(scope: Construct, id: string, config: DataZitadelApplicationSamlsConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_application_samls',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
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
    this._name = config.name;
    this._nameMethod = config.nameMethod;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_ids - computed: true, optional: false, required: false
  public get appIds() {
    return this.getListAttribute('app_ids');
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

  // name_method - computed: false, optional: true, required: false
  private _nameMethod?: string; 
  public get nameMethod() {
    return this.getStringAttribute('name_method');
  }
  public set nameMethod(value: string) {
    this._nameMethod = value;
  }
  public resetNameMethod() {
    this._nameMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameMethodInput() {
    return this._nameMethod;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_method: cdktf.stringToTerraform(this._nameMethod),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_method: {
        value: cdktf.stringToHclTerraform(this._nameMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
