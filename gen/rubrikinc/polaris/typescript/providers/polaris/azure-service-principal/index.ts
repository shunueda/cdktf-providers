// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureServicePrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure app registration application ID. Also known as the client ID. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#app_id AzureServicePrincipal#app_id}
  */
  readonly appId?: string;
  /**
  * Azure app registration display name. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#app_name AzureServicePrincipal#app_name}
  */
  readonly appName?: string;
  /**
  * Azure app registration client secret. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#app_secret AzureServicePrincipal#app_secret}
  */
  readonly appSecret?: string;
  /**
  * Path to a custom service principal file. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#credentials AzureServicePrincipal#credentials}
  */
  readonly credentials?: string;
  /**
  * Permissions updated signal. When this field is updated, the provider will notify RSC that permissions has been updated. Use this field with the `polaris_azure_permissions` data source. **Deprecated:** use the `polaris_azure_subscription` resource's `permissions` fields instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#permissions AzureServicePrincipal#permissions}
  */
  readonly permissions?: string;
  /**
  * Permissions updated signal. **Deprecated:** use `permissions` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#permissions_hash AzureServicePrincipal#permissions_hash}
  */
  readonly permissionsHash?: string;
  /**
  * Path to an Azure service principal created with the Azure SDK using the `--sdk-auth` parameter. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#sdk_auth AzureServicePrincipal#sdk_auth}
  */
  readonly sdkAuth?: string;
  /**
  * Azure tenant primary domain. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#tenant_domain AzureServicePrincipal#tenant_domain}
  */
  readonly tenantDomain: string;
  /**
  * Azure tenant ID. Also known as the directory ID. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#tenant_id AzureServicePrincipal#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal polaris_azure_service_principal}
*/
export class AzureServicePrincipal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_service_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureServicePrincipal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureServicePrincipal to import
  * @param importFromId The id of the existing AzureServicePrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureServicePrincipal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_service_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_service_principal polaris_azure_service_principal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureServicePrincipalConfig
  */
  public constructor(scope: Construct, id: string, config: AzureServicePrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._appName = config.appName;
    this._appSecret = config.appSecret;
    this._credentials = config.credentials;
    this._permissions = config.permissions;
    this._permissionsHash = config.permissionsHash;
    this._sdkAuth = config.sdkAuth;
    this._tenantDomain = config.tenantDomain;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_secret - computed: false, optional: true, required: false
  private _appSecret?: string; 
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  public resetAppSecret() {
    this._appSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // permissions_hash - computed: false, optional: true, required: false
  private _permissionsHash?: string; 
  public get permissionsHash() {
    return this.getStringAttribute('permissions_hash');
  }
  public set permissionsHash(value: string) {
    this._permissionsHash = value;
  }
  public resetPermissionsHash() {
    this._permissionsHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsHashInput() {
    return this._permissionsHash;
  }

  // sdk_auth - computed: false, optional: true, required: false
  private _sdkAuth?: string; 
  public get sdkAuth() {
    return this.getStringAttribute('sdk_auth');
  }
  public set sdkAuth(value: string) {
    this._sdkAuth = value;
  }
  public resetSdkAuth() {
    this._sdkAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkAuthInput() {
    return this._sdkAuth;
  }

  // tenant_domain - computed: false, optional: false, required: true
  private _tenantDomain?: string; 
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
  public set tenantDomain(value: string) {
    this._tenantDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDomainInput() {
    return this._tenantDomain;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      app_name: cdktf.stringToTerraform(this._appName),
      app_secret: cdktf.stringToTerraform(this._appSecret),
      credentials: cdktf.stringToTerraform(this._credentials),
      permissions: cdktf.stringToTerraform(this._permissions),
      permissions_hash: cdktf.stringToTerraform(this._permissionsHash),
      sdk_auth: cdktf.stringToTerraform(this._sdkAuth),
      tenant_domain: cdktf.stringToTerraform(this._tenantDomain),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_secret: {
        value: cdktf.stringToHclTerraform(this._appSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_hash: {
        value: cdktf.stringToHclTerraform(this._permissionsHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdk_auth: {
        value: cdktf.stringToHclTerraform(this._sdkAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_domain: {
        value: cdktf.stringToHclTerraform(this._tenantDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
