// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaClusterSearchV2Config extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#cluster_id DataInstaclustrKafkaClusterSearchV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#id DataInstaclustrKafkaClusterSearchV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#kafka_cluster_id DataInstaclustrKafkaClusterSearchV2#kafka_cluster_id}
  */
  readonly kafkaClusterId: string;
  /**
  * acl_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#acl_lists DataInstaclustrKafkaClusterSearchV2#acl_lists}
  */
  readonly aclLists?: DataInstaclustrKafkaClusterSearchV2AclLists[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#filter DataInstaclustrKafkaClusterSearchV2#filter}
  */
  readonly filter?: DataInstaclustrKafkaClusterSearchV2Filter[] | cdktf.IResolvable;
}
export interface DataInstaclustrKafkaClusterSearchV2AclListsAcl {
  /**
  * The IP address to which this ACL applies. It takes any string including the wildcard `*` for all IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#host DataInstaclustrKafkaClusterSearchV2#host}
  */
  readonly host?: string;
  /**
  * The operation that will be allowed or denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#operation DataInstaclustrKafkaClusterSearchV2#operation}
  */
  readonly operation?: string;
  /**
  * Indicates the resource-pattern-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#pattern_type DataInstaclustrKafkaClusterSearchV2#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Specifies whether to allow or deny the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#permission_type DataInstaclustrKafkaClusterSearchV2#permission_type}
  */
  readonly permissionType?: string;
  /**
  * Specifies the users(s) for which this ACL applies and can include the wildcard `*`. Valid values must start with "User:" including the wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#principal DataInstaclustrKafkaClusterSearchV2#principal}
  */
  readonly principal?: string;
  /**
  * Any string that fits the resource name, e.g. topic name if the resource type is TOPIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#resource_name DataInstaclustrKafkaClusterSearchV2#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Specifies the type of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#resource_type DataInstaclustrKafkaClusterSearchV2#resource_type}
  */
  readonly resourceType?: string;
}

