// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * indicates whether the resource is authorized for use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization#authorized ResourceAuthorization#authorized}
  */
  readonly authorized: boolean | cdktf.IResolvable;
  /**
  * id of the build definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization#definition_id ResourceAuthorization#definition_id}
  */
  readonly definitionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization#id ResourceAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization#project_id ResourceAuthorization#project_id}
  */
  readonly projectId: string;
  /**
  * id of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization#resource_id ResourceAuthorization#resource_id}
  */
  readonly resourceId: string;
  /**
  * type of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization#type ResourceAuthorization#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization azuredevops_resource_authorization}
*/
export class ResourceAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_resource_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceAuthorization to import
  * @param importFromId The id of the existing ResourceAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_resource_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/resource_authorization azuredevops_resource_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_resource_authorization',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorized = config.authorized;
    this._definitionId = config.definitionId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._resourceId = config.resourceId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized - computed: false, optional: false, required: true
  private _authorized?: boolean | cdktf.IResolvable; 
  public get authorized() {
    return this.getBooleanAttribute('authorized');
  }
  public set authorized(value: boolean | cdktf.IResolvable) {
    this._authorized = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedInput() {
    return this._authorized;
  }

  // definition_id - computed: false, optional: true, required: false
  private _definitionId?: number; 
  public get definitionId() {
    return this.getNumberAttribute('definition_id');
  }
  public set definitionId(value: number) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized: cdktf.booleanToTerraform(this._authorized),
      definition_id: cdktf.numberToTerraform(this._definitionId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized: {
        value: cdktf.booleanToHclTerraform(this._authorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      definition_id: {
        value: cdktf.numberToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
