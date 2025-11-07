// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudIdentityCenterRoleConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter criteria, which are case insensitive. Currently, only RoleConfigurationName is supported and only eq (Equals) and sw (Start With) are supported. Example: Filter = "RoleConfigurationName, only sw test" means querying all permission configurations starting with test. Filter = "RoleConfigurationName, only eq TestRoleConfiguration" means querying the permission configuration named TestRoleConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations#filter DataTencentcloudIdentityCenterRoleConfigurations#filter}
  */
  readonly filter?: string;
  /**
  * Check whether the member account has been configured with permissions. If configured, return IsSelected: true; otherwise, return false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations#filter_targets DataTencentcloudIdentityCenterRoleConfigurations#filter_targets}
  */
  readonly filterTargets?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations#id DataTencentcloudIdentityCenterRoleConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UserId of the authorized user or GroupId of the authorized user group, which must be set together with the input parameter FilterTargets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations#principal_id DataTencentcloudIdentityCenterRoleConfigurations#principal_id}
  */
  readonly principalId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations#result_output_file DataTencentcloudIdentityCenterRoleConfigurations#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations#zone_id DataTencentcloudIdentityCenterRoleConfigurations#zone_id}
  */
  readonly zoneId: string;
}
export interface DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurations {
}

export function dataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurationsToTerraform(struct?: DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurationsToHclTerraform(struct?: DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurations | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_selected - computed: true, optional: false, required: false
  public get isSelected() {
    return this.getBooleanAttribute('is_selected');
  }

  // relay_state - computed: true, optional: false, required: false
  public get relayState() {
    return this.getStringAttribute('relay_state');
  }

  // role_configuration_id - computed: true, optional: false, required: false
  public get roleConfigurationId() {
    return this.getStringAttribute('role_configuration_id');
  }

  // role_configuration_name - computed: true, optional: false, required: false
  public get roleConfigurationName() {
    return this.getStringAttribute('role_configuration_name');
  }

  // session_duration - computed: true, optional: false, required: false
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurationsOutputReference {
    return new DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations tencentcloud_identity_center_role_configurations}
*/
export class DataTencentcloudIdentityCenterRoleConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_role_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudIdentityCenterRoleConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudIdentityCenterRoleConfigurations to import
  * @param importFromId The id of the existing DataTencentcloudIdentityCenterRoleConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudIdentityCenterRoleConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_role_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/identity_center_role_configurations tencentcloud_identity_center_role_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudIdentityCenterRoleConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudIdentityCenterRoleConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_role_configurations',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._filterTargets = config.filterTargets;
    this._id = config.id;
    this._principalId = config.principalId;
    this._resultOutputFile = config.resultOutputFile;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter_targets - computed: false, optional: true, required: false
  private _filterTargets?: number[]; 
  public get filterTargets() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('filter_targets')));
  }
  public set filterTargets(value: number[]) {
    this._filterTargets = value;
  }
  public resetFilterTargets() {
    this._filterTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTargetsInput() {
    return this._filterTargets;
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

  // principal_id - computed: false, optional: true, required: false
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
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

  // role_configurations - computed: true, optional: false, required: false
  private _roleConfigurations = new DataTencentcloudIdentityCenterRoleConfigurationsRoleConfigurationsList(this, "role_configurations", false);
  public get roleConfigurations() {
    return this._roleConfigurations;
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
      filter: cdktf.stringToTerraform(this._filter),
      filter_targets: cdktf.listMapper(cdktf.numberToTerraform, false)(this._filterTargets),
      id: cdktf.stringToTerraform(this._id),
      principal_id: cdktf.stringToTerraform(this._principalId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_targets: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._filterTargets),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
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
