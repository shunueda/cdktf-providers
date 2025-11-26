// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/serverless_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecServerlessApplicationsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAquasecServerlessApplicationsProject {
}

export function dataAquasecServerlessApplicationsProjectToTerraform(struct?: DataAquasecServerlessApplicationsProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecServerlessApplicationsProjectToHclTerraform(struct?: DataAquasecServerlessApplicationsProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecServerlessApplicationsProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecServerlessApplicationsProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecServerlessApplicationsProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // auto_pull - computed: true, optional: false, required: false
  public get autoPull() {
    return this.getBooleanAttribute('auto_pull');
  }

  // auto_pull_max - computed: true, optional: false, required: false
  public get autoPullMax() {
    return this.getNumberAttribute('auto_pull_max');
  }

  // auto_pull_pattern - computed: true, optional: false, required: false
  public get autoPullPattern() {
    return this.getStringAttribute('auto_pull_pattern');
  }

  // auto_pull_time - computed: true, optional: false, required: false
  public get autoPullTime() {
    return this.getStringAttribute('auto_pull_time');
  }

  // cloud_project - computed: true, optional: false, required: false
  public get cloudProject() {
    return this.getStringAttribute('cloud_project');
  }

  // compute_provider - computed: true, optional: false, required: false
  public get computeProvider() {
    return this.getNumberAttribute('compute_provider');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclude_tags - computed: true, optional: false, required: false
  public get excludeTags() {
    return this.getListAttribute('exclude_tags');
  }

  // existsing_scanners - computed: true, optional: false, required: false
  public get existsingScanners() {
    return this.getListAttribute('existsing_scanners');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // include_tags - computed: true, optional: false, required: false
  public get includeTags() {
    return this.getListAttribute('include_tags');
  }

  // lastupdate - computed: true, optional: false, required: false
  public get lastupdate() {
    return this.getNumberAttribute('lastupdate');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pull_tags_pattern - computed: true, optional: false, required: false
  public get pullTagsPattern() {
    return this.getListAttribute('pull_tags_pattern');
  }

  // pull_tags_pattern_excluded - computed: true, optional: false, required: false
  public get pullTagsPatternExcluded() {
    return this.getListAttribute('pull_tags_pattern_excluded');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // scanner_group_name - computed: true, optional: false, required: false
  public get scannerGroupName() {
    return this.getStringAttribute('scanner_group_name');
  }

  // scanner_name - computed: true, optional: false, required: false
  public get scannerName() {
    return this.getListAttribute('scanner_name');
  }

  // scanner_name_added - computed: true, optional: false, required: false
  public get scannerNameAdded() {
    return this.getListAttribute('scanner_name_added');
  }

  // scanner_name_removed - computed: true, optional: false, required: false
  public get scannerNameRemoved() {
    return this.getListAttribute('scanner_name_removed');
  }

  // scanner_type - computed: true, optional: false, required: false
  public get scannerType() {
    return this.getStringAttribute('scanner_type');
  }

  // sqs_url - computed: true, optional: false, required: false
  public get sqsUrl() {
    return this.getStringAttribute('sqs_url');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAquasecServerlessApplicationsProjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecServerlessApplicationsProjectOutputReference {
    return new DataAquasecServerlessApplicationsProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/serverless_applications aquasec_serverless_applications}
*/
export class DataAquasecServerlessApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_serverless_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecServerlessApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecServerlessApplications to import
  * @param importFromId The id of the existing DataAquasecServerlessApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/serverless_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecServerlessApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_serverless_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/serverless_applications aquasec_serverless_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecServerlessApplicationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAquasecServerlessApplicationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aquasec_serverless_applications',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project - computed: true, optional: false, required: false
  private _project = new DataAquasecServerlessApplicationsProjectList(this, "project", false);
  public get project() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
