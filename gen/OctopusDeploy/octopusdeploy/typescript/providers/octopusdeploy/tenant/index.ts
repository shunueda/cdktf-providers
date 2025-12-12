// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the tenant from which this tenant was cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant#cloned_from_tenant_id Tenant#cloned_from_tenant_id}
  */
  readonly clonedFromTenantId?: string;
  /**
  * The description of this tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant#description Tenant#description}
  */
  readonly description?: string;
  /**
  * The disabled status of this tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant#is_disabled Tenant#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant#name Tenant#name}
  */
  readonly name: string;
  /**
  * The space ID associated with this tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant#space_id Tenant#space_id}
  */
  readonly spaceId?: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant#tenant_tags Tenant#tenant_tags}
  */
  readonly tenantTags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant octopusdeploy_tenant}
*/
export class Tenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tenant to import
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tenant octopusdeploy_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConfig
  */
  public constructor(scope: Construct, id: string, config: TenantConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_tenant',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clonedFromTenantId = config.clonedFromTenantId;
    this._description = config.description;
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._tenantTags = config.tenantTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloned_from_tenant_id - computed: true, optional: true, required: false
  private _clonedFromTenantId?: string; 
  public get clonedFromTenantId() {
    return this.getStringAttribute('cloned_from_tenant_id');
  }
  public set clonedFromTenantId(value: string) {
    this._clonedFromTenantId = value;
  }
  public resetClonedFromTenantId() {
    this._clonedFromTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clonedFromTenantIdInput() {
    return this._clonedFromTenantId;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_tags'));
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloned_from_tenant_id: cdktf.stringToTerraform(this._clonedFromTenantId),
      description: cdktf.stringToTerraform(this._description),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloned_from_tenant_id: {
        value: cdktf.stringToHclTerraform(this._clonedFromTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
