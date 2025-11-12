// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPublisherUpgradeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * publisher upgrade profile external_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profile#publisher_upgrade_profile_id DataNetskopeNpaPublisherUpgradeProfile#publisher_upgrade_profile_id}
  */
  readonly publisherUpgradeProfileId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profile netskope_npa_publisher_upgrade_profile}
*/
export class DataNetskopeNpaPublisherUpgradeProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publisher_upgrade_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPublisherUpgradeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPublisherUpgradeProfile to import
  * @param importFromId The id of the existing DataNetskopeNpaPublisherUpgradeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPublisherUpgradeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publisher_upgrade_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher_upgrade_profile netskope_npa_publisher_upgrade_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPublisherUpgradeProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPublisherUpgradeProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publisher_upgrade_profile',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._publisherUpgradeProfileId = config.publisherUpgradeProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // docker_tag - computed: true, optional: false, required: false
  public get dockerTag() {
    return this.getStringAttribute('docker_tag');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_update_time - computed: true, optional: false, required: false
  public get nextUpdateTime() {
    return this.getNumberAttribute('next_update_time');
  }

  // num_associated_publisher - computed: true, optional: false, required: false
  public get numAssociatedPublisher() {
    return this.getNumberAttribute('num_associated_publisher');
  }

  // publisher_upgrade_profile_id - computed: false, optional: false, required: true
  private _publisherUpgradeProfileId?: number; 
  public get publisherUpgradeProfileId() {
    return this.getNumberAttribute('publisher_upgrade_profile_id');
  }
  public set publisherUpgradeProfileId(value: number) {
    this._publisherUpgradeProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherUpgradeProfileIdInput() {
    return this._publisherUpgradeProfileId;
  }

  // release_type - computed: true, optional: false, required: false
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upgrading_stage - computed: true, optional: false, required: false
  public get upgradingStage() {
    return this.getNumberAttribute('upgrading_stage');
  }

  // will_start - computed: true, optional: false, required: false
  public get willStart() {
    return this.getBooleanAttribute('will_start');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      publisher_upgrade_profile_id: cdktf.numberToTerraform(this._publisherUpgradeProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      publisher_upgrade_profile_id: {
        value: cdktf.numberToHclTerraform(this._publisherUpgradeProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
