// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRoleConfigurationProvisioningsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deployed: Deployment succeeded; DeployedRequired: Redeployment required; DeployFailed: Deployment failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#deployment_status DataTencentcloudRoleConfigurationProvisionings#deployment_status}
  */
  readonly deploymentStatus?: string;
  /**
  * Search by configuration name is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#filter DataTencentcloudRoleConfigurationProvisionings#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#id DataTencentcloudRoleConfigurationProvisionings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#result_output_file DataTencentcloudRoleConfigurationProvisionings#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Permission configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#role_configuration_id DataTencentcloudRoleConfigurationProvisionings#role_configuration_id}
  */
  readonly roleConfigurationId?: string;
  /**
  * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#target_type DataTencentcloudRoleConfigurationProvisionings#target_type}
  */
  readonly targetType?: string;
  /**
  * UIN of the synchronized target account of the Tencent Cloud Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#target_uin DataTencentcloudRoleConfigurationProvisionings#target_uin}
  */
  readonly targetUin?: number;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#zone_id DataTencentcloudRoleConfigurationProvisionings#zone_id}
  */
  readonly zoneId: string;
}
export interface DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisionings {
}

export function dataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisioningsToTerraform(struct?: DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisionings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisioningsToHclTerraform(struct?: DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisionings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisioningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisionings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisionings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // role_configuration_id - computed: true, optional: false, required: false
  public get roleConfigurationId() {
    return this.getStringAttribute('role_configuration_id');
  }

  // role_configuration_name - computed: true, optional: false, required: false
  public get roleConfigurationName() {
    return this.getStringAttribute('role_configuration_name');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // target_uin - computed: true, optional: false, required: false
  public get targetUin() {
    return this.getNumberAttribute('target_uin');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisioningsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisioningsOutputReference {
    return new DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisioningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings tencentcloud_role_configuration_provisionings}
*/
export class DataTencentcloudRoleConfigurationProvisionings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_role_configuration_provisionings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRoleConfigurationProvisionings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRoleConfigurationProvisionings to import
  * @param importFromId The id of the existing DataTencentcloudRoleConfigurationProvisionings that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRoleConfigurationProvisionings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_role_configuration_provisionings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/role_configuration_provisionings tencentcloud_role_configuration_provisionings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRoleConfigurationProvisioningsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRoleConfigurationProvisioningsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_role_configuration_provisionings',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentStatus = config.deploymentStatus;
    this._filter = config.filter;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._roleConfigurationId = config.roleConfigurationId;
    this._targetType = config.targetType;
    this._targetUin = config.targetUin;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_status - computed: false, optional: true, required: false
  private _deploymentStatus?: string; 
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }
  public set deploymentStatus(value: string) {
    this._deploymentStatus = value;
  }
  public resetDeploymentStatus() {
    this._deploymentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStatusInput() {
    return this._deploymentStatus;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // role_configuration_id - computed: false, optional: true, required: false
  private _roleConfigurationId?: string; 
  public get roleConfigurationId() {
    return this.getStringAttribute('role_configuration_id');
  }
  public set roleConfigurationId(value: string) {
    this._roleConfigurationId = value;
  }
  public resetRoleConfigurationId() {
    this._roleConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigurationIdInput() {
    return this._roleConfigurationId;
  }

  // role_configuration_provisionings - computed: true, optional: false, required: false
  private _roleConfigurationProvisionings = new DataTencentcloudRoleConfigurationProvisioningsRoleConfigurationProvisioningsList(this, "role_configuration_provisionings", false);
  public get roleConfigurationProvisionings() {
    return this._roleConfigurationProvisionings;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // target_uin - computed: false, optional: true, required: false
  private _targetUin?: number; 
  public get targetUin() {
    return this.getNumberAttribute('target_uin');
  }
  public set targetUin(value: number) {
    this._targetUin = value;
  }
  public resetTargetUin() {
    this._targetUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUinInput() {
    return this._targetUin;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_status: cdktf.stringToTerraform(this._deploymentStatus),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      role_configuration_id: cdktf.stringToTerraform(this._roleConfigurationId),
      target_type: cdktf.stringToTerraform(this._targetType),
      target_uin: cdktf.numberToTerraform(this._targetUin),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_status: {
        value: cdktf.stringToHclTerraform(this._deploymentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_configuration_id: {
        value: cdktf.stringToHclTerraform(this._roleConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_uin: {
        value: cdktf.numberToHclTerraform(this._targetUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
