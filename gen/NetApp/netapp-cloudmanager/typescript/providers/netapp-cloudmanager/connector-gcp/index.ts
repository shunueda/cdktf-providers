// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#account_id ConnectorGcp#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#associate_public_ip ConnectorGcp#associate_public_ip}
  */
  readonly associatePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#company ConnectorGcp#company}
  */
  readonly company: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#firewall_tags ConnectorGcp#firewall_tags}
  */
  readonly firewallTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#gcp_block_project_ssh_keys ConnectorGcp#gcp_block_project_ssh_keys}
  */
  readonly gcpBlockProjectSshKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#gcp_enable_os_login ConnectorGcp#gcp_enable_os_login}
  */
  readonly gcpEnableOsLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#gcp_enable_os_login_sk ConnectorGcp#gcp_enable_os_login_sk}
  */
  readonly gcpEnableOsLoginSk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#gcp_serial_port_enable ConnectorGcp#gcp_serial_port_enable}
  */
  readonly gcpSerialPortEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#id ConnectorGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#labels ConnectorGcp#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#machine_type ConnectorGcp#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#name ConnectorGcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#network_project_id ConnectorGcp#network_project_id}
  */
  readonly networkProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#project_id ConnectorGcp#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#proxy_certificates ConnectorGcp#proxy_certificates}
  */
  readonly proxyCertificates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#proxy_password ConnectorGcp#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#proxy_url ConnectorGcp#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#proxy_user_name ConnectorGcp#proxy_user_name}
  */
  readonly proxyUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#service_account_email ConnectorGcp#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#service_account_key ConnectorGcp#service_account_key}
  */
  readonly serviceAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#service_account_path ConnectorGcp#service_account_path}
  */
  readonly serviceAccountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#subnet_id ConnectorGcp#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#tags ConnectorGcp#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#zone ConnectorGcp#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp netapp-cloudmanager_connector_gcp}
