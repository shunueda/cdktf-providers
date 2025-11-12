// https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#certificate_chain_required DownloadCertificate#certificate_chain_required}
  */
  readonly certificateChainRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#certificate_download_format DownloadCertificate#certificate_download_format}
  */
  readonly certificateDownloadFormat?: string;
  /**
  * Password for certificate download (resource level) - provider level password takes priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#certificate_download_password DownloadCertificate#certificate_download_password}
  */
  readonly certificateDownloadPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#certificate_download_path DownloadCertificate#certificate_download_path}
  */
  readonly certificateDownloadPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#common_name DownloadCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#download_password_protected_key DownloadCertificate#download_password_protected_key}
  */
  readonly downloadPasswordProtectedKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#id DownloadCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for private key download (resource level) - provider level password takes priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#key_download_password DownloadCertificate#key_download_password}
  */
  readonly keyDownloadPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#key_download_path DownloadCertificate#key_download_path}
  */
  readonly keyDownloadPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#resource_id DownloadCertificate#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#serial_number DownloadCertificate#serial_number}
  */
  readonly serialNumber?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate appviewx_download_certificate}
*/
export class DownloadCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_download_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadCertificate to import
  * @param importFromId The id of the existing DownloadCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_download_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/download_certificate appviewx_download_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DownloadCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'appviewx_download_certificate',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateChainRequired = config.certificateChainRequired;
    this._certificateDownloadFormat = config.certificateDownloadFormat;
    this._certificateDownloadPassword = config.certificateDownloadPassword;
    this._certificateDownloadPath = config.certificateDownloadPath;
    this._commonName = config.commonName;
    this._downloadPasswordProtectedKey = config.downloadPasswordProtectedKey;
    this._id = config.id;
    this._keyDownloadPassword = config.keyDownloadPassword;
    this._keyDownloadPath = config.keyDownloadPath;
    this._resourceId = config.resourceId;
    this._serialNumber = config.serialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_chain_required - computed: false, optional: true, required: false
  private _certificateChainRequired?: boolean | cdktf.IResolvable; 
  public get certificateChainRequired() {
    return this.getBooleanAttribute('certificate_chain_required');
  }
  public set certificateChainRequired(value: boolean | cdktf.IResolvable) {
    this._certificateChainRequired = value;
  }
  public resetCertificateChainRequired() {
    this._certificateChainRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainRequiredInput() {
    return this._certificateChainRequired;
  }

  // certificate_download_format - computed: false, optional: true, required: false
  private _certificateDownloadFormat?: string; 
  public get certificateDownloadFormat() {
    return this.getStringAttribute('certificate_download_format');
  }
  public set certificateDownloadFormat(value: string) {
    this._certificateDownloadFormat = value;
  }
  public resetCertificateDownloadFormat() {
    this._certificateDownloadFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadFormatInput() {
    return this._certificateDownloadFormat;
  }

  // certificate_download_password - computed: false, optional: true, required: false
  private _certificateDownloadPassword?: string; 
  public get certificateDownloadPassword() {
    return this.getStringAttribute('certificate_download_password');
  }
  public set certificateDownloadPassword(value: string) {
    this._certificateDownloadPassword = value;
  }
  public resetCertificateDownloadPassword() {
    this._certificateDownloadPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadPasswordInput() {
    return this._certificateDownloadPassword;
  }

  // certificate_download_path - computed: false, optional: true, required: false
  private _certificateDownloadPath?: string; 
  public get certificateDownloadPath() {
    return this.getStringAttribute('certificate_download_path');
  }
  public set certificateDownloadPath(value: string) {
    this._certificateDownloadPath = value;
  }
  public resetCertificateDownloadPath() {
    this._certificateDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadPathInput() {
    return this._certificateDownloadPath;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // download_password_protected_key - computed: false, optional: true, required: false
  private _downloadPasswordProtectedKey?: boolean | cdktf.IResolvable; 
  public get downloadPasswordProtectedKey() {
    return this.getBooleanAttribute('download_password_protected_key');
  }
  public set downloadPasswordProtectedKey(value: boolean | cdktf.IResolvable) {
    this._downloadPasswordProtectedKey = value;
  }
  public resetDownloadPasswordProtectedKey() {
    this._downloadPasswordProtectedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPasswordProtectedKeyInput() {
    return this._downloadPasswordProtectedKey;
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

  // key_download_password - computed: false, optional: true, required: false
  private _keyDownloadPassword?: string; 
  public get keyDownloadPassword() {
    return this.getStringAttribute('key_download_password');
  }
  public set keyDownloadPassword(value: string) {
    this._keyDownloadPassword = value;
  }
  public resetKeyDownloadPassword() {
    this._keyDownloadPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDownloadPasswordInput() {
    return this._keyDownloadPassword;
  }

  // key_download_path - computed: false, optional: true, required: false
  private _keyDownloadPath?: string; 
  public get keyDownloadPath() {
    return this.getStringAttribute('key_download_path');
  }
  public set keyDownloadPath(value: string) {
    this._keyDownloadPath = value;
  }
  public resetKeyDownloadPath() {
    this._keyDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDownloadPathInput() {
    return this._keyDownloadPath;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_chain_required: cdktf.booleanToTerraform(this._certificateChainRequired),
      certificate_download_format: cdktf.stringToTerraform(this._certificateDownloadFormat),
      certificate_download_password: cdktf.stringToTerraform(this._certificateDownloadPassword),
      certificate_download_path: cdktf.stringToTerraform(this._certificateDownloadPath),
      common_name: cdktf.stringToTerraform(this._commonName),
      download_password_protected_key: cdktf.booleanToTerraform(this._downloadPasswordProtectedKey),
      id: cdktf.stringToTerraform(this._id),
      key_download_password: cdktf.stringToTerraform(this._keyDownloadPassword),
      key_download_path: cdktf.stringToTerraform(this._keyDownloadPath),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_chain_required: {
        value: cdktf.booleanToHclTerraform(this._certificateChainRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_download_format: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_password: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_path: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_password_protected_key: {
        value: cdktf.booleanToHclTerraform(this._downloadPasswordProtectedKey),
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
      key_download_password: {
        value: cdktf.stringToHclTerraform(this._keyDownloadPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_download_path: {
        value: cdktf.stringToHclTerraform(this._keyDownloadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
