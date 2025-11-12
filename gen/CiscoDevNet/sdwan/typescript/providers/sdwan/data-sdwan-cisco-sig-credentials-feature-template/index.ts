// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_sig_credentials_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoSigCredentialsFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_sig_credentials_feature_template#id DataSdwanCiscoSigCredentialsFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_sig_credentials_feature_template#name DataSdwanCiscoSigCredentialsFeatureTemplate#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_sig_credentials_feature_template sdwan_cisco_sig_credentials_feature_template}
*/
export class DataSdwanCiscoSigCredentialsFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_sig_credentials_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoSigCredentialsFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoSigCredentialsFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoSigCredentialsFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_sig_credentials_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoSigCredentialsFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_sig_credentials_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_sig_credentials_feature_template sdwan_cisco_sig_credentials_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoSigCredentialsFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoSigCredentialsFeatureTemplateConfig = {}) {
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // umbrella_api_key - computed: true, optional: false, required: false
  public get umbrellaApiKey() {
    return this.getStringAttribute('umbrella_api_key');
  }

  // umbrella_api_key_variable - computed: true, optional: false, required: false
  public get umbrellaApiKeyVariable() {
    return this.getStringAttribute('umbrella_api_key_variable');
  }

  // umbrella_api_secret - computed: true, optional: false, required: false
  public get umbrellaApiSecret() {
    return this.getStringAttribute('umbrella_api_secret');
  }

  // umbrella_api_secret_variable - computed: true, optional: false, required: false
  public get umbrellaApiSecretVariable() {
    return this.getStringAttribute('umbrella_api_secret_variable');
  }

  // umbrella_organization_id - computed: true, optional: false, required: false
  public get umbrellaOrganizationId() {
    return this.getStringAttribute('umbrella_organization_id');
  }

  // umbrella_organization_id_variable - computed: true, optional: false, required: false
  public get umbrellaOrganizationIdVariable() {
    return this.getStringAttribute('umbrella_organization_id_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // zscaler_cloud_name - computed: true, optional: false, required: false
  public get zscalerCloudName() {
    return this.getNumberAttribute('zscaler_cloud_name');
  }

  // zscaler_cloud_name_variable - computed: true, optional: false, required: false
  public get zscalerCloudNameVariable() {
    return this.getStringAttribute('zscaler_cloud_name_variable');
  }

  // zscaler_organization - computed: true, optional: false, required: false
  public get zscalerOrganization() {
    return this.getStringAttribute('zscaler_organization');
  }

  // zscaler_organization_variable - computed: true, optional: false, required: false
  public get zscalerOrganizationVariable() {
    return this.getStringAttribute('zscaler_organization_variable');
  }

  // zscaler_partner_api_key - computed: true, optional: false, required: false
  public get zscalerPartnerApiKey() {
    return this.getStringAttribute('zscaler_partner_api_key');
  }

  // zscaler_partner_api_key_variable - computed: true, optional: false, required: false
  public get zscalerPartnerApiKeyVariable() {
    return this.getStringAttribute('zscaler_partner_api_key_variable');
  }

  // zscaler_partner_base_uri - computed: true, optional: false, required: false
  public get zscalerPartnerBaseUri() {
    return this.getStringAttribute('zscaler_partner_base_uri');
  }

  // zscaler_partner_base_uri_variable - computed: true, optional: false, required: false
  public get zscalerPartnerBaseUriVariable() {
    return this.getStringAttribute('zscaler_partner_base_uri_variable');
  }

  // zscaler_partner_password - computed: true, optional: false, required: false
  public get zscalerPartnerPassword() {
    return this.getStringAttribute('zscaler_partner_password');
  }

  // zscaler_partner_password_variable - computed: true, optional: false, required: false
  public get zscalerPartnerPasswordVariable() {
    return this.getStringAttribute('zscaler_partner_password_variable');
  }

  // zscaler_partner_username - computed: true, optional: false, required: false
  public get zscalerPartnerUsername() {
    return this.getStringAttribute('zscaler_partner_username');
  }

  // zscaler_partner_username_variable - computed: true, optional: false, required: false
  public get zscalerPartnerUsernameVariable() {
    return this.getStringAttribute('zscaler_partner_username_variable');
  }

  // zscaler_password - computed: true, optional: false, required: false
  public get zscalerPassword() {
    return this.getStringAttribute('zscaler_password');
  }

  // zscaler_password_variable - computed: true, optional: false, required: false
  public get zscalerPasswordVariable() {
    return this.getStringAttribute('zscaler_password_variable');
  }

  // zscaler_username - computed: true, optional: false, required: false
  public get zscalerUsername() {
    return this.getStringAttribute('zscaler_username');
  }

  // zscaler_username_variable - computed: true, optional: false, required: false
  public get zscalerUsernameVariable() {
    return this.getStringAttribute('zscaler_username_variable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
