// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWorksDataSourceSharedRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#data_source_id DataWorksDataSourceSharedRule#data_source_id}
  */
  readonly dataSourceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#env_type DataWorksDataSourceSharedRule#env_type}
  */
  readonly envType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#id DataWorksDataSourceSharedRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#shared_user DataWorksDataSourceSharedRule#shared_user}
  */
  readonly sharedUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#target_project_id DataWorksDataSourceSharedRule#target_project_id}
  */
  readonly targetProjectId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#timeouts DataWorksDataSourceSharedRule#timeouts}
  */
  readonly timeouts?: DataWorksDataSourceSharedRuleTimeouts;
}
export interface DataWorksDataSourceSharedRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#create DataWorksDataSourceSharedRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#delete DataWorksDataSourceSharedRule#delete}
  */
  readonly delete?: string;
}

export function dataWorksDataSourceSharedRuleTimeoutsToTerraform(struct?: DataWorksDataSourceSharedRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dataWorksDataSourceSharedRuleTimeoutsToHclTerraform(struct?: DataWorksDataSourceSharedRuleTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDataSourceSharedRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataWorksDataSourceSharedRuleTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDataSourceSharedRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule alicloud_data_works_data_source_shared_rule}
*/
export class DataWorksDataSourceSharedRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_data_works_data_source_shared_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWorksDataSourceSharedRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWorksDataSourceSharedRule to import
  * @param importFromId The id of the existing DataWorksDataSourceSharedRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWorksDataSourceSharedRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_data_works_data_source_shared_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_data_source_shared_rule alicloud_data_works_data_source_shared_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWorksDataSourceSharedRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataWorksDataSourceSharedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_data_works_data_source_shared_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceId = config.dataSourceId;
    this._envType = config.envType;
    this._id = config.id;
    this._sharedUser = config.sharedUser;
    this._targetProjectId = config.targetProjectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: number; 
  public get dataSourceId() {
    return this.getNumberAttribute('data_source_id');
  }
  public set dataSourceId(value: number) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // data_source_shared_rule_id - computed: true, optional: false, required: false
  public get dataSourceSharedRuleId() {
    return this.getStringAttribute('data_source_shared_rule_id');
  }

  // env_type - computed: false, optional: false, required: true
  private _envType?: string; 
  public get envType() {
    return this.getStringAttribute('env_type');
  }
  public set envType(value: string) {
    this._envType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envTypeInput() {
    return this._envType;
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

  // shared_user - computed: false, optional: true, required: false
  private _sharedUser?: string; 
  public get sharedUser() {
    return this.getStringAttribute('shared_user');
  }
  public set sharedUser(value: string) {
    this._sharedUser = value;
  }
  public resetSharedUser() {
    this._sharedUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedUserInput() {
    return this._sharedUser;
  }

  // target_project_id - computed: false, optional: false, required: true
  private _targetProjectId?: number; 
  public get targetProjectId() {
    return this.getNumberAttribute('target_project_id');
  }
  public set targetProjectId(value: number) {
    this._targetProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectIdInput() {
    return this._targetProjectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataWorksDataSourceSharedRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataWorksDataSourceSharedRuleTimeouts) {
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
      data_source_id: cdktf.numberToTerraform(this._dataSourceId),
      env_type: cdktf.stringToTerraform(this._envType),
      id: cdktf.stringToTerraform(this._id),
      shared_user: cdktf.stringToTerraform(this._sharedUser),
      target_project_id: cdktf.numberToTerraform(this._targetProjectId),
      timeouts: dataWorksDataSourceSharedRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_id: {
        value: cdktf.numberToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      env_type: {
        value: cdktf.stringToHclTerraform(this._envType),
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
      shared_user: {
        value: cdktf.stringToHclTerraform(this._sharedUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_project_id: {
        value: cdktf.numberToHclTerraform(this._targetProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: dataWorksDataSourceSharedRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataWorksDataSourceSharedRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
