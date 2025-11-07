// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdnConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#aws_accesskey SystemSdnConnector#aws_accesskey}
  */
  readonly awsAccesskey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#aws_region SystemSdnConnector#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#aws_secretkey SystemSdnConnector#aws_secretkey}
  */
  readonly awsSecretkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#id SystemSdnConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#mkey SystemSdnConnector#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#oci_cert SystemSdnConnector#oci_cert}
  */
  readonly ociCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#oci_compartment_id SystemSdnConnector#oci_compartment_id}
  */
  readonly ociCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#oci_ha_status SystemSdnConnector#oci_ha_status}
  */
  readonly ociHaStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#oci_region SystemSdnConnector#oci_region}
  */
  readonly ociRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#oci_region_type SystemSdnConnector#oci_region_type}
  */
  readonly ociRegionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#oci_tenant_id SystemSdnConnector#oci_tenant_id}
  */
  readonly ociTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#oci_user_id SystemSdnConnector#oci_user_id}
  */
  readonly ociUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#port SystemSdnConnector#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#sap_dns_suffix SystemSdnConnector#sap_dns_suffix}
  */
  readonly sapDnsSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#sap_icm_http_port SystemSdnConnector#sap_icm_http_port}
  */
  readonly sapIcmHttpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#sap_ms_http_port SystemSdnConnector#sap_ms_http_port}
  */
  readonly sapMsHttpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#sap_password SystemSdnConnector#sap_password}
  */
  readonly sapPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#sap_sidadm SystemSdnConnector#sap_sidadm}
  */
  readonly sapSidadm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#secret_token SystemSdnConnector#secret_token}
  */
  readonly secretToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#server SystemSdnConnector#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#status SystemSdnConnector#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#type SystemSdnConnector#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#update_interval SystemSdnConnector#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#use_metadata_iam SystemSdnConnector#use_metadata_iam}
  */
  readonly useMetadataIam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#vdom SystemSdnConnector#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector fortiadc_system_sdn_connector}
