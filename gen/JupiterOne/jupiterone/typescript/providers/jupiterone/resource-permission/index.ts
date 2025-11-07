// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourcePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the subject can create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#can_create ResourcePermission#can_create}
  */
  readonly canCreate: boolean | cdktf.IResolvable;
  /**
  * Whether the subject can delete the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#can_delete ResourcePermission#can_delete}
  */
  readonly canDelete: boolean | cdktf.IResolvable;
  /**
  * Whether the subject can read the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#can_read ResourcePermission#can_read}
  */
  readonly canRead: boolean | cdktf.IResolvable;
  /**
  * Whether the subject can update the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#can_update ResourcePermission#can_update}
  */
  readonly canUpdate: boolean | cdktf.IResolvable;
  /**
  * The resource area that these permissions will be applied to. Possible values: rule, dashboard, integration, collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#resource_area ResourcePermission#resource_area}
  */
  readonly resourceArea: string;
  /**
  * The ID of the resource that these permissions will be applied to (e.g. rule ID, resource group ID, *).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#resource_id ResourcePermission#resource_id}
  */
  readonly resourceId: string;
  /**
  * The resource type that these permissions will be applied to. Possible values: resource_group, *, rule, dashboard, integration, collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#resource_type ResourcePermission#resource_type}
  */
  readonly resourceType: string;
  /**
  * The ID of the subject that the resource permissions will be applied to (e.g. group ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#subject_id ResourcePermission#subject_id}
  */
  readonly subjectId: string;
  /**
  * The type of the subject that the resource permissions will be applied to. Possible values: group, token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#subject_type ResourcePermission#subject_type}
  */
  readonly subjectType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission jupiterone_resource_permission}
*/
export class ResourcePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_resource_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourcePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourcePermission to import
  * @param importFromId The id of the existing ResourcePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourcePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_resource_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/resource_permission jupiterone_resource_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourcePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ResourcePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_resource_permission',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canCreate = config.canCreate;
    this._canDelete = config.canDelete;
    this._canRead = config.canRead;
    this._canUpdate = config.canUpdate;
    this._resourceArea = config.resourceArea;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._subjectId = config.subjectId;
    this._subjectType = config.subjectType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_create - computed: false, optional: false, required: true
  private _canCreate?: boolean | cdktf.IResolvable; 
  public get canCreate() {
    return this.getBooleanAttribute('can_create');
  }
  public set canCreate(value: boolean | cdktf.IResolvable) {
    this._canCreate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateInput() {
    return this._canCreate;
  }

  // can_delete - computed: false, optional: false, required: true
  private _canDelete?: boolean | cdktf.IResolvable; 
  public get canDelete() {
    return this.getBooleanAttribute('can_delete');
  }
  public set canDelete(value: boolean | cdktf.IResolvable) {
    this._canDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteInput() {
    return this._canDelete;
  }

  // can_read - computed: false, optional: false, required: true
  private _canRead?: boolean | cdktf.IResolvable; 
  public get canRead() {
    return this.getBooleanAttribute('can_read');
  }
  public set canRead(value: boolean | cdktf.IResolvable) {
    this._canRead = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canReadInput() {
    return this._canRead;
  }

  // can_update - computed: false, optional: false, required: true
  private _canUpdate?: boolean | cdktf.IResolvable; 
  public get canUpdate() {
    return this.getBooleanAttribute('can_update');
  }
  public set canUpdate(value: boolean | cdktf.IResolvable) {
    this._canUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canUpdateInput() {
    return this._canUpdate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_area - computed: false, optional: false, required: true
  private _resourceArea?: string; 
  public get resourceArea() {
    return this.getStringAttribute('resource_area');
  }
  public set resourceArea(value: string) {
    this._resourceArea = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAreaInput() {
    return this._resourceArea;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // subject_id - computed: false, optional: false, required: true
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_create: cdktf.booleanToTerraform(this._canCreate),
      can_delete: cdktf.booleanToTerraform(this._canDelete),
      can_read: cdktf.booleanToTerraform(this._canRead),
      can_update: cdktf.booleanToTerraform(this._canUpdate),
      resource_area: cdktf.stringToTerraform(this._resourceArea),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      subject_id: cdktf.stringToTerraform(this._subjectId),
      subject_type: cdktf.stringToTerraform(this._subjectType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_create: {
        value: cdktf.booleanToHclTerraform(this._canCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_delete: {
        value: cdktf.booleanToHclTerraform(this._canDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_read: {
        value: cdktf.booleanToHclTerraform(this._canRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_update: {
        value: cdktf.booleanToHclTerraform(this._canUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_area: {
        value: cdktf.stringToHclTerraform(this._resourceArea),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_id: {
        value: cdktf.stringToHclTerraform(this._subjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_type: {
        value: cdktf.stringToHclTerraform(this._subjectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
