// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceModelDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#compartment_id DatascienceModelDeployment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#defined_tags DatascienceModelDeployment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#description DatascienceModelDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#display_name DatascienceModelDeployment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#freeform_tags DatascienceModelDeployment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#id DatascienceModelDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#opc_parent_rpt_url DatascienceModelDeployment#opc_parent_rpt_url}
  */
  readonly opcParentRptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#project_id DatascienceModelDeployment#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#state DatascienceModelDeployment#state}
  */
  readonly state?: string;
  /**
  * category_log_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#category_log_details DatascienceModelDeployment#category_log_details}
  */
  readonly categoryLogDetails?: DatascienceModelDeploymentCategoryLogDetails;
  /**
  * model_deployment_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#model_deployment_configuration_details DatascienceModelDeployment#model_deployment_configuration_details}
  */
  readonly modelDeploymentConfigurationDetails: DatascienceModelDeploymentModelDeploymentConfigurationDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#timeouts DatascienceModelDeployment#timeouts}
  */
  readonly timeouts?: DatascienceModelDeploymentTimeouts;
}
export interface DatascienceModelDeploymentModelDeploymentSystemData {
}

export function datascienceModelDeploymentModelDeploymentSystemDataToTerraform(struct?: DatascienceModelDeploymentModelDeploymentSystemData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceModelDeploymentModelDeploymentSystemDataToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentSystemData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceModelDeploymentModelDeploymentSystemDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelDeploymentModelDeploymentSystemData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentSystemData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_instance_count - computed: true, optional: false, required: false
  public get currentInstanceCount() {
    return this.getNumberAttribute('current_instance_count');
  }

  // system_infra_type - computed: true, optional: false, required: false
  public get systemInfraType() {
    return this.getStringAttribute('system_infra_type');
  }
}

export class DatascienceModelDeploymentModelDeploymentSystemDataList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceModelDeploymentModelDeploymentSystemDataOutputReference {
    return new DatascienceModelDeploymentModelDeploymentSystemDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelDeploymentCategoryLogDetailsAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#log_group_id DatascienceModelDeployment#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#log_id DatascienceModelDeployment#log_id}
  */
  readonly logId: string;
}

