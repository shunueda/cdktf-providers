// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementContentAwarenessAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Servers usually send HTTP traffic on TCP port 80. Some servers send HTTP traffic on other ports also. By default, this setting is enabled and Content Awareness inspects HTTP traffic on non-standard ports. You can disable this setting and configure Content Awareness to inspect HTTP traffic only on port 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings#httpi_non_standard_ports ManagementContentAwarenessAdvancedSettings#httpi_non_standard_ports}
  */
  readonly httpiNonStandardPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings#id ManagementContentAwarenessAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Examine the content of archive files. For example, files with the extension .zip, .gz, .tgz, .tar.Z, .tar, .lzma, .tlz, 7z, .rar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings#inspect_archives ManagementContentAwarenessAdvancedSettings#inspect_archives}
  */
  readonly inspectArchives?: boolean | cdktf.IResolvable;
  /**
  * In case of internal system error, allow or block all connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings#internal_error_fail_mode ManagementContentAwarenessAdvancedSettings#internal_error_fail_mode}
  */
  readonly internalErrorFailMode?: string;
  /**
  * Specify the services that Content Awareness inspects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings#supported_services ManagementContentAwarenessAdvancedSettings#supported_services}
  */
  readonly supportedServices?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings checkpoint_management_content_awareness_advanced_settings}
*/
export class ManagementContentAwarenessAdvancedSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_content_awareness_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementContentAwarenessAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementContentAwarenessAdvancedSettings to import
  * @param importFromId The id of the existing ManagementContentAwarenessAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementContentAwarenessAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_content_awareness_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_content_awareness_advanced_settings checkpoint_management_content_awareness_advanced_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementContentAwarenessAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementContentAwarenessAdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_content_awareness_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpiNonStandardPorts = config.httpiNonStandardPorts;
    this._id = config.id;
    this._inspectArchives = config.inspectArchives;
    this._internalErrorFailMode = config.internalErrorFailMode;
    this._supportedServices = config.supportedServices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // httpi_non_standard_ports - computed: false, optional: true, required: false
  private _httpiNonStandardPorts?: boolean | cdktf.IResolvable; 
  public get httpiNonStandardPorts() {
    return this.getBooleanAttribute('httpi_non_standard_ports');
  }
  public set httpiNonStandardPorts(value: boolean | cdktf.IResolvable) {
    this._httpiNonStandardPorts = value;
  }
  public resetHttpiNonStandardPorts() {
    this._httpiNonStandardPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpiNonStandardPortsInput() {
    return this._httpiNonStandardPorts;
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

  // inspect_archives - computed: false, optional: true, required: false
  private _inspectArchives?: boolean | cdktf.IResolvable; 
  public get inspectArchives() {
    return this.getBooleanAttribute('inspect_archives');
  }
  public set inspectArchives(value: boolean | cdktf.IResolvable) {
    this._inspectArchives = value;
  }
  public resetInspectArchives() {
    this._inspectArchives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectArchivesInput() {
    return this._inspectArchives;
  }

  // internal_error_fail_mode - computed: false, optional: true, required: false
  private _internalErrorFailMode?: string; 
  public get internalErrorFailMode() {
    return this.getStringAttribute('internal_error_fail_mode');
  }
  public set internalErrorFailMode(value: string) {
    this._internalErrorFailMode = value;
  }
  public resetInternalErrorFailMode() {
    this._internalErrorFailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorFailModeInput() {
    return this._internalErrorFailMode;
  }

  // supported_services - computed: false, optional: true, required: false
  private _supportedServices?: string[]; 
  public get supportedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_services'));
  }
  public set supportedServices(value: string[]) {
    this._supportedServices = value;
  }
  public resetSupportedServices() {
    this._supportedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedServicesInput() {
    return this._supportedServices;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      httpi_non_standard_ports: cdktf.booleanToTerraform(this._httpiNonStandardPorts),
      id: cdktf.stringToTerraform(this._id),
      inspect_archives: cdktf.booleanToTerraform(this._inspectArchives),
      internal_error_fail_mode: cdktf.stringToTerraform(this._internalErrorFailMode),
      supported_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedServices),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      httpi_non_standard_ports: {
        value: cdktf.booleanToHclTerraform(this._httpiNonStandardPorts),
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
      inspect_archives: {
        value: cdktf.booleanToHclTerraform(this._inspectArchives),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internal_error_fail_mode: {
        value: cdktf.stringToHclTerraform(this._internalErrorFailMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
