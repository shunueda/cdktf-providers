// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/owner_from_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalOwnerFromNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/owner_from_name#owner_name DataOpalOwnerFromName#owner_name}
  */
  readonly ownerName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/owner_from_name opal_owner_from_name}
*/
export class DataOpalOwnerFromName extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_owner_from_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalOwnerFromName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalOwnerFromName to import
  * @param importFromId The id of the existing DataOpalOwnerFromName that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/owner_from_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalOwnerFromName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_owner_from_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/owner_from_name opal_owner_from_name} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalOwnerFromNameConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalOwnerFromNameConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_owner_from_name',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ownerName = config.ownerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_request_escalation_period - computed: true, optional: false, required: false
  public get accessRequestEscalationPeriod() {
    return this.getNumberAttribute('access_request_escalation_period');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // reviewer_message_channel_id - computed: true, optional: false, required: false
  public get reviewerMessageChannelId() {
    return this.getStringAttribute('reviewer_message_channel_id');
  }

  // source_group_id - computed: true, optional: false, required: false
  public get sourceGroupId() {
    return this.getStringAttribute('source_group_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      owner_name: cdktf.stringToTerraform(this._ownerName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