export function datascienceModelDeploymentCategoryLogDetailsAccessToTerraform(struct?: DatascienceModelDeploymentCategoryLogDetailsAccessOutputReference | DatascienceModelDeploymentCategoryLogDetailsAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceModelDeploymentCategoryLogDetailsAccessToHclTerraform(struct?: DatascienceModelDeploymentCategoryLogDetailsAccessOutputReference | DatascienceModelDeploymentCategoryLogDetailsAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentCategoryLogDetailsAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentCategoryLogDetailsAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentCategoryLogDetailsAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: false, optional: false, required: true
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceModelDeploymentCategoryLogDetailsPredict {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#log_group_id DatascienceModelDeployment#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#log_id DatascienceModelDeployment#log_id}
  */
  readonly logId: string;
}

export function datascienceModelDeploymentCategoryLogDetailsPredictToTerraform(struct?: DatascienceModelDeploymentCategoryLogDetailsPredictOutputReference | DatascienceModelDeploymentCategoryLogDetailsPredict): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceModelDeploymentCategoryLogDetailsPredictToHclTerraform(struct?: DatascienceModelDeploymentCategoryLogDetailsPredictOutputReference | DatascienceModelDeploymentCategoryLogDetailsPredict): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentCategoryLogDetailsPredictOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentCategoryLogDetailsPredict | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentCategoryLogDetailsPredict | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: false, optional: false, required: true
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceModelDeploymentCategoryLogDetails {
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#access DatascienceModelDeployment#access}
  */
  readonly access?: DatascienceModelDeploymentCategoryLogDetailsAccess;
  /**
  * predict block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#predict DatascienceModelDeployment#predict}
  */
  readonly predict?: DatascienceModelDeploymentCategoryLogDetailsPredict;
}

export function datascienceModelDeploymentCategoryLogDetailsToTerraform(struct?: DatascienceModelDeploymentCategoryLogDetailsOutputReference | DatascienceModelDeploymentCategoryLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: datascienceModelDeploymentCategoryLogDetailsAccessToTerraform(struct!.access),
    predict: datascienceModelDeploymentCategoryLogDetailsPredictToTerraform(struct!.predict),
  }
}


export function datascienceModelDeploymentCategoryLogDetailsToHclTerraform(struct?: DatascienceModelDeploymentCategoryLogDetailsOutputReference | DatascienceModelDeploymentCategoryLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: datascienceModelDeploymentCategoryLogDetailsAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentCategoryLogDetailsAccessList",
    },
    predict: {
      value: datascienceModelDeploymentCategoryLogDetailsPredictToHclTerraform(struct!.predict),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentCategoryLogDetailsPredictList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentCategoryLogDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentCategoryLogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._predict?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predict = this._predict?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentCategoryLogDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._access.internalValue = undefined;
      this._predict.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._access.internalValue = value.access;
      this._predict.internalValue = value.predict;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access = new DatascienceModelDeploymentCategoryLogDetailsAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: DatascienceModelDeploymentCategoryLogDetailsAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // predict - computed: false, optional: true, required: false
  private _predict = new DatascienceModelDeploymentCategoryLogDetailsPredictOutputReference(this, "predict");
  public get predict() {
    return this._predict;
  }
  public putPredict(value: DatascienceModelDeploymentCategoryLogDetailsPredict) {
    this._predict.internalValue = value;
  }
  public resetPredict() {
    this._predict.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictInput() {
    return this._predict.internalValue;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#cmd DatascienceModelDeployment#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#entrypoint DatascienceModelDeployment#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#environment_configuration_type DatascienceModelDeployment#environment_configuration_type}
  */
  readonly environmentConfigurationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#environment_variables DatascienceModelDeployment#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#health_check_port DatascienceModelDeployment#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#image DatascienceModelDeployment#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#image_digest DatascienceModelDeployment#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#server_port DatascienceModelDeployment#server_port}
  */
  readonly serverPort?: number;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    environment_configuration_type: cdktf.stringToTerraform(struct!.environmentConfigurationType),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment_configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentConfigurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._environmentConfigurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentConfigurationType = this._environmentConfigurationType;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
      this._entrypoint = undefined;
      this._environmentConfigurationType = undefined;
      this._environmentVariables = undefined;
      this._healthCheckPort = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._serverPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
      this._entrypoint = value.entrypoint;
      this._environmentConfigurationType = value.environmentConfigurationType;
      this._environmentVariables = value.environmentVariables;
      this._healthCheckPort = value.healthCheckPort;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._serverPort = value.serverPort;
    }
  }

  // cmd - computed: true, optional: true, required: false
  private _cmd?: string[]; 
  public get cmd() {
    return this.getListAttribute('cmd');
  }
  public set cmd(value: string[]) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment_configuration_type - computed: false, optional: false, required: true
  private _environmentConfigurationType?: string; 
  public get environmentConfigurationType() {
    return this.getStringAttribute('environment_configuration_type');
  }
  public set environmentConfigurationType(value: string) {
    this._environmentConfigurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigurationTypeInput() {
    return this._environmentConfigurationType;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // health_check_port - computed: true, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#cpu_baseline DatascienceModelDeployment#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#memory_in_gbs DatascienceModelDeployment#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#ocpus DatascienceModelDeployment#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_shape_name DatascienceModelDeployment#instance_shape_name}
  */
  readonly instanceShapeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#private_endpoint_id DatascienceModelDeployment#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#subnet_id DatascienceModelDeployment#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * model_deployment_instance_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#model_deployment_instance_shape_config_details DatascienceModelDeployment#model_deployment_instance_shape_config_details}
  */
  readonly modelDeploymentInstanceShapeConfigDetails?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_shape_name: cdktf.stringToTerraform(struct!.instanceShapeName),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    model_deployment_instance_shape_config_details: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToTerraform(struct!.modelDeploymentInstanceShapeConfigDetails),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_shape_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceShapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_deployment_instance_shape_config_details: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToHclTerraform(struct!.modelDeploymentInstanceShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceShapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceShapeName = this._instanceShapeName;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._modelDeploymentInstanceShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDeploymentInstanceShapeConfigDetails = this._modelDeploymentInstanceShapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceShapeName = undefined;
      this._privateEndpointId = undefined;
      this._subnetId = undefined;
      this._modelDeploymentInstanceShapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceShapeName = value.instanceShapeName;
      this._privateEndpointId = value.privateEndpointId;
      this._subnetId = value.subnetId;
      this._modelDeploymentInstanceShapeConfigDetails.internalValue = value.modelDeploymentInstanceShapeConfigDetails;
    }
  }

  // instance_shape_name - computed: false, optional: false, required: true
  private _instanceShapeName?: string; 
  public get instanceShapeName() {
    return this.getStringAttribute('instance_shape_name');
  }
  public set instanceShapeName(value: string) {
    this._instanceShapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShapeNameInput() {
    return this._instanceShapeName;
  }

  // private_endpoint_id - computed: true, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // model_deployment_instance_shape_config_details - computed: false, optional: true, required: false
  private _modelDeploymentInstanceShapeConfigDetails = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference(this, "model_deployment_instance_shape_config_details");
  public get modelDeploymentInstanceShapeConfigDetails() {
    return this._modelDeploymentInstanceShapeConfigDetails;
  }
  public putModelDeploymentInstanceShapeConfigDetails(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails) {
    this._modelDeploymentInstanceShapeConfigDetails.internalValue = value;
  }
  public resetModelDeploymentInstanceShapeConfigDetails() {
    this._modelDeploymentInstanceShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDeploymentInstanceShapeConfigDetailsInput() {
    return this._modelDeploymentInstanceShapeConfigDetails.internalValue;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_count_adjustment DatascienceModelDeployment#instance_count_adjustment}
  */
  readonly instanceCountAdjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#pending_duration DatascienceModelDeployment#pending_duration}
  */
  readonly pendingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#query DatascienceModelDeployment#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scaling_configuration_type DatascienceModelDeployment#scaling_configuration_type}
  */
  readonly scalingConfigurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#threshold DatascienceModelDeployment#threshold}
  */
  readonly threshold?: number;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count_adjustment: cdktf.numberToTerraform(struct!.instanceCountAdjustment),
    pending_duration: cdktf.stringToTerraform(struct!.pendingDuration),
    query: cdktf.stringToTerraform(struct!.query),
    scaling_configuration_type: cdktf.stringToTerraform(struct!.scalingConfigurationType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.instanceCountAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_duration: {
      value: cdktf.stringToHclTerraform(struct!.pendingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingConfigurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCountAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCountAdjustment = this._instanceCountAdjustment;
    }
    if (this._pendingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDuration = this._pendingDuration;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._scalingConfigurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfigurationType = this._scalingConfigurationType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceCountAdjustment = undefined;
      this._pendingDuration = undefined;
      this._query = undefined;
      this._scalingConfigurationType = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceCountAdjustment = value.instanceCountAdjustment;
      this._pendingDuration = value.pendingDuration;
      this._query = value.query;
      this._scalingConfigurationType = value.scalingConfigurationType;
      this._threshold = value.threshold;
    }
  }

  // instance_count_adjustment - computed: true, optional: true, required: false
  private _instanceCountAdjustment?: number; 
  public get instanceCountAdjustment() {
    return this.getNumberAttribute('instance_count_adjustment');
  }
  public set instanceCountAdjustment(value: number) {
    this._instanceCountAdjustment = value;
  }
  public resetInstanceCountAdjustment() {
    this._instanceCountAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountAdjustmentInput() {
    return this._instanceCountAdjustment;
  }

  // pending_duration - computed: true, optional: true, required: false
  private _pendingDuration?: string; 
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string) {
    this._pendingDuration = value;
  }
  public resetPendingDuration() {
    this._pendingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationInput() {
    return this._pendingDuration;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // scaling_configuration_type - computed: true, optional: true, required: false
  private _scalingConfigurationType?: string; 
  public get scalingConfigurationType() {
    return this.getStringAttribute('scaling_configuration_type');
  }
  public set scalingConfigurationType(value: string) {
    this._scalingConfigurationType = value;
  }
  public resetScalingConfigurationType() {
    this._scalingConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationTypeInput() {
    return this._scalingConfigurationType;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_count_adjustment DatascienceModelDeployment#instance_count_adjustment}
  */
  readonly instanceCountAdjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#pending_duration DatascienceModelDeployment#pending_duration}
  */
  readonly pendingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#query DatascienceModelDeployment#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scaling_configuration_type DatascienceModelDeployment#scaling_configuration_type}
  */
  readonly scalingConfigurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#threshold DatascienceModelDeployment#threshold}
  */
  readonly threshold?: number;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count_adjustment: cdktf.numberToTerraform(struct!.instanceCountAdjustment),
    pending_duration: cdktf.stringToTerraform(struct!.pendingDuration),
    query: cdktf.stringToTerraform(struct!.query),
    scaling_configuration_type: cdktf.stringToTerraform(struct!.scalingConfigurationType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.instanceCountAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_duration: {
      value: cdktf.stringToHclTerraform(struct!.pendingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingConfigurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCountAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCountAdjustment = this._instanceCountAdjustment;
    }
    if (this._pendingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDuration = this._pendingDuration;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._scalingConfigurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfigurationType = this._scalingConfigurationType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceCountAdjustment = undefined;
      this._pendingDuration = undefined;
      this._query = undefined;
      this._scalingConfigurationType = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceCountAdjustment = value.instanceCountAdjustment;
      this._pendingDuration = value.pendingDuration;
      this._query = value.query;
      this._scalingConfigurationType = value.scalingConfigurationType;
      this._threshold = value.threshold;
    }
  }

  // instance_count_adjustment - computed: true, optional: true, required: false
  private _instanceCountAdjustment?: number; 
  public get instanceCountAdjustment() {
    return this.getNumberAttribute('instance_count_adjustment');
  }
  public set instanceCountAdjustment(value: number) {
    this._instanceCountAdjustment = value;
  }
  public resetInstanceCountAdjustment() {
    this._instanceCountAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountAdjustmentInput() {
    return this._instanceCountAdjustment;
  }

  // pending_duration - computed: true, optional: true, required: false
  private _pendingDuration?: string; 
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string) {
    this._pendingDuration = value;
  }
  public resetPendingDuration() {
    this._pendingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationInput() {
    return this._pendingDuration;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // scaling_configuration_type - computed: true, optional: true, required: false
  private _scalingConfigurationType?: string; 
  public get scalingConfigurationType() {
    return this.getStringAttribute('scaling_configuration_type');
  }
  public set scalingConfigurationType(value: string) {
    this._scalingConfigurationType = value;
  }
  public resetScalingConfigurationType() {
    this._scalingConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationTypeInput() {
    return this._scalingConfigurationType;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#metric_expression_rule_type DatascienceModelDeployment#metric_expression_rule_type}
  */
  readonly metricExpressionRuleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#metric_type DatascienceModelDeployment#metric_type}
  */
  readonly metricType?: string;
  /**
  * scale_in_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scale_in_configuration DatascienceModelDeployment#scale_in_configuration}
  */
  readonly scaleInConfiguration: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration;
  /**
  * scale_out_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scale_out_configuration DatascienceModelDeployment#scale_out_configuration}
  */
  readonly scaleOutConfiguration: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_expression_rule_type: cdktf.stringToTerraform(struct!.metricExpressionRuleType),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    scale_in_configuration: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToTerraform(struct!.scaleInConfiguration),
    scale_out_configuration: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToTerraform(struct!.scaleOutConfiguration),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_expression_rule_type: {
      value: cdktf.stringToHclTerraform(struct!.metricExpressionRuleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_in_configuration: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToHclTerraform(struct!.scaleInConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList",
    },
    scale_out_configuration: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToHclTerraform(struct!.scaleOutConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricExpressionRuleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricExpressionRuleType = this._metricExpressionRuleType;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._scaleInConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInConfiguration = this._scaleInConfiguration?.internalValue;
    }
    if (this._scaleOutConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutConfiguration = this._scaleOutConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricExpressionRuleType = undefined;
      this._metricType = undefined;
      this._scaleInConfiguration.internalValue = undefined;
      this._scaleOutConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricExpressionRuleType = value.metricExpressionRuleType;
      this._metricType = value.metricType;
      this._scaleInConfiguration.internalValue = value.scaleInConfiguration;
      this._scaleOutConfiguration.internalValue = value.scaleOutConfiguration;
    }
  }

  // metric_expression_rule_type - computed: false, optional: false, required: true
  private _metricExpressionRuleType?: string; 
  public get metricExpressionRuleType() {
    return this.getStringAttribute('metric_expression_rule_type');
  }
  public set metricExpressionRuleType(value: string) {
    this._metricExpressionRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExpressionRuleTypeInput() {
    return this._metricExpressionRuleType;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // scale_in_configuration - computed: false, optional: false, required: true
  private _scaleInConfiguration = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference(this, "scale_in_configuration");
  public get scaleInConfiguration() {
    return this._scaleInConfiguration;
  }
  public putScaleInConfiguration(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration) {
    this._scaleInConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInConfigurationInput() {
    return this._scaleInConfiguration.internalValue;
  }

  // scale_out_configuration - computed: false, optional: false, required: true
  private _scaleOutConfiguration = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference(this, "scale_out_configuration");
  public get scaleOutConfiguration() {
    return this._scaleOutConfiguration;
  }
  public putScaleOutConfiguration(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration) {
    this._scaleOutConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutConfigurationInput() {
    return this._scaleOutConfiguration.internalValue;
  }
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference {
    return new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#auto_scaling_policy_type DatascienceModelDeployment#auto_scaling_policy_type}
  */
  readonly autoScalingPolicyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#initial_instance_count DatascienceModelDeployment#initial_instance_count}
  */
  readonly initialInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#maximum_instance_count DatascienceModelDeployment#maximum_instance_count}
  */
  readonly maximumInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#minimum_instance_count DatascienceModelDeployment#minimum_instance_count}
  */
  readonly minimumInstanceCount: number;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#rules DatascienceModelDeployment#rules}
  */
  readonly rules: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules[] | cdktf.IResolvable;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling_policy_type: cdktf.stringToTerraform(struct!.autoScalingPolicyType),
    initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
    maximum_instance_count: cdktf.numberToTerraform(struct!.maximumInstanceCount),
    minimum_instance_count: cdktf.numberToTerraform(struct!.minimumInstanceCount),
    rules: cdktf.listMapper(datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToTerraform, true)(struct!.rules),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minimumInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: cdktf.listMapperHcl(datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingPolicyType = this._autoScalingPolicyType;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._maximumInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumInstanceCount = this._maximumInstanceCount;
    }
    if (this._minimumInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInstanceCount = this._minimumInstanceCount;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingPolicyType = undefined;
      this._initialInstanceCount = undefined;
      this._maximumInstanceCount = undefined;
      this._minimumInstanceCount = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingPolicyType = value.autoScalingPolicyType;
      this._initialInstanceCount = value.initialInstanceCount;
      this._maximumInstanceCount = value.maximumInstanceCount;
      this._minimumInstanceCount = value.minimumInstanceCount;
      this._rules.internalValue = value.rules;
    }
  }

  // auto_scaling_policy_type - computed: false, optional: false, required: true
  private _autoScalingPolicyType?: string; 
  public get autoScalingPolicyType() {
    return this.getStringAttribute('auto_scaling_policy_type');
  }
  public set autoScalingPolicyType(value: string) {
    this._autoScalingPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPolicyTypeInput() {
    return this._autoScalingPolicyType;
  }

  // initial_instance_count - computed: false, optional: false, required: true
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // maximum_instance_count - computed: false, optional: false, required: true
  private _maximumInstanceCount?: number; 
  public get maximumInstanceCount() {
    return this.getNumberAttribute('maximum_instance_count');
  }
  public set maximumInstanceCount(value: number) {
    this._maximumInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInstanceCountInput() {
    return this._maximumInstanceCount;
  }

  // minimum_instance_count - computed: false, optional: false, required: true
  private _minimumInstanceCount?: number; 
  public get minimumInstanceCount() {
    return this.getNumberAttribute('minimum_instance_count');
  }
  public set minimumInstanceCount(value: number) {
    this._minimumInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstanceCountInput() {
    return this._minimumInstanceCount;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference {
    return new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#cool_down_in_seconds DatascienceModelDeployment#cool_down_in_seconds}
  */
  readonly coolDownInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_count DatascienceModelDeployment#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#is_enabled DatascienceModelDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#policy_type DatascienceModelDeployment#policy_type}
  */
  readonly policyType: string;
  /**
  * auto_scaling_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#auto_scaling_policies DatascienceModelDeployment#auto_scaling_policies}
  */
  readonly autoScalingPolicies?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies[] | cdktf.IResolvable;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down_in_seconds: cdktf.numberToTerraform(struct!.coolDownInSeconds),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    auto_scaling_policies: cdktf.listMapper(datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesToTerraform, true)(struct!.autoScalingPolicies),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.coolDownInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling_policies: {
      value: cdktf.listMapperHcl(datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesToHclTerraform, true)(struct!.autoScalingPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDownInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDownInSeconds = this._coolDownInSeconds;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._autoScalingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingPolicies = this._autoScalingPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolDownInSeconds = undefined;
      this._instanceCount = undefined;
      this._isEnabled = undefined;
      this._policyType = undefined;
      this._autoScalingPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolDownInSeconds = value.coolDownInSeconds;
      this._instanceCount = value.instanceCount;
      this._isEnabled = value.isEnabled;
      this._policyType = value.policyType;
      this._autoScalingPolicies.internalValue = value.autoScalingPolicies;
    }
  }

  // cool_down_in_seconds - computed: true, optional: true, required: false
  private _coolDownInSeconds?: number; 
  public get coolDownInSeconds() {
    return this.getNumberAttribute('cool_down_in_seconds');
  }
  public set coolDownInSeconds(value: number) {
    this._coolDownInSeconds = value;
  }
  public resetCoolDownInSeconds() {
    this._coolDownInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInSecondsInput() {
    return this._coolDownInSeconds;
  }

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // auto_scaling_policies - computed: false, optional: true, required: false
  private _autoScalingPolicies = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPoliciesList(this, "auto_scaling_policies", false);
  public get autoScalingPolicies() {
    return this._autoScalingPolicies;
  }
  public putAutoScalingPolicies(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyAutoScalingPolicies[] | cdktf.IResolvable) {
    this._autoScalingPolicies.internalValue = value;
  }
  public resetAutoScalingPolicies() {
    this._autoScalingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPoliciesInput() {
    return this._autoScalingPolicies.internalValue;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#bandwidth_mbps DatascienceModelDeployment#bandwidth_mbps}
  */
  readonly bandwidthMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#infrastructure_type DatascienceModelDeployment#infrastructure_type}
  */
  readonly infrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#maximum_bandwidth_mbps DatascienceModelDeployment#maximum_bandwidth_mbps}
  */
  readonly maximumBandwidthMbps?: number;
  /**
  * instance_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_configuration DatascienceModelDeployment#instance_configuration}
  */
  readonly instanceConfiguration: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfiguration;
  /**
  * scaling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scaling_policy DatascienceModelDeployment#scaling_policy}
  */
  readonly scalingPolicy?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicy;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_mbps: cdktf.numberToTerraform(struct!.bandwidthMbps),
    infrastructure_type: cdktf.stringToTerraform(struct!.infrastructureType),
    maximum_bandwidth_mbps: cdktf.numberToTerraform(struct!.maximumBandwidthMbps),
    instance_configuration: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationToTerraform(struct!.instanceConfiguration),
    scaling_policy: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyToTerraform(struct!.scalingPolicy),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_mbps: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    infrastructure_type: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_bandwidth_mbps: {
      value: cdktf.numberToHclTerraform(struct!.maximumBandwidthMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_configuration: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationToHclTerraform(struct!.instanceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationList",
    },
    scaling_policy: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyToHclTerraform(struct!.scalingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthMbps = this._bandwidthMbps;
    }
    if (this._infrastructureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureType = this._infrastructureType;
    }
    if (this._maximumBandwidthMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBandwidthMbps = this._maximumBandwidthMbps;
    }
    if (this._instanceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfiguration = this._instanceConfiguration?.internalValue;
    }
    if (this._scalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthMbps = undefined;
      this._infrastructureType = undefined;
      this._maximumBandwidthMbps = undefined;
      this._instanceConfiguration.internalValue = undefined;
      this._scalingPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthMbps = value.bandwidthMbps;
      this._infrastructureType = value.infrastructureType;
      this._maximumBandwidthMbps = value.maximumBandwidthMbps;
      this._instanceConfiguration.internalValue = value.instanceConfiguration;
      this._scalingPolicy.internalValue = value.scalingPolicy;
    }
  }

  // bandwidth_mbps - computed: true, optional: true, required: false
  private _bandwidthMbps?: number; 
  public get bandwidthMbps() {
    return this.getNumberAttribute('bandwidth_mbps');
  }
  public set bandwidthMbps(value: number) {
    this._bandwidthMbps = value;
  }
  public resetBandwidthMbps() {
    this._bandwidthMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMbpsInput() {
    return this._bandwidthMbps;
  }

  // infrastructure_type - computed: false, optional: false, required: true
  private _infrastructureType?: string; 
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }
  public set infrastructureType(value: string) {
    this._infrastructureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureTypeInput() {
    return this._infrastructureType;
  }

  // maximum_bandwidth_mbps - computed: true, optional: true, required: false
  private _maximumBandwidthMbps?: number; 
  public get maximumBandwidthMbps() {
    return this.getNumberAttribute('maximum_bandwidth_mbps');
  }
  public set maximumBandwidthMbps(value: number) {
    this._maximumBandwidthMbps = value;
  }
  public resetMaximumBandwidthMbps() {
    this._maximumBandwidthMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBandwidthMbpsInput() {
    return this._maximumBandwidthMbps;
  }

  // instance_configuration - computed: false, optional: false, required: true
  private _instanceConfiguration = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfigurationOutputReference(this, "instance_configuration");
  public get instanceConfiguration() {
    return this._instanceConfiguration;
  }
  public putInstanceConfiguration(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsInstanceConfiguration) {
    this._instanceConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationInput() {
    return this._instanceConfiguration.internalValue;
  }

  // scaling_policy - computed: false, optional: true, required: false
  private _scalingPolicy = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicyOutputReference(this, "scaling_policy");
  public get scalingPolicy() {
    return this._scalingPolicy;
  }
  public putScalingPolicy(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsScalingPolicy) {
    this._scalingPolicy.internalValue = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy.internalValue;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#cpu_baseline DatascienceModelDeployment#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#memory_in_gbs DatascienceModelDeployment#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#ocpus DatascienceModelDeployment#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_shape_name DatascienceModelDeployment#instance_shape_name}
  */
  readonly instanceShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#private_endpoint_id DatascienceModelDeployment#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#subnet_id DatascienceModelDeployment#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * model_deployment_instance_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#model_deployment_instance_shape_config_details DatascienceModelDeployment#model_deployment_instance_shape_config_details}
  */
  readonly modelDeploymentInstanceShapeConfigDetails?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_shape_name: cdktf.stringToTerraform(struct!.instanceShapeName),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    model_deployment_instance_shape_config_details: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToTerraform(struct!.modelDeploymentInstanceShapeConfigDetails),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_shape_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceShapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_deployment_instance_shape_config_details: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsToHclTerraform(struct!.modelDeploymentInstanceShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceShapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceShapeName = this._instanceShapeName;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._modelDeploymentInstanceShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDeploymentInstanceShapeConfigDetails = this._modelDeploymentInstanceShapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceShapeName = undefined;
      this._privateEndpointId = undefined;
      this._subnetId = undefined;
      this._modelDeploymentInstanceShapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceShapeName = value.instanceShapeName;
      this._privateEndpointId = value.privateEndpointId;
      this._subnetId = value.subnetId;
      this._modelDeploymentInstanceShapeConfigDetails.internalValue = value.modelDeploymentInstanceShapeConfigDetails;
    }
  }

  // instance_shape_name - computed: true, optional: true, required: false
  private _instanceShapeName?: string; 
  public get instanceShapeName() {
    return this.getStringAttribute('instance_shape_name');
  }
  public set instanceShapeName(value: string) {
    this._instanceShapeName = value;
  }
  public resetInstanceShapeName() {
    this._instanceShapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShapeNameInput() {
    return this._instanceShapeName;
  }

  // private_endpoint_id - computed: true, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // model_deployment_instance_shape_config_details - computed: false, optional: true, required: false
  private _modelDeploymentInstanceShapeConfigDetails = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference(this, "model_deployment_instance_shape_config_details");
  public get modelDeploymentInstanceShapeConfigDetails() {
    return this._modelDeploymentInstanceShapeConfigDetails;
  }
  public putModelDeploymentInstanceShapeConfigDetails(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails) {
    this._modelDeploymentInstanceShapeConfigDetails.internalValue = value;
  }
  public resetModelDeploymentInstanceShapeConfigDetails() {
    this._modelDeploymentInstanceShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDeploymentInstanceShapeConfigDetailsInput() {
    return this._modelDeploymentInstanceShapeConfigDetails.internalValue;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_count_adjustment DatascienceModelDeployment#instance_count_adjustment}
  */
  readonly instanceCountAdjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#pending_duration DatascienceModelDeployment#pending_duration}
  */
  readonly pendingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#query DatascienceModelDeployment#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scaling_configuration_type DatascienceModelDeployment#scaling_configuration_type}
  */
  readonly scalingConfigurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#threshold DatascienceModelDeployment#threshold}
  */
  readonly threshold?: number;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count_adjustment: cdktf.numberToTerraform(struct!.instanceCountAdjustment),
    pending_duration: cdktf.stringToTerraform(struct!.pendingDuration),
    query: cdktf.stringToTerraform(struct!.query),
    scaling_configuration_type: cdktf.stringToTerraform(struct!.scalingConfigurationType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.instanceCountAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_duration: {
      value: cdktf.stringToHclTerraform(struct!.pendingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingConfigurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCountAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCountAdjustment = this._instanceCountAdjustment;
    }
    if (this._pendingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDuration = this._pendingDuration;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._scalingConfigurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfigurationType = this._scalingConfigurationType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceCountAdjustment = undefined;
      this._pendingDuration = undefined;
      this._query = undefined;
      this._scalingConfigurationType = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceCountAdjustment = value.instanceCountAdjustment;
      this._pendingDuration = value.pendingDuration;
      this._query = value.query;
      this._scalingConfigurationType = value.scalingConfigurationType;
      this._threshold = value.threshold;
    }
  }

  // instance_count_adjustment - computed: true, optional: true, required: false
  private _instanceCountAdjustment?: number; 
  public get instanceCountAdjustment() {
    return this.getNumberAttribute('instance_count_adjustment');
  }
  public set instanceCountAdjustment(value: number) {
    this._instanceCountAdjustment = value;
  }
  public resetInstanceCountAdjustment() {
    this._instanceCountAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountAdjustmentInput() {
    return this._instanceCountAdjustment;
  }

  // pending_duration - computed: true, optional: true, required: false
  private _pendingDuration?: string; 
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string) {
    this._pendingDuration = value;
  }
  public resetPendingDuration() {
    this._pendingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationInput() {
    return this._pendingDuration;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // scaling_configuration_type - computed: true, optional: true, required: false
  private _scalingConfigurationType?: string; 
  public get scalingConfigurationType() {
    return this.getStringAttribute('scaling_configuration_type');
  }
  public set scalingConfigurationType(value: string) {
    this._scalingConfigurationType = value;
  }
  public resetScalingConfigurationType() {
    this._scalingConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationTypeInput() {
    return this._scalingConfigurationType;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_count_adjustment DatascienceModelDeployment#instance_count_adjustment}
  */
  readonly instanceCountAdjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#pending_duration DatascienceModelDeployment#pending_duration}
  */
  readonly pendingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#query DatascienceModelDeployment#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scaling_configuration_type DatascienceModelDeployment#scaling_configuration_type}
  */
  readonly scalingConfigurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#threshold DatascienceModelDeployment#threshold}
  */
  readonly threshold?: number;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count_adjustment: cdktf.numberToTerraform(struct!.instanceCountAdjustment),
    pending_duration: cdktf.stringToTerraform(struct!.pendingDuration),
    query: cdktf.stringToTerraform(struct!.query),
    scaling_configuration_type: cdktf.stringToTerraform(struct!.scalingConfigurationType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.instanceCountAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_duration: {
      value: cdktf.stringToHclTerraform(struct!.pendingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingConfigurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCountAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCountAdjustment = this._instanceCountAdjustment;
    }
    if (this._pendingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDuration = this._pendingDuration;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._scalingConfigurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfigurationType = this._scalingConfigurationType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceCountAdjustment = undefined;
      this._pendingDuration = undefined;
      this._query = undefined;
      this._scalingConfigurationType = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceCountAdjustment = value.instanceCountAdjustment;
      this._pendingDuration = value.pendingDuration;
      this._query = value.query;
      this._scalingConfigurationType = value.scalingConfigurationType;
      this._threshold = value.threshold;
    }
  }

  // instance_count_adjustment - computed: true, optional: true, required: false
  private _instanceCountAdjustment?: number; 
  public get instanceCountAdjustment() {
    return this.getNumberAttribute('instance_count_adjustment');
  }
  public set instanceCountAdjustment(value: number) {
    this._instanceCountAdjustment = value;
  }
  public resetInstanceCountAdjustment() {
    this._instanceCountAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountAdjustmentInput() {
    return this._instanceCountAdjustment;
  }

  // pending_duration - computed: true, optional: true, required: false
  private _pendingDuration?: string; 
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string) {
    this._pendingDuration = value;
  }
  public resetPendingDuration() {
    this._pendingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationInput() {
    return this._pendingDuration;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // scaling_configuration_type - computed: true, optional: true, required: false
  private _scalingConfigurationType?: string; 
  public get scalingConfigurationType() {
    return this.getStringAttribute('scaling_configuration_type');
  }
  public set scalingConfigurationType(value: string) {
    this._scalingConfigurationType = value;
  }
  public resetScalingConfigurationType() {
    this._scalingConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationTypeInput() {
    return this._scalingConfigurationType;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#metric_expression_rule_type DatascienceModelDeployment#metric_expression_rule_type}
  */
  readonly metricExpressionRuleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#metric_type DatascienceModelDeployment#metric_type}
  */
  readonly metricType?: string;
  /**
  * scale_in_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scale_in_configuration DatascienceModelDeployment#scale_in_configuration}
  */
  readonly scaleInConfiguration: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration;
  /**
  * scale_out_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scale_out_configuration DatascienceModelDeployment#scale_out_configuration}
  */
  readonly scaleOutConfiguration: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_expression_rule_type: cdktf.stringToTerraform(struct!.metricExpressionRuleType),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    scale_in_configuration: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToTerraform(struct!.scaleInConfiguration),
    scale_out_configuration: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToTerraform(struct!.scaleOutConfiguration),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_expression_rule_type: {
      value: cdktf.stringToHclTerraform(struct!.metricExpressionRuleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_in_configuration: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationToHclTerraform(struct!.scaleInConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList",
    },
    scale_out_configuration: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationToHclTerraform(struct!.scaleOutConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricExpressionRuleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricExpressionRuleType = this._metricExpressionRuleType;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._scaleInConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInConfiguration = this._scaleInConfiguration?.internalValue;
    }
    if (this._scaleOutConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutConfiguration = this._scaleOutConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricExpressionRuleType = undefined;
      this._metricType = undefined;
      this._scaleInConfiguration.internalValue = undefined;
      this._scaleOutConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricExpressionRuleType = value.metricExpressionRuleType;
      this._metricType = value.metricType;
      this._scaleInConfiguration.internalValue = value.scaleInConfiguration;
      this._scaleOutConfiguration.internalValue = value.scaleOutConfiguration;
    }
  }

  // metric_expression_rule_type - computed: false, optional: false, required: true
  private _metricExpressionRuleType?: string; 
  public get metricExpressionRuleType() {
    return this.getStringAttribute('metric_expression_rule_type');
  }
  public set metricExpressionRuleType(value: string) {
    this._metricExpressionRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExpressionRuleTypeInput() {
    return this._metricExpressionRuleType;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // scale_in_configuration - computed: false, optional: false, required: true
  private _scaleInConfiguration = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference(this, "scale_in_configuration");
  public get scaleInConfiguration() {
    return this._scaleInConfiguration;
  }
  public putScaleInConfiguration(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration) {
    this._scaleInConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInConfigurationInput() {
    return this._scaleInConfiguration.internalValue;
  }

  // scale_out_configuration - computed: false, optional: false, required: true
  private _scaleOutConfiguration = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference(this, "scale_out_configuration");
  public get scaleOutConfiguration() {
    return this._scaleOutConfiguration;
  }
  public putScaleOutConfiguration(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration) {
    this._scaleOutConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutConfigurationInput() {
    return this._scaleOutConfiguration.internalValue;
  }
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference {
    return new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#auto_scaling_policy_type DatascienceModelDeployment#auto_scaling_policy_type}
  */
  readonly autoScalingPolicyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#initial_instance_count DatascienceModelDeployment#initial_instance_count}
  */
  readonly initialInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#maximum_instance_count DatascienceModelDeployment#maximum_instance_count}
  */
  readonly maximumInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#minimum_instance_count DatascienceModelDeployment#minimum_instance_count}
  */
  readonly minimumInstanceCount: number;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#rules DatascienceModelDeployment#rules}
  */
  readonly rules: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules[] | cdktf.IResolvable;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling_policy_type: cdktf.stringToTerraform(struct!.autoScalingPolicyType),
    initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
    maximum_instance_count: cdktf.numberToTerraform(struct!.maximumInstanceCount),
    minimum_instance_count: cdktf.numberToTerraform(struct!.minimumInstanceCount),
    rules: cdktf.listMapper(datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToTerraform, true)(struct!.rules),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minimumInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: cdktf.listMapperHcl(datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingPolicyType = this._autoScalingPolicyType;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._maximumInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumInstanceCount = this._maximumInstanceCount;
    }
    if (this._minimumInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInstanceCount = this._minimumInstanceCount;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingPolicyType = undefined;
      this._initialInstanceCount = undefined;
      this._maximumInstanceCount = undefined;
      this._minimumInstanceCount = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingPolicyType = value.autoScalingPolicyType;
      this._initialInstanceCount = value.initialInstanceCount;
      this._maximumInstanceCount = value.maximumInstanceCount;
      this._minimumInstanceCount = value.minimumInstanceCount;
      this._rules.internalValue = value.rules;
    }
  }

  // auto_scaling_policy_type - computed: false, optional: false, required: true
  private _autoScalingPolicyType?: string; 
  public get autoScalingPolicyType() {
    return this.getStringAttribute('auto_scaling_policy_type');
  }
  public set autoScalingPolicyType(value: string) {
    this._autoScalingPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPolicyTypeInput() {
    return this._autoScalingPolicyType;
  }

  // initial_instance_count - computed: false, optional: false, required: true
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // maximum_instance_count - computed: false, optional: false, required: true
  private _maximumInstanceCount?: number; 
  public get maximumInstanceCount() {
    return this.getNumberAttribute('maximum_instance_count');
  }
  public set maximumInstanceCount(value: number) {
    this._maximumInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInstanceCountInput() {
    return this._maximumInstanceCount;
  }

  // minimum_instance_count - computed: false, optional: false, required: true
  private _minimumInstanceCount?: number; 
  public get minimumInstanceCount() {
    return this.getNumberAttribute('minimum_instance_count');
  }
  public set minimumInstanceCount(value: number) {
    this._minimumInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstanceCountInput() {
    return this._minimumInstanceCount;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference {
    return new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#cool_down_in_seconds DatascienceModelDeployment#cool_down_in_seconds}
  */
  readonly coolDownInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_count DatascienceModelDeployment#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#is_enabled DatascienceModelDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#policy_type DatascienceModelDeployment#policy_type}
  */
  readonly policyType: string;
  /**
  * auto_scaling_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#auto_scaling_policies DatascienceModelDeployment#auto_scaling_policies}
  */
  readonly autoScalingPolicies?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies[] | cdktf.IResolvable;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down_in_seconds: cdktf.numberToTerraform(struct!.coolDownInSeconds),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    auto_scaling_policies: cdktf.listMapper(datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesToTerraform, true)(struct!.autoScalingPolicies),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.coolDownInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling_policies: {
      value: cdktf.listMapperHcl(datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesToHclTerraform, true)(struct!.autoScalingPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDownInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDownInSeconds = this._coolDownInSeconds;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._autoScalingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingPolicies = this._autoScalingPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolDownInSeconds = undefined;
      this._instanceCount = undefined;
      this._isEnabled = undefined;
      this._policyType = undefined;
      this._autoScalingPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolDownInSeconds = value.coolDownInSeconds;
      this._instanceCount = value.instanceCount;
      this._isEnabled = value.isEnabled;
      this._policyType = value.policyType;
      this._autoScalingPolicies.internalValue = value.autoScalingPolicies;
    }
  }

  // cool_down_in_seconds - computed: true, optional: true, required: false
  private _coolDownInSeconds?: number; 
  public get coolDownInSeconds() {
    return this.getNumberAttribute('cool_down_in_seconds');
  }
  public set coolDownInSeconds(value: number) {
    this._coolDownInSeconds = value;
  }
  public resetCoolDownInSeconds() {
    this._coolDownInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInSecondsInput() {
    return this._coolDownInSeconds;
  }

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // auto_scaling_policies - computed: false, optional: true, required: false
  private _autoScalingPolicies = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList(this, "auto_scaling_policies", false);
  public get autoScalingPolicies() {
    return this._autoScalingPolicies;
  }
  public putAutoScalingPolicies(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies[] | cdktf.IResolvable) {
    this._autoScalingPolicies.internalValue = value;
  }
  public resetAutoScalingPolicies() {
    this._autoScalingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPoliciesInput() {
    return this._autoScalingPolicies.internalValue;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#bandwidth_mbps DatascienceModelDeployment#bandwidth_mbps}
  */
  readonly bandwidthMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#maximum_bandwidth_mbps DatascienceModelDeployment#maximum_bandwidth_mbps}
  */
  readonly maximumBandwidthMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#model_id DatascienceModelDeployment#model_id}
  */
  readonly modelId?: string;
  /**
  * instance_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#instance_configuration DatascienceModelDeployment#instance_configuration}
  */
  readonly instanceConfiguration?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration;
  /**
  * scaling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#scaling_policy DatascienceModelDeployment#scaling_policy}
  */
  readonly scalingPolicy?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_mbps: cdktf.numberToTerraform(struct!.bandwidthMbps),
    maximum_bandwidth_mbps: cdktf.numberToTerraform(struct!.maximumBandwidthMbps),
    model_id: cdktf.stringToTerraform(struct!.modelId),
    instance_configuration: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationToTerraform(struct!.instanceConfiguration),
    scaling_policy: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyToTerraform(struct!.scalingPolicy),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_mbps: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_bandwidth_mbps: {
      value: cdktf.numberToHclTerraform(struct!.maximumBandwidthMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationToHclTerraform(struct!.instanceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList",
    },
    scaling_policy: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyToHclTerraform(struct!.scalingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthMbps = this._bandwidthMbps;
    }
    if (this._maximumBandwidthMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBandwidthMbps = this._maximumBandwidthMbps;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._instanceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfiguration = this._instanceConfiguration?.internalValue;
    }
    if (this._scalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthMbps = undefined;
      this._maximumBandwidthMbps = undefined;
      this._modelId = undefined;
      this._instanceConfiguration.internalValue = undefined;
      this._scalingPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthMbps = value.bandwidthMbps;
      this._maximumBandwidthMbps = value.maximumBandwidthMbps;
      this._modelId = value.modelId;
      this._instanceConfiguration.internalValue = value.instanceConfiguration;
      this._scalingPolicy.internalValue = value.scalingPolicy;
    }
  }

  // bandwidth_mbps - computed: true, optional: true, required: false
  private _bandwidthMbps?: number; 
  public get bandwidthMbps() {
    return this.getNumberAttribute('bandwidth_mbps');
  }
  public set bandwidthMbps(value: number) {
    this._bandwidthMbps = value;
  }
  public resetBandwidthMbps() {
    this._bandwidthMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMbpsInput() {
    return this._bandwidthMbps;
  }

  // maximum_bandwidth_mbps - computed: true, optional: true, required: false
  private _maximumBandwidthMbps?: number; 
  public get maximumBandwidthMbps() {
    return this.getNumberAttribute('maximum_bandwidth_mbps');
  }
  public set maximumBandwidthMbps(value: number) {
    this._maximumBandwidthMbps = value;
  }
  public resetMaximumBandwidthMbps() {
    this._maximumBandwidthMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBandwidthMbpsInput() {
    return this._maximumBandwidthMbps;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // instance_configuration - computed: false, optional: true, required: false
  private _instanceConfiguration = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference(this, "instance_configuration");
  public get instanceConfiguration() {
    return this._instanceConfiguration;
  }
  public putInstanceConfiguration(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration) {
    this._instanceConfiguration.internalValue = value;
  }
  public resetInstanceConfiguration() {
    this._instanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationInput() {
    return this._instanceConfiguration.internalValue;
  }

  // scaling_policy - computed: false, optional: true, required: false
  private _scalingPolicy = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference(this, "scaling_policy");
  public get scalingPolicy() {
    return this._scalingPolicy;
  }
  public putScalingPolicy(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy) {
    this._scalingPolicy.internalValue = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy.internalValue;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#model_group_id DatascienceModelDeployment#model_group_id}
  */
  readonly modelGroupId?: string;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_group_id: cdktf.stringToTerraform(struct!.modelGroupId),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_group_id: {
      value: cdktf.stringToHclTerraform(struct!.modelGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelGroupId = this._modelGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelGroupId = value.modelGroupId;
    }
  }

  // model_group_id - computed: true, optional: true, required: false
  private _modelGroupId?: string; 
  public get modelGroupId() {
    return this.getStringAttribute('model_group_id');
  }
  public set modelGroupId(value: string) {
    this._modelGroupId = value;
  }
  public resetModelGroupId() {
    this._modelGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupIdInput() {
    return this._modelGroupId;
  }
}
export interface DatascienceModelDeploymentModelDeploymentConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#deployment_type DatascienceModelDeployment#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * environment_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#environment_configuration_details DatascienceModelDeployment#environment_configuration_details}
  */
  readonly environmentConfigurationDetails?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails;
  /**
  * infrastructure_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#infrastructure_configuration_details DatascienceModelDeployment#infrastructure_configuration_details}
  */
  readonly infrastructureConfigurationDetails?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetails;
  /**
  * model_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#model_configuration_details DatascienceModelDeployment#model_configuration_details}
  */
  readonly modelConfigurationDetails?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetails;
  /**
  * model_group_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#model_group_configuration_details DatascienceModelDeployment#model_group_configuration_details}
  */
  readonly modelGroupConfigurationDetails?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetails;
}

export function datascienceModelDeploymentModelDeploymentConfigurationDetailsToTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    environment_configuration_details: datascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsToTerraform(struct!.environmentConfigurationDetails),
    infrastructure_configuration_details: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsToTerraform(struct!.infrastructureConfigurationDetails),
    model_configuration_details: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsToTerraform(struct!.modelConfigurationDetails),
    model_group_configuration_details: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsToTerraform(struct!.modelGroupConfigurationDetails),
  }
}


export function datascienceModelDeploymentModelDeploymentConfigurationDetailsToHclTerraform(struct?: DatascienceModelDeploymentModelDeploymentConfigurationDetailsOutputReference | DatascienceModelDeploymentModelDeploymentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_configuration_details: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsToHclTerraform(struct!.environmentConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList",
    },
    infrastructure_configuration_details: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsToHclTerraform(struct!.infrastructureConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsList",
    },
    model_configuration_details: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsToHclTerraform(struct!.modelConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsList",
    },
    model_group_configuration_details: {
      value: datascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsToHclTerraform(struct!.modelGroupConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentModelDeploymentConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelDeploymentModelDeploymentConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._environmentConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentConfigurationDetails = this._environmentConfigurationDetails?.internalValue;
    }
    if (this._infrastructureConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureConfigurationDetails = this._infrastructureConfigurationDetails?.internalValue;
    }
    if (this._modelConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelConfigurationDetails = this._modelConfigurationDetails?.internalValue;
    }
    if (this._modelGroupConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelGroupConfigurationDetails = this._modelGroupConfigurationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentModelDeploymentConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentType = undefined;
      this._environmentConfigurationDetails.internalValue = undefined;
      this._infrastructureConfigurationDetails.internalValue = undefined;
      this._modelConfigurationDetails.internalValue = undefined;
      this._modelGroupConfigurationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentType = value.deploymentType;
      this._environmentConfigurationDetails.internalValue = value.environmentConfigurationDetails;
      this._infrastructureConfigurationDetails.internalValue = value.infrastructureConfigurationDetails;
      this._modelConfigurationDetails.internalValue = value.modelConfigurationDetails;
      this._modelGroupConfigurationDetails.internalValue = value.modelGroupConfigurationDetails;
    }
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // environment_configuration_details - computed: false, optional: true, required: false
  private _environmentConfigurationDetails = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference(this, "environment_configuration_details");
  public get environmentConfigurationDetails() {
    return this._environmentConfigurationDetails;
  }
  public putEnvironmentConfigurationDetails(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails) {
    this._environmentConfigurationDetails.internalValue = value;
  }
  public resetEnvironmentConfigurationDetails() {
    this._environmentConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigurationDetailsInput() {
    return this._environmentConfigurationDetails.internalValue;
  }

  // infrastructure_configuration_details - computed: false, optional: true, required: false
  private _infrastructureConfigurationDetails = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetailsOutputReference(this, "infrastructure_configuration_details");
  public get infrastructureConfigurationDetails() {
    return this._infrastructureConfigurationDetails;
  }
  public putInfrastructureConfigurationDetails(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsInfrastructureConfigurationDetails) {
    this._infrastructureConfigurationDetails.internalValue = value;
  }
  public resetInfrastructureConfigurationDetails() {
    this._infrastructureConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationDetailsInput() {
    return this._infrastructureConfigurationDetails.internalValue;
  }

  // model_configuration_details - computed: false, optional: true, required: false
  private _modelConfigurationDetails = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference(this, "model_configuration_details");
  public get modelConfigurationDetails() {
    return this._modelConfigurationDetails;
  }
  public putModelConfigurationDetails(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelConfigurationDetails) {
    this._modelConfigurationDetails.internalValue = value;
  }
  public resetModelConfigurationDetails() {
    this._modelConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelConfigurationDetailsInput() {
    return this._modelConfigurationDetails.internalValue;
  }

  // model_group_configuration_details - computed: false, optional: true, required: false
  private _modelGroupConfigurationDetails = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetailsOutputReference(this, "model_group_configuration_details");
  public get modelGroupConfigurationDetails() {
    return this._modelGroupConfigurationDetails;
  }
  public putModelGroupConfigurationDetails(value: DatascienceModelDeploymentModelDeploymentConfigurationDetailsModelGroupConfigurationDetails) {
    this._modelGroupConfigurationDetails.internalValue = value;
  }
  public resetModelGroupConfigurationDetails() {
    this._modelGroupConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupConfigurationDetailsInput() {
    return this._modelGroupConfigurationDetails.internalValue;
  }
}
export interface DatascienceModelDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#create DatascienceModelDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#delete DatascienceModelDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#update DatascienceModelDeployment#update}
  */
  readonly update?: string;
}

export function datascienceModelDeploymentTimeoutsToTerraform(struct?: DatascienceModelDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function datascienceModelDeploymentTimeoutsToHclTerraform(struct?: DatascienceModelDeploymentTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceModelDeploymentTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment oci_datascience_model_deployment}
*/
export class DatascienceModelDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceModelDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceModelDeployment to import
  * @param importFromId The id of the existing DatascienceModelDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceModelDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_model_deployment oci_datascience_model_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceModelDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceModelDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_deployment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._opcParentRptUrl = config.opcParentRptUrl;
    this._projectId = config.projectId;
    this._state = config.state;
    this._categoryLogDetails.internalValue = config.categoryLogDetails;
    this._modelDeploymentConfigurationDetails.internalValue = config.modelDeploymentConfigurationDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // model_deployment_system_data - computed: true, optional: false, required: false
  private _modelDeploymentSystemData = new DatascienceModelDeploymentModelDeploymentSystemDataList(this, "model_deployment_system_data", false);
  public get modelDeploymentSystemData() {
    return this._modelDeploymentSystemData;
  }

  // model_deployment_url - computed: true, optional: false, required: false
  public get modelDeploymentUrl() {
    return this.getStringAttribute('model_deployment_url');
  }

  // opc_parent_rpt_url - computed: false, optional: true, required: false
  private _opcParentRptUrl?: string; 
  public get opcParentRptUrl() {
    return this.getStringAttribute('opc_parent_rpt_url');
  }
  public set opcParentRptUrl(value: string) {
    this._opcParentRptUrl = value;
  }
  public resetOpcParentRptUrl() {
    this._opcParentRptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcParentRptUrlInput() {
    return this._opcParentRptUrl;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // category_log_details - computed: false, optional: true, required: false
  private _categoryLogDetails = new DatascienceModelDeploymentCategoryLogDetailsOutputReference(this, "category_log_details");
  public get categoryLogDetails() {
    return this._categoryLogDetails;
  }
  public putCategoryLogDetails(value: DatascienceModelDeploymentCategoryLogDetails) {
    this._categoryLogDetails.internalValue = value;
  }
  public resetCategoryLogDetails() {
    this._categoryLogDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryLogDetailsInput() {
    return this._categoryLogDetails.internalValue;
  }

  // model_deployment_configuration_details - computed: false, optional: false, required: true
  private _modelDeploymentConfigurationDetails = new DatascienceModelDeploymentModelDeploymentConfigurationDetailsOutputReference(this, "model_deployment_configuration_details");
  public get modelDeploymentConfigurationDetails() {
    return this._modelDeploymentConfigurationDetails;
  }
  public putModelDeploymentConfigurationDetails(value: DatascienceModelDeploymentModelDeploymentConfigurationDetails) {
    this._modelDeploymentConfigurationDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDeploymentConfigurationDetailsInput() {
    return this._modelDeploymentConfigurationDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceModelDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceModelDeploymentTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      opc_parent_rpt_url: cdktf.stringToTerraform(this._opcParentRptUrl),
      project_id: cdktf.stringToTerraform(this._projectId),
      state: cdktf.stringToTerraform(this._state),
      category_log_details: datascienceModelDeploymentCategoryLogDetailsToTerraform(this._categoryLogDetails.internalValue),
      model_deployment_configuration_details: datascienceModelDeploymentModelDeploymentConfigurationDetailsToTerraform(this._modelDeploymentConfigurationDetails.internalValue),
      timeouts: datascienceModelDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_parent_rpt_url: {
        value: cdktf.stringToHclTerraform(this._opcParentRptUrl),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category_log_details: {
        value: datascienceModelDeploymentCategoryLogDetailsToHclTerraform(this._categoryLogDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelDeploymentCategoryLogDetailsList",
      },
      model_deployment_configuration_details: {
        value: datascienceModelDeploymentModelDeploymentConfigurationDetailsToHclTerraform(this._modelDeploymentConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelDeploymentModelDeploymentConfigurationDetailsList",
      },
      timeouts: {
        value: datascienceModelDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceModelDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
