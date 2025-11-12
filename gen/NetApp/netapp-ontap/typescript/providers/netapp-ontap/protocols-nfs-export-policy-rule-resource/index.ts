// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtocolsNfsExportPolicyRuleResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow Creation of Devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#allow_device_creation ProtocolsNfsExportPolicyRuleResource#allow_device_creation}
  */
  readonly allowDeviceCreation?: boolean | cdktf.IResolvable;
  /**
  * Honor SetUID Bits in SETATTR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#allow_suid ProtocolsNfsExportPolicyRuleResource#allow_suid}
  */
  readonly allowSuid?: boolean | cdktf.IResolvable;
  /**
  * User ID To Which Anonymous Users Are Mapped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#anonymous_user ProtocolsNfsExportPolicyRuleResource#anonymous_user}
  */
  readonly anonymousUser?: string;
  /**
  * Specifies who is authorized to change the ownership mode of a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#chown_mode ProtocolsNfsExportPolicyRuleResource#chown_mode}
  */
  readonly chownMode?: string;
  /**
  * List of Client Match Hostnames, IP Addresses, Netgroups, or Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#clients_match ProtocolsNfsExportPolicyRuleResource#clients_match}
  */
  readonly clientsMatch: string[];
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#cx_profile_name ProtocolsNfsExportPolicyRuleResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Export policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#export_policy_name ProtocolsNfsExportPolicyRuleResource#export_policy_name}
  */
  readonly exportPolicyName: string;
  /**
  * NTFS export UNIX security options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#ntfs_unix_security ProtocolsNfsExportPolicyRuleResource#ntfs_unix_security}
  */
  readonly ntfsUnixSecurity?: string;
  /**
  * Access Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#protocols ProtocolsNfsExportPolicyRuleResource#protocols}
  */
  readonly protocols?: string[];
  /**
  * RO Access Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#ro_rule ProtocolsNfsExportPolicyRuleResource#ro_rule}
  */
  readonly roRule: string[];
  /**
  * RW Access Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#rw_rule ProtocolsNfsExportPolicyRuleResource#rw_rule}
  */
  readonly rwRule: string[];
  /**
  * Superuser Security Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#superuser ProtocolsNfsExportPolicyRuleResource#superuser}
  */
  readonly superuser?: string[];
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#svm_name ProtocolsNfsExportPolicyRuleResource#svm_name}
  */
  readonly svmName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource netapp-ontap_protocols_nfs_export_policy_rule_resource}
