// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallSslsshprofileSslserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#adom ObjectFirewallSslsshprofileSslserver#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#fosid ObjectFirewallSslsshprofileSslserver#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#ftps_client_cert_request ObjectFirewallSslsshprofileSslserver#ftps_client_cert_request}
  */
  readonly ftpsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#ftps_client_certificate ObjectFirewallSslsshprofileSslserver#ftps_client_certificate}
  */
  readonly ftpsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#https_client_cert_request ObjectFirewallSslsshprofileSslserver#https_client_cert_request}
  */
  readonly httpsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#https_client_certificate ObjectFirewallSslsshprofileSslserver#https_client_certificate}
  */
  readonly httpsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#id ObjectFirewallSslsshprofileSslserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#imaps_client_cert_request ObjectFirewallSslsshprofileSslserver#imaps_client_cert_request}
  */
  readonly imapsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#imaps_client_certificate ObjectFirewallSslsshprofileSslserver#imaps_client_certificate}
  */
  readonly imapsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#ip ObjectFirewallSslsshprofileSslserver#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#pop3s_client_cert_request ObjectFirewallSslsshprofileSslserver#pop3s_client_cert_request}
  */
  readonly pop3SClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#pop3s_client_certificate ObjectFirewallSslsshprofileSslserver#pop3s_client_certificate}
  */
  readonly pop3SClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#scopetype ObjectFirewallSslsshprofileSslserver#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#smtps_client_cert_request ObjectFirewallSslsshprofileSslserver#smtps_client_cert_request}
  */
  readonly smtpsClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#smtps_client_certificate ObjectFirewallSslsshprofileSslserver#smtps_client_certificate}
  */
  readonly smtpsClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#ssl_other_client_cert_request ObjectFirewallSslsshprofileSslserver#ssl_other_client_cert_request}
  */
  readonly sslOtherClientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#ssl_other_client_certificate ObjectFirewallSslsshprofileSslserver#ssl_other_client_certificate}
  */
  readonly sslOtherClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#ssl_ssh_profile ObjectFirewallSslsshprofileSslserver#ssl_ssh_profile}
  */
  readonly sslSshProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver fortimanager_object_firewall_sslsshprofile_sslserver}
