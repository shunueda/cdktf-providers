// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutotagV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#description AutotagV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#id AutotagV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tag name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#name AutotagV2#name}
  */
  readonly name: string;
  /**
  * If `true` the specified rules are ignored with the assumption that they're maintained externally or via `dynatrace_autotag_rules`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#rules_maintained_externally AutotagV2#rules_maintained_externally}
  */
  readonly rulesMaintainedExternally?: boolean | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#rules AutotagV2#rules}
  */
  readonly rules?: AutotagV2Rules;
}
export interface AutotagV2RulesRuleAttributeRuleConditionsCondition {
  /**
  * Case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#case_sensitive AutotagV2#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Dynamic key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#dynamic_key AutotagV2#dynamic_key}
  */
  readonly dynamicKey?: string;
  /**
  * Key source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#dynamic_key_source AutotagV2#dynamic_key_source}
  */
  readonly dynamicKeySource?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#entity_id AutotagV2#entity_id}
  */
  readonly entityId?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#enum_value AutotagV2#enum_value}
  */
  readonly enumValue?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#integer_value AutotagV2#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Possible Values: `APPMON_SERVER_NAME`, `APPMON_SYSTEM_PROFILE_NAME`, `AWS_ACCOUNT_ID`, `AWS_ACCOUNT_NAME`, `AWS_APPLICATION_LOAD_BALANCER_NAME`, `AWS_APPLICATION_LOAD_BALANCER_TAGS`, `AWS_AUTO_SCALING_GROUP_NAME`, `AWS_AUTO_SCALING_GROUP_TAGS`, `AWS_AVAILABILITY_ZONE_NAME`, `AWS_CLASSIC_LOAD_BALANCER_FRONTEND_PORTS`, `AWS_CLASSIC_LOAD_BALANCER_NAME`, `AWS_CLASSIC_LOAD_BALANCER_TAGS`, `AWS_NETWORK_LOAD_BALANCER_NAME`, `AWS_NETWORK_LOAD_BALANCER_TAGS`, `AWS_RELATIONAL_DATABASE_SERVICE_DB_NAME`, `AWS_RELATIONAL_DATABASE_SERVICE_ENDPOINT`, `AWS_RELATIONAL_DATABASE_SERVICE_ENGINE`, `AWS_RELATIONAL_DATABASE_SERVICE_INSTANCE_CLASS`, `AWS_RELATIONAL_DATABASE_SERVICE_NAME`, `AWS_RELATIONAL_DATABASE_SERVICE_PORT`, `AWS_RELATIONAL_DATABASE_SERVICE_TAGS`, `AZURE_ENTITY_NAME`, `AZURE_ENTITY_TAGS`, `AZURE_MGMT_GROUP_NAME`, `AZURE_MGMT_GROUP_UUID`, `AZURE_REGION_NAME`, `AZURE_SCALE_SET_NAME`, `AZURE_SUBSCRIPTION_NAME`, `AZURE_SUBSCRIPTION_UUID`, `AZURE_TENANT_NAME`, `AZURE_TENANT_UUID`, `AZURE_VM_NAME`, `BROWSER_MONITOR_NAME`, `BROWSER_MONITOR_TAGS`, `CLOUD_APPLICATION_LABELS`, `CLOUD_APPLICATION_NAME`, `CLOUD_APPLICATION_NAMESPACE_LABELS`, `CLOUD_APPLICATION_NAMESPACE_NAME`, `CLOUD_FOUNDRY_FOUNDATION_NAME`, `CLOUD_FOUNDRY_ORG_NAME`, `CUSTOM_APPLICATION_NAME`, `CUSTOM_APPLICATION_PLATFORM`, `CUSTOM_APPLICATION_TAGS`, `CUSTOM_APPLICATION_TYPE`, `CUSTOM_DEVICE_DNS_ADDRESS`, `CUSTOM_DEVICE_GROUP_NAME`, `CUSTOM_DEVICE_GROUP_TAGS`, `CUSTOM_DEVICE_IP_ADDRESS`, `CUSTOM_DEVICE_METADATA`, `CUSTOM_DEVICE_NAME`, `CUSTOM_DEVICE_PORT`, `CUSTOM_DEVICE_TAGS`, `CUSTOM_DEVICE_TECHNOLOGY`, `DATA_CENTER_SERVICE_DECODER_TYPE`, `DATA_CENTER_SERVICE_IP_ADDRESS`, `DATA_CENTER_SERVICE_METADATA`, `DATA_CENTER_SERVICE_NAME`, `DATA_CENTER_SERVICE_PORT`, `DATA_CENTER_SERVICE_TAGS`, `DOCKER_CONTAINER_NAME`, `DOCKER_FULL_IMAGE_NAME`, `DOCKER_IMAGE_VERSION`, `EC2_INSTANCE_AMI_ID`, `EC2_INSTANCE_AWS_INSTANCE_TYPE`, `EC2_INSTANCE_AWS_SECURITY_GROUP`, `EC2_INSTANCE_BEANSTALK_ENV_NAME`, `EC2_INSTANCE_ID`, `EC2_INSTANCE_NAME`, `EC2_INSTANCE_PRIVATE_HOST_NAME`, `EC2_INSTANCE_PUBLIC_HOST_NAME`, `EC2_INSTANCE_TAGS`, `ENTERPRISE_APPLICATION_DECODER_TYPE`, `ENTERPRISE_APPLICATION_IP_ADDRESS`, `ENTERPRISE_APPLICATION_METADATA`, `ENTERPRISE_APPLICATION_NAME`, `ENTERPRISE_APPLICATION_PORT`, `ENTERPRISE_APPLICATION_TAGS`, `ESXI_HOST_CLUSTER_NAME`, `ESXI_HOST_HARDWARE_MODEL`, `ESXI_HOST_HARDWARE_VENDOR`, `ESXI_HOST_NAME`, `ESXI_HOST_PRODUCT_NAME`, `ESXI_HOST_PRODUCT_VERSION`, `ESXI_HOST_TAGS`, `EXTERNAL_MONITOR_ENGINE_DESCRIPTION`, `EXTERNAL_MONITOR_ENGINE_NAME`, `EXTERNAL_MONITOR_ENGINE_TYPE`, `EXTERNAL_MONITOR_NAME`, `EXTERNAL_MONITOR_TAGS`, `GEOLOCATION_SITE_NAME`, `GOOGLE_CLOUD_PLATFORM_ZONE_NAME`, `GOOGLE_COMPUTE_INSTANCE_ID`, `GOOGLE_COMPUTE_INSTANCE_MACHINE_TYPE`, `GOOGLE_COMPUTE_INSTANCE_NAME`, `GOOGLE_COMPUTE_INSTANCE_PROJECT`, `GOOGLE_COMPUTE_INSTANCE_PROJECT_ID`, `GOOGLE_COMPUTE_INSTANCE_PUBLIC_IP_ADDRESSES`, `HOST_AIX_LOGICAL_CPU_COUNT`, `HOST_AIX_SIMULTANEOUS_THREADS`, `HOST_AIX_VIRTUAL_CPU_COUNT`, `HOST_ARCHITECTURE`, `HOST_AWS_NAME_TAG`, `HOST_AZURE_COMPUTE_MODE`, `HOST_AZURE_SKU`, `HOST_AZURE_WEB_APPLICATION_HOST_NAMES`, `HOST_AZURE_WEB_APPLICATION_SITE_NAMES`, `HOST_BITNESS`, `HOST_BOSH_AVAILABILITY_ZONE`, `HOST_BOSH_DEPLOYMENT_ID`, `HOST_BOSH_INSTANCE_ID`, `HOST_BOSH_INSTANCE_NAME`, `HOST_BOSH_NAME`, `HOST_BOSH_STEMCELL_VERSION`, `HOST_CLOUD_TYPE`, `HOST_CPU_CORES`, `HOST_CUSTOM_METADATA`, `HOST_DETECTED_NAME`, `HOST_GROUP_ID`, `HOST_GROUP_NAME`, `HOST_HYPERVISOR_TYPE`, `HOST_IP_ADDRESS`, `HOST_KUBERNETES_LABELS`, `HOST_LOGICAL_CPU_CORES`, `HOST_NAME`, `HOST_ONEAGENT_CUSTOM_HOST_NAME`, `HOST_OS_TYPE`, `HOST_OS_VERSION`, `HOST_PAAS_MEMORY_LIMIT`, `HOST_PAAS_TYPE`, `HOST_TAGS`, `HOST_TECHNOLOGY`, `HTTP_MONITOR_NAME`, `HTTP_MONITOR_TAGS`, `KUBERNETES_CLUSTER_NAME`, `KUBERNETES_NODE_NAME`, `KUBERNETES_SERVICE_NAME`, `MOBILE_APPLICATION_NAME`, `MOBILE_APPLICATION_PLATFORM`, `MOBILE_APPLICATION_TAGS`, `NAME_OF_COMPUTE_NODE`, `OPENSTACK_ACCOUNT_NAME`, `OPENSTACK_ACCOUNT_PROJECT_NAME`, `OPENSTACK_AVAILABILITY_ZONE_NAME`, `OPENSTACK_PROJECT_NAME`, `OPENSTACK_REGION_NAME`, `OPENSTACK_VM_INSTANCE_TYPE`, `OPENSTACK_VM_NAME`, `OPENSTACK_VM_SECURITY_GROUP`, `PROCESS_GROUP_AZURE_HOST_NAME`, `PROCESS_GROUP_AZURE_SITE_NAME`, `PROCESS_GROUP_CUSTOM_METADATA`, `PROCESS_GROUP_DETECTED_NAME`, `PROCESS_GROUP_ID`, `PROCESS_GROUP_LISTEN_PORT`, `PROCESS_GROUP_NAME`, `PROCESS_GROUP_PREDEFINED_METADATA`, `PROCESS_GROUP_TAGS`, `PROCESS_GROUP_TECHNOLOGY`, `PROCESS_GROUP_TECHNOLOGY_EDITION`, `PROCESS_GROUP_TECHNOLOGY_VERSION`, `QUEUE_NAME`, `QUEUE_TECHNOLOGY`, `QUEUE_VENDOR`, `SERVICE_AKKA_ACTOR_SYSTEM`, `SERVICE_CTG_SERVICE_NAME`, `SERVICE_DATABASE_HOST_NAME`, `SERVICE_DATABASE_NAME`, `SERVICE_DATABASE_TOPOLOGY`, `SERVICE_DATABASE_VENDOR`, `SERVICE_DETECTED_NAME`, `SERVICE_ESB_APPLICATION_NAME`, `SERVICE_IBM_CTG_GATEWAY_URL`, `SERVICE_MESSAGING_LISTENER_CLASS_NAME`, `SERVICE_NAME`, `SERVICE_PORT`, `SERVICE_PUBLIC_DOMAIN_NAME`, `SERVICE_REMOTE_ENDPOINT`, `SERVICE_REMOTE_SERVICE_NAME`, `SERVICE_TAGS`, `SERVICE_TECHNOLOGY`, `SERVICE_TECHNOLOGY_EDITION`, `SERVICE_TECHNOLOGY_VERSION`, `SERVICE_TOPOLOGY`, `SERVICE_TYPE`, `SERVICE_WEB_APPLICATION_ID`, `SERVICE_WEB_CONTEXT_ROOT`, `SERVICE_WEB_SERVER_ENDPOINT`, `SERVICE_WEB_SERVER_NAME`, `SERVICE_WEB_SERVICE_NAME`, `SERVICE_WEB_SERVICE_NAMESPACE`, `VMWARE_DATACENTER_NAME`, `VMWARE_VM_NAME`, `WEB_APPLICATION_NAME`, `WEB_APPLICATION_NAME_PATTERN`, `WEB_APPLICATION_TAGS`, `WEB_APPLICATION_TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#key AutotagV2#key}
  */
  readonly key: string;
  /**
  * Possible Values: `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH`, `EQUALS`, `EXISTS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `IS_IP_IN_RANGE`, `LOWER_THAN`, `LOWER_THAN_OR_EQUAL`, `NOT_BEGINS_WITH`, `NOT_CONTAINS`, `NOT_ENDS_WITH`, `NOT_EQUALS`, `NOT_EXISTS`, `NOT_GREATER_THAN`, `NOT_GREATER_THAN_OR_EQUAL`, `NOT_IS_IP_IN_RANGE`, `NOT_LOWER_THAN`, `NOT_LOWER_THAN_OR_EQUAL`, `NOT_REGEX_MATCHES`, `NOT_TAG_KEY_EQUALS`, `REGEX_MATCHES`, `TAG_KEY_EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#operator AutotagV2#operator}
  */
  readonly operator: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#string_value AutotagV2#string_value}
  */
  readonly stringValue?: string;
  /**
  * Format: `[CONTEXT]tagKey:tagValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#tag AutotagV2#tag}
  */
  readonly tag?: string;
}

