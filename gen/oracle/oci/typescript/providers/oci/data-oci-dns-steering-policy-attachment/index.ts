// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_steering_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDnsSteeringPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_steering_policy_attachment#steering_policy_attachment_id DataOciDnsSteeringPolicyAttachment#steering_policy_attachment_id}
  */
  readonly steeringPolicyAttachmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_steering_policy_attachment oci_dns_steering_policy_attachment}
*/
export class DataOciDnsSteeringPolicyAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dns_steering_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDnsSteeringPolicyAttachment to import
  * @param importFromId The id of the existing DataOciDnsSteeringPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_steering_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDnsSteeringPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dns_steering_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dns_steering_policy_attachment oci_dns_steering_policy_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDnsSteeringPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDnsSteeringPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_steering_policy_attachment',
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
    this._steeringPolicyAttachmentId = config.steeringPolicyAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rtypes - computed: true, optional: false, required: false
  public get rtypes() {
    return this.getListAttribute('rtypes');
  }

  // self - computed: true, optional: false, required: false
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // steering_policy_attachment_id - computed: false, optional: false, required: true
  private _steeringPolicyAttachmentId?: string; 
  public get steeringPolicyAttachmentId() {
    return this.getStringAttribute('steering_policy_attachment_id');
  }
  public set steeringPolicyAttachmentId(value: string) {
    this._steeringPolicyAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringPolicyAttachmentIdInput() {
    return this._steeringPolicyAttachmentId;
  }

  // steering_policy_id - computed: true, optional: false, required: false
  public get steeringPolicyId() {
    return this.getStringAttribute('steering_policy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      steering_policy_attachment_id: cdktf.stringToTerraform(this._steeringPolicyAttachmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      steering_policy_attachment_id: {
        value: cdktf.stringToHclTerraform(this._steeringPolicyAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