*/
export class ProtocolsNfsExportPolicyRuleResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_nfs_export_policy_rule_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtocolsNfsExportPolicyRuleResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtocolsNfsExportPolicyRuleResource to import
  * @param importFromId The id of the existing ProtocolsNfsExportPolicyRuleResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtocolsNfsExportPolicyRuleResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_nfs_export_policy_rule_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_nfs_export_policy_rule_resource netapp-ontap_protocols_nfs_export_policy_rule_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtocolsNfsExportPolicyRuleResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ProtocolsNfsExportPolicyRuleResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_nfs_export_policy_rule_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDeviceCreation = config.allowDeviceCreation;
    this._allowSuid = config.allowSuid;
    this._anonymousUser = config.anonymousUser;
    this._chownMode = config.chownMode;
    this._clientsMatch = config.clientsMatch;
    this._cxProfileName = config.cxProfileName;
    this._exportPolicyName = config.exportPolicyName;
    this._ntfsUnixSecurity = config.ntfsUnixSecurity;
    this._protocols = config.protocols;
    this._roRule = config.roRule;
    this._rwRule = config.rwRule;
    this._superuser = config.superuser;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_device_creation - computed: true, optional: true, required: false
  private _allowDeviceCreation?: boolean | cdktf.IResolvable; 
  public get allowDeviceCreation() {
    return this.getBooleanAttribute('allow_device_creation');
  }
  public set allowDeviceCreation(value: boolean | cdktf.IResolvable) {
    this._allowDeviceCreation = value;
  }
  public resetAllowDeviceCreation() {
    this._allowDeviceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeviceCreationInput() {
    return this._allowDeviceCreation;
  }

  // allow_suid - computed: true, optional: true, required: false
  private _allowSuid?: boolean | cdktf.IResolvable; 
  public get allowSuid() {
    return this.getBooleanAttribute('allow_suid');
  }
  public set allowSuid(value: boolean | cdktf.IResolvable) {
    this._allowSuid = value;
  }
  public resetAllowSuid() {
    this._allowSuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSuidInput() {
    return this._allowSuid;
  }

  // anonymous_user - computed: true, optional: true, required: false
  private _anonymousUser?: string; 
  public get anonymousUser() {
    return this.getStringAttribute('anonymous_user');
  }
  public set anonymousUser(value: string) {
    this._anonymousUser = value;
  }
  public resetAnonymousUser() {
    this._anonymousUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousUserInput() {
    return this._anonymousUser;
  }

  // chown_mode - computed: true, optional: true, required: false
  private _chownMode?: string; 
  public get chownMode() {
    return this.getStringAttribute('chown_mode');
  }
  public set chownMode(value: string) {
    this._chownMode = value;
  }
  public resetChownMode() {
    this._chownMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chownModeInput() {
    return this._chownMode;
  }

  // clients_match - computed: false, optional: false, required: true
  private _clientsMatch?: string[]; 
  public get clientsMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('clients_match'));
  }
  public set clientsMatch(value: string[]) {
    this._clientsMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsMatchInput() {
    return this._clientsMatch;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // export_policy_id - computed: true, optional: false, required: false
  public get exportPolicyId() {
    return this.getStringAttribute('export_policy_id');
  }

  // export_policy_name - computed: false, optional: false, required: true
  private _exportPolicyName?: string; 
  public get exportPolicyName() {
    return this.getStringAttribute('export_policy_name');
  }
  public set exportPolicyName(value: string) {
    this._exportPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyNameInput() {
    return this._exportPolicyName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ntfs_unix_security - computed: true, optional: true, required: false
  private _ntfsUnixSecurity?: string; 
  public get ntfsUnixSecurity() {
    return this.getStringAttribute('ntfs_unix_security');
  }
  public set ntfsUnixSecurity(value: string) {
    this._ntfsUnixSecurity = value;
  }
  public resetNtfsUnixSecurity() {
    this._ntfsUnixSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntfsUnixSecurityInput() {
    return this._ntfsUnixSecurity;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // ro_rule - computed: false, optional: false, required: true
  private _roRule?: string[]; 
  public get roRule() {
    return cdktf.Fn.tolist(this.getListAttribute('ro_rule'));
  }
  public set roRule(value: string[]) {
    this._roRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roRuleInput() {
    return this._roRule;
  }

  // rw_rule - computed: false, optional: false, required: true
  private _rwRule?: string[]; 
  public get rwRule() {
    return cdktf.Fn.tolist(this.getListAttribute('rw_rule'));
  }
  public set rwRule(value: string[]) {
    this._rwRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rwRuleInput() {
    return this._rwRule;
  }

  // superuser - computed: true, optional: true, required: false
  private _superuser?: string[]; 
  public get superuser() {
    return cdktf.Fn.tolist(this.getListAttribute('superuser'));
  }
  public set superuser(value: string[]) {
    this._superuser = value;
  }
  public resetSuperuser() {
    this._superuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superuserInput() {
    return this._superuser;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_device_creation: cdktf.booleanToTerraform(this._allowDeviceCreation),
      allow_suid: cdktf.booleanToTerraform(this._allowSuid),
      anonymous_user: cdktf.stringToTerraform(this._anonymousUser),
      chown_mode: cdktf.stringToTerraform(this._chownMode),
      clients_match: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientsMatch),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      export_policy_name: cdktf.stringToTerraform(this._exportPolicyName),
      ntfs_unix_security: cdktf.stringToTerraform(this._ntfsUnixSecurity),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      ro_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roRule),
      rw_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rwRule),
      superuser: cdktf.listMapper(cdktf.stringToTerraform, false)(this._superuser),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_device_creation: {
        value: cdktf.booleanToHclTerraform(this._allowDeviceCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_suid: {
        value: cdktf.booleanToHclTerraform(this._allowSuid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anonymous_user: {
        value: cdktf.stringToHclTerraform(this._anonymousUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chown_mode: {
        value: cdktf.stringToHclTerraform(this._chownMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clients_match: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientsMatch),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_policy_name: {
        value: cdktf.stringToHclTerraform(this._exportPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntfs_unix_security: {
        value: cdktf.stringToHclTerraform(this._ntfsUnixSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ro_rule: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roRule),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rw_rule: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rwRule),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      superuser: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._superuser),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
