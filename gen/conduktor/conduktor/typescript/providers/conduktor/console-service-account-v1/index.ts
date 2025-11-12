// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleServiceAccountV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the application instance this service account is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#app_instance ConsoleServiceAccountV1#app_instance}
  */
  readonly appInstance?: string;
  /**
  * Valid Kafka Cluster name linked with the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#cluster ConsoleServiceAccountV1#cluster}
  */
  readonly cluster: string;
  /**
  * Custom labels for the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#labels ConsoleServiceAccountV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Service Account name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#name ConsoleServiceAccountV1#name}
  */
  readonly name: string;
  /**
  * Service Accoount specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#spec ConsoleServiceAccountV1#spec}
  */
  readonly spec: ConsoleServiceAccountV1Spec;
}
export interface ConsoleServiceAccountV1SpecAuthorizationAivenAcls {
  /**
  * Aiven resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#name ConsoleServiceAccountV1#name}
  */
  readonly name: string;
  /**
  * Aiven resource permission. Valid values are: admin, read, readwrite, schema_registry_read, schema_registry_write, write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#permission ConsoleServiceAccountV1#permission}
  */
  readonly permission: string;
  /**
  * Aiven resource type. Valid values are: SCHEMA, TOPIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#resource_type ConsoleServiceAccountV1#resource_type}
  */
  readonly resourceType: string;
}

export function consoleServiceAccountV1SpecAuthorizationAivenAclsToTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationAivenAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permission: cdktf.stringToTerraform(struct!.permission),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function consoleServiceAccountV1SpecAuthorizationAivenAclsToHclTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationAivenAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleServiceAccountV1SpecAuthorizationAivenAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsoleServiceAccountV1SpecAuthorizationAivenAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleServiceAccountV1SpecAuthorizationAivenAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permission = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permission = value.permission;
      this._resourceType = value.resourceType;
    }
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ConsoleServiceAccountV1SpecAuthorizationAivenAclsList extends cdktf.ComplexList {
  public internalValue? : ConsoleServiceAccountV1SpecAuthorizationAivenAcls[] | cdktf.IResolvable

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
  public get(index: number): ConsoleServiceAccountV1SpecAuthorizationAivenAclsOutputReference {
    return new ConsoleServiceAccountV1SpecAuthorizationAivenAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsoleServiceAccountV1SpecAuthorizationAiven {
  /**
  * Set of the Aiven ACLs to apply on the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#acls ConsoleServiceAccountV1#acls}
  */
  readonly acls: ConsoleServiceAccountV1SpecAuthorizationAivenAcls[] | cdktf.IResolvable;
}

export function consoleServiceAccountV1SpecAuthorizationAivenToTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationAiven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acls: cdktf.listMapper(consoleServiceAccountV1SpecAuthorizationAivenAclsToTerraform, false)(struct!.acls),
  }
}


export function consoleServiceAccountV1SpecAuthorizationAivenToHclTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationAiven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acls: {
      value: cdktf.listMapperHcl(consoleServiceAccountV1SpecAuthorizationAivenAclsToHclTerraform, false)(struct!.acls),
      isBlock: true,
      type: "set",
      storageClassType: "ConsoleServiceAccountV1SpecAuthorizationAivenAclsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleServiceAccountV1SpecAuthorizationAivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleServiceAccountV1SpecAuthorizationAiven | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleServiceAccountV1SpecAuthorizationAiven | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acls.internalValue = value.acls;
    }
  }

  // acls - computed: false, optional: false, required: true
  private _acls = new ConsoleServiceAccountV1SpecAuthorizationAivenAclsList(this, "acls", true);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: ConsoleServiceAccountV1SpecAuthorizationAivenAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }
}
export interface ConsoleServiceAccountV1SpecAuthorizationKafkaAcls {
  /**
  * Valid Kafka Connect Cluster refrence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#connect_cluster ConsoleServiceAccountV1#connect_cluster}
  */
  readonly connectCluster?: string;
  /**
  * Host of the Kafka cluster. If not set it will default to '*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#host ConsoleServiceAccountV1#host}
  */
  readonly host?: string;
  /**
  * Kafka resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#name ConsoleServiceAccountV1#name}
  */
  readonly name: string;
  /**
  * Set of all operations to apply on the resource. Valid values are: All, Alter, AlterConfigs, ClusterAction, Create, CreateTokens, Delete, Describe, DescribeConfigs, DescribeTokens, IdempotentWrite, Read, Unknown, Write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#operations ConsoleServiceAccountV1#operations}
  */
  readonly operations: string[];
  /**
  * Kafka resource pattern type. Valid values are: LITERAL, PREFIXED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#pattern_type ConsoleServiceAccountV1#pattern_type}
  */
  readonly patternType: string;
  /**
  * Permission Type for Access Control Entry. Valid values are: Deny, Allow. If not set it will default to Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#permission ConsoleServiceAccountV1#permission}
  */
  readonly permission?: string;
  /**
  * Kafka resource type. Valid values are: CLUSTER, CONSUMER_GROUP, DELEGATION_TOKEN, TOPIC, TRANSACTIONAL_ID, UNKNOWN, USER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#type ConsoleServiceAccountV1#type}
  */
  readonly type: string;
}

