// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LcmUpgradeV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#auto_handle_flags LcmUpgradeV2#auto_handle_flags}
  */
  readonly autoHandleFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#id LcmUpgradeV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#max_wait_time_in_secs LcmUpgradeV2#max_wait_time_in_secs}
  */
  readonly maxWaitTimeInSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#skipped_precheck_flags LcmUpgradeV2#skipped_precheck_flags}
  */
  readonly skippedPrecheckFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#x_cluster_id LcmUpgradeV2#x_cluster_id}
  */
  readonly xClusterId?: string;
  /**
  * entity_update_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#entity_update_specs LcmUpgradeV2#entity_update_specs}
  */
  readonly entityUpdateSpecs?: LcmUpgradeV2EntityUpdateSpecs[] | cdktf.IResolvable;
  /**
  * management_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#management_server LcmUpgradeV2#management_server}
  */
  readonly managementServer?: LcmUpgradeV2ManagementServer;
}
export interface LcmUpgradeV2EntityUpdateSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#entity_uuid LcmUpgradeV2#entity_uuid}
  */
  readonly entityUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#to_version LcmUpgradeV2#to_version}
  */
  readonly toVersion: string;
}

export function lcmUpgradeV2EntityUpdateSpecsToTerraform(struct?: LcmUpgradeV2EntityUpdateSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_uuid: cdktf.stringToTerraform(struct!.entityUuid),
    to_version: cdktf.stringToTerraform(struct!.toVersion),
  }
}