*/
export class ConnectorGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_connector_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorGcp to import
  * @param importFromId The id of the existing ConnectorGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_connector_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/connector_gcp netapp-cloudmanager_connector_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorGcpConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_connector_gcp',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '27.0.0',
        providerVersionConstraint: '27.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._associatePublicIp = config.associatePublicIp;
    this._company = config.company;
    this._firewallTags = config.firewallTags;
    this._gcpBlockProjectSshKeys = config.gcpBlockProjectSshKeys;
    this._gcpEnableOsLogin = config.gcpEnableOsLogin;
    this._gcpEnableOsLoginSk = config.gcpEnableOsLoginSk;
    this._gcpSerialPortEnable = config.gcpSerialPortEnable;
    this._id = config.id;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._name = config.name;
    this._networkProjectId = config.networkProjectId;
    this._projectId = config.projectId;
    this._proxyCertificates = config.proxyCertificates;
    this._proxyPassword = config.proxyPassword;
    this._proxyUrl = config.proxyUrl;
    this._proxyUserName = config.proxyUserName;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._serviceAccountKey = config.serviceAccountKey;
    this._serviceAccountPath = config.serviceAccountPath;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // associate_public_ip - computed: false, optional: true, required: false
  private _associatePublicIp?: boolean | cdktf.IResolvable; 
  public get associatePublicIp() {
    return this.getBooleanAttribute('associate_public_ip');
  }
  public set associatePublicIp(value: boolean | cdktf.IResolvable) {
    this._associatePublicIp = value;
  }
  public resetAssociatePublicIp() {
    this._associatePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpInput() {
    return this._associatePublicIp;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // company - computed: false, optional: false, required: true
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // firewall_tags - computed: false, optional: true, required: false
  private _firewallTags?: boolean | cdktf.IResolvable; 
  public get firewallTags() {
    return this.getBooleanAttribute('firewall_tags');
  }
  public set firewallTags(value: boolean | cdktf.IResolvable) {
    this._firewallTags = value;
  }
  public resetFirewallTags() {
    this._firewallTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTagsInput() {
    return this._firewallTags;
  }

  // gcp_block_project_ssh_keys - computed: false, optional: true, required: false
  private _gcpBlockProjectSshKeys?: boolean | cdktf.IResolvable; 
  public get gcpBlockProjectSshKeys() {
    return this.getBooleanAttribute('gcp_block_project_ssh_keys');
  }
  public set gcpBlockProjectSshKeys(value: boolean | cdktf.IResolvable) {
    this._gcpBlockProjectSshKeys = value;
  }
  public resetGcpBlockProjectSshKeys() {
    this._gcpBlockProjectSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpBlockProjectSshKeysInput() {
    return this._gcpBlockProjectSshKeys;
  }

  // gcp_enable_os_login - computed: false, optional: true, required: false
  private _gcpEnableOsLogin?: boolean | cdktf.IResolvable; 
  public get gcpEnableOsLogin() {
    return this.getBooleanAttribute('gcp_enable_os_login');
  }
  public set gcpEnableOsLogin(value: boolean | cdktf.IResolvable) {
    this._gcpEnableOsLogin = value;
  }
  public resetGcpEnableOsLogin() {
    this._gcpEnableOsLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpEnableOsLoginInput() {
    return this._gcpEnableOsLogin;
  }

  // gcp_enable_os_login_sk - computed: false, optional: true, required: false
  private _gcpEnableOsLoginSk?: boolean | cdktf.IResolvable; 
  public get gcpEnableOsLoginSk() {
    return this.getBooleanAttribute('gcp_enable_os_login_sk');
  }
  public set gcpEnableOsLoginSk(value: boolean | cdktf.IResolvable) {
    this._gcpEnableOsLoginSk = value;
  }
  public resetGcpEnableOsLoginSk() {
    this._gcpEnableOsLoginSk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpEnableOsLoginSkInput() {
    return this._gcpEnableOsLoginSk;
  }

  // gcp_serial_port_enable - computed: false, optional: true, required: false
  private _gcpSerialPortEnable?: boolean | cdktf.IResolvable; 
  public get gcpSerialPortEnable() {
    return this.getBooleanAttribute('gcp_serial_port_enable');
  }
  public set gcpSerialPortEnable(value: boolean | cdktf.IResolvable) {
    this._gcpSerialPortEnable = value;
  }
  public resetGcpSerialPortEnable() {
    this._gcpSerialPortEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSerialPortEnableInput() {
    return this._gcpSerialPortEnable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // network_project_id - computed: false, optional: true, required: false
  private _networkProjectId?: string; 
  public get networkProjectId() {
    return this.getStringAttribute('network_project_id');
  }
  public set networkProjectId(value: string) {
    this._networkProjectId = value;
  }
  public resetNetworkProjectId() {
    this._networkProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProjectIdInput() {
    return this._networkProjectId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // proxy_certificates - computed: false, optional: true, required: false
  private _proxyCertificates?: string[]; 
  public get proxyCertificates() {
    return this.getListAttribute('proxy_certificates');
  }
  public set proxyCertificates(value: string[]) {
    this._proxyCertificates = value;
  }
  public resetProxyCertificates() {
    this._proxyCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCertificatesInput() {
    return this._proxyCertificates;
  }

  // proxy_password - computed: false, optional: true, required: false
  private _proxyPassword?: string; 
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }
  public set proxyPassword(value: string) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // proxy_user_name - computed: false, optional: true, required: false
  private _proxyUserName?: string; 
  public get proxyUserName() {
    return this.getStringAttribute('proxy_user_name');
  }
  public set proxyUserName(value: string) {
    this._proxyUserName = value;
  }
  public resetProxyUserName() {
    this._proxyUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUserNameInput() {
    return this._proxyUserName;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // service_account_key - computed: false, optional: true, required: false
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }
  public set serviceAccountKey(value: string) {
    this._serviceAccountKey = value;
  }
  public resetServiceAccountKey() {
    this._serviceAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }

  // service_account_path - computed: false, optional: true, required: false
  private _serviceAccountPath?: string; 
  public get serviceAccountPath() {
    return this.getStringAttribute('service_account_path');
  }
  public set serviceAccountPath(value: string) {
    this._serviceAccountPath = value;
  }
  public resetServiceAccountPath() {
    this._serviceAccountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPathInput() {
    return this._serviceAccountPath;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      associate_public_ip: cdktf.booleanToTerraform(this._associatePublicIp),
      company: cdktf.stringToTerraform(this._company),
      firewall_tags: cdktf.booleanToTerraform(this._firewallTags),
      gcp_block_project_ssh_keys: cdktf.booleanToTerraform(this._gcpBlockProjectSshKeys),
      gcp_enable_os_login: cdktf.booleanToTerraform(this._gcpEnableOsLogin),
      gcp_enable_os_login_sk: cdktf.booleanToTerraform(this._gcpEnableOsLoginSk),
      gcp_serial_port_enable: cdktf.booleanToTerraform(this._gcpSerialPortEnable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      name: cdktf.stringToTerraform(this._name),
      network_project_id: cdktf.stringToTerraform(this._networkProjectId),
      project_id: cdktf.stringToTerraform(this._projectId),
      proxy_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxyCertificates),
      proxy_password: cdktf.stringToTerraform(this._proxyPassword),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      proxy_user_name: cdktf.stringToTerraform(this._proxyUserName),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      service_account_key: cdktf.stringToTerraform(this._serviceAccountKey),
      service_account_path: cdktf.stringToTerraform(this._serviceAccountPath),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associate_public_ip: {
        value: cdktf.booleanToHclTerraform(this._associatePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_tags: {
        value: cdktf.booleanToHclTerraform(this._firewallTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_block_project_ssh_keys: {
        value: cdktf.booleanToHclTerraform(this._gcpBlockProjectSshKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_enable_os_login: {
        value: cdktf.booleanToHclTerraform(this._gcpEnableOsLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_enable_os_login_sk: {
        value: cdktf.booleanToHclTerraform(this._gcpEnableOsLoginSk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_serial_port_enable: {
        value: cdktf.booleanToHclTerraform(this._gcpSerialPortEnable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_project_id: {
        value: cdktf.stringToHclTerraform(this._networkProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proxyCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      proxy_password: {
        value: cdktf.stringToHclTerraform(this._proxyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_user_name: {
        value: cdktf.stringToHclTerraform(this._proxyUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_path: {
        value: cdktf.stringToHclTerraform(this._serviceAccountPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
