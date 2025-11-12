// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the protection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy#description Protectionpolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the protection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy#name Protectionpolicy#name}
  */
  readonly name: string;
  /**
  * List of the replication rule IDs that are associated with this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy#replication_rule_ids Protectionpolicy#replication_rule_ids}
  */
  readonly replicationRuleIds?: string[];
  /**
  * List of the replication rule names that are associated with this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy#replication_rule_names Protectionpolicy#replication_rule_names}
  */
  readonly replicationRuleNames?: string[];
  /**
  * List of the snapshot rule IDs that are associated with this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy#snapshot_rule_ids Protectionpolicy#snapshot_rule_ids}
  */
  readonly snapshotRuleIds?: string[];
  /**
  * List of the snapshot rule names that are associated with this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy#snapshot_rule_names Protectionpolicy#snapshot_rule_names}
  */
  readonly snapshotRuleNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy powerstore_protectionpolicy}
*/
export class Protectionpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_protectionpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Protectionpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Protectionpolicy to import
  * @param importFromId The id of the existing Protectionpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Protectionpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_protectionpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/protectionpolicy powerstore_protectionpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_protectionpolicy',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._replicationRuleIds = config.replicationRuleIds;
    this._replicationRuleNames = config.replicationRuleNames;
    this._snapshotRuleIds = config.snapshotRuleIds;
    this._snapshotRuleNames = config.snapshotRuleNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_read_only - computed: true, optional: false, required: false
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
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

  // replication_rule_ids - computed: true, optional: true, required: false
  private _replicationRuleIds?: string[]; 
  public get replicationRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('replication_rule_ids'));
  }
  public set replicationRuleIds(value: string[]) {
    this._replicationRuleIds = value;
  }
  public resetReplicationRuleIds() {
    this._replicationRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRuleIdsInput() {
    return this._replicationRuleIds;
  }

  // replication_rule_names - computed: true, optional: true, required: false
  private _replicationRuleNames?: string[]; 
  public get replicationRuleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('replication_rule_names'));
  }
  public set replicationRuleNames(value: string[]) {
    this._replicationRuleNames = value;
  }
  public resetReplicationRuleNames() {
    this._replicationRuleNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRuleNamesInput() {
    return this._replicationRuleNames;
  }

  // snapshot_rule_ids - computed: true, optional: true, required: false
  private _snapshotRuleIds?: string[]; 
  public get snapshotRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('snapshot_rule_ids'));
  }
  public set snapshotRuleIds(value: string[]) {
    this._snapshotRuleIds = value;
  }
  public resetSnapshotRuleIds() {
    this._snapshotRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRuleIdsInput() {
    return this._snapshotRuleIds;
  }

  // snapshot_rule_names - computed: true, optional: true, required: false
  private _snapshotRuleNames?: string[]; 
  public get snapshotRuleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('snapshot_rule_names'));
  }
  public set snapshotRuleNames(value: string[]) {
    this._snapshotRuleNames = value;
  }
  public resetSnapshotRuleNames() {
    this._snapshotRuleNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRuleNamesInput() {
    return this._snapshotRuleNames;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      replication_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicationRuleIds),
      replication_rule_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicationRuleNames),
      snapshot_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snapshotRuleIds),
      snapshot_rule_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snapshotRuleNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      replication_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicationRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      replication_rule_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicationRuleNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snapshotRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_rule_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snapshotRuleNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
