// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/all_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSentryAllProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The organization the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/all_projects#organization DataSentryAllProjects#organization}
  */
  readonly organization: string;
}
export interface DataSentryAllProjectsProjects {
}

export function dataSentryAllProjectsProjectsToTerraform(struct?: DataSentryAllProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryAllProjectsProjectsToHclTerraform(struct?: DataSentryAllProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryAllProjectsProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSentryAllProjectsProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryAllProjectsProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

export class DataSentryAllProjectsProjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataSentryAllProjectsProjectsOutputReference {
    return new DataSentryAllProjectsProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/all_projects sentry_all_projects}
*/
export class DataSentryAllProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_all_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSentryAllProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSentryAllProjects to import
  * @param importFromId The id of the existing DataSentryAllProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/all_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSentryAllProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_all_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/all_projects sentry_all_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSentryAllProjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSentryAllProjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_all_projects',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // project_slugs - computed: true, optional: false, required: false
  public get projectSlugs() {
    return cdktf.Fn.tolist(this.getListAttribute('project_slugs'));
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new DataSentryAllProjectsProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization: cdktf.stringToTerraform(this._organization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
