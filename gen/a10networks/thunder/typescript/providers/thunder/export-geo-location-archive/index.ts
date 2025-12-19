// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExportGeoLocationArchiveAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'GeoLite2-ASN-Archive': GeoLite2-ASN CSV Zipped File; 'GeoLite2-City-Archive': GeoLite2-City CSV Zipped File; 'GeoLite2-Country-Archive': GeoLite2-Country CSV Zipped File;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive#geo_location_archive_name ExportGeoLocationArchiveA#geo_location_archive_name}
  */
  readonly geoLocationArchiveName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive#id ExportGeoLocationArchiveA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive#password ExportGeoLocationArchiveA#password}
  */
  readonly password?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive#remote_file ExportGeoLocationArchiveA#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive#use_mgmt_port ExportGeoLocationArchiveA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive thunder_export_geo_location_archive}
*/
export class ExportGeoLocationArchiveA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_export_geo_location_archive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExportGeoLocationArchiveA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExportGeoLocationArchiveA to import
  * @param importFromId The id of the existing ExportGeoLocationArchiveA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExportGeoLocationArchiveA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_export_geo_location_archive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export_geo_location_archive thunder_export_geo_location_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExportGeoLocationArchiveAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExportGeoLocationArchiveAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_export_geo_location_archive',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._geoLocationArchiveName = config.geoLocationArchiveName;
    this._id = config.id;
    this._password = config.password;
    this._remoteFile = config.remoteFile;
    this._useMgmtPort = config.useMgmtPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // geo_location_archive_name - computed: false, optional: true, required: false
  private _geoLocationArchiveName?: string; 
  public get geoLocationArchiveName() {
    return this.getStringAttribute('geo_location_archive_name');
  }
  public set geoLocationArchiveName(value: string) {
    this._geoLocationArchiveName = value;
  }
  public resetGeoLocationArchiveName() {
    this._geoLocationArchiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationArchiveNameInput() {
    return this._geoLocationArchiveName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      geo_location_archive_name: cdktf.stringToTerraform(this._geoLocationArchiveName),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      geo_location_archive_name: {
        value: cdktf.stringToHclTerraform(this._geoLocationArchiveName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_file: {
        value: cdktf.stringToHclTerraform(this._remoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
