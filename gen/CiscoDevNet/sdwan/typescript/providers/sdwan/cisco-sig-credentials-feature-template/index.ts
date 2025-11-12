// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoSigCredentialsFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#description CiscoSigCredentialsFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#device_types CiscoSigCredentialsFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#name CiscoSigCredentialsFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#umbrella_api_key CiscoSigCredentialsFeatureTemplate#umbrella_api_key}
  */
  readonly umbrellaApiKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#umbrella_api_key_variable CiscoSigCredentialsFeatureTemplate#umbrella_api_key_variable}
  */
  readonly umbrellaApiKeyVariable?: string;
  /**
  * API Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#umbrella_api_secret CiscoSigCredentialsFeatureTemplate#umbrella_api_secret}
  */
  readonly umbrellaApiSecret?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#umbrella_api_secret_variable CiscoSigCredentialsFeatureTemplate#umbrella_api_secret_variable}
  */
  readonly umbrellaApiSecretVariable?: string;
  /**
  * Ord ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#umbrella_organization_id CiscoSigCredentialsFeatureTemplate#umbrella_organization_id}
  */
  readonly umbrellaOrganizationId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#umbrella_organization_id_variable CiscoSigCredentialsFeatureTemplate#umbrella_organization_id_variable}
  */
  readonly umbrellaOrganizationIdVariable?: string;
  /**
  * Third Party Cloud Name
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_cloud_name CiscoSigCredentialsFeatureTemplate#zscaler_cloud_name}
  */
  readonly zscalerCloudName?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_cloud_name_variable CiscoSigCredentialsFeatureTemplate#zscaler_cloud_name_variable}
  */
  readonly zscalerCloudNameVariable?: string;
  /**
  * Organization Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_organization CiscoSigCredentialsFeatureTemplate#zscaler_organization}
  */
  readonly zscalerOrganization?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_organization_variable CiscoSigCredentialsFeatureTemplate#zscaler_organization_variable}
  */
  readonly zscalerOrganizationVariable?: string;
  /**
  * Partner API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_api_key CiscoSigCredentialsFeatureTemplate#zscaler_partner_api_key}
  */
  readonly zscalerPartnerApiKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_api_key_variable CiscoSigCredentialsFeatureTemplate#zscaler_partner_api_key_variable}
  */
  readonly zscalerPartnerApiKeyVariable?: string;
  /**
  * Partner Base URI to be used in REST calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_base_uri CiscoSigCredentialsFeatureTemplate#zscaler_partner_base_uri}
  */
  readonly zscalerPartnerBaseUri?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_base_uri_variable CiscoSigCredentialsFeatureTemplate#zscaler_partner_base_uri_variable}
  */
  readonly zscalerPartnerBaseUriVariable?: string;
  /**
  * Partner Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_password CiscoSigCredentialsFeatureTemplate#zscaler_partner_password}
  */
  readonly zscalerPartnerPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_password_variable CiscoSigCredentialsFeatureTemplate#zscaler_partner_password_variable}
  */
  readonly zscalerPartnerPasswordVariable?: string;
  /**
  * Partner User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_username CiscoSigCredentialsFeatureTemplate#zscaler_partner_username}
  */
  readonly zscalerPartnerUsername?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_partner_username_variable CiscoSigCredentialsFeatureTemplate#zscaler_partner_username_variable}
  */
  readonly zscalerPartnerUsernameVariable?: string;
  /**
  * Password of Zscaler partner account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_password CiscoSigCredentialsFeatureTemplate#zscaler_password}
  */
  readonly zscalerPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_password_variable CiscoSigCredentialsFeatureTemplate#zscaler_password_variable}
  */
  readonly zscalerPasswordVariable?: string;
  /**
  * Username of Zscaler partner account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_username CiscoSigCredentialsFeatureTemplate#zscaler_username}
  */
  readonly zscalerUsername?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#zscaler_username_variable CiscoSigCredentialsFeatureTemplate#zscaler_username_variable}
  */
  readonly zscalerUsernameVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template sdwan_cisco_sig_credentials_feature_template}
