// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportToDeviceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device (Device ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#device ImportToDeviceA#device}
  */
  readonly device?: number;
  /**
  * GLM certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#glm_cert ImportToDeviceA#glm_cert}
  */
  readonly glmCert?: string;
  /**
  * License File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#glm_license ImportToDeviceA#glm_license}
  */
  readonly glmLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#id ImportToDeviceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#overwrite ImportToDeviceA#overwrite}
  */
  readonly overwrite?: number;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#remote_file ImportToDeviceA#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#use_mgmt_port ImportToDeviceA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * License file to enable web-category feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#web_category_license ImportToDeviceA#web_category_license}
  */
  readonly webCategoryLicense?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device thunder_import_to_device}
*/
export class ImportToDeviceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_import_to_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportToDeviceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportToDeviceA to import
  * @param importFromId The id of the existing ImportToDeviceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportToDeviceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_import_to_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_to_device thunder_import_to_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportToDeviceAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImportToDeviceAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_import_to_device',
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
    this._device = config.device;
    this._glmCert = config.glmCert;
    this._glmLicense = config.glmLicense;
    this._id = config.id;
    this._overwrite = config.overwrite;
    this._remoteFile = config.remoteFile;
    this._useMgmtPort = config.useMgmtPort;
    this._webCategoryLicense = config.webCategoryLicense;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // glm_cert - computed: false, optional: true, required: false
  private _glmCert?: string; 
  public get glmCert() {
    return this.getStringAttribute('glm_cert');
  }
  public set glmCert(value: string) {
    this._glmCert = value;
  }
  public resetGlmCert() {
    this._glmCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmCertInput() {
    return this._glmCert;
  }

  // glm_license - computed: false, optional: true, required: false
  private _glmLicense?: string; 
  public get glmLicense() {
    return this.getStringAttribute('glm_license');
  }
  public set glmLicense(value: string) {
    this._glmLicense = value;
  }
  public resetGlmLicense() {
    this._glmLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmLicenseInput() {
    return this._glmLicense;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
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

  // web_category_license - computed: false, optional: true, required: false
  private _webCategoryLicense?: string; 
  public get webCategoryLicense() {
    return this.getStringAttribute('web_category_license');
  }
  public set webCategoryLicense(value: string) {
    this._webCategoryLicense = value;
  }
  public resetWebCategoryLicense() {
    this._webCategoryLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryLicenseInput() {
    return this._webCategoryLicense;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.numberToTerraform(this._device),
      glm_cert: cdktf.stringToTerraform(this._glmCert),
      glm_license: cdktf.stringToTerraform(this._glmLicense),
      id: cdktf.stringToTerraform(this._id),
      overwrite: cdktf.numberToTerraform(this._overwrite),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      web_category_license: cdktf.stringToTerraform(this._webCategoryLicense),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.numberToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      glm_cert: {
        value: cdktf.stringToHclTerraform(this._glmCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glm_license: {
        value: cdktf.stringToHclTerraform(this._glmLicense),
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
      overwrite: {
        value: cdktf.numberToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      web_category_license: {
        value: cdktf.stringToHclTerraform(this._webCategoryLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
