// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwrapperConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capacity Alerts enablement information for the configuration. The Alert Threshold should be between 50 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#capacity_alerts_threshold CloudwrapperConfiguration#capacity_alerts_threshold}
  */
  readonly capacityAlertsThreshold?: number;
  /**
  * Additional information you provide to differentiate or track changes of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#comments CloudwrapperConfiguration#comments}
  */
  readonly comments: string;
  /**
  * Name of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#config_name CloudwrapperConfiguration#config_name}
  */
  readonly configName: string;
  /**
  * Contract ID having Cloud Wrapper entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#contract_id CloudwrapperConfiguration#contract_id}
  */
  readonly contractId: string;
  /**
  * Email addresses to use for notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#notification_emails CloudwrapperConfiguration#notification_emails}
  */
  readonly notificationEmails?: string[];
  /**
  * List of properties belonging to eligible products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#property_ids CloudwrapperConfiguration#property_ids}
  */
  readonly propertyIds: string[];
  /**
  * Retain idle objects beyond their max idle lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#retain_idle_objects CloudwrapperConfiguration#retain_idle_objects}
  */
  readonly retainIdleObjects?: boolean | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#location CloudwrapperConfiguration#location}
  */
  readonly location?: CloudwrapperConfigurationLocation[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#timeouts CloudwrapperConfiguration#timeouts}
  */
  readonly timeouts?: CloudwrapperConfigurationTimeouts;
}
export interface CloudwrapperConfigurationLocationCapacity {
  /**
  * Unit of capacity. Can be either 'GB' or 'TB'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#unit CloudwrapperConfiguration#unit}
  */
  readonly unit: string;
  /**
  * Value of capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#value CloudwrapperConfiguration#value}
  */
  readonly value: number;
}

