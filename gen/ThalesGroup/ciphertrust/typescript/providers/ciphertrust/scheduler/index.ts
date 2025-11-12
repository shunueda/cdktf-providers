// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchedulerConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Description of the job configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#description Scheduler#description}
  */
  readonly description?: string;
  /**
  * (Updateable) Disable the job configuration. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#disabled Scheduler#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Date the job configuration becomes inactive. RFC3339 format, for example, 2021-07-03T14:24Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#end_date Scheduler#end_date}
  */
  readonly endDate?: string;
  /**
  * Name of the job configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#name Scheduler#name}
  */
  readonly name: string;
  /**
  * Type of operation. Currently, only cckm_key_rotation and cckm_synchronization are supported. Default is cckm_key_rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#operation Scheduler#operation}
  */
  readonly operation?: string;
  /**
  * (Updateable) Described using the cron expression format: '* * * * * 'These five values indicate when the job should be executed. They are in order of minute, hour, day of month, month, and day of week. Valid values are 0-59 (minutes), 0-23 (hours), 1-31 (day of month), 1-12 or jan-dec (month), and 0-6 or sun-sat (day of week). Names are case-insensitive. For example, To run on Saturday at 23:45(11:45 PM): '45 23 * * 6' or '45 23 * * sat' To run on the first of the month at 09:00: '0 9 1 * *'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#run_at Scheduler#run_at}
  */
  readonly runAt: string;
  /**
  * (Updateable) Use 'any' to run the rotation job on any node in the cluster. Use a specific node ID to run the rotation job on that node. Default is 'any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#run_on Scheduler#run_on}
  */
  readonly runOn?: string;
  /**
  * (Updateable) Date the job configuration becomes active. RFC3339 format, for example, 2021-07-03T14:24:00Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#start_date Scheduler#start_date}
  */
  readonly startDate?: string;
  /**
  * cckm_key_rotation_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#cckm_key_rotation_params Scheduler#cckm_key_rotation_params}
  */
  readonly cckmKeyRotationParams?: SchedulerCckmKeyRotationParams;
  /**
  * cckm_synchronization_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#cckm_synchronization_params Scheduler#cckm_synchronization_params}
  */
  readonly cckmSynchronizationParams?: SchedulerCckmSynchronizationParams;
}
export interface SchedulerCckmKeyRotationParams {
  /**
  * (Updateable) Retain the alias and timestamp on the archived key after rotation. Applicable only to AWS key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#aws_retain_alias Scheduler#aws_retain_alias}
  */
  readonly awsRetainAlias?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Name of the cloud for which to schedule the key rotation. Options are: aws, AzureCloud, gcp and oci.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#cloud_name Scheduler#cloud_name}
  */
  readonly cloudName: string;
  /**
  * (Updateable) Expiration time of the new key. If not specified, the new key material never expires. For example, if you want the scheduler to the rotate keys that are expiring within six hours of its run, set expire_in to 6h. Use either 'Xd' for x days or 'Yh' for y hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#expiration Scheduler#expiration}
  */
  readonly expiration?: string;
  /**
  * (Updateable) Period during which certain keys are going to expire. The scheduler rotates the keys that are expiring in this period. If not specified, the scheduler rotates all the keys. For example, if you want the scheduler to rotate the keys that are expiring within six hours of its run, set expire_in to 6h. Use either 'Xd' for x days or 'Yh' for y hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#expire_in Scheduler#expire_in}
  */
  readonly expireIn?: string;
}

export function schedulerCckmKeyRotationParamsToTerraform(struct?: SchedulerCckmKeyRotationParamsOutputReference | SchedulerCckmKeyRotationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_retain_alias: cdktf.booleanToTerraform(struct!.awsRetainAlias),
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    expire_in: cdktf.stringToTerraform(struct!.expireIn),
  }
}


