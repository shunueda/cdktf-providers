// https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpinnakerProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#email DataSpinnakerProject#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#name DataSpinnakerProject#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#config DataSpinnakerProject#config}
  */
  readonly config?: DataSpinnakerProjectConfigA[] | cdktf.IResolvable;
}
export interface DataSpinnakerProjectConfigCluster {
  /**
  * Name of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#account DataSpinnakerProject#account}
  */
  readonly account: string;
  /**
  * Detail of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#detail DataSpinnakerProject#detail}
  */
  readonly detail?: string[];
  /**
  * Stack of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#stack DataSpinnakerProject#stack}
  */
  readonly stack?: string[];
}

export function dataSpinnakerProjectConfigClusterToTerraform(struct?: DataSpinnakerProjectConfigCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    detail: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.detail),
    stack: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stack),
  }
}


export function dataSpinnakerProjectConfigClusterToHclTerraform(struct?: DataSpinnakerProjectConfigCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detail: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.detail),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stack: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stack),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpinnakerProjectConfigClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSpinnakerProjectConfigCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._detail !== undefined) {
      hasAnyValues = true;
      internalValueResult.detail = this._detail;
    }
    if (this._stack !== undefined) {
      hasAnyValues = true;
      internalValueResult.stack = this._stack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpinnakerProjectConfigCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._detail = undefined;
      this._stack = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._detail = value.detail;
      this._stack = value.stack;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: string[]; 
  public get detail() {
    return this.getListAttribute('detail');
  }
  public set detail(value: string[]) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // stack - computed: false, optional: true, required: false
  private _stack?: string[]; 
  public get stack() {
    return this.getListAttribute('stack');
  }
  public set stack(value: string[]) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }
}

export class DataSpinnakerProjectConfigClusterList extends cdktf.ComplexList {
  public internalValue? : DataSpinnakerProjectConfigCluster[] | cdktf.IResolvable

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
  public get(index: number): DataSpinnakerProjectConfigClusterOutputReference {
    return new DataSpinnakerProjectConfigClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpinnakerProjectConfigPipelineConfig {
  /**
  * Application which to refer the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#application DataSpinnakerProject#application}
  */
  readonly application: string[];
  /**
  * ID of the pipeline config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#pipeline_config_id DataSpinnakerProject#pipeline_config_id}
  */
  readonly pipelineConfigId: string[];
}

export function dataSpinnakerProjectConfigPipelineConfigToTerraform(struct?: DataSpinnakerProjectConfigPipelineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.application),
    pipeline_config_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pipelineConfigId),
  }
}


export function dataSpinnakerProjectConfigPipelineConfigToHclTerraform(struct?: DataSpinnakerProjectConfigPipelineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pipeline_config_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pipelineConfigId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpinnakerProjectConfigPipelineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSpinnakerProjectConfigPipelineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._pipelineConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineConfigId = this._pipelineConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpinnakerProjectConfigPipelineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._pipelineConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._pipelineConfigId = value.pipelineConfigId;
    }
  }

  // application - computed: false, optional: false, required: true
  private _application?: string[]; 
  public get application() {
    return this.getListAttribute('application');
  }
  public set application(value: string[]) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // pipeline_config_id - computed: false, optional: false, required: true
  private _pipelineConfigId?: string[]; 
  public get pipelineConfigId() {
    return this.getListAttribute('pipeline_config_id');
  }
  public set pipelineConfigId(value: string[]) {
    this._pipelineConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigIdInput() {
    return this._pipelineConfigId;
  }
}

export class DataSpinnakerProjectConfigPipelineConfigList extends cdktf.ComplexList {
  public internalValue? : DataSpinnakerProjectConfigPipelineConfig[] | cdktf.IResolvable

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
  public get(index: number): DataSpinnakerProjectConfigPipelineConfigOutputReference {
    return new DataSpinnakerProjectConfigPipelineConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpinnakerProjectConfigA {
  /**
  * List of belonging Spinnaker Applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#applications DataSpinnakerProject#applications}
  */
  readonly applications?: string[];
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#cluster DataSpinnakerProject#cluster}
  */
  readonly cluster?: DataSpinnakerProjectConfigCluster[] | cdktf.IResolvable;
  /**
  * pipeline_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#pipeline_config DataSpinnakerProject#pipeline_config}
  */
  readonly pipelineConfig?: DataSpinnakerProjectConfigPipelineConfig[] | cdktf.IResolvable;
}

export function dataSpinnakerProjectConfigAToTerraform(struct?: DataSpinnakerProjectConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    cluster: cdktf.listMapper(dataSpinnakerProjectConfigClusterToTerraform, true)(struct!.cluster),
    pipeline_config: cdktf.listMapper(dataSpinnakerProjectConfigPipelineConfigToTerraform, true)(struct!.pipelineConfig),
  }
}


export function dataSpinnakerProjectConfigAToHclTerraform(struct?: DataSpinnakerProjectConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster: {
      value: cdktf.listMapperHcl(dataSpinnakerProjectConfigClusterToHclTerraform, true)(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataSpinnakerProjectConfigClusterList",
    },
    pipeline_config: {
      value: cdktf.listMapperHcl(dataSpinnakerProjectConfigPipelineConfigToHclTerraform, true)(struct!.pipelineConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataSpinnakerProjectConfigPipelineConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpinnakerProjectConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSpinnakerProjectConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._pipelineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineConfig = this._pipelineConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpinnakerProjectConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._cluster.internalValue = undefined;
      this._pipelineConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._cluster.internalValue = value.cluster;
      this._pipelineConfig.internalValue = value.pipelineConfig;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataSpinnakerProjectConfigClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataSpinnakerProjectConfigCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // pipeline_config - computed: false, optional: true, required: false
  private _pipelineConfig = new DataSpinnakerProjectConfigPipelineConfigList(this, "pipeline_config", false);
  public get pipelineConfig() {
    return this._pipelineConfig;
  }
  public putPipelineConfig(value: DataSpinnakerProjectConfigPipelineConfig[] | cdktf.IResolvable) {
    this._pipelineConfig.internalValue = value;
  }
  public resetPipelineConfig() {
    this._pipelineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigInput() {
    return this._pipelineConfig.internalValue;
  }
}

export class DataSpinnakerProjectConfigAList extends cdktf.ComplexList {
  public internalValue? : DataSpinnakerProjectConfigA[] | cdktf.IResolvable

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
  public get(index: number): DataSpinnakerProjectConfigAOutputReference {
    return new DataSpinnakerProjectConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project spinnaker_project}
*/
export class DataSpinnakerProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spinnaker_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpinnakerProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpinnakerProject to import
  * @param importFromId The id of the existing DataSpinnakerProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpinnakerProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spinnaker_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/data-sources/project spinnaker_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpinnakerProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpinnakerProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'spinnaker_project',
      terraformGeneratorMetadata: {
        providerName: 'spinnaker',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._name = config.name;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // config - computed: false, optional: true, required: false
  private _config = new DataSpinnakerProjectConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DataSpinnakerProjectConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      config: cdktf.listMapper(dataSpinnakerProjectConfigAToTerraform, true)(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      config: {
        value: cdktf.listMapperHcl(dataSpinnakerProjectConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpinnakerProjectConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
