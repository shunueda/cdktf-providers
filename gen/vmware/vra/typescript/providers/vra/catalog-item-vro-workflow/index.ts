// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogItemVroWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-friendly description for the catalog item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#description CatalogItemVroWorkflow#description}
  */
  readonly description?: string;
  /**
  * Whether to allow this catalog to be shared with multiple projects or to restrict it to the specified project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#global CatalogItemVroWorkflow#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * ID of the icon to associate with this catalog item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#icon_id CatalogItemVroWorkflow#icon_id}
  */
  readonly iconId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#id CatalogItemVroWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the catalog item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#name CatalogItemVroWorkflow#name}
  */
  readonly name: string;
  /**
  * ID of the project to share this catalog item with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#project_id CatalogItemVroWorkflow#project_id}
  */
  readonly projectId: string;
  /**
  * ID of the vRO workflow to publish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#workflow_id CatalogItemVroWorkflow#workflow_id}
  */
  readonly workflowId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow vra_catalog_item_vro_workflow}
*/
export class CatalogItemVroWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_catalog_item_vro_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogItemVroWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogItemVroWorkflow to import
  * @param importFromId The id of the existing CatalogItemVroWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogItemVroWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_catalog_item_vro_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/catalog_item_vro_workflow vra_catalog_item_vro_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogItemVroWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogItemVroWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_catalog_item_vro_workflow',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
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
    this._global = config.global;
    this._iconId = config.iconId;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._workflowId = config.workflowId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

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

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // icon_id - computed: false, optional: true, required: false
  private _iconId?: string; 
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }
  public set iconId(value: string) {
    this._iconId = value;
  }
  public resetIconId() {
    this._iconId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIdInput() {
    return this._iconId;
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      global: cdktf.booleanToTerraform(this._global),
      icon_id: cdktf.stringToTerraform(this._iconId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
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
      global: {
        value: cdktf.booleanToHclTerraform(this._global),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon_id: {
        value: cdktf.stringToHclTerraform(this._iconId),
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
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
