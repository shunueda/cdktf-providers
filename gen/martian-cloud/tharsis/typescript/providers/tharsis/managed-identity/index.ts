// https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#aws_role ManagedIdentity#aws_role}
  */
  readonly awsRole?: string;
  /**
  * Azure client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#azure_client_id ManagedIdentity#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * Azure tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#azure_tenant_id ManagedIdentity#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * A description of the managed identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#description ManagedIdentity#description}
  */
  readonly description?: string;
  /**
  * Full path of the parent group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#group_path ManagedIdentity#group_path}
  */
  readonly groupPath: string;
  /**
  * The name of the managed identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#name ManagedIdentity#name}
  */
  readonly name: string;
  /**
  * Tharsis service account path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#tharsis_service_account_path ManagedIdentity#tharsis_service_account_path}
  */
  readonly tharsisServiceAccountPath?: string;
  /**
  * Type of managed identity: AWS, Azure, or Tharsis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#type ManagedIdentity#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity tharsis_managed_identity}
*/
export class ManagedIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_managed_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedIdentity to import
  * @param importFromId The id of the existing ManagedIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_managed_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity tharsis_managed_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_managed_identity',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.14.1',
        providerVersionConstraint: '0.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsRole = config.awsRole;
    this._azureClientId = config.azureClientId;
    this._azureTenantId = config.azureTenantId;
    this._description = config.description;
    this._groupPath = config.groupPath;
    this._name = config.name;
    this._tharsisServiceAccountPath = config.tharsisServiceAccountPath;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_role - computed: false, optional: true, required: false
  private _awsRole?: string; 
  public get awsRole() {
    return this.getStringAttribute('aws_role');
  }
  public set awsRole(value: string) {
    this._awsRole = value;
  }
  public resetAwsRole() {
    this._awsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleInput() {
    return this._awsRole;
  }

  // azure_client_id - computed: false, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
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

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // tharsis_service_account_path - computed: false, optional: true, required: false
  private _tharsisServiceAccountPath?: string; 
  public get tharsisServiceAccountPath() {
    return this.getStringAttribute('tharsis_service_account_path');
  }
  public set tharsisServiceAccountPath(value: string) {
    this._tharsisServiceAccountPath = value;
  }
  public resetTharsisServiceAccountPath() {
    this._tharsisServiceAccountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tharsisServiceAccountPathInput() {
    return this._tharsisServiceAccountPath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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
      aws_role: cdktf.stringToTerraform(this._awsRole),
      azure_client_id: cdktf.stringToTerraform(this._azureClientId),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      description: cdktf.stringToTerraform(this._description),
      group_path: cdktf.stringToTerraform(this._groupPath),
      name: cdktf.stringToTerraform(this._name),
      tharsis_service_account_path: cdktf.stringToTerraform(this._tharsisServiceAccountPath),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_role: {
        value: cdktf.stringToHclTerraform(this._awsRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_id: {
        value: cdktf.stringToHclTerraform(this._azureClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
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
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
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
      tharsis_service_account_path: {
        value: cdktf.stringToHclTerraform(this._tharsisServiceAccountPath),
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
