// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitArgusJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the Argus Instance ID the job belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job#argus_instance_id DataStackitArgusJob#argus_instance_id}
  */
  readonly argusInstanceId: string;
  /**
  * Specifies the name of the scraping job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job#name DataStackitArgusJob#name}
  */
  readonly name: string;
  /**
  * Specifies the Project ID the Argus instance belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job#project_id DataStackitArgusJob#project_id}
  */
  readonly projectId: string;
  /**
  * A saml2 configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job#saml2 DataStackitArgusJob#saml2}
  */
  readonly saml2?: DataStackitArgusJobSaml2;
}
export interface DataStackitArgusJobBasicAuth {
}

export function dataStackitArgusJobBasicAuthToTerraform(struct?: DataStackitArgusJobBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitArgusJobBasicAuthToHclTerraform(struct?: DataStackitArgusJobBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitArgusJobBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitArgusJobBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitArgusJobBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataStackitArgusJobSaml2 {
}

export function dataStackitArgusJobSaml2ToTerraform(struct?: DataStackitArgusJobSaml2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitArgusJobSaml2ToHclTerraform(struct?: DataStackitArgusJobSaml2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitArgusJobSaml2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitArgusJobSaml2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitArgusJobSaml2 | cdktf.IResolvable | undefined) {
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

  // enable_url_parameters - computed: true, optional: false, required: false
  public get enableUrlParameters() {
    return this.getBooleanAttribute('enable_url_parameters');
  }
}
export interface DataStackitArgusJobTargets {
}

export function dataStackitArgusJobTargetsToTerraform(struct?: DataStackitArgusJobTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitArgusJobTargetsToHclTerraform(struct?: DataStackitArgusJobTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitArgusJobTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitArgusJobTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitArgusJobTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }
}

export class DataStackitArgusJobTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitArgusJobTargetsOutputReference {
    return new DataStackitArgusJobTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job stackit_argus_job}
*/
export class DataStackitArgusJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_argus_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitArgusJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitArgusJob to import
  * @param importFromId The id of the existing DataStackitArgusJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitArgusJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_argus_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_job stackit_argus_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitArgusJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitArgusJobConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_argus_job',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._argusInstanceId = config.argusInstanceId;
    this._name = config.name;
    this._projectId = config.projectId;
    this._saml2.internalValue = config.saml2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argus_instance_id - computed: false, optional: false, required: true
  private _argusInstanceId?: string; 
  public get argusInstanceId() {
    return this.getStringAttribute('argus_instance_id');
  }
  public set argusInstanceId(value: string) {
    this._argusInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argusInstanceIdInput() {
    return this._argusInstanceId;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataStackitArgusJobBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metrics_path - computed: true, optional: false, required: false
  public get metricsPath() {
    return this.getStringAttribute('metrics_path');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // saml2 - computed: false, optional: true, required: false
  private _saml2 = new DataStackitArgusJobSaml2OutputReference(this, "saml2");
  public get saml2() {
    return this._saml2;
  }
  public putSaml2(value: DataStackitArgusJobSaml2) {
    this._saml2.internalValue = value;
  }
  public resetSaml2() {
    this._saml2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2Input() {
    return this._saml2.internalValue;
  }

  // sample_limit - computed: true, optional: false, required: false
  public get sampleLimit() {
    return this.getNumberAttribute('sample_limit');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // scrape_interval - computed: true, optional: false, required: false
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }

  // scrape_timeout - computed: true, optional: false, required: false
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataStackitArgusJobTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      argus_instance_id: cdktf.stringToTerraform(this._argusInstanceId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      saml2: dataStackitArgusJobSaml2ToTerraform(this._saml2.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      argus_instance_id: {
        value: cdktf.stringToHclTerraform(this._argusInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2: {
        value: dataStackitArgusJobSaml2ToHclTerraform(this._saml2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataStackitArgusJobSaml2",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
