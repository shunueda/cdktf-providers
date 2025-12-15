// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaAclV2Config extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#cluster_id KafkaAclV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#id KafkaAclV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This is the principal without the `User:` prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#user_query KafkaAclV2#user_query}
  */
  readonly userQuery: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#acl KafkaAclV2#acl}
  */
  readonly acl: KafkaAclV2Acl[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#timeouts KafkaAclV2#timeouts}
  */
  readonly timeouts?: KafkaAclV2Timeouts;
}
export interface KafkaAclV2Acl {
  /**
  * The IP address to which this ACL applies. It takes any string including the wildcard `*` for all IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#host KafkaAclV2#host}
  */
  readonly host: string;
  /**
  * The operation that will be allowed or denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#operation KafkaAclV2#operation}
  */
  readonly operation: string;
  /**
  * Indicates the resource-pattern-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#pattern_type KafkaAclV2#pattern_type}
  */
  readonly patternType: string;
  /**
  * Specifies whether to allow or deny the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#permission_type KafkaAclV2#permission_type}
  */
  readonly permissionType: string;
  /**
  * Specifies the users(s) for which this ACL applies and can include the wildcard `*`. Valid values must start with "User:" including the wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#principal KafkaAclV2#principal}
  */
  readonly principal: string;
  /**
  * Any string that fits the resource name, e.g. topic name if the resource type is TOPIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#resource_name KafkaAclV2#resource_name}
  */
  readonly resourceName: string;
  /**
  * Specifies the type of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#resource_type KafkaAclV2#resource_type}
  */
  readonly resourceType: string;
}

export function kafkaAclV2AclToTerraform(struct?: KafkaAclV2Acl | cdktf.IResolvable): any {
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


export function kafkaAclV2AclToHclTerraform(struct?: KafkaAclV2Acl | cdktf.IResolvable): any {
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

export class KafkaAclV2AclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaAclV2Acl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaAclV2Acl | cdktf.IResolvable | undefined) {
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

  // permission_type - computed: false, optional: false, required: true
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
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

export class KafkaAclV2AclList extends cdktf.ComplexList {
  public internalValue? : KafkaAclV2Acl[] | cdktf.IResolvable

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
  public get(index: number): KafkaAclV2AclOutputReference {
    return new KafkaAclV2AclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaAclV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#default KafkaAclV2#default}
  */
  readonly default?: string;
}

export function kafkaAclV2TimeoutsToTerraform(struct?: KafkaAclV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function kafkaAclV2TimeoutsToHclTerraform(struct?: KafkaAclV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaAclV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaAclV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaAclV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2 instaclustr_kafka_acl_v2}
*/
export class KafkaAclV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_acl_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaAclV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaAclV2 to import
  * @param importFromId The id of the existing KafkaAclV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaAclV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_acl_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/kafka_acl_v2 instaclustr_kafka_acl_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaAclV2Config
  */
  public constructor(scope: Construct, id: string, config: KafkaAclV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_acl_v2',
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
    this._userQuery = config.userQuery;
    this._acl.internalValue = config.acl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
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

  // user_query - computed: false, optional: false, required: true
  private _userQuery?: string; 
  public get userQuery() {
    return this.getStringAttribute('user_query');
  }
  public set userQuery(value: string) {
    this._userQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userQueryInput() {
    return this._userQuery;
  }

  // acl - computed: false, optional: false, required: true
  private _acl = new KafkaAclV2AclList(this, "acl", false);
  public get acl() {
    return this._acl;
  }
  public putAcl(value: KafkaAclV2Acl[] | cdktf.IResolvable) {
    this._acl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaAclV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaAclV2Timeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      user_query: cdktf.stringToTerraform(this._userQuery),
      acl: cdktf.listMapper(kafkaAclV2AclToTerraform, true)(this._acl.internalValue),
      timeouts: kafkaAclV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      user_query: {
        value: cdktf.stringToHclTerraform(this._userQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: cdktf.listMapperHcl(kafkaAclV2AclToHclTerraform, true)(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaAclV2AclList",
      },
      timeouts: {
        value: kafkaAclV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaAclV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