*/
export class CiscoSigCredentialsFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_sig_credentials_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoSigCredentialsFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoSigCredentialsFeatureTemplate to import
  * @param importFromId The id of the existing CiscoSigCredentialsFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoSigCredentialsFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_sig_credentials_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_sig_credentials_feature_template sdwan_cisco_sig_credentials_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoSigCredentialsFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoSigCredentialsFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_sig_credentials_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._deviceTypes = config.deviceTypes;
    this._name = config.name;
    this._umbrellaApiKey = config.umbrellaApiKey;
    this._umbrellaApiKeyVariable = config.umbrellaApiKeyVariable;
    this._umbrellaApiSecret = config.umbrellaApiSecret;
    this._umbrellaApiSecretVariable = config.umbrellaApiSecretVariable;
    this._umbrellaOrganizationId = config.umbrellaOrganizationId;
    this._umbrellaOrganizationIdVariable = config.umbrellaOrganizationIdVariable;
    this._zscalerCloudName = config.zscalerCloudName;
    this._zscalerCloudNameVariable = config.zscalerCloudNameVariable;
    this._zscalerOrganization = config.zscalerOrganization;
    this._zscalerOrganizationVariable = config.zscalerOrganizationVariable;
    this._zscalerPartnerApiKey = config.zscalerPartnerApiKey;
    this._zscalerPartnerApiKeyVariable = config.zscalerPartnerApiKeyVariable;
    this._zscalerPartnerBaseUri = config.zscalerPartnerBaseUri;
    this._zscalerPartnerBaseUriVariable = config.zscalerPartnerBaseUriVariable;
    this._zscalerPartnerPassword = config.zscalerPartnerPassword;
    this._zscalerPartnerPasswordVariable = config.zscalerPartnerPasswordVariable;
    this._zscalerPartnerUsername = config.zscalerPartnerUsername;
    this._zscalerPartnerUsernameVariable = config.zscalerPartnerUsernameVariable;
    this._zscalerPassword = config.zscalerPassword;
    this._zscalerPasswordVariable = config.zscalerPasswordVariable;
    this._zscalerUsername = config.zscalerUsername;
    this._zscalerUsernameVariable = config.zscalerUsernameVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // umbrella_api_key - computed: false, optional: true, required: false
  private _umbrellaApiKey?: string; 
  public get umbrellaApiKey() {
    return this.getStringAttribute('umbrella_api_key');
  }
  public set umbrellaApiKey(value: string) {
    this._umbrellaApiKey = value;
  }
  public resetUmbrellaApiKey() {
    this._umbrellaApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaApiKeyInput() {
    return this._umbrellaApiKey;
  }

  // umbrella_api_key_variable - computed: false, optional: true, required: false
  private _umbrellaApiKeyVariable?: string; 
  public get umbrellaApiKeyVariable() {
    return this.getStringAttribute('umbrella_api_key_variable');
  }
  public set umbrellaApiKeyVariable(value: string) {
    this._umbrellaApiKeyVariable = value;
  }
  public resetUmbrellaApiKeyVariable() {
    this._umbrellaApiKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaApiKeyVariableInput() {
    return this._umbrellaApiKeyVariable;
  }

  // umbrella_api_secret - computed: false, optional: true, required: false
  private _umbrellaApiSecret?: string; 
  public get umbrellaApiSecret() {
    return this.getStringAttribute('umbrella_api_secret');
  }
  public set umbrellaApiSecret(value: string) {
    this._umbrellaApiSecret = value;
  }
  public resetUmbrellaApiSecret() {
    this._umbrellaApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaApiSecretInput() {
    return this._umbrellaApiSecret;
  }

  // umbrella_api_secret_variable - computed: false, optional: true, required: false
  private _umbrellaApiSecretVariable?: string; 
  public get umbrellaApiSecretVariable() {
    return this.getStringAttribute('umbrella_api_secret_variable');
  }
  public set umbrellaApiSecretVariable(value: string) {
    this._umbrellaApiSecretVariable = value;
  }
  public resetUmbrellaApiSecretVariable() {
    this._umbrellaApiSecretVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaApiSecretVariableInput() {
    return this._umbrellaApiSecretVariable;
  }

  // umbrella_organization_id - computed: false, optional: true, required: false
  private _umbrellaOrganizationId?: string; 
  public get umbrellaOrganizationId() {
    return this.getStringAttribute('umbrella_organization_id');
  }
  public set umbrellaOrganizationId(value: string) {
    this._umbrellaOrganizationId = value;
  }
  public resetUmbrellaOrganizationId() {
    this._umbrellaOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaOrganizationIdInput() {
    return this._umbrellaOrganizationId;
  }

  // umbrella_organization_id_variable - computed: false, optional: true, required: false
  private _umbrellaOrganizationIdVariable?: string; 
  public get umbrellaOrganizationIdVariable() {
    return this.getStringAttribute('umbrella_organization_id_variable');
  }
  public set umbrellaOrganizationIdVariable(value: string) {
    this._umbrellaOrganizationIdVariable = value;
  }
  public resetUmbrellaOrganizationIdVariable() {
    this._umbrellaOrganizationIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaOrganizationIdVariableInput() {
    return this._umbrellaOrganizationIdVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // zscaler_cloud_name - computed: false, optional: true, required: false
  private _zscalerCloudName?: number; 
  public get zscalerCloudName() {
    return this.getNumberAttribute('zscaler_cloud_name');
  }
  public set zscalerCloudName(value: number) {
    this._zscalerCloudName = value;
  }
  public resetZscalerCloudName() {
    this._zscalerCloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerCloudNameInput() {
    return this._zscalerCloudName;
  }

  // zscaler_cloud_name_variable - computed: false, optional: true, required: false
  private _zscalerCloudNameVariable?: string; 
  public get zscalerCloudNameVariable() {
    return this.getStringAttribute('zscaler_cloud_name_variable');
  }
  public set zscalerCloudNameVariable(value: string) {
    this._zscalerCloudNameVariable = value;
  }
  public resetZscalerCloudNameVariable() {
    this._zscalerCloudNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerCloudNameVariableInput() {
    return this._zscalerCloudNameVariable;
  }

  // zscaler_organization - computed: false, optional: true, required: false
  private _zscalerOrganization?: string; 
  public get zscalerOrganization() {
    return this.getStringAttribute('zscaler_organization');
  }
  public set zscalerOrganization(value: string) {
    this._zscalerOrganization = value;
  }
  public resetZscalerOrganization() {
    this._zscalerOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerOrganizationInput() {
    return this._zscalerOrganization;
  }

  // zscaler_organization_variable - computed: false, optional: true, required: false
  private _zscalerOrganizationVariable?: string; 
  public get zscalerOrganizationVariable() {
    return this.getStringAttribute('zscaler_organization_variable');
  }
  public set zscalerOrganizationVariable(value: string) {
    this._zscalerOrganizationVariable = value;
  }
  public resetZscalerOrganizationVariable() {
    this._zscalerOrganizationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerOrganizationVariableInput() {
    return this._zscalerOrganizationVariable;
  }

  // zscaler_partner_api_key - computed: false, optional: true, required: false
  private _zscalerPartnerApiKey?: string; 
  public get zscalerPartnerApiKey() {
    return this.getStringAttribute('zscaler_partner_api_key');
  }
  public set zscalerPartnerApiKey(value: string) {
    this._zscalerPartnerApiKey = value;
  }
  public resetZscalerPartnerApiKey() {
    this._zscalerPartnerApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerApiKeyInput() {
    return this._zscalerPartnerApiKey;
  }

  // zscaler_partner_api_key_variable - computed: false, optional: true, required: false
  private _zscalerPartnerApiKeyVariable?: string; 
  public get zscalerPartnerApiKeyVariable() {
    return this.getStringAttribute('zscaler_partner_api_key_variable');
  }
  public set zscalerPartnerApiKeyVariable(value: string) {
    this._zscalerPartnerApiKeyVariable = value;
  }
  public resetZscalerPartnerApiKeyVariable() {
    this._zscalerPartnerApiKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerApiKeyVariableInput() {
    return this._zscalerPartnerApiKeyVariable;
  }

  // zscaler_partner_base_uri - computed: false, optional: true, required: false
  private _zscalerPartnerBaseUri?: string; 
  public get zscalerPartnerBaseUri() {
    return this.getStringAttribute('zscaler_partner_base_uri');
  }
  public set zscalerPartnerBaseUri(value: string) {
    this._zscalerPartnerBaseUri = value;
  }
  public resetZscalerPartnerBaseUri() {
    this._zscalerPartnerBaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerBaseUriInput() {
    return this._zscalerPartnerBaseUri;
  }

  // zscaler_partner_base_uri_variable - computed: false, optional: true, required: false
  private _zscalerPartnerBaseUriVariable?: string; 
  public get zscalerPartnerBaseUriVariable() {
    return this.getStringAttribute('zscaler_partner_base_uri_variable');
  }
  public set zscalerPartnerBaseUriVariable(value: string) {
    this._zscalerPartnerBaseUriVariable = value;
  }
  public resetZscalerPartnerBaseUriVariable() {
    this._zscalerPartnerBaseUriVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerBaseUriVariableInput() {
    return this._zscalerPartnerBaseUriVariable;
  }

  // zscaler_partner_password - computed: false, optional: true, required: false
  private _zscalerPartnerPassword?: string; 
  public get zscalerPartnerPassword() {
    return this.getStringAttribute('zscaler_partner_password');
  }
  public set zscalerPartnerPassword(value: string) {
    this._zscalerPartnerPassword = value;
  }
  public resetZscalerPartnerPassword() {
    this._zscalerPartnerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerPasswordInput() {
    return this._zscalerPartnerPassword;
  }

  // zscaler_partner_password_variable - computed: false, optional: true, required: false
  private _zscalerPartnerPasswordVariable?: string; 
  public get zscalerPartnerPasswordVariable() {
    return this.getStringAttribute('zscaler_partner_password_variable');
  }
  public set zscalerPartnerPasswordVariable(value: string) {
    this._zscalerPartnerPasswordVariable = value;
  }
  public resetZscalerPartnerPasswordVariable() {
    this._zscalerPartnerPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerPasswordVariableInput() {
    return this._zscalerPartnerPasswordVariable;
  }

  // zscaler_partner_username - computed: false, optional: true, required: false
  private _zscalerPartnerUsername?: string; 
  public get zscalerPartnerUsername() {
    return this.getStringAttribute('zscaler_partner_username');
  }
  public set zscalerPartnerUsername(value: string) {
    this._zscalerPartnerUsername = value;
  }
  public resetZscalerPartnerUsername() {
    this._zscalerPartnerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerUsernameInput() {
    return this._zscalerPartnerUsername;
  }

  // zscaler_partner_username_variable - computed: false, optional: true, required: false
  private _zscalerPartnerUsernameVariable?: string; 
  public get zscalerPartnerUsernameVariable() {
    return this.getStringAttribute('zscaler_partner_username_variable');
  }
  public set zscalerPartnerUsernameVariable(value: string) {
    this._zscalerPartnerUsernameVariable = value;
  }
  public resetZscalerPartnerUsernameVariable() {
    this._zscalerPartnerUsernameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPartnerUsernameVariableInput() {
    return this._zscalerPartnerUsernameVariable;
  }

  // zscaler_password - computed: false, optional: true, required: false
  private _zscalerPassword?: string; 
  public get zscalerPassword() {
    return this.getStringAttribute('zscaler_password');
  }
  public set zscalerPassword(value: string) {
    this._zscalerPassword = value;
  }
  public resetZscalerPassword() {
    this._zscalerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPasswordInput() {
    return this._zscalerPassword;
  }

  // zscaler_password_variable - computed: false, optional: true, required: false
  private _zscalerPasswordVariable?: string; 
  public get zscalerPasswordVariable() {
    return this.getStringAttribute('zscaler_password_variable');
  }
  public set zscalerPasswordVariable(value: string) {
    this._zscalerPasswordVariable = value;
  }
  public resetZscalerPasswordVariable() {
    this._zscalerPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPasswordVariableInput() {
    return this._zscalerPasswordVariable;
  }

  // zscaler_username - computed: false, optional: true, required: false
  private _zscalerUsername?: string; 
  public get zscalerUsername() {
    return this.getStringAttribute('zscaler_username');
  }
  public set zscalerUsername(value: string) {
    this._zscalerUsername = value;
  }
  public resetZscalerUsername() {
    this._zscalerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerUsernameInput() {
    return this._zscalerUsername;
  }

  // zscaler_username_variable - computed: false, optional: true, required: false
  private _zscalerUsernameVariable?: string; 
  public get zscalerUsernameVariable() {
    return this.getStringAttribute('zscaler_username_variable');
  }
  public set zscalerUsernameVariable(value: string) {
    this._zscalerUsernameVariable = value;
  }
  public resetZscalerUsernameVariable() {
    this._zscalerUsernameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerUsernameVariableInput() {
    return this._zscalerUsernameVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      name: cdktf.stringToTerraform(this._name),
      umbrella_api_key: cdktf.stringToTerraform(this._umbrellaApiKey),
      umbrella_api_key_variable: cdktf.stringToTerraform(this._umbrellaApiKeyVariable),
      umbrella_api_secret: cdktf.stringToTerraform(this._umbrellaApiSecret),
      umbrella_api_secret_variable: cdktf.stringToTerraform(this._umbrellaApiSecretVariable),
      umbrella_organization_id: cdktf.stringToTerraform(this._umbrellaOrganizationId),
      umbrella_organization_id_variable: cdktf.stringToTerraform(this._umbrellaOrganizationIdVariable),
      zscaler_cloud_name: cdktf.numberToTerraform(this._zscalerCloudName),
      zscaler_cloud_name_variable: cdktf.stringToTerraform(this._zscalerCloudNameVariable),
      zscaler_organization: cdktf.stringToTerraform(this._zscalerOrganization),
      zscaler_organization_variable: cdktf.stringToTerraform(this._zscalerOrganizationVariable),
      zscaler_partner_api_key: cdktf.stringToTerraform(this._zscalerPartnerApiKey),
      zscaler_partner_api_key_variable: cdktf.stringToTerraform(this._zscalerPartnerApiKeyVariable),
      zscaler_partner_base_uri: cdktf.stringToTerraform(this._zscalerPartnerBaseUri),
      zscaler_partner_base_uri_variable: cdktf.stringToTerraform(this._zscalerPartnerBaseUriVariable),
      zscaler_partner_password: cdktf.stringToTerraform(this._zscalerPartnerPassword),
      zscaler_partner_password_variable: cdktf.stringToTerraform(this._zscalerPartnerPasswordVariable),
      zscaler_partner_username: cdktf.stringToTerraform(this._zscalerPartnerUsername),
      zscaler_partner_username_variable: cdktf.stringToTerraform(this._zscalerPartnerUsernameVariable),
      zscaler_password: cdktf.stringToTerraform(this._zscalerPassword),
      zscaler_password_variable: cdktf.stringToTerraform(this._zscalerPasswordVariable),
      zscaler_username: cdktf.stringToTerraform(this._zscalerUsername),
      zscaler_username_variable: cdktf.stringToTerraform(this._zscalerUsernameVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
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
      umbrella_api_key: {
        value: cdktf.stringToHclTerraform(this._umbrellaApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      umbrella_api_key_variable: {
        value: cdktf.stringToHclTerraform(this._umbrellaApiKeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      umbrella_api_secret: {
        value: cdktf.stringToHclTerraform(this._umbrellaApiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      umbrella_api_secret_variable: {
        value: cdktf.stringToHclTerraform(this._umbrellaApiSecretVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      umbrella_organization_id: {
        value: cdktf.stringToHclTerraform(this._umbrellaOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      umbrella_organization_id_variable: {
        value: cdktf.stringToHclTerraform(this._umbrellaOrganizationIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_cloud_name: {
        value: cdktf.numberToHclTerraform(this._zscalerCloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zscaler_cloud_name_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerCloudNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_organization: {
        value: cdktf.stringToHclTerraform(this._zscalerOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_organization_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerOrganizationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_api_key: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_api_key_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerApiKeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_base_uri: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerBaseUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_base_uri_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerBaseUriVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_password: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_password_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerPasswordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_username: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_partner_username_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerPartnerUsernameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_password: {
        value: cdktf.stringToHclTerraform(this._zscalerPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_password_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerPasswordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_username: {
        value: cdktf.stringToHclTerraform(this._zscalerUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_username_variable: {
        value: cdktf.stringToHclTerraform(this._zscalerUsernameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
