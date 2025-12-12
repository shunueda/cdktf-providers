// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformHubGenericOidcAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The audience associated with this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account#audience PlatformHubGenericOidcAccount#audience}
  */
  readonly audience?: string;
  /**
  * The description of this Generic OIDC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account#description PlatformHubGenericOidcAccount#description}
  */
  readonly description?: string;
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `environment`, `project`, `tenant`, `runbook`, `account`, `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account#execution_subject_keys PlatformHubGenericOidcAccount#execution_subject_keys}
  */
  readonly executionSubjectKeys?: string[];
  /**
  * The name of this Generic OIDC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account#name PlatformHubGenericOidcAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account octopusdeploy_platform_hub_generic_oidc_account}
*/
export class PlatformHubGenericOidcAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_platform_hub_generic_oidc_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformHubGenericOidcAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformHubGenericOidcAccount to import
  * @param importFromId The id of the existing PlatformHubGenericOidcAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformHubGenericOidcAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_platform_hub_generic_oidc_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_generic_oidc_account octopusdeploy_platform_hub_generic_oidc_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformHubGenericOidcAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformHubGenericOidcAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_platform_hub_generic_oidc_account',
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
    this._audience = config.audience;
    this._description = config.description;
    this._executionSubjectKeys = config.executionSubjectKeys;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // execution_subject_keys - computed: true, optional: true, required: false
  private _executionSubjectKeys?: string[]; 
  public get executionSubjectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('execution_subject_keys'));
  }
  public set executionSubjectKeys(value: string[]) {
    this._executionSubjectKeys = value;
  }
  public resetExecutionSubjectKeys() {
    this._executionSubjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSubjectKeysInput() {
    return this._executionSubjectKeys;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktf.stringToTerraform(this._audience),
      description: cdktf.stringToTerraform(this._description),
      execution_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._executionSubjectKeys),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
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
      execution_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._executionSubjectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
