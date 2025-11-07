// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleUserV2Config extends cdktf.TerraformMetaArguments {
  /**
  * User email, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#name ConsoleUserV2#name}
  */
  readonly name: string;
  /**
  * User specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#spec ConsoleUserV2#spec}
  */
  readonly spec: ConsoleUserV2Spec;
}
export interface ConsoleUserV2SpecPermissions {
  /**
  * Name of the cluster to apply permission, only required if resource_type is TOPIC, SUBJECT, CONSUMER_GROUP, KAFKA_CONNECT, KSQLDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#cluster ConsoleUserV2#cluster}
  */
  readonly cluster?: string;
  /**
  * Name of the Kafka Connect to apply permission, only required if resource_type is KAFKA_CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#kafka_connect ConsoleUserV2#kafka_connect}
  */
  readonly kafkaConnect?: string;
  /**
  * Name of a valid Kafka Connect cluster, only required if resource_type is KSQLDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#ksqldb ConsoleUserV2#ksqldb}
  */
  readonly ksqldb?: string;
  /**
  * Name of the resource to apply permission to could be a topic, a cluster, a consumer group, etc. depending on resource_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#name ConsoleUserV2#name}
  */
  readonly name?: string;
  /**
  * Type of the pattern to apply permission on valid values are: LITERAL, PREFIXED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#pattern_type ConsoleUserV2#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Set of all permissions to apply on the resource. See https://docs.conduktor.io/platform/reference/resource-reference/console/#permissions for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#permissions ConsoleUserV2#permissions}
  */
  readonly permissions: string[];
  /**
  * Type of the resource to apply permission on valid values are: CLUSTER, CONSUMER_GROUP, KAFKA_CONNECT, KSQLDB, PLATFORM, SUBJECT, TOPIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#resource_type ConsoleUserV2#resource_type}
  */
  readonly resourceType: string;
}

export function consoleUserV2SpecPermissionsToTerraform(struct?: ConsoleUserV2SpecPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    kafka_connect: cdktf.stringToTerraform(struct!.kafkaConnect),
    ksqldb: cdktf.stringToTerraform(struct!.ksqldb),
    name: cdktf.stringToTerraform(struct!.name),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function consoleUserV2SpecPermissionsToHclTerraform(struct?: ConsoleUserV2SpecPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_connect: {
      value: cdktf.stringToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ksqldb: {
      value: cdktf.stringToHclTerraform(struct!.ksqldb),
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
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ConsoleUserV2SpecPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsoleUserV2SpecPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._ksqldb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ksqldb = this._ksqldb;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleUserV2SpecPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._kafkaConnect = undefined;
      this._ksqldb = undefined;
      this._name = undefined;
      this._patternType = undefined;
      this._permissions = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._kafkaConnect = value.kafkaConnect;
      this._ksqldb = value.ksqldb;
      this._name = value.name;
      this._patternType = value.patternType;
      this._permissions = value.permissions;
      this._resourceType = value.resourceType;
    }
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // kafka_connect - computed: true, optional: true, required: false
  private _kafkaConnect?: string; 
  public get kafkaConnect() {
    return this.getStringAttribute('kafka_connect');
  }
  public set kafkaConnect(value: string) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // ksqldb - computed: true, optional: true, required: false
  private _ksqldb?: string; 
  public get ksqldb() {
    return this.getStringAttribute('ksqldb');
  }
  public set ksqldb(value: string) {
    this._ksqldb = value;
  }
  public resetKsqldb() {
    this._ksqldb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ksqldbInput() {
    return this._ksqldb;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // permissions - computed: true, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // resource_type - computed: true, optional: false, required: true
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

export class ConsoleUserV2SpecPermissionsList extends cdktf.ComplexList {
  public internalValue? : ConsoleUserV2SpecPermissions[] | cdktf.IResolvable

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
  public get(index: number): ConsoleUserV2SpecPermissionsOutputReference {
    return new ConsoleUserV2SpecPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsoleUserV2Spec {
  /**
  * User firstname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#firstname ConsoleUserV2#firstname}
  */
  readonly firstname?: string;
  /**
  * User lastname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#lastname ConsoleUserV2#lastname}
  */
  readonly lastname?: string;
  /**
  * Set of all user permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#permissions ConsoleUserV2#permissions}
  */
  readonly permissions?: ConsoleUserV2SpecPermissions[] | cdktf.IResolvable;
}

export function consoleUserV2SpecToTerraform(struct?: ConsoleUserV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firstname: cdktf.stringToTerraform(struct!.firstname),
    lastname: cdktf.stringToTerraform(struct!.lastname),
    permissions: cdktf.listMapper(consoleUserV2SpecPermissionsToTerraform, false)(struct!.permissions),
  }
}


export function consoleUserV2SpecToHclTerraform(struct?: ConsoleUserV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firstname: {
      value: cdktf.stringToHclTerraform(struct!.firstname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastname: {
      value: cdktf.stringToHclTerraform(struct!.lastname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.listMapperHcl(consoleUserV2SpecPermissionsToHclTerraform, false)(struct!.permissions),
      isBlock: true,
      type: "set",
      storageClassType: "ConsoleUserV2SpecPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleUserV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleUserV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstname !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstname = this._firstname;
    }
    if (this._lastname !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastname = this._lastname;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleUserV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstname = undefined;
      this._lastname = undefined;
      this._permissions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstname = value.firstname;
      this._lastname = value.lastname;
      this._permissions.internalValue = value.permissions;
    }
  }

  // firstname - computed: false, optional: true, required: false
  private _firstname?: string; 
  public get firstname() {
    return this.getStringAttribute('firstname');
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  public resetFirstname() {
    this._firstname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameInput() {
    return this._firstname;
  }

  // lastname - computed: false, optional: true, required: false
  private _lastname?: string; 
  public get lastname() {
    return this.getStringAttribute('lastname');
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
  public resetLastname() {
    this._lastname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameInput() {
    return this._lastname;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions = new ConsoleUserV2SpecPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: ConsoleUserV2SpecPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2 conduktor_console_user_v2}
*/
export class ConsoleUserV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_user_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleUserV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleUserV2 to import
  * @param importFromId The id of the existing ConsoleUserV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleUserV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_user_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_user_v2 conduktor_console_user_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleUserV2Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleUserV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_user_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _spec = new ConsoleUserV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleUserV2Spec) {
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
      name: cdktf.stringToTerraform(this._name),
      spec: consoleUserV2SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: consoleUserV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleUserV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