export function autotagV2RulesRuleAttributeRuleConditionsConditionToTerraform(struct?: AutotagV2RulesRuleAttributeRuleConditionsCondition | cdktf.IResolvable): any {
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


export function autotagV2RulesRuleAttributeRuleConditionsConditionToHclTerraform(struct?: AutotagV2RulesRuleAttributeRuleConditionsCondition | cdktf.IResolvable): any {
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

export class AutotagV2RulesRuleAttributeRuleConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutotagV2RulesRuleAttributeRuleConditionsCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AutotagV2RulesRuleAttributeRuleConditionsCondition | cdktf.IResolvable | undefined) {
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

export class AutotagV2RulesRuleAttributeRuleConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : AutotagV2RulesRuleAttributeRuleConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): AutotagV2RulesRuleAttributeRuleConditionsConditionOutputReference {
    return new AutotagV2RulesRuleAttributeRuleConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutotagV2RulesRuleAttributeRuleConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#condition AutotagV2#condition}
  */
  readonly condition: AutotagV2RulesRuleAttributeRuleConditionsCondition[] | cdktf.IResolvable;
}

export function autotagV2RulesRuleAttributeRuleConditionsToTerraform(struct?: AutotagV2RulesRuleAttributeRuleConditionsOutputReference | AutotagV2RulesRuleAttributeRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(autotagV2RulesRuleAttributeRuleConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function autotagV2RulesRuleAttributeRuleConditionsToHclTerraform(struct?: AutotagV2RulesRuleAttributeRuleConditionsOutputReference | AutotagV2RulesRuleAttributeRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(autotagV2RulesRuleAttributeRuleConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "AutotagV2RulesRuleAttributeRuleConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutotagV2RulesRuleAttributeRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutotagV2RulesRuleAttributeRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutotagV2RulesRuleAttributeRuleConditions | undefined) {
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
  private _condition = new AutotagV2RulesRuleAttributeRuleConditionsConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AutotagV2RulesRuleAttributeRuleConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface AutotagV2RulesRuleAttributeRule {
  /**
  * Apply to process groups connected to matching Azure entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#azure_to_pgpropagation AutotagV2#azure_to_pgpropagation}
  */
  readonly azureToPgpropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to services provided by matching Azure entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#azure_to_service_propagation AutotagV2#azure_to_service_propagation}
  */
  readonly azureToServicePropagation?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `APPLICATION`, `AWS_APPLICATION_LOAD_BALANCER`, `AWS_CLASSIC_LOAD_BALANCER`, `AWS_NETWORK_LOAD_BALANCER`, `AWS_RELATIONAL_DATABASE_SERVICE`, `AZURE`, `CUSTOM_APPLICATION`, `CUSTOM_DEVICE`, `DCRUM_APPLICATION`, `ESXI_HOST`, `EXTERNAL_SYNTHETIC_TEST`, `HOST`, `HTTP_CHECK`, `MOBILE_APPLICATION`, `PROCESS_GROUP`, `SERVICE`, `SYNTHETIC_TEST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#entity_type AutotagV2#entity_type}
  */
  readonly entityType: string;
  /**
  * Apply to processes running on matching hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#host_to_pgpropagation AutotagV2#host_to_pgpropagation}
  */
  readonly hostToPgpropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to underlying hosts of matching process groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#pg_to_host_propagation AutotagV2#pg_to_host_propagation}
  */
  readonly pgToHostPropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to all services provided by the process groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#pg_to_service_propagation AutotagV2#pg_to_service_propagation}
  */
  readonly pgToServicePropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to underlying hosts of matching services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#service_to_host_propagation AutotagV2#service_to_host_propagation}
  */
  readonly serviceToHostPropagation?: boolean | cdktf.IResolvable;
  /**
  * Apply to underlying process groups of matching services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#service_to_pgpropagation AutotagV2#service_to_pgpropagation}
  */
  readonly serviceToPgpropagation?: boolean | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#conditions AutotagV2#conditions}
  */
  readonly conditions: AutotagV2RulesRuleAttributeRuleConditions;
}

export function autotagV2RulesRuleAttributeRuleToTerraform(struct?: AutotagV2RulesRuleAttributeRuleOutputReference | AutotagV2RulesRuleAttributeRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_to_pgpropagation: cdktf.booleanToTerraform(struct!.azureToPgpropagation),
    azure_to_service_propagation: cdktf.booleanToTerraform(struct!.azureToServicePropagation),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    host_to_pgpropagation: cdktf.booleanToTerraform(struct!.hostToPgpropagation),
    pg_to_host_propagation: cdktf.booleanToTerraform(struct!.pgToHostPropagation),
    pg_to_service_propagation: cdktf.booleanToTerraform(struct!.pgToServicePropagation),
    service_to_host_propagation: cdktf.booleanToTerraform(struct!.serviceToHostPropagation),
    service_to_pgpropagation: cdktf.booleanToTerraform(struct!.serviceToPgpropagation),
    conditions: autotagV2RulesRuleAttributeRuleConditionsToTerraform(struct!.conditions),
  }
}


export function autotagV2RulesRuleAttributeRuleToHclTerraform(struct?: AutotagV2RulesRuleAttributeRuleOutputReference | AutotagV2RulesRuleAttributeRule): any {
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
    conditions: {
      value: autotagV2RulesRuleAttributeRuleConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AutotagV2RulesRuleAttributeRuleConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutotagV2RulesRuleAttributeRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutotagV2RulesRuleAttributeRule | undefined {
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
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutotagV2RulesRuleAttributeRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureToPgpropagation = undefined;
      this._azureToServicePropagation = undefined;
      this._entityType = undefined;
      this._hostToPgpropagation = undefined;
      this._pgToHostPropagation = undefined;
      this._pgToServicePropagation = undefined;
      this._serviceToHostPropagation = undefined;
      this._serviceToPgpropagation = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureToPgpropagation = value.azureToPgpropagation;
      this._azureToServicePropagation = value.azureToServicePropagation;
      this._entityType = value.entityType;
      this._hostToPgpropagation = value.hostToPgpropagation;
      this._pgToHostPropagation = value.pgToHostPropagation;
      this._pgToServicePropagation = value.pgToServicePropagation;
      this._serviceToHostPropagation = value.serviceToHostPropagation;
      this._serviceToPgpropagation = value.serviceToPgpropagation;
      this._conditions.internalValue = value.conditions;
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

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AutotagV2RulesRuleAttributeRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AutotagV2RulesRuleAttributeRuleConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface AutotagV2RulesRule {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#enabled AutotagV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The documentation of the entity selector can be found [here](https://dt-url.net/apientityselector).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#entity_selector AutotagV2#entity_selector}
  */
  readonly entitySelector?: string;
  /**
  * Possible Values: `ME`, `SELECTOR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#type AutotagV2#type}
  */
  readonly type: string;
  /**
  * Optional tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#value_format AutotagV2#value_format}
  */
  readonly valueFormat?: string;
  /**
  * Possible Values: `Leave text as-is`, `To lower case`, `To upper case`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#value_normalization AutotagV2#value_normalization}
  */
  readonly valueNormalization: string;
  /**
  * attribute_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#attribute_rule AutotagV2#attribute_rule}
  */
  readonly attributeRule?: AutotagV2RulesRuleAttributeRule;
}

export function autotagV2RulesRuleToTerraform(struct?: AutotagV2RulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entity_selector: cdktf.stringToTerraform(struct!.entitySelector),
    type: cdktf.stringToTerraform(struct!.type),
    value_format: cdktf.stringToTerraform(struct!.valueFormat),
    value_normalization: cdktf.stringToTerraform(struct!.valueNormalization),
    attribute_rule: autotagV2RulesRuleAttributeRuleToTerraform(struct!.attributeRule),
  }
}


export function autotagV2RulesRuleToHclTerraform(struct?: AutotagV2RulesRule | cdktf.IResolvable): any {
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
    value_format: {
      value: cdktf.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_normalization: {
      value: cdktf.stringToHclTerraform(struct!.valueNormalization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_rule: {
      value: autotagV2RulesRuleAttributeRuleToHclTerraform(struct!.attributeRule),
      isBlock: true,
      type: "list",
      storageClassType: "AutotagV2RulesRuleAttributeRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutotagV2RulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutotagV2RulesRule | cdktf.IResolvable | undefined {
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
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    if (this._valueNormalization !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueNormalization = this._valueNormalization;
    }
    if (this._attributeRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRule = this._attributeRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutotagV2RulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._entitySelector = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
      this._valueNormalization = undefined;
      this._attributeRule.internalValue = undefined;
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
      this._valueFormat = value.valueFormat;
      this._valueNormalization = value.valueNormalization;
      this._attributeRule.internalValue = value.attributeRule;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }

  // value_normalization - computed: false, optional: false, required: true
  private _valueNormalization?: string; 
  public get valueNormalization() {
    return this.getStringAttribute('value_normalization');
  }
  public set valueNormalization(value: string) {
    this._valueNormalization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueNormalizationInput() {
    return this._valueNormalization;
  }

  // attribute_rule - computed: false, optional: true, required: false
  private _attributeRule = new AutotagV2RulesRuleAttributeRuleOutputReference(this, "attribute_rule");
  public get attributeRule() {
    return this._attributeRule;
  }
  public putAttributeRule(value: AutotagV2RulesRuleAttributeRule) {
    this._attributeRule.internalValue = value;
  }
  public resetAttributeRule() {
    this._attributeRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRuleInput() {
    return this._attributeRule.internalValue;
  }
}

export class AutotagV2RulesRuleList extends cdktf.ComplexList {
  public internalValue? : AutotagV2RulesRule[] | cdktf.IResolvable

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
  public get(index: number): AutotagV2RulesRuleOutputReference {
    return new AutotagV2RulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutotagV2Rules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#rule AutotagV2#rule}
  */
  readonly rule: AutotagV2RulesRule[] | cdktf.IResolvable;
}

export function autotagV2RulesToTerraform(struct?: AutotagV2RulesOutputReference | AutotagV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(autotagV2RulesRuleToTerraform, true)(struct!.rule),
  }
}


export function autotagV2RulesToHclTerraform(struct?: AutotagV2RulesOutputReference | AutotagV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(autotagV2RulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "set",
      storageClassType: "AutotagV2RulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutotagV2RulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutotagV2Rules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutotagV2Rules | undefined) {
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
  private _rule = new AutotagV2RulesRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AutotagV2RulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2 dynatrace_autotag_v2}
*/
export class AutotagV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_autotag_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutotagV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutotagV2 to import
  * @param importFromId The id of the existing AutotagV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutotagV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_autotag_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/autotag_v2 dynatrace_autotag_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutotagV2Config
  */
  public constructor(scope: Construct, id: string, config: AutotagV2Config) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_autotag_v2',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._rulesMaintainedExternally = config.rulesMaintainedExternally;
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

  // rules_maintained_externally - computed: false, optional: true, required: false
  private _rulesMaintainedExternally?: boolean | cdktf.IResolvable; 
  public get rulesMaintainedExternally() {
    return this.getBooleanAttribute('rules_maintained_externally');
  }
  public set rulesMaintainedExternally(value: boolean | cdktf.IResolvable) {
    this._rulesMaintainedExternally = value;
  }
  public resetRulesMaintainedExternally() {
    this._rulesMaintainedExternally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesMaintainedExternallyInput() {
    return this._rulesMaintainedExternally;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new AutotagV2RulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: AutotagV2Rules) {
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
      name: cdktf.stringToTerraform(this._name),
      rules_maintained_externally: cdktf.booleanToTerraform(this._rulesMaintainedExternally),
      rules: autotagV2RulesToTerraform(this._rules.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules_maintained_externally: {
        value: cdktf.booleanToHclTerraform(this._rulesMaintainedExternally),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rules: {
        value: autotagV2RulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutotagV2RulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
