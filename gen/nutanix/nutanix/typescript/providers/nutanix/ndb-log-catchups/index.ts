// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbLogCatchupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#database_id NdbLogCatchups#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#for_restore NdbLogCatchups#for_restore}
  */
  readonly forRestore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#id NdbLogCatchups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#log_catchup_version NdbLogCatchups#log_catchup_version}
  */
  readonly logCatchupVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#time_machine_id NdbLogCatchups#time_machine_id}
  */
  readonly timeMachineId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#timeouts NdbLogCatchups#timeouts}
  */
  readonly timeouts?: NdbLogCatchupsTimeouts;
}
export interface NdbLogCatchupsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#create NdbLogCatchups#create}
  */
  readonly create?: string;
}

export function ndbLogCatchupsTimeoutsToTerraform(struct?: NdbLogCatchupsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function ndbLogCatchupsTimeoutsToHclTerraform(struct?: NdbLogCatchupsTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbLogCatchupsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbLogCatchupsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbLogCatchupsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups nutanix_ndb_log_catchups}
*/
export class NdbLogCatchups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_log_catchups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbLogCatchups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbLogCatchups to import
  * @param importFromId The id of the existing NdbLogCatchups that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbLogCatchups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_log_catchups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_log_catchups nutanix_ndb_log_catchups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbLogCatchupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NdbLogCatchupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_log_catchups',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._forRestore = config.forRestore;
    this._id = config.id;
    this._logCatchupVersion = config.logCatchupVersion;
    this._timeMachineId = config.timeMachineId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // for_restore - computed: false, optional: true, required: false
  private _forRestore?: boolean | cdktf.IResolvable; 
  public get forRestore() {
    return this.getBooleanAttribute('for_restore');
  }
  public set forRestore(value: boolean | cdktf.IResolvable) {
    this._forRestore = value;
  }
  public resetForRestore() {
    this._forRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forRestoreInput() {
    return this._forRestore;
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

  // log_catchup_version - computed: false, optional: true, required: false
  private _logCatchupVersion?: number; 
  public get logCatchupVersion() {
    return this.getNumberAttribute('log_catchup_version');
  }
  public set logCatchupVersion(value: number) {
    this._logCatchupVersion = value;
  }
  public resetLogCatchupVersion() {
    this._logCatchupVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCatchupVersionInput() {
    return this._logCatchupVersion;
  }

  // time_machine_id - computed: false, optional: true, required: false
  private _timeMachineId?: string; 
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
  }
  public set timeMachineId(value: string) {
    this._timeMachineId = value;
  }
  public resetTimeMachineId() {
    this._timeMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineIdInput() {
    return this._timeMachineId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NdbLogCatchupsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbLogCatchupsTimeouts) {
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
      database_id: cdktf.stringToTerraform(this._databaseId),
      for_restore: cdktf.booleanToTerraform(this._forRestore),
      id: cdktf.stringToTerraform(this._id),
      log_catchup_version: cdktf.numberToTerraform(this._logCatchupVersion),
      time_machine_id: cdktf.stringToTerraform(this._timeMachineId),
      timeouts: ndbLogCatchupsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      for_restore: {
        value: cdktf.booleanToHclTerraform(this._forRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_catchup_version: {
        value: cdktf.numberToHclTerraform(this._logCatchupVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_machine_id: {
        value: cdktf.stringToHclTerraform(this._timeMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ndbLogCatchupsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbLogCatchupsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