*/
export class SystemSdnConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_sdn_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdnConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdnConnector to import
  * @param importFromId The id of the existing SystemSdnConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdnConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_sdn_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_sdn_connector fortiadc_system_sdn_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdnConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSdnConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_sdn_connector',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccesskey = config.awsAccesskey;
    this._awsRegion = config.awsRegion;
    this._awsSecretkey = config.awsSecretkey;
    this._id = config.id;
    this._mkey = config.mkey;
    this._ociCert = config.ociCert;
    this._ociCompartmentId = config.ociCompartmentId;
    this._ociHaStatus = config.ociHaStatus;
    this._ociRegion = config.ociRegion;
    this._ociRegionType = config.ociRegionType;
    this._ociTenantId = config.ociTenantId;
    this._ociUserId = config.ociUserId;
    this._port = config.port;
    this._sapDnsSuffix = config.sapDnsSuffix;
    this._sapIcmHttpPort = config.sapIcmHttpPort;
    this._sapMsHttpPort = config.sapMsHttpPort;
    this._sapPassword = config.sapPassword;
    this._sapSidadm = config.sapSidadm;
    this._secretToken = config.secretToken;
    this._server = config.server;
    this._status = config.status;
    this._type = config.type;
    this._updateInterval = config.updateInterval;
    this._useMetadataIam = config.useMetadataIam;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_accesskey - computed: true, optional: true, required: false
  private _awsAccesskey?: string; 
  public get awsAccesskey() {
    return this.getStringAttribute('aws_accesskey');
  }
  public set awsAccesskey(value: string) {
    this._awsAccesskey = value;
  }
  public resetAwsAccesskey() {
    this._awsAccesskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccesskeyInput() {
    return this._awsAccesskey;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secretkey - computed: true, optional: true, required: false
  private _awsSecretkey?: string; 
  public get awsSecretkey() {
    return this.getStringAttribute('aws_secretkey');
  }
  public set awsSecretkey(value: string) {
    this._awsSecretkey = value;
  }
  public resetAwsSecretkey() {
    this._awsSecretkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretkeyInput() {
    return this._awsSecretkey;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // oci_cert - computed: true, optional: true, required: false
  private _ociCert?: string; 
  public get ociCert() {
    return this.getStringAttribute('oci_cert');
  }
  public set ociCert(value: string) {
    this._ociCert = value;
  }
  public resetOciCert() {
    this._ociCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCertInput() {
    return this._ociCert;
  }

  // oci_compartment_id - computed: true, optional: true, required: false
  private _ociCompartmentId?: string; 
  public get ociCompartmentId() {
    return this.getStringAttribute('oci_compartment_id');
  }
  public set ociCompartmentId(value: string) {
    this._ociCompartmentId = value;
  }
  public resetOciCompartmentId() {
    this._ociCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCompartmentIdInput() {
    return this._ociCompartmentId;
  }

  // oci_ha_status - computed: true, optional: true, required: false
  private _ociHaStatus?: string; 
  public get ociHaStatus() {
    return this.getStringAttribute('oci_ha_status');
  }
  public set ociHaStatus(value: string) {
    this._ociHaStatus = value;
  }
  public resetOciHaStatus() {
    this._ociHaStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociHaStatusInput() {
    return this._ociHaStatus;
  }

  // oci_region - computed: true, optional: true, required: false
  private _ociRegion?: string; 
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }
  public set ociRegion(value: string) {
    this._ociRegion = value;
  }
  public resetOciRegion() {
    this._ociRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegionInput() {
    return this._ociRegion;
  }

  // oci_region_type - computed: true, optional: true, required: false
  private _ociRegionType?: string; 
  public get ociRegionType() {
    return this.getStringAttribute('oci_region_type');
  }
  public set ociRegionType(value: string) {
    this._ociRegionType = value;
  }
  public resetOciRegionType() {
    this._ociRegionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegionTypeInput() {
    return this._ociRegionType;
  }

  // oci_tenant_id - computed: true, optional: true, required: false
  private _ociTenantId?: string; 
  public get ociTenantId() {
    return this.getStringAttribute('oci_tenant_id');
  }
  public set ociTenantId(value: string) {
    this._ociTenantId = value;
  }
  public resetOciTenantId() {
    this._ociTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociTenantIdInput() {
    return this._ociTenantId;
  }

  // oci_user_id - computed: true, optional: true, required: false
  private _ociUserId?: string; 
  public get ociUserId() {
    return this.getStringAttribute('oci_user_id');
  }
  public set ociUserId(value: string) {
    this._ociUserId = value;
  }
  public resetOciUserId() {
    this._ociUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociUserIdInput() {
    return this._ociUserId;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sap_dns_suffix - computed: true, optional: true, required: false
  private _sapDnsSuffix?: string; 
  public get sapDnsSuffix() {
    return this.getStringAttribute('sap_dns_suffix');
  }
  public set sapDnsSuffix(value: string) {
    this._sapDnsSuffix = value;
  }
  public resetSapDnsSuffix() {
    this._sapDnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapDnsSuffixInput() {
    return this._sapDnsSuffix;
  }

  // sap_icm_http_port - computed: true, optional: true, required: false
  private _sapIcmHttpPort?: string; 
  public get sapIcmHttpPort() {
    return this.getStringAttribute('sap_icm_http_port');
  }
  public set sapIcmHttpPort(value: string) {
    this._sapIcmHttpPort = value;
  }
  public resetSapIcmHttpPort() {
    this._sapIcmHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapIcmHttpPortInput() {
    return this._sapIcmHttpPort;
  }

  // sap_ms_http_port - computed: true, optional: true, required: false
  private _sapMsHttpPort?: string; 
  public get sapMsHttpPort() {
    return this.getStringAttribute('sap_ms_http_port');
  }
  public set sapMsHttpPort(value: string) {
    this._sapMsHttpPort = value;
  }
  public resetSapMsHttpPort() {
    this._sapMsHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapMsHttpPortInput() {
    return this._sapMsHttpPort;
  }

  // sap_password - computed: true, optional: true, required: false
  private _sapPassword?: string; 
  public get sapPassword() {
    return this.getStringAttribute('sap_password');
  }
  public set sapPassword(value: string) {
    this._sapPassword = value;
  }
  public resetSapPassword() {
    this._sapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapPasswordInput() {
    return this._sapPassword;
  }

  // sap_sidadm - computed: true, optional: true, required: false
  private _sapSidadm?: string; 
  public get sapSidadm() {
    return this.getStringAttribute('sap_sidadm');
  }
  public set sapSidadm(value: string) {
    this._sapSidadm = value;
  }
  public resetSapSidadm() {
    this._sapSidadm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapSidadmInput() {
    return this._sapSidadm;
  }

  // secret_token - computed: true, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // use_metadata_iam - computed: true, optional: true, required: false
  private _useMetadataIam?: string; 
  public get useMetadataIam() {
    return this.getStringAttribute('use_metadata_iam');
  }
  public set useMetadataIam(value: string) {
    this._useMetadataIam = value;
  }
  public resetUseMetadataIam() {
    this._useMetadataIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMetadataIamInput() {
    return this._useMetadataIam;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_accesskey: cdktf.stringToTerraform(this._awsAccesskey),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secretkey: cdktf.stringToTerraform(this._awsSecretkey),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      oci_cert: cdktf.stringToTerraform(this._ociCert),
      oci_compartment_id: cdktf.stringToTerraform(this._ociCompartmentId),
      oci_ha_status: cdktf.stringToTerraform(this._ociHaStatus),
      oci_region: cdktf.stringToTerraform(this._ociRegion),
      oci_region_type: cdktf.stringToTerraform(this._ociRegionType),
      oci_tenant_id: cdktf.stringToTerraform(this._ociTenantId),
      oci_user_id: cdktf.stringToTerraform(this._ociUserId),
      port: cdktf.stringToTerraform(this._port),
      sap_dns_suffix: cdktf.stringToTerraform(this._sapDnsSuffix),
      sap_icm_http_port: cdktf.stringToTerraform(this._sapIcmHttpPort),
      sap_ms_http_port: cdktf.stringToTerraform(this._sapMsHttpPort),
      sap_password: cdktf.stringToTerraform(this._sapPassword),
      sap_sidadm: cdktf.stringToTerraform(this._sapSidadm),
      secret_token: cdktf.stringToTerraform(this._secretToken),
      server: cdktf.stringToTerraform(this._server),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
      use_metadata_iam: cdktf.stringToTerraform(this._useMetadataIam),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_accesskey: {
        value: cdktf.stringToHclTerraform(this._awsAccesskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secretkey: {
        value: cdktf.stringToHclTerraform(this._awsSecretkey),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_cert: {
        value: cdktf.stringToHclTerraform(this._ociCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_compartment_id: {
        value: cdktf.stringToHclTerraform(this._ociCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_ha_status: {
        value: cdktf.stringToHclTerraform(this._ociHaStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_region: {
        value: cdktf.stringToHclTerraform(this._ociRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_region_type: {
        value: cdktf.stringToHclTerraform(this._ociRegionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_tenant_id: {
        value: cdktf.stringToHclTerraform(this._ociTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_user_id: {
        value: cdktf.stringToHclTerraform(this._ociUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_dns_suffix: {
        value: cdktf.stringToHclTerraform(this._sapDnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_icm_http_port: {
        value: cdktf.stringToHclTerraform(this._sapIcmHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_ms_http_port: {
        value: cdktf.stringToHclTerraform(this._sapMsHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_password: {
        value: cdktf.stringToHclTerraform(this._sapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_sidadm: {
        value: cdktf.stringToHclTerraform(this._sapSidadm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_token: {
        value: cdktf.stringToHclTerraform(this._secretToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_metadata_iam: {
        value: cdktf.stringToHclTerraform(this._useMetadataIam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
