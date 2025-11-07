// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account ID of the service account.
  * 
  *  -> **Note** For Active Directory, this is the username. Username should be in `domain\username` format. For AzureAD, this is the application ID. The account ID must be in lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#account_id ServiceAccount#account_id}
  */
  readonly accountId: string;
  /**
  * The password for the service account.
  * 
  *  -> **Note** For Active Directory, this is the password. For AzureAD, this is the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#account_secret ServiceAccount#account_secret}
  */
  readonly accountSecret: string;
  /**
  * The format of the account secret. Possible values are `PlainText` and `Base64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#account_secret_format ServiceAccount#account_secret_format}
  */
  readonly accountSecretFormat: string;
  /**
  * A description for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#description ServiceAccount#description}
  */
  readonly description?: string;
  /**
  * A friendly name for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#display_name ServiceAccount#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates whether the service account can perform Microsoft Intune enrolled device management. This is applicable only for AzureAD identity provider type.
  * 
  *  -> **Note** 'DeviceManagementManagedDevices.ReadWrite.All' permission is required for the service principal before enabling this capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#enable_intune_enrolled_device_management ServiceAccount#enable_intune_enrolled_device_management}
  */
  readonly enableIntuneEnrolledDeviceManagement?: boolean | cdktf.IResolvable;
  /**
  * The identity provider identifier for the service account.
  * 
  *  -> **Note** For Active Directory, this is the domain name in the FQDN format. For example, `domain.com`. For AzureAD, this is the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#identity_provider_identifier ServiceAccount#identity_provider_identifier}
  */
  readonly identityProviderIdentifier: string;
  /**
  * The identity provider type for the service account. Possible values are `ActiveDirectory` and `AzureAD`.
  * 
  *  -> **Note** 'Device.ReadWrite.All' permission is required for the service principal for Azure AD joined device management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#identity_provider_type ServiceAccount#identity_provider_type}
  */
  readonly identityProviderType: string;
  /**
  * The IDs of the scopes for the service account to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#scopes ServiceAccount#scopes}
  */
  readonly scopes?: string[];
  /**
  * The UTC expiration date of the account secret.
  * 
  *  -> **Note** The expected format is `YYYY-MM-DD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#secret_expiry_time ServiceAccount#secret_expiry_time}
  */
  readonly secretExpiryTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account citrix_service_account}
*/
export class ServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccount to import
  * @param importFromId The id of the existing ServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/service_account citrix_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_service_account',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._accountSecret = config.accountSecret;
    this._accountSecretFormat = config.accountSecretFormat;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableIntuneEnrolledDeviceManagement = config.enableIntuneEnrolledDeviceManagement;
    this._identityProviderIdentifier = config.identityProviderIdentifier;
    this._identityProviderType = config.identityProviderType;
    this._scopes = config.scopes;
    this._secretExpiryTime = config.secretExpiryTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_secret - computed: false, optional: false, required: true
  private _accountSecret?: string; 
  public get accountSecret() {
    return this.getStringAttribute('account_secret');
  }
  public set accountSecret(value: string) {
    this._accountSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSecretInput() {
    return this._accountSecret;
  }

  // account_secret_format - computed: false, optional: false, required: true
  private _accountSecretFormat?: string; 
  public get accountSecretFormat() {
    return this.getStringAttribute('account_secret_format');
  }
  public set accountSecretFormat(value: string) {
    this._accountSecretFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSecretFormatInput() {
    return this._accountSecretFormat;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_intune_enrolled_device_management - computed: false, optional: true, required: false
  private _enableIntuneEnrolledDeviceManagement?: boolean | cdktf.IResolvable; 
  public get enableIntuneEnrolledDeviceManagement() {
    return this.getBooleanAttribute('enable_intune_enrolled_device_management');
  }
  public set enableIntuneEnrolledDeviceManagement(value: boolean | cdktf.IResolvable) {
    this._enableIntuneEnrolledDeviceManagement = value;
  }
  public resetEnableIntuneEnrolledDeviceManagement() {
    this._enableIntuneEnrolledDeviceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntuneEnrolledDeviceManagementInput() {
    return this._enableIntuneEnrolledDeviceManagement;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_identifier - computed: false, optional: false, required: true
  private _identityProviderIdentifier?: string; 
  public get identityProviderIdentifier() {
    return this.getStringAttribute('identity_provider_identifier');
  }
  public set identityProviderIdentifier(value: string) {
    this._identityProviderIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdentifierInput() {
    return this._identityProviderIdentifier;
  }

  // identity_provider_type - computed: false, optional: false, required: true
  private _identityProviderType?: string; 
  public get identityProviderType() {
    return this.getStringAttribute('identity_provider_type');
  }
  public set identityProviderType(value: string) {
    this._identityProviderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderTypeInput() {
    return this._identityProviderType;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_expiry_time - computed: false, optional: true, required: false
  private _secretExpiryTime?: string; 
  public get secretExpiryTime() {
    return this.getStringAttribute('secret_expiry_time');
  }
  public set secretExpiryTime(value: string) {
    this._secretExpiryTime = value;
  }
  public resetSecretExpiryTime() {
    this._secretExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretExpiryTimeInput() {
    return this._secretExpiryTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      account_secret: cdktf.stringToTerraform(this._accountSecret),
      account_secret_format: cdktf.stringToTerraform(this._accountSecretFormat),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_intune_enrolled_device_management: cdktf.booleanToTerraform(this._enableIntuneEnrolledDeviceManagement),
      identity_provider_identifier: cdktf.stringToTerraform(this._identityProviderIdentifier),
      identity_provider_type: cdktf.stringToTerraform(this._identityProviderType),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      secret_expiry_time: cdktf.stringToTerraform(this._secretExpiryTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_secret: {
        value: cdktf.stringToHclTerraform(this._accountSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_secret_format: {
        value: cdktf.stringToHclTerraform(this._accountSecretFormat),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_intune_enrolled_device_management: {
        value: cdktf.booleanToHclTerraform(this._enableIntuneEnrolledDeviceManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identity_provider_identifier: {
        value: cdktf.stringToHclTerraform(this._identityProviderIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_type: {
        value: cdktf.stringToHclTerraform(this._identityProviderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secret_expiry_time: {
        value: cdktf.stringToHclTerraform(this._secretExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
