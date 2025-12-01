// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranTransformationProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the transformation Project within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation_project#id DataFivetranTransformationProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataFivetranTransformationProjectProjectConfig {
}

export function dataFivetranTransformationProjectProjectConfigToTerraform(struct?: DataFivetranTransformationProjectProjectConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranTransformationProjectProjectConfigToHclTerraform(struct?: DataFivetranTransformationProjectProjectConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranTransformationProjectProjectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranTransformationProjectProjectConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranTransformationProjectProjectConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // dbt_version - computed: true, optional: false, required: false
  public get dbtVersion() {
    return this.getStringAttribute('dbt_version');
  }

  // default_schema - computed: true, optional: false, required: false
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }

  // environment_vars - computed: true, optional: false, required: false
  public get environmentVars() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_vars'));
  }

  // folder_path - computed: true, optional: false, required: false
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }

  // git_branch - computed: true, optional: false, required: false
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }

  // git_remote_url - computed: true, optional: false, required: false
  public get gitRemoteUrl() {
    return this.getStringAttribute('git_remote_url');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // threads - computed: true, optional: false, required: false
  public get threads() {
    return this.getNumberAttribute('threads');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation_project fivetran_transformation_project}
*/
export class DataFivetranTransformationProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_transformation_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranTransformationProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranTransformationProject to import
  * @param importFromId The id of the existing DataFivetranTransformationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranTransformationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_transformation_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation_project fivetran_transformation_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranTransformationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranTransformationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_transformation_project',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return cdktf.Fn.tolist(this.getListAttribute('errors'));
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // project_config - computed: false, optional: false, required: false
  private _projectConfig = new DataFivetranTransformationProjectProjectConfigOutputReference(this, "project_config");
  public get projectConfig() {
    return this._projectConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
