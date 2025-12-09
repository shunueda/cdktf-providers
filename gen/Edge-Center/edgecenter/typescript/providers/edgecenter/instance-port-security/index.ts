// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstancePortSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#id InstancePortSecurity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the instance to which the port is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#instance_id InstancePortSecurity#instance_id}
  */
  readonly instanceId: string;
  /**
  * ID of the instance network port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#port_id InstancePortSecurity#port_id}
  */
  readonly portId: string;
  /**
  * Is the port_security feature disabled. If this field has value "true", you can't use "security_groups" field. You can't change port security of a public network port. When this field has value "true" all security groups will be deleted. When this field switched back to value "false" or deleted, default security group will be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#port_security_disabled InstancePortSecurity#port_security_disabled}
  */
  readonly portSecurityDisabled?: boolean | cdktf.IResolvable;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#project_id InstancePortSecurity#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#project_name InstancePortSecurity#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#region_id InstancePortSecurity#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#region_name InstancePortSecurity#region_name}
  */
  readonly regionName?: string;
  /**
  * security_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#security_groups InstancePortSecurity#security_groups}
  */
  readonly securityGroups?: InstancePortSecuritySecurityGroups;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#timeouts InstancePortSecurity#timeouts}
  */
  readonly timeouts?: InstancePortSecurityTimeouts;
}
export interface InstancePortSecuritySecurityGroups {
  /**
  * Whether to overwrite all security groups. If this field has value "true", security groups that were created outside of this resource (the default security group and security groups created through UI or API will be deleted and attached security groups specified in the attribute "security_group_ids" only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#overwrite_existing InstancePortSecurity#overwrite_existing}
  */
  readonly overwriteExisting?: boolean | cdktf.IResolvable;
  /**
  * A set of security groups IDs that need to be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#security_group_ids InstancePortSecurity#security_group_ids}
  */
  readonly securityGroupIds?: string[];
}

export function instancePortSecuritySecurityGroupsToTerraform(struct?: InstancePortSecuritySecurityGroupsOutputReference | InstancePortSecuritySecurityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite_existing: cdktf.booleanToTerraform(struct!.overwriteExisting),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function instancePortSecuritySecurityGroupsToHclTerraform(struct?: InstancePortSecuritySecurityGroupsOutputReference | InstancePortSecuritySecurityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite_existing: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePortSecuritySecurityGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePortSecuritySecurityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePortSecuritySecurityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overwriteExisting = undefined;
      this._securityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overwriteExisting = value.overwriteExisting;
      this._securityGroupIds = value.securityGroupIds;
    }
  }

  // all_security_group_ids - computed: true, optional: false, required: false
  public get allSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('all_security_group_ids'));
  }

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: boolean | cdktf.IResolvable; 
  public get overwriteExisting() {
    return this.getBooleanAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: boolean | cdktf.IResolvable) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }
}
export interface InstancePortSecurityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#create InstancePortSecurity#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#delete InstancePortSecurity#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#read InstancePortSecurity#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#update InstancePortSecurity#update}
  */
  readonly update?: string;
}

export function instancePortSecurityTimeoutsToTerraform(struct?: InstancePortSecurityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function instancePortSecurityTimeoutsToHclTerraform(struct?: InstancePortSecurityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePortSecurityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstancePortSecurityTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePortSecurityTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security edgecenter_instance_port_security}
*/
export class InstancePortSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_instance_port_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstancePortSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstancePortSecurity to import
  * @param importFromId The id of the existing InstancePortSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstancePortSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_instance_port_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_port_security edgecenter_instance_port_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstancePortSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: InstancePortSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_instance_port_security',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._portId = config.portId;
    this._portSecurityDisabled = config.portSecurityDisabled;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._securityGroups.internalValue = config.securityGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // port_security_disabled - computed: true, optional: true, required: false
  private _portSecurityDisabled?: boolean | cdktf.IResolvable; 
  public get portSecurityDisabled() {
    return this.getBooleanAttribute('port_security_disabled');
  }
  public set portSecurityDisabled(value: boolean | cdktf.IResolvable) {
    this._portSecurityDisabled = value;
  }
  public resetPortSecurityDisabled() {
    this._portSecurityDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityDisabledInput() {
    return this._portSecurityDisabled;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new InstancePortSecuritySecurityGroupsOutputReference(this, "security_groups");
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: InstancePortSecuritySecurityGroups) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstancePortSecurityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstancePortSecurityTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      port_id: cdktf.stringToTerraform(this._portId),
      port_security_disabled: cdktf.booleanToTerraform(this._portSecurityDisabled),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      security_groups: instancePortSecuritySecurityGroupsToTerraform(this._securityGroups.internalValue),
      timeouts: instancePortSecurityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_security_disabled: {
        value: cdktf.booleanToHclTerraform(this._portSecurityDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: instancePortSecuritySecurityGroupsToHclTerraform(this._securityGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstancePortSecuritySecurityGroupsList",
      },
      timeouts: {
        value: instancePortSecurityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstancePortSecurityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