export function schedulerCckmKeyRotationParamsToHclTerraform(struct?: SchedulerCckmKeyRotationParamsOutputReference | SchedulerCckmKeyRotationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_retain_alias: {
      value: cdktf.booleanToHclTerraform(struct!.awsRetainAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_in: {
      value: cdktf.stringToHclTerraform(struct!.expireIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerCckmKeyRotationParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerCckmKeyRotationParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRetainAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRetainAlias = this._awsRetainAlias;
    }
    if (this._cloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudName = this._cloudName;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._expireIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireIn = this._expireIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerCckmKeyRotationParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRetainAlias = undefined;
      this._cloudName = undefined;
      this._expiration = undefined;
      this._expireIn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRetainAlias = value.awsRetainAlias;
      this._cloudName = value.cloudName;
      this._expiration = value.expiration;
      this._expireIn = value.expireIn;
    }
  }

  // aws_retain_alias - computed: true, optional: true, required: false
  private _awsRetainAlias?: boolean | cdktf.IResolvable; 
  public get awsRetainAlias() {
    return this.getBooleanAttribute('aws_retain_alias');
  }
  public set awsRetainAlias(value: boolean | cdktf.IResolvable) {
    this._awsRetainAlias = value;
  }
  public resetAwsRetainAlias() {
    this._awsRetainAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRetainAliasInput() {
    return this._awsRetainAlias;
  }

  // cloud_name - computed: false, optional: false, required: true
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // expire_in - computed: false, optional: true, required: false
  private _expireIn?: string; 
  public get expireIn() {
    return this.getStringAttribute('expire_in');
  }
  public set expireIn(value: string) {
    this._expireIn = value;
  }
  public resetExpireIn() {
    this._expireIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInInput() {
    return this._expireIn;
  }
}
export interface SchedulerCckmSynchronizationParams {
  /**
  * (Updateable) Name of the cloud that will be synchronized on schedule. Options are: aws, AzureCloud, gcp and oci.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#cloud_name Scheduler#cloud_name}
  */
  readonly cloudName: string;
  /**
  * (Updateable) IDs or name of key ring from which Google keys will be synchronized. Unless synchronizing all Google keys, at least one key ring is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#key_rings Scheduler#key_rings}
  */
  readonly keyRings?: string[];
  /**
  * (Updateable) IDs or name of vault from which azure keys will be synchronized. Unless synchronizing all Azure keys, at least one vault is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#key_vaults Scheduler#key_vaults}
  */
  readonly keyVaults?: string[];
  /**
  * (Updateable) IDs or names of kms resources from which AWS keys will be synchronized. Unless synchronizing all AWS keys, At least one kms is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#kms Scheduler#kms}
  */
  readonly kms?: string[];
  /**
  * (Updateable) Set true to synchronize all keys. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#synchronize_all Scheduler#synchronize_all}
  */
  readonly synchronizeAll?: boolean | cdktf.IResolvable;
}

export function schedulerCckmSynchronizationParamsToTerraform(struct?: SchedulerCckmSynchronizationParamsOutputReference | SchedulerCckmSynchronizationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    key_rings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyRings),
    key_vaults: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyVaults),
    kms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kms),
    synchronize_all: cdktf.booleanToTerraform(struct!.synchronizeAll),
  }
}


