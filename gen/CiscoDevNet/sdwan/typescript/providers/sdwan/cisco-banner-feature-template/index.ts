// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoBannerFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#description CiscoBannerFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#device_types CiscoBannerFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Set message to display before login prompt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#login CiscoBannerFeatureTemplate#login}
  */
  readonly login?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#login_variable CiscoBannerFeatureTemplate#login_variable}
  */
  readonly loginVariable?: string;
  /**
  * Set message to display after a user logs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#motd CiscoBannerFeatureTemplate#motd}
  */
  readonly motd?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#motd_variable CiscoBannerFeatureTemplate#motd_variable}
  */
  readonly motdVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#name CiscoBannerFeatureTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template sdwan_cisco_banner_feature_template}
*/
export class CiscoBannerFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_banner_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoBannerFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoBannerFeatureTemplate to import
  * @param importFromId The id of the existing CiscoBannerFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoBannerFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_banner_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_banner_feature_template sdwan_cisco_banner_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoBannerFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoBannerFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_banner_feature_template',
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
    this._login = config.login;
    this._loginVariable = config.loginVariable;
    this._motd = config.motd;
    this._motdVariable = config.motdVariable;
    this._name = config.name;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
