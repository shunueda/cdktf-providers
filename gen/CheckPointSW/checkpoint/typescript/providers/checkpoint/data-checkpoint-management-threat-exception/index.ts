// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementThreatExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the exception-group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#exception_group_name DataCheckpointManagementThreatException#exception_group_name}
  */
  readonly exceptionGroupName?: string;
  /**
  * The UID of the exception-group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#exception_group_uid DataCheckpointManagementThreatException#exception_group_uid}
  */
  readonly exceptionGroupUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#id DataCheckpointManagementThreatException#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Layer that the rule belongs to identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#layer DataCheckpointManagementThreatException#layer}
  */
  readonly layer: string;
  /**
  * The name of the exception.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#name DataCheckpointManagementThreatException#name}
  */
  readonly name?: string;
  /**
  * The name of the parent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#rule_name DataCheckpointManagementThreatException#rule_name}
  */
  readonly ruleName?: string;
  /**
  * The UID of the parent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#rule_uid DataCheckpointManagementThreatException#rule_uid}
  */
  readonly ruleUid?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#uid DataCheckpointManagementThreatException#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception checkpoint_management_threat_exception}
*/
export class DataCheckpointManagementThreatException extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_threat_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementThreatException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementThreatException to import
  * @param importFromId The id of the existing DataCheckpointManagementThreatException that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementThreatException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_threat_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_threat_exception checkpoint_management_threat_exception} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementThreatExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementThreatExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_threat_exception',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exceptionGroupName = config.exceptionGroupName;
    this._exceptionGroupUid = config.exceptionGroupUid;
    this._id = config.id;
    this._layer = config.layer;
    this._name = config.name;
    this._ruleName = config.ruleName;
    this._ruleUid = config.ruleUid;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return cdktf.Fn.tolist(this.getListAttribute('destination'));
  }

  // destination_negate - computed: true, optional: false, required: false
  public get destinationNegate() {
    return this.getBooleanAttribute('destination_negate');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exception_group_name - computed: false, optional: true, required: false
  private _exceptionGroupName?: string; 
  public get exceptionGroupName() {
    return this.getStringAttribute('exception_group_name');
  }
  public set exceptionGroupName(value: string) {
    this._exceptionGroupName = value;
  }
  public resetExceptionGroupName() {
    this._exceptionGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionGroupNameInput() {
    return this._exceptionGroupName;
  }

  // exception_group_uid - computed: false, optional: true, required: false
  private _exceptionGroupUid?: string; 
  public get exceptionGroupUid() {
    return this.getStringAttribute('exception_group_uid');
  }
  public set exceptionGroupUid(value: string) {
    this._exceptionGroupUid = value;
  }
  public resetExceptionGroupUid() {
    this._exceptionGroupUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionGroupUidInput() {
    return this._exceptionGroupUid;
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

  // install_on - computed: true, optional: false, required: false
  public get installOn() {
    return cdktf.Fn.tolist(this.getListAttribute('install_on'));
  }

  // layer - computed: false, optional: false, required: true
  private _layer?: string; 
  public get layer() {
    return this.getStringAttribute('layer');
  }
  public set layer(value: string) {
    this._layer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // protected_scope - computed: true, optional: false, required: false
  public get protectedScope() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_scope'));
  }

  // protected_scope_negate - computed: true, optional: false, required: false
  public get protectedScopeNegate() {
    return this.getBooleanAttribute('protected_scope_negate');
  }

  // protection_or_site - computed: true, optional: false, required: false
  public get protectionOrSite() {
    return cdktf.Fn.tolist(this.getListAttribute('protection_or_site'));
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_uid - computed: false, optional: true, required: false
  private _ruleUid?: string; 
  public get ruleUid() {
    return this.getStringAttribute('rule_uid');
  }
  public set ruleUid(value: string) {
    this._ruleUid = value;
  }
  public resetRuleUid() {
    this._ruleUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleUidInput() {
    return this._ruleUid;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }

  // service_negate - computed: true, optional: false, required: false
  public get serviceNegate() {
    return this.getBooleanAttribute('service_negate');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return cdktf.Fn.tolist(this.getListAttribute('source'));
  }

  // source_negate - computed: true, optional: false, required: false
  public get sourceNegate() {
    return this.getBooleanAttribute('source_negate');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exception_group_name: cdktf.stringToTerraform(this._exceptionGroupName),
      exception_group_uid: cdktf.stringToTerraform(this._exceptionGroupUid),
      id: cdktf.stringToTerraform(this._id),
      layer: cdktf.stringToTerraform(this._layer),
      name: cdktf.stringToTerraform(this._name),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_uid: cdktf.stringToTerraform(this._ruleUid),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exception_group_name: {
        value: cdktf.stringToHclTerraform(this._exceptionGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_group_uid: {
        value: cdktf.stringToHclTerraform(this._exceptionGroupUid),
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
      layer: {
        value: cdktf.stringToHclTerraform(this._layer),
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_uid: {
        value: cdktf.stringToHclTerraform(this._ruleUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