export function consoleServiceAccountV1SpecAuthorizationKafkaAclsToTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationKafkaAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_cluster: cdktf.stringToTerraform(struct!.connectCluster),
    host: cdktf.stringToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    permission: cdktf.stringToTerraform(struct!.permission),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function consoleServiceAccountV1SpecAuthorizationKafkaAclsToHclTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationKafkaAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_cluster: {
      value: cdktf.stringToHclTerraform(struct!.connectCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleServiceAccountV1SpecAuthorizationKafkaAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsoleServiceAccountV1SpecAuthorizationKafkaAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectCluster = this._connectCluster;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleServiceAccountV1SpecAuthorizationKafkaAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectCluster = undefined;
      this._host = undefined;
      this._name = undefined;
      this._operations = undefined;
      this._patternType = undefined;
      this._permission = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectCluster = value.connectCluster;
      this._host = value.host;
      this._name = value.name;
      this._operations = value.operations;
      this._patternType = value.patternType;
      this._permission = value.permission;
      this._type = value.type;
    }
  }

  // connect_cluster - computed: false, optional: true, required: false
  private _connectCluster?: string; 
  public get connectCluster() {
    return this.getStringAttribute('connect_cluster');
  }
  public set connectCluster(value: string) {
    this._connectCluster = value;
  }
  public resetConnectCluster() {
    this._connectCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectClusterInput() {
    return this._connectCluster;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // pattern_type - computed: false, optional: false, required: true
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
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
}

export class ConsoleServiceAccountV1SpecAuthorizationKafkaAclsList extends cdktf.ComplexList {
  public internalValue? : ConsoleServiceAccountV1SpecAuthorizationKafkaAcls[] | cdktf.IResolvable

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
  public get(index: number): ConsoleServiceAccountV1SpecAuthorizationKafkaAclsOutputReference {
    return new ConsoleServiceAccountV1SpecAuthorizationKafkaAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsoleServiceAccountV1SpecAuthorizationKafka {
  /**
  * Set of the Kafka ACLs to apply on the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#acls ConsoleServiceAccountV1#acls}
  */
  readonly acls: ConsoleServiceAccountV1SpecAuthorizationKafkaAcls[] | cdktf.IResolvable;
}

export function consoleServiceAccountV1SpecAuthorizationKafkaToTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acls: cdktf.listMapper(consoleServiceAccountV1SpecAuthorizationKafkaAclsToTerraform, false)(struct!.acls),
  }
}


export function consoleServiceAccountV1SpecAuthorizationKafkaToHclTerraform(struct?: ConsoleServiceAccountV1SpecAuthorizationKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acls: {
      value: cdktf.listMapperHcl(consoleServiceAccountV1SpecAuthorizationKafkaAclsToHclTerraform, false)(struct!.acls),
      isBlock: true,
      type: "set",
      storageClassType: "ConsoleServiceAccountV1SpecAuthorizationKafkaAclsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleServiceAccountV1SpecAuthorizationKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleServiceAccountV1SpecAuthorizationKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleServiceAccountV1SpecAuthorizationKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acls.internalValue = value.acls;
    }
  }

  // acls - computed: false, optional: false, required: true
  private _acls = new ConsoleServiceAccountV1SpecAuthorizationKafkaAclsList(this, "acls", true);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: ConsoleServiceAccountV1SpecAuthorizationKafkaAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }
}
export interface ConsoleServiceAccountV1SpecAuthorization {
  /**
  * Aiven type authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#aiven ConsoleServiceAccountV1#aiven}
  */
  readonly aiven?: ConsoleServiceAccountV1SpecAuthorizationAiven;
  /**
  * Kafka type authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#kafka ConsoleServiceAccountV1#kafka}
  */
  readonly kafka?: ConsoleServiceAccountV1SpecAuthorizationKafka;
}

