// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapNameServicesLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldap#cx_profile_name DataNetappOntapNameServicesLdap#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * IPInterface svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldap#svm_name DataNetappOntapNameServicesLdap#svm_name}
  */
  readonly svmName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldap netapp-ontap_name_services_ldap}
*/
export class DataNetappOntapNameServicesLdap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_name_services_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapNameServicesLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapNameServicesLdap to import
  * @param importFromId The id of the existing DataNetappOntapNameServicesLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapNameServicesLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_name_services_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldap netapp-ontap_name_services_ldap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapNameServicesLdapConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapNameServicesLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_name_services_ldap',
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
    this._cxProfileName = config.cxProfileName;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_domain - computed: true, optional: false, required: false
  public get adDomain() {
    return this.getStringAttribute('ad_domain');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // base_scope - computed: true, optional: false, required: false
  public get baseScope() {
    return this.getStringAttribute('base_scope');
  }

  // bind_as_cifs_server - computed: true, optional: false, required: false
  public get bindAsCifsServer() {
    return this.getBooleanAttribute('bind_as_cifs_server');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
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

  // ldaps_enabled - computed: true, optional: false, required: false
  public get ldapsEnabled() {
    return this.getBooleanAttribute('ldaps_enabled');
  }

  // min_bind_level - computed: true, optional: false, required: false
  public get minBindLevel() {
    return this.getStringAttribute('min_bind_level');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_ad_servers - computed: true, optional: false, required: false
  public get preferredAdServers() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_ad_servers'));
  }

  // query_timeout - computed: true, optional: false, required: false
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }

  // referral_enabled - computed: true, optional: false, required: false
  public get referralEnabled() {
    return this.getBooleanAttribute('referral_enabled');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }

  // session_security - computed: true, optional: false, required: false
  public get sessionSecurity() {
    return this.getStringAttribute('session_security');
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

  // use_start_tls - computed: true, optional: false, required: false
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
