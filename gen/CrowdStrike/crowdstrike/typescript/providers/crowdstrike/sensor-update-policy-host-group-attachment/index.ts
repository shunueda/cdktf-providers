// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.47/docs/resources/sensor_update_policy_host_group_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorUpdatePolicyHostGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host Group ids to attach to the sensor update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.47/docs/resources/sensor_update_policy_host_group_attachment#host_groups SensorUpdatePolicyHostGroupAttachment#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * The sensor update policy id you want to attach to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.47/docs/resources/sensor_update_policy_host_group_attachment#id SensorUpdatePolicyHostGroupAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.47/docs/resources/sensor_update_policy_host_group_attachment crowdstrike_sensor_update_policy_host_group_attachment}
*/
export class SensorUpdatePolicyHostGroupAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_sensor_update_policy_host_group_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorUpdatePolicyHostGroupAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorUpdatePolicyHostGroupAttachment to import
  * @param importFromId The id of the existing SensorUpdatePolicyHostGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.47/docs/resources/sensor_update_policy_host_group_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorUpdatePolicyHostGroupAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_sensor_update_policy_host_group_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.47/docs/resources/sensor_update_policy_host_group_attachment crowdstrike_sensor_update_policy_host_group_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorUpdatePolicyHostGroupAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: SensorUpdatePolicyHostGroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_sensor_update_policy_host_group_attachment',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.47',
        providerVersionConstraint: '0.0.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostGroups = config.hostGroups;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('host_groups'));
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroups),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
