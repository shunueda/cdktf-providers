// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReplicationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert threshold for the replication rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule#alert_threshold ReplicationRule#alert_threshold}
  */
  readonly alertThreshold?: number;
  /**
  * Indicates whether the replication rule is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule#is_read_only ReplicationRule#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of the replication rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule#name ReplicationRule#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the remote system associated with the replication rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule#remote_system_id ReplicationRule#remote_system_id}
  */
  readonly remoteSystemId: string;
  /**
  * Recovery Point Objective (RPO) of the replication rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule#rpo ReplicationRule#rpo}
  */
  readonly rpo: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule powerstore_replication_rule}
*/
export class ReplicationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_replication_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReplicationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReplicationRule to import
  * @param importFromId The id of the existing ReplicationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReplicationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_replication_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/replication_rule powerstore_replication_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReplicationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ReplicationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_replication_rule',
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
    this._alertThreshold = config.alertThreshold;
    this._isReadOnly = config.isReadOnly;
    this._name = config.name;
    this._remoteSystemId = config.remoteSystemId;
    this._rpo = config.rpo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_threshold - computed: true, optional: true, required: false
  private _alertThreshold?: number; 
  public get alertThreshold() {
    return this.getNumberAttribute('alert_threshold');
  }
  public set alertThreshold(value: number) {
    this._alertThreshold = value;
  }
  public resetAlertThreshold() {
    this._alertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertThresholdInput() {
    return this._alertThreshold;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
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

  // remote_system_id - computed: false, optional: false, required: true
  private _remoteSystemId?: string; 
  public get remoteSystemId() {
    return this.getStringAttribute('remote_system_id');
  }
  public set remoteSystemId(value: string) {
    this._remoteSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSystemIdInput() {
    return this._remoteSystemId;
  }

  // rpo - computed: false, optional: false, required: true
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_threshold: cdktf.numberToTerraform(this._alertThreshold),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      name: cdktf.stringToTerraform(this._name),
      remote_system_id: cdktf.stringToTerraform(this._remoteSystemId),
      rpo: cdktf.stringToTerraform(this._rpo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_threshold: {
        value: cdktf.numberToHclTerraform(this._alertThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_read_only: {
        value: cdktf.booleanToHclTerraform(this._isReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_system_id: {
        value: cdktf.stringToHclTerraform(this._remoteSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpo: {
        value: cdktf.stringToHclTerraform(this._rpo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
