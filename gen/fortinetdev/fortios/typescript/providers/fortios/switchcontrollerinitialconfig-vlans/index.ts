// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerinitialconfigVlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#default_vlan SwitchcontrollerinitialconfigVlans#default_vlan}
  */
  readonly defaultVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#id SwitchcontrollerinitialconfigVlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#nac SwitchcontrollerinitialconfigVlans#nac}
  */
  readonly nac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#nac_segment SwitchcontrollerinitialconfigVlans#nac_segment}
  */
  readonly nacSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#optional_vlans SwitchcontrollerinitialconfigVlans#optional_vlans}
  */
  readonly optionalVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#quarantine SwitchcontrollerinitialconfigVlans#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#rspan SwitchcontrollerinitialconfigVlans#rspan}
  */
  readonly rspan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#vdomparam SwitchcontrollerinitialconfigVlans#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#video SwitchcontrollerinitialconfigVlans#video}
  */
  readonly video?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#voice SwitchcontrollerinitialconfigVlans#voice}
  */
  readonly voice?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans fortios_switchcontrollerinitialconfig_vlans}
*/
export class SwitchcontrollerinitialconfigVlans extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontrollerinitialconfig_vlans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerinitialconfigVlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerinitialconfigVlans to import
  * @param importFromId The id of the existing SwitchcontrollerinitialconfigVlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerinitialconfigVlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontrollerinitialconfig_vlans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerinitialconfig_vlans fortios_switchcontrollerinitialconfig_vlans} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerinitialconfigVlansConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerinitialconfigVlansConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontrollerinitialconfig_vlans',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultVlan = config.defaultVlan;
    this._id = config.id;
    this._nac = config.nac;
    this._nacSegment = config.nacSegment;
    this._optionalVlans = config.optionalVlans;
    this._quarantine = config.quarantine;
    this._rspan = config.rspan;
    this._vdomparam = config.vdomparam;
    this._video = config.video;
    this._voice = config.voice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_vlan - computed: true, optional: true, required: false
  private _defaultVlan?: string; 
  public get defaultVlan() {
    return this.getStringAttribute('default_vlan');
  }
  public set defaultVlan(value: string) {
    this._defaultVlan = value;
  }
  public resetDefaultVlan() {
    this._defaultVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanInput() {
    return this._defaultVlan;
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

  // nac - computed: true, optional: true, required: false
  private _nac?: string; 
  public get nac() {
    return this.getStringAttribute('nac');
  }
  public set nac(value: string) {
    this._nac = value;
  }
  public resetNac() {
    this._nac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacInput() {
    return this._nac;
  }

  // nac_segment - computed: true, optional: true, required: false
  private _nacSegment?: string; 
  public get nacSegment() {
    return this.getStringAttribute('nac_segment');
  }
  public set nacSegment(value: string) {
    this._nacSegment = value;
  }
  public resetNacSegment() {
    this._nacSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacSegmentInput() {
    return this._nacSegment;
  }

  // optional_vlans - computed: true, optional: true, required: false
  private _optionalVlans?: string; 
  public get optionalVlans() {
    return this.getStringAttribute('optional_vlans');
  }
  public set optionalVlans(value: string) {
    this._optionalVlans = value;
  }
  public resetOptionalVlans() {
    this._optionalVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalVlansInput() {
    return this._optionalVlans;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // rspan - computed: true, optional: true, required: false
  private _rspan?: string; 
  public get rspan() {
    return this.getStringAttribute('rspan');
  }
  public set rspan(value: string) {
    this._rspan = value;
  }
  public resetRspan() {
    this._rspan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspanInput() {
    return this._rspan;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // video - computed: true, optional: true, required: false
  private _video?: string; 
  public get video() {
    return this.getStringAttribute('video');
  }
  public set video(value: string) {
    this._video = value;
  }
  public resetVideo() {
    this._video = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video;
  }

  // voice - computed: true, optional: true, required: false
  private _voice?: string; 
  public get voice() {
    return this.getStringAttribute('voice');
  }
  public set voice(value: string) {
    this._voice = value;
  }
  public resetVoice() {
    this._voice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_vlan: cdktf.stringToTerraform(this._defaultVlan),
      id: cdktf.stringToTerraform(this._id),
      nac: cdktf.stringToTerraform(this._nac),
      nac_segment: cdktf.stringToTerraform(this._nacSegment),
      optional_vlans: cdktf.stringToTerraform(this._optionalVlans),
      quarantine: cdktf.stringToTerraform(this._quarantine),
      rspan: cdktf.stringToTerraform(this._rspan),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      video: cdktf.stringToTerraform(this._video),
      voice: cdktf.stringToTerraform(this._voice),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_vlan: {
        value: cdktf.stringToHclTerraform(this._defaultVlan),
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
      nac: {
        value: cdktf.stringToHclTerraform(this._nac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nac_segment: {
        value: cdktf.stringToHclTerraform(this._nacSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_vlans: {
        value: cdktf.stringToHclTerraform(this._optionalVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine: {
        value: cdktf.stringToHclTerraform(this._quarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rspan: {
        value: cdktf.stringToHclTerraform(this._rspan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video: {
        value: cdktf.stringToHclTerraform(this._video),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice: {
        value: cdktf.stringToHclTerraform(this._voice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
