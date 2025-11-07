// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure App Object ID (required if selected programmatic access)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#app_obj_id ProducerAzure#app_obj_id}
  */
  readonly appObjId?: string;
  /**
  * Azure Client ID (Application ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#azure_client_id ProducerAzure#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * Azure AD Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#azure_client_secret ProducerAzure#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Azure Tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#azure_tenant_id ProducerAzure#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#id ProducerAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#name ProducerAzure#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#producer_encryption_key_name ProducerAzure#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#secure_access_enable ProducerAzure#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#secure_access_url ProducerAzure#secure_access_url}
  */
  readonly secureAccessUrl?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#secure_access_web ProducerAzure#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * Secure browser via Akeyless Web Access Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#secure_access_web_browsing ProducerAzure#secure_access_web_browsing}
  */
  readonly secureAccessWebBrowsing?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: --tag Tag1 --tag Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#tags ProducerAzure#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#target_name ProducerAzure#target_name}
  */
  readonly targetName?: string;
  /**
  * Azure AD User Group Object ID (required if selected Portal access)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#user_group_obj_id ProducerAzure#user_group_obj_id}
  */
  readonly userGroupObjId?: string;
  /**
  * Enable Azure AD user portal access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#user_portal_access ProducerAzure#user_portal_access}
  */
  readonly userPortalAccess?: boolean | cdktf.IResolvable;
  /**
  * Azure AD User Principal Name (required if selected Portal access)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#user_principal_name ProducerAzure#user_principal_name}
  */
  readonly userPrincipalName?: string;
  /**
  * Enable Azure AD user programmatic access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#user_programmatic_access ProducerAzure#user_programmatic_access}
  */
  readonly userProgrammaticAccess?: boolean | cdktf.IResolvable;
  /**
  * Azure AD User Role Template ID (required if selected Portal access)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#user_role_template_id ProducerAzure#user_role_template_id}
  */
  readonly userRoleTemplateId?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#user_ttl ProducerAzure#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure akeyless_producer_azure}
