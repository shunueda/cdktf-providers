// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerInitialconfigVlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#default_vlan SwitchcontrollerInitialconfigVlans#default_vlan}
  */
  readonly defaultVlan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#device_name SwitchcontrollerInitialconfigVlans#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#device_vdom SwitchcontrollerInitialconfigVlans#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#id SwitchcontrollerInitialconfigVlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#nac SwitchcontrollerInitialconfigVlans#nac}
  */
  readonly nac?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#nac_segment SwitchcontrollerInitialconfigVlans#nac_segment}
  */
  readonly nacSegment?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#quarantine SwitchcontrollerInitialconfigVlans#quarantine}
  */
  readonly quarantine?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#rspan SwitchcontrollerInitialconfigVlans#rspan}
  */
  readonly rspan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#video SwitchcontrollerInitialconfigVlans#video}
  */
  readonly video?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#voice SwitchcontrollerInitialconfigVlans#voice}
  */
  readonly voice?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans fmgdevice_switchcontroller_initialconfig_vlans}
*/
export class SwitchcontrollerInitialconfigVlans extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_initialconfig_vlans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerInitialconfigVlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerInitialconfigVlans to import
  * @param importFromId The id of the existing SwitchcontrollerInitialconfigVlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerInitialconfigVlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_initialconfig_vlans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_initialconfig_vlans fmgdevice_switchcontroller_initialconfig_vlans} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerInitialconfigVlansConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerInitialconfigVlansConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_initialconfig_vlans',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._nac = config.nac;
    this._nacSegment = config.nacSegment;
    this._quarantine = config.quarantine;
    this._rspan = config.rspan;
    this._video = config.video;
    this._voice = config.voice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_vlan - computed: true, optional: true, required: false
  private _defaultVlan?: string[]; 
  public get defaultVlan() {
    return cdktf.Fn.tolist(this.getListAttribute('default_vlan'));
  }
  public set defaultVlan(value: string[]) {
    this._defaultVlan = value;
  }
  public resetDefaultVlan() {
    this._defaultVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanInput() {
    return this._defaultVlan;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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
  private _nac?: string[]; 
  public get nac() {
    return cdktf.Fn.tolist(this.getListAttribute('nac'));
  }
  public set nac(value: string[]) {
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
  private _nacSegment?: string[]; 
  public get nacSegment() {
    return cdktf.Fn.tolist(this.getListAttribute('nac_segment'));
  }
  public set nacSegment(value: string[]) {
    this._nacSegment = value;
  }
  public resetNacSegment() {
    this._nacSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacSegmentInput() {
    return this._nacSegment;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string[]; 
  public get quarantine() {
    return cdktf.Fn.tolist(this.getListAttribute('quarantine'));
  }
  public set quarantine(value: string[]) {
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
  private _rspan?: string[]; 
  public get rspan() {
    return cdktf.Fn.tolist(this.getListAttribute('rspan'));
  }
  public set rspan(value: string[]) {
    this._rspan = value;
  }
  public resetRspan() {
    this._rspan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspanInput() {
    return this._rspan;
  }

  // video - computed: true, optional: true, required: false
  private _video?: string[]; 
  public get video() {
    return cdktf.Fn.tolist(this.getListAttribute('video'));
  }
  public set video(value: string[]) {
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
  private _voice?: string[]; 
  public get voice() {
    return cdktf.Fn.tolist(this.getListAttribute('voice'));
  }
  public set voice(value: string[]) {
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
      default_vlan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultVlan),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      nac: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nac),
      nac_segment: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nacSegment),
      quarantine: cdktf.listMapper(cdktf.stringToTerraform, false)(this._quarantine),
      rspan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rspan),
      video: cdktf.listMapper(cdktf.stringToTerraform, false)(this._video),
      voice: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voice),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_vlan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultVlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nac),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nac_segment: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nacSegment),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      quarantine: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._quarantine),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rspan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rspan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      video: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._video),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      voice: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._voice),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
