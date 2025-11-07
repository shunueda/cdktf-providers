// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable aggressive mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#aggressive IpsecConnection#aggressive}
  */
  readonly aggressive: string;
  /**
  * Description for the IPsec connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#description IpsecConnection#description}
  */
  readonly description: string;
  /**
  * Dead Peer Detection (DPD) delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#dpd_delay IpsecConnection#dpd_delay}
  */
  readonly dpdDelay: string;
  /**
  * Dead Peer Detection (DPD) timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#dpd_timeout IpsecConnection#dpd_timeout}
  */
  readonly dpdTimeout: string;
  /**
  * Enable or disable the IPsec connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#enabled IpsecConnection#enabled}
  */
  readonly enabled: string;
  /**
  * IKE lifetime duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#ike_lifetime IpsecConnection#ike_lifetime}
  */
  readonly ikeLifetime: string;
  /**
  * List of IP pools for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#ip_pools IpsecConnection#ip_pools}
  */
  readonly ipPools?: string[];
  /**
  * Number of keying tries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#keying_tries IpsecConnection#keying_tries}
  */
  readonly keyingTries: string;
  /**
  * List of local addresses for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#local_addresses IpsecConnection#local_addresses}
  */
  readonly localAddresses: string[];
  /**
  * Local port for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#local_port IpsecConnection#local_port}
  */
  readonly localPort: string;
  /**
  * Enable or disable MOBIKE support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#mobike IpsecConnection#mobike}
  */
  readonly mobike: string;
  /**
  * List of encryption proposals for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#proposals IpsecConnection#proposals}
  */
  readonly proposals: string[];
  /**
  * Time interval for reauthentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#reauthentication_time IpsecConnection#reauthentication_time}
  */
  readonly reauthenticationTime: string;
  /**
  * Time interval for rekeying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#rekey_time IpsecConnection#rekey_time}
  */
  readonly rekeyTime: string;
  /**
  * List of remote addresses for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#remote_addresses IpsecConnection#remote_addresses}
  */
  readonly remoteAddresses: string[];
  /**
  * Remote port for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#remote_port IpsecConnection#remote_port}
  */
  readonly remotePort: string;
  /**
  * Whether to send a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#send_certificate IpsecConnection#send_certificate}
  */
  readonly sendCertificate: string;
  /**
  * Whether to send a certificate request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#send_certificate_request IpsecConnection#send_certificate_request}
  */
  readonly sendCertificateRequest: string;
  /**
  * Enable or disable UDP encapsulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#udp_encapsulation IpsecConnection#udp_encapsulation}
  */
  readonly udpEncapsulation: string;
  /**
  * Whether the connection should use unique IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#unique IpsecConnection#unique}
  */
  readonly unique: string;
  /**
  * IKE version to use (e.g., '1', '2').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#version IpsecConnection#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection opnsense_ipsec_connection}
*/
export class IpsecConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_ipsec_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecConnection to import
  * @param importFromId The id of the existing IpsecConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_ipsec_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_connection opnsense_ipsec_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_ipsec_connection',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggressive = config.aggressive;
    this._description = config.description;
    this._dpdDelay = config.dpdDelay;
    this._dpdTimeout = config.dpdTimeout;
    this._enabled = config.enabled;
    this._ikeLifetime = config.ikeLifetime;
    this._ipPools = config.ipPools;
    this._keyingTries = config.keyingTries;
    this._localAddresses = config.localAddresses;
    this._localPort = config.localPort;
    this._mobike = config.mobike;
    this._proposals = config.proposals;
    this._reauthenticationTime = config.reauthenticationTime;
    this._rekeyTime = config.rekeyTime;
    this._remoteAddresses = config.remoteAddresses;
    this._remotePort = config.remotePort;
    this._sendCertificate = config.sendCertificate;
    this._sendCertificateRequest = config.sendCertificateRequest;
    this._udpEncapsulation = config.udpEncapsulation;
    this._unique = config.unique;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggressive - computed: false, optional: false, required: true
  private _aggressive?: string; 
  public get aggressive() {
    return this.getStringAttribute('aggressive');
  }
  public set aggressive(value: string) {
    this._aggressive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveInput() {
    return this._aggressive;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dpd_delay - computed: false, optional: false, required: true
  private _dpdDelay?: string; 
  public get dpdDelay() {
    return this.getStringAttribute('dpd_delay');
  }
  public set dpdDelay(value: string) {
    this._dpdDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdDelayInput() {
    return this._dpdDelay;
  }

  // dpd_timeout - computed: false, optional: false, required: true
  private _dpdTimeout?: string; 
  public get dpdTimeout() {
    return this.getStringAttribute('dpd_timeout');
  }
  public set dpdTimeout(value: string) {
    this._dpdTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdTimeoutInput() {
    return this._dpdTimeout;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_lifetime - computed: false, optional: false, required: true
  private _ikeLifetime?: string; 
  public get ikeLifetime() {
    return this.getStringAttribute('ike_lifetime');
  }
  public set ikeLifetime(value: string) {
    this._ikeLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLifetimeInput() {
    return this._ikeLifetime;
  }

  // ip_pools - computed: false, optional: true, required: false
  private _ipPools?: string[]; 
  public get ipPools() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_pools'));
  }
  public set ipPools(value: string[]) {
    this._ipPools = value;
  }
  public resetIpPools() {
    this._ipPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolsInput() {
    return this._ipPools;
  }

  // keying_tries - computed: false, optional: false, required: true
  private _keyingTries?: string; 
  public get keyingTries() {
    return this.getStringAttribute('keying_tries');
  }
  public set keyingTries(value: string) {
    this._keyingTries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyingTriesInput() {
    return this._keyingTries;
  }

  // local_addresses - computed: false, optional: false, required: true
  private _localAddresses?: string[]; 
  public get localAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('local_addresses'));
  }
  public set localAddresses(value: string[]) {
    this._localAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressesInput() {
    return this._localAddresses;
  }

  // local_port - computed: false, optional: false, required: true
  private _localPort?: string; 
  public get localPort() {
    return this.getStringAttribute('local_port');
  }
  public set localPort(value: string) {
    this._localPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
  }

  // mobike - computed: false, optional: false, required: true
  private _mobike?: string; 
  public get mobike() {
    return this.getStringAttribute('mobike');
  }
  public set mobike(value: string) {
    this._mobike = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobikeInput() {
    return this._mobike;
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

  // reauthentication_time - computed: false, optional: false, required: true
  private _reauthenticationTime?: string; 
  public get reauthenticationTime() {
    return this.getStringAttribute('reauthentication_time');
  }
  public set reauthenticationTime(value: string) {
    this._reauthenticationTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthenticationTimeInput() {
    return this._reauthenticationTime;
  }

  // rekey_time - computed: false, optional: false, required: true
  private _rekeyTime?: string; 
  public get rekeyTime() {
    return this.getStringAttribute('rekey_time');
  }
  public set rekeyTime(value: string) {
    this._rekeyTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyTimeInput() {
    return this._rekeyTime;
  }

  // remote_addresses - computed: false, optional: false, required: true
  private _remoteAddresses?: string[]; 
  public get remoteAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_addresses'));
  }
  public set remoteAddresses(value: string[]) {
    this._remoteAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressesInput() {
    return this._remoteAddresses;
  }

  // remote_port - computed: false, optional: false, required: true
  private _remotePort?: string; 
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }
  public set remotePort(value: string) {
    this._remotePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // send_certificate - computed: false, optional: false, required: true
  private _sendCertificate?: string; 
  public get sendCertificate() {
    return this.getStringAttribute('send_certificate');
  }
  public set sendCertificate(value: string) {
    this._sendCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCertificateInput() {
    return this._sendCertificate;
  }

  // send_certificate_request - computed: false, optional: false, required: true
  private _sendCertificateRequest?: string; 
  public get sendCertificateRequest() {
    return this.getStringAttribute('send_certificate_request');
  }
  public set sendCertificateRequest(value: string) {
    this._sendCertificateRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCertificateRequestInput() {
    return this._sendCertificateRequest;
  }

  // udp_encapsulation - computed: false, optional: false, required: true
  private _udpEncapsulation?: string; 
  public get udpEncapsulation() {
    return this.getStringAttribute('udp_encapsulation');
  }
  public set udpEncapsulation(value: string) {
    this._udpEncapsulation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpEncapsulationInput() {
    return this._udpEncapsulation;
  }

  // unique - computed: false, optional: false, required: true
  private _unique?: string; 
  public get unique() {
    return this.getStringAttribute('unique');
  }
  public set unique(value: string) {
    this._unique = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggressive: cdktf.stringToTerraform(this._aggressive),
      description: cdktf.stringToTerraform(this._description),
      dpd_delay: cdktf.stringToTerraform(this._dpdDelay),
      dpd_timeout: cdktf.stringToTerraform(this._dpdTimeout),
      enabled: cdktf.stringToTerraform(this._enabled),
      ike_lifetime: cdktf.stringToTerraform(this._ikeLifetime),
      ip_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipPools),
      keying_tries: cdktf.stringToTerraform(this._keyingTries),
      local_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localAddresses),
      local_port: cdktf.stringToTerraform(this._localPort),
      mobike: cdktf.stringToTerraform(this._mobike),
      proposals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proposals),
      reauthentication_time: cdktf.stringToTerraform(this._reauthenticationTime),
      rekey_time: cdktf.stringToTerraform(this._rekeyTime),
      remote_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteAddresses),
      remote_port: cdktf.stringToTerraform(this._remotePort),
      send_certificate: cdktf.stringToTerraform(this._sendCertificate),
      send_certificate_request: cdktf.stringToTerraform(this._sendCertificateRequest),
      udp_encapsulation: cdktf.stringToTerraform(this._udpEncapsulation),
      unique: cdktf.stringToTerraform(this._unique),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggressive: {
        value: cdktf.stringToHclTerraform(this._aggressive),
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
      dpd_delay: {
        value: cdktf.stringToHclTerraform(this._dpdDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_timeout: {
        value: cdktf.stringToHclTerraform(this._dpdTimeout),
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
      ike_lifetime: {
        value: cdktf.stringToHclTerraform(this._ikeLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_pools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipPools),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      keying_tries: {
        value: cdktf.stringToHclTerraform(this._keyingTries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_port: {
        value: cdktf.stringToHclTerraform(this._localPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobike: {
        value: cdktf.stringToHclTerraform(this._mobike),
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
      reauthentication_time: {
        value: cdktf.stringToHclTerraform(this._reauthenticationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekey_time: {
        value: cdktf.stringToHclTerraform(this._rekeyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_port: {
        value: cdktf.stringToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_certificate: {
        value: cdktf.stringToHclTerraform(this._sendCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_certificate_request: {
        value: cdktf.stringToHclTerraform(this._sendCertificateRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_encapsulation: {
        value: cdktf.stringToHclTerraform(this._udpEncapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique: {
        value: cdktf.stringToHclTerraform(this._unique),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
