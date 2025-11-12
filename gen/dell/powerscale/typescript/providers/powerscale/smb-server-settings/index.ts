// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmbServerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only enumerate files and folders the requesting user has access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#access_based_share_enum SmbServerSettings#access_based_share_enum}
  */
  readonly accessBasedShareEnum?: boolean | cdktf.IResolvable;
  /**
  * Specify level of file share audit events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#audit_fileshare SmbServerSettings#audit_fileshare}
  */
  readonly auditFileshare?: string;
  /**
  * Specify the level of logon audit events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#audit_logon SmbServerSettings#audit_logon}
  */
  readonly auditLogon?: string;
  /**
  * Allow access to .snapshot directories in share subdirectories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#dot_snap_accessible_child SmbServerSettings#dot_snap_accessible_child}
  */
  readonly dotSnapAccessibleChild?: boolean | cdktf.IResolvable;
  /**
  * Allow access to the .snapshot directory in the root of the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#dot_snap_accessible_root SmbServerSettings#dot_snap_accessible_root}
  */
  readonly dotSnapAccessibleRoot?: boolean | cdktf.IResolvable;
  /**
  * Show .snapshot directories in share subdirectories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#dot_snap_visible_child SmbServerSettings#dot_snap_visible_child}
  */
  readonly dotSnapVisibleChild?: boolean | cdktf.IResolvable;
  /**
  * Show the .snapshot directory in the root of a share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#dot_snap_visible_root SmbServerSettings#dot_snap_visible_root}
  */
  readonly dotSnapVisibleRoot?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server supports signed SMB packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#enable_security_signatures SmbServerSettings#enable_security_signatures}
  */
  readonly enableSecuritySignatures?: boolean | cdktf.IResolvable;
  /**
  * Specifies the fully-qualified user to use for guest access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#guest_user SmbServerSettings#guest_user}
  */
  readonly guestUser?: string;
  /**
  * Specify whether to ignore EAs on files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#ignore_eas SmbServerSettings#ignore_eas}
  */
  readonly ignoreEas?: boolean | cdktf.IResolvable;
  /**
  * Specify the number of OneFS driver worker threads per CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#onefs_cpu_multiplier SmbServerSettings#onefs_cpu_multiplier}
  */
  readonly onefsCpuMultiplier?: number;
  /**
  * Set the maximum number of OneFS driver worker threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#onefs_num_workers SmbServerSettings#onefs_num_workers}
  */
  readonly onefsNumWorkers?: number;
  /**
  * If SMB3 encryption is enabled, reject unencrypted access from clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#reject_unencrypted_access SmbServerSettings#reject_unencrypted_access}
  */
  readonly rejectUnencryptedAccess?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server requires signed SMB packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#require_security_signatures SmbServerSettings#require_security_signatures}
  */
  readonly requireSecuritySignatures?: boolean | cdktf.IResolvable;
  /**
  * If specified as "effective" or not specified, all fields are returned.  If specified as "user", only fields with non-default values are shown.  If specified as "default", the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#scope SmbServerSettings#scope}
  */
  readonly scope?: string;
  /**
  * Enable Server Side Copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#server_side_copy SmbServerSettings#server_side_copy}
  */
  readonly serverSideCopy?: boolean | cdktf.IResolvable;
  /**
  * Provides a description of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#server_string SmbServerSettings#server_string}
  */
  readonly serverString?: string;
  /**
  * Specify whether service is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#service SmbServerSettings#service}
  */
  readonly service?: boolean | cdktf.IResolvable;
  /**
  * Specify the number of SRV service worker threads per CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#srv_cpu_multiplier SmbServerSettings#srv_cpu_multiplier}
  */
  readonly srvCpuMultiplier?: number;
  /**
  * Set the maximum number of SRV service worker threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#srv_num_workers SmbServerSettings#srv_num_workers}
  */
  readonly srvNumWorkers?: number;
  /**
  * Support multichannel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#support_multichannel SmbServerSettings#support_multichannel}
  */
  readonly supportMultichannel?: boolean | cdktf.IResolvable;
  /**
  * Support NetBIOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#support_netbios SmbServerSettings#support_netbios}
  */
  readonly supportNetbios?: boolean | cdktf.IResolvable;
  /**
  * Support the SMB2 protocol on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#support_smb2 SmbServerSettings#support_smb2}
  */
  readonly supportSmb2?: boolean | cdktf.IResolvable;
  /**
  * Support the SMB3 encryption on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#support_smb3_encryption SmbServerSettings#support_smb3_encryption}
  */
  readonly supportSmb3Encryption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings powerscale_smb_server_settings}
