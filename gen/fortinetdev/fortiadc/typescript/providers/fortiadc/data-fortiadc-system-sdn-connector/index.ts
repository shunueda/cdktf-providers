// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_sdn_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemSdnConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_sdn_connector#id DataFortiadcSystemSdnConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_sdn_connector#mkey DataFortiadcSystemSdnConnector#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_sdn_connector#vdom DataFortiadcSystemSdnConnector#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_sdn_connector fortiadc_system_sdn_connector}
*/
export class DataFortiadcSystemSdnConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_sdn_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemSdnConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemSdnConnector to import
  * @param importFromId The id of the existing DataFortiadcSystemSdnConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_sdn_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemSdnConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_sdn_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_sdn_connector fortiadc_system_sdn_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemSdnConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemSdnConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_sdn_connector',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_accesskey - computed: true, optional: false, required: false
  public get awsAccesskey() {
    return this.getStringAttribute('aws_accesskey');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // aws_secretkey - computed: true, optional: false, required: false
  public get awsSecretkey() {
    return this.getStringAttribute('aws_secretkey');
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

  // oci_cert - computed: true, optional: false, required: false
  public get ociCert() {
    return this.getStringAttribute('oci_cert');
  }

  // oci_compartment_id - computed: true, optional: false, required: false
  public get ociCompartmentId() {
    return this.getStringAttribute('oci_compartment_id');
  }

  // oci_ha_status - computed: true, optional: false, required: false
  public get ociHaStatus() {
    return this.getStringAttribute('oci_ha_status');
  }

  // oci_region - computed: true, optional: false, required: false
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }

  // oci_region_type - computed: true, optional: false, required: false
  public get ociRegionType() {
    return this.getStringAttribute('oci_region_type');
  }

  // oci_tenant_id - computed: true, optional: false, required: false
  public get ociTenantId() {
    return this.getStringAttribute('oci_tenant_id');
  }

  // oci_user_id - computed: true, optional: false, required: false
  public get ociUserId() {
    return this.getStringAttribute('oci_user_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // sap_dns_suffix - computed: true, optional: false, required: false
  public get sapDnsSuffix() {
    return this.getStringAttribute('sap_dns_suffix');
  }

  // sap_icm_http_port - computed: true, optional: false, required: false
  public get sapIcmHttpPort() {
    return this.getStringAttribute('sap_icm_http_port');
  }

  // sap_ms_http_port - computed: true, optional: false, required: false
  public get sapMsHttpPort() {
    return this.getStringAttribute('sap_ms_http_port');
  }

  // sap_password - computed: true, optional: false, required: false
  public get sapPassword() {
    return this.getStringAttribute('sap_password');
  }

  // sap_sidadm - computed: true, optional: false, required: false
  public get sapSidadm() {
    return this.getStringAttribute('sap_sidadm');
  }

  // secret_token - computed: true, optional: false, required: false
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_interval - computed: true, optional: false, required: false
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }

  // use_metadata_iam - computed: true, optional: false, required: false
  public get useMetadataIam() {
    return this.getStringAttribute('use_metadata_iam');
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
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
