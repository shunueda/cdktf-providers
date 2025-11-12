// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundSequenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ordered list of Campaigns that this CampaignSequence will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence#campaign_ids OutboundSequence#campaign_ids}
  */
  readonly campaignIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence#id OutboundSequence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of outbound sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence#name OutboundSequence#name}
  */
  readonly name: string;
  /**
  * Indicates if a sequence should repeat from the beginning after the last campaign completes. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence#repeat OutboundSequence#repeat}
  */
  readonly repeat?: boolean | cdktf.IResolvable;
  /**
  * The current status of the CampaignSequence. A CampaignSequence can be turned 'on' or 'off' (default). Changing from "on" to "off" will cause the current sequence to drop and be recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence#status OutboundSequence#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence genesyscloud_outbound_sequence}
*/
export class OutboundSequence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_sequence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundSequence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundSequence to import
  * @param importFromId The id of the existing OutboundSequence that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundSequence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_sequence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_sequence genesyscloud_outbound_sequence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundSequenceConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundSequenceConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_sequence',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._campaignIds = config.campaignIds;
    this._id = config.id;
    this._name = config.name;
    this._repeat = config.repeat;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // campaign_ids - computed: false, optional: false, required: true
  private _campaignIds?: string[]; 
  public get campaignIds() {
    return this.getListAttribute('campaign_ids');
  }
  public set campaignIds(value: string[]) {
    this._campaignIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignIdsInput() {
    return this._campaignIds;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat?: boolean | cdktf.IResolvable; 
  public get repeat() {
    return this.getBooleanAttribute('repeat');
  }
  public set repeat(value: boolean | cdktf.IResolvable) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      campaign_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._campaignIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repeat: cdktf.booleanToTerraform(this._repeat),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      campaign_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._campaignIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat: {
        value: cdktf.booleanToHclTerraform(this._repeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
