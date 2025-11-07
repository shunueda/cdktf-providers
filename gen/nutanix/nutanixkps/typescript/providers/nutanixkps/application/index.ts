// https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the application. For example, describe the application's purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * List of service domain and / or node IDs which are part of this application. 
  * 				Even if you want to add a single ID, use square brackets. For example, [ '<svc domain id>' ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#edge_ids Application#edge_ids}
  */
  readonly edgeIds: string[];
  /**
  * TGZ file name with path for the Helm chart for this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#helm_chart_filename Application#helm_chart_filename}
  */
  readonly helmChartFilename: string;
  /**
  * Values yaml file name with path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#helm_values_filename Application#helm_values_filename}
  */
  readonly helmValuesFilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the application:
  * 				Name must include lowercase alphanumeric characters and must start and end with an lowercase alphanumeric character.
  * 				Dash (-) and dot (.) characters are allowed as delimiters. Maximum length of 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Id of the project to which this application belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#project_id Application#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application nutanixkps_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanixkps_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanixkps_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/application nutanixkps_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanixkps_application',
      terraformGeneratorMetadata: {
        providerName: 'nutanixkps',
        providerVersion: '1.1.9'
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
    this._edgeIds = config.edgeIds;
    this._helmChartFilename = config.helmChartFilename;
    this._helmValuesFilename = config.helmValuesFilename;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
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

  // edge_ids - computed: false, optional: false, required: true
  private _edgeIds?: string[]; 
  public get edgeIds() {
    return this.getListAttribute('edge_ids');
  }
  public set edgeIds(value: string[]) {
    this._edgeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIdsInput() {
    return this._edgeIds;
  }

  // helm_chart_filename - computed: false, optional: false, required: true
  private _helmChartFilename?: string; 
  public get helmChartFilename() {
    return this.getStringAttribute('helm_chart_filename');
  }
  public set helmChartFilename(value: string) {
    this._helmChartFilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helmChartFilenameInput() {
    return this._helmChartFilename;
  }

  // helm_values_filename - computed: false, optional: true, required: false
  private _helmValuesFilename?: string; 
  public get helmValuesFilename() {
    return this.getStringAttribute('helm_values_filename');
  }
  public set helmValuesFilename(value: string) {
    this._helmValuesFilename = value;
  }
  public resetHelmValuesFilename() {
    this._helmValuesFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmValuesFilenameInput() {
    return this._helmValuesFilename;
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
      description: cdktf.stringToTerraform(this._description),
      edge_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._edgeIds),
      helm_chart_filename: cdktf.stringToTerraform(this._helmChartFilename),
      helm_values_filename: cdktf.stringToTerraform(this._helmValuesFilename),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      edge_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._edgeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      helm_chart_filename: {
        value: cdktf.stringToHclTerraform(this._helmChartFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      helm_values_filename: {
        value: cdktf.stringToHclTerraform(this._helmValuesFilename),
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