*/
export class SmbServerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smb_server_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmbServerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmbServerSettings to import
  * @param importFromId The id of the existing SmbServerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmbServerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smb_server_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_server_settings powerscale_smb_server_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmbServerSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SmbServerSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smb_server_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessBasedShareEnum = config.accessBasedShareEnum;
    this._auditFileshare = config.auditFileshare;
    this._auditLogon = config.auditLogon;
    this._dotSnapAccessibleChild = config.dotSnapAccessibleChild;
    this._dotSnapAccessibleRoot = config.dotSnapAccessibleRoot;
    this._dotSnapVisibleChild = config.dotSnapVisibleChild;
    this._dotSnapVisibleRoot = config.dotSnapVisibleRoot;
    this._enableSecuritySignatures = config.enableSecuritySignatures;
    this._guestUser = config.guestUser;
    this._ignoreEas = config.ignoreEas;
    this._onefsCpuMultiplier = config.onefsCpuMultiplier;
    this._onefsNumWorkers = config.onefsNumWorkers;
    this._rejectUnencryptedAccess = config.rejectUnencryptedAccess;
    this._requireSecuritySignatures = config.requireSecuritySignatures;
    this._scope = config.scope;
    this._serverSideCopy = config.serverSideCopy;
    this._serverString = config.serverString;
    this._service = config.service;
    this._srvCpuMultiplier = config.srvCpuMultiplier;
    this._srvNumWorkers = config.srvNumWorkers;
    this._supportMultichannel = config.supportMultichannel;
    this._supportNetbios = config.supportNetbios;
    this._supportSmb2 = config.supportSmb2;
    this._supportSmb3Encryption = config.supportSmb3Encryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_based_share_enum - computed: true, optional: true, required: false
  private _accessBasedShareEnum?: boolean | cdktf.IResolvable; 
  public get accessBasedShareEnum() {
    return this.getBooleanAttribute('access_based_share_enum');
  }
  public set accessBasedShareEnum(value: boolean | cdktf.IResolvable) {
    this._accessBasedShareEnum = value;
  }
  public resetAccessBasedShareEnum() {
    this._accessBasedShareEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessBasedShareEnumInput() {
    return this._accessBasedShareEnum;
  }

  // audit_fileshare - computed: true, optional: true, required: false
  private _auditFileshare?: string; 
  public get auditFileshare() {
    return this.getStringAttribute('audit_fileshare');
  }
  public set auditFileshare(value: string) {
    this._auditFileshare = value;
  }
  public resetAuditFileshare() {
    this._auditFileshare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFileshareInput() {
    return this._auditFileshare;
  }

  // audit_logon - computed: true, optional: true, required: false
  private _auditLogon?: string; 
  public get auditLogon() {
    return this.getStringAttribute('audit_logon');
  }
  public set auditLogon(value: string) {
    this._auditLogon = value;
  }
  public resetAuditLogon() {
    this._auditLogon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogonInput() {
    return this._auditLogon;
  }

  // dot_snap_accessible_child - computed: true, optional: true, required: false
  private _dotSnapAccessibleChild?: boolean | cdktf.IResolvable; 
  public get dotSnapAccessibleChild() {
    return this.getBooleanAttribute('dot_snap_accessible_child');
  }
  public set dotSnapAccessibleChild(value: boolean | cdktf.IResolvable) {
    this._dotSnapAccessibleChild = value;
  }
  public resetDotSnapAccessibleChild() {
    this._dotSnapAccessibleChild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotSnapAccessibleChildInput() {
    return this._dotSnapAccessibleChild;
  }

  // dot_snap_accessible_root - computed: true, optional: true, required: false
  private _dotSnapAccessibleRoot?: boolean | cdktf.IResolvable; 
  public get dotSnapAccessibleRoot() {
    return this.getBooleanAttribute('dot_snap_accessible_root');
  }
  public set dotSnapAccessibleRoot(value: boolean | cdktf.IResolvable) {
    this._dotSnapAccessibleRoot = value;
  }
  public resetDotSnapAccessibleRoot() {
    this._dotSnapAccessibleRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotSnapAccessibleRootInput() {
    return this._dotSnapAccessibleRoot;
  }

  // dot_snap_visible_child - computed: true, optional: true, required: false
  private _dotSnapVisibleChild?: boolean | cdktf.IResolvable; 
  public get dotSnapVisibleChild() {
    return this.getBooleanAttribute('dot_snap_visible_child');
  }
  public set dotSnapVisibleChild(value: boolean | cdktf.IResolvable) {
    this._dotSnapVisibleChild = value;
  }
  public resetDotSnapVisibleChild() {
    this._dotSnapVisibleChild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotSnapVisibleChildInput() {
    return this._dotSnapVisibleChild;
  }

  // dot_snap_visible_root - computed: true, optional: true, required: false
  private _dotSnapVisibleRoot?: boolean | cdktf.IResolvable; 
  public get dotSnapVisibleRoot() {
    return this.getBooleanAttribute('dot_snap_visible_root');
  }
  public set dotSnapVisibleRoot(value: boolean | cdktf.IResolvable) {
    this._dotSnapVisibleRoot = value;
  }
  public resetDotSnapVisibleRoot() {
    this._dotSnapVisibleRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotSnapVisibleRootInput() {
    return this._dotSnapVisibleRoot;
  }

  // enable_security_signatures - computed: true, optional: true, required: false
  private _enableSecuritySignatures?: boolean | cdktf.IResolvable; 
  public get enableSecuritySignatures() {
    return this.getBooleanAttribute('enable_security_signatures');
  }
  public set enableSecuritySignatures(value: boolean | cdktf.IResolvable) {
    this._enableSecuritySignatures = value;
  }
  public resetEnableSecuritySignatures() {
    this._enableSecuritySignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecuritySignaturesInput() {
    return this._enableSecuritySignatures;
  }

  // guest_user - computed: true, optional: true, required: false
  private _guestUser?: string; 
  public get guestUser() {
    return this.getStringAttribute('guest_user');
  }
  public set guestUser(value: string) {
    this._guestUser = value;
  }
  public resetGuestUser() {
    this._guestUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestUserInput() {
    return this._guestUser;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_eas - computed: true, optional: true, required: false
  private _ignoreEas?: boolean | cdktf.IResolvable; 
  public get ignoreEas() {
    return this.getBooleanAttribute('ignore_eas');
  }
  public set ignoreEas(value: boolean | cdktf.IResolvable) {
    this._ignoreEas = value;
  }
  public resetIgnoreEas() {
    this._ignoreEas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEasInput() {
    return this._ignoreEas;
  }

  // onefs_cpu_multiplier - computed: true, optional: true, required: false
  private _onefsCpuMultiplier?: number; 
  public get onefsCpuMultiplier() {
    return this.getNumberAttribute('onefs_cpu_multiplier');
  }
  public set onefsCpuMultiplier(value: number) {
    this._onefsCpuMultiplier = value;
  }
  public resetOnefsCpuMultiplier() {
    this._onefsCpuMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onefsCpuMultiplierInput() {
    return this._onefsCpuMultiplier;
  }

  // onefs_num_workers - computed: true, optional: true, required: false
  private _onefsNumWorkers?: number; 
  public get onefsNumWorkers() {
    return this.getNumberAttribute('onefs_num_workers');
  }
  public set onefsNumWorkers(value: number) {
    this._onefsNumWorkers = value;
  }
  public resetOnefsNumWorkers() {
    this._onefsNumWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onefsNumWorkersInput() {
    return this._onefsNumWorkers;
  }

  // reject_unencrypted_access - computed: true, optional: true, required: false
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

  // require_security_signatures - computed: true, optional: true, required: false
  private _requireSecuritySignatures?: boolean | cdktf.IResolvable; 
  public get requireSecuritySignatures() {
    return this.getBooleanAttribute('require_security_signatures');
  }
  public set requireSecuritySignatures(value: boolean | cdktf.IResolvable) {
    this._requireSecuritySignatures = value;
  }
  public resetRequireSecuritySignatures() {
    this._requireSecuritySignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecuritySignaturesInput() {
    return this._requireSecuritySignatures;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // server_side_copy - computed: true, optional: true, required: false
  private _serverSideCopy?: boolean | cdktf.IResolvable; 
  public get serverSideCopy() {
    return this.getBooleanAttribute('server_side_copy');
  }
  public set serverSideCopy(value: boolean | cdktf.IResolvable) {
    this._serverSideCopy = value;
  }
  public resetServerSideCopy() {
    this._serverSideCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideCopyInput() {
    return this._serverSideCopy;
  }

  // server_string - computed: true, optional: true, required: false
  private _serverString?: string; 
  public get serverString() {
    return this.getStringAttribute('server_string');
  }
  public set serverString(value: string) {
    this._serverString = value;
  }
  public resetServerString() {
    this._serverString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStringInput() {
    return this._serverString;
  }

  // service - computed: true, optional: true, required: false
  private _service?: boolean | cdktf.IResolvable; 
  public get service() {
    return this.getBooleanAttribute('service');
  }
  public set service(value: boolean | cdktf.IResolvable) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // srv_cpu_multiplier - computed: true, optional: true, required: false
  private _srvCpuMultiplier?: number; 
  public get srvCpuMultiplier() {
    return this.getNumberAttribute('srv_cpu_multiplier');
  }
  public set srvCpuMultiplier(value: number) {
    this._srvCpuMultiplier = value;
  }
  public resetSrvCpuMultiplier() {
    this._srvCpuMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvCpuMultiplierInput() {
    return this._srvCpuMultiplier;
  }

  // srv_num_workers - computed: true, optional: true, required: false
  private _srvNumWorkers?: number; 
  public get srvNumWorkers() {
    return this.getNumberAttribute('srv_num_workers');
  }
  public set srvNumWorkers(value: number) {
    this._srvNumWorkers = value;
  }
  public resetSrvNumWorkers() {
    this._srvNumWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvNumWorkersInput() {
    return this._srvNumWorkers;
  }

  // support_multichannel - computed: true, optional: true, required: false
  private _supportMultichannel?: boolean | cdktf.IResolvable; 
  public get supportMultichannel() {
    return this.getBooleanAttribute('support_multichannel');
  }
  public set supportMultichannel(value: boolean | cdktf.IResolvable) {
    this._supportMultichannel = value;
  }
  public resetSupportMultichannel() {
    this._supportMultichannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportMultichannelInput() {
    return this._supportMultichannel;
  }

  // support_netbios - computed: true, optional: true, required: false
  private _supportNetbios?: boolean | cdktf.IResolvable; 
  public get supportNetbios() {
    return this.getBooleanAttribute('support_netbios');
  }
  public set supportNetbios(value: boolean | cdktf.IResolvable) {
    this._supportNetbios = value;
  }
  public resetSupportNetbios() {
    this._supportNetbios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportNetbiosInput() {
    return this._supportNetbios;
  }

  // support_smb2 - computed: true, optional: true, required: false
  private _supportSmb2?: boolean | cdktf.IResolvable; 
  public get supportSmb2() {
    return this.getBooleanAttribute('support_smb2');
  }
  public set supportSmb2(value: boolean | cdktf.IResolvable) {
    this._supportSmb2 = value;
  }
  public resetSupportSmb2() {
    this._supportSmb2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSmb2Input() {
    return this._supportSmb2;
  }

  // support_smb3_encryption - computed: true, optional: true, required: false
  private _supportSmb3Encryption?: boolean | cdktf.IResolvable; 
  public get supportSmb3Encryption() {
    return this.getBooleanAttribute('support_smb3_encryption');
  }
  public set supportSmb3Encryption(value: boolean | cdktf.IResolvable) {
    this._supportSmb3Encryption = value;
  }
  public resetSupportSmb3Encryption() {
    this._supportSmb3Encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSmb3EncryptionInput() {
    return this._supportSmb3Encryption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_based_share_enum: cdktf.booleanToTerraform(this._accessBasedShareEnum),
      audit_fileshare: cdktf.stringToTerraform(this._auditFileshare),
      audit_logon: cdktf.stringToTerraform(this._auditLogon),
      dot_snap_accessible_child: cdktf.booleanToTerraform(this._dotSnapAccessibleChild),
      dot_snap_accessible_root: cdktf.booleanToTerraform(this._dotSnapAccessibleRoot),
      dot_snap_visible_child: cdktf.booleanToTerraform(this._dotSnapVisibleChild),
      dot_snap_visible_root: cdktf.booleanToTerraform(this._dotSnapVisibleRoot),
      enable_security_signatures: cdktf.booleanToTerraform(this._enableSecuritySignatures),
      guest_user: cdktf.stringToTerraform(this._guestUser),
      ignore_eas: cdktf.booleanToTerraform(this._ignoreEas),
      onefs_cpu_multiplier: cdktf.numberToTerraform(this._onefsCpuMultiplier),
      onefs_num_workers: cdktf.numberToTerraform(this._onefsNumWorkers),
      reject_unencrypted_access: cdktf.booleanToTerraform(this._rejectUnencryptedAccess),
      require_security_signatures: cdktf.booleanToTerraform(this._requireSecuritySignatures),
      scope: cdktf.stringToTerraform(this._scope),
      server_side_copy: cdktf.booleanToTerraform(this._serverSideCopy),
      server_string: cdktf.stringToTerraform(this._serverString),
      service: cdktf.booleanToTerraform(this._service),
      srv_cpu_multiplier: cdktf.numberToTerraform(this._srvCpuMultiplier),
      srv_num_workers: cdktf.numberToTerraform(this._srvNumWorkers),
      support_multichannel: cdktf.booleanToTerraform(this._supportMultichannel),
      support_netbios: cdktf.booleanToTerraform(this._supportNetbios),
      support_smb2: cdktf.booleanToTerraform(this._supportSmb2),
      support_smb3_encryption: cdktf.booleanToTerraform(this._supportSmb3Encryption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_based_share_enum: {
        value: cdktf.booleanToHclTerraform(this._accessBasedShareEnum),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_fileshare: {
        value: cdktf.stringToHclTerraform(this._auditFileshare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_logon: {
        value: cdktf.stringToHclTerraform(this._auditLogon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot_snap_accessible_child: {
        value: cdktf.booleanToHclTerraform(this._dotSnapAccessibleChild),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot_snap_accessible_root: {
        value: cdktf.booleanToHclTerraform(this._dotSnapAccessibleRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot_snap_visible_child: {
        value: cdktf.booleanToHclTerraform(this._dotSnapVisibleChild),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot_snap_visible_root: {
        value: cdktf.booleanToHclTerraform(this._dotSnapVisibleRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_security_signatures: {
        value: cdktf.booleanToHclTerraform(this._enableSecuritySignatures),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_user: {
        value: cdktf.stringToHclTerraform(this._guestUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_eas: {
        value: cdktf.booleanToHclTerraform(this._ignoreEas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      onefs_cpu_multiplier: {
        value: cdktf.numberToHclTerraform(this._onefsCpuMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      onefs_num_workers: {
        value: cdktf.numberToHclTerraform(this._onefsNumWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reject_unencrypted_access: {
        value: cdktf.booleanToHclTerraform(this._rejectUnencryptedAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_security_signatures: {
        value: cdktf.booleanToHclTerraform(this._requireSecuritySignatures),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_side_copy: {
        value: cdktf.booleanToHclTerraform(this._serverSideCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_string: {
        value: cdktf.stringToHclTerraform(this._serverString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.booleanToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      srv_cpu_multiplier: {
        value: cdktf.numberToHclTerraform(this._srvCpuMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srv_num_workers: {
        value: cdktf.numberToHclTerraform(this._srvNumWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_multichannel: {
        value: cdktf.booleanToHclTerraform(this._supportMultichannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_netbios: {
        value: cdktf.booleanToHclTerraform(this._supportNetbios),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_smb2: {
        value: cdktf.booleanToHclTerraform(this._supportSmb2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_smb3_encryption: {
        value: cdktf.booleanToHclTerraform(this._supportSmb3Encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
