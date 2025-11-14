// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeCalculateAuditVolumeCollectedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#audit_profile_id DataSafeCalculateAuditVolumeCollected#audit_profile_id}
  */
  readonly auditProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#id DataSafeCalculateAuditVolumeCollected#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#time_from_month DataSafeCalculateAuditVolumeCollected#time_from_month}
  */
  readonly timeFromMonth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#time_to_month DataSafeCalculateAuditVolumeCollected#time_to_month}
  */
  readonly timeToMonth?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#timeouts DataSafeCalculateAuditVolumeCollected#timeouts}
  */
  readonly timeouts?: DataSafeCalculateAuditVolumeCollectedTimeouts;
}
export interface DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes {
}

export function dataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesToTerraform(struct?: DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesToHclTerraform(struct?: DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archived_volume - computed: true, optional: false, required: false
  public get archivedVolume() {
    return this.getStringAttribute('archived_volume');
  }

  // audit_profile_id - computed: true, optional: false, required: false
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }

  // month_in_consideration - computed: true, optional: false, required: false
  public get monthInConsideration() {
    return this.getStringAttribute('month_in_consideration');
  }

  // online_volume - computed: true, optional: false, required: false
  public get onlineVolume() {
    return this.getStringAttribute('online_volume');
  }
}

export class DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference {
    return new DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeCalculateAuditVolumeCollectedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#create DataSafeCalculateAuditVolumeCollected#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#delete DataSafeCalculateAuditVolumeCollected#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#update DataSafeCalculateAuditVolumeCollected#update}
  */
  readonly update?: string;
}

export function dataSafeCalculateAuditVolumeCollectedTimeoutsToTerraform(struct?: DataSafeCalculateAuditVolumeCollectedTimeouts | cdktf.IResolvable): any {
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


export function dataSafeCalculateAuditVolumeCollectedTimeoutsToHclTerraform(struct?: DataSafeCalculateAuditVolumeCollectedTimeouts | cdktf.IResolvable): any {
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

export class DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeCalculateAuditVolumeCollectedTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeCalculateAuditVolumeCollectedTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected oci_data_safe_calculate_audit_volume_collected}
*/
export class DataSafeCalculateAuditVolumeCollected extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_calculate_audit_volume_collected";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeCalculateAuditVolumeCollected resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeCalculateAuditVolumeCollected to import
  * @param importFromId The id of the existing DataSafeCalculateAuditVolumeCollected that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeCalculateAuditVolumeCollected to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_calculate_audit_volume_collected", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_calculate_audit_volume_collected oci_data_safe_calculate_audit_volume_collected} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeCalculateAuditVolumeCollectedConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeCalculateAuditVolumeCollectedConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_calculate_audit_volume_collected',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditProfileId = config.auditProfileId;
    this._id = config.id;
    this._timeFromMonth = config.timeFromMonth;
    this._timeToMonth = config.timeToMonth;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_profile_id - computed: false, optional: false, required: true
  private _auditProfileId?: string; 
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }
  public set auditProfileId(value: string) {
    this._auditProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProfileIdInput() {
    return this._auditProfileId;
  }

  // collected_audit_volumes - computed: true, optional: false, required: false
  private _collectedAuditVolumes = new DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList(this, "collected_audit_volumes", false);
  public get collectedAuditVolumes() {
    return this._collectedAuditVolumes;
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

  // time_from_month - computed: false, optional: false, required: true
  private _timeFromMonth?: string; 
  public get timeFromMonth() {
    return this.getStringAttribute('time_from_month');
  }
  public set timeFromMonth(value: string) {
    this._timeFromMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFromMonthInput() {
    return this._timeFromMonth;
  }

  // time_to_month - computed: true, optional: true, required: false
  private _timeToMonth?: string; 
  public get timeToMonth() {
    return this.getStringAttribute('time_to_month');
  }
  public set timeToMonth(value: string) {
    this._timeToMonth = value;
  }
  public resetTimeToMonth() {
    this._timeToMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToMonthInput() {
    return this._timeToMonth;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeCalculateAuditVolumeCollectedTimeouts) {
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
      audit_profile_id: cdktf.stringToTerraform(this._auditProfileId),
      id: cdktf.stringToTerraform(this._id),
      time_from_month: cdktf.stringToTerraform(this._timeFromMonth),
      time_to_month: cdktf.stringToTerraform(this._timeToMonth),
      timeouts: dataSafeCalculateAuditVolumeCollectedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_profile_id: {
        value: cdktf.stringToHclTerraform(this._auditProfileId),
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
      time_from_month: {
        value: cdktf.stringToHclTerraform(this._timeFromMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_month: {
        value: cdktf.stringToHclTerraform(this._timeToMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeCalculateAuditVolumeCollectedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeCalculateAuditVolumeCollectedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
