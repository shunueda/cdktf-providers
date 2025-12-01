// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasSmbAclAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#enable_anonymous_access NasSmbAclAttachment#enable_anonymous_access}
  */
  readonly enableAnonymousAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#encrypt_data NasSmbAclAttachment#encrypt_data}
  */
  readonly encryptData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#file_system_id NasSmbAclAttachment#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#home_dir_path NasSmbAclAttachment#home_dir_path}
  */
  readonly homeDirPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#id NasSmbAclAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#keytab NasSmbAclAttachment#keytab}
  */
  readonly keytab: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#keytab_md5 NasSmbAclAttachment#keytab_md5}
  */
  readonly keytabMd5: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#reject_unencrypted_access NasSmbAclAttachment#reject_unencrypted_access}
  */
  readonly rejectUnencryptedAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#super_admin_sid NasSmbAclAttachment#super_admin_sid}
  */
  readonly superAdminSid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment alicloud_nas_smb_acl_attachment}
*/
export class NasSmbAclAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nas_smb_acl_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasSmbAclAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasSmbAclAttachment to import
  * @param importFromId The id of the existing NasSmbAclAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasSmbAclAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nas_smb_acl_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_smb_acl_attachment alicloud_nas_smb_acl_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasSmbAclAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: NasSmbAclAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nas_smb_acl_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableAnonymousAccess = config.enableAnonymousAccess;
    this._encryptData = config.encryptData;
    this._fileSystemId = config.fileSystemId;
    this._homeDirPath = config.homeDirPath;
    this._id = config.id;
    this._keytab = config.keytab;
    this._keytabMd5 = config.keytabMd5;
    this._rejectUnencryptedAccess = config.rejectUnencryptedAccess;
    this._superAdminSid = config.superAdminSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // enable_anonymous_access - computed: false, optional: true, required: false
  private _enableAnonymousAccess?: boolean | cdktf.IResolvable; 
  public get enableAnonymousAccess() {
    return this.getBooleanAttribute('enable_anonymous_access');
  }
  public set enableAnonymousAccess(value: boolean | cdktf.IResolvable) {
    this._enableAnonymousAccess = value;
  }
  public resetEnableAnonymousAccess() {
    this._enableAnonymousAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnonymousAccessInput() {
    return this._enableAnonymousAccess;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // encrypt_data - computed: false, optional: true, required: false
  private _encryptData?: boolean | cdktf.IResolvable; 
  public get encryptData() {
    return this.getBooleanAttribute('encrypt_data');
  }
  public set encryptData(value: boolean | cdktf.IResolvable) {
    this._encryptData = value;
  }
  public resetEncryptData() {
    this._encryptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDataInput() {
    return this._encryptData;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // home_dir_path - computed: false, optional: true, required: false
  private _homeDirPath?: string; 
  public get homeDirPath() {
    return this.getStringAttribute('home_dir_path');
  }
  public set homeDirPath(value: string) {
    this._homeDirPath = value;
  }
  public resetHomeDirPath() {
    this._homeDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirPathInput() {
    return this._homeDirPath;
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

  // keytab - computed: false, optional: false, required: true
  private _keytab?: string; 
  public get keytab() {
    return this.getStringAttribute('keytab');
  }
  public set keytab(value: string) {
    this._keytab = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab;
  }

  // keytab_md5 - computed: false, optional: false, required: true
  private _keytabMd5?: string; 
  public get keytabMd5() {
    return this.getStringAttribute('keytab_md5');
  }
  public set keytabMd5(value: string) {
    this._keytabMd5 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabMd5Input() {
    return this._keytabMd5;
  }

  // reject_unencrypted_access - computed: false, optional: true, required: false
  private _rejectUnencryptedAccess?: boolean | cdktf.IResolvable; 
  public get rejectUnencryptedAccess() {
    return this.getBooleanAttribute('reject_unencrypted_access');
  }
  public set rejectUnencryptedAccess(value: boolean | cdktf.IResolvable) {
    this._rejectUnencryptedAccess = value;
  }
  public resetRejectUnencryptedAccess() {
    this._rejectUnencryptedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnencryptedAccessInput() {
    return this._rejectUnencryptedAccess;
  }

  // super_admin_sid - computed: false, optional: true, required: false
  private _superAdminSid?: string; 
  public get superAdminSid() {
    return this.getStringAttribute('super_admin_sid');
  }
  public set superAdminSid(value: string) {
    this._superAdminSid = value;
  }
  public resetSuperAdminSid() {
    this._superAdminSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superAdminSidInput() {
    return this._superAdminSid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_anonymous_access: cdktf.booleanToTerraform(this._enableAnonymousAccess),
      encrypt_data: cdktf.booleanToTerraform(this._encryptData),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      home_dir_path: cdktf.stringToTerraform(this._homeDirPath),
      id: cdktf.stringToTerraform(this._id),
      keytab: cdktf.stringToTerraform(this._keytab),
      keytab_md5: cdktf.stringToTerraform(this._keytabMd5),
      reject_unencrypted_access: cdktf.booleanToTerraform(this._rejectUnencryptedAccess),
      super_admin_sid: cdktf.stringToTerraform(this._superAdminSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_anonymous_access: {
        value: cdktf.booleanToHclTerraform(this._enableAnonymousAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_data: {
        value: cdktf.booleanToHclTerraform(this._encryptData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_dir_path: {
        value: cdktf.stringToHclTerraform(this._homeDirPath),
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
      keytab: {
        value: cdktf.stringToHclTerraform(this._keytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytab_md5: {
        value: cdktf.stringToHclTerraform(this._keytabMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_unencrypted_access: {
        value: cdktf.booleanToHclTerraform(this._rejectUnencryptedAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      super_admin_sid: {
        value: cdktf.stringToHclTerraform(this._superAdminSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
