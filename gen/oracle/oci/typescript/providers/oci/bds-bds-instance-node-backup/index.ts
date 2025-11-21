// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstanceNodeBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#backup_config_id BdsBdsInstanceNodeBackup#backup_config_id}
  */
  readonly backupConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#backup_type BdsBdsInstanceNodeBackup#backup_type}
  */
  readonly backupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#bds_instance_id BdsBdsInstanceNodeBackup#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#display_name BdsBdsInstanceNodeBackup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#id BdsBdsInstanceNodeBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#node_instance_id BdsBdsInstanceNodeBackup#node_instance_id}
  */
  readonly nodeInstanceId?: string;
  /**
  * level_type_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#level_type_details BdsBdsInstanceNodeBackup#level_type_details}
  */
  readonly levelTypeDetails: BdsBdsInstanceNodeBackupLevelTypeDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#timeouts BdsBdsInstanceNodeBackup#timeouts}
  */
  readonly timeouts?: BdsBdsInstanceNodeBackupTimeouts;
}
export interface BdsBdsInstanceNodeBackupLevelTypeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#level_type BdsBdsInstanceNodeBackup#level_type}
  */
  readonly levelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#node_host_name BdsBdsInstanceNodeBackup#node_host_name}
  */
  readonly nodeHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#node_type BdsBdsInstanceNodeBackup#node_type}
  */
  readonly nodeType?: string;
}

export function bdsBdsInstanceNodeBackupLevelTypeDetailsToTerraform(struct?: BdsBdsInstanceNodeBackupLevelTypeDetailsOutputReference | BdsBdsInstanceNodeBackupLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_type: cdktf.stringToTerraform(struct!.levelType),
    node_host_name: cdktf.stringToTerraform(struct!.nodeHostName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
  }
}


export function bdsBdsInstanceNodeBackupLevelTypeDetailsToHclTerraform(struct?: BdsBdsInstanceNodeBackupLevelTypeDetailsOutputReference | BdsBdsInstanceNodeBackupLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_type: {
      value: cdktf.stringToHclTerraform(struct!.levelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_host_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceNodeBackupLevelTypeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceNodeBackupLevelTypeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelType = this._levelType;
    }
    if (this._nodeHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeHostName = this._nodeHostName;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceNodeBackupLevelTypeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._levelType = undefined;
      this._nodeHostName = undefined;
      this._nodeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._levelType = value.levelType;
      this._nodeHostName = value.nodeHostName;
      this._nodeType = value.nodeType;
    }
  }

  // level_type - computed: false, optional: false, required: true
  private _levelType?: string; 
  public get levelType() {
    return this.getStringAttribute('level_type');
  }
  public set levelType(value: string) {
    this._levelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelTypeInput() {
    return this._levelType;
  }

  // node_host_name - computed: true, optional: true, required: false
  private _nodeHostName?: string; 
  public get nodeHostName() {
    return this.getStringAttribute('node_host_name');
  }
  public set nodeHostName(value: string) {
    this._nodeHostName = value;
  }
  public resetNodeHostName() {
    this._nodeHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeHostNameInput() {
    return this._nodeHostName;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }
}
export interface BdsBdsInstanceNodeBackupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#create BdsBdsInstanceNodeBackup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#delete BdsBdsInstanceNodeBackup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#update BdsBdsInstanceNodeBackup#update}
  */
  readonly update?: string;
}

export function bdsBdsInstanceNodeBackupTimeoutsToTerraform(struct?: BdsBdsInstanceNodeBackupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bdsBdsInstanceNodeBackupTimeoutsToHclTerraform(struct?: BdsBdsInstanceNodeBackupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceNodeBackupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstanceNodeBackupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceNodeBackupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup oci_bds_bds_instance_node_backup}
*/
export class BdsBdsInstanceNodeBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_node_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsInstanceNodeBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsInstanceNodeBackup to import
  * @param importFromId The id of the existing BdsBdsInstanceNodeBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsInstanceNodeBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_node_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bds_bds_instance_node_backup oci_bds_bds_instance_node_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstanceNodeBackupConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstanceNodeBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_node_backup',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupConfigId = config.backupConfigId;
    this._backupType = config.backupType;
    this._bdsInstanceId = config.bdsInstanceId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._nodeInstanceId = config.nodeInstanceId;
    this._levelTypeDetails.internalValue = config.levelTypeDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_config_id - computed: false, optional: true, required: false
  private _backupConfigId?: string; 
  public get backupConfigId() {
    return this.getStringAttribute('backup_config_id');
  }
  public set backupConfigId(value: string) {
    this._backupConfigId = value;
  }
  public resetBackupConfigId() {
    this._backupConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigIdInput() {
    return this._backupConfigId;
  }

  // backup_type - computed: false, optional: false, required: true
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // node_instance_id - computed: true, optional: true, required: false
  private _nodeInstanceId?: string; 
  public get nodeInstanceId() {
    return this.getStringAttribute('node_instance_id');
  }
  public set nodeInstanceId(value: string) {
    this._nodeInstanceId = value;
  }
  public resetNodeInstanceId() {
    this._nodeInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInstanceIdInput() {
    return this._nodeInstanceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // level_type_details - computed: false, optional: false, required: true
  private _levelTypeDetails = new BdsBdsInstanceNodeBackupLevelTypeDetailsOutputReference(this, "level_type_details");
  public get levelTypeDetails() {
    return this._levelTypeDetails;
  }
  public putLevelTypeDetails(value: BdsBdsInstanceNodeBackupLevelTypeDetails) {
    this._levelTypeDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelTypeDetailsInput() {
    return this._levelTypeDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstanceNodeBackupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstanceNodeBackupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_config_id: cdktf.stringToTerraform(this._backupConfigId),
      backup_type: cdktf.stringToTerraform(this._backupType),
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      node_instance_id: cdktf.stringToTerraform(this._nodeInstanceId),
      level_type_details: bdsBdsInstanceNodeBackupLevelTypeDetailsToTerraform(this._levelTypeDetails.internalValue),
      timeouts: bdsBdsInstanceNodeBackupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_config_id: {
        value: cdktf.stringToHclTerraform(this._backupConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      node_instance_id: {
        value: cdktf.stringToHclTerraform(this._nodeInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level_type_details: {
        value: bdsBdsInstanceNodeBackupLevelTypeDetailsToHclTerraform(this._levelTypeDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceNodeBackupLevelTypeDetailsList",
      },
      timeouts: {
        value: bdsBdsInstanceNodeBackupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsInstanceNodeBackupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
