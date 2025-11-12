// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/bastion_bastion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBastionBastionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/bastion_bastion#bastion_id DataOciBastionBastion#bastion_id}
  */
  readonly bastionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/bastion_bastion oci_bastion_bastion}
*/
export class DataOciBastionBastion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bastion_bastion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBastionBastion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBastionBastion to import
  * @param importFromId The id of the existing DataOciBastionBastion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/bastion_bastion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBastionBastion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bastion_bastion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/bastion_bastion oci_bastion_bastion} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBastionBastionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBastionBastionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bastion_bastion',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bastionId = config.bastionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bastion_id - computed: false, optional: false, required: true
  private _bastionId?: string; 
  public get bastionId() {
    return this.getStringAttribute('bastion_id');
  }
  public set bastionId(value: string) {
    this._bastionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionIdInput() {
    return this._bastionId;
  }

  // bastion_type - computed: true, optional: false, required: false
  public get bastionType() {
    return this.getStringAttribute('bastion_type');
  }

  // client_cidr_block_allow_list - computed: true, optional: false, required: false
  public get clientCidrBlockAllowList() {
    return this.getListAttribute('client_cidr_block_allow_list');
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

  // dns_proxy_status - computed: true, optional: false, required: false
  public get dnsProxyStatus() {
    return this.getStringAttribute('dns_proxy_status');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_session_ttl_in_seconds - computed: true, optional: false, required: false
  public get maxSessionTtlInSeconds() {
    return this.getNumberAttribute('max_session_ttl_in_seconds');
  }

  // max_sessions_allowed - computed: true, optional: false, required: false
  public get maxSessionsAllowed() {
    return this.getNumberAttribute('max_sessions_allowed');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone_book_entry - computed: true, optional: false, required: false
  public get phoneBookEntry() {
    return this.getStringAttribute('phone_book_entry');
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_jump_host_ip_addresses - computed: true, optional: false, required: false
  public get staticJumpHostIpAddresses() {
    return this.getListAttribute('static_jump_host_ip_addresses');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_subnet_id - computed: true, optional: false, required: false
  public get targetSubnetId() {
    return this.getStringAttribute('target_subnet_id');
  }

  // target_vcn_id - computed: true, optional: false, required: false
  public get targetVcnId() {
    return this.getStringAttribute('target_vcn_id');
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
      bastion_id: cdktf.stringToTerraform(this._bastionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bastion_id: {
        value: cdktf.stringToHclTerraform(this._bastionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
