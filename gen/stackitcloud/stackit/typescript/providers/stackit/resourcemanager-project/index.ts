// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourcemanagerProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Labels are key-value string pairs which can be attached to a resource container. A label key must match the regex [A-ZÄÜÖa-zäüöß0-9_-]{1,64}. A label value must match the regex ^$|[A-ZÄÜÖa-zäüöß0-9_-]{1,64}.  
  * To create a project within a STACKIT Network Area, setting the label `networkArea=<networkAreaID>` is required. This can not be changed after project creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project#labels ResourcemanagerProject#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project#name ResourcemanagerProject#name}
  */
  readonly name: string;
  /**
  * Email address of the owner of the project. This value is only considered during creation. Changing it afterwards will have no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project#owner_email ResourcemanagerProject#owner_email}
  */
  readonly ownerEmail: string;
  /**
  * Parent resource identifier. Both container ID (user-friendly) and UUID are supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project#parent_container_id ResourcemanagerProject#parent_container_id}
  */
  readonly parentContainerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project stackit_resourcemanager_project}
*/
export class ResourcemanagerProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_resourcemanager_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourcemanagerProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourcemanagerProject to import
  * @param importFromId The id of the existing ResourcemanagerProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourcemanagerProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_resourcemanager_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/resourcemanager_project stackit_resourcemanager_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourcemanagerProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ResourcemanagerProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_resourcemanager_project',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels = config.labels;
    this._name = config.name;
    this._ownerEmail = config.ownerEmail;
    this._parentContainerId = config.parentContainerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_id - computed: true, optional: false, required: false
  public get containerId() {
    return this.getStringAttribute('container_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // owner_email - computed: false, optional: false, required: true
  private _ownerEmail?: string; 
  public get ownerEmail() {
    return this.getStringAttribute('owner_email');
  }
  public set ownerEmail(value: string) {
    this._ownerEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerEmailInput() {
    return this._ownerEmail;
  }

  // parent_container_id - computed: false, optional: false, required: true
  private _parentContainerId?: string; 
  public get parentContainerId() {
    return this.getStringAttribute('parent_container_id');
  }
  public set parentContainerId(value: string) {
    this._parentContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentContainerIdInput() {
    return this._parentContainerId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      owner_email: cdktf.stringToTerraform(this._ownerEmail),
      parent_container_id: cdktf.stringToTerraform(this._parentContainerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_email: {
        value: cdktf.stringToHclTerraform(this._ownerEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_container_id: {
        value: cdktf.stringToHclTerraform(this._parentContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