export function lcmUpgradeV2EntityUpdateSpecsToHclTerraform(struct?: LcmUpgradeV2EntityUpdateSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_uuid: {
      value: cdktf.stringToHclTerraform(struct!.entityUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_version: {
      value: cdktf.stringToHclTerraform(struct!.toVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LcmUpgradeV2EntityUpdateSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LcmUpgradeV2EntityUpdateSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityUuid = this._entityUuid;
    }
    if (this._toVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.toVersion = this._toVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LcmUpgradeV2EntityUpdateSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityUuid = undefined;
      this._toVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityUuid = value.entityUuid;
      this._toVersion = value.toVersion;
    }
  }

  // entity_uuid - computed: false, optional: false, required: true
  private _entityUuid?: string; 
  public get entityUuid() {
    return this.getStringAttribute('entity_uuid');
  }
  public set entityUuid(value: string) {
    this._entityUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityUuidInput() {
    return this._entityUuid;
  }

  // to_version - computed: false, optional: false, required: true
  private _toVersion?: string; 
  public get toVersion() {
    return this.getStringAttribute('to_version');
  }
  public set toVersion(value: string) {
    this._toVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toVersionInput() {
    return this._toVersion;
  }
}

export class LcmUpgradeV2EntityUpdateSpecsList extends cdktf.ComplexList {
  public internalValue? : LcmUpgradeV2EntityUpdateSpecs[] | cdktf.IResolvable

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
  public get(index: number): LcmUpgradeV2EntityUpdateSpecsOutputReference {
    return new LcmUpgradeV2EntityUpdateSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LcmUpgradeV2ManagementServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#hypervisor_type LcmUpgradeV2#hypervisor_type}
  */
  readonly hypervisorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#ip LcmUpgradeV2#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#password LcmUpgradeV2#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#username LcmUpgradeV2#username}
  */
  readonly username: string;
}

export function lcmUpgradeV2ManagementServerToTerraform(struct?: LcmUpgradeV2ManagementServerOutputReference | LcmUpgradeV2ManagementServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hypervisor_type: cdktf.stringToTerraform(struct!.hypervisorType),
    ip: cdktf.stringToTerraform(struct!.ip),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function lcmUpgradeV2ManagementServerToHclTerraform(struct?: LcmUpgradeV2ManagementServerOutputReference | LcmUpgradeV2ManagementServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hypervisor_type: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LcmUpgradeV2ManagementServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LcmUpgradeV2ManagementServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hypervisorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorType = this._hypervisorType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LcmUpgradeV2ManagementServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hypervisorType = undefined;
      this._ip = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hypervisorType = value.hypervisorType;
      this._ip = value.ip;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // hypervisor_type - computed: false, optional: false, required: true
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2 nutanix_lcm_upgrade_v2}
*/
export class LcmUpgradeV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_lcm_upgrade_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LcmUpgradeV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LcmUpgradeV2 to import
  * @param importFromId The id of the existing LcmUpgradeV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LcmUpgradeV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_lcm_upgrade_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_upgrade_v2 nutanix_lcm_upgrade_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LcmUpgradeV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: LcmUpgradeV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_lcm_upgrade_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoHandleFlags = config.autoHandleFlags;
    this._id = config.id;
    this._maxWaitTimeInSecs = config.maxWaitTimeInSecs;
    this._skippedPrecheckFlags = config.skippedPrecheckFlags;
    this._xClusterId = config.xClusterId;
    this._entityUpdateSpecs.internalValue = config.entityUpdateSpecs;
    this._managementServer.internalValue = config.managementServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_handle_flags - computed: false, optional: true, required: false
  private _autoHandleFlags?: string[]; 
  public get autoHandleFlags() {
    return this.getListAttribute('auto_handle_flags');
  }
  public set autoHandleFlags(value: string[]) {
    this._autoHandleFlags = value;
  }
  public resetAutoHandleFlags() {
    this._autoHandleFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHandleFlagsInput() {
    return this._autoHandleFlags;
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

  // max_wait_time_in_secs - computed: false, optional: true, required: false
  private _maxWaitTimeInSecs?: number; 
  public get maxWaitTimeInSecs() {
    return this.getNumberAttribute('max_wait_time_in_secs');
  }
  public set maxWaitTimeInSecs(value: number) {
    this._maxWaitTimeInSecs = value;
  }
  public resetMaxWaitTimeInSecs() {
    this._maxWaitTimeInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecsInput() {
    return this._maxWaitTimeInSecs;
  }

  // skipped_precheck_flags - computed: false, optional: true, required: false
  private _skippedPrecheckFlags?: string[]; 
  public get skippedPrecheckFlags() {
    return this.getListAttribute('skipped_precheck_flags');
  }
  public set skippedPrecheckFlags(value: string[]) {
    this._skippedPrecheckFlags = value;
  }
  public resetSkippedPrecheckFlags() {
    this._skippedPrecheckFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedPrecheckFlagsInput() {
    return this._skippedPrecheckFlags;
  }

  // x_cluster_id - computed: false, optional: true, required: false
  private _xClusterId?: string; 
  public get xClusterId() {
    return this.getStringAttribute('x_cluster_id');
  }
  public set xClusterId(value: string) {
    this._xClusterId = value;
  }
  public resetXClusterId() {
    this._xClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xClusterIdInput() {
    return this._xClusterId;
  }

  // entity_update_specs - computed: false, optional: true, required: false
  private _entityUpdateSpecs = new LcmUpgradeV2EntityUpdateSpecsList(this, "entity_update_specs", false);
  public get entityUpdateSpecs() {
    return this._entityUpdateSpecs;
  }
  public putEntityUpdateSpecs(value: LcmUpgradeV2EntityUpdateSpecs[] | cdktf.IResolvable) {
    this._entityUpdateSpecs.internalValue = value;
  }
  public resetEntityUpdateSpecs() {
    this._entityUpdateSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityUpdateSpecsInput() {
    return this._entityUpdateSpecs.internalValue;
  }

  // management_server - computed: false, optional: true, required: false
  private _managementServer = new LcmUpgradeV2ManagementServerOutputReference(this, "management_server");
  public get managementServer() {
    return this._managementServer;
  }
  public putManagementServer(value: LcmUpgradeV2ManagementServer) {
    this._managementServer.internalValue = value;
  }
  public resetManagementServer() {
    this._managementServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementServerInput() {
    return this._managementServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_handle_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoHandleFlags),
      id: cdktf.stringToTerraform(this._id),
      max_wait_time_in_secs: cdktf.numberToTerraform(this._maxWaitTimeInSecs),
      skipped_precheck_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skippedPrecheckFlags),
      x_cluster_id: cdktf.stringToTerraform(this._xClusterId),
      entity_update_specs: cdktf.listMapper(lcmUpgradeV2EntityUpdateSpecsToTerraform, true)(this._entityUpdateSpecs.internalValue),
      management_server: lcmUpgradeV2ManagementServerToTerraform(this._managementServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_handle_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoHandleFlags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_wait_time_in_secs: {
        value: cdktf.numberToHclTerraform(this._maxWaitTimeInSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skipped_precheck_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skippedPrecheckFlags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      x_cluster_id: {
        value: cdktf.stringToHclTerraform(this._xClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_update_specs: {
        value: cdktf.listMapperHcl(lcmUpgradeV2EntityUpdateSpecsToHclTerraform, true)(this._entityUpdateSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LcmUpgradeV2EntityUpdateSpecsList",
      },
      management_server: {
        value: lcmUpgradeV2ManagementServerToHclTerraform(this._managementServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LcmUpgradeV2ManagementServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
