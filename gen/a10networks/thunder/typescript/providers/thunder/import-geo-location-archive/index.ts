// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportGeoLocationArchiveAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'GeoLite2-ASN': GeoLite2-ASN CSV Zipped File; 'GeoLite2-City': GeoLite2-City CSV Zipped File; 'GeoLite2-Country': GeoLite2-Country CSV Zipped File;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive#geo_location_archive_format ImportGeoLocationArchiveA#geo_location_archive_format}
  */
  readonly geoLocationArchiveFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive#id ImportGeoLocationArchiveA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive#password ImportGeoLocationArchiveA#password}
  */
  readonly password?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive#proxy ImportGeoLocationArchiveA#proxy}
  */
  readonly proxy?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive#remote_file ImportGeoLocationArchiveA#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive#use_mgmt_port ImportGeoLocationArchiveA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive thunder_import_geo_location_archive}
*/
export class ImportGeoLocationArchiveA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_import_geo_location_archive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportGeoLocationArchiveA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportGeoLocationArchiveA to import
  * @param importFromId The id of the existing ImportGeoLocationArchiveA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportGeoLocationArchiveA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_import_geo_location_archive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_geo_location_archive thunder_import_geo_location_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportGeoLocationArchiveAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImportGeoLocationArchiveAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_import_geo_location_archive',
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
    this._geoLocationArchiveFormat = config.geoLocationArchiveFormat;
    this._id = config.id;
    this._password = config.password;
    this._proxy = config.proxy;
    this._remoteFile = config.remoteFile;
    this._useMgmtPort = config.useMgmtPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // geo_location_archive_format - computed: false, optional: true, required: false
  private _geoLocationArchiveFormat?: string; 
  public get geoLocationArchiveFormat() {
    return this.getStringAttribute('geo_location_archive_format');
  }
  public set geoLocationArchiveFormat(value: string) {
    this._geoLocationArchiveFormat = value;
  }
  public resetGeoLocationArchiveFormat() {
    this._geoLocationArchiveFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationArchiveFormatInput() {
    return this._geoLocationArchiveFormat;
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

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
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
      geo_location_archive_format: cdktf.stringToTerraform(this._geoLocationArchiveFormat),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      proxy: cdktf.stringToTerraform(this._proxy),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      geo_location_archive_format: {
        value: cdktf.stringToHclTerraform(this._geoLocationArchiveFormat),
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
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
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
