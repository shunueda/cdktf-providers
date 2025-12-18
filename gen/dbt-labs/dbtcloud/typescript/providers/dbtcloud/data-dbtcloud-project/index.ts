// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/project#id DataDbtcloudProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/project#name DataDbtcloudProject#name}
  */
  readonly name?: string;
}
export interface DataDbtcloudProjectProjectConnection {
}

export function dataDbtcloudProjectProjectConnectionToTerraform(struct?: DataDbtcloudProjectProjectConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudProjectProjectConnectionToHclTerraform(struct?: DataDbtcloudProjectProjectConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudProjectProjectConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudProjectProjectConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudProjectProjectConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adapter_version - computed: true, optional: false, required: false
  public get adapterVersion() {
    return this.getStringAttribute('adapter_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataDbtcloudProjectRepository {
}

export function dataDbtcloudProjectRepositoryToTerraform(struct?: DataDbtcloudProjectRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudProjectRepositoryToHclTerraform(struct?: DataDbtcloudProjectRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudProjectRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudProjectRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudProjectRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // pull_request_url_template - computed: true, optional: false, required: false
  public get pullRequestUrlTemplate() {
    return this.getStringAttribute('pull_request_url_template');
  }

  // remote_url - computed: true, optional: false, required: false
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/project dbtcloud_project}
*/
export class DataDbtcloudProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudProject to import
  * @param importFromId The id of the existing DataDbtcloudProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/project dbtcloud_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_project',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dbt_project_subdirectory - computed: true, optional: false, required: false
  public get dbtProjectSubdirectory() {
    return this.getStringAttribute('dbt_project_subdirectory');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // docs_job_id - computed: true, optional: false, required: false
  public get docsJobId() {
    return this.getNumberAttribute('docs_job_id');
  }

  // freshness_job_id - computed: true, optional: false, required: false
  public get freshnessJobId() {
    return this.getNumberAttribute('freshness_job_id');
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // project_connection - computed: true, optional: false, required: false
  private _projectConnection = new DataDbtcloudProjectProjectConnectionOutputReference(this, "project_connection");
  public get projectConnection() {
    return this._projectConnection;
  }

  // repository - computed: true, optional: false, required: false
  private _repository = new DataDbtcloudProjectRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }

  // semantic_layer_config_id - computed: true, optional: false, required: false
  public get semanticLayerConfigId() {
    return this.getNumberAttribute('semantic_layer_config_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