export function cloudwrapperConfigurationLocationCapacityToTerraform(struct?: CloudwrapperConfigurationLocationCapacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function cloudwrapperConfigurationLocationCapacityToHclTerraform(struct?: CloudwrapperConfigurationLocationCapacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwrapperConfigurationLocationCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwrapperConfigurationLocationCapacity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwrapperConfigurationLocationCapacity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CloudwrapperConfigurationLocation {
  /**
  * Additional comments provided by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#comments CloudwrapperConfiguration#comments}
  */
  readonly comments: string;
  /**
  * Unique identifier for the location and traffic type combination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#traffic_type_id CloudwrapperConfiguration#traffic_type_id}
  */
  readonly trafficTypeId: number;
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#capacity CloudwrapperConfiguration#capacity}
  */
  readonly capacity: CloudwrapperConfigurationLocationCapacity;
}

export function cloudwrapperConfigurationLocationToTerraform(struct?: CloudwrapperConfigurationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    traffic_type_id: cdktf.numberToTerraform(struct!.trafficTypeId),
    capacity: cloudwrapperConfigurationLocationCapacityToTerraform(struct!.capacity),
  }
}


export function cloudwrapperConfigurationLocationToHclTerraform(struct?: CloudwrapperConfigurationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_type_id: {
      value: cdktf.numberToHclTerraform(struct!.trafficTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity: {
      value: cloudwrapperConfigurationLocationCapacityToHclTerraform(struct!.capacity),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwrapperConfigurationLocationCapacity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwrapperConfigurationLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudwrapperConfigurationLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._trafficTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTypeId = this._trafficTypeId;
    }
    if (this._capacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwrapperConfigurationLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._trafficTypeId = undefined;
      this._capacity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._trafficTypeId = value.trafficTypeId;
      this._capacity.internalValue = value.capacity;
    }
  }

  // comments - computed: false, optional: false, required: true
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // traffic_type_id - computed: false, optional: false, required: true
  private _trafficTypeId?: number; 
  public get trafficTypeId() {
    return this.getNumberAttribute('traffic_type_id');
  }
  public set trafficTypeId(value: number) {
    this._trafficTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeIdInput() {
    return this._trafficTypeId;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity = new CloudwrapperConfigurationLocationCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: CloudwrapperConfigurationLocationCapacity) {
    this._capacity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }
}

export class CloudwrapperConfigurationLocationList extends cdktf.ComplexList {
  public internalValue? : CloudwrapperConfigurationLocation[] | cdktf.IResolvable

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
  public get(index: number): CloudwrapperConfigurationLocationOutputReference {
    return new CloudwrapperConfigurationLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwrapperConfigurationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#delete CloudwrapperConfiguration#delete}
  */
  readonly delete?: string;
}

export function cloudwrapperConfigurationTimeoutsToTerraform(struct?: CloudwrapperConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cloudwrapperConfigurationTimeoutsToHclTerraform(struct?: CloudwrapperConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwrapperConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwrapperConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwrapperConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration akamai_cloudwrapper_configuration}
*/
export class CloudwrapperConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudwrapper_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwrapperConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwrapperConfiguration to import
  * @param importFromId The id of the existing CloudwrapperConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwrapperConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudwrapper_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudwrapper_configuration akamai_cloudwrapper_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwrapperConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwrapperConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudwrapper_configuration',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityAlertsThreshold = config.capacityAlertsThreshold;
    this._comments = config.comments;
    this._configName = config.configName;
    this._contractId = config.contractId;
    this._notificationEmails = config.notificationEmails;
    this._propertyIds = config.propertyIds;
    this._retainIdleObjects = config.retainIdleObjects;
    this._location.internalValue = config.location;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_alerts_threshold - computed: false, optional: true, required: false
  private _capacityAlertsThreshold?: number; 
  public get capacityAlertsThreshold() {
    return this.getNumberAttribute('capacity_alerts_threshold');
  }
  public set capacityAlertsThreshold(value: number) {
    this._capacityAlertsThreshold = value;
  }
  public resetCapacityAlertsThreshold() {
    this._capacityAlertsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAlertsThresholdInput() {
    return this._capacityAlertsThreshold;
  }

  // comments - computed: false, optional: false, required: true
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // config_name - computed: false, optional: false, required: true
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // notification_emails - computed: true, optional: true, required: false
  private _notificationEmails?: string[]; 
  public get notificationEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_emails'));
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  public resetNotificationEmails() {
    this._notificationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails;
  }

  // property_ids - computed: false, optional: false, required: true
  private _propertyIds?: string[]; 
  public get propertyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('property_ids'));
  }
  public set propertyIds(value: string[]) {
    this._propertyIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdsInput() {
    return this._propertyIds;
  }

  // retain_idle_objects - computed: true, optional: true, required: false
  private _retainIdleObjects?: boolean | cdktf.IResolvable; 
  public get retainIdleObjects() {
    return this.getBooleanAttribute('retain_idle_objects');
  }
  public set retainIdleObjects(value: boolean | cdktf.IResolvable) {
    this._retainIdleObjects = value;
  }
  public resetRetainIdleObjects() {
    this._retainIdleObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainIdleObjectsInput() {
    return this._retainIdleObjects;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // location - computed: false, optional: true, required: false
  private _location = new CloudwrapperConfigurationLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: CloudwrapperConfigurationLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudwrapperConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudwrapperConfigurationTimeouts) {
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
      capacity_alerts_threshold: cdktf.numberToTerraform(this._capacityAlertsThreshold),
      comments: cdktf.stringToTerraform(this._comments),
      config_name: cdktf.stringToTerraform(this._configName),
      contract_id: cdktf.stringToTerraform(this._contractId),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationEmails),
      property_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyIds),
      retain_idle_objects: cdktf.booleanToTerraform(this._retainIdleObjects),
      location: cdktf.listMapper(cloudwrapperConfigurationLocationToTerraform, true)(this._location.internalValue),
      timeouts: cloudwrapperConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_alerts_threshold: {
        value: cdktf.numberToHclTerraform(this._capacityAlertsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      property_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      retain_idle_objects: {
        value: cdktf.booleanToHclTerraform(this._retainIdleObjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.listMapperHcl(cloudwrapperConfigurationLocationToHclTerraform, true)(this._location.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwrapperConfigurationLocationList",
      },
      timeouts: {
        value: cloudwrapperConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudwrapperConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
