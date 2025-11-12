// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCertificateCrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#ca_id SystemCertificateCrl#ca_id}
  */
  readonly caId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#crldp_status SystemCertificateCrl#crldp_status}
  */
  readonly crldpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#id SystemCertificateCrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#ldap_server SystemCertificateCrl#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#mkey SystemCertificateCrl#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#update_ahead_time SystemCertificateCrl#update_ahead_time}
  */
  readonly updateAheadTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#update_interval SystemCertificateCrl#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#use_ca_id SystemCertificateCrl#use_ca_id}
  */
  readonly useCaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#vdom SystemCertificateCrl#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl fortiadc_system_certificate_crl}
*/
export class SystemCertificateCrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_certificate_crl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCertificateCrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCertificateCrl to import
  * @param importFromId The id of the existing SystemCertificateCrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCertificateCrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_certificate_crl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_crl fortiadc_system_certificate_crl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCertificateCrlConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCertificateCrlConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_certificate_crl',
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
    this._caId = config.caId;
    this._crldpStatus = config.crldpStatus;
    this._id = config.id;
    this._ldapServer = config.ldapServer;
    this._mkey = config.mkey;
    this._updateAheadTime = config.updateAheadTime;
    this._updateInterval = config.updateInterval;
    this._useCaId = config.useCaId;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_id - computed: true, optional: true, required: false
  private _caId?: string; 
  public get caId() {
    return this.getStringAttribute('ca_id');
  }
  public set caId(value: string) {
    this._caId = value;
  }
  public resetCaId() {
    this._caId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdInput() {
    return this._caId;
  }

  // crldp_status - computed: true, optional: true, required: false
  private _crldpStatus?: string; 
  public get crldpStatus() {
    return this.getStringAttribute('crldp_status');
  }
  public set crldpStatus(value: string) {
    this._crldpStatus = value;
  }
  public resetCrldpStatus() {
    this._crldpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crldpStatusInput() {
    return this._crldpStatus;
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

  // ldap_server - computed: true, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
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

  // update_ahead_time - computed: true, optional: true, required: false
  private _updateAheadTime?: string; 
  public get updateAheadTime() {
    return this.getStringAttribute('update_ahead_time');
  }
  public set updateAheadTime(value: string) {
    this._updateAheadTime = value;
  }
  public resetUpdateAheadTime() {
    this._updateAheadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAheadTimeInput() {
    return this._updateAheadTime;
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

  // use_ca_id - computed: true, optional: true, required: false
  private _useCaId?: string; 
  public get useCaId() {
    return this.getStringAttribute('use_ca_id');
  }
  public set useCaId(value: string) {
    this._useCaId = value;
  }
  public resetUseCaId() {
    this._useCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCaIdInput() {
    return this._useCaId;
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
      ca_id: cdktf.stringToTerraform(this._caId),
      crldp_status: cdktf.stringToTerraform(this._crldpStatus),
      id: cdktf.stringToTerraform(this._id),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      mkey: cdktf.stringToTerraform(this._mkey),
      update_ahead_time: cdktf.stringToTerraform(this._updateAheadTime),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
      use_ca_id: cdktf.stringToTerraform(this._useCaId),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_id: {
        value: cdktf.stringToHclTerraform(this._caId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crldp_status: {
        value: cdktf.stringToHclTerraform(this._crldpStatus),
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
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
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
      update_ahead_time: {
        value: cdktf.stringToHclTerraform(this._updateAheadTime),
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
      use_ca_id: {
        value: cdktf.stringToHclTerraform(this._useCaId),
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
