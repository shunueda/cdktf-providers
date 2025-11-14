// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityUserCapabilitiesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}
  */
  readonly canUseApiKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}
  */
  readonly canUseAuthTokens?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}
  */
  readonly canUseConsolePassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}
  */
  readonly canUseCustomerSecretKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}
  */
  readonly canUseSmtpCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}
  */
  readonly userId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#timeouts IdentityUserCapabilitiesManagement#timeouts}
  */
  readonly timeouts?: IdentityUserCapabilitiesManagementTimeouts;
}
export interface IdentityUserCapabilitiesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}
  */
  readonly update?: string;
}

export function identityUserCapabilitiesManagementTimeoutsToTerraform(struct?: IdentityUserCapabilitiesManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function identityUserCapabilitiesManagementTimeoutsToHclTerraform(struct?: IdentityUserCapabilitiesManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityUserCapabilitiesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityUserCapabilitiesManagementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityUserCapabilitiesManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management oci_identity_user_capabilities_management}
*/
export class IdentityUserCapabilitiesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_user_capabilities_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityUserCapabilitiesManagement to import
  * @param importFromId The id of the existing IdentityUserCapabilitiesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityUserCapabilitiesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_user_capabilities_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/identity_user_capabilities_management oci_identity_user_capabilities_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityUserCapabilitiesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityUserCapabilitiesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_user_capabilities_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canUseApiKeys = config.canUseApiKeys;
    this._canUseAuthTokens = config.canUseAuthTokens;
    this._canUseConsolePassword = config.canUseConsolePassword;
    this._canUseCustomerSecretKeys = config.canUseCustomerSecretKeys;
    this._canUseSmtpCredentials = config.canUseSmtpCredentials;
    this._id = config.id;
    this._userId = config.userId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_use_api_keys - computed: true, optional: true, required: false
  private _canUseApiKeys?: boolean | cdktf.IResolvable; 
  public get canUseApiKeys() {
    return this.getBooleanAttribute('can_use_api_keys');
  }
  public set canUseApiKeys(value: boolean | cdktf.IResolvable) {
    this._canUseApiKeys = value;
  }
  public resetCanUseApiKeys() {
    this._canUseApiKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseApiKeysInput() {
    return this._canUseApiKeys;
  }

  // can_use_auth_tokens - computed: true, optional: true, required: false
  private _canUseAuthTokens?: boolean | cdktf.IResolvable; 
  public get canUseAuthTokens() {
    return this.getBooleanAttribute('can_use_auth_tokens');
  }
  public set canUseAuthTokens(value: boolean | cdktf.IResolvable) {
    this._canUseAuthTokens = value;
  }
  public resetCanUseAuthTokens() {
    this._canUseAuthTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseAuthTokensInput() {
    return this._canUseAuthTokens;
  }

  // can_use_console_password - computed: true, optional: true, required: false
  private _canUseConsolePassword?: boolean | cdktf.IResolvable; 
  public get canUseConsolePassword() {
    return this.getBooleanAttribute('can_use_console_password');
  }
  public set canUseConsolePassword(value: boolean | cdktf.IResolvable) {
    this._canUseConsolePassword = value;
  }
  public resetCanUseConsolePassword() {
    this._canUseConsolePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseConsolePasswordInput() {
    return this._canUseConsolePassword;
  }

  // can_use_customer_secret_keys - computed: true, optional: true, required: false
  private _canUseCustomerSecretKeys?: boolean | cdktf.IResolvable; 
  public get canUseCustomerSecretKeys() {
    return this.getBooleanAttribute('can_use_customer_secret_keys');
  }
  public set canUseCustomerSecretKeys(value: boolean | cdktf.IResolvable) {
    this._canUseCustomerSecretKeys = value;
  }
  public resetCanUseCustomerSecretKeys() {
    this._canUseCustomerSecretKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseCustomerSecretKeysInput() {
    return this._canUseCustomerSecretKeys;
  }

  // can_use_smtp_credentials - computed: true, optional: true, required: false
  private _canUseSmtpCredentials?: boolean | cdktf.IResolvable; 
  public get canUseSmtpCredentials() {
    return this.getBooleanAttribute('can_use_smtp_credentials');
  }
  public set canUseSmtpCredentials(value: boolean | cdktf.IResolvable) {
    this._canUseSmtpCredentials = value;
  }
  public resetCanUseSmtpCredentials() {
    this._canUseSmtpCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseSmtpCredentialsInput() {
    return this._canUseSmtpCredentials;
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

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityUserCapabilitiesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityUserCapabilitiesManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_use_api_keys: cdktf.booleanToTerraform(this._canUseApiKeys),
      can_use_auth_tokens: cdktf.booleanToTerraform(this._canUseAuthTokens),
      can_use_console_password: cdktf.booleanToTerraform(this._canUseConsolePassword),
      can_use_customer_secret_keys: cdktf.booleanToTerraform(this._canUseCustomerSecretKeys),
      can_use_smtp_credentials: cdktf.booleanToTerraform(this._canUseSmtpCredentials),
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.stringToTerraform(this._userId),
      timeouts: identityUserCapabilitiesManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_use_api_keys: {
        value: cdktf.booleanToHclTerraform(this._canUseApiKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_auth_tokens: {
        value: cdktf.booleanToHclTerraform(this._canUseAuthTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_console_password: {
        value: cdktf.booleanToHclTerraform(this._canUseConsolePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_customer_secret_keys: {
        value: cdktf.booleanToHclTerraform(this._canUseCustomerSecretKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_smtp_credentials: {
        value: cdktf.booleanToHclTerraform(this._canUseSmtpCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: identityUserCapabilitiesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityUserCapabilitiesManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
