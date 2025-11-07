// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines if the vCenter Server certificate should automatically be trusted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#auto_trust_certificate Vcenter#auto_trust_certificate}
  */
  readonly autoTrustCertificate: boolean | cdktf.IResolvable;
  /**
  * Description of vCenter Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#description Vcenter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#id Vcenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Should the vCenter Server be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#is_enabled Vcenter#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of vCenter Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#name Vcenter#name}
  */
  readonly name: string;
  /**
  * NSX Manager ID that this vCenter Server uses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#nsx_manager_id Vcenter#nsx_manager_id}
  */
  readonly nsxManagerId: string;
  /**
  * Password of vCenter Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#password Vcenter#password}
  */
  readonly password: string;
  /**
  * Defines if the vCenter Server should refresh Policies after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#refresh_policies_on_create Vcenter#refresh_policies_on_create}
  */
  readonly refreshPoliciesOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Defines if the vCenter Server should refresh Policies on every read operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#refresh_policies_on_read Vcenter#refresh_policies_on_read}
  */
  readonly refreshPoliciesOnRead?: boolean | cdktf.IResolvable;
  /**
  * Defines if the vCenter Server should be refreshed after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#refresh_vcenter_on_create Vcenter#refresh_vcenter_on_create}
  */
  readonly refreshVcenterOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Defines if the vCenter Server should be refreshed on every read operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#refresh_vcenter_on_read Vcenter#refresh_vcenter_on_read}
  */
  readonly refreshVcenterOnRead?: boolean | cdktf.IResolvable;
  /**
  * URL including port of vCenter Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#url Vcenter#url}
  */
  readonly url: string;
  /**
  * Username of vCenter Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#username Vcenter#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter vcfa_vcenter}
*/
export class Vcenter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_vcenter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vcenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vcenter to import
  * @param importFromId The id of the existing Vcenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vcenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_vcenter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/vcenter vcfa_vcenter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcenterConfig
  */
  public constructor(scope: Construct, id: string, config: VcenterConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_vcenter',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoTrustCertificate = config.autoTrustCertificate;
    this._description = config.description;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._nsxManagerId = config.nsxManagerId;
    this._password = config.password;
    this._refreshPoliciesOnCreate = config.refreshPoliciesOnCreate;
    this._refreshPoliciesOnRead = config.refreshPoliciesOnRead;
    this._refreshVcenterOnCreate = config.refreshVcenterOnCreate;
    this._refreshVcenterOnRead = config.refreshVcenterOnRead;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_trust_certificate - computed: false, optional: false, required: true
  private _autoTrustCertificate?: boolean | cdktf.IResolvable; 
  public get autoTrustCertificate() {
    return this.getBooleanAttribute('auto_trust_certificate');
  }
  public set autoTrustCertificate(value: boolean | cdktf.IResolvable) {
    this._autoTrustCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTrustCertificateInput() {
    return this._autoTrustCertificate;
  }

  // cluster_health_status - computed: true, optional: false, required: false
  public get clusterHealthStatus() {
    return this.getStringAttribute('cluster_health_status');
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // has_proxy - computed: true, optional: false, required: false
  public get hasProxy() {
    return this.getBooleanAttribute('has_proxy');
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

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // nsx_manager_id - computed: false, optional: false, required: true
  private _nsxManagerId?: string; 
  public get nsxManagerId() {
    return this.getStringAttribute('nsx_manager_id');
  }
  public set nsxManagerId(value: string) {
    this._nsxManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxManagerIdInput() {
    return this._nsxManagerId;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // refresh_policies_on_create - computed: false, optional: true, required: false
  private _refreshPoliciesOnCreate?: boolean | cdktf.IResolvable; 
  public get refreshPoliciesOnCreate() {
    return this.getBooleanAttribute('refresh_policies_on_create');
  }
  public set refreshPoliciesOnCreate(value: boolean | cdktf.IResolvable) {
    this._refreshPoliciesOnCreate = value;
  }
  public resetRefreshPoliciesOnCreate() {
    this._refreshPoliciesOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshPoliciesOnCreateInput() {
    return this._refreshPoliciesOnCreate;
  }

  // refresh_policies_on_read - computed: false, optional: true, required: false
  private _refreshPoliciesOnRead?: boolean | cdktf.IResolvable; 
  public get refreshPoliciesOnRead() {
    return this.getBooleanAttribute('refresh_policies_on_read');
  }
  public set refreshPoliciesOnRead(value: boolean | cdktf.IResolvable) {
    this._refreshPoliciesOnRead = value;
  }
  public resetRefreshPoliciesOnRead() {
    this._refreshPoliciesOnRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshPoliciesOnReadInput() {
    return this._refreshPoliciesOnRead;
  }

  // refresh_vcenter_on_create - computed: false, optional: true, required: false
  private _refreshVcenterOnCreate?: boolean | cdktf.IResolvable; 
  public get refreshVcenterOnCreate() {
    return this.getBooleanAttribute('refresh_vcenter_on_create');
  }
  public set refreshVcenterOnCreate(value: boolean | cdktf.IResolvable) {
    this._refreshVcenterOnCreate = value;
  }
  public resetRefreshVcenterOnCreate() {
    this._refreshVcenterOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshVcenterOnCreateInput() {
    return this._refreshVcenterOnCreate;
  }

  // refresh_vcenter_on_read - computed: false, optional: true, required: false
  private _refreshVcenterOnRead?: boolean | cdktf.IResolvable; 
  public get refreshVcenterOnRead() {
    return this.getBooleanAttribute('refresh_vcenter_on_read');
  }
  public set refreshVcenterOnRead(value: boolean | cdktf.IResolvable) {
    this._refreshVcenterOnRead = value;
  }
  public resetRefreshVcenterOnRead() {
    this._refreshVcenterOnRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshVcenterOnReadInput() {
    return this._refreshVcenterOnRead;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vcenter_host - computed: true, optional: false, required: false
  public get vcenterHost() {
    return this.getStringAttribute('vcenter_host');
  }

  // vcenter_version - computed: true, optional: false, required: false
  public get vcenterVersion() {
    return this.getStringAttribute('vcenter_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_trust_certificate: cdktf.booleanToTerraform(this._autoTrustCertificate),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      nsx_manager_id: cdktf.stringToTerraform(this._nsxManagerId),
      password: cdktf.stringToTerraform(this._password),
      refresh_policies_on_create: cdktf.booleanToTerraform(this._refreshPoliciesOnCreate),
      refresh_policies_on_read: cdktf.booleanToTerraform(this._refreshPoliciesOnRead),
      refresh_vcenter_on_create: cdktf.booleanToTerraform(this._refreshVcenterOnCreate),
      refresh_vcenter_on_read: cdktf.booleanToTerraform(this._refreshVcenterOnRead),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_trust_certificate: {
        value: cdktf.booleanToHclTerraform(this._autoTrustCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_manager_id: {
        value: cdktf.stringToHclTerraform(this._nsxManagerId),
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
      refresh_policies_on_create: {
        value: cdktf.booleanToHclTerraform(this._refreshPoliciesOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      refresh_policies_on_read: {
        value: cdktf.booleanToHclTerraform(this._refreshPoliciesOnRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      refresh_vcenter_on_create: {
        value: cdktf.booleanToHclTerraform(this._refreshVcenterOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      refresh_vcenter_on_read: {
        value: cdktf.booleanToHclTerraform(this._refreshVcenterOnRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
