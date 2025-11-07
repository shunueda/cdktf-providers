// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerUtmprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#antivirus_profile WirelesscontrollerUtmprofile#antivirus_profile}
  */
  readonly antivirusProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#application_list WirelesscontrollerUtmprofile#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#comment WirelesscontrollerUtmprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#id WirelesscontrollerUtmprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#ips_sensor WirelesscontrollerUtmprofile#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#name WirelesscontrollerUtmprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#scan_botnet_connections WirelesscontrollerUtmprofile#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#utm_log WirelesscontrollerUtmprofile#utm_log}
  */
  readonly utmLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#vdomparam WirelesscontrollerUtmprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#webfilter_profile WirelesscontrollerUtmprofile#webfilter_profile}
  */
  readonly webfilterProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile fortios_wirelesscontroller_utmprofile}
*/
export class WirelesscontrollerUtmprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_utmprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerUtmprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerUtmprofile to import
  * @param importFromId The id of the existing WirelesscontrollerUtmprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerUtmprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_utmprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_utmprofile fortios_wirelesscontroller_utmprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerUtmprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerUtmprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_utmprofile',
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
    this._antivirusProfile = config.antivirusProfile;
    this._applicationList = config.applicationList;
    this._comment = config.comment;
    this._id = config.id;
    this._ipsSensor = config.ipsSensor;
    this._name = config.name;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._utmLog = config.utmLog;
    this._vdomparam = config.vdomparam;
    this._webfilterProfile = config.webfilterProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // antivirus_profile - computed: false, optional: true, required: false
  private _antivirusProfile?: string; 
  public get antivirusProfile() {
    return this.getStringAttribute('antivirus_profile');
  }
  public set antivirusProfile(value: string) {
    this._antivirusProfile = value;
  }
  public resetAntivirusProfile() {
    this._antivirusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusProfileInput() {
    return this._antivirusProfile;
  }

  // application_list - computed: false, optional: true, required: false
  private _applicationList?: string; 
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }
  public set applicationList(value: string) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // ips_sensor - computed: false, optional: true, required: false
  private _ipsSensor?: string; 
  public get ipsSensor() {
    return this.getStringAttribute('ips_sensor');
  }
  public set ipsSensor(value: string) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
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

  // scan_botnet_connections - computed: true, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // utm_log - computed: true, optional: true, required: false
  private _utmLog?: string; 
  public get utmLog() {
    return this.getStringAttribute('utm_log');
  }
  public set utmLog(value: string) {
    this._utmLog = value;
  }
  public resetUtmLog() {
    this._utmLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmLogInput() {
    return this._utmLog;
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

  // webfilter_profile - computed: false, optional: true, required: false
  private _webfilterProfile?: string; 
  public get webfilterProfile() {
    return this.getStringAttribute('webfilter_profile');
  }
  public set webfilterProfile(value: string) {
    this._webfilterProfile = value;
  }
  public resetWebfilterProfile() {
    this._webfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileInput() {
    return this._webfilterProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      antivirus_profile: cdktf.stringToTerraform(this._antivirusProfile),
      application_list: cdktf.stringToTerraform(this._applicationList),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      name: cdktf.stringToTerraform(this._name),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      utm_log: cdktf.stringToTerraform(this._utmLog),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      antivirus_profile: {
        value: cdktf.stringToHclTerraform(this._antivirusProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      ips_sensor: {
        value: cdktf.stringToHclTerraform(this._ipsSensor),
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
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utm_log: {
        value: cdktf.stringToHclTerraform(this._utmLog),
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
      webfilter_profile: {
        value: cdktf.stringToHclTerraform(this._webfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
