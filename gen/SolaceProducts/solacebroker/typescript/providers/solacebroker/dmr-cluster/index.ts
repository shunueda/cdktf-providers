// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmrClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable basic authentication for Cluster Links.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#authentication_basic_enabled DmrCluster#authentication_basic_enabled}
  */
  readonly authenticationBasicEnabled?: boolean | cdktf.IResolvable;
  /**
  * The password used to authenticate incoming Cluster Links when using basic internal authentication. The same password is also used by outgoing Cluster Links if a per-Link password is not configured.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#authentication_basic_password DmrCluster#authentication_basic_password}
  */
  readonly authenticationBasicPassword?: string;
  /**
  * The type of basic authentication to use for Cluster Links.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"internal"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "internal" - Use locally configured password.
  * "none" - No authentication.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#authentication_basic_type DmrCluster#authentication_basic_type}
  */
  readonly authenticationBasicType?: string;
  /**
  * The PEM formatted content for the client certificate used to login to the remote node. It must consist of a private key and between one and three certificates comprising the certificate trust chain.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#authentication_client_cert_content DmrCluster#authentication_client_cert_content}
  */
  readonly authenticationClientCertContent?: string;
  /**
  * Enable or disable client certificate authentication for Cluster Links.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#authentication_client_cert_enabled DmrCluster#authentication_client_cert_enabled}
  */
  readonly authenticationClientCertEnabled?: boolean | cdktf.IResolvable;
  /**
  * The password for the client certificate.
  * 
  * The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#authentication_client_cert_password DmrCluster#authentication_client_cert_password}
  */
  readonly authenticationClientCertPassword?: string;
  /**
  * Enable or disable direct messaging only. Guaranteed messages will not be transmitted through the cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The default value is `false`. Note that this attribute requires replacement of the resource when updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#direct_only_enabled DmrCluster#direct_only_enabled}
  */
  readonly directOnlyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#dmr_cluster_name DmrCluster#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * Enable or disable the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#enabled DmrCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum allowed depth of a certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#tls_server_cert_max_chain_depth DmrCluster#tls_server_cert_max_chain_depth}
  */
  readonly tlsServerCertMaxChainDepth?: number;
  /**
  * Enable or disable the validation of the "Not Before" and "Not After" validity dates in the certificate. When disabled, the certificate is accepted even if the certificate is not valid based on these dates.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#tls_server_cert_validate_date_enabled DmrCluster#tls_server_cert_validate_date_enabled}
  */
  readonly tlsServerCertValidateDateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the bridge. If enabled, the name used to connect to the bridge is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#tls_server_cert_validate_name_enabled DmrCluster#tls_server_cert_validate_name_enabled}
  */
  readonly tlsServerCertValidateNameEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster solacebroker_dmr_cluster}
