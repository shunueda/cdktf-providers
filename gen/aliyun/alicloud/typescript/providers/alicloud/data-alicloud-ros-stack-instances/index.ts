// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudRosStackInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#enable_details DataAlicloudRosStackInstances#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#id DataAlicloudRosStackInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#ids DataAlicloudRosStackInstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#output_file DataAlicloudRosStackInstances#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#stack_group_name DataAlicloudRosStackInstances#stack_group_name}
  */
  readonly stackGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#stack_instance_account_id DataAlicloudRosStackInstances#stack_instance_account_id}
  */
  readonly stackInstanceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#stack_instance_region_id DataAlicloudRosStackInstances#stack_instance_region_id}
  */
  readonly stackInstanceRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#status DataAlicloudRosStackInstances#status}
  */
  readonly status?: string;
}
export interface DataAlicloudRosStackInstancesInstancesParameterOverrides {
}

export function dataAlicloudRosStackInstancesInstancesParameterOverridesToTerraform(struct?: DataAlicloudRosStackInstancesInstancesParameterOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudRosStackInstancesInstancesParameterOverridesToHclTerraform(struct?: DataAlicloudRosStackInstancesInstancesParameterOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudRosStackInstancesInstancesParameterOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudRosStackInstancesInstancesParameterOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudRosStackInstancesInstancesParameterOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAlicloudRosStackInstancesInstancesParameterOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudRosStackInstancesInstancesParameterOverridesOutputReference {
    return new DataAlicloudRosStackInstancesInstancesParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudRosStackInstancesInstances {
}

export function dataAlicloudRosStackInstancesInstancesToTerraform(struct?: DataAlicloudRosStackInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudRosStackInstancesInstancesToHclTerraform(struct?: DataAlicloudRosStackInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudRosStackInstancesInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudRosStackInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudRosStackInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parameter_overrides - computed: true, optional: false, required: false
  private _parameterOverrides = new DataAlicloudRosStackInstancesInstancesParameterOverridesList(this, "parameter_overrides", false);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }

  // stack_group_id - computed: true, optional: false, required: false
  public get stackGroupId() {
    return this.getStringAttribute('stack_group_id');
  }

  // stack_group_name - computed: true, optional: false, required: false
  public get stackGroupName() {
    return this.getStringAttribute('stack_group_name');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_instance_account_id - computed: true, optional: false, required: false
  public get stackInstanceAccountId() {
    return this.getStringAttribute('stack_instance_account_id');
  }

  // stack_instance_region_id - computed: true, optional: false, required: false
  public get stackInstanceRegionId() {
    return this.getStringAttribute('stack_instance_region_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }
}

export class DataAlicloudRosStackInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudRosStackInstancesInstancesOutputReference {
    return new DataAlicloudRosStackInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances alicloud_ros_stack_instances}
*/
export class DataAlicloudRosStackInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ros_stack_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudRosStackInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudRosStackInstances to import
  * @param importFromId The id of the existing DataAlicloudRosStackInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudRosStackInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ros_stack_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ros_stack_instances alicloud_ros_stack_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudRosStackInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudRosStackInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ros_stack_instances',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._stackGroupName = config.stackGroupName;
    this._stackInstanceAccountId = config.stackInstanceAccountId;
    this._stackInstanceRegionId = config.stackInstanceRegionId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataAlicloudRosStackInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // stack_group_name - computed: false, optional: false, required: true
  private _stackGroupName?: string; 
  public get stackGroupName() {
    return this.getStringAttribute('stack_group_name');
  }
  public set stackGroupName(value: string) {
    this._stackGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackGroupNameInput() {
    return this._stackGroupName;
  }

  // stack_instance_account_id - computed: false, optional: true, required: false
  private _stackInstanceAccountId?: string; 
  public get stackInstanceAccountId() {
    return this.getStringAttribute('stack_instance_account_id');
  }
  public set stackInstanceAccountId(value: string) {
    this._stackInstanceAccountId = value;
  }
  public resetStackInstanceAccountId() {
    this._stackInstanceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInstanceAccountIdInput() {
    return this._stackInstanceAccountId;
  }

  // stack_instance_region_id - computed: false, optional: true, required: false
  private _stackInstanceRegionId?: string; 
  public get stackInstanceRegionId() {
    return this.getStringAttribute('stack_instance_region_id');
  }
  public set stackInstanceRegionId(value: string) {
    this._stackInstanceRegionId = value;
  }
  public resetStackInstanceRegionId() {
    this._stackInstanceRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInstanceRegionIdInput() {
    return this._stackInstanceRegionId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      stack_group_name: cdktf.stringToTerraform(this._stackGroupName),
      stack_instance_account_id: cdktf.stringToTerraform(this._stackInstanceAccountId),
      stack_instance_region_id: cdktf.stringToTerraform(this._stackInstanceRegionId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_group_name: {
        value: cdktf.stringToHclTerraform(this._stackGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_instance_account_id: {
        value: cdktf.stringToHclTerraform(this._stackInstanceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_instance_region_id: {
        value: cdktf.stringToHclTerraform(this._stackInstanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
