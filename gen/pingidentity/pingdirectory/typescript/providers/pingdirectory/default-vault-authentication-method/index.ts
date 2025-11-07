// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVaultAuthenticationMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for this Vault Authentication Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#description DefaultVaultAuthenticationMethod#description}
  */
  readonly description?: string;
  /**
  * When the `type` attribute is set to:
  *   - `app-role`: The name used when enabling the desired AppRole authentication mechanism in the Vault server.
  *   - `user-pass`: The name used when enabling the desired UserPass authentication mechanism in the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#login_mechanism_name DefaultVaultAuthenticationMethod#login_mechanism_name}
  */
  readonly loginMechanismName?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#name DefaultVaultAuthenticationMethod#name}
  */
  readonly name: string;
  /**
  * The password for the user to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#password DefaultVaultAuthenticationMethod#password}
  */
  readonly password?: string;
  /**
  * The username for the user to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#username DefaultVaultAuthenticationMethod#username}
  */
  readonly username?: string;
  /**
  * The static token used to authenticate to the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#vault_access_token DefaultVaultAuthenticationMethod#vault_access_token}
  */
  readonly vaultAccessToken?: string;
  /**
  * The role ID for the AppRole to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#vault_role_id DefaultVaultAuthenticationMethod#vault_role_id}
  */
  readonly vaultRoleId?: string;
  /**
  * The secret ID for the AppRole to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#vault_secret_id DefaultVaultAuthenticationMethod#vault_secret_id}
  */
  readonly vaultSecretId?: string;
}
export interface DefaultVaultAuthenticationMethodRequiredActions {
}

export function defaultVaultAuthenticationMethodRequiredActionsToTerraform(struct?: DefaultVaultAuthenticationMethodRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultVaultAuthenticationMethodRequiredActionsToHclTerraform(struct?: DefaultVaultAuthenticationMethodRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultVaultAuthenticationMethodRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultVaultAuthenticationMethodRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultVaultAuthenticationMethodRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultVaultAuthenticationMethodRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultVaultAuthenticationMethodRequiredActionsOutputReference {
    return new DefaultVaultAuthenticationMethodRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method pingdirectory_default_vault_authentication_method}
*/
export class DefaultVaultAuthenticationMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_vault_authentication_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultVaultAuthenticationMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultVaultAuthenticationMethod to import
  * @param importFromId The id of the existing DefaultVaultAuthenticationMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultVaultAuthenticationMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_vault_authentication_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_vault_authentication_method pingdirectory_default_vault_authentication_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultVaultAuthenticationMethodConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultVaultAuthenticationMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_vault_authentication_method',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
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
    this._loginMechanismName = config.loginMechanismName;
    this._name = config.name;
    this._password = config.password;
    this._username = config.username;
    this._vaultAccessToken = config.vaultAccessToken;
    this._vaultRoleId = config.vaultRoleId;
    this._vaultSecretId = config.vaultSecretId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // login_mechanism_name - computed: true, optional: true, required: false
  private _loginMechanismName?: string; 
  public get loginMechanismName() {
    return this.getStringAttribute('login_mechanism_name');
  }
  public set loginMechanismName(value: string) {
    this._loginMechanismName = value;
  }
  public resetLoginMechanismName() {
    this._loginMechanismName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMechanismNameInput() {
    return this._loginMechanismName;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultVaultAuthenticationMethodRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vault_access_token - computed: true, optional: true, required: false
  private _vaultAccessToken?: string; 
  public get vaultAccessToken() {
    return this.getStringAttribute('vault_access_token');
  }
  public set vaultAccessToken(value: string) {
    this._vaultAccessToken = value;
  }
  public resetVaultAccessToken() {
    this._vaultAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAccessTokenInput() {
    return this._vaultAccessToken;
  }

  // vault_role_id - computed: true, optional: true, required: false
  private _vaultRoleId?: string; 
  public get vaultRoleId() {
    return this.getStringAttribute('vault_role_id');
  }
  public set vaultRoleId(value: string) {
    this._vaultRoleId = value;
  }
  public resetVaultRoleId() {
    this._vaultRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRoleIdInput() {
    return this._vaultRoleId;
  }

  // vault_secret_id - computed: true, optional: true, required: false
  private _vaultSecretId?: string; 
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
  public set vaultSecretId(value: string) {
    this._vaultSecretId = value;
  }
  public resetVaultSecretId() {
    this._vaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretIdInput() {
    return this._vaultSecretId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      login_mechanism_name: cdktf.stringToTerraform(this._loginMechanismName),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      vault_access_token: cdktf.stringToTerraform(this._vaultAccessToken),
      vault_role_id: cdktf.stringToTerraform(this._vaultRoleId),
      vault_secret_id: cdktf.stringToTerraform(this._vaultSecretId),
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
      login_mechanism_name: {
        value: cdktf.stringToHclTerraform(this._loginMechanismName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_access_token: {
        value: cdktf.stringToHclTerraform(this._vaultAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_role_id: {
        value: cdktf.stringToHclTerraform(this._vaultRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_secret_id: {
        value: cdktf.stringToHclTerraform(this._vaultSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