*/
export class ProducerAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerAzure to import
  * @param importFromId The id of the existing ProducerAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_azure akeyless_producer_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerAzureConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_azure',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appObjId = config.appObjId;
    this._azureClientId = config.azureClientId;
    this._azureClientSecret = config.azureClientSecret;
    this._azureTenantId = config.azureTenantId;
    this._id = config.id;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessUrl = config.secureAccessUrl;
    this._secureAccessWeb = config.secureAccessWeb;
    this._secureAccessWebBrowsing = config.secureAccessWebBrowsing;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userGroupObjId = config.userGroupObjId;
    this._userPortalAccess = config.userPortalAccess;
    this._userPrincipalName = config.userPrincipalName;
    this._userProgrammaticAccess = config.userProgrammaticAccess;
    this._userRoleTemplateId = config.userRoleTemplateId;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_obj_id - computed: false, optional: true, required: false
  private _appObjId?: string; 
  public get appObjId() {
    return this.getStringAttribute('app_obj_id');
  }
  public set appObjId(value: string) {
    this._appObjId = value;
  }
  public resetAppObjId() {
    this._appObjId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appObjIdInput() {
    return this._appObjId;
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

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
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

  // producer_encryption_key_name - computed: false, optional: true, required: false
  private _producerEncryptionKeyName?: string; 
  public get producerEncryptionKeyName() {
    return this.getStringAttribute('producer_encryption_key_name');
  }
  public set producerEncryptionKeyName(value: string) {
    this._producerEncryptionKeyName = value;
  }
  public resetProducerEncryptionKeyName() {
    this._producerEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyNameInput() {
    return this._producerEncryptionKeyName;
  }

  // secure_access_enable - computed: false, optional: true, required: false
  private _secureAccessEnable?: string; 
  public get secureAccessEnable() {
    return this.getStringAttribute('secure_access_enable');
  }
  public set secureAccessEnable(value: string) {
    this._secureAccessEnable = value;
  }
  public resetSecureAccessEnable() {
    this._secureAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessEnableInput() {
    return this._secureAccessEnable;
  }

  // secure_access_url - computed: true, optional: true, required: false
  private _secureAccessUrl?: string; 
  public get secureAccessUrl() {
    return this.getStringAttribute('secure_access_url');
  }
  public set secureAccessUrl(value: string) {
    this._secureAccessUrl = value;
  }
  public resetSecureAccessUrl() {
    this._secureAccessUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessUrlInput() {
    return this._secureAccessUrl;
  }

  // secure_access_web - computed: false, optional: true, required: false
  private _secureAccessWeb?: boolean | cdktf.IResolvable; 
  public get secureAccessWeb() {
    return this.getBooleanAttribute('secure_access_web');
  }
  public set secureAccessWeb(value: boolean | cdktf.IResolvable) {
    this._secureAccessWeb = value;
  }
  public resetSecureAccessWeb() {
    this._secureAccessWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebInput() {
    return this._secureAccessWeb;
  }

  // secure_access_web_browsing - computed: false, optional: true, required: false
  private _secureAccessWebBrowsing?: boolean | cdktf.IResolvable; 
  public get secureAccessWebBrowsing() {
    return this.getBooleanAttribute('secure_access_web_browsing');
  }
  public set secureAccessWebBrowsing(value: boolean | cdktf.IResolvable) {
    this._secureAccessWebBrowsing = value;
  }
  public resetSecureAccessWebBrowsing() {
    this._secureAccessWebBrowsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebBrowsingInput() {
    return this._secureAccessWebBrowsing;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_group_obj_id - computed: false, optional: true, required: false
  private _userGroupObjId?: string; 
  public get userGroupObjId() {
    return this.getStringAttribute('user_group_obj_id');
  }
  public set userGroupObjId(value: string) {
    this._userGroupObjId = value;
  }
  public resetUserGroupObjId() {
    this._userGroupObjId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupObjIdInput() {
    return this._userGroupObjId;
  }

  // user_portal_access - computed: false, optional: true, required: false
  private _userPortalAccess?: boolean | cdktf.IResolvable; 
  public get userPortalAccess() {
    return this.getBooleanAttribute('user_portal_access');
  }
  public set userPortalAccess(value: boolean | cdktf.IResolvable) {
    this._userPortalAccess = value;
  }
  public resetUserPortalAccess() {
    this._userPortalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPortalAccessInput() {
    return this._userPortalAccess;
  }

  // user_principal_name - computed: false, optional: true, required: false
  private _userPrincipalName?: string; 
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
  public set userPrincipalName(value: string) {
    this._userPrincipalName = value;
  }
  public resetUserPrincipalName() {
    this._userPrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalNameInput() {
    return this._userPrincipalName;
  }

  // user_programmatic_access - computed: false, optional: true, required: false
  private _userProgrammaticAccess?: boolean | cdktf.IResolvable; 
  public get userProgrammaticAccess() {
    return this.getBooleanAttribute('user_programmatic_access');
  }
  public set userProgrammaticAccess(value: boolean | cdktf.IResolvable) {
    this._userProgrammaticAccess = value;
  }
  public resetUserProgrammaticAccess() {
    this._userProgrammaticAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProgrammaticAccessInput() {
    return this._userProgrammaticAccess;
  }

  // user_role_template_id - computed: false, optional: true, required: false
  private _userRoleTemplateId?: string; 
  public get userRoleTemplateId() {
    return this.getStringAttribute('user_role_template_id');
  }
  public set userRoleTemplateId(value: string) {
    this._userRoleTemplateId = value;
  }
  public resetUserRoleTemplateId() {
    this._userRoleTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleTemplateIdInput() {
    return this._userRoleTemplateId;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_obj_id: cdktf.stringToTerraform(this._appObjId),
      azure_client_id: cdktf.stringToTerraform(this._azureClientId),
      azure_client_secret: cdktf.stringToTerraform(this._azureClientSecret),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_url: cdktf.stringToTerraform(this._secureAccessUrl),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      secure_access_web_browsing: cdktf.booleanToTerraform(this._secureAccessWebBrowsing),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_group_obj_id: cdktf.stringToTerraform(this._userGroupObjId),
      user_portal_access: cdktf.booleanToTerraform(this._userPortalAccess),
      user_principal_name: cdktf.stringToTerraform(this._userPrincipalName),
      user_programmatic_access: cdktf.booleanToTerraform(this._userProgrammaticAccess),
      user_role_template_id: cdktf.stringToTerraform(this._userRoleTemplateId),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_obj_id: {
        value: cdktf.stringToHclTerraform(this._appObjId),
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
      azure_client_secret: {
        value: cdktf.stringToHclTerraform(this._azureClientSecret),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_enable: {
        value: cdktf.stringToHclTerraform(this._secureAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_url: {
        value: cdktf.stringToHclTerraform(this._secureAccessUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_web: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_web_browsing: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWebBrowsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_obj_id: {
        value: cdktf.stringToHclTerraform(this._userGroupObjId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_portal_access: {
        value: cdktf.booleanToHclTerraform(this._userPortalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_principal_name: {
        value: cdktf.stringToHclTerraform(this._userPrincipalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_programmatic_access: {
        value: cdktf.booleanToHclTerraform(this._userProgrammaticAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_role_template_id: {
        value: cdktf.stringToHclTerraform(this._userRoleTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
