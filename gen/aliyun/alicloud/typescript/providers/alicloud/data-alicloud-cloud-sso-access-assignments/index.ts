// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudSsoAccessAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#access_configuration_id DataAlicloudCloudSsoAccessAssignments#access_configuration_id}
  */
  readonly accessConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#directory_id DataAlicloudCloudSsoAccessAssignments#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#id DataAlicloudCloudSsoAccessAssignments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#ids DataAlicloudCloudSsoAccessAssignments#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#output_file DataAlicloudCloudSsoAccessAssignments#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#principal_type DataAlicloudCloudSsoAccessAssignments#principal_type}
  */
  readonly principalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#target_id DataAlicloudCloudSsoAccessAssignments#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#target_type DataAlicloudCloudSsoAccessAssignments#target_type}
  */
  readonly targetType?: string;
}
export interface DataAlicloudCloudSsoAccessAssignmentsAssignments {
}

export function dataAlicloudCloudSsoAccessAssignmentsAssignmentsToTerraform(struct?: DataAlicloudCloudSsoAccessAssignmentsAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudSsoAccessAssignmentsAssignmentsToHclTerraform(struct?: DataAlicloudCloudSsoAccessAssignmentsAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudSsoAccessAssignmentsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudSsoAccessAssignmentsAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudSsoAccessAssignmentsAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_configuration_id - computed: true, optional: false, required: false
  public get accessConfigurationId() {
    return this.getStringAttribute('access_configuration_id');
  }

  // access_configuration_name - computed: true, optional: false, required: false
  public get accessConfigurationName() {
    return this.getStringAttribute('access_configuration_name');
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_path_name - computed: true, optional: false, required: false
  public get targetPathName() {
    return this.getStringAttribute('target_path_name');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export class DataAlicloudCloudSsoAccessAssignmentsAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudSsoAccessAssignmentsAssignmentsOutputReference {
    return new DataAlicloudCloudSsoAccessAssignmentsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments alicloud_cloud_sso_access_assignments}
*/
export class DataAlicloudCloudSsoAccessAssignments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_sso_access_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudSsoAccessAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudSsoAccessAssignments to import
  * @param importFromId The id of the existing DataAlicloudCloudSsoAccessAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudSsoAccessAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_sso_access_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_sso_access_assignments alicloud_cloud_sso_access_assignments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudSsoAccessAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudSsoAccessAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_sso_access_assignments',
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
    this._accessConfigurationId = config.accessConfigurationId;
    this._directoryId = config.directoryId;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._principalType = config.principalType;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_configuration_id - computed: false, optional: true, required: false
  private _accessConfigurationId?: string; 
  public get accessConfigurationId() {
    return this.getStringAttribute('access_configuration_id');
  }
  public set accessConfigurationId(value: string) {
    this._accessConfigurationId = value;
  }
  public resetAccessConfigurationId() {
    this._accessConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigurationIdInput() {
    return this._accessConfigurationId;
  }

  // assignments - computed: true, optional: false, required: false
  private _assignments = new DataAlicloudCloudSsoAccessAssignmentsAssignmentsList(this, "assignments", false);
  public get assignments() {
    return this._assignments;
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
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

  // principal_type - computed: false, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_configuration_id: cdktf.stringToTerraform(this._accessConfigurationId),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      principal_type: cdktf.stringToTerraform(this._principalType),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_configuration_id: {
        value: cdktf.stringToHclTerraform(this._accessConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
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
      principal_type: {
        value: cdktf.stringToHclTerraform(this._principalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
