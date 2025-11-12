// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFortiviewSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting#data_source SystemFortiviewSetting#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting#id SystemFortiviewSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting#not_scanned_apps SystemFortiviewSetting#not_scanned_apps}
  */
  readonly notScannedApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting#resolve_ip SystemFortiviewSetting#resolve_ip}
  */
  readonly resolveIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting fortimanager_system_fortiview_setting}
*/
export class SystemFortiviewSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_fortiview_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFortiviewSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFortiviewSetting to import
  * @param importFromId The id of the existing SystemFortiviewSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFortiviewSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_fortiview_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fortiview_setting fortimanager_system_fortiview_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFortiviewSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFortiviewSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_fortiview_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSource = config.dataSource;
    this._id = config.id;
    this._notScannedApps = config.notScannedApps;
    this._resolveIp = config.resolveIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source - computed: true, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // not_scanned_apps - computed: true, optional: true, required: false
  private _notScannedApps?: string; 
  public get notScannedApps() {
    return this.getStringAttribute('not_scanned_apps');
  }
  public set notScannedApps(value: string) {
    this._notScannedApps = value;
  }
  public resetNotScannedApps() {
    this._notScannedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScannedAppsInput() {
    return this._notScannedApps;
  }

  // resolve_ip - computed: true, optional: true, required: false
  private _resolveIp?: string; 
  public get resolveIp() {
    return this.getStringAttribute('resolve_ip');
  }
  public set resolveIp(value: string) {
    this._resolveIp = value;
  }
  public resetResolveIp() {
    this._resolveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveIpInput() {
    return this._resolveIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source: cdktf.stringToTerraform(this._dataSource),
      id: cdktf.stringToTerraform(this._id),
      not_scanned_apps: cdktf.stringToTerraform(this._notScannedApps),
      resolve_ip: cdktf.stringToTerraform(this._resolveIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source: {
        value: cdktf.stringToHclTerraform(this._dataSource),
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
      not_scanned_apps: {
        value: cdktf.stringToHclTerraform(this._notScannedApps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_ip: {
        value: cdktf.stringToHclTerraform(this._resolveIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
