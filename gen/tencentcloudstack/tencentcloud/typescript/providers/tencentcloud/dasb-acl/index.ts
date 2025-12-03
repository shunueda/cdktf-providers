// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Associate high-risk DB template IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#ac_template_id_set DasbAcl#ac_template_id_set}
  */
  readonly acTemplateIdSet?: string[];
  /**
  * Associated accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#account_set DasbAcl#account_set}
  */
  readonly accountSet?: string[];
  /**
  * Allow access credential,default allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_access_credential DasbAcl#allow_access_credential}
  */
  readonly allowAccessCredential?: boolean | cdktf.IResolvable;
  /**
  * Allow any account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_any_account DasbAcl#allow_any_account}
  */
  readonly allowAnyAccount: boolean | cdktf.IResolvable;
  /**
  * Allow clip file down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_clip_file_down DasbAcl#allow_clip_file_down}
  */
  readonly allowClipFileDown?: boolean | cdktf.IResolvable;
  /**
  * Allow clip file up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_clip_file_up DasbAcl#allow_clip_file_up}
  */
  readonly allowClipFileUp?: boolean | cdktf.IResolvable;
  /**
  * Allow clip text down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_clip_text_down DasbAcl#allow_clip_text_down}
  */
  readonly allowClipTextDown?: boolean | cdktf.IResolvable;
  /**
  * Allow clip text up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_clip_text_up DasbAcl#allow_clip_text_up}
  */
  readonly allowClipTextUp?: boolean | cdktf.IResolvable;
  /**
  * Allow disk file download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_disk_file_down DasbAcl#allow_disk_file_down}
  */
  readonly allowDiskFileDown?: boolean | cdktf.IResolvable;
  /**
  * Allow disk file upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_disk_file_up DasbAcl#allow_disk_file_up}
  */
  readonly allowDiskFileUp?: boolean | cdktf.IResolvable;
  /**
  * Allow disk redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_disk_redirect DasbAcl#allow_disk_redirect}
  */
  readonly allowDiskRedirect: boolean | cdktf.IResolvable;
  /**
  * Allow sftp file delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_file_del DasbAcl#allow_file_del}
  */
  readonly allowFileDel?: boolean | cdktf.IResolvable;
  /**
  * Allow sftp file download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_file_down DasbAcl#allow_file_down}
  */
  readonly allowFileDown?: boolean | cdktf.IResolvable;
  /**
  * Allow sftp up file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_file_up DasbAcl#allow_file_up}
  */
  readonly allowFileUp?: boolean | cdktf.IResolvable;
  /**
  * Allow shell file download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_shell_file_down DasbAcl#allow_shell_file_down}
  */
  readonly allowShellFileDown?: boolean | cdktf.IResolvable;
  /**
  * Allow shell file upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#allow_shell_file_up DasbAcl#allow_shell_file_up}
  */
  readonly allowShellFileUp?: boolean | cdktf.IResolvable;
  /**
  * Associated high-risk command template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#cmd_template_id_set DasbAcl#cmd_template_id_set}
  */
  readonly cmdTemplateIdSet?: number[];
  /**
  * Department id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#department_id DasbAcl#department_id}
  */
  readonly departmentId?: string;
  /**
  * Associated device group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#device_group_id_set DasbAcl#device_group_id_set}
  */
  readonly deviceGroupIdSet?: number[];
  /**
  * Associated collection of device IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#device_id_set DasbAcl#device_id_set}
  */
  readonly deviceIdSet?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#id DasbAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File transfer download size limit (reserved parameter, currently unused).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#max_file_down_size DasbAcl#max_file_down_size}
  */
  readonly maxFileDownSize?: number;
  /**
  * File upload transfer size limit (artifact parameter, currently unused).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#max_file_up_size DasbAcl#max_file_up_size}
  */
  readonly maxFileUpSize?: number;
  /**
  * Acl name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#name DasbAcl#name}
  */
  readonly name: string;
  /**
  * Associated user group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#user_group_id_set DasbAcl#user_group_id_set}
  */
  readonly userGroupIdSet?: number[];
  /**
  * Associated set of user IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#user_id_set DasbAcl#user_id_set}
  */
  readonly userIdSet?: number[];
  /**
  * Access permission effective time, such as: 2021-09-22T00:00:00+08:00If the effective and expiry time are not filled in, the access rights will be valid for a long time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#validate_from DasbAcl#validate_from}
  */
  readonly validateFrom?: string;
  /**
  * Access permission expiration time, such as: 2021-09-23T00:00:00+08:00If the effective and expiry time are not filled in, the access rights will be valid for a long time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#validate_to DasbAcl#validate_to}
  */
  readonly validateTo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl tencentcloud_dasb_acl}
