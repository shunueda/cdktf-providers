// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#account Maintenance#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#check Maintenance#check}
  */
  readonly check?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#id Maintenance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#notes Maintenance#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#rule_set Maintenance#rule_set}
  */
  readonly ruleSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#severities Maintenance#severities}
  */
  readonly severities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#start Maintenance#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#stop Maintenance#stop}
  */
  readonly stop: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#tags Maintenance#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#target Maintenance#target}
  */
  readonly target?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance circonus_maintenance}
*/
export class Maintenance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_maintenance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Maintenance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Maintenance to import
  * @param importFromId The id of the existing Maintenance that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Maintenance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_maintenance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/maintenance circonus_maintenance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus_maintenance',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._check = config.check;
    this._id = config.id;
    this._notes = config.notes;
    this._ruleSet = config.ruleSet;
    this._severities = config.severities;
    this._start = config.start;
    this._stop = config.stop;
    this._tags = config.tags;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // check - computed: false, optional: true, required: false
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet?: string; 
  public get ruleSet() {
    return this.getStringAttribute('rule_set');
  }
  public set ruleSet(value: string) {
    this._ruleSet = value;
  }
  public resetRuleSet() {
    this._ruleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet;
  }

  // severities - computed: false, optional: false, required: true
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // stop - computed: false, optional: false, required: true
  private _stop?: string; 
  public get stop() {
    return this.getStringAttribute('stop');
  }
  public set stop(value: string) {
    this._stop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInput() {
    return this._stop;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      check: cdktf.stringToTerraform(this._check),
      id: cdktf.stringToTerraform(this._id),
      notes: cdktf.stringToTerraform(this._notes),
      rule_set: cdktf.stringToTerraform(this._ruleSet),
      severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severities),
      start: cdktf.stringToTerraform(this._start),
      stop: cdktf.stringToTerraform(this._stop),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check: {
        value: cdktf.stringToHclTerraform(this._check),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set: {
        value: cdktf.stringToHclTerraform(this._ruleSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop: {
        value: cdktf.stringToHclTerraform(this._stop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
