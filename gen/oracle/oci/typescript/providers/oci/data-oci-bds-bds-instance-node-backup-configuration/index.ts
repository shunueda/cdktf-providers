// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceNodeBackupConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup_configuration#bds_instance_id DataOciBdsBdsInstanceNodeBackupConfiguration#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup_configuration#node_backup_configuration_id DataOciBdsBdsInstanceNodeBackupConfiguration#node_backup_configuration_id}
  */
  readonly nodeBackupConfigurationId: string;
}
export interface DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetails {
}

export function dataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetailsToTerraform(struct?: DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetailsToHclTerraform(struct?: DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_type - computed: true, optional: false, required: false
  public get levelType() {
    return this.getStringAttribute('level_type');
  }

  // node_host_name - computed: true, optional: false, required: false
  public get nodeHostName() {
    return this.getStringAttribute('node_host_name');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
}

export class DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetailsOutputReference {
    return new DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup_configuration oci_bds_bds_instance_node_backup_configuration}
*/
export class DataOciBdsBdsInstanceNodeBackupConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_node_backup_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBdsBdsInstanceNodeBackupConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBdsBdsInstanceNodeBackupConfiguration to import
  * @param importFromId The id of the existing DataOciBdsBdsInstanceNodeBackupConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBdsBdsInstanceNodeBackupConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_node_backup_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup_configuration oci_bds_bds_instance_node_backup_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceNodeBackupConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceNodeBackupConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_node_backup_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
    this._nodeBackupConfigurationId = config.nodeBackupConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level_type_details - computed: true, optional: false, required: false
  private _levelTypeDetails = new DataOciBdsBdsInstanceNodeBackupConfigurationLevelTypeDetailsList(this, "level_type_details", false);
  public get levelTypeDetails() {
    return this._levelTypeDetails;
  }

  // node_backup_configuration_id - computed: false, optional: false, required: true
  private _nodeBackupConfigurationId?: string; 
  public get nodeBackupConfigurationId() {
    return this.getStringAttribute('node_backup_configuration_id');
  }
  public set nodeBackupConfigurationId(value: string) {
    this._nodeBackupConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBackupConfigurationIdInput() {
    return this._nodeBackupConfigurationId;
  }

  // number_of_backups_to_retain - computed: true, optional: false, required: false
  public get numberOfBackupsToRetain() {
    return this.getNumberAttribute('number_of_backups_to_retain');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
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

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      node_backup_configuration_id: cdktf.stringToTerraform(this._nodeBackupConfigurationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_backup_configuration_id: {
        value: cdktf.stringToHclTerraform(this._nodeBackupConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
