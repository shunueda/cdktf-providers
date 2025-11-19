// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementZoneV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#description ManagementZoneV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#id ManagementZoneV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of this setting when referred to by the Config REST API V1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#legacy_id ManagementZoneV2#legacy_id}
  */
  readonly legacyId?: string;
  /**
  * **Be careful when renaming** - if there are policies that are referencing this Management zone, they will need to be adapted to the new name!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#name ManagementZoneV2#name}
  */
  readonly name: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#rules ManagementZoneV2#rules}
  */
  readonly rules?: ManagementZoneV2Rules;
}
export interface ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition {
  /**
  * Case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#case_sensitive ManagementZoneV2#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Dynamic key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#dynamic_key ManagementZoneV2#dynamic_key}
  */
  readonly dynamicKey?: string;
  /**
  * Key source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#dynamic_key_source ManagementZoneV2#dynamic_key_source}
  */
  readonly dynamicKeySource?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#entity_id ManagementZoneV2#entity_id}
  */
  readonly entityId?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#enum_value ManagementZoneV2#enum_value}
  */
  readonly enumValue?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#integer_value ManagementZoneV2#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Possible Values: `APPMON_SERVER_NAME`, `APPMON_SYSTEM_PROFILE_NAME`, `AWS_ACCOUNT_ID`, `AWS_ACCOUNT_NAME`, `AWS_APPLICATION_LOAD_BALANCER_NAME`, `AWS_APPLICATION_LOAD_BALANCER_TAGS`, `AWS_AUTO_SCALING_GROUP_NAME`, `AWS_AUTO_SCALING_GROUP_TAGS`, `AWS_AVAILABILITY_ZONE_NAME`, `AWS_CLASSIC_LOAD_BALANCER_FRONTEND_PORTS`, `AWS_CLASSIC_LOAD_BALANCER_NAME`, `AWS_CLASSIC_LOAD_BALANCER_TAGS`, `AWS_NETWORK_LOAD_BALANCER_NAME`, `AWS_NETWORK_LOAD_BALANCER_TAGS`, `AWS_RELATIONAL_DATABASE_SERVICE_DB_NAME`, `AWS_RELATIONAL_DATABASE_SERVICE_ENDPOINT`, `AWS_RELATIONAL_DATABASE_SERVICE_ENGINE`, `AWS_RELATIONAL_DATABASE_SERVICE_INSTANCE_CLASS`, `AWS_RELATIONAL_DATABASE_SERVICE_NAME`, `AWS_RELATIONAL_DATABASE_SERVICE_PORT`, `AWS_RELATIONAL_DATABASE_SERVICE_TAGS`, `AZURE_ENTITY_NAME`, `AZURE_ENTITY_TAGS`, `AZURE_MGMT_GROUP_NAME`, `AZURE_MGMT_GROUP_UUID`, `AZURE_REGION_NAME`, `AZURE_SCALE_SET_NAME`, `AZURE_SUBSCRIPTION_NAME`, `AZURE_SUBSCRIPTION_UUID`, `AZURE_TENANT_NAME`, `AZURE_TENANT_UUID`, `AZURE_VM_NAME`, `BROWSER_MONITOR_NAME`, `BROWSER_MONITOR_TAGS`, `CLOUD_APPLICATION_LABELS`, `CLOUD_APPLICATION_NAME`, `CLOUD_APPLICATION_NAMESPACE_LABELS`, `CLOUD_APPLICATION_NAMESPACE_NAME`, `CLOUD_FOUNDRY_FOUNDATION_NAME`, `CLOUD_FOUNDRY_ORG_NAME`, `CUSTOM_APPLICATION_NAME`, `CUSTOM_APPLICATION_PLATFORM`, `CUSTOM_APPLICATION_TAGS`, `CUSTOM_APPLICATION_TYPE`, `CUSTOM_DEVICE_DNS_ADDRESS`, `CUSTOM_DEVICE_GROUP_NAME`, `CUSTOM_DEVICE_GROUP_TAGS`, `CUSTOM_DEVICE_IP_ADDRESS`, `CUSTOM_DEVICE_METADATA`, `CUSTOM_DEVICE_NAME`, `CUSTOM_DEVICE_PORT`, `CUSTOM_DEVICE_TAGS`, `CUSTOM_DEVICE_TECHNOLOGY`, `DATA_CENTER_SERVICE_DECODER_TYPE`, `DATA_CENTER_SERVICE_IP_ADDRESS`, `DATA_CENTER_SERVICE_METADATA`, `DATA_CENTER_SERVICE_NAME`, `DATA_CENTER_SERVICE_PORT`, `DATA_CENTER_SERVICE_TAGS`, `DOCKER_CONTAINER_NAME`, `DOCKER_FULL_IMAGE_NAME`, `DOCKER_IMAGE_VERSION`, `EC2_INSTANCE_AMI_ID`, `EC2_INSTANCE_AWS_INSTANCE_TYPE`, `EC2_INSTANCE_AWS_SECURITY_GROUP`, `EC2_INSTANCE_BEANSTALK_ENV_NAME`, `EC2_INSTANCE_ID`, `EC2_INSTANCE_NAME`, `EC2_INSTANCE_PRIVATE_HOST_NAME`, `EC2_INSTANCE_PUBLIC_HOST_NAME`, `EC2_INSTANCE_TAGS`, `ENTERPRISE_APPLICATION_DECODER_TYPE`, `ENTERPRISE_APPLICATION_IP_ADDRESS`, `ENTERPRISE_APPLICATION_METADATA`, `ENTERPRISE_APPLICATION_NAME`, `ENTERPRISE_APPLICATION_PORT`, `ENTERPRISE_APPLICATION_TAGS`, `ESXI_HOST_CLUSTER_NAME`, `ESXI_HOST_HARDWARE_MODEL`, `ESXI_HOST_HARDWARE_VENDOR`, `ESXI_HOST_NAME`, `ESXI_HOST_PRODUCT_NAME`, `ESXI_HOST_PRODUCT_VERSION`, `ESXI_HOST_TAGS`, `EXTERNAL_MONITOR_ENGINE_DESCRIPTION`, `EXTERNAL_MONITOR_ENGINE_NAME`, `EXTERNAL_MONITOR_ENGINE_TYPE`, `EXTERNAL_MONITOR_NAME`, `EXTERNAL_MONITOR_TAGS`, `GEOLOCATION_SITE_NAME`, `GOOGLE_CLOUD_PLATFORM_ZONE_NAME`, `GOOGLE_COMPUTE_INSTANCE_ID`, `GOOGLE_COMPUTE_INSTANCE_MACHINE_TYPE`, `GOOGLE_COMPUTE_INSTANCE_NAME`, `GOOGLE_COMPUTE_INSTANCE_PROJECT`, `GOOGLE_COMPUTE_INSTANCE_PROJECT_ID`, `GOOGLE_COMPUTE_INSTANCE_PUBLIC_IP_ADDRESSES`, `HOST_AIX_LOGICAL_CPU_COUNT`, `HOST_AIX_SIMULTANEOUS_THREADS`, `HOST_AIX_VIRTUAL_CPU_COUNT`, `HOST_ARCHITECTURE`, `HOST_AWS_NAME_TAG`, `HOST_AZURE_COMPUTE_MODE`, `HOST_AZURE_SKU`, `HOST_AZURE_WEB_APPLICATION_HOST_NAMES`, `HOST_AZURE_WEB_APPLICATION_SITE_NAMES`, `HOST_BITNESS`, `HOST_BOSH_AVAILABILITY_ZONE`, `HOST_BOSH_DEPLOYMENT_ID`, `HOST_BOSH_INSTANCE_ID`, `HOST_BOSH_INSTANCE_NAME`, `HOST_BOSH_NAME`, `HOST_BOSH_STEMCELL_VERSION`, `HOST_CLOUD_TYPE`, `HOST_CPU_CORES`, `HOST_CUSTOM_METADATA`, `HOST_DETECTED_NAME`, `HOST_GROUP_ID`, `HOST_GROUP_NAME`, `HOST_HYPERVISOR_TYPE`, `HOST_IP_ADDRESS`, `HOST_KUBERNETES_LABELS`, `HOST_LOGICAL_CPU_CORES`, `HOST_NAME`, `HOST_ONEAGENT_CUSTOM_HOST_NAME`, `HOST_OS_TYPE`, `HOST_OS_VERSION`, `HOST_PAAS_MEMORY_LIMIT`, `HOST_PAAS_TYPE`, `HOST_TAGS`, `HOST_TECHNOLOGY`, `HTTP_MONITOR_NAME`, `HTTP_MONITOR_TAGS`, `KUBERNETES_CLUSTER_NAME`, `KUBERNETES_NODE_NAME`, `KUBERNETES_SERVICE_NAME`, `MOBILE_APPLICATION_NAME`, `MOBILE_APPLICATION_PLATFORM`, `MOBILE_APPLICATION_TAGS`, `NAME_OF_COMPUTE_NODE`, `OPENSTACK_ACCOUNT_NAME`, `OPENSTACK_ACCOUNT_PROJECT_NAME`, `OPENSTACK_AVAILABILITY_ZONE_NAME`, `OPENSTACK_PROJECT_NAME`, `OPENSTACK_REGION_NAME`, `OPENSTACK_VM_INSTANCE_TYPE`, `OPENSTACK_VM_NAME`, `OPENSTACK_VM_SECURITY_GROUP`, `PROCESS_GROUP_AZURE_HOST_NAME`, `PROCESS_GROUP_AZURE_SITE_NAME`, `PROCESS_GROUP_CUSTOM_METADATA`, `PROCESS_GROUP_DETECTED_NAME`, `PROCESS_GROUP_ID`, `PROCESS_GROUP_LISTEN_PORT`, `PROCESS_GROUP_NAME`, `PROCESS_GROUP_PREDEFINED_METADATA`, `PROCESS_GROUP_TAGS`, `PROCESS_GROUP_TECHNOLOGY`, `PROCESS_GROUP_TECHNOLOGY_EDITION`, `PROCESS_GROUP_TECHNOLOGY_VERSION`, `QUEUE_NAME`, `QUEUE_TECHNOLOGY`, `QUEUE_VENDOR`, `SERVICE_AKKA_ACTOR_SYSTEM`, `SERVICE_CTG_SERVICE_NAME`, `SERVICE_DATABASE_HOST_NAME`, `SERVICE_DATABASE_NAME`, `SERVICE_DATABASE_TOPOLOGY`, `SERVICE_DATABASE_VENDOR`, `SERVICE_DETECTED_NAME`, `SERVICE_ESB_APPLICATION_NAME`, `SERVICE_IBM_CTG_GATEWAY_URL`, `SERVICE_MESSAGING_LISTENER_CLASS_NAME`, `SERVICE_NAME`, `SERVICE_PORT`, `SERVICE_PUBLIC_DOMAIN_NAME`, `SERVICE_REMOTE_ENDPOINT`, `SERVICE_REMOTE_SERVICE_NAME`, `SERVICE_TAGS`, `SERVICE_TECHNOLOGY`, `SERVICE_TECHNOLOGY_EDITION`, `SERVICE_TECHNOLOGY_VERSION`, `SERVICE_TOPOLOGY`, `SERVICE_TYPE`, `SERVICE_WEB_APPLICATION_ID`, `SERVICE_WEB_CONTEXT_ROOT`, `SERVICE_WEB_SERVER_ENDPOINT`, `SERVICE_WEB_SERVER_NAME`, `SERVICE_WEB_SERVICE_NAME`, `SERVICE_WEB_SERVICE_NAMESPACE`, `VMWARE_DATACENTER_NAME`, `VMWARE_VM_NAME`, `WEB_APPLICATION_NAME`, `WEB_APPLICATION_NAME_PATTERN`, `WEB_APPLICATION_TAGS`, `WEB_APPLICATION_TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#key ManagementZoneV2#key}
  */
  readonly key: string;
  /**
  * Possible Values: `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH`, `EQUALS`, `EXISTS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `IS_IP_IN_RANGE`, `LOWER_THAN`, `LOWER_THAN_OR_EQUAL`, `NOT_BEGINS_WITH`, `NOT_CONTAINS`, `NOT_ENDS_WITH`, `NOT_EQUALS`, `NOT_EXISTS`, `NOT_GREATER_THAN`, `NOT_GREATER_THAN_OR_EQUAL`, `NOT_IS_IP_IN_RANGE`, `NOT_LOWER_THAN`, `NOT_LOWER_THAN_OR_EQUAL`, `NOT_REGEX_MATCHES`, `NOT_TAG_KEY_EQUALS`, `REGEX_MATCHES`, `TAG_KEY_EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#operator ManagementZoneV2#operator}
  */
  readonly operator: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#string_value ManagementZoneV2#string_value}
  */
  readonly stringValue?: string;
  /**
  * Format: `[CONTEXT]tagKey:tagValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#tag ManagementZoneV2#tag}
  */
  readonly tag?: string;
}

