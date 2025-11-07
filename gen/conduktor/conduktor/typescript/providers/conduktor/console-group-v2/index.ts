// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleGroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Group name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#name ConsoleGroupV2#name}
  */
  readonly name: string;
  /**
  * Group specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#spec ConsoleGroupV2#spec}
  */
  readonly spec: ConsoleGroupV2Spec;
}
export interface ConsoleGroupV2SpecPermissions {
  /**
  * Name of the cluster to apply permission, only required if resource_type is TOPIC, SUBJECT, CONSUMER_GROUP, KAFKA_CONNECT, KSQLDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#cluster ConsoleGroupV2#cluster}
  */
  readonly cluster?: string;
  /**
  * Name of the Kafka Connect to apply permission, only required if resource_type is KAFKA_CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#kafka_connect ConsoleGroupV2#kafka_connect}
  */
  readonly kafkaConnect?: string;
  /**
  * Name of a valid Kafka Connect cluster, only required if resource_type is KSQLDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#ksqldb ConsoleGroupV2#ksqldb}
  */
  readonly ksqldb?: string;
  /**
  * Name of the resource to apply permission could be a topic, a cluster, a consumer group, etc. depending on resource_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#name ConsoleGroupV2#name}
  */
  readonly name?: string;
  /**
  * Type of the pattern to apply permission on valid values are: LITERAL, PREFIXED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#pattern_type ConsoleGroupV2#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Set of all permissions to apply on the resource. See https://docs.conduktor.io/platform/reference/resource-reference/console/#permissions for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#permissions ConsoleGroupV2#permissions}
  */
  readonly permissions: string[];
  /**
  * Type of the resource to apply permission on valid values are: CLUSTER, CONSUMER_GROUP, KAFKA_CONNECT, KSQLDB, PLATFORM, SUBJECT, TOPIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#resource_type ConsoleGroupV2#resource_type}
  */
  readonly resourceType: string;
}

export function consoleGroupV2SpecPermissionsToTerraform(struct?: ConsoleGroupV2SpecPermissions | cdktf.IResolvable): any {
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


export function consoleGroupV2SpecPermissionsToHclTerraform(struct?: ConsoleGroupV2SpecPermissions | cdktf.IResolvable): any {
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

export class ConsoleGroupV2SpecPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsoleGroupV2SpecPermissions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConsoleGroupV2SpecPermissions | cdktf.IResolvable | undefined) {
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

export class ConsoleGroupV2SpecPermissionsList extends cdktf.ComplexList {
  public internalValue? : ConsoleGroupV2SpecPermissions[] | cdktf.IResolvable

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
  public get(index: number): ConsoleGroupV2SpecPermissionsOutputReference {
    return new ConsoleGroupV2SpecPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsoleGroupV2Spec {
  /**
  * Group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#description ConsoleGroupV2#description}
  */
  readonly description?: string;
  /**
  * Group display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#display_name ConsoleGroupV2#display_name}
  */
  readonly displayName: string;
  /**
  * Set of regex to be applied to external groups. NOTE: this field has been introduced with Console `1.36.0` and it will not work with previous versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#external_group_regex ConsoleGroupV2#external_group_regex}
  */
  readonly externalGroupRegex?: string[];
  /**
  * Set of external groups from SSO mapped to this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#external_groups ConsoleGroupV2#external_groups}
  */
  readonly externalGroups?: string[];
  /**
  * Set of members of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#members ConsoleGroupV2#members}
  */
  readonly members?: string[];
  /**
  * Set of all group permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#permissions ConsoleGroupV2#permissions}
  */
  readonly permissions?: ConsoleGroupV2SpecPermissions[] | cdktf.IResolvable;
}

export function consoleGroupV2SpecToTerraform(struct?: ConsoleGroupV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    external_group_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalGroupRegex),
    external_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalGroups),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    permissions: cdktf.listMapper(consoleGroupV2SpecPermissionsToTerraform, false)(struct!.permissions),
  }
}


export function consoleGroupV2SpecToHclTerraform(struct?: ConsoleGroupV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_group_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalGroupRegex),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    external_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.listMapperHcl(consoleGroupV2SpecPermissionsToHclTerraform, false)(struct!.permissions),
      isBlock: true,
      type: "set",
      storageClassType: "ConsoleGroupV2SpecPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleGroupV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleGroupV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._externalGroupRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalGroupRegex = this._externalGroupRegex;
    }
    if (this._externalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalGroups = this._externalGroups;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleGroupV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._externalGroupRegex = undefined;
      this._externalGroups = undefined;
      this._members = undefined;
      this._permissions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._externalGroupRegex = value.externalGroupRegex;
      this._externalGroups = value.externalGroups;
      this._members = value.members;
      this._permissions.internalValue = value.permissions;
    }
  }

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_group_regex - computed: true, optional: true, required: false
  private _externalGroupRegex?: string[]; 
  public get externalGroupRegex() {
    return cdktf.Fn.tolist(this.getListAttribute('external_group_regex'));
  }
  public set externalGroupRegex(value: string[]) {
    this._externalGroupRegex = value;
  }
  public resetExternalGroupRegex() {
    this._externalGroupRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGroupRegexInput() {
    return this._externalGroupRegex;
  }

  // external_groups - computed: true, optional: true, required: false
  private _externalGroups?: string[]; 
  public get externalGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('external_groups'));
  }
  public set externalGroups(value: string[]) {
    this._externalGroups = value;
  }
  public resetExternalGroups() {
    this._externalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGroupsInput() {
    return this._externalGroups;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // members_from_external_groups - computed: true, optional: false, required: false
  public get membersFromExternalGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('members_from_external_groups'));
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions = new ConsoleGroupV2SpecPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: ConsoleGroupV2SpecPermissions[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2 conduktor_console_group_v2}
*/
export class ConsoleGroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_group_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleGroupV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleGroupV2 to import
  * @param importFromId The id of the existing ConsoleGroupV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleGroupV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_group_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_group_v2 conduktor_console_group_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleGroupV2Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleGroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_group_v2',
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
  private _spec = new ConsoleGroupV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleGroupV2Spec) {
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
      spec: consoleGroupV2SpecToTerraform(this._spec.internalValue),
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
        value: consoleGroupV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleGroupV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
