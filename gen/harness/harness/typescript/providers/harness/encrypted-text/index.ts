// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptedTextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean that indicates whether or not to inherit the usage scopes from the secret manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#inherit_scopes_from_secret_manager EncryptedText#inherit_scopes_from_secret_manager}
  */
  readonly inheritScopesFromSecretManager?: boolean | cdktf.IResolvable;
  /**
  * Name of the encrypted text secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#name EncryptedText#name}
  */
  readonly name: string;
  /**
  * Boolean that indicates whether or not the secret is scoped to the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#scoped_to_account EncryptedText#scoped_to_account}
  */
  readonly scopedToAccount?: boolean | cdktf.IResolvable;
  /**
  * The id of the secret manager to associate the secret with. Once set, this field cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#secret_manager_id EncryptedText#secret_manager_id}
  */
  readonly secretManagerId: string;
  /**
  * Name of the existing secret. If you already have secrets created in a secrets manager such as HashiCorp Vault or AWS Secrets Manager, you do not need to re-create the existing secrets in Harness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#secret_reference EncryptedText#secret_reference}
  */
  readonly secretReference?: string;
  /**
  * The value of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#value EncryptedText#value}
  */
  readonly value?: string;
  /**
  * usage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#usage_scope EncryptedText#usage_scope}
  */
  readonly usageScope?: EncryptedTextUsageScope[] | cdktf.IResolvable;
}
export interface EncryptedTextUsageScope {
  /**
  * Id of the application to scope to. If empty then this scope applies to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#application_id EncryptedText#application_id}
  */
  readonly applicationId?: string;
  /**
  * Type of environment filter applied. Cannot be used with `environment_id`. Valid options are NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#environment_filter_type EncryptedText#environment_filter_type}
  */
  readonly environmentFilterType?: string;
  /**
  * Id of the id of the specific environment to scope to. Cannot be used with `environment_filter_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#environment_id EncryptedText#environment_id}
  */
  readonly environmentId?: string;
}

export function encryptedTextUsageScopeToTerraform(struct?: EncryptedTextUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    environment_filter_type: cdktf.stringToTerraform(struct!.environmentFilterType),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
  }
}


export function encryptedTextUsageScopeToHclTerraform(struct?: EncryptedTextUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EncryptedTextUsageScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EncryptedTextUsageScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._environmentFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilterType = this._environmentFilterType;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptedTextUsageScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._environmentFilterType = undefined;
      this._environmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._environmentFilterType = value.environmentFilterType;
      this._environmentId = value.environmentId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_filter_type - computed: false, optional: true, required: false
  private _environmentFilterType?: string; 
  public get environmentFilterType() {
    return this.getStringAttribute('environment_filter_type');
  }
  public set environmentFilterType(value: string) {
    this._environmentFilterType = value;
  }
  public resetEnvironmentFilterType() {
    this._environmentFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterTypeInput() {
    return this._environmentFilterType;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }
}

export class EncryptedTextUsageScopeList extends cdktf.ComplexList {
  public internalValue? : EncryptedTextUsageScope[] | cdktf.IResolvable

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
  public get(index: number): EncryptedTextUsageScopeOutputReference {
    return new EncryptedTextUsageScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text harness_encrypted_text}
*/
export class EncryptedText extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_encrypted_text";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptedText resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptedText to import
  * @param importFromId The id of the existing EncryptedText that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptedText to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_encrypted_text", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/encrypted_text harness_encrypted_text} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptedTextConfig
  */
  public constructor(scope: Construct, id: string, config: EncryptedTextConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_encrypted_text',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._inheritScopesFromSecretManager = config.inheritScopesFromSecretManager;
    this._name = config.name;
    this._scopedToAccount = config.scopedToAccount;
    this._secretManagerId = config.secretManagerId;
    this._secretReference = config.secretReference;
    this._value = config.value;
    this._usageScope.internalValue = config.usageScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_scopes_from_secret_manager - computed: false, optional: true, required: false
  private _inheritScopesFromSecretManager?: boolean | cdktf.IResolvable; 
  public get inheritScopesFromSecretManager() {
    return this.getBooleanAttribute('inherit_scopes_from_secret_manager');
  }
  public set inheritScopesFromSecretManager(value: boolean | cdktf.IResolvable) {
    this._inheritScopesFromSecretManager = value;
  }
  public resetInheritScopesFromSecretManager() {
    this._inheritScopesFromSecretManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritScopesFromSecretManagerInput() {
    return this._inheritScopesFromSecretManager;
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

  // scoped_to_account - computed: false, optional: true, required: false
  private _scopedToAccount?: boolean | cdktf.IResolvable; 
  public get scopedToAccount() {
    return this.getBooleanAttribute('scoped_to_account');
  }
  public set scopedToAccount(value: boolean | cdktf.IResolvable) {
    this._scopedToAccount = value;
  }
  public resetScopedToAccount() {
    this._scopedToAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedToAccountInput() {
    return this._scopedToAccount;
  }

  // secret_manager_id - computed: false, optional: false, required: true
  private _secretManagerId?: string; 
  public get secretManagerId() {
    return this.getStringAttribute('secret_manager_id');
  }
  public set secretManagerId(value: string) {
    this._secretManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerIdInput() {
    return this._secretManagerId;
  }

  // secret_reference - computed: false, optional: true, required: false
  private _secretReference?: string; 
  public get secretReference() {
    return this.getStringAttribute('secret_reference');
  }
  public set secretReference(value: string) {
    this._secretReference = value;
  }
  public resetSecretReference() {
    this._secretReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReferenceInput() {
    return this._secretReference;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // usage_scope - computed: false, optional: true, required: false
  private _usageScope = new EncryptedTextUsageScopeList(this, "usage_scope", true);
  public get usageScope() {
    return this._usageScope;
  }
  public putUsageScope(value: EncryptedTextUsageScope[] | cdktf.IResolvable) {
    this._usageScope.internalValue = value;
  }
  public resetUsageScope() {
    this._usageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageScopeInput() {
    return this._usageScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      inherit_scopes_from_secret_manager: cdktf.booleanToTerraform(this._inheritScopesFromSecretManager),
      name: cdktf.stringToTerraform(this._name),
      scoped_to_account: cdktf.booleanToTerraform(this._scopedToAccount),
      secret_manager_id: cdktf.stringToTerraform(this._secretManagerId),
      secret_reference: cdktf.stringToTerraform(this._secretReference),
      value: cdktf.stringToTerraform(this._value),
      usage_scope: cdktf.listMapper(encryptedTextUsageScopeToTerraform, true)(this._usageScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      inherit_scopes_from_secret_manager: {
        value: cdktf.booleanToHclTerraform(this._inheritScopesFromSecretManager),
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
      scoped_to_account: {
        value: cdktf.booleanToHclTerraform(this._scopedToAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_manager_id: {
        value: cdktf.stringToHclTerraform(this._secretManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_reference: {
        value: cdktf.stringToHclTerraform(this._secretReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_scope: {
        value: cdktf.listMapperHcl(encryptedTextUsageScopeToHclTerraform, true)(this._usageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EncryptedTextUsageScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
