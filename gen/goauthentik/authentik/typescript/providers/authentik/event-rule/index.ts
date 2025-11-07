// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Send notification to event user Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule#destination_event_user EventRule#destination_event_user}
  */
  readonly destinationEventUser?: boolean | cdktf.IResolvable;
  /**
  * Group to send notification to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule#destination_group EventRule#destination_group}
  */
  readonly destinationGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule#id EventRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule#name EventRule#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `notice`
  *   - `warning`
  *   - `alert`
  *  Defaults to `warning`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule#severity EventRule#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule#transports EventRule#transports}
  */
  readonly transports: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule authentik_event_rule}
*/
export class EventRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_event_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventRule to import
  * @param importFromId The id of the existing EventRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_event_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_rule authentik_event_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EventRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_event_rule',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationEventUser = config.destinationEventUser;
    this._destinationGroup = config.destinationGroup;
    this._id = config.id;
    this._name = config.name;
    this._severity = config.severity;
    this._transports = config.transports;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_event_user - computed: false, optional: true, required: false
  private _destinationEventUser?: boolean | cdktf.IResolvable; 
  public get destinationEventUser() {
    return this.getBooleanAttribute('destination_event_user');
  }
  public set destinationEventUser(value: boolean | cdktf.IResolvable) {
    this._destinationEventUser = value;
  }
  public resetDestinationEventUser() {
    this._destinationEventUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEventUserInput() {
    return this._destinationEventUser;
  }

  // destination_group - computed: false, optional: true, required: false
  private _destinationGroup?: string; 
  public get destinationGroup() {
    return this.getStringAttribute('destination_group');
  }
  public set destinationGroup(value: string) {
    this._destinationGroup = value;
  }
  public resetDestinationGroup() {
    this._destinationGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupInput() {
    return this._destinationGroup;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // transports - computed: false, optional: false, required: true
  private _transports?: string[]; 
  public get transports() {
    return this.getListAttribute('transports');
  }
  public set transports(value: string[]) {
    this._transports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportsInput() {
    return this._transports;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_event_user: cdktf.booleanToTerraform(this._destinationEventUser),
      destination_group: cdktf.stringToTerraform(this._destinationGroup),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.stringToTerraform(this._severity),
      transports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transports),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_event_user: {
        value: cdktf.booleanToHclTerraform(this._destinationEventUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination_group: {
        value: cdktf.stringToHclTerraform(this._destinationGroup),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