export function consoleServiceAccountV1SpecAuthorizationToTerraform(struct?: ConsoleServiceAccountV1SpecAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aiven: consoleServiceAccountV1SpecAuthorizationAivenToTerraform(struct!.aiven),
    kafka: consoleServiceAccountV1SpecAuthorizationKafkaToTerraform(struct!.kafka),
  }
}


export function consoleServiceAccountV1SpecAuthorizationToHclTerraform(struct?: ConsoleServiceAccountV1SpecAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aiven: {
      value: consoleServiceAccountV1SpecAuthorizationAivenToHclTerraform(struct!.aiven),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleServiceAccountV1SpecAuthorizationAiven",
    },
    kafka: {
      value: consoleServiceAccountV1SpecAuthorizationKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleServiceAccountV1SpecAuthorizationKafka",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleServiceAccountV1SpecAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleServiceAccountV1SpecAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiven = this._aiven?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleServiceAccountV1SpecAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiven.internalValue = undefined;
      this._kafka.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiven.internalValue = value.aiven;
      this._kafka.internalValue = value.kafka;
    }
  }

  // aiven - computed: false, optional: true, required: false
  private _aiven = new ConsoleServiceAccountV1SpecAuthorizationAivenOutputReference(this, "aiven");
  public get aiven() {
    return this._aiven;
  }
  public putAiven(value: ConsoleServiceAccountV1SpecAuthorizationAiven) {
    this._aiven.internalValue = value;
  }
  public resetAiven() {
    this._aiven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aivenInput() {
    return this._aiven.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new ConsoleServiceAccountV1SpecAuthorizationKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ConsoleServiceAccountV1SpecAuthorizationKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }
}
export interface ConsoleServiceAccountV1Spec {
  /**
  * Service Account authorization. One of `aiven`, `kafka`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#authorization ConsoleServiceAccountV1#authorization}
  */
  readonly authorization: ConsoleServiceAccountV1SpecAuthorization;
}

export function consoleServiceAccountV1SpecToTerraform(struct?: ConsoleServiceAccountV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: consoleServiceAccountV1SpecAuthorizationToTerraform(struct!.authorization),
  }
}


export function consoleServiceAccountV1SpecToHclTerraform(struct?: ConsoleServiceAccountV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: consoleServiceAccountV1SpecAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleServiceAccountV1SpecAuthorization",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleServiceAccountV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleServiceAccountV1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleServiceAccountV1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization.internalValue = value.authorization;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new ConsoleServiceAccountV1SpecAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ConsoleServiceAccountV1SpecAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1 conduktor_console_service_account_v1}
*/
export class ConsoleServiceAccountV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_service_account_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleServiceAccountV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleServiceAccountV1 to import
  * @param importFromId The id of the existing ConsoleServiceAccountV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleServiceAccountV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_service_account_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_service_account_v1 conduktor_console_service_account_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleServiceAccountV1Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleServiceAccountV1Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_service_account_v1',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appInstance = config.appInstance;
    this._cluster = config.cluster;
    this._labels = config.labels;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_instance - computed: false, optional: true, required: false
  private _appInstance?: string; 
  public get appInstance() {
    return this.getStringAttribute('app_instance');
  }
  public set appInstance(value: string) {
    this._appInstance = value;
  }
  public resetAppInstance() {
    this._appInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstanceInput() {
    return this._appInstance;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleServiceAccountV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleServiceAccountV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_instance: cdktf.stringToTerraform(this._appInstance),
      cluster: cdktf.stringToTerraform(this._cluster),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleServiceAccountV1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_instance: {
        value: cdktf.stringToHclTerraform(this._appInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: consoleServiceAccountV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleServiceAccountV1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
