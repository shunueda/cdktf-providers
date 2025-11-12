// https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElvidProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#environment ElvidProvider#environment}
  */
  readonly environment: string;
  /**
  * elvid_authority is as default set based on environment ( var.environment == 'prod' ? 'https://elvid.elvia.io' : 'https://elvid.test-elvia.io'). Use this to override the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#override_elvid_authority ElvidProvider#override_elvid_authority}
  */
  readonly overrideElvidAuthority?: string;
  /**
  * Only turn this off temporarily to recreate a client secret if the hashed_secret_validation fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#run_hashed_secret_validation ElvidProvider#run_hashed_secret_validation}
  */
  readonly runHashedSecretValidation?: boolean | cdktf.IResolvable;
  /**
  * Azure tenant id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#tenant_id ElvidProvider#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The Client ID for terraform service principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#terraform_sp_client_id ElvidProvider#terraform_sp_client_id}
  */
  readonly terraformSpClientId: string;
  /**
  * The Client Secret for terraform service principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#terraform_sp_client_secret ElvidProvider#terraform_sp_client_secret}
  */
  readonly terraformSpClientSecret: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#alias ElvidProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs elvid}
*/
export class ElvidProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elvid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElvidProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElvidProvider to import
  * @param importFromId The id of the existing ElvidProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElvidProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elvid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs elvid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElvidProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ElvidProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'elvid',
      terraformGeneratorMetadata: {
        providerName: 'elvid',
        providerVersion: '2.1.1',
        providerVersionConstraint: '2.1.1'
      },
      terraformProviderSource: '3lvia/elvid'
    });
    this._environment = config.environment;
    this._overrideElvidAuthority = config.overrideElvidAuthority;
    this._runHashedSecretValidation = config.runHashedSecretValidation;
    this._tenantId = config.tenantId;
    this._terraformSpClientId = config.terraformSpClientId;
    this._terraformSpClientSecret = config.terraformSpClientSecret;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // override_elvid_authority - computed: false, optional: true, required: false
  private _overrideElvidAuthority?: string; 
  public get overrideElvidAuthority() {
    return this._overrideElvidAuthority;
  }
  public set overrideElvidAuthority(value: string | undefined) {
    this._overrideElvidAuthority = value;
  }
  public resetOverrideElvidAuthority() {
    this._overrideElvidAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideElvidAuthorityInput() {
    return this._overrideElvidAuthority;
  }

  // run_hashed_secret_validation - computed: false, optional: true, required: false
  private _runHashedSecretValidation?: boolean | cdktf.IResolvable; 
  public get runHashedSecretValidation() {
    return this._runHashedSecretValidation;
  }
  public set runHashedSecretValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._runHashedSecretValidation = value;
  }
  public resetRunHashedSecretValidation() {
    this._runHashedSecretValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runHashedSecretValidationInput() {
    return this._runHashedSecretValidation;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // terraform_sp_client_id - computed: false, optional: false, required: true
  private _terraformSpClientId?: string; 
  public get terraformSpClientId() {
    return this._terraformSpClientId;
  }
  public set terraformSpClientId(value: string | undefined) {
    this._terraformSpClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformSpClientIdInput() {
    return this._terraformSpClientId;
  }

  // terraform_sp_client_secret - computed: false, optional: false, required: true
  private _terraformSpClientSecret?: string; 
  public get terraformSpClientSecret() {
    return this._terraformSpClientSecret;
  }
  public set terraformSpClientSecret(value: string | undefined) {
    this._terraformSpClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformSpClientSecretInput() {
    return this._terraformSpClientSecret;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      override_elvid_authority: cdktf.stringToTerraform(this._overrideElvidAuthority),
      run_hashed_secret_validation: cdktf.booleanToTerraform(this._runHashedSecretValidation),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      terraform_sp_client_id: cdktf.stringToTerraform(this._terraformSpClientId),
      terraform_sp_client_secret: cdktf.stringToTerraform(this._terraformSpClientSecret),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_elvid_authority: {
        value: cdktf.stringToHclTerraform(this._overrideElvidAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_hashed_secret_validation: {
        value: cdktf.booleanToHclTerraform(this._runHashedSecretValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_sp_client_id: {
        value: cdktf.stringToHclTerraform(this._terraformSpClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_sp_client_secret: {
        value: cdktf.stringToHclTerraform(this._terraformSpClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
