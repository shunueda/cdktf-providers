// https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserstoreColumnSoftDeletedRetentionDurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#column_id UserstoreColumnSoftDeletedRetentionDuration#column_id}
  */
  readonly columnId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#duration UserstoreColumnSoftDeletedRetentionDuration#duration}
  */
  readonly duration?: UserstoreColumnSoftDeletedRetentionDurationDuration;
  /**
  * Valid values: `live`, `postdelete`, `predelete`, `softdeleted`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#duration_type UserstoreColumnSoftDeletedRetentionDuration#duration_type}
  */
  readonly durationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#id UserstoreColumnSoftDeletedRetentionDuration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#purpose_id UserstoreColumnSoftDeletedRetentionDuration#purpose_id}
  */
  readonly purposeId?: string;
}
export interface UserstoreColumnSoftDeletedRetentionDurationDefaultDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#duration UserstoreColumnSoftDeletedRetentionDuration#duration}
  */
  readonly duration?: number;
  /**
  * Valid values: `day`, `hour`, `indefinite`, `month`, `week`, `year`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#unit UserstoreColumnSoftDeletedRetentionDuration#unit}
  */
  readonly unit?: string;
}

export function userstoreColumnSoftDeletedRetentionDurationDefaultDurationToTerraform(struct?: UserstoreColumnSoftDeletedRetentionDurationDefaultDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function userstoreColumnSoftDeletedRetentionDurationDefaultDurationToHclTerraform(struct?: UserstoreColumnSoftDeletedRetentionDurationDefaultDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserstoreColumnSoftDeletedRetentionDurationDefaultDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserstoreColumnSoftDeletedRetentionDurationDefaultDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserstoreColumnSoftDeletedRetentionDurationDefaultDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface UserstoreColumnSoftDeletedRetentionDurationDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#duration UserstoreColumnSoftDeletedRetentionDuration#duration}
  */
  readonly duration?: number;
  /**
  * Valid values: `day`, `hour`, `indefinite`, `month`, `week`, `year`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#unit UserstoreColumnSoftDeletedRetentionDuration#unit}
  */
  readonly unit?: string;
}

export function userstoreColumnSoftDeletedRetentionDurationDurationToTerraform(struct?: UserstoreColumnSoftDeletedRetentionDurationDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function userstoreColumnSoftDeletedRetentionDurationDurationToHclTerraform(struct?: UserstoreColumnSoftDeletedRetentionDurationDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserstoreColumnSoftDeletedRetentionDurationDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserstoreColumnSoftDeletedRetentionDurationDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserstoreColumnSoftDeletedRetentionDurationDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._unit = value.unit;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration userclouds_userstore_column_soft_deleted_retention_duration}
*/
export class UserstoreColumnSoftDeletedRetentionDuration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "userclouds_userstore_column_soft_deleted_retention_duration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserstoreColumnSoftDeletedRetentionDuration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserstoreColumnSoftDeletedRetentionDuration to import
  * @param importFromId The id of the existing UserstoreColumnSoftDeletedRetentionDuration that should be imported. Refer to the {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserstoreColumnSoftDeletedRetentionDuration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "userclouds_userstore_column_soft_deleted_retention_duration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_soft_deleted_retention_duration userclouds_userstore_column_soft_deleted_retention_duration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserstoreColumnSoftDeletedRetentionDurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserstoreColumnSoftDeletedRetentionDurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'userclouds_userstore_column_soft_deleted_retention_duration',
      terraformGeneratorMetadata: {
        providerName: 'userclouds',
        providerVersion: '0.1.8',
        providerVersionConstraint: '0.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._columnId = config.columnId;
    this._duration.internalValue = config.duration;
    this._durationType = config.durationType;
    this._id = config.id;
    this._purposeId = config.purposeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_id - computed: true, optional: true, required: false
  private _columnId?: string; 
  public get columnId() {
    return this.getStringAttribute('column_id');
  }
  public set columnId(value: string) {
    this._columnId = value;
  }
  public resetColumnId() {
    this._columnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIdInput() {
    return this._columnId;
  }

  // default_duration - computed: true, optional: false, required: false
  private _defaultDuration = new UserstoreColumnSoftDeletedRetentionDurationDefaultDurationOutputReference(this, "default_duration");
  public get defaultDuration() {
    return this._defaultDuration;
  }

  // duration - computed: true, optional: true, required: false
  private _duration = new UserstoreColumnSoftDeletedRetentionDurationDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: UserstoreColumnSoftDeletedRetentionDurationDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // duration_type - computed: true, optional: true, required: false
  private _durationType?: string; 
  public get durationType() {
    return this.getStringAttribute('duration_type');
  }
  public set durationType(value: string) {
    this._durationType = value;
  }
  public resetDurationType() {
    this._durationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationTypeInput() {
    return this._durationType;
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

  // purpose_id - computed: true, optional: true, required: false
  private _purposeId?: string; 
  public get purposeId() {
    return this.getStringAttribute('purpose_id');
  }
  public set purposeId(value: string) {
    this._purposeId = value;
  }
  public resetPurposeId() {
    this._purposeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeIdInput() {
    return this._purposeId;
  }

  // purpose_name - computed: true, optional: false, required: false
  public get purposeName() {
    return this.getStringAttribute('purpose_name');
  }

  // use_default - computed: true, optional: false, required: false
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_id: cdktf.stringToTerraform(this._columnId),
      duration: userstoreColumnSoftDeletedRetentionDurationDurationToTerraform(this._duration.internalValue),
      duration_type: cdktf.stringToTerraform(this._durationType),
      id: cdktf.stringToTerraform(this._id),
      purpose_id: cdktf.stringToTerraform(this._purposeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_id: {
        value: cdktf.stringToHclTerraform(this._columnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: userstoreColumnSoftDeletedRetentionDurationDurationToHclTerraform(this._duration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserstoreColumnSoftDeletedRetentionDurationDuration",
      },
      duration_type: {
        value: cdktf.stringToHclTerraform(this._durationType),
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
      purpose_id: {
        value: cdktf.stringToHclTerraform(this._purposeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