*/
export class DasbAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbAcl to import
  * @param importFromId The id of the existing DasbAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dasb_acl tencentcloud_dasb_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbAclConfig
  */
  public constructor(scope: Construct, id: string, config: DasbAclConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_acl',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acTemplateIdSet = config.acTemplateIdSet;
    this._accountSet = config.accountSet;
    this._allowAccessCredential = config.allowAccessCredential;
    this._allowAnyAccount = config.allowAnyAccount;
    this._allowClipFileDown = config.allowClipFileDown;
    this._allowClipFileUp = config.allowClipFileUp;
    this._allowClipTextDown = config.allowClipTextDown;
    this._allowClipTextUp = config.allowClipTextUp;
    this._allowDiskFileDown = config.allowDiskFileDown;
    this._allowDiskFileUp = config.allowDiskFileUp;
    this._allowDiskRedirect = config.allowDiskRedirect;
    this._allowFileDel = config.allowFileDel;
    this._allowFileDown = config.allowFileDown;
    this._allowFileUp = config.allowFileUp;
    this._allowShellFileDown = config.allowShellFileDown;
    this._allowShellFileUp = config.allowShellFileUp;
    this._cmdTemplateIdSet = config.cmdTemplateIdSet;
    this._departmentId = config.departmentId;
    this._deviceGroupIdSet = config.deviceGroupIdSet;
    this._deviceIdSet = config.deviceIdSet;
    this._id = config.id;
    this._maxFileDownSize = config.maxFileDownSize;
    this._maxFileUpSize = config.maxFileUpSize;
    this._name = config.name;
    this._userGroupIdSet = config.userGroupIdSet;
    this._userIdSet = config.userIdSet;
    this._validateFrom = config.validateFrom;
    this._validateTo = config.validateTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ac_template_id_set - computed: false, optional: true, required: false
  private _acTemplateIdSet?: string[]; 
  public get acTemplateIdSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ac_template_id_set'));
  }
  public set acTemplateIdSet(value: string[]) {
    this._acTemplateIdSet = value;
  }
  public resetAcTemplateIdSet() {
    this._acTemplateIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acTemplateIdSetInput() {
    return this._acTemplateIdSet;
  }

  // account_set - computed: false, optional: true, required: false
  private _accountSet?: string[]; 
  public get accountSet() {
    return cdktf.Fn.tolist(this.getListAttribute('account_set'));
  }
  public set accountSet(value: string[]) {
    this._accountSet = value;
  }
  public resetAccountSet() {
    this._accountSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSetInput() {
    return this._accountSet;
  }

  // allow_access_credential - computed: false, optional: true, required: false
  private _allowAccessCredential?: boolean | cdktf.IResolvable; 
  public get allowAccessCredential() {
    return this.getBooleanAttribute('allow_access_credential');
  }
  public set allowAccessCredential(value: boolean | cdktf.IResolvable) {
    this._allowAccessCredential = value;
  }
  public resetAllowAccessCredential() {
    this._allowAccessCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessCredentialInput() {
    return this._allowAccessCredential;
  }

  // allow_any_account - computed: false, optional: false, required: true
  private _allowAnyAccount?: boolean | cdktf.IResolvable; 
  public get allowAnyAccount() {
    return this.getBooleanAttribute('allow_any_account');
  }
  public set allowAnyAccount(value: boolean | cdktf.IResolvable) {
    this._allowAnyAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyAccountInput() {
    return this._allowAnyAccount;
  }

  // allow_clip_file_down - computed: false, optional: true, required: false
  private _allowClipFileDown?: boolean | cdktf.IResolvable; 
  public get allowClipFileDown() {
    return this.getBooleanAttribute('allow_clip_file_down');
  }
  public set allowClipFileDown(value: boolean | cdktf.IResolvable) {
    this._allowClipFileDown = value;
  }
  public resetAllowClipFileDown() {
    this._allowClipFileDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClipFileDownInput() {
    return this._allowClipFileDown;
  }

  // allow_clip_file_up - computed: false, optional: true, required: false
  private _allowClipFileUp?: boolean | cdktf.IResolvable; 
  public get allowClipFileUp() {
    return this.getBooleanAttribute('allow_clip_file_up');
  }
  public set allowClipFileUp(value: boolean | cdktf.IResolvable) {
    this._allowClipFileUp = value;
  }
  public resetAllowClipFileUp() {
    this._allowClipFileUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClipFileUpInput() {
    return this._allowClipFileUp;
  }

  // allow_clip_text_down - computed: false, optional: true, required: false
  private _allowClipTextDown?: boolean | cdktf.IResolvable; 
  public get allowClipTextDown() {
    return this.getBooleanAttribute('allow_clip_text_down');
  }
  public set allowClipTextDown(value: boolean | cdktf.IResolvable) {
    this._allowClipTextDown = value;
  }
  public resetAllowClipTextDown() {
    this._allowClipTextDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClipTextDownInput() {
    return this._allowClipTextDown;
  }

  // allow_clip_text_up - computed: false, optional: true, required: false
  private _allowClipTextUp?: boolean | cdktf.IResolvable; 
  public get allowClipTextUp() {
    return this.getBooleanAttribute('allow_clip_text_up');
  }
  public set allowClipTextUp(value: boolean | cdktf.IResolvable) {
    this._allowClipTextUp = value;
  }
  public resetAllowClipTextUp() {
    this._allowClipTextUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClipTextUpInput() {
    return this._allowClipTextUp;
  }

  // allow_disk_file_down - computed: false, optional: true, required: false
  private _allowDiskFileDown?: boolean | cdktf.IResolvable; 
  public get allowDiskFileDown() {
    return this.getBooleanAttribute('allow_disk_file_down');
  }
  public set allowDiskFileDown(value: boolean | cdktf.IResolvable) {
    this._allowDiskFileDown = value;
  }
  public resetAllowDiskFileDown() {
    this._allowDiskFileDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDiskFileDownInput() {
    return this._allowDiskFileDown;
  }

  // allow_disk_file_up - computed: false, optional: true, required: false
  private _allowDiskFileUp?: boolean | cdktf.IResolvable; 
  public get allowDiskFileUp() {
    return this.getBooleanAttribute('allow_disk_file_up');
  }
  public set allowDiskFileUp(value: boolean | cdktf.IResolvable) {
    this._allowDiskFileUp = value;
  }
  public resetAllowDiskFileUp() {
    this._allowDiskFileUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDiskFileUpInput() {
    return this._allowDiskFileUp;
  }

  // allow_disk_redirect - computed: false, optional: false, required: true
  private _allowDiskRedirect?: boolean | cdktf.IResolvable; 
  public get allowDiskRedirect() {
    return this.getBooleanAttribute('allow_disk_redirect');
  }
  public set allowDiskRedirect(value: boolean | cdktf.IResolvable) {
    this._allowDiskRedirect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDiskRedirectInput() {
    return this._allowDiskRedirect;
  }

  // allow_file_del - computed: false, optional: true, required: false
  private _allowFileDel?: boolean | cdktf.IResolvable; 
  public get allowFileDel() {
    return this.getBooleanAttribute('allow_file_del');
  }
  public set allowFileDel(value: boolean | cdktf.IResolvable) {
    this._allowFileDel = value;
  }
  public resetAllowFileDel() {
    this._allowFileDel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFileDelInput() {
    return this._allowFileDel;
  }

  // allow_file_down - computed: false, optional: true, required: false
  private _allowFileDown?: boolean | cdktf.IResolvable; 
  public get allowFileDown() {
    return this.getBooleanAttribute('allow_file_down');
  }
  public set allowFileDown(value: boolean | cdktf.IResolvable) {
    this._allowFileDown = value;
  }
  public resetAllowFileDown() {
    this._allowFileDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFileDownInput() {
    return this._allowFileDown;
  }

  // allow_file_up - computed: false, optional: true, required: false
  private _allowFileUp?: boolean | cdktf.IResolvable; 
  public get allowFileUp() {
    return this.getBooleanAttribute('allow_file_up');
  }
  public set allowFileUp(value: boolean | cdktf.IResolvable) {
    this._allowFileUp = value;
  }
  public resetAllowFileUp() {
    this._allowFileUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFileUpInput() {
    return this._allowFileUp;
  }

  // allow_shell_file_down - computed: false, optional: true, required: false
  private _allowShellFileDown?: boolean | cdktf.IResolvable; 
  public get allowShellFileDown() {
    return this.getBooleanAttribute('allow_shell_file_down');
  }
  public set allowShellFileDown(value: boolean | cdktf.IResolvable) {
    this._allowShellFileDown = value;
  }
  public resetAllowShellFileDown() {
    this._allowShellFileDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShellFileDownInput() {
    return this._allowShellFileDown;
  }

  // allow_shell_file_up - computed: false, optional: true, required: false
  private _allowShellFileUp?: boolean | cdktf.IResolvable; 
  public get allowShellFileUp() {
    return this.getBooleanAttribute('allow_shell_file_up');
  }
  public set allowShellFileUp(value: boolean | cdktf.IResolvable) {
    this._allowShellFileUp = value;
  }
  public resetAllowShellFileUp() {
    this._allowShellFileUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShellFileUpInput() {
    return this._allowShellFileUp;
  }

  // cmd_template_id_set - computed: false, optional: true, required: false
  private _cmdTemplateIdSet?: number[]; 
  public get cmdTemplateIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cmd_template_id_set')));
  }
  public set cmdTemplateIdSet(value: number[]) {
    this._cmdTemplateIdSet = value;
  }
  public resetCmdTemplateIdSet() {
    this._cmdTemplateIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdTemplateIdSetInput() {
    return this._cmdTemplateIdSet;
  }

  // department_id - computed: false, optional: true, required: false
  private _departmentId?: string; 
  public get departmentId() {
    return this.getStringAttribute('department_id');
  }
  public set departmentId(value: string) {
    this._departmentId = value;
  }
  public resetDepartmentId() {
    this._departmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentIdInput() {
    return this._departmentId;
  }

  // device_group_id_set - computed: false, optional: true, required: false
  private _deviceGroupIdSet?: number[]; 
  public get deviceGroupIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('device_group_id_set')));
  }
  public set deviceGroupIdSet(value: number[]) {
    this._deviceGroupIdSet = value;
  }
  public resetDeviceGroupIdSet() {
    this._deviceGroupIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupIdSetInput() {
    return this._deviceGroupIdSet;
  }

  // device_id_set - computed: false, optional: true, required: false
  private _deviceIdSet?: number[]; 
  public get deviceIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('device_id_set')));
  }
  public set deviceIdSet(value: number[]) {
    this._deviceIdSet = value;
  }
  public resetDeviceIdSet() {
    this._deviceIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdSetInput() {
    return this._deviceIdSet;
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

  // max_file_down_size - computed: false, optional: true, required: false
  private _maxFileDownSize?: number; 
  public get maxFileDownSize() {
    return this.getNumberAttribute('max_file_down_size');
  }
  public set maxFileDownSize(value: number) {
    this._maxFileDownSize = value;
  }
  public resetMaxFileDownSize() {
    this._maxFileDownSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileDownSizeInput() {
    return this._maxFileDownSize;
  }

  // max_file_up_size - computed: false, optional: true, required: false
  private _maxFileUpSize?: number; 
  public get maxFileUpSize() {
    return this.getNumberAttribute('max_file_up_size');
  }
  public set maxFileUpSize(value: number) {
    this._maxFileUpSize = value;
  }
  public resetMaxFileUpSize() {
    this._maxFileUpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileUpSizeInput() {
    return this._maxFileUpSize;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // user_group_id_set - computed: false, optional: true, required: false
  private _userGroupIdSet?: number[]; 
  public get userGroupIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_group_id_set')));
  }
  public set userGroupIdSet(value: number[]) {
    this._userGroupIdSet = value;
  }
  public resetUserGroupIdSet() {
    this._userGroupIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdSetInput() {
    return this._userGroupIdSet;
  }

  // user_id_set - computed: false, optional: true, required: false
  private _userIdSet?: number[]; 
  public get userIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_id_set')));
  }
  public set userIdSet(value: number[]) {
    this._userIdSet = value;
  }
  public resetUserIdSet() {
    this._userIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdSetInput() {
    return this._userIdSet;
  }

  // validate_from - computed: true, optional: true, required: false
  private _validateFrom?: string; 
  public get validateFrom() {
    return this.getStringAttribute('validate_from');
  }
  public set validateFrom(value: string) {
    this._validateFrom = value;
  }
  public resetValidateFrom() {
    this._validateFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateFromInput() {
    return this._validateFrom;
  }

  // validate_to - computed: true, optional: true, required: false
  private _validateTo?: string; 
  public get validateTo() {
    return this.getStringAttribute('validate_to');
  }
  public set validateTo(value: string) {
    this._validateTo = value;
  }
  public resetValidateTo() {
    this._validateTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateToInput() {
    return this._validateTo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ac_template_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acTemplateIdSet),
      account_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountSet),
      allow_access_credential: cdktf.booleanToTerraform(this._allowAccessCredential),
      allow_any_account: cdktf.booleanToTerraform(this._allowAnyAccount),
      allow_clip_file_down: cdktf.booleanToTerraform(this._allowClipFileDown),
      allow_clip_file_up: cdktf.booleanToTerraform(this._allowClipFileUp),
      allow_clip_text_down: cdktf.booleanToTerraform(this._allowClipTextDown),
      allow_clip_text_up: cdktf.booleanToTerraform(this._allowClipTextUp),
      allow_disk_file_down: cdktf.booleanToTerraform(this._allowDiskFileDown),
      allow_disk_file_up: cdktf.booleanToTerraform(this._allowDiskFileUp),
      allow_disk_redirect: cdktf.booleanToTerraform(this._allowDiskRedirect),
      allow_file_del: cdktf.booleanToTerraform(this._allowFileDel),
      allow_file_down: cdktf.booleanToTerraform(this._allowFileDown),
      allow_file_up: cdktf.booleanToTerraform(this._allowFileUp),
      allow_shell_file_down: cdktf.booleanToTerraform(this._allowShellFileDown),
      allow_shell_file_up: cdktf.booleanToTerraform(this._allowShellFileUp),
      cmd_template_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._cmdTemplateIdSet),
      department_id: cdktf.stringToTerraform(this._departmentId),
      device_group_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceGroupIdSet),
      device_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceIdSet),
      id: cdktf.stringToTerraform(this._id),
      max_file_down_size: cdktf.numberToTerraform(this._maxFileDownSize),
      max_file_up_size: cdktf.numberToTerraform(this._maxFileUpSize),
      name: cdktf.stringToTerraform(this._name),
      user_group_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userGroupIdSet),
      user_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userIdSet),
      validate_from: cdktf.stringToTerraform(this._validateFrom),
      validate_to: cdktf.stringToTerraform(this._validateTo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ac_template_id_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acTemplateIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      account_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_access_credential: {
        value: cdktf.booleanToHclTerraform(this._allowAccessCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_any_account: {
        value: cdktf.booleanToHclTerraform(this._allowAnyAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_clip_file_down: {
        value: cdktf.booleanToHclTerraform(this._allowClipFileDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_clip_file_up: {
        value: cdktf.booleanToHclTerraform(this._allowClipFileUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_clip_text_down: {
        value: cdktf.booleanToHclTerraform(this._allowClipTextDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_clip_text_up: {
        value: cdktf.booleanToHclTerraform(this._allowClipTextUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_disk_file_down: {
        value: cdktf.booleanToHclTerraform(this._allowDiskFileDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_disk_file_up: {
        value: cdktf.booleanToHclTerraform(this._allowDiskFileUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_disk_redirect: {
        value: cdktf.booleanToHclTerraform(this._allowDiskRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_file_del: {
        value: cdktf.booleanToHclTerraform(this._allowFileDel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_file_down: {
        value: cdktf.booleanToHclTerraform(this._allowFileDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_file_up: {
        value: cdktf.booleanToHclTerraform(this._allowFileUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_shell_file_down: {
        value: cdktf.booleanToHclTerraform(this._allowShellFileDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_shell_file_up: {
        value: cdktf.booleanToHclTerraform(this._allowShellFileUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmd_template_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._cmdTemplateIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      department_id: {
        value: cdktf.stringToHclTerraform(this._departmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_group_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceGroupIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      device_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_file_down_size: {
        value: cdktf.numberToHclTerraform(this._maxFileDownSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_file_up_size: {
        value: cdktf.numberToHclTerraform(this._maxFileUpSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userGroupIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      validate_from: {
        value: cdktf.stringToHclTerraform(this._validateFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_to: {
        value: cdktf.stringToHclTerraform(this._validateTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
