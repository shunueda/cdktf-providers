// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CspolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#action Cspolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#csvserver Cspolicy#csvserver}
  */
  readonly csvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#forcenew_id_set Cspolicy#forcenew_id_set}
  */
  readonly forcenewIdSet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#id Cspolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#logaction Cspolicy#logaction}
  */
  readonly logaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#policyname Cspolicy#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#priority Cspolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#rule Cspolicy#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#targetlbvserver Cspolicy#targetlbvserver}
  */
  readonly targetlbvserver?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy citrixadc_cspolicy}
*/
export class Cspolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cspolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cspolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cspolicy to import
  * @param importFromId The id of the existing Cspolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cspolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cspolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cspolicy citrixadc_cspolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CspolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CspolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cspolicy',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._csvserver = config.csvserver;
    this._forcenewIdSet = config.forcenewIdSet;
    this._id = config.id;
    this._logaction = config.logaction;
    this._policyname = config.policyname;
    this._priority = config.priority;
    this._rule = config.rule;
    this._targetlbvserver = config.targetlbvserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // csvserver - computed: false, optional: true, required: false
  private _csvserver?: string; 
  public get csvserver() {
    return this.getStringAttribute('csvserver');
  }
  public set csvserver(value: string) {
    this._csvserver = value;
  }
  public resetCsvserver() {
    this._csvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvserverInput() {
    return this._csvserver;
  }

  // forcenew_id_set - computed: false, optional: true, required: false
  private _forcenewIdSet?: string[]; 
  public get forcenewIdSet() {
    return cdktf.Fn.tolist(this.getListAttribute('forcenew_id_set'));
  }
  public set forcenewIdSet(value: string[]) {
    this._forcenewIdSet = value;
  }
  public resetForcenewIdSet() {
    this._forcenewIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcenewIdSetInput() {
    return this._forcenewIdSet;
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

  // logaction - computed: true, optional: true, required: false
  private _logaction?: string; 
  public get logaction() {
    return this.getStringAttribute('logaction');
  }
  public set logaction(value: string) {
    this._logaction = value;
  }
  public resetLogaction() {
    this._logaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logactionInput() {
    return this._logaction;
  }

  // policyname - computed: false, optional: false, required: true
  private _policyname?: string; 
  public get policyname() {
    return this.getStringAttribute('policyname');
  }
  public set policyname(value: string) {
    this._policyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policynameInput() {
    return this._policyname;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // targetlbvserver - computed: false, optional: true, required: false
  private _targetlbvserver?: string; 
  public get targetlbvserver() {
    return this.getStringAttribute('targetlbvserver');
  }
  public set targetlbvserver(value: string) {
    this._targetlbvserver = value;
  }
  public resetTargetlbvserver() {
    this._targetlbvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetlbvserverInput() {
    return this._targetlbvserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      csvserver: cdktf.stringToTerraform(this._csvserver),
      forcenew_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forcenewIdSet),
      id: cdktf.stringToTerraform(this._id),
      logaction: cdktf.stringToTerraform(this._logaction),
      policyname: cdktf.stringToTerraform(this._policyname),
      priority: cdktf.numberToTerraform(this._priority),
      rule: cdktf.stringToTerraform(this._rule),
      targetlbvserver: cdktf.stringToTerraform(this._targetlbvserver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csvserver: {
        value: cdktf.stringToHclTerraform(this._csvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forcenew_id_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forcenewIdSet),
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
      logaction: {
        value: cdktf.stringToHclTerraform(this._logaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyname: {
        value: cdktf.stringToHclTerraform(this._policyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targetlbvserver: {
        value: cdktf.stringToHclTerraform(this._targetlbvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
