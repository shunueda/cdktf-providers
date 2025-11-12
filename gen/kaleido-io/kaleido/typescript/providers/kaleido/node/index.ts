// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#backup_id Node#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#baf_id Node#baf_id}
  */
  readonly bafId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#consortium_id Node#consortium_id}
  */
  readonly consortiumId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#database_type Node#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#environment_id Node#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#kms_id Node#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#membership_id Node#membership_id}
  */
  readonly membershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#name Node#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#networking_id Node#networking_id}
  */
  readonly networkingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#node_config_id Node#node_config_id}
  */
  readonly nodeConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#opsmetric_id Node#opsmetric_id}
  */
  readonly opsmetricId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#remote Node#remote}
  */
  readonly remote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#role Node#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#size Node#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#update_trigger Node#update_trigger}
  */
  readonly updateTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#zone_id Node#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node kaleido_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Node resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Node to import
  * @param importFromId The id of the existing Node that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Node to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/node kaleido_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_node',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupId = config.backupId;
    this._bafId = config.bafId;
    this._consortiumId = config.consortiumId;
    this._databaseType = config.databaseType;
    this._environmentId = config.environmentId;
    this._kmsId = config.kmsId;
    this._membershipId = config.membershipId;
    this._name = config.name;
    this._networkingId = config.networkingId;
    this._nodeConfigId = config.nodeConfigId;
    this._opsmetricId = config.opsmetricId;
    this._remote = config.remote;
    this._role = config.role;
    this._size = config.size;
    this._updateTrigger = config.updateTrigger;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // baf_id - computed: false, optional: true, required: false
  private _bafId?: string; 
  public get bafId() {
    return this.getStringAttribute('baf_id');
  }
  public set bafId(value: string) {
    this._bafId = value;
  }
  public resetBafId() {
    this._bafId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bafIdInput() {
    return this._bafId;
  }

  // consortium_id - computed: false, optional: false, required: true
  private _consortiumId?: string; 
  public get consortiumId() {
    return this.getStringAttribute('consortium_id');
  }
  public set consortiumId(value: string) {
    this._consortiumId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consortiumIdInput() {
    return this._consortiumId;
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // first_user_account - computed: true, optional: false, required: false
  public get firstUserAccount() {
    return this.getStringAttribute('first_user_account');
  }

  // https_url - computed: true, optional: false, required: false
  public get httpsUrl() {
    return this.getStringAttribute('https_url');
  }

  // hybrid_port_allocation - computed: true, optional: false, required: false
  public get hybridPortAllocation() {
    return this.getNumberAttribute('hybrid_port_allocation');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_id - computed: false, optional: true, required: false
  private _kmsId?: string; 
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }
  public set kmsId(value: string) {
    this._kmsId = value;
  }
  public resetKmsId() {
    this._kmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsIdInput() {
    return this._kmsId;
  }

  // membership_id - computed: false, optional: false, required: true
  private _membershipId?: string; 
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }
  public set membershipId(value: string) {
    this._membershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdInput() {
    return this._membershipId;
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

  // networking_id - computed: false, optional: true, required: false
  private _networkingId?: string; 
  public get networkingId() {
    return this.getStringAttribute('networking_id');
  }
  public set networkingId(value: string) {
    this._networkingId = value;
  }
  public resetNetworkingId() {
    this._networkingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingIdInput() {
    return this._networkingId;
  }

  // node_config_id - computed: false, optional: true, required: false
  private _nodeConfigId?: string; 
  public get nodeConfigId() {
    return this.getStringAttribute('node_config_id');
  }
  public set nodeConfigId(value: string) {
    this._nodeConfigId = value;
  }
  public resetNodeConfigId() {
    this._nodeConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigIdInput() {
    return this._nodeConfigId;
  }

  // opsmetric_id - computed: false, optional: true, required: false
  private _opsmetricId?: string; 
  public get opsmetricId() {
    return this.getStringAttribute('opsmetric_id');
  }
  public set opsmetricId(value: string) {
    this._opsmetricId = value;
  }
  public resetOpsmetricId() {
    this._opsmetricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsmetricIdInput() {
    return this._opsmetricId;
  }

  // remote - computed: true, optional: true, required: false
  private _remote?: boolean | cdktf.IResolvable; 
  public get remote() {
    return this.getBooleanAttribute('remote');
  }
  public set remote(value: boolean | cdktf.IResolvable) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // update_trigger - computed: false, optional: true, required: false
  private _updateTrigger?: string; 
  public get updateTrigger() {
    return this.getStringAttribute('update_trigger');
  }
  public set updateTrigger(value: string) {
    this._updateTrigger = value;
  }
  public resetUpdateTrigger() {
    this._updateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTriggerInput() {
    return this._updateTrigger;
  }

  // urls - computed: true, optional: false, required: false
  private _urls = new cdktf.StringMap(this, "urls");
  public get urls() {
    return this._urls;
  }

  // websocket_url - computed: true, optional: false, required: false
  public get websocketUrl() {
    return this.getStringAttribute('websocket_url');
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.stringToTerraform(this._backupId),
      baf_id: cdktf.stringToTerraform(this._bafId),
      consortium_id: cdktf.stringToTerraform(this._consortiumId),
      database_type: cdktf.stringToTerraform(this._databaseType),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      kms_id: cdktf.stringToTerraform(this._kmsId),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      name: cdktf.stringToTerraform(this._name),
      networking_id: cdktf.stringToTerraform(this._networkingId),
      node_config_id: cdktf.stringToTerraform(this._nodeConfigId),
      opsmetric_id: cdktf.stringToTerraform(this._opsmetricId),
      remote: cdktf.booleanToTerraform(this._remote),
      role: cdktf.stringToTerraform(this._role),
      size: cdktf.stringToTerraform(this._size),
      update_trigger: cdktf.stringToTerraform(this._updateTrigger),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baf_id: {
        value: cdktf.stringToHclTerraform(this._bafId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consortium_id: {
        value: cdktf.stringToHclTerraform(this._consortiumId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_id: {
        value: cdktf.stringToHclTerraform(this._kmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_id: {
        value: cdktf.stringToHclTerraform(this._membershipId),
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
      networking_id: {
        value: cdktf.stringToHclTerraform(this._networkingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_config_id: {
        value: cdktf.stringToHclTerraform(this._nodeConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opsmetric_id: {
        value: cdktf.stringToHclTerraform(this._opsmetricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote: {
        value: cdktf.booleanToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_trigger: {
        value: cdktf.stringToHclTerraform(this._updateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
