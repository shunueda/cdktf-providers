// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of **10-second measurement cycles** before alerting is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#alert_activation_duration OsServices#alert_activation_duration}
  */
  readonly alertActivationDuration?: number;
  /**
  * Toggle the switch in order to enable or disable alerting for this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#alerting OsServices#alerting}
  */
  readonly alerting: boolean | cdktf.IResolvable;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#enabled OsServices#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#id OsServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#insert_after OsServices#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Toggle the switch in order to enable or disable availability metric monitoring for this policy. Availability metrics produce custom metrics. Refer to [documentation](https://dt-url.net/vl03xzk) for consumption examples. Each monitored service consumes one custom metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#monitoring OsServices#monitoring}
  */
  readonly monitoring: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#name OsServices#name}
  */
  readonly name: string;
  /**
  * By default, Dynatrace does not alert if the service is not installed. Toggle the switch to enable or disable this feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#not_installed_alerting OsServices#not_installed_alerting}
  */
  readonly notInstalledAlerting?: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#scope OsServices#scope}
  */
  readonly scope?: string;
  /**
  * This string has to match a required format. See [OS services monitoring](https://dt-url.net/vl03xzk).
  * 
  * - `$eq(failed)` – Matches services that are in failed state.
  * 
  * Available logic operations:
  * - `$not($eq(active))` – Matches services with state different from active.
  * - `$or($eq(inactive),$eq(failed))` – Matches services that are either in inactive or failed state.
  * 
  * Use one of the following values as a parameter for this condition:
  * 
  * - `reloading`
  * - `activating`
  * - `deactivating`
  * - `failed`
  * - `inactive`
  * - `active`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#status_condition_linux OsServices#status_condition_linux}
  */
  readonly statusConditionLinux?: string;
  /**
  * This string has to match a required format. See [OS services monitoring](https://dt-url.net/vl03xzk).
  * 
  * - `$eq(paused)` – Matches services that are in paused state.
  * 
  * Available logic operations:
  * - `$not($eq(paused))` – Matches services that are in state different from paused.
  * - `$or($eq(paused),$eq(running))` – Matches services that are either in paused or running state.
  * 
  * Use one of the following values as a parameter for this condition:
  * 
  * - `running`
  * - `stopped`
  * - `start_pending`
  * - `stop_pending`
  * - `continue_pending`
  * - `pause_pending`
  * - `paused`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#status_condition_windows OsServices#status_condition_windows}
  */
  readonly statusConditionWindows?: string;
  /**
  * Possible Values: `LINUX`, `WINDOWS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#system OsServices#system}
  */
  readonly systemAttribute: string;
  /**
  * detection_conditions_linux block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#detection_conditions_linux OsServices#detection_conditions_linux}
  */
  readonly detectionConditionsLinux?: OsServicesDetectionConditionsLinux;
  /**
  * detection_conditions_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#detection_conditions_windows OsServices#detection_conditions_windows}
  */
  readonly detectionConditionsWindows?: OsServicesDetectionConditionsWindows;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#metadata OsServices#metadata}
  */
  readonly metadata?: OsServicesMetadata;
}
export interface OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataCondition {
  /**
  * When enabled, the condition requires a metadata key to exist and match the constraints; when disabled, the key is optional but must still match the constrains if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#key_must_exist OsServices#key_must_exist}
  */
  readonly keyMustExist?: boolean | cdktf.IResolvable;
  /**
  * This string has to match a required format.
  * 
  * - `$contains(production)` – Matches if `production` appears anywhere in the host metadata value.
  * - `$eq(production)` – Matches if `production` matches the host metadata value exactly.
  * - `$prefix(production)` – Matches if `production` matches the prefix of the host metadata value.
  * - `$suffix(production)` – Matches if `production` matches the suffix of the host metadata value.
  * 
  * Available logic operations:
  * - `$not($eq(production))` – Matches if the host metadata value is different from `production`.
  * - `$and($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` and ends with `main`.
  * - `$or($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` or ends with `main`.
  * 
  * Brackets **(** and **)** that are part of the matched property **must be escaped with a tilde (~)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#metadata_condition OsServices#metadata_condition}
  */
  readonly metadataCondition: string;
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#metadata_key OsServices#metadata_key}
  */
  readonly metadataKey: string;
}