*/
export class DmrCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmrCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmrCluster to import
  * @param importFromId The id of the existing DmrCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmrCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/dmr_cluster solacebroker_dmr_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmrClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationBasicEnabled = config.authenticationBasicEnabled;
    this._authenticationBasicPassword = config.authenticationBasicPassword;
    this._authenticationBasicType = config.authenticationBasicType;
    this._authenticationClientCertContent = config.authenticationClientCertContent;
    this._authenticationClientCertEnabled = config.authenticationClientCertEnabled;
    this._authenticationClientCertPassword = config.authenticationClientCertPassword;
    this._directOnlyEnabled = config.directOnlyEnabled;
    this._dmrClusterName = config.dmrClusterName;
    this._enabled = config.enabled;
    this._tlsServerCertMaxChainDepth = config.tlsServerCertMaxChainDepth;
    this._tlsServerCertValidateDateEnabled = config.tlsServerCertValidateDateEnabled;
    this._tlsServerCertValidateNameEnabled = config.tlsServerCertValidateNameEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_basic_enabled - computed: false, optional: true, required: false
  private _authenticationBasicEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationBasicEnabled() {
    return this.getBooleanAttribute('authentication_basic_enabled');
  }
  public set authenticationBasicEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationBasicEnabled = value;
  }
  public resetAuthenticationBasicEnabled() {
    this._authenticationBasicEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicEnabledInput() {
    return this._authenticationBasicEnabled;
  }

  // authentication_basic_password - computed: false, optional: true, required: false
  private _authenticationBasicPassword?: string; 
  public get authenticationBasicPassword() {
    return this.getStringAttribute('authentication_basic_password');
  }
  public set authenticationBasicPassword(value: string) {
    this._authenticationBasicPassword = value;
  }
  public resetAuthenticationBasicPassword() {
    this._authenticationBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicPasswordInput() {
    return this._authenticationBasicPassword;
  }

  // authentication_basic_type - computed: false, optional: true, required: false
  private _authenticationBasicType?: string; 
  public get authenticationBasicType() {
    return this.getStringAttribute('authentication_basic_type');
  }
  public set authenticationBasicType(value: string) {
    this._authenticationBasicType = value;
  }
  public resetAuthenticationBasicType() {
    this._authenticationBasicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicTypeInput() {
    return this._authenticationBasicType;
  }

  // authentication_client_cert_content - computed: false, optional: true, required: false
  private _authenticationClientCertContent?: string; 
  public get authenticationClientCertContent() {
    return this.getStringAttribute('authentication_client_cert_content');
  }
  public set authenticationClientCertContent(value: string) {
    this._authenticationClientCertContent = value;
  }
  public resetAuthenticationClientCertContent() {
    this._authenticationClientCertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertContentInput() {
    return this._authenticationClientCertContent;
  }

  // authentication_client_cert_enabled - computed: false, optional: true, required: false
  private _authenticationClientCertEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationClientCertEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_enabled');
  }
  public set authenticationClientCertEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationClientCertEnabled = value;
  }
  public resetAuthenticationClientCertEnabled() {
    this._authenticationClientCertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertEnabledInput() {
    return this._authenticationClientCertEnabled;
  }

  // authentication_client_cert_password - computed: false, optional: true, required: false
  private _authenticationClientCertPassword?: string; 
  public get authenticationClientCertPassword() {
    return this.getStringAttribute('authentication_client_cert_password');
  }
  public set authenticationClientCertPassword(value: string) {
    this._authenticationClientCertPassword = value;
  }
  public resetAuthenticationClientCertPassword() {
    this._authenticationClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertPasswordInput() {
    return this._authenticationClientCertPassword;
  }

  // direct_only_enabled - computed: false, optional: true, required: false
  private _directOnlyEnabled?: boolean | cdktf.IResolvable; 
  public get directOnlyEnabled() {
    return this.getBooleanAttribute('direct_only_enabled');
  }
  public set directOnlyEnabled(value: boolean | cdktf.IResolvable) {
    this._directOnlyEnabled = value;
  }
  public resetDirectOnlyEnabled() {
    this._directOnlyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directOnlyEnabledInput() {
    return this._directOnlyEnabled;
  }

  // dmr_cluster_name - computed: false, optional: false, required: true
  private _dmrClusterName?: string; 
  public get dmrClusterName() {
    return this.getStringAttribute('dmr_cluster_name');
  }
  public set dmrClusterName(value: string) {
    this._dmrClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dmrClusterNameInput() {
    return this._dmrClusterName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // tls_server_cert_max_chain_depth - computed: false, optional: true, required: false
  private _tlsServerCertMaxChainDepth?: number; 
  public get tlsServerCertMaxChainDepth() {
    return this.getNumberAttribute('tls_server_cert_max_chain_depth');
  }
  public set tlsServerCertMaxChainDepth(value: number) {
    this._tlsServerCertMaxChainDepth = value;
  }
  public resetTlsServerCertMaxChainDepth() {
    this._tlsServerCertMaxChainDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerCertMaxChainDepthInput() {
    return this._tlsServerCertMaxChainDepth;
  }

  // tls_server_cert_validate_date_enabled - computed: false, optional: true, required: false
  private _tlsServerCertValidateDateEnabled?: boolean | cdktf.IResolvable; 
  public get tlsServerCertValidateDateEnabled() {
    return this.getBooleanAttribute('tls_server_cert_validate_date_enabled');
  }
  public set tlsServerCertValidateDateEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsServerCertValidateDateEnabled = value;
  }
  public resetTlsServerCertValidateDateEnabled() {
    this._tlsServerCertValidateDateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerCertValidateDateEnabledInput() {
    return this._tlsServerCertValidateDateEnabled;
  }

  // tls_server_cert_validate_name_enabled - computed: false, optional: true, required: false
  private _tlsServerCertValidateNameEnabled?: boolean | cdktf.IResolvable; 
  public get tlsServerCertValidateNameEnabled() {
    return this.getBooleanAttribute('tls_server_cert_validate_name_enabled');
  }
  public set tlsServerCertValidateNameEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsServerCertValidateNameEnabled = value;
  }
  public resetTlsServerCertValidateNameEnabled() {
    this._tlsServerCertValidateNameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerCertValidateNameEnabledInput() {
    return this._tlsServerCertValidateNameEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_basic_enabled: cdktf.booleanToTerraform(this._authenticationBasicEnabled),
      authentication_basic_password: cdktf.stringToTerraform(this._authenticationBasicPassword),
      authentication_basic_type: cdktf.stringToTerraform(this._authenticationBasicType),
      authentication_client_cert_content: cdktf.stringToTerraform(this._authenticationClientCertContent),
      authentication_client_cert_enabled: cdktf.booleanToTerraform(this._authenticationClientCertEnabled),
      authentication_client_cert_password: cdktf.stringToTerraform(this._authenticationClientCertPassword),
      direct_only_enabled: cdktf.booleanToTerraform(this._directOnlyEnabled),
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      tls_server_cert_max_chain_depth: cdktf.numberToTerraform(this._tlsServerCertMaxChainDepth),
      tls_server_cert_validate_date_enabled: cdktf.booleanToTerraform(this._tlsServerCertValidateDateEnabled),
      tls_server_cert_validate_name_enabled: cdktf.booleanToTerraform(this._tlsServerCertValidateNameEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_basic_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationBasicEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_basic_password: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_basic_type: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_content: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationClientCertEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_client_cert_password: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_only_enabled: {
        value: cdktf.booleanToHclTerraform(this._directOnlyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_server_cert_max_chain_depth: {
        value: cdktf.numberToHclTerraform(this._tlsServerCertMaxChainDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_server_cert_validate_date_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsServerCertValidateDateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_server_cert_validate_name_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsServerCertValidateNameEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
