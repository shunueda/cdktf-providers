// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerWtpprofileLanAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#adom ObjectWirelesscontrollerWtpprofileLanA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#id ObjectWirelesscontrollerWtpprofileLanA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port1_mode ObjectWirelesscontrollerWtpprofileLanA#port1_mode}
  */
  readonly port1Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port1_ssid ObjectWirelesscontrollerWtpprofileLanA#port1_ssid}
  */
  readonly port1Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port2_mode ObjectWirelesscontrollerWtpprofileLanA#port2_mode}
  */
  readonly port2Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port2_ssid ObjectWirelesscontrollerWtpprofileLanA#port2_ssid}
  */
  readonly port2Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port3_mode ObjectWirelesscontrollerWtpprofileLanA#port3_mode}
  */
  readonly port3Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port3_ssid ObjectWirelesscontrollerWtpprofileLanA#port3_ssid}
  */
  readonly port3Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port4_mode ObjectWirelesscontrollerWtpprofileLanA#port4_mode}
  */
  readonly port4Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port4_ssid ObjectWirelesscontrollerWtpprofileLanA#port4_ssid}
  */
  readonly port4Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port5_mode ObjectWirelesscontrollerWtpprofileLanA#port5_mode}
  */
  readonly port5Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port5_ssid ObjectWirelesscontrollerWtpprofileLanA#port5_ssid}
  */
  readonly port5Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port6_mode ObjectWirelesscontrollerWtpprofileLanA#port6_mode}
  */
  readonly port6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port6_ssid ObjectWirelesscontrollerWtpprofileLanA#port6_ssid}
  */
  readonly port6Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port7_mode ObjectWirelesscontrollerWtpprofileLanA#port7_mode}
  */
  readonly port7Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port7_ssid ObjectWirelesscontrollerWtpprofileLanA#port7_ssid}
  */
  readonly port7Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port8_mode ObjectWirelesscontrollerWtpprofileLanA#port8_mode}
  */
  readonly port8Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port8_ssid ObjectWirelesscontrollerWtpprofileLanA#port8_ssid}
  */
  readonly port8Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port_esl_mode ObjectWirelesscontrollerWtpprofileLanA#port_esl_mode}
  */
  readonly portEslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port_esl_ssid ObjectWirelesscontrollerWtpprofileLanA#port_esl_ssid}
  */
  readonly portEslSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port_mode ObjectWirelesscontrollerWtpprofileLanA#port_mode}
  */
  readonly portMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#port_ssid ObjectWirelesscontrollerWtpprofileLanA#port_ssid}
  */
  readonly portSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#scopetype ObjectWirelesscontrollerWtpprofileLanA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#wtp_profile ObjectWirelesscontrollerWtpprofileLanA#wtp_profile}
  */
  readonly wtpProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan fortimanager_object_wirelesscontroller_wtpprofile_lan}