*/
export class ObjectFirewallSslsshprofileSslserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_sslsshprofile_sslserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallSslsshprofileSslserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallSslsshprofileSslserver to import
  * @param importFromId The id of the existing ObjectFirewallSslsshprofileSslserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallSslsshprofileSslserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_sslsshprofile_sslserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_sslserver fortimanager_object_firewall_sslsshprofile_sslserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallSslsshprofileSslserverConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallSslsshprofileSslserverConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_sslsshprofile_sslserver',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._fosid = config.fosid;
    this._ftpsClientCertRequest = config.ftpsClientCertRequest;
    this._ftpsClientCertificate = config.ftpsClientCertificate;
    this._httpsClientCertRequest = config.httpsClientCertRequest;
    this._httpsClientCertificate = config.httpsClientCertificate;
    this._id = config.id;
    this._imapsClientCertRequest = config.imapsClientCertRequest;
    this._imapsClientCertificate = config.imapsClientCertificate;
    this._ip = config.ip;
    this._pop3SClientCertRequest = config.pop3SClientCertRequest;
    this._pop3SClientCertificate = config.pop3SClientCertificate;
    this._scopetype = config.scopetype;
    this._smtpsClientCertRequest = config.smtpsClientCertRequest;
    this._smtpsClientCertificate = config.smtpsClientCertificate;
    this._sslOtherClientCertRequest = config.sslOtherClientCertRequest;
    this._sslOtherClientCertificate = config.sslOtherClientCertificate;
    this._sslSshProfile = config.sslSshProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // ftps_client_cert_request - computed: false, optional: true, required: false
  private _ftpsClientCertRequest?: string; 
  public get ftpsClientCertRequest() {
    return this.getStringAttribute('ftps_client_cert_request');
  }
  public set ftpsClientCertRequest(value: string) {
    this._ftpsClientCertRequest = value;
  }
  public resetFtpsClientCertRequest() {
    this._ftpsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsClientCertRequestInput() {
    return this._ftpsClientCertRequest;
  }

  // ftps_client_certificate - computed: true, optional: true, required: false
  private _ftpsClientCertificate?: string; 
  public get ftpsClientCertificate() {
    return this.getStringAttribute('ftps_client_certificate');
  }
  public set ftpsClientCertificate(value: string) {
    this._ftpsClientCertificate = value;
  }
  public resetFtpsClientCertificate() {
    this._ftpsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsClientCertificateInput() {
    return this._ftpsClientCertificate;
  }

  // https_client_cert_request - computed: false, optional: true, required: false
  private _httpsClientCertRequest?: string; 
  public get httpsClientCertRequest() {
    return this.getStringAttribute('https_client_cert_request');
  }
  public set httpsClientCertRequest(value: string) {
    this._httpsClientCertRequest = value;
  }
  public resetHttpsClientCertRequest() {
    this._httpsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsClientCertRequestInput() {
    return this._httpsClientCertRequest;
  }

  // https_client_certificate - computed: true, optional: true, required: false
  private _httpsClientCertificate?: string; 
  public get httpsClientCertificate() {
    return this.getStringAttribute('https_client_certificate');
  }
  public set httpsClientCertificate(value: string) {
    this._httpsClientCertificate = value;
  }
  public resetHttpsClientCertificate() {
    this._httpsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsClientCertificateInput() {
    return this._httpsClientCertificate;
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

  // imaps_client_cert_request - computed: false, optional: true, required: false
  private _imapsClientCertRequest?: string; 
  public get imapsClientCertRequest() {
    return this.getStringAttribute('imaps_client_cert_request');
  }
  public set imapsClientCertRequest(value: string) {
    this._imapsClientCertRequest = value;
  }
  public resetImapsClientCertRequest() {
    this._imapsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapsClientCertRequestInput() {
    return this._imapsClientCertRequest;
  }

  // imaps_client_certificate - computed: true, optional: true, required: false
  private _imapsClientCertificate?: string; 
  public get imapsClientCertificate() {
    return this.getStringAttribute('imaps_client_certificate');
  }
  public set imapsClientCertificate(value: string) {
    this._imapsClientCertificate = value;
  }
  public resetImapsClientCertificate() {
    this._imapsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapsClientCertificateInput() {
    return this._imapsClientCertificate;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // pop3s_client_cert_request - computed: false, optional: true, required: false
  private _pop3SClientCertRequest?: string; 
  public get pop3SClientCertRequest() {
    return this.getStringAttribute('pop3s_client_cert_request');
  }
  public set pop3SClientCertRequest(value: string) {
    this._pop3SClientCertRequest = value;
  }
  public resetPop3SClientCertRequest() {
    this._pop3SClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3SClientCertRequestInput() {
    return this._pop3SClientCertRequest;
  }

  // pop3s_client_certificate - computed: true, optional: true, required: false
  private _pop3SClientCertificate?: string; 
  public get pop3SClientCertificate() {
    return this.getStringAttribute('pop3s_client_certificate');
  }
  public set pop3SClientCertificate(value: string) {
    this._pop3SClientCertificate = value;
  }
  public resetPop3SClientCertificate() {
    this._pop3SClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3SClientCertificateInput() {
    return this._pop3SClientCertificate;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // smtps_client_cert_request - computed: false, optional: true, required: false
  private _smtpsClientCertRequest?: string; 
  public get smtpsClientCertRequest() {
    return this.getStringAttribute('smtps_client_cert_request');
  }
  public set smtpsClientCertRequest(value: string) {
    this._smtpsClientCertRequest = value;
  }
  public resetSmtpsClientCertRequest() {
    this._smtpsClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpsClientCertRequestInput() {
    return this._smtpsClientCertRequest;
  }

  // smtps_client_certificate - computed: true, optional: true, required: false
  private _smtpsClientCertificate?: string; 
  public get smtpsClientCertificate() {
    return this.getStringAttribute('smtps_client_certificate');
  }
  public set smtpsClientCertificate(value: string) {
    this._smtpsClientCertificate = value;
  }
  public resetSmtpsClientCertificate() {
    this._smtpsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpsClientCertificateInput() {
    return this._smtpsClientCertificate;
  }

  // ssl_other_client_cert_request - computed: false, optional: true, required: false
  private _sslOtherClientCertRequest?: string; 
  public get sslOtherClientCertRequest() {
    return this.getStringAttribute('ssl_other_client_cert_request');
  }
  public set sslOtherClientCertRequest(value: string) {
    this._sslOtherClientCertRequest = value;
  }
  public resetSslOtherClientCertRequest() {
    this._sslOtherClientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOtherClientCertRequestInput() {
    return this._sslOtherClientCertRequest;
  }

  // ssl_other_client_certificate - computed: true, optional: true, required: false
  private _sslOtherClientCertificate?: string; 
  public get sslOtherClientCertificate() {
    return this.getStringAttribute('ssl_other_client_certificate');
  }
  public set sslOtherClientCertificate(value: string) {
    this._sslOtherClientCertificate = value;
  }
  public resetSslOtherClientCertificate() {
    this._sslOtherClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOtherClientCertificateInput() {
    return this._sslOtherClientCertificate;
  }

  // ssl_ssh_profile - computed: false, optional: false, required: true
  private _sslSshProfile?: string; 
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }
  public set sslSshProfile(value: string) {
    this._sslSshProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      fosid: cdktf.numberToTerraform(this._fosid),
      ftps_client_cert_request: cdktf.stringToTerraform(this._ftpsClientCertRequest),
      ftps_client_certificate: cdktf.stringToTerraform(this._ftpsClientCertificate),
      https_client_cert_request: cdktf.stringToTerraform(this._httpsClientCertRequest),
      https_client_certificate: cdktf.stringToTerraform(this._httpsClientCertificate),
      id: cdktf.stringToTerraform(this._id),
      imaps_client_cert_request: cdktf.stringToTerraform(this._imapsClientCertRequest),
      imaps_client_certificate: cdktf.stringToTerraform(this._imapsClientCertificate),
      ip: cdktf.stringToTerraform(this._ip),
      pop3s_client_cert_request: cdktf.stringToTerraform(this._pop3SClientCertRequest),
      pop3s_client_certificate: cdktf.stringToTerraform(this._pop3SClientCertificate),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      smtps_client_cert_request: cdktf.stringToTerraform(this._smtpsClientCertRequest),
      smtps_client_certificate: cdktf.stringToTerraform(this._smtpsClientCertificate),
      ssl_other_client_cert_request: cdktf.stringToTerraform(this._sslOtherClientCertRequest),
      ssl_other_client_certificate: cdktf.stringToTerraform(this._sslOtherClientCertificate),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftps_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._ftpsClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftps_client_certificate: {
        value: cdktf.stringToHclTerraform(this._ftpsClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._httpsClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_client_certificate: {
        value: cdktf.stringToHclTerraform(this._httpsClientCertificate),
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
      imaps_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._imapsClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imaps_client_certificate: {
        value: cdktf.stringToHclTerraform(this._imapsClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop3s_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._pop3SClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop3s_client_certificate: {
        value: cdktf.stringToHclTerraform(this._pop3SClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtps_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._smtpsClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtps_client_certificate: {
        value: cdktf.stringToHclTerraform(this._smtpsClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_other_client_cert_request: {
        value: cdktf.stringToHclTerraform(this._sslOtherClientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_other_client_certificate: {
        value: cdktf.stringToHclTerraform(this._sslOtherClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ssh_profile: {
        value: cdktf.stringToHclTerraform(this._sslSshProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