export function osServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionToTerraform(struct?: OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionOutputReference | OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_must_exist: cdktf.booleanToTerraform(struct!.keyMustExist),
    metadata_condition: cdktf.stringToTerraform(struct!.metadataCondition),
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
  }
}


export function osServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionToHclTerraform(struct?: OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionOutputReference | OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_must_exist: {
      value: cdktf.booleanToHclTerraform(struct!.keyMustExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata_condition: {
      value: cdktf.stringToHclTerraform(struct!.metadataCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyMustExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyMustExist = this._keyMustExist;
    }
    if (this._metadataCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCondition = this._metadataCondition;
    }
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyMustExist = undefined;
      this._metadataCondition = undefined;
      this._metadataKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyMustExist = value.keyMustExist;
      this._metadataCondition = value.metadataCondition;
      this._metadataKey = value.metadataKey;
    }
  }

  // key_must_exist - computed: false, optional: true, required: false
  private _keyMustExist?: boolean | cdktf.IResolvable; 
  public get keyMustExist() {
    return this.getBooleanAttribute('key_must_exist');
  }
  public set keyMustExist(value: boolean | cdktf.IResolvable) {
    this._keyMustExist = value;
  }
  public resetKeyMustExist() {
    this._keyMustExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMustExistInput() {
    return this._keyMustExist;
  }

  // metadata_condition - computed: false, optional: false, required: true
  private _metadataCondition?: string; 
  public get metadataCondition() {
    return this.getStringAttribute('metadata_condition');
  }
  public set metadataCondition(value: string) {
    this._metadataCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConditionInput() {
    return this._metadataCondition;
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }
}
export interface OsServicesDetectionConditionsLinuxLinuxDetectionCondition {
  /**
  * This string has to match a required format. See [OS services monitoring](https://dt-url.net/vl03xzk).
  * 
  * - `$contains(ssh)` – Matches if `ssh` appears anywhere in the service's property value.
  * - `$eq(sshd)` – Matches if `sshd` matches the service's property value exactly.
  * - `$prefix(ss)` – Matches if `ss` matches the prefix of the service's property value.
  * - `$suffix(hd)` – Matches if `hd` matches the suffix of the service's property value.
  * 
  * Available logic operations:
  * - `$not($eq(sshd))` – Matches if the service's property value is different from `sshd`.
  * - `$and($prefix(ss),$suffix(hd))` – Matches if service's property value starts with `ss` and ends with `hd`.
  * - `$or($prefix(ss),$suffix(hd))` – Matches if service's property value starts with `ss` or ends with `hd`.
  * 
  * Brackets **(** and **)** that are part of the matched property **must be escaped with a tilde (~)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#condition OsServices#condition}
  */
  readonly condition?: string;
  /**
  * Possible Values: `ServiceName`, `StartupType`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#property OsServices#property}
  */
  readonly property?: string;
  /**
  * Possible Values: `RuleTypeHost`, `RuleTypeOsService`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#rule_type OsServices#rule_type}
  */
  readonly ruleType?: string;
  /**
  * This string has to match a required format. See [OS services monitoring](https://dt-url.net/vl03xzk).
  * 
  * - `$eq(enabled)` – Matches services with startup type equal to enabled.
  * 
  * Available logic operations:
  * - `$not($eq(enabled))` – Matches services with startup type different from enabled.
  * - `$or($eq(enabled),$eq(disabled))` - Matches services that are either enabled or disabled.
  * 
  * Use one of the following values as a parameter for this condition:
  * 
  * - `enabled`
  * - `enabled-runtime`
  * - `static`
  * - `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#startup_condition OsServices#startup_condition}
  */
  readonly startupCondition?: string;
  /**
  * host_metadata_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#host_metadata_condition OsServices#host_metadata_condition}
  */
  readonly hostMetadataCondition?: OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataCondition;
}

export function osServicesDetectionConditionsLinuxLinuxDetectionConditionToTerraform(struct?: OsServicesDetectionConditionsLinuxLinuxDetectionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    property: cdktf.stringToTerraform(struct!.property),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    startup_condition: cdktf.stringToTerraform(struct!.startupCondition),
    host_metadata_condition: osServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionToTerraform(struct!.hostMetadataCondition),
  }
}


export function osServicesDetectionConditionsLinuxLinuxDetectionConditionToHclTerraform(struct?: OsServicesDetectionConditionsLinuxLinuxDetectionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_condition: {
      value: cdktf.stringToHclTerraform(struct!.startupCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_metadata_condition: {
      value: osServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionToHclTerraform(struct!.hostMetadataCondition),
      isBlock: true,
      type: "list",
      storageClassType: "OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesDetectionConditionsLinuxLinuxDetectionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsServicesDetectionConditionsLinuxLinuxDetectionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._startupCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupCondition = this._startupCondition;
    }
    if (this._hostMetadataCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMetadataCondition = this._hostMetadataCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesDetectionConditionsLinuxLinuxDetectionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._property = undefined;
      this._ruleType = undefined;
      this._startupCondition = undefined;
      this._hostMetadataCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._property = value.property;
      this._ruleType = value.ruleType;
      this._startupCondition = value.startupCondition;
      this._hostMetadataCondition.internalValue = value.hostMetadataCondition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // startup_condition - computed: false, optional: true, required: false
  private _startupCondition?: string; 
  public get startupCondition() {
    return this.getStringAttribute('startup_condition');
  }
  public set startupCondition(value: string) {
    this._startupCondition = value;
  }
  public resetStartupCondition() {
    this._startupCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupConditionInput() {
    return this._startupCondition;
  }

  // host_metadata_condition - computed: false, optional: true, required: false
  private _hostMetadataCondition = new OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataConditionOutputReference(this, "host_metadata_condition");
  public get hostMetadataCondition() {
    return this._hostMetadataCondition;
  }
  public putHostMetadataCondition(value: OsServicesDetectionConditionsLinuxLinuxDetectionConditionHostMetadataCondition) {
    this._hostMetadataCondition.internalValue = value;
  }
  public resetHostMetadataCondition() {
    this._hostMetadataCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMetadataConditionInput() {
    return this._hostMetadataCondition.internalValue;
  }
}

export class OsServicesDetectionConditionsLinuxLinuxDetectionConditionList extends cdktf.ComplexList {
  public internalValue? : OsServicesDetectionConditionsLinuxLinuxDetectionCondition[] | cdktf.IResolvable

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
  public get(index: number): OsServicesDetectionConditionsLinuxLinuxDetectionConditionOutputReference {
    return new OsServicesDetectionConditionsLinuxLinuxDetectionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsServicesDetectionConditionsLinux {
  /**
  * linux_detection_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#linux_detection_condition OsServices#linux_detection_condition}
  */
  readonly linuxDetectionCondition: OsServicesDetectionConditionsLinuxLinuxDetectionCondition[] | cdktf.IResolvable;
}

export function osServicesDetectionConditionsLinuxToTerraform(struct?: OsServicesDetectionConditionsLinuxOutputReference | OsServicesDetectionConditionsLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux_detection_condition: cdktf.listMapper(osServicesDetectionConditionsLinuxLinuxDetectionConditionToTerraform, true)(struct!.linuxDetectionCondition),
  }
}


export function osServicesDetectionConditionsLinuxToHclTerraform(struct?: OsServicesDetectionConditionsLinuxOutputReference | OsServicesDetectionConditionsLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linux_detection_condition: {
      value: cdktf.listMapperHcl(osServicesDetectionConditionsLinuxLinuxDetectionConditionToHclTerraform, true)(struct!.linuxDetectionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "OsServicesDetectionConditionsLinuxLinuxDetectionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesDetectionConditionsLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsServicesDetectionConditionsLinux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linuxDetectionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxDetectionCondition = this._linuxDetectionCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesDetectionConditionsLinux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linuxDetectionCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linuxDetectionCondition.internalValue = value.linuxDetectionCondition;
    }
  }

  // linux_detection_condition - computed: false, optional: false, required: true
  private _linuxDetectionCondition = new OsServicesDetectionConditionsLinuxLinuxDetectionConditionList(this, "linux_detection_condition", false);
  public get linuxDetectionCondition() {
    return this._linuxDetectionCondition;
  }
  public putLinuxDetectionCondition(value: OsServicesDetectionConditionsLinuxLinuxDetectionCondition[] | cdktf.IResolvable) {
    this._linuxDetectionCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxDetectionConditionInput() {
    return this._linuxDetectionCondition.internalValue;
  }
}
export interface OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataCondition {
  /**
  * When enabled, the condition requires a metadata key to exist and match the constraints; when disabled, the key is optional but must still match the constrains if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#key_must_exist OsServices#key_must_exist}
  */
  readonly keyMustExist?: boolean | cdktf.IResolvable;
  /**
  * This string has to match a required format.
  * 
  * - `$contains(production)` – Matches if `production` appears anywhere in the host metadata value.
  * - `$eq(production)` – Matches if `production` matches the host metadata value exactly.
  * - `$prefix(production)` – Matches if `production` matches the prefix of the host metadata value.
  * - `$suffix(production)` – Matches if `production` matches the suffix of the host metadata value.
  * 
  * Available logic operations:
  * - `$not($eq(production))` – Matches if the host metadata value is different from `production`.
  * - `$and($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` and ends with `main`.
  * - `$or($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` or ends with `main`.
  * 
  * Brackets **(** and **)** that are part of the matched property **must be escaped with a tilde (~)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#metadata_condition OsServices#metadata_condition}
  */
  readonly metadataCondition: string;
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#metadata_key OsServices#metadata_key}
  */
  readonly metadataKey: string;
}

export function osServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionToTerraform(struct?: OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionOutputReference | OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_must_exist: cdktf.booleanToTerraform(struct!.keyMustExist),
    metadata_condition: cdktf.stringToTerraform(struct!.metadataCondition),
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
  }
}


export function osServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionToHclTerraform(struct?: OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionOutputReference | OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_must_exist: {
      value: cdktf.booleanToHclTerraform(struct!.keyMustExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata_condition: {
      value: cdktf.stringToHclTerraform(struct!.metadataCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyMustExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyMustExist = this._keyMustExist;
    }
    if (this._metadataCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCondition = this._metadataCondition;
    }
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyMustExist = undefined;
      this._metadataCondition = undefined;
      this._metadataKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyMustExist = value.keyMustExist;
      this._metadataCondition = value.metadataCondition;
      this._metadataKey = value.metadataKey;
    }
  }

  // key_must_exist - computed: false, optional: true, required: false
  private _keyMustExist?: boolean | cdktf.IResolvable; 
  public get keyMustExist() {
    return this.getBooleanAttribute('key_must_exist');
  }
  public set keyMustExist(value: boolean | cdktf.IResolvable) {
    this._keyMustExist = value;
  }
  public resetKeyMustExist() {
    this._keyMustExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMustExistInput() {
    return this._keyMustExist;
  }

  // metadata_condition - computed: false, optional: false, required: true
  private _metadataCondition?: string; 
  public get metadataCondition() {
    return this.getStringAttribute('metadata_condition');
  }
  public set metadataCondition(value: string) {
    this._metadataCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConditionInput() {
    return this._metadataCondition;
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }
}
export interface OsServicesDetectionConditionsWindowsDetectionConditionsWindow {
  /**
  * This string has to match a required format. See [OS services monitoring](https://dt-url.net/vl03xzk).
  * 
  * - `$contains(ssh)` – Matches if `ssh` appears anywhere in the service's property value.
  * - `$eq(sshd)` – Matches if `sshd` matches the service's property value exactly.
  * - `$prefix(ss)` – Matches if `ss` matches the prefix of the service's property value.
  * - `$suffix(hd)` – Matches if `hd` matches the suffix of the service's property value.
  * 
  * Available logic operations:
  * - `$not($eq(sshd))` – Matches if the service's property value is different from `sshd`.
  * - `$and($prefix(ss),$suffix(hd))` – Matches if service's property value starts with `ss` and ends with `hd`.
  * - `$or($prefix(ss),$suffix(hd))` – Matches if service's property value starts with `ss` or ends with `hd`.
  * 
  * Brackets **(** and **)** that are part of the matched property **must be escaped with a tilde (~)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#condition OsServices#condition}
  */
  readonly condition?: string;
  /**
  * Possible Values: `DisplayName`, `Manufacturer`, `Path`, `ServiceName`, `StartupType`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#property OsServices#property}
  */
  readonly property?: string;
  /**
  * Possible Values: `RuleTypeHost`, `RuleTypeOsService`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#rule_type OsServices#rule_type}
  */
  readonly ruleType?: string;
  /**
  * This string has to match a required format. See [OS services monitoring](https://dt-url.net/vl03xzk).
  * 
  * - `$eq(manual)` – Matches services that are started manually.
  * 
  * Available logic operations:
  * - `$not($eq(auto))` – Matches services with startup type different from Automatic.
  * - `$or($eq(auto),$eq(manual))` – Matches if service's startup type is either Automatic or Manual.
  * 
  * Use one of the following values as a parameter for this condition:
  * 
  * - `manual` for Manual
  * - `manual_trigger` for Manual (Trigger Start)
  * - `auto` for Automatic
  * - `auto_delay` for Automatic (Delayed Start)
  * - `auto_trigger` for Automatic (Trigger Start)
  * - `auto_delay_trigger` for Automatic (Delayed Start, Trigger Start)
  * - `disabled` for Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#startup_condition OsServices#startup_condition}
  */
  readonly startupCondition?: string;
  /**
  * host_metadata_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#host_metadata_condition OsServices#host_metadata_condition}
  */
  readonly hostMetadataCondition?: OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataCondition;
}

export function osServicesDetectionConditionsWindowsDetectionConditionsWindowToTerraform(struct?: OsServicesDetectionConditionsWindowsDetectionConditionsWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    property: cdktf.stringToTerraform(struct!.property),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    startup_condition: cdktf.stringToTerraform(struct!.startupCondition),
    host_metadata_condition: osServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionToTerraform(struct!.hostMetadataCondition),
  }
}


export function osServicesDetectionConditionsWindowsDetectionConditionsWindowToHclTerraform(struct?: OsServicesDetectionConditionsWindowsDetectionConditionsWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_condition: {
      value: cdktf.stringToHclTerraform(struct!.startupCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_metadata_condition: {
      value: osServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionToHclTerraform(struct!.hostMetadataCondition),
      isBlock: true,
      type: "list",
      storageClassType: "OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesDetectionConditionsWindowsDetectionConditionsWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsServicesDetectionConditionsWindowsDetectionConditionsWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._startupCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupCondition = this._startupCondition;
    }
    if (this._hostMetadataCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMetadataCondition = this._hostMetadataCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesDetectionConditionsWindowsDetectionConditionsWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._property = undefined;
      this._ruleType = undefined;
      this._startupCondition = undefined;
      this._hostMetadataCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._property = value.property;
      this._ruleType = value.ruleType;
      this._startupCondition = value.startupCondition;
      this._hostMetadataCondition.internalValue = value.hostMetadataCondition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // startup_condition - computed: false, optional: true, required: false
  private _startupCondition?: string; 
  public get startupCondition() {
    return this.getStringAttribute('startup_condition');
  }
  public set startupCondition(value: string) {
    this._startupCondition = value;
  }
  public resetStartupCondition() {
    this._startupCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupConditionInput() {
    return this._startupCondition;
  }

  // host_metadata_condition - computed: false, optional: true, required: false
  private _hostMetadataCondition = new OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataConditionOutputReference(this, "host_metadata_condition");
  public get hostMetadataCondition() {
    return this._hostMetadataCondition;
  }
  public putHostMetadataCondition(value: OsServicesDetectionConditionsWindowsDetectionConditionsWindowHostMetadataCondition) {
    this._hostMetadataCondition.internalValue = value;
  }
  public resetHostMetadataCondition() {
    this._hostMetadataCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMetadataConditionInput() {
    return this._hostMetadataCondition.internalValue;
  }
}

export class OsServicesDetectionConditionsWindowsDetectionConditionsWindowList extends cdktf.ComplexList {
  public internalValue? : OsServicesDetectionConditionsWindowsDetectionConditionsWindow[] | cdktf.IResolvable

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
  public get(index: number): OsServicesDetectionConditionsWindowsDetectionConditionsWindowOutputReference {
    return new OsServicesDetectionConditionsWindowsDetectionConditionsWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsServicesDetectionConditionsWindows {
  /**
  * detection_conditions_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#detection_conditions_window OsServices#detection_conditions_window}
  */
  readonly detectionConditionsWindow: OsServicesDetectionConditionsWindowsDetectionConditionsWindow[] | cdktf.IResolvable;
}

export function osServicesDetectionConditionsWindowsToTerraform(struct?: OsServicesDetectionConditionsWindowsOutputReference | OsServicesDetectionConditionsWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_conditions_window: cdktf.listMapper(osServicesDetectionConditionsWindowsDetectionConditionsWindowToTerraform, true)(struct!.detectionConditionsWindow),
  }
}


export function osServicesDetectionConditionsWindowsToHclTerraform(struct?: OsServicesDetectionConditionsWindowsOutputReference | OsServicesDetectionConditionsWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_conditions_window: {
      value: cdktf.listMapperHcl(osServicesDetectionConditionsWindowsDetectionConditionsWindowToHclTerraform, true)(struct!.detectionConditionsWindow),
      isBlock: true,
      type: "list",
      storageClassType: "OsServicesDetectionConditionsWindowsDetectionConditionsWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesDetectionConditionsWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsServicesDetectionConditionsWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionConditionsWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionConditionsWindow = this._detectionConditionsWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesDetectionConditionsWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionConditionsWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionConditionsWindow.internalValue = value.detectionConditionsWindow;
    }
  }

  // detection_conditions_window - computed: false, optional: false, required: true
  private _detectionConditionsWindow = new OsServicesDetectionConditionsWindowsDetectionConditionsWindowList(this, "detection_conditions_window", false);
  public get detectionConditionsWindow() {
    return this._detectionConditionsWindow;
  }
  public putDetectionConditionsWindow(value: OsServicesDetectionConditionsWindowsDetectionConditionsWindow[] | cdktf.IResolvable) {
    this._detectionConditionsWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionConditionsWindowInput() {
    return this._detectionConditionsWindow.internalValue;
  }
}
export interface OsServicesMetadataItem {
  /**
  * Type 'dt.' for key hints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#metadata_key OsServices#metadata_key}
  */
  readonly metadataKey: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#metadata_value OsServices#metadata_value}
  */
  readonly metadataValue: string;
}

export function osServicesMetadataItemToTerraform(struct?: OsServicesMetadataItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
    metadata_value: cdktf.stringToTerraform(struct!.metadataValue),
  }
}


export function osServicesMetadataItemToHclTerraform(struct?: OsServicesMetadataItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_value: {
      value: cdktf.stringToHclTerraform(struct!.metadataValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesMetadataItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsServicesMetadataItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._metadataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataValue = this._metadataValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesMetadataItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataKey = undefined;
      this._metadataValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataKey = value.metadataKey;
      this._metadataValue = value.metadataValue;
    }
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }

  // metadata_value - computed: false, optional: false, required: true
  private _metadataValue?: string; 
  public get metadataValue() {
    return this.getStringAttribute('metadata_value');
  }
  public set metadataValue(value: string) {
    this._metadataValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataValueInput() {
    return this._metadataValue;
  }
}

export class OsServicesMetadataItemList extends cdktf.ComplexList {
  public internalValue? : OsServicesMetadataItem[] | cdktf.IResolvable

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
  public get(index: number): OsServicesMetadataItemOutputReference {
    return new OsServicesMetadataItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsServicesMetadata {
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#item OsServices#item}
  */
  readonly item: OsServicesMetadataItem[] | cdktf.IResolvable;
}

export function osServicesMetadataToTerraform(struct?: OsServicesMetadataOutputReference | OsServicesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    item: cdktf.listMapper(osServicesMetadataItemToTerraform, true)(struct!.item),
  }
}


export function osServicesMetadataToHclTerraform(struct?: OsServicesMetadataOutputReference | OsServicesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    item: {
      value: cdktf.listMapperHcl(osServicesMetadataItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "set",
      storageClassType: "OsServicesMetadataItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsServicesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsServicesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsServicesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._item.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._item.internalValue = value.item;
    }
  }

  // item - computed: false, optional: false, required: true
  private _item = new OsServicesMetadataItemList(this, "item", true);
  public get item() {
    return this._item;
  }
  public putItem(value: OsServicesMetadataItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services dynatrace_os_services}
*/
export class OsServices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_os_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsServices to import
  * @param importFromId The id of the existing OsServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_os_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/os_services dynatrace_os_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsServicesConfig
  */
  public constructor(scope: Construct, id: string, config: OsServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_os_services',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertActivationDuration = config.alertActivationDuration;
    this._alerting = config.alerting;
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._monitoring = config.monitoring;
    this._name = config.name;
    this._notInstalledAlerting = config.notInstalledAlerting;
    this._scope = config.scope;
    this._statusConditionLinux = config.statusConditionLinux;
    this._statusConditionWindows = config.statusConditionWindows;
    this._system = config.systemAttribute;
    this._detectionConditionsLinux.internalValue = config.detectionConditionsLinux;
    this._detectionConditionsWindows.internalValue = config.detectionConditionsWindows;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_activation_duration - computed: false, optional: true, required: false
  private _alertActivationDuration?: number; 
  public get alertActivationDuration() {
    return this.getNumberAttribute('alert_activation_duration');
  }
  public set alertActivationDuration(value: number) {
    this._alertActivationDuration = value;
  }
  public resetAlertActivationDuration() {
    this._alertActivationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertActivationDurationInput() {
    return this._alertActivationDuration;
  }

  // alerting - computed: false, optional: false, required: true
  private _alerting?: boolean | cdktf.IResolvable; 
  public get alerting() {
    return this.getBooleanAttribute('alerting');
  }
  public set alerting(value: boolean | cdktf.IResolvable) {
    this._alerting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingInput() {
    return this._alerting;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // monitoring - computed: false, optional: false, required: true
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
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

  // not_installed_alerting - computed: false, optional: true, required: false
  private _notInstalledAlerting?: boolean | cdktf.IResolvable; 
  public get notInstalledAlerting() {
    return this.getBooleanAttribute('not_installed_alerting');
  }
  public set notInstalledAlerting(value: boolean | cdktf.IResolvable) {
    this._notInstalledAlerting = value;
  }
  public resetNotInstalledAlerting() {
    this._notInstalledAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInstalledAlertingInput() {
    return this._notInstalledAlerting;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // status_condition_linux - computed: false, optional: true, required: false
  private _statusConditionLinux?: string; 
  public get statusConditionLinux() {
    return this.getStringAttribute('status_condition_linux');
  }
  public set statusConditionLinux(value: string) {
    this._statusConditionLinux = value;
  }
  public resetStatusConditionLinux() {
    this._statusConditionLinux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusConditionLinuxInput() {
    return this._statusConditionLinux;
  }

  // status_condition_windows - computed: false, optional: true, required: false
  private _statusConditionWindows?: string; 
  public get statusConditionWindows() {
    return this.getStringAttribute('status_condition_windows');
  }
  public set statusConditionWindows(value: string) {
    this._statusConditionWindows = value;
  }
  public resetStatusConditionWindows() {
    this._statusConditionWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusConditionWindowsInput() {
    return this._statusConditionWindows;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // detection_conditions_linux - computed: false, optional: true, required: false
  private _detectionConditionsLinux = new OsServicesDetectionConditionsLinuxOutputReference(this, "detection_conditions_linux");
  public get detectionConditionsLinux() {
    return this._detectionConditionsLinux;
  }
  public putDetectionConditionsLinux(value: OsServicesDetectionConditionsLinux) {
    this._detectionConditionsLinux.internalValue = value;
  }
  public resetDetectionConditionsLinux() {
    this._detectionConditionsLinux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionConditionsLinuxInput() {
    return this._detectionConditionsLinux.internalValue;
  }

  // detection_conditions_windows - computed: false, optional: true, required: false
  private _detectionConditionsWindows = new OsServicesDetectionConditionsWindowsOutputReference(this, "detection_conditions_windows");
  public get detectionConditionsWindows() {
    return this._detectionConditionsWindows;
  }
  public putDetectionConditionsWindows(value: OsServicesDetectionConditionsWindows) {
    this._detectionConditionsWindows.internalValue = value;
  }
  public resetDetectionConditionsWindows() {
    this._detectionConditionsWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionConditionsWindowsInput() {
    return this._detectionConditionsWindows.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new OsServicesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: OsServicesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_activation_duration: cdktf.numberToTerraform(this._alertActivationDuration),
      alerting: cdktf.booleanToTerraform(this._alerting),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      not_installed_alerting: cdktf.booleanToTerraform(this._notInstalledAlerting),
      scope: cdktf.stringToTerraform(this._scope),
      status_condition_linux: cdktf.stringToTerraform(this._statusConditionLinux),
      status_condition_windows: cdktf.stringToTerraform(this._statusConditionWindows),
      system: cdktf.stringToTerraform(this._system),
      detection_conditions_linux: osServicesDetectionConditionsLinuxToTerraform(this._detectionConditionsLinux.internalValue),
      detection_conditions_windows: osServicesDetectionConditionsWindowsToTerraform(this._detectionConditionsWindows.internalValue),
      metadata: osServicesMetadataToTerraform(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_activation_duration: {
        value: cdktf.numberToHclTerraform(this._alertActivationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alerting: {
        value: cdktf.booleanToHclTerraform(this._alerting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
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
      not_installed_alerting: {
        value: cdktf.booleanToHclTerraform(this._notInstalledAlerting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_condition_linux: {
        value: cdktf.stringToHclTerraform(this._statusConditionLinux),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_condition_windows: {
        value: cdktf.stringToHclTerraform(this._statusConditionWindows),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.stringToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detection_conditions_linux: {
        value: osServicesDetectionConditionsLinuxToHclTerraform(this._detectionConditionsLinux.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsServicesDetectionConditionsLinuxList",
      },
      detection_conditions_windows: {
        value: osServicesDetectionConditionsWindowsToHclTerraform(this._detectionConditionsWindows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsServicesDetectionConditionsWindowsList",
      },
      metadata: {
        value: osServicesMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsServicesMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
