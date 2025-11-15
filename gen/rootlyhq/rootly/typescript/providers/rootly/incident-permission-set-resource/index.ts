// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentPermissionSetResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource#id IncidentPermissionSetResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource#incident_permission_set_id IncidentPermissionSetResource#incident_permission_set_id}
  */
  readonly incidentPermissionSetId: string;
  /**
  * Value must be one of `severities`, `incident_types`, `statuses`, `sub_statuses`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource#kind IncidentPermissionSetResource#kind}
  */
  readonly kind?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource#private IncidentPermissionSetResource#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource#resource_id IncidentPermissionSetResource#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource#resource_type IncidentPermissionSetResource#resource_type}
  */
  readonly resourceType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource rootly_incident_permission_set_resource}
*/
export class IncidentPermissionSetResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_incident_permission_set_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentPermissionSetResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentPermissionSetResource to import
  * @param importFromId The id of the existing IncidentPermissionSetResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentPermissionSetResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_incident_permission_set_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/incident_permission_set_resource rootly_incident_permission_set_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentPermissionSetResourceConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentPermissionSetResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_incident_permission_set_resource',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
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
    this._incidentPermissionSetId = config.incidentPermissionSetId;
    this._kind = config.kind;
    this._private = config.private;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
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

  // incident_permission_set_id - computed: false, optional: false, required: true
  private _incidentPermissionSetId?: string; 
  public get incidentPermissionSetId() {
    return this.getStringAttribute('incident_permission_set_id');
  }
  public set incidentPermissionSetId(value: string) {
    this._incidentPermissionSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPermissionSetIdInput() {
    return this._incidentPermissionSetId;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // private - computed: true, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      incident_permission_set_id: cdktf.stringToTerraform(this._incidentPermissionSetId),
      kind: cdktf.stringToTerraform(this._kind),
      private: cdktf.booleanToTerraform(this._private),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
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
      incident_permission_set_id: {
        value: cdktf.stringToHclTerraform(this._incidentPermissionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
