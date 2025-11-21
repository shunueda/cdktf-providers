// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/autosupport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapAutosupportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/autosupport#cx_profile_name DataNetappOntapAutosupport#cx_profile_name}
  */
  readonly cxProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/autosupport netapp-ontap_autosupport}
*/
export class DataNetappOntapAutosupport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_autosupport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapAutosupport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapAutosupport to import
  * @param importFromId The id of the existing DataNetappOntapAutosupport that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/autosupport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapAutosupport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_autosupport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/autosupport netapp-ontap_autosupport} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapAutosupportConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapAutosupportConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_autosupport',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_support - computed: true, optional: false, required: false
  public get contactSupport() {
    return this.getBooleanAttribute('contact_support');
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_minimal - computed: true, optional: false, required: false
  public get isMinimal() {
    return this.getBooleanAttribute('is_minimal');
  }

  // mail_hosts - computed: true, optional: false, required: false
  public get mailHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('mail_hosts'));
  }

  // ondemand_enabled - computed: true, optional: false, required: false
  public get ondemandEnabled() {
    return this.getBooleanAttribute('ondemand_enabled');
  }

  // partner_addresses - computed: true, optional: false, required: false
  public get partnerAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('partner_addresses'));
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // smtp_encryption - computed: true, optional: false, required: false
  public get smtpEncryption() {
    return this.getStringAttribute('smtp_encryption');
  }

  // to_addresses - computed: true, optional: false, required: false
  public get toAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('to_addresses'));
  }

  // transport - computed: true, optional: false, required: false
  public get transport() {
    return this.getStringAttribute('transport');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
