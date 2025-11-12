// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbServiceDeleteScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time at which the DB Service should be deleted at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule#delete_at DbServiceDeleteSchedule#delete_at}
  */
  readonly deleteAt: string;
  /**
  * The ID of the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule#service_id DbServiceDeleteSchedule#service_id}
  */
  readonly serviceId: string;
  /**
  * deletion_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule#deletion_config DbServiceDeleteSchedule#deletion_config}
  */
  readonly deletionConfig?: DbServiceDeleteScheduleDeletionConfig;
}
export interface DbServiceDeleteScheduleDeletionConfig {
  /**
  * If specified as true, the associated Availability Machine (snapshots, sanitized-snapshots, logs) would be retained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule#retain_availability_machine DbServiceDeleteSchedule#retain_availability_machine}
  */
  readonly retainAvailabilityMachine?: boolean | cdktf.IResolvable;
}

export function dbServiceDeleteScheduleDeletionConfigToTerraform(struct?: DbServiceDeleteScheduleDeletionConfigOutputReference | DbServiceDeleteScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_availability_machine: cdktf.booleanToTerraform(struct!.retainAvailabilityMachine),
  }
}


export function dbServiceDeleteScheduleDeletionConfigToHclTerraform(struct?: DbServiceDeleteScheduleDeletionConfigOutputReference | DbServiceDeleteScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_availability_machine: {
      value: cdktf.booleanToHclTerraform(struct!.retainAvailabilityMachine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDeleteScheduleDeletionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDeleteScheduleDeletionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainAvailabilityMachine !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAvailabilityMachine = this._retainAvailabilityMachine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDeleteScheduleDeletionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retainAvailabilityMachine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retainAvailabilityMachine = value.retainAvailabilityMachine;
    }
  }

  // retain_availability_machine - computed: false, optional: true, required: false
  private _retainAvailabilityMachine?: boolean | cdktf.IResolvable; 
  public get retainAvailabilityMachine() {
    return this.getBooleanAttribute('retain_availability_machine');
  }
  public set retainAvailabilityMachine(value: boolean | cdktf.IResolvable) {
    this._retainAvailabilityMachine = value;
  }
  public resetRetainAvailabilityMachine() {
    this._retainAvailabilityMachine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAvailabilityMachineInput() {
    return this._retainAvailabilityMachine;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule tessell_db_service_delete_schedule}
*/
export class DbServiceDeleteSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_db_service_delete_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbServiceDeleteSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbServiceDeleteSchedule to import
  * @param importFromId The id of the existing DbServiceDeleteSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbServiceDeleteSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_db_service_delete_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/resources/db_service_delete_schedule tessell_db_service_delete_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbServiceDeleteScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DbServiceDeleteScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'tessell_db_service_delete_schedule',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.27',
        providerVersionConstraint: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteAt = config.deleteAt;
    this._serviceId = config.serviceId;
    this._deletionConfig.internalValue = config.deletionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_at - computed: false, optional: false, required: true
  private _deleteAt?: string; 
  public get deleteAt() {
    return this.getStringAttribute('delete_at');
  }
  public set deleteAt(value: string) {
    this._deleteAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAtInput() {
    return this._deleteAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // deletion_config - computed: false, optional: true, required: false
  private _deletionConfig = new DbServiceDeleteScheduleDeletionConfigOutputReference(this, "deletion_config");
  public get deletionConfig() {
    return this._deletionConfig;
  }
  public putDeletionConfig(value: DbServiceDeleteScheduleDeletionConfig) {
    this._deletionConfig.internalValue = value;
  }
  public resetDeletionConfig() {
    this._deletionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionConfigInput() {
    return this._deletionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_at: cdktf.stringToTerraform(this._deleteAt),
      service_id: cdktf.stringToTerraform(this._serviceId),
      deletion_config: dbServiceDeleteScheduleDeletionConfigToTerraform(this._deletionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_at: {
        value: cdktf.stringToHclTerraform(this._deleteAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_config: {
        value: dbServiceDeleteScheduleDeletionConfigToHclTerraform(this._deletionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbServiceDeleteScheduleDeletionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
