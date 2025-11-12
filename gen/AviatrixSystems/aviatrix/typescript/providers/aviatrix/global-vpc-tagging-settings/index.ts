// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/global_vpc_tagging_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalVpcTaggingSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to enable alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/global_vpc_tagging_settings#enable_alert GlobalVpcTaggingSettings#enable_alert}
  */
  readonly enableAlert: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/global_vpc_tagging_settings#id GlobalVpcTaggingSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/global_vpc_tagging_settings#service_state GlobalVpcTaggingSettings#service_state}
  */
  readonly serviceState: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/global_vpc_tagging_settings aviatrix_global_vpc_tagging_settings}
*/
export class GlobalVpcTaggingSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_global_vpc_tagging_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalVpcTaggingSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalVpcTaggingSettings to import
  * @param importFromId The id of the existing GlobalVpcTaggingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/global_vpc_tagging_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalVpcTaggingSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_global_vpc_tagging_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/global_vpc_tagging_settings aviatrix_global_vpc_tagging_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalVpcTaggingSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalVpcTaggingSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_global_vpc_tagging_settings',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableAlert = config.enableAlert;
    this._id = config.id;
    this._serviceState = config.serviceState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_alert - computed: false, optional: false, required: true
  private _enableAlert?: boolean | cdktf.IResolvable; 
  public get enableAlert() {
    return this.getBooleanAttribute('enable_alert');
  }
  public set enableAlert(value: boolean | cdktf.IResolvable) {
    this._enableAlert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlertInput() {
    return this._enableAlert;
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

  // service_state - computed: false, optional: false, required: true
  private _serviceState?: string; 
  public get serviceState() {
    return this.getStringAttribute('service_state');
  }
  public set serviceState(value: string) {
    this._serviceState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceStateInput() {
    return this._serviceState;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_alert: cdktf.booleanToTerraform(this._enableAlert),
      id: cdktf.stringToTerraform(this._id),
      service_state: cdktf.stringToTerraform(this._serviceState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_alert: {
        value: cdktf.booleanToHclTerraform(this._enableAlert),
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
      service_state: {
        value: cdktf.stringToHclTerraform(this._serviceState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
