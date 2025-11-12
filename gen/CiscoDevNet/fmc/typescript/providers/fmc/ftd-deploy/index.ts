// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtdDeployConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy#device FtdDeploy#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy#force_deploy FtdDeploy#force_deploy}
  */
  readonly forceDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy#id FtdDeploy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy#ignore_warning FtdDeploy#ignore_warning}
  */
  readonly ignoreWarning?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy fmc_ftd_deploy}
*/
export class FtdDeploy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_ftd_deploy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtdDeploy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtdDeploy to import
  * @param importFromId The id of the existing FtdDeploy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtdDeploy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_ftd_deploy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_deploy fmc_ftd_deploy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtdDeployConfig
  */
  public constructor(scope: Construct, id: string, config: FtdDeployConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_ftd_deploy',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._forceDeploy = config.forceDeploy;
    this._id = config.id;
    this._ignoreWarning = config.ignoreWarning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // force_deploy - computed: false, optional: true, required: false
  private _forceDeploy?: boolean | cdktf.IResolvable; 
  public get forceDeploy() {
    return this.getBooleanAttribute('force_deploy');
  }
  public set forceDeploy(value: boolean | cdktf.IResolvable) {
    this._forceDeploy = value;
  }
  public resetForceDeploy() {
    this._forceDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeployInput() {
    return this._forceDeploy;
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

  // ignore_warning - computed: false, optional: true, required: false
  private _ignoreWarning?: boolean | cdktf.IResolvable; 
  public get ignoreWarning() {
    return this.getBooleanAttribute('ignore_warning');
  }
  public set ignoreWarning(value: boolean | cdktf.IResolvable) {
    this._ignoreWarning = value;
  }
  public resetIgnoreWarning() {
    this._ignoreWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningInput() {
    return this._ignoreWarning;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      force_deploy: cdktf.booleanToTerraform(this._forceDeploy),
      id: cdktf.stringToTerraform(this._id),
      ignore_warning: cdktf.booleanToTerraform(this._ignoreWarning),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_deploy: {
        value: cdktf.booleanToHclTerraform(this._forceDeploy),
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
      ignore_warning: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
