// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_iot_domain_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotIotDomainGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_iot_domain_group#iot_domain_group_id DataOciIotIotDomainGroup#iot_domain_group_id}
  */
  readonly iotDomainGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_iot_domain_group oci_iot_iot_domain_group}
*/
export class DataOciIotIotDomainGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_iot_domain_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotIotDomainGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotIotDomainGroup to import
  * @param importFromId The id of the existing DataOciIotIotDomainGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_iot_domain_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotIotDomainGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_iot_domain_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_iot_domain_group oci_iot_iot_domain_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotIotDomainGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotIotDomainGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_iot_domain_group',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._iotDomainGroupId = config.iotDomainGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_host - computed: true, optional: false, required: false
  public get dataHost() {
    return this.getStringAttribute('data_host');
  }

  // db_allow_listed_vcn_ids - computed: true, optional: false, required: false
  public get dbAllowListedVcnIds() {
    return this.getListAttribute('db_allow_listed_vcn_ids');
  }

  // db_connection_string - computed: true, optional: false, required: false
  public get dbConnectionString() {
    return this.getStringAttribute('db_connection_string');
  }

  // db_token_scope - computed: true, optional: false, required: false
  public get dbTokenScope() {
    return this.getStringAttribute('db_token_scope');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // iot_domain_group_id - computed: false, optional: false, required: true
  private _iotDomainGroupId?: string; 
  public get iotDomainGroupId() {
    return this.getStringAttribute('iot_domain_group_id');
  }
  public set iotDomainGroupId(value: string) {
    this._iotDomainGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDomainGroupIdInput() {
    return this._iotDomainGroupId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iot_domain_group_id: cdktf.stringToTerraform(this._iotDomainGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iot_domain_group_id: {
        value: cdktf.stringToHclTerraform(this._iotDomainGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
