// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/ftd_device_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtdDeviceOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the FTD to add to the cdFMC. This value is returned by the `id` attribute of the `cdo_ftd_device` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/ftd_device_onboarding#ftd_uid FtdDeviceOnboarding#ftd_uid}
  */
  readonly ftdUid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/ftd_device_onboarding sccfm_ftd_device_onboarding}
*/
export class FtdDeviceOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_ftd_device_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtdDeviceOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtdDeviceOnboarding to import
  * @param importFromId The id of the existing FtdDeviceOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/ftd_device_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtdDeviceOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_ftd_device_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/resources/ftd_device_onboarding sccfm_ftd_device_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtdDeviceOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: FtdDeviceOnboardingConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_ftd_device_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ftdUid = config.ftdUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftd_uid - computed: false, optional: false, required: true
  private _ftdUid?: string; 
  public get ftdUid() {
    return this.getStringAttribute('ftd_uid');
  }
  public set ftdUid(value: string) {
    this._ftdUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdUidInput() {
    return this._ftdUid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftd_uid: cdktf.stringToTerraform(this._ftdUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftd_uid: {
        value: cdktf.stringToHclTerraform(this._ftdUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