export function managementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionToTerraform(struct?: ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    dynamic_key_source: cdktf.stringToTerraform(struct!.dynamicKeySource),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    enum_value: cdktf.stringToTerraform(struct!.enumValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function managementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionToHclTerraform(struct?: ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key_source: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKeySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum_value: {
      value: cdktf.stringToHclTerraform(struct!.enumValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._dynamicKeySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKeySource = this._dynamicKeySource;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._enumValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumValue = this._enumValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._dynamicKey = undefined;
      this._dynamicKeySource = undefined;
      this._entityId = undefined;
      this._enumValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._stringValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._dynamicKey = value.dynamicKey;
      this._dynamicKeySource = value.dynamicKeySource;
      this._entityId = value.entityId;
      this._enumValue = value.enumValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._operator = value.operator;
      this._stringValue = value.stringValue;
      this._tag = value.tag;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // dynamic_key - computed: false, optional: true, required: false
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  public resetDynamicKey() {
    this._dynamicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // dynamic_key_source - computed: false, optional: true, required: false
  private _dynamicKeySource?: string; 
  public get dynamicKeySource() {
    return this.getStringAttribute('dynamic_key_source');
  }
  public set dynamicKeySource(value: string) {
    this._dynamicKeySource = value;
  }
  public resetDynamicKeySource() {
    this._dynamicKeySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeySourceInput() {
    return this._dynamicKeySource;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // enum_value - computed: false, optional: true, required: false
  private _enumValue?: string; 
  public get enumValue() {
    return this.getStringAttribute('enum_value');
  }
  public set enumValue(value: string) {
    this._enumValue = value;
  }
  public resetEnumValue() {
    this._enumValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumValueInput() {
    return this._enumValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionOutputReference {
    return new ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneV2RulesRuleAttributeRuleAttributeConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#condition ManagementZoneV2#condition}
  */
  readonly condition: ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition[] | cdktf.IResolvable;
}

export function managementZoneV2RulesRuleAttributeRuleAttributeConditionsToTerraform(struct?: ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsOutputReference | ManagementZoneV2RulesRuleAttributeRuleAttributeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(managementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function managementZoneV2RulesRuleAttributeRuleAttributeConditionsToHclTerraform(struct?: ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsOutputReference | ManagementZoneV2RulesRuleAttributeRuleAttributeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(managementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneV2RulesRuleAttributeRuleAttributeConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2RulesRuleAttributeRuleAttributeConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface ManagementZoneV2RulesRuleAttributeRule {
  /**
  * Apply to process groups connected to matching Azure entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#azure_to_pgpropagation ManagementZoneV2#azure_to_pgpropagation}
  */
  readonly azureToPgpropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to services provided by matching Azure entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#azure_to_service_propagation ManagementZoneV2#azure_to_service_propagation}
  */
  readonly azureToServicePropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to custom devices in a custom device group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#custom_device_group_to_custom_device_propagation ManagementZoneV2#custom_device_group_to_custom_device_propagation}
  */
  readonly customDeviceGroupToCustomDevicePropagation?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `APPMON_SERVER`, `APPMON_SYSTEM_PROFILE`, `AWS_ACCOUNT`, `AWS_APPLICATION_LOAD_BALANCER`, `AWS_AUTO_SCALING_GROUP`, `AWS_CLASSIC_LOAD_BALANCER`, `AWS_NETWORK_LOAD_BALANCER`, `AWS_RELATIONAL_DATABASE_SERVICE`, `AZURE`, `BROWSER_MONITOR`, `CLOUD_APPLICATION`, `CLOUD_APPLICATION_NAMESPACE`, `CLOUD_FOUNDRY_FOUNDATION`, `CUSTOM_APPLICATION`, `CUSTOM_DEVICE`, `CUSTOM_DEVICE_GROUP`, `DATA_CENTER_SERVICE`, `ENTERPRISE_APPLICATION`, `ESXI_HOST`, `EXTERNAL_MONITOR`, `HOST`, `HOST_GROUP`, `HTTP_MONITOR`, `KUBERNETES_CLUSTER`, `KUBERNETES_SERVICE`, `MOBILE_APPLICATION`, `OPENSTACK_ACCOUNT`, `PROCESS_GROUP`, `QUEUE`, `SERVICE`, `WEB_APPLICATION`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#entity_type ManagementZoneV2#entity_type}
  */
  readonly entityType: string;
  /**
  * Apply to processes running on matching hosts. `entity_type` must be set to `HOST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#host_to_pgpropagation ManagementZoneV2#host_to_pgpropagation}
  */
  readonly hostToPgpropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to underlying hosts of matching process groups. `entity_type` must be set to `PROCESS_GROUP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#pg_to_host_propagation ManagementZoneV2#pg_to_host_propagation}
  */
  readonly pgToHostPropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to all services provided by the process groups. `entity_type` must be set to `PROCESS_GROUP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#pg_to_service_propagation ManagementZoneV2#pg_to_service_propagation}
  */
  readonly pgToServicePropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to underlying hosts of matching services. `entity_type` must be set to `SERVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#service_to_host_propagation ManagementZoneV2#service_to_host_propagation}
  */
  readonly serviceToHostPropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to underlying process groups of matching services. `entity_type` must be set to `SERVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#service_to_pgpropagation ManagementZoneV2#service_to_pgpropagation}
  */
  readonly serviceToPgpropagation?: boolean | cdktf.IResolvable;
  /**
  * attribute_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#attribute_conditions ManagementZoneV2#attribute_conditions}
  */
  readonly attributeConditions: ManagementZoneV2RulesRuleAttributeRuleAttributeConditions;
}

export function managementZoneV2RulesRuleAttributeRuleToTerraform(struct?: ManagementZoneV2RulesRuleAttributeRuleOutputReference | ManagementZoneV2RulesRuleAttributeRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_to_pgpropagation: cdktf.booleanToTerraform(struct!.azureToPgpropagation),
    azure_to_service_propagation: cdktf.booleanToTerraform(struct!.azureToServicePropagation),
    custom_device_group_to_custom_device_propagation: cdktf.booleanToTerraform(struct!.customDeviceGroupToCustomDevicePropagation),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    host_to_pgpropagation: cdktf.booleanToTerraform(struct!.hostToPgpropagation),
    pg_to_host_propagation: cdktf.booleanToTerraform(struct!.pgToHostPropagation),
    pg_to_service_propagation: cdktf.booleanToTerraform(struct!.pgToServicePropagation),
    service_to_host_propagation: cdktf.booleanToTerraform(struct!.serviceToHostPropagation),
    service_to_pgpropagation: cdktf.booleanToTerraform(struct!.serviceToPgpropagation),
    attribute_conditions: managementZoneV2RulesRuleAttributeRuleAttributeConditionsToTerraform(struct!.attributeConditions),
  }
}


export function managementZoneV2RulesRuleAttributeRuleToHclTerraform(struct?: ManagementZoneV2RulesRuleAttributeRuleOutputReference | ManagementZoneV2RulesRuleAttributeRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_to_pgpropagation: {
      value: cdktf.booleanToHclTerraform(struct!.azureToPgpropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_to_service_propagation: {
      value: cdktf.booleanToHclTerraform(struct!.azureToServicePropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_device_group_to_custom_device_propagation: {
      value: cdktf.booleanToHclTerraform(struct!.customDeviceGroupToCustomDevicePropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_to_pgpropagation: {
      value: cdktf.booleanToHclTerraform(struct!.hostToPgpropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_to_host_propagation: {
      value: cdktf.booleanToHclTerraform(struct!.pgToHostPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_to_service_propagation: {
      value: cdktf.booleanToHclTerraform(struct!.pgToServicePropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_to_host_propagation: {
      value: cdktf.booleanToHclTerraform(struct!.serviceToHostPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_to_pgpropagation: {
      value: cdktf.booleanToHclTerraform(struct!.serviceToPgpropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attribute_conditions: {
      value: managementZoneV2RulesRuleAttributeRuleAttributeConditionsToHclTerraform(struct!.attributeConditions),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesRuleAttributeRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneV2RulesRuleAttributeRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureToPgpropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureToPgpropagation = this._azureToPgpropagation;
    }
    if (this._azureToServicePropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureToServicePropagation = this._azureToServicePropagation;
    }
    if (this._customDeviceGroupToCustomDevicePropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDeviceGroupToCustomDevicePropagation = this._customDeviceGroupToCustomDevicePropagation;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._hostToPgpropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostToPgpropagation = this._hostToPgpropagation;
    }
    if (this._pgToHostPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgToHostPropagation = this._pgToHostPropagation;
    }
    if (this._pgToServicePropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgToServicePropagation = this._pgToServicePropagation;
    }
    if (this._serviceToHostPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToHostPropagation = this._serviceToHostPropagation;
    }
    if (this._serviceToPgpropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToPgpropagation = this._serviceToPgpropagation;
    }
    if (this._attributeConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeConditions = this._attributeConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2RulesRuleAttributeRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureToPgpropagation = undefined;
      this._azureToServicePropagation = undefined;
      this._customDeviceGroupToCustomDevicePropagation = undefined;
      this._entityType = undefined;
      this._hostToPgpropagation = undefined;
      this._pgToHostPropagation = undefined;
      this._pgToServicePropagation = undefined;
      this._serviceToHostPropagation = undefined;
      this._serviceToPgpropagation = undefined;
      this._attributeConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureToPgpropagation = value.azureToPgpropagation;
      this._azureToServicePropagation = value.azureToServicePropagation;
      this._customDeviceGroupToCustomDevicePropagation = value.customDeviceGroupToCustomDevicePropagation;
      this._entityType = value.entityType;
      this._hostToPgpropagation = value.hostToPgpropagation;
      this._pgToHostPropagation = value.pgToHostPropagation;
      this._pgToServicePropagation = value.pgToServicePropagation;
      this._serviceToHostPropagation = value.serviceToHostPropagation;
      this._serviceToPgpropagation = value.serviceToPgpropagation;
      this._attributeConditions.internalValue = value.attributeConditions;
    }
  }

  // azure_to_pgpropagation - computed: false, optional: true, required: false
  private _azureToPgpropagation?: boolean | cdktf.IResolvable; 
  public get azureToPgpropagation() {
    return this.getBooleanAttribute('azure_to_pgpropagation');
  }
  public set azureToPgpropagation(value: boolean | cdktf.IResolvable) {
    this._azureToPgpropagation = value;
  }
  public resetAzureToPgpropagation() {
    this._azureToPgpropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureToPgpropagationInput() {
    return this._azureToPgpropagation;
  }

  // azure_to_service_propagation - computed: false, optional: true, required: false
  private _azureToServicePropagation?: boolean | cdktf.IResolvable; 
  public get azureToServicePropagation() {
    return this.getBooleanAttribute('azure_to_service_propagation');
  }
  public set azureToServicePropagation(value: boolean | cdktf.IResolvable) {
    this._azureToServicePropagation = value;
  }
  public resetAzureToServicePropagation() {
    this._azureToServicePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureToServicePropagationInput() {
    return this._azureToServicePropagation;
  }

  // custom_device_group_to_custom_device_propagation - computed: false, optional: true, required: false
  private _customDeviceGroupToCustomDevicePropagation?: boolean | cdktf.IResolvable; 
  public get customDeviceGroupToCustomDevicePropagation() {
    return this.getBooleanAttribute('custom_device_group_to_custom_device_propagation');
  }
  public set customDeviceGroupToCustomDevicePropagation(value: boolean | cdktf.IResolvable) {
    this._customDeviceGroupToCustomDevicePropagation = value;
  }
  public resetCustomDeviceGroupToCustomDevicePropagation() {
    this._customDeviceGroupToCustomDevicePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeviceGroupToCustomDevicePropagationInput() {
    return this._customDeviceGroupToCustomDevicePropagation;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // host_to_pgpropagation - computed: false, optional: true, required: false
  private _hostToPgpropagation?: boolean | cdktf.IResolvable; 
  public get hostToPgpropagation() {
    return this.getBooleanAttribute('host_to_pgpropagation');
  }
  public set hostToPgpropagation(value: boolean | cdktf.IResolvable) {
    this._hostToPgpropagation = value;
  }
  public resetHostToPgpropagation() {
    this._hostToPgpropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostToPgpropagationInput() {
    return this._hostToPgpropagation;
  }

  // pg_to_host_propagation - computed: false, optional: true, required: false
  private _pgToHostPropagation?: boolean | cdktf.IResolvable; 
  public get pgToHostPropagation() {
    return this.getBooleanAttribute('pg_to_host_propagation');
  }
  public set pgToHostPropagation(value: boolean | cdktf.IResolvable) {
    this._pgToHostPropagation = value;
  }
  public resetPgToHostPropagation() {
    this._pgToHostPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgToHostPropagationInput() {
    return this._pgToHostPropagation;
  }

  // pg_to_service_propagation - computed: false, optional: true, required: false
  private _pgToServicePropagation?: boolean | cdktf.IResolvable; 
  public get pgToServicePropagation() {
    return this.getBooleanAttribute('pg_to_service_propagation');
  }
  public set pgToServicePropagation(value: boolean | cdktf.IResolvable) {
    this._pgToServicePropagation = value;
  }
  public resetPgToServicePropagation() {
    this._pgToServicePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgToServicePropagationInput() {
    return this._pgToServicePropagation;
  }

  // service_to_host_propagation - computed: false, optional: true, required: false
  private _serviceToHostPropagation?: boolean | cdktf.IResolvable; 
  public get serviceToHostPropagation() {
    return this.getBooleanAttribute('service_to_host_propagation');
  }
  public set serviceToHostPropagation(value: boolean | cdktf.IResolvable) {
    this._serviceToHostPropagation = value;
  }
  public resetServiceToHostPropagation() {
    this._serviceToHostPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceToHostPropagationInput() {
    return this._serviceToHostPropagation;
  }

  // service_to_pgpropagation - computed: false, optional: true, required: false
  private _serviceToPgpropagation?: boolean | cdktf.IResolvable; 
  public get serviceToPgpropagation() {
    return this.getBooleanAttribute('service_to_pgpropagation');
  }
  public set serviceToPgpropagation(value: boolean | cdktf.IResolvable) {
    this._serviceToPgpropagation = value;
  }
  public resetServiceToPgpropagation() {
    this._serviceToPgpropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceToPgpropagationInput() {
    return this._serviceToPgpropagation;
  }

  // attribute_conditions - computed: false, optional: false, required: true
  private _attributeConditions = new ManagementZoneV2RulesRuleAttributeRuleAttributeConditionsOutputReference(this, "attribute_conditions");
  public get attributeConditions() {
    return this._attributeConditions;
  }
  public putAttributeConditions(value: ManagementZoneV2RulesRuleAttributeRuleAttributeConditions) {
    this._attributeConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeConditionsInput() {
    return this._attributeConditions.internalValue;
  }
}
export interface ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition {
  /**
  * Possible Values: `DIMENSION`, `LOG_FILE_NAME`, `METRIC_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#condition_type ManagementZoneV2#condition_type}
  */
  readonly conditionType: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#key ManagementZoneV2#key}
  */
  readonly key?: string;
  /**
  * Possible Values: `BEGINS_WITH`, `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#rule_matcher ManagementZoneV2#rule_matcher}
  */
  readonly ruleMatcher: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#value ManagementZoneV2#value}
  */
  readonly value: string;
}

export function managementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionToTerraform(struct?: ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    key: cdktf.stringToTerraform(struct!.key),
    rule_matcher: cdktf.stringToTerraform(struct!.ruleMatcher),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionToHclTerraform(struct?: ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_matcher: {
      value: cdktf.stringToHclTerraform(struct!.ruleMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._ruleMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleMatcher = this._ruleMatcher;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
      this._key = undefined;
      this._ruleMatcher = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
      this._key = value.key;
      this._ruleMatcher = value.ruleMatcher;
      this._value = value.value;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // rule_matcher - computed: false, optional: false, required: true
  private _ruleMatcher?: string; 
  public get ruleMatcher() {
    return this.getStringAttribute('rule_matcher');
  }
  public set ruleMatcher(value: string) {
    this._ruleMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleMatcherInput() {
    return this._ruleMatcher;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionOutputReference {
    return new ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneV2RulesRuleDimensionRuleDimensionConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#condition ManagementZoneV2#condition}
  */
  readonly condition: ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition[] | cdktf.IResolvable;
}

export function managementZoneV2RulesRuleDimensionRuleDimensionConditionsToTerraform(struct?: ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsOutputReference | ManagementZoneV2RulesRuleDimensionRuleDimensionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(managementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function managementZoneV2RulesRuleDimensionRuleDimensionConditionsToHclTerraform(struct?: ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsOutputReference | ManagementZoneV2RulesRuleDimensionRuleDimensionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(managementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneV2RulesRuleDimensionRuleDimensionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2RulesRuleDimensionRuleDimensionConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface ManagementZoneV2RulesRuleDimensionRule {
  /**
  * Possible Values: `ANY`, `LOG`, `METRIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#applies_to ManagementZoneV2#applies_to}
  */
  readonly appliesTo: string;
  /**
  * dimension_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#dimension_conditions ManagementZoneV2#dimension_conditions}
  */
  readonly dimensionConditions?: ManagementZoneV2RulesRuleDimensionRuleDimensionConditions;
}

export function managementZoneV2RulesRuleDimensionRuleToTerraform(struct?: ManagementZoneV2RulesRuleDimensionRuleOutputReference | ManagementZoneV2RulesRuleDimensionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    dimension_conditions: managementZoneV2RulesRuleDimensionRuleDimensionConditionsToTerraform(struct!.dimensionConditions),
  }
}


export function managementZoneV2RulesRuleDimensionRuleToHclTerraform(struct?: ManagementZoneV2RulesRuleDimensionRuleOutputReference | ManagementZoneV2RulesRuleDimensionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_conditions: {
      value: managementZoneV2RulesRuleDimensionRuleDimensionConditionsToHclTerraform(struct!.dimensionConditions),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesRuleDimensionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneV2RulesRuleDimensionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._dimensionConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionConditions = this._dimensionConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2RulesRuleDimensionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appliesTo = undefined;
      this._dimensionConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appliesTo = value.appliesTo;
      this._dimensionConditions.internalValue = value.dimensionConditions;
    }
  }

  // applies_to - computed: false, optional: false, required: true
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // dimension_conditions - computed: false, optional: true, required: false
  private _dimensionConditions = new ManagementZoneV2RulesRuleDimensionRuleDimensionConditionsOutputReference(this, "dimension_conditions");
  public get dimensionConditions() {
    return this._dimensionConditions;
  }
  public putDimensionConditions(value: ManagementZoneV2RulesRuleDimensionRuleDimensionConditions) {
    this._dimensionConditions.internalValue = value;
  }
  public resetDimensionConditions() {
    this._dimensionConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionConditionsInput() {
    return this._dimensionConditions.internalValue;
  }
}
export interface ManagementZoneV2RulesRule {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#enabled ManagementZoneV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Learn more about the [Entity selector](https://dt-url.net/apientityselector).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#entity_selector ManagementZoneV2#entity_selector}
  */
  readonly entitySelector?: string;
  /**
  * Possible Values: `DIMENSION`, `ME`, `SELECTOR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#type ManagementZoneV2#type}
  */
  readonly type: string;
  /**
  * attribute_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#attribute_rule ManagementZoneV2#attribute_rule}
  */
  readonly attributeRule?: ManagementZoneV2RulesRuleAttributeRule;
  /**
  * dimension_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#dimension_rule ManagementZoneV2#dimension_rule}
  */
  readonly dimensionRule?: ManagementZoneV2RulesRuleDimensionRule;
}

export function managementZoneV2RulesRuleToTerraform(struct?: ManagementZoneV2RulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entity_selector: cdktf.stringToTerraform(struct!.entitySelector),
    type: cdktf.stringToTerraform(struct!.type),
    attribute_rule: managementZoneV2RulesRuleAttributeRuleToTerraform(struct!.attributeRule),
    dimension_rule: managementZoneV2RulesRuleDimensionRuleToTerraform(struct!.dimensionRule),
  }
}


export function managementZoneV2RulesRuleToHclTerraform(struct?: ManagementZoneV2RulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity_selector: {
      value: cdktf.stringToHclTerraform(struct!.entitySelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_rule: {
      value: managementZoneV2RulesRuleAttributeRuleToHclTerraform(struct!.attributeRule),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneV2RulesRuleAttributeRuleList",
    },
    dimension_rule: {
      value: managementZoneV2RulesRuleDimensionRuleToHclTerraform(struct!.dimensionRule),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneV2RulesRuleDimensionRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneV2RulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entitySelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySelector = this._entitySelector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._attributeRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRule = this._attributeRule?.internalValue;
    }
    if (this._dimensionRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionRule = this._dimensionRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2RulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._entitySelector = undefined;
      this._type = undefined;
      this._attributeRule.internalValue = undefined;
      this._dimensionRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._entitySelector = value.entitySelector;
      this._type = value.type;
      this._attributeRule.internalValue = value.attributeRule;
      this._dimensionRule.internalValue = value.dimensionRule;
    }
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

  // entity_selector - computed: false, optional: true, required: false
  private _entitySelector?: string; 
  public get entitySelector() {
    return this.getStringAttribute('entity_selector');
  }
  public set entitySelector(value: string) {
    this._entitySelector = value;
  }
  public resetEntitySelector() {
    this._entitySelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectorInput() {
    return this._entitySelector;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // attribute_rule - computed: false, optional: true, required: false
  private _attributeRule = new ManagementZoneV2RulesRuleAttributeRuleOutputReference(this, "attribute_rule");
  public get attributeRule() {
    return this._attributeRule;
  }
  public putAttributeRule(value: ManagementZoneV2RulesRuleAttributeRule) {
    this._attributeRule.internalValue = value;
  }
  public resetAttributeRule() {
    this._attributeRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRuleInput() {
    return this._attributeRule.internalValue;
  }

  // dimension_rule - computed: false, optional: true, required: false
  private _dimensionRule = new ManagementZoneV2RulesRuleDimensionRuleOutputReference(this, "dimension_rule");
  public get dimensionRule() {
    return this._dimensionRule;
  }
  public putDimensionRule(value: ManagementZoneV2RulesRuleDimensionRule) {
    this._dimensionRule.internalValue = value;
  }
  public resetDimensionRule() {
    this._dimensionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionRuleInput() {
    return this._dimensionRule.internalValue;
  }
}

export class ManagementZoneV2RulesRuleList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneV2RulesRule[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneV2RulesRuleOutputReference {
    return new ManagementZoneV2RulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneV2Rules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#rule ManagementZoneV2#rule}
  */
  readonly rule: ManagementZoneV2RulesRule[] | cdktf.IResolvable;
}

export function managementZoneV2RulesToTerraform(struct?: ManagementZoneV2RulesOutputReference | ManagementZoneV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(managementZoneV2RulesRuleToTerraform, true)(struct!.rule),
  }
}


export function managementZoneV2RulesToHclTerraform(struct?: ManagementZoneV2RulesOutputReference | ManagementZoneV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(managementZoneV2RulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementZoneV2RulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneV2RulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneV2Rules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneV2Rules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ManagementZoneV2RulesRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ManagementZoneV2RulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2 dynatrace_management_zone_v2}
*/
export class ManagementZoneV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_management_zone_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementZoneV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementZoneV2 to import
  * @param importFromId The id of the existing ManagementZoneV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementZoneV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_management_zone_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/management_zone_v2 dynatrace_management_zone_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementZoneV2Config
  */
  public constructor(scope: Construct, id: string, config: ManagementZoneV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_management_zone_v2',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._id = config.id;
    this._legacyId = config.legacyId;
    this._name = config.name;
    this._rules.internalValue = config.rules;
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

  // legacy_id - computed: true, optional: true, required: false
  private _legacyId?: string; 
  public get legacyId() {
    return this.getStringAttribute('legacy_id');
  }
  public set legacyId(value: string) {
    this._legacyId = value;
  }
  public resetLegacyId() {
    this._legacyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyIdInput() {
    return this._legacyId;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new ManagementZoneV2RulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: ManagementZoneV2Rules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      legacy_id: cdktf.stringToTerraform(this._legacyId),
      name: cdktf.stringToTerraform(this._name),
      rules: managementZoneV2RulesToTerraform(this._rules.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_id: {
        value: cdktf.stringToHclTerraform(this._legacyId),
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
      rules: {
        value: managementZoneV2RulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementZoneV2RulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