*/
export class ObjectWirelesscontrollerWtpprofileLanA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_wtpprofile_lan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerWtpprofileLanA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerWtpprofileLanA to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerWtpprofileLanA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerWtpprofileLanA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_wtpprofile_lan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_lan fortimanager_object_wirelesscontroller_wtpprofile_lan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerWtpprofileLanAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerWtpprofileLanAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_wtpprofile_lan',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._port1Mode = config.port1Mode;
    this._port1Ssid = config.port1Ssid;
    this._port2Mode = config.port2Mode;
    this._port2Ssid = config.port2Ssid;
    this._port3Mode = config.port3Mode;
    this._port3Ssid = config.port3Ssid;
    this._port4Mode = config.port4Mode;
    this._port4Ssid = config.port4Ssid;
    this._port5Mode = config.port5Mode;
    this._port5Ssid = config.port5Ssid;
    this._port6Mode = config.port6Mode;
    this._port6Ssid = config.port6Ssid;
    this._port7Mode = config.port7Mode;
    this._port7Ssid = config.port7Ssid;
    this._port8Mode = config.port8Mode;
    this._port8Ssid = config.port8Ssid;
    this._portEslMode = config.portEslMode;
    this._portEslSsid = config.portEslSsid;
    this._portMode = config.portMode;
    this._portSsid = config.portSsid;
    this._scopetype = config.scopetype;
    this._wtpProfile = config.wtpProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // port1_mode - computed: false, optional: true, required: false
  private _port1Mode?: string; 
  public get port1Mode() {
    return this.getStringAttribute('port1_mode');
  }
  public set port1Mode(value: string) {
    this._port1Mode = value;
  }
  public resetPort1Mode() {
    this._port1Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1ModeInput() {
    return this._port1Mode;
  }

  // port1_ssid - computed: false, optional: true, required: false
  private _port1Ssid?: string; 
  public get port1Ssid() {
    return this.getStringAttribute('port1_ssid');
  }
  public set port1Ssid(value: string) {
    this._port1Ssid = value;
  }
  public resetPort1Ssid() {
    this._port1Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1SsidInput() {
    return this._port1Ssid;
  }

  // port2_mode - computed: false, optional: true, required: false
  private _port2Mode?: string; 
  public get port2Mode() {
    return this.getStringAttribute('port2_mode');
  }
  public set port2Mode(value: string) {
    this._port2Mode = value;
  }
  public resetPort2Mode() {
    this._port2Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2ModeInput() {
    return this._port2Mode;
  }

  // port2_ssid - computed: false, optional: true, required: false
  private _port2Ssid?: string; 
  public get port2Ssid() {
    return this.getStringAttribute('port2_ssid');
  }
  public set port2Ssid(value: string) {
    this._port2Ssid = value;
  }
  public resetPort2Ssid() {
    this._port2Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2SsidInput() {
    return this._port2Ssid;
  }

  // port3_mode - computed: false, optional: true, required: false
  private _port3Mode?: string; 
  public get port3Mode() {
    return this.getStringAttribute('port3_mode');
  }
  public set port3Mode(value: string) {
    this._port3Mode = value;
  }
  public resetPort3Mode() {
    this._port3Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3ModeInput() {
    return this._port3Mode;
  }

  // port3_ssid - computed: false, optional: true, required: false
  private _port3Ssid?: string; 
  public get port3Ssid() {
    return this.getStringAttribute('port3_ssid');
  }
  public set port3Ssid(value: string) {
    this._port3Ssid = value;
  }
  public resetPort3Ssid() {
    this._port3Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3SsidInput() {
    return this._port3Ssid;
  }

  // port4_mode - computed: false, optional: true, required: false
  private _port4Mode?: string; 
  public get port4Mode() {
    return this.getStringAttribute('port4_mode');
  }
  public set port4Mode(value: string) {
    this._port4Mode = value;
  }
  public resetPort4Mode() {
    this._port4Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4ModeInput() {
    return this._port4Mode;
  }

  // port4_ssid - computed: false, optional: true, required: false
  private _port4Ssid?: string; 
  public get port4Ssid() {
    return this.getStringAttribute('port4_ssid');
  }
  public set port4Ssid(value: string) {
    this._port4Ssid = value;
  }
  public resetPort4Ssid() {
    this._port4Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4SsidInput() {
    return this._port4Ssid;
  }

  // port5_mode - computed: false, optional: true, required: false
  private _port5Mode?: string; 
  public get port5Mode() {
    return this.getStringAttribute('port5_mode');
  }
  public set port5Mode(value: string) {
    this._port5Mode = value;
  }
  public resetPort5Mode() {
    this._port5Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5ModeInput() {
    return this._port5Mode;
  }

  // port5_ssid - computed: false, optional: true, required: false
  private _port5Ssid?: string; 
  public get port5Ssid() {
    return this.getStringAttribute('port5_ssid');
  }
  public set port5Ssid(value: string) {
    this._port5Ssid = value;
  }
  public resetPort5Ssid() {
    this._port5Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5SsidInput() {
    return this._port5Ssid;
  }

  // port6_mode - computed: false, optional: true, required: false
  private _port6Mode?: string; 
  public get port6Mode() {
    return this.getStringAttribute('port6_mode');
  }
  public set port6Mode(value: string) {
    this._port6Mode = value;
  }
  public resetPort6Mode() {
    this._port6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6ModeInput() {
    return this._port6Mode;
  }

  // port6_ssid - computed: false, optional: true, required: false
  private _port6Ssid?: string; 
  public get port6Ssid() {
    return this.getStringAttribute('port6_ssid');
  }
  public set port6Ssid(value: string) {
    this._port6Ssid = value;
  }
  public resetPort6Ssid() {
    this._port6Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6SsidInput() {
    return this._port6Ssid;
  }

  // port7_mode - computed: false, optional: true, required: false
  private _port7Mode?: string; 
  public get port7Mode() {
    return this.getStringAttribute('port7_mode');
  }
  public set port7Mode(value: string) {
    this._port7Mode = value;
  }
  public resetPort7Mode() {
    this._port7Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port7ModeInput() {
    return this._port7Mode;
  }

  // port7_ssid - computed: false, optional: true, required: false
  private _port7Ssid?: string; 
  public get port7Ssid() {
    return this.getStringAttribute('port7_ssid');
  }
  public set port7Ssid(value: string) {
    this._port7Ssid = value;
  }
  public resetPort7Ssid() {
    this._port7Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port7SsidInput() {
    return this._port7Ssid;
  }

  // port8_mode - computed: false, optional: true, required: false
  private _port8Mode?: string; 
  public get port8Mode() {
    return this.getStringAttribute('port8_mode');
  }
  public set port8Mode(value: string) {
    this._port8Mode = value;
  }
  public resetPort8Mode() {
    this._port8Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port8ModeInput() {
    return this._port8Mode;
  }

  // port8_ssid - computed: false, optional: true, required: false
  private _port8Ssid?: string; 
  public get port8Ssid() {
    return this.getStringAttribute('port8_ssid');
  }
  public set port8Ssid(value: string) {
    this._port8Ssid = value;
  }
  public resetPort8Ssid() {
    this._port8Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port8SsidInput() {
    return this._port8Ssid;
  }

  // port_esl_mode - computed: true, optional: true, required: false
  private _portEslMode?: string; 
  public get portEslMode() {
    return this.getStringAttribute('port_esl_mode');
  }
  public set portEslMode(value: string) {
    this._portEslMode = value;
  }
  public resetPortEslMode() {
    this._portEslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEslModeInput() {
    return this._portEslMode;
  }

  // port_esl_ssid - computed: false, optional: true, required: false
  private _portEslSsid?: string; 
  public get portEslSsid() {
    return this.getStringAttribute('port_esl_ssid');
  }
  public set portEslSsid(value: string) {
    this._portEslSsid = value;
  }
  public resetPortEslSsid() {
    this._portEslSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEslSsidInput() {
    return this._portEslSsid;
  }

  // port_mode - computed: false, optional: true, required: false
  private _portMode?: string; 
  public get portMode() {
    return this.getStringAttribute('port_mode');
  }
  public set portMode(value: string) {
    this._portMode = value;
  }
  public resetPortMode() {
    this._portMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portModeInput() {
    return this._portMode;
  }

  // port_ssid - computed: false, optional: true, required: false
  private _portSsid?: string; 
  public get portSsid() {
    return this.getStringAttribute('port_ssid');
  }
  public set portSsid(value: string) {
    this._portSsid = value;
  }
  public resetPortSsid() {
    this._portSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSsidInput() {
    return this._portSsid;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // wtp_profile - computed: false, optional: false, required: true
  private _wtpProfile?: string; 
  public get wtpProfile() {
    return this.getStringAttribute('wtp_profile');
  }
  public set wtpProfile(value: string) {
    this._wtpProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpProfileInput() {
    return this._wtpProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      port1_mode: cdktf.stringToTerraform(this._port1Mode),
      port1_ssid: cdktf.stringToTerraform(this._port1Ssid),
      port2_mode: cdktf.stringToTerraform(this._port2Mode),
      port2_ssid: cdktf.stringToTerraform(this._port2Ssid),
      port3_mode: cdktf.stringToTerraform(this._port3Mode),
      port3_ssid: cdktf.stringToTerraform(this._port3Ssid),
      port4_mode: cdktf.stringToTerraform(this._port4Mode),
      port4_ssid: cdktf.stringToTerraform(this._port4Ssid),
      port5_mode: cdktf.stringToTerraform(this._port5Mode),
      port5_ssid: cdktf.stringToTerraform(this._port5Ssid),
      port6_mode: cdktf.stringToTerraform(this._port6Mode),
      port6_ssid: cdktf.stringToTerraform(this._port6Ssid),
      port7_mode: cdktf.stringToTerraform(this._port7Mode),
      port7_ssid: cdktf.stringToTerraform(this._port7Ssid),
      port8_mode: cdktf.stringToTerraform(this._port8Mode),
      port8_ssid: cdktf.stringToTerraform(this._port8Ssid),
      port_esl_mode: cdktf.stringToTerraform(this._portEslMode),
      port_esl_ssid: cdktf.stringToTerraform(this._portEslSsid),
      port_mode: cdktf.stringToTerraform(this._portMode),
      port_ssid: cdktf.stringToTerraform(this._portSsid),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      wtp_profile: cdktf.stringToTerraform(this._wtpProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      port1_mode: {
        value: cdktf.stringToHclTerraform(this._port1Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port1_ssid: {
        value: cdktf.stringToHclTerraform(this._port1Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port2_mode: {
        value: cdktf.stringToHclTerraform(this._port2Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port2_ssid: {
        value: cdktf.stringToHclTerraform(this._port2Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port3_mode: {
        value: cdktf.stringToHclTerraform(this._port3Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port3_ssid: {
        value: cdktf.stringToHclTerraform(this._port3Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port4_mode: {
        value: cdktf.stringToHclTerraform(this._port4Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port4_ssid: {
        value: cdktf.stringToHclTerraform(this._port4Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port5_mode: {
        value: cdktf.stringToHclTerraform(this._port5Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port5_ssid: {
        value: cdktf.stringToHclTerraform(this._port5Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port6_mode: {
        value: cdktf.stringToHclTerraform(this._port6Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port6_ssid: {
        value: cdktf.stringToHclTerraform(this._port6Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port7_mode: {
        value: cdktf.stringToHclTerraform(this._port7Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port7_ssid: {
        value: cdktf.stringToHclTerraform(this._port7Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port8_mode: {
        value: cdktf.stringToHclTerraform(this._port8Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port8_ssid: {
        value: cdktf.stringToHclTerraform(this._port8Ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_esl_mode: {
        value: cdktf.stringToHclTerraform(this._portEslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_esl_ssid: {
        value: cdktf.stringToHclTerraform(this._portEslSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_mode: {
        value: cdktf.stringToHclTerraform(this._portMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_ssid: {
        value: cdktf.stringToHclTerraform(this._portSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_profile: {
        value: cdktf.stringToHclTerraform(this._wtpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