export function schedulerCckmSynchronizationParamsToHclTerraform(struct?: SchedulerCckmSynchronizationParamsOutputReference | SchedulerCckmSynchronizationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_rings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyRings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key_vaults: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyVaults),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    synchronize_all: {
      value: cdktf.booleanToHclTerraform(struct!.synchronizeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerCckmSynchronizationParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerCckmSynchronizationParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudName = this._cloudName;
    }
    if (this._keyRings !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRings = this._keyRings;
    }
    if (this._keyVaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaults = this._keyVaults;
    }
    if (this._kms !== undefined) {
      hasAnyValues = true;
      internalValueResult.kms = this._kms;
    }
    if (this._synchronizeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronizeAll = this._synchronizeAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerCckmSynchronizationParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudName = undefined;
      this._keyRings = undefined;
      this._keyVaults = undefined;
      this._kms = undefined;
      this._synchronizeAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudName = value.cloudName;
      this._keyRings = value.keyRings;
      this._keyVaults = value.keyVaults;
      this._kms = value.kms;
      this._synchronizeAll = value.synchronizeAll;
    }
  }

  // cloud_name - computed: false, optional: false, required: true
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // key_rings - computed: false, optional: true, required: false
  private _keyRings?: string[]; 
  public get keyRings() {
    return cdktf.Fn.tolist(this.getListAttribute('key_rings'));
  }
  public set keyRings(value: string[]) {
    this._keyRings = value;
  }
  public resetKeyRings() {
    this._keyRings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingsInput() {
    return this._keyRings;
  }

  // key_vaults - computed: false, optional: true, required: false
  private _keyVaults?: string[]; 
  public get keyVaults() {
    return cdktf.Fn.tolist(this.getListAttribute('key_vaults'));
  }
  public set keyVaults(value: string[]) {
    this._keyVaults = value;
  }
  public resetKeyVaults() {
    this._keyVaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultsInput() {
    return this._keyVaults;
  }

  // kms - computed: false, optional: true, required: false
  private _kms?: string[]; 
  public get kms() {
    return cdktf.Fn.tolist(this.getListAttribute('kms'));
  }
  public set kms(value: string[]) {
    this._kms = value;
  }
  public resetKms() {
    this._kms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms;
  }

  // synchronize_all - computed: false, optional: true, required: false
  private _synchronizeAll?: boolean | cdktf.IResolvable; 
  public get synchronizeAll() {
    return this.getBooleanAttribute('synchronize_all');
  }
  public set synchronizeAll(value: boolean | cdktf.IResolvable) {
    this._synchronizeAll = value;
  }
  public resetSynchronizeAll() {
    this._synchronizeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizeAllInput() {
    return this._synchronizeAll;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler ciphertrust_scheduler}
*/
export class Scheduler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_scheduler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Scheduler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Scheduler to import
  * @param importFromId The id of the existing Scheduler that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Scheduler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_scheduler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/scheduler ciphertrust_scheduler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchedulerConfig
  */
  public constructor(scope: Construct, id: string, config: SchedulerConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_scheduler',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
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
    this._disabled = config.disabled;
    this._endDate = config.endDate;
    this._name = config.name;
    this._operation = config.operation;
    this._runAt = config.runAt;
    this._runOn = config.runOn;
    this._startDate = config.startDate;
    this._cckmKeyRotationParams.internalValue = config.cckmKeyRotationParams;
    this._cckmSynchronizationParams.internalValue = config.cckmSynchronizationParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // run_at - computed: false, optional: false, required: true
  private _runAt?: string; 
  public get runAt() {
    return this.getStringAttribute('run_at');
  }
  public set runAt(value: string) {
    this._runAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runAtInput() {
    return this._runAt;
  }

  // run_on - computed: false, optional: true, required: false
  private _runOn?: string; 
  public get runOn() {
    return this.getStringAttribute('run_on');
  }
  public set runOn(value: string) {
    this._runOn = value;
  }
  public resetRunOn() {
    this._runOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnInput() {
    return this._runOn;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // cckm_key_rotation_params - computed: false, optional: true, required: false
  private _cckmKeyRotationParams = new SchedulerCckmKeyRotationParamsOutputReference(this, "cckm_key_rotation_params");
  public get cckmKeyRotationParams() {
    return this._cckmKeyRotationParams;
  }
  public putCckmKeyRotationParams(value: SchedulerCckmKeyRotationParams) {
    this._cckmKeyRotationParams.internalValue = value;
  }
  public resetCckmKeyRotationParams() {
    this._cckmKeyRotationParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmKeyRotationParamsInput() {
    return this._cckmKeyRotationParams.internalValue;
  }

  // cckm_synchronization_params - computed: false, optional: true, required: false
  private _cckmSynchronizationParams = new SchedulerCckmSynchronizationParamsOutputReference(this, "cckm_synchronization_params");
  public get cckmSynchronizationParams() {
    return this._cckmSynchronizationParams;
  }
  public putCckmSynchronizationParams(value: SchedulerCckmSynchronizationParams) {
    this._cckmSynchronizationParams.internalValue = value;
  }
  public resetCckmSynchronizationParams() {
    this._cckmSynchronizationParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmSynchronizationParamsInput() {
    return this._cckmSynchronizationParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      end_date: cdktf.stringToTerraform(this._endDate),
      name: cdktf.stringToTerraform(this._name),
      operation: cdktf.stringToTerraform(this._operation),
      run_at: cdktf.stringToTerraform(this._runAt),
      run_on: cdktf.stringToTerraform(this._runOn),
      start_date: cdktf.stringToTerraform(this._startDate),
      cckm_key_rotation_params: schedulerCckmKeyRotationParamsToTerraform(this._cckmKeyRotationParams.internalValue),
      cckm_synchronization_params: schedulerCckmSynchronizationParamsToTerraform(this._cckmSynchronizationParams.internalValue),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_at: {
        value: cdktf.stringToHclTerraform(this._runAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_on: {
        value: cdktf.stringToHclTerraform(this._runOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cckm_key_rotation_params: {
        value: schedulerCckmKeyRotationParamsToHclTerraform(this._cckmKeyRotationParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchedulerCckmKeyRotationParamsList",
      },
      cckm_synchronization_params: {
        value: schedulerCckmSynchronizationParamsToHclTerraform(this._cckmSynchronizationParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchedulerCckmSynchronizationParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
