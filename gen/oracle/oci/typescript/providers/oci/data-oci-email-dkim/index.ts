// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/email_dkim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciEmailDkimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/email_dkim#dkim_id DataOciEmailDkim#dkim_id}
  */
  readonly dkimId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/email_dkim oci_email_dkim}
*/
export class DataOciEmailDkim extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_email_dkim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciEmailDkim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciEmailDkim to import
  * @param importFromId The id of the existing DataOciEmailDkim that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/email_dkim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciEmailDkim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_email_dkim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/email_dkim oci_email_dkim} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciEmailDkimConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciEmailDkimConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_email_dkim',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dkimId = config.dkimId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname_record_value - computed: true, optional: false, required: false
  public get cnameRecordValue() {
    return this.getStringAttribute('cname_record_value');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dkim_id - computed: false, optional: false, required: true
  private _dkimId?: string; 
  public get dkimId() {
    return this.getStringAttribute('dkim_id');
  }
  public set dkimId(value: string) {
    this._dkimId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dkimIdInput() {
    return this._dkimId;
  }

  // dns_subdomain_name - computed: true, optional: false, required: false
  public get dnsSubdomainName() {
    return this.getStringAttribute('dns_subdomain_name');
  }

  // email_domain_id - computed: true, optional: false, required: false
  public get emailDomainId() {
    return this.getStringAttribute('email_domain_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_imported - computed: true, optional: false, required: false
  public get isImported() {
    return this.getBooleanAttribute('is_imported');
  }

  // key_length - computed: true, optional: false, required: false
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // txt_record_value - computed: true, optional: false, required: false
  public get txtRecordValue() {
    return this.getStringAttribute('txt_record_value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dkim_id: cdktf.stringToTerraform(this._dkimId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dkim_id: {
        value: cdktf.stringToHclTerraform(this._dkimId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
