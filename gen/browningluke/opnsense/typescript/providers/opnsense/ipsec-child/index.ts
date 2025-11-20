// https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecChildConfig extends cdktf.TerraformMetaArguments {
  /**
  * Close action for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#close_action IpsecChild#close_action}
  */
  readonly closeAction?: string;
  /**
  * Optional description for the PSK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#description IpsecChild#description}
  */
  readonly description?: string;
  /**
  * DPD action for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#dpd_action IpsecChild#dpd_action}
  */
  readonly dpdAction?: string;
  /**
  * Enable or disable the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#enabled IpsecChild#enabled}
  */
  readonly enabled?: string;
  /**
  * Install policies for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#install_policies IpsecChild#install_policies}
  */
  readonly installPolicies?: string;
  /**
  * The parent connection UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#ipsec_connection IpsecChild#ipsec_connection}
  */
  readonly ipsecConnection: string;
  /**
  * List of local networks for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#local_networks IpsecChild#local_networks}
  */
  readonly localNetworks: string[];
  /**
  * Mode for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#mode IpsecChild#mode}
  */
  readonly mode?: string;
  /**
  * List of proposals for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#proposals IpsecChild#proposals}
  */
  readonly proposals: string[];
  /**
  * Rekey time for the Child Resource in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#rekey_time IpsecChild#rekey_time}
  */
  readonly rekeyTime?: string;
  /**
  * List of remote networks for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#remote_networks IpsecChild#remote_networks}
  */
  readonly remoteNetworks: string[];
  /**
  * Request ID for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#request_id IpsecChild#request_id}
  */
  readonly requestId?: string;
  /**
  * Enable or disable SHA256_96.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#sha256_96 IpsecChild#sha256_96}
  */
  readonly sha25696?: string;
  /**
  * Start action for the Child Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#start_action IpsecChild#start_action}
  */
  readonly startAction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child opnsense_ipsec_child}
*/
export class IpsecChild extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_ipsec_child";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecChild resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecChild to import
  * @param importFromId The id of the existing IpsecChild that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecChild to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_ipsec_child", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/ipsec_child opnsense_ipsec_child} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecChildConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecChildConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_ipsec_child',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._closeAction = config.closeAction;
    this._description = config.description;
    this._dpdAction = config.dpdAction;
    this._enabled = config.enabled;
    this._installPolicies = config.installPolicies;
    this._ipsecConnection = config.ipsecConnection;
    this._localNetworks = config.localNetworks;
    this._mode = config.mode;
    this._proposals = config.proposals;
    this._rekeyTime = config.rekeyTime;
    this._remoteNetworks = config.remoteNetworks;
    this._requestId = config.requestId;
    this._sha25696 = config.sha25696;
    this._startAction = config.startAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // close_action - computed: true, optional: true, required: false
  private _closeAction?: string; 
  public get closeAction() {
    return this.getStringAttribute('close_action');
  }
  public set closeAction(value: string) {
    this._closeAction = value;
  }
  public resetCloseAction() {
    this._closeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeActionInput() {
    return this._closeAction;
  }

  // description - computed: true, optional: true, required: false
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

  // dpd_action - computed: true, optional: true, required: false
  private _dpdAction?: string; 
  public get dpdAction() {
    return this.getStringAttribute('dpd_action');
  }
  public set dpdAction(value: string) {
    this._dpdAction = value;
  }
  public resetDpdAction() {
    this._dpdAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdActionInput() {
    return this._dpdAction;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install_policies - computed: true, optional: true, required: false
  private _installPolicies?: string; 
  public get installPolicies() {
    return this.getStringAttribute('install_policies');
  }
  public set installPolicies(value: string) {
    this._installPolicies = value;
  }
  public resetInstallPolicies() {
    this._installPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installPoliciesInput() {
    return this._installPolicies;
  }

  // ipsec_connection - computed: false, optional: false, required: true
  private _ipsecConnection?: string; 
  public get ipsecConnection() {
    return this.getStringAttribute('ipsec_connection');
  }
  public set ipsecConnection(value: string) {
    this._ipsecConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecConnectionInput() {
    return this._ipsecConnection;
  }

  // local_networks - computed: false, optional: false, required: true
  private _localNetworks?: string[]; 
  public get localNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('local_networks'));
  }
  public set localNetworks(value: string[]) {
    this._localNetworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworksInput() {
    return this._localNetworks;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // proposals - computed: false, optional: false, required: true
  private _proposals?: string[]; 
  public get proposals() {
    return cdktf.Fn.tolist(this.getListAttribute('proposals'));
  }
  public set proposals(value: string[]) {
    this._proposals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalsInput() {
    return this._proposals;
  }

  // rekey_time - computed: true, optional: true, required: false
  private _rekeyTime?: string; 
  public get rekeyTime() {
    return this.getStringAttribute('rekey_time');
  }
  public set rekeyTime(value: string) {
    this._rekeyTime = value;
  }
  public resetRekeyTime() {
    this._rekeyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyTimeInput() {
    return this._rekeyTime;
  }

  // remote_networks - computed: false, optional: false, required: true
  private _remoteNetworks?: string[]; 
  public get remoteNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_networks'));
  }
  public set remoteNetworks(value: string[]) {
    this._remoteNetworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetworksInput() {
    return this._remoteNetworks;
  }

  // request_id - computed: false, optional: true, required: false
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  public resetRequestId() {
    this._requestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // sha256_96 - computed: true, optional: true, required: false
  private _sha25696?: string; 
  public get sha25696() {
    return this.getStringAttribute('sha256_96');
  }
  public set sha25696(value: string) {
    this._sha25696 = value;
  }
  public resetSha25696() {
    this._sha25696 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha25696Input() {
    return this._sha25696;
  }

  // start_action - computed: true, optional: true, required: false
  private _startAction?: string; 
  public get startAction() {
    return this.getStringAttribute('start_action');
  }
  public set startAction(value: string) {
    this._startAction = value;
  }
  public resetStartAction() {
    this._startAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startActionInput() {
    return this._startAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      close_action: cdktf.stringToTerraform(this._closeAction),
      description: cdktf.stringToTerraform(this._description),
      dpd_action: cdktf.stringToTerraform(this._dpdAction),
      enabled: cdktf.stringToTerraform(this._enabled),
      install_policies: cdktf.stringToTerraform(this._installPolicies),
      ipsec_connection: cdktf.stringToTerraform(this._ipsecConnection),
      local_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localNetworks),
      mode: cdktf.stringToTerraform(this._mode),
      proposals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proposals),
      rekey_time: cdktf.stringToTerraform(this._rekeyTime),
      remote_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteNetworks),
      request_id: cdktf.stringToTerraform(this._requestId),
      sha256_96: cdktf.stringToTerraform(this._sha25696),
      start_action: cdktf.stringToTerraform(this._startAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      close_action: {
        value: cdktf.stringToHclTerraform(this._closeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_action: {
        value: cdktf.stringToHclTerraform(this._dpdAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_policies: {
        value: cdktf.stringToHclTerraform(this._installPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_connection: {
        value: cdktf.stringToHclTerraform(this._ipsecConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proposals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rekey_time: {
        value: cdktf.stringToHclTerraform(this._rekeyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sha256_96: {
        value: cdktf.stringToHclTerraform(this._sha25696),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_action: {
        value: cdktf.stringToHclTerraform(this._startAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
