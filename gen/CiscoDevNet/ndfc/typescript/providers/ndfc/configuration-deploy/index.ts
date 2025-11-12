// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationDeployConfig extends cdktf.TerraformMetaArguments {
  /**
  * Save the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy#config_save ConfigurationDeploy#config_save}
  */
  readonly configSave?: boolean | cdktf.IResolvable;
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy#fabric_name ConfigurationDeploy#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Value 'ALL' if all switches in the fabric are to be deployed, or a list of serial numbers of the switches to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy#serial_numbers ConfigurationDeploy#serial_numbers}
  */
  readonly serialNumbers?: string[];
  /**
  * Default set to false, config deploy will be only triggered on create of resource. If set to true in resource update, the configurations are deployed to the switches and the flag will be toggled back to false after the deployment is completed, when terraform refresh is performed. Terraform plan will always show in-place update for this field when set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy#trigger_deploy_on_update ConfigurationDeploy#trigger_deploy_on_update}
  */
  readonly triggerDeployOnUpdate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy ndfc_configuration_deploy}
*/
export class ConfigurationDeploy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_configuration_deploy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationDeploy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationDeploy to import
  * @param importFromId The id of the existing ConfigurationDeploy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationDeploy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_configuration_deploy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/configuration_deploy ndfc_configuration_deploy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationDeployConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationDeployConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_configuration_deploy',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configSave = config.configSave;
    this._fabricName = config.fabricName;
    this._serialNumbers = config.serialNumbers;
    this._triggerDeployOnUpdate = config.triggerDeployOnUpdate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_save - computed: true, optional: true, required: false
  private _configSave?: boolean | cdktf.IResolvable; 
  public get configSave() {
    return this.getBooleanAttribute('config_save');
  }
  public set configSave(value: boolean | cdktf.IResolvable) {
    this._configSave = value;
  }
  public resetConfigSave() {
    this._configSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSaveInput() {
    return this._configSave;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // serial_numbers - computed: false, optional: true, required: false
  private _serialNumbers?: string[]; 
  public get serialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_numbers'));
  }
  public set serialNumbers(value: string[]) {
    this._serialNumbers = value;
  }
  public resetSerialNumbers() {
    this._serialNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumbersInput() {
    return this._serialNumbers;
  }

  // trigger_deploy_on_update - computed: true, optional: true, required: false
  private _triggerDeployOnUpdate?: boolean | cdktf.IResolvable; 
  public get triggerDeployOnUpdate() {
    return this.getBooleanAttribute('trigger_deploy_on_update');
  }
  public set triggerDeployOnUpdate(value: boolean | cdktf.IResolvable) {
    this._triggerDeployOnUpdate = value;
  }
  public resetTriggerDeployOnUpdate() {
    this._triggerDeployOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDeployOnUpdateInput() {
    return this._triggerDeployOnUpdate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_save: cdktf.booleanToTerraform(this._configSave),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumbers),
      trigger_deploy_on_update: cdktf.booleanToTerraform(this._triggerDeployOnUpdate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_save: {
        value: cdktf.booleanToHclTerraform(this._configSave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trigger_deploy_on_update: {
        value: cdktf.booleanToHclTerraform(this._triggerDeployOnUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