export function dataInstaclustrKafkaClusterSearchV2AclListsAclToTerraform(struct?: DataInstaclustrKafkaClusterSearchV2AclListsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    operation: cdktf.stringToTerraform(struct!.operation),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    permission_type: cdktf.stringToTerraform(struct!.permissionType),
    principal: cdktf.stringToTerraform(struct!.principal),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function dataInstaclustrKafkaClusterSearchV2AclListsAclToHclTerraform(struct?: DataInstaclustrKafkaClusterSearchV2AclListsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_type: {
      value: cdktf.stringToHclTerraform(struct!.permissionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
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

export class DataInstaclustrKafkaClusterSearchV2AclListsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaClusterSearchV2AclListsAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._permissionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionType = this._permissionType;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterSearchV2AclListsAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._operation = undefined;
      this._patternType = undefined;
      this._permissionType = undefined;
      this._principal = undefined;
      this._resourceName = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._operation = value.operation;
      this._patternType = value.patternType;
      this._permissionType = value.permissionType;
      this._principal = value.principal;
      this._resourceName = value.resourceName;
      this._resourceType = value.resourceType;
    }
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

  // operation - computed: true, optional: true, required: false
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

  // pattern_type - computed: true, optional: true, required: false
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  public resetPatternType() {
    this._patternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // permission_type - computed: true, optional: true, required: false
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  public resetPermissionType() {
    this._permissionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource_name - computed: true, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class DataInstaclustrKafkaClusterSearchV2AclListsAclList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterSearchV2AclListsAcl[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterSearchV2AclListsAclOutputReference {
    return new DataInstaclustrKafkaClusterSearchV2AclListsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterSearchV2AclLists {
  /**
  * UUID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#cluster_id DataInstaclustrKafkaClusterSearchV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Instaclustr identifier for the ACL list for a principal. The value of this property has the form: [clusterId]_[principalUserQuery]
  * The user query is the principal value without the leading `User:`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#id DataInstaclustrKafkaClusterSearchV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This is the principal without the `User:` prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#user_query DataInstaclustrKafkaClusterSearchV2#user_query}
  */
  readonly userQuery?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#acl DataInstaclustrKafkaClusterSearchV2#acl}
  */
  readonly acl?: DataInstaclustrKafkaClusterSearchV2AclListsAcl[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaClusterSearchV2AclListsToTerraform(struct?: DataInstaclustrKafkaClusterSearchV2AclLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    id: cdktf.stringToTerraform(struct!.id),
    user_query: cdktf.stringToTerraform(struct!.userQuery),
    acl: cdktf.listMapper(dataInstaclustrKafkaClusterSearchV2AclListsAclToTerraform, true)(struct!.acl),
  }
}


export function dataInstaclustrKafkaClusterSearchV2AclListsToHclTerraform(struct?: DataInstaclustrKafkaClusterSearchV2AclLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_query: {
      value: cdktf.stringToHclTerraform(struct!.userQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterSearchV2AclListsAclToHclTerraform, true)(struct!.acl),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterSearchV2AclListsAclList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterSearchV2AclListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaClusterSearchV2AclLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._userQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuery = this._userQuery;
    }
    if (this._acl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterSearchV2AclLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._id = undefined;
      this._userQuery = undefined;
      this._acl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._id = value.id;
      this._userQuery = value.userQuery;
      this._acl.internalValue = value.acl;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // user_query - computed: true, optional: true, required: false
  private _userQuery?: string; 
  public get userQuery() {
    return this.getStringAttribute('user_query');
  }
  public set userQuery(value: string) {
    this._userQuery = value;
  }
  public resetUserQuery() {
    this._userQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQueryInput() {
    return this._userQuery;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new DataInstaclustrKafkaClusterSearchV2AclListsAclList(this, "acl", false);
  public get acl() {
    return this._acl;
  }
  public putAcl(value: DataInstaclustrKafkaClusterSearchV2AclListsAcl[] | cdktf.IResolvable) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }
}

export class DataInstaclustrKafkaClusterSearchV2AclListsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterSearchV2AclLists[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterSearchV2AclListsOutputReference {
    return new DataInstaclustrKafkaClusterSearchV2AclListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterSearchV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#name DataInstaclustrKafkaClusterSearchV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#values DataInstaclustrKafkaClusterSearchV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrKafkaClusterSearchV2FilterToTerraform(struct?: DataInstaclustrKafkaClusterSearchV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrKafkaClusterSearchV2FilterToHclTerraform(struct?: DataInstaclustrKafkaClusterSearchV2Filter | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterSearchV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaClusterSearchV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterSearchV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrKafkaClusterSearchV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterSearchV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterSearchV2FilterOutputReference {
    return new DataInstaclustrKafkaClusterSearchV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2 instaclustr_kafka_cluster_search_v2}
*/
export class DataInstaclustrKafkaClusterSearchV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_cluster_search_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaClusterSearchV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaClusterSearchV2 to import
  * @param importFromId The id of the existing DataInstaclustrKafkaClusterSearchV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaClusterSearchV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_cluster_search_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/kafka_cluster_search_v2 instaclustr_kafka_cluster_search_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaClusterSearchV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaClusterSearchV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_cluster_search_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.36',
        providerVersionConstraint: '2.1.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._kafkaClusterId = config.kafkaClusterId;
    this._aclLists.internalValue = config.aclLists;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // kafka_cluster_id - computed: false, optional: false, required: true
  private _kafkaClusterId?: string; 
  public get kafkaClusterId() {
    return this.getStringAttribute('kafka_cluster_id');
  }
  public set kafkaClusterId(value: string) {
    this._kafkaClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterIdInput() {
    return this._kafkaClusterId;
  }

  // acl_lists - computed: false, optional: true, required: false
  private _aclLists = new DataInstaclustrKafkaClusterSearchV2AclListsList(this, "acl_lists", false);
  public get aclLists() {
    return this._aclLists;
  }
  public putAclLists(value: DataInstaclustrKafkaClusterSearchV2AclLists[] | cdktf.IResolvable) {
    this._aclLists.internalValue = value;
  }
  public resetAclLists() {
    this._aclLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclListsInput() {
    return this._aclLists.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrKafkaClusterSearchV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrKafkaClusterSearchV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      kafka_cluster_id: cdktf.stringToTerraform(this._kafkaClusterId),
      acl_lists: cdktf.listMapper(dataInstaclustrKafkaClusterSearchV2AclListsToTerraform, true)(this._aclLists.internalValue),
      filter: cdktf.listMapper(dataInstaclustrKafkaClusterSearchV2FilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      kafka_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kafkaClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_lists: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterSearchV2AclListsToHclTerraform, true)(this._aclLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterSearchV2AclListsList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterSearchV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrKafkaClusterSearchV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
