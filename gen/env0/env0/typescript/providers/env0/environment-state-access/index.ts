// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentStateAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * when this parameter is 'false', allowed_project_ids should be provided. Defaults to 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access#accessible_from_entire_organization EnvironmentStateAccess#accessible_from_entire_organization}
  */
  readonly accessibleFromEntireOrganization?: boolean | cdktf.IResolvable;
  /**
  * list of allowed project_ids. Used when 'accessible_from_entire_organization' is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access#allowed_project_ids EnvironmentStateAccess#allowed_project_ids}
  */
  readonly allowedProjectIds?: string[];
  /**
  * id of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access#environment_id EnvironmentStateAccess#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access#id EnvironmentStateAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access env0_environment_state_access}
*/
export class EnvironmentStateAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_environment_state_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentStateAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentStateAccess to import
  * @param importFromId The id of the existing EnvironmentStateAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentStateAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_environment_state_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/environment_state_access env0_environment_state_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentStateAccessConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentStateAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_environment_state_access',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessibleFromEntireOrganization = config.accessibleFromEntireOrganization;
    this._allowedProjectIds = config.allowedProjectIds;
    this._environmentId = config.environmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessible_from_entire_organization - computed: false, optional: true, required: false
  private _accessibleFromEntireOrganization?: boolean | cdktf.IResolvable; 
  public get accessibleFromEntireOrganization() {
    return this.getBooleanAttribute('accessible_from_entire_organization');
  }
  public set accessibleFromEntireOrganization(value: boolean | cdktf.IResolvable) {
    this._accessibleFromEntireOrganization = value;
  }
  public resetAccessibleFromEntireOrganization() {
    this._accessibleFromEntireOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibleFromEntireOrganizationInput() {
    return this._accessibleFromEntireOrganization;
  }

  // allowed_project_ids - computed: false, optional: true, required: false
  private _allowedProjectIds?: string[]; 
  public get allowedProjectIds() {
    return this.getListAttribute('allowed_project_ids');
  }
  public set allowedProjectIds(value: string[]) {
    this._allowedProjectIds = value;
  }
  public resetAllowedProjectIds() {
    this._allowedProjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProjectIdsInput() {
    return this._allowedProjectIds;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessible_from_entire_organization: cdktf.booleanToTerraform(this._accessibleFromEntireOrganization),
      allowed_project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedProjectIds),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessible_from_entire_organization: {
        value: cdktf.booleanToHclTerraform(this._accessibleFromEntireOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedProjectIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
