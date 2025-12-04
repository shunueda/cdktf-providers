// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayVirtualClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The name of the virtual cluster, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#name GatewayVirtualClusterV2#name}
  */
  readonly name: string;
  /**
  * Virtual Cluster specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#spec GatewayVirtualClusterV2#spec}
  */
  readonly spec: GatewayVirtualClusterV2Spec;
}
export interface GatewayVirtualClusterV2SpecAclsResourcePattern {
  /**
  * The name or pattern matching the name associated with the resource. Wildcards (e.g. `*`) are supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#name GatewayVirtualClusterV2#name}
  */
  readonly name: string;
  /**
  * Type of the pattern to apply ACL on. Valid values are: `ANY`, `LITERAL`, `MATCH`, `PREFIXED`, `UNKNOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#pattern_type GatewayVirtualClusterV2#pattern_type}
  */
  readonly patternType: string;
  /**
  * Type of the resource to apply ACL on. Valid values are: `ANY`, `CLUSTER`, `DELEGATION_TOKEN`, `GROUP`, `TOPIC`, `TRANSACTIONAL_ID`, `UNKNOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#resource_type GatewayVirtualClusterV2#resource_type}
  */
  readonly resourceType: string;
}

export function gatewayVirtualClusterV2SpecAclsResourcePatternToTerraform(struct?: GatewayVirtualClusterV2SpecAclsResourcePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function gatewayVirtualClusterV2SpecAclsResourcePatternToHclTerraform(struct?: GatewayVirtualClusterV2SpecAclsResourcePattern): any {
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
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
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

export class GatewayVirtualClusterV2SpecAclsResourcePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayVirtualClusterV2SpecAclsResourcePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayVirtualClusterV2SpecAclsResourcePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._patternType = undefined;
      this._resourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._patternType = value.patternType;
      this._resourceType = value.resourceType;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // pattern_type - computed: true, optional: false, required: true
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
export interface GatewayVirtualClusterV2SpecAcls {
  /**
  * Host of the ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#host GatewayVirtualClusterV2#host}
  */
  readonly host: string;
  /**
  * Set of all operations to apply on the resource. Valid values are: `ALL`, `ALTER`, `ALTER_CONFIGS`, `CLUSTER_ACTION`, `CREATE`, `CREATE_TOKENS`, `DELETE`, `DESCRIBE`, `DESCRIBE_CONFIGS`, `DESCRIBE_TOKENS`, `IDEMPOTENT_WRITE`, `READ`, `UNKNOWN`, `WRITE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#operation GatewayVirtualClusterV2#operation}
  */
  readonly operation: string;
  /**
  * Permission Type for Access Control Entry. Valid values are: ALLOW, DENY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#permission_type GatewayVirtualClusterV2#permission_type}
  */
  readonly permissionType: string;
  /**
  * Who or what the ACL applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#principal GatewayVirtualClusterV2#principal}
  */
  readonly principal: string;
  /**
  * The resource pattern to apply the ACL to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#resource_pattern GatewayVirtualClusterV2#resource_pattern}
  */
  readonly resourcePattern: GatewayVirtualClusterV2SpecAclsResourcePattern;
}

export function gatewayVirtualClusterV2SpecAclsToTerraform(struct?: GatewayVirtualClusterV2SpecAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    operation: cdktf.stringToTerraform(struct!.operation),
    permission_type: cdktf.stringToTerraform(struct!.permissionType),
    principal: cdktf.stringToTerraform(struct!.principal),
    resource_pattern: gatewayVirtualClusterV2SpecAclsResourcePatternToTerraform(struct!.resourcePattern),
  }
}


export function gatewayVirtualClusterV2SpecAclsToHclTerraform(struct?: GatewayVirtualClusterV2SpecAcls | cdktf.IResolvable): any {
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
    resource_pattern: {
      value: gatewayVirtualClusterV2SpecAclsResourcePatternToHclTerraform(struct!.resourcePattern),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayVirtualClusterV2SpecAclsResourcePattern",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayVirtualClusterV2SpecAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayVirtualClusterV2SpecAcls | cdktf.IResolvable | undefined {
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
    if (this._permissionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionType = this._permissionType;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resourcePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePattern = this._resourcePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayVirtualClusterV2SpecAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._operation = undefined;
      this._permissionType = undefined;
      this._principal = undefined;
      this._resourcePattern.internalValue = undefined;
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
      this._permissionType = value.permissionType;
      this._principal = value.principal;
      this._resourcePattern.internalValue = value.resourcePattern;
    }
  }

  // host - computed: true, optional: false, required: true
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

  // operation - computed: true, optional: false, required: true
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

  // permission_type - computed: true, optional: false, required: true
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

  // principal - computed: true, optional: false, required: true
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

  // resource_pattern - computed: true, optional: false, required: true
  private _resourcePattern = new GatewayVirtualClusterV2SpecAclsResourcePatternOutputReference(this, "resource_pattern");
  public get resourcePattern() {
    return this._resourcePattern;
  }
  public putResourcePattern(value: GatewayVirtualClusterV2SpecAclsResourcePattern) {
    this._resourcePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePatternInput() {
    return this._resourcePattern.internalValue;
  }
}

export class GatewayVirtualClusterV2SpecAclsList extends cdktf.ComplexList {
  public internalValue? : GatewayVirtualClusterV2SpecAcls[] | cdktf.IResolvable

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
  public get(index: number): GatewayVirtualClusterV2SpecAclsOutputReference {
    return new GatewayVirtualClusterV2SpecAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayVirtualClusterV2Spec {
  /**
  * Enable ACL checks on all Kafka API calls to this virtual cluster. Depending on the value of the `acl_mode` field, acls are required to be set in different ways. See the `acl_mode` field for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#acl_enabled GatewayVirtualClusterV2#acl_enabled}
  */
  readonly aclEnabled?: boolean | cdktf.IResolvable;
  /**
  * The mode defines how the ACLs will be managed on the virtual cluster. Can only be either `KAFKA_API` or `REST_API`. See [documentation](https://docs.conduktor.io/guide/reference/gateway-reference#virtualcluster) for more information. NOTE: this field has been introduced with Gateway `3.11.0` and it will not work with previous versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#acl_mode GatewayVirtualClusterV2#acl_mode}
  */
  readonly aclMode?: string;
  /**
  * List of ACL bindings for the virtual cluster. Only required if `spec.acl_mode` is set to `REST_API`. See [documentation](https://docs.conduktor.io/guide/reference/gateway-reference#virtualcluster) for more information. NOTE: this field has been introduced with Gateway `3.11.0` and it will not work with previous versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#acls GatewayVirtualClusterV2#acls}
  */
  readonly acls?: GatewayVirtualClusterV2SpecAcls[] | cdktf.IResolvable;
  /**
  * List of usernames for which the associated service accounts in this virtual cluster can bypass ACLs. Required only if `spec.acl_mode` is set to `KAFKA_API`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#super_users GatewayVirtualClusterV2#super_users}
  */
  readonly superUsers?: string[];
  /**
  * The type of the virtual cluster. Can only be either `Standard` or `Partner`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#type GatewayVirtualClusterV2#type}
  */
  readonly type?: string;
}

export function gatewayVirtualClusterV2SpecToTerraform(struct?: GatewayVirtualClusterV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_enabled: cdktf.booleanToTerraform(struct!.aclEnabled),
    acl_mode: cdktf.stringToTerraform(struct!.aclMode),
    acls: cdktf.listMapper(gatewayVirtualClusterV2SpecAclsToTerraform, false)(struct!.acls),
    super_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.superUsers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayVirtualClusterV2SpecToHclTerraform(struct?: GatewayVirtualClusterV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aclEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    acl_mode: {
      value: cdktf.stringToHclTerraform(struct!.aclMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acls: {
      value: cdktf.listMapperHcl(gatewayVirtualClusterV2SpecAclsToHclTerraform, false)(struct!.acls),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayVirtualClusterV2SpecAclsList",
    },
    super_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.superUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class GatewayVirtualClusterV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayVirtualClusterV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclEnabled = this._aclEnabled;
    }
    if (this._aclMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclMode = this._aclMode;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    if (this._superUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.superUsers = this._superUsers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayVirtualClusterV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclEnabled = undefined;
      this._aclMode = undefined;
      this._acls.internalValue = undefined;
      this._superUsers = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclEnabled = value.aclEnabled;
      this._aclMode = value.aclMode;
      this._acls.internalValue = value.acls;
      this._superUsers = value.superUsers;
      this._type = value.type;
    }
  }

  // acl_enabled - computed: true, optional: true, required: false
  private _aclEnabled?: boolean | cdktf.IResolvable; 
  public get aclEnabled() {
    return this.getBooleanAttribute('acl_enabled');
  }
  public set aclEnabled(value: boolean | cdktf.IResolvable) {
    this._aclEnabled = value;
  }
  public resetAclEnabled() {
    this._aclEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEnabledInput() {
    return this._aclEnabled;
  }

  // acl_mode - computed: false, optional: true, required: false
  private _aclMode?: string; 
  public get aclMode() {
    return this.getStringAttribute('acl_mode');
  }
  public set aclMode(value: string) {
    this._aclMode = value;
  }
  public resetAclMode() {
    this._aclMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclModeInput() {
    return this._aclMode;
  }

  // acls - computed: true, optional: true, required: false
  private _acls = new GatewayVirtualClusterV2SpecAclsList(this, "acls", true);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: GatewayVirtualClusterV2SpecAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // client_properties - computed: true, optional: false, required: false
  private _clientProperties = new cdktf.StringMapMap(this, "client_properties");
  public get clientProperties() {
    return this._clientProperties;
  }

  // super_users - computed: true, optional: true, required: false
  private _superUsers?: string[]; 
  public get superUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('super_users'));
  }
  public set superUsers(value: string[]) {
    this._superUsers = value;
  }
  public resetSuperUsers() {
    this._superUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superUsersInput() {
    return this._superUsers;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2 conduktor_gateway_virtual_cluster_v2}
*/
export class GatewayVirtualClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_gateway_virtual_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayVirtualClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayVirtualClusterV2 to import
  * @param importFromId The id of the existing GatewayVirtualClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayVirtualClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_gateway_virtual_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_virtual_cluster_v2 conduktor_gateway_virtual_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayVirtualClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: GatewayVirtualClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_gateway_virtual_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
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
  private _spec = new GatewayVirtualClusterV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GatewayVirtualClusterV2Spec) {
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
      spec: gatewayVirtualClusterV2SpecToTerraform(this._spec.internalValue),
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
        value: gatewayVirtualClusterV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayVirtualClusterV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
