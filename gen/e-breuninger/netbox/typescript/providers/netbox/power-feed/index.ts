// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#amperage PowerFeed#amperage}
  */
  readonly amperage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#comments PowerFeed#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#custom_fields PowerFeed#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#description PowerFeed#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#id PowerFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#mark_connected PowerFeed#mark_connected}
  */
  readonly markConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#max_percent_utilization PowerFeed#max_percent_utilization}
  */
  readonly maxPercentUtilization: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#name PowerFeed#name}
  */
  readonly name: string;
  /**
  * One of [single-phase, three-phase].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#phase PowerFeed#phase}
  */
  readonly phase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#power_panel_id PowerFeed#power_panel_id}
  */
  readonly powerPanelId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#rack_id PowerFeed#rack_id}
  */
  readonly rackId?: number;
  /**
  * One of [offline, active, planned, failed].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#status PowerFeed#status}
  */
  readonly status: string;
  /**
  * One of [ac, dc].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#supply PowerFeed#supply}
  */
  readonly supply: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#tags PowerFeed#tags}
  */
  readonly tags?: string[];
  /**
  * One of [primary, redundant].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#type PowerFeed#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#voltage PowerFeed#voltage}
  */
  readonly voltage: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed netbox_power_feed}
*/
export class PowerFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_power_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerFeed to import
  * @param importFromId The id of the existing PowerFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_power_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/power_feed netbox_power_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerFeedConfig
  */
  public constructor(scope: Construct, id: string, config: PowerFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_power_feed',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amperage = config.amperage;
    this._comments = config.comments;
    this._customFields = config.customFields;
    this._description = config.description;
    this._id = config.id;
    this._markConnected = config.markConnected;
    this._maxPercentUtilization = config.maxPercentUtilization;
    this._name = config.name;
    this._phase = config.phase;
    this._powerPanelId = config.powerPanelId;
    this._rackId = config.rackId;
    this._status = config.status;
    this._supply = config.supply;
    this._tags = config.tags;
    this._type = config.type;
    this._voltage = config.voltage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amperage - computed: false, optional: false, required: true
  private _amperage?: number; 
  public get amperage() {
    return this.getNumberAttribute('amperage');
  }
  public set amperage(value: number) {
    this._amperage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amperageInput() {
    return this._amperage;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // mark_connected - computed: false, optional: true, required: false
  private _markConnected?: boolean | cdktf.IResolvable; 
  public get markConnected() {
    return this.getBooleanAttribute('mark_connected');
  }
  public set markConnected(value: boolean | cdktf.IResolvable) {
    this._markConnected = value;
  }
  public resetMarkConnected() {
    this._markConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markConnectedInput() {
    return this._markConnected;
  }

  // max_percent_utilization - computed: false, optional: false, required: true
  private _maxPercentUtilization?: number; 
  public get maxPercentUtilization() {
    return this.getNumberAttribute('max_percent_utilization');
  }
  public set maxPercentUtilization(value: number) {
    this._maxPercentUtilization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPercentUtilizationInput() {
    return this._maxPercentUtilization;
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

  // phase - computed: false, optional: false, required: true
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // power_panel_id - computed: false, optional: false, required: true
  private _powerPanelId?: number; 
  public get powerPanelId() {
    return this.getNumberAttribute('power_panel_id');
  }
  public set powerPanelId(value: number) {
    this._powerPanelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerPanelIdInput() {
    return this._powerPanelId;
  }

  // rack_id - computed: false, optional: true, required: false
  private _rackId?: number; 
  public get rackId() {
    return this.getNumberAttribute('rack_id');
  }
  public set rackId(value: number) {
    this._rackId = value;
  }
  public resetRackId() {
    this._rackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackIdInput() {
    return this._rackId;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // supply - computed: false, optional: false, required: true
  private _supply?: string; 
  public get supply() {
    return this.getStringAttribute('supply');
  }
  public set supply(value: string) {
    this._supply = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supplyInput() {
    return this._supply;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // voltage - computed: false, optional: false, required: true
  private _voltage?: number; 
  public get voltage() {
    return this.getNumberAttribute('voltage');
  }
  public set voltage(value: number) {
    this._voltage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageInput() {
    return this._voltage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amperage: cdktf.numberToTerraform(this._amperage),
      comments: cdktf.stringToTerraform(this._comments),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mark_connected: cdktf.booleanToTerraform(this._markConnected),
      max_percent_utilization: cdktf.numberToTerraform(this._maxPercentUtilization),
      name: cdktf.stringToTerraform(this._name),
      phase: cdktf.stringToTerraform(this._phase),
      power_panel_id: cdktf.numberToTerraform(this._powerPanelId),
      rack_id: cdktf.numberToTerraform(this._rackId),
      status: cdktf.stringToTerraform(this._status),
      supply: cdktf.stringToTerraform(this._supply),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      voltage: cdktf.numberToTerraform(this._voltage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amperage: {
        value: cdktf.numberToHclTerraform(this._amperage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mark_connected: {
        value: cdktf.booleanToHclTerraform(this._markConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_percent_utilization: {
        value: cdktf.numberToHclTerraform(this._maxPercentUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase: {
        value: cdktf.stringToHclTerraform(this._phase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_panel_id: {
        value: cdktf.numberToHclTerraform(this._powerPanelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rack_id: {
        value: cdktf.numberToHclTerraform(this._rackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supply: {
        value: cdktf.stringToHclTerraform(this._supply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voltage: {
        value: cdktf.numberToHclTerraform(this._voltage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
