// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemBannerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#description SystemBannerFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#feature_profile_id SystemBannerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#login SystemBannerFeature#login}
  */
  readonly login?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#login_variable SystemBannerFeature#login_variable}
  */
  readonly loginVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#motd SystemBannerFeature#motd}
  */
  readonly motd?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#motd_variable SystemBannerFeature#motd_variable}
  */
  readonly motdVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#name SystemBannerFeature#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature sdwan_system_banner_feature}
*/
export class SystemBannerFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_banner_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemBannerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemBannerFeature to import
  * @param importFromId The id of the existing SystemBannerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemBannerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_banner_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_banner_feature sdwan_system_banner_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemBannerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemBannerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_banner_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._login = config.login;
    this._loginVariable = config.loginVariable;
    this._motd = config.motd;
    this._motdVariable = config.motdVariable;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // login_variable - computed: false, optional: true, required: false
  private _loginVariable?: string; 
  public get loginVariable() {
    return this.getStringAttribute('login_variable');
  }
  public set loginVariable(value: string) {
    this._loginVariable = value;
  }
  public resetLoginVariable() {
    this._loginVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginVariableInput() {
    return this._loginVariable;
  }

  // motd - computed: false, optional: true, required: false
  private _motd?: string; 
  public get motd() {
    return this.getStringAttribute('motd');
  }
  public set motd(value: string) {
    this._motd = value;
  }
  public resetMotd() {
    this._motd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdInput() {
    return this._motd;
  }

  // motd_variable - computed: false, optional: true, required: false
  private _motdVariable?: string; 
  public get motdVariable() {
    return this.getStringAttribute('motd_variable');
  }
  public set motdVariable(value: string) {
    this._motdVariable = value;
  }
  public resetMotdVariable() {
    this._motdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdVariableInput() {
    return this._motdVariable;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      login: cdktf.stringToTerraform(this._login),
      login_variable: cdktf.stringToTerraform(this._loginVariable),
      motd: cdktf.stringToTerraform(this._motd),
      motd_variable: cdktf.stringToTerraform(this._motdVariable),
      name: cdktf.stringToTerraform(this._name),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_variable: {
        value: cdktf.stringToHclTerraform(this._loginVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd: {
        value: cdktf.stringToHclTerraform(this._motd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd_variable: {
        value: cdktf.stringToHclTerraform(this._motdVariable),
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
