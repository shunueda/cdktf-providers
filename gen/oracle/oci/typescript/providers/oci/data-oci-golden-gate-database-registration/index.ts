// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_database_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGoldenGateDatabaseRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_database_registration#database_registration_id DataOciGoldenGateDatabaseRegistration#database_registration_id}
  */
  readonly databaseRegistrationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_database_registration oci_golden_gate_database_registration}
*/
export class DataOciGoldenGateDatabaseRegistration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_database_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGoldenGateDatabaseRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGoldenGateDatabaseRegistration to import
  * @param importFromId The id of the existing DataOciGoldenGateDatabaseRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_database_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGoldenGateDatabaseRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_database_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_database_registration oci_golden_gate_database_registration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGoldenGateDatabaseRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGoldenGateDatabaseRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_database_registration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseRegistrationId = config.databaseRegistrationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_name - computed: true, optional: false, required: false
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_registration_id - computed: false, optional: false, required: true
  private _databaseRegistrationId?: string; 
  public get databaseRegistrationId() {
    return this.getStringAttribute('database_registration_id');
  }
  public set databaseRegistrationId(value: string) {
    this._databaseRegistrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRegistrationIdInput() {
    return this._databaseRegistrationId;
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // rce_private_ip - computed: true, optional: false, required: false
  public get rcePrivateIp() {
    return this.getStringAttribute('rce_private_ip');
  }

  // secret_compartment_id - computed: true, optional: false, required: false
  public get secretCompartmentId() {
    return this.getStringAttribute('secret_compartment_id');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // session_mode - computed: true, optional: false, required: false
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // wallet - computed: true, optional: false, required: false
  public get wallet() {
    return this.getStringAttribute('wallet');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_registration_id: cdktf.stringToTerraform(this._databaseRegistrationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_registration_id: {
        value: cdktf.stringToHclTerraform(this._databaseRegistrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
