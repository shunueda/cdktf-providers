// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSsoadminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#accprofile SystemSsoadmin#accprofile}
  */
  readonly accprofile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#device_name SystemSsoadmin#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#gui_default_dashboard_template SystemSsoadmin#gui_default_dashboard_template}
  */
  readonly guiDefaultDashboardTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#gui_ignore_invalid_signature_version SystemSsoadmin#gui_ignore_invalid_signature_version}
  */
  readonly guiIgnoreInvalidSignatureVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#gui_ignore_release_overview_version SystemSsoadmin#gui_ignore_release_overview_version}
  */
  readonly guiIgnoreReleaseOverviewVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#id SystemSsoadmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#name SystemSsoadmin#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#vdom SystemSsoadmin#vdom}
  */
  readonly vdom?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin fmgdevice_system_ssoadmin}
*/
export class SystemSsoadmin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ssoadmin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSsoadmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSsoadmin to import
  * @param importFromId The id of the existing SystemSsoadmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSsoadmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ssoadmin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ssoadmin fmgdevice_system_ssoadmin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSsoadminConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSsoadminConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ssoadmin',
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
    this._accprofile = config.accprofile;
    this._deviceName = config.deviceName;
    this._guiDefaultDashboardTemplate = config.guiDefaultDashboardTemplate;
    this._guiIgnoreInvalidSignatureVersion = config.guiIgnoreInvalidSignatureVersion;
    this._guiIgnoreReleaseOverviewVersion = config.guiIgnoreReleaseOverviewVersion;
    this._id = config.id;
    this._name = config.name;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: true, required: false
  private _accprofile?: string[]; 
  public get accprofile() {
    return cdktf.Fn.tolist(this.getListAttribute('accprofile'));
  }
  public set accprofile(value: string[]) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
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

  // gui_default_dashboard_template - computed: false, optional: true, required: false
  private _guiDefaultDashboardTemplate?: string; 
  public get guiDefaultDashboardTemplate() {
    return this.getStringAttribute('gui_default_dashboard_template');
  }
  public set guiDefaultDashboardTemplate(value: string) {
    this._guiDefaultDashboardTemplate = value;
  }
  public resetGuiDefaultDashboardTemplate() {
    this._guiDefaultDashboardTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDefaultDashboardTemplateInput() {
    return this._guiDefaultDashboardTemplate;
  }

  // gui_ignore_invalid_signature_version - computed: false, optional: true, required: false
  private _guiIgnoreInvalidSignatureVersion?: string; 
  public get guiIgnoreInvalidSignatureVersion() {
    return this.getStringAttribute('gui_ignore_invalid_signature_version');
  }
  public set guiIgnoreInvalidSignatureVersion(value: string) {
    this._guiIgnoreInvalidSignatureVersion = value;
  }
  public resetGuiIgnoreInvalidSignatureVersion() {
    this._guiIgnoreInvalidSignatureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIgnoreInvalidSignatureVersionInput() {
    return this._guiIgnoreInvalidSignatureVersion;
  }

  // gui_ignore_release_overview_version - computed: false, optional: true, required: false
  private _guiIgnoreReleaseOverviewVersion?: string; 
  public get guiIgnoreReleaseOverviewVersion() {
    return this.getStringAttribute('gui_ignore_release_overview_version');
  }
  public set guiIgnoreReleaseOverviewVersion(value: string) {
    this._guiIgnoreReleaseOverviewVersion = value;
  }
  public resetGuiIgnoreReleaseOverviewVersion() {
    this._guiIgnoreReleaseOverviewVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIgnoreReleaseOverviewVersionInput() {
    return this._guiIgnoreReleaseOverviewVersion;
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

  // name - computed: false, optional: true, required: false
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

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string[]; 
  public get vdom() {
    return cdktf.Fn.tolist(this.getListAttribute('vdom'));
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accprofile),
      device_name: cdktf.stringToTerraform(this._deviceName),
      gui_default_dashboard_template: cdktf.stringToTerraform(this._guiDefaultDashboardTemplate),
      gui_ignore_invalid_signature_version: cdktf.stringToTerraform(this._guiIgnoreInvalidSignatureVersion),
      gui_ignore_release_overview_version: cdktf.stringToTerraform(this._guiIgnoreReleaseOverviewVersion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accprofile),
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
      gui_default_dashboard_template: {
        value: cdktf.stringToHclTerraform(this._guiDefaultDashboardTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ignore_invalid_signature_version: {
        value: cdktf.stringToHclTerraform(this._guiIgnoreInvalidSignatureVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ignore_release_overview_version: {
        value: cdktf.stringToHclTerraform(this._guiIgnoreReleaseOverviewVersion),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
