// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AirflowClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider (`aws`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#cloud_type AirflowCluster#cloud_type}
  */
  readonly cloudType: string;
  /**
  * Cluster description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#description AirflowCluster#description}
  */
  readonly description?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#name AirflowCluster#name}
  */
  readonly name: string;
  /**
  * Cluster network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#network_id AirflowCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#project_id AirflowCluster#project_id}
  */
  readonly projectId: string;
  /**
  * Region where the cluster is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#region_id AirflowCluster#region_id}
  */
  readonly regionId: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#config AirflowCluster#config}
  */
  readonly config?: AirflowClusterConfigA;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#resources AirflowCluster#resources}
  */
  readonly resources: AirflowClusterResources;
}
export interface AirflowClusterConnectionInfo {
}

export function airflowClusterConnectionInfoToTerraform(struct?: AirflowClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function airflowClusterConnectionInfoToHclTerraform(struct?: AirflowClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AirflowClusterConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface AirflowClusterCrConnectionInfo {
}

export function airflowClusterCrConnectionInfoToTerraform(struct?: AirflowClusterCrConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function airflowClusterCrConnectionInfoToHclTerraform(struct?: AirflowClusterCrConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AirflowClusterCrConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterCrConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterCrConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface AirflowClusterConfigAirflowEnvVariable {
  /**
  * Environment variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#name AirflowCluster#name}
  */
  readonly name?: string;
  /**
  * Environment variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#value AirflowCluster#value}
  */
  readonly value?: string;
}

export function airflowClusterConfigAirflowEnvVariableToTerraform(struct?: AirflowClusterConfigAirflowEnvVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function airflowClusterConfigAirflowEnvVariableToHclTerraform(struct?: AirflowClusterConfigAirflowEnvVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterConfigAirflowEnvVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AirflowClusterConfigAirflowEnvVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterConfigAirflowEnvVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AirflowClusterConfigAirflowEnvVariableList extends cdktf.ComplexList {
  public internalValue? : AirflowClusterConfigAirflowEnvVariable[] | cdktf.IResolvable

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
  public get(index: number): AirflowClusterConfigAirflowEnvVariableOutputReference {
    return new AirflowClusterConfigAirflowEnvVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AirflowClusterConfigSyncConfigCredentialsApiCredentials {
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#password AirflowCluster#password}
  */
  readonly password: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#username AirflowCluster#username}
  */
  readonly username: string;
}

export function airflowClusterConfigSyncConfigCredentialsApiCredentialsToTerraform(struct?: AirflowClusterConfigSyncConfigCredentialsApiCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function airflowClusterConfigSyncConfigCredentialsApiCredentialsToHclTerraform(struct?: AirflowClusterConfigSyncConfigCredentialsApiCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterConfigSyncConfigCredentialsApiCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterConfigSyncConfigCredentialsApiCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterConfigSyncConfigCredentialsApiCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AirflowClusterConfigSyncConfigCredentials {
  /**
  * api_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#api_credentials AirflowCluster#api_credentials}
  */
  readonly apiCredentials: AirflowClusterConfigSyncConfigCredentialsApiCredentials;
}

export function airflowClusterConfigSyncConfigCredentialsToTerraform(struct?: AirflowClusterConfigSyncConfigCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_credentials: airflowClusterConfigSyncConfigCredentialsApiCredentialsToTerraform(struct!.apiCredentials),
  }
}


export function airflowClusterConfigSyncConfigCredentialsToHclTerraform(struct?: AirflowClusterConfigSyncConfigCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_credentials: {
      value: airflowClusterConfigSyncConfigCredentialsApiCredentialsToHclTerraform(struct!.apiCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "AirflowClusterConfigSyncConfigCredentialsApiCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterConfigSyncConfigCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterConfigSyncConfigCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCredentials = this._apiCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterConfigSyncConfigCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiCredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiCredentials.internalValue = value.apiCredentials;
    }
  }

  // api_credentials - computed: false, optional: false, required: true
  private _apiCredentials = new AirflowClusterConfigSyncConfigCredentialsApiCredentialsOutputReference(this, "api_credentials");
  public get apiCredentials() {
    return this._apiCredentials;
  }
  public putApiCredentials(value: AirflowClusterConfigSyncConfigCredentialsApiCredentials) {
    this._apiCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCredentialsInput() {
    return this._apiCredentials.internalValue;
  }
}
export interface AirflowClusterConfigSyncConfig {
  /**
  * DAG repository branch name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#branch AirflowCluster#branch}
  */
  readonly branch: string;
  /**
  * Path to the directory with DAGs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#dags_path AirflowCluster#dags_path}
  */
  readonly dagsPath: string;
  /**
  * DAG repository URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#repo_url AirflowCluster#repo_url}
  */
  readonly repoUrl: string;
  /**
  * DAG repository revision 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#revision AirflowCluster#revision}
  */
  readonly revision?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#credentials AirflowCluster#credentials}
  */
  readonly credentials: AirflowClusterConfigSyncConfigCredentials;
}

export function airflowClusterConfigSyncConfigToTerraform(struct?: AirflowClusterConfigSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    dags_path: cdktf.stringToTerraform(struct!.dagsPath),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    revision: cdktf.stringToTerraform(struct!.revision),
    credentials: airflowClusterConfigSyncConfigCredentialsToTerraform(struct!.credentials),
  }
}


export function airflowClusterConfigSyncConfigToHclTerraform(struct?: AirflowClusterConfigSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dags_path: {
      value: cdktf.stringToHclTerraform(struct!.dagsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: airflowClusterConfigSyncConfigCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "AirflowClusterConfigSyncConfigCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterConfigSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterConfigSyncConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._dagsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dagsPath = this._dagsPath;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterConfigSyncConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._dagsPath = undefined;
      this._repoUrl = undefined;
      this._revision = undefined;
      this._credentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._dagsPath = value.dagsPath;
      this._repoUrl = value.repoUrl;
      this._revision = value.revision;
      this._credentials.internalValue = value.credentials;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // dags_path - computed: false, optional: false, required: true
  private _dagsPath?: string; 
  public get dagsPath() {
    return this.getStringAttribute('dags_path');
  }
  public set dagsPath(value: string) {
    this._dagsPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dagsPathInput() {
    return this._dagsPath;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new AirflowClusterConfigSyncConfigCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: AirflowClusterConfigSyncConfigCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface AirflowClusterConfigA {
  /**
  * Custom Airflow image digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#custom_image_digest AirflowCluster#custom_image_digest}
  */
  readonly customImageDigest?: string;
  /**
  * Path to the managed `requirements.txt` file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#managed_requirements_txt AirflowCluster#managed_requirements_txt}
  */
  readonly managedRequirementsTxt?: string;
  /**
  * Service account for the Airflow cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#user_service_account AirflowCluster#user_service_account}
  */
  readonly userServiceAccount?: string;
  /**
  * Airflow cluster version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#version_id AirflowCluster#version_id}
  */
  readonly versionId: string;
  /**
  * airflow_env_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#airflow_env_variable AirflowCluster#airflow_env_variable}
  */
  readonly airflowEnvVariable?: AirflowClusterConfigAirflowEnvVariable[] | cdktf.IResolvable;
  /**
  * sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#sync_config AirflowCluster#sync_config}
  */
  readonly syncConfig?: AirflowClusterConfigSyncConfig;
}

export function airflowClusterConfigAToTerraform(struct?: AirflowClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_image_digest: cdktf.stringToTerraform(struct!.customImageDigest),
    managed_requirements_txt: cdktf.stringToTerraform(struct!.managedRequirementsTxt),
    user_service_account: cdktf.stringToTerraform(struct!.userServiceAccount),
    version_id: cdktf.stringToTerraform(struct!.versionId),
    airflow_env_variable: cdktf.listMapper(airflowClusterConfigAirflowEnvVariableToTerraform, true)(struct!.airflowEnvVariable),
    sync_config: airflowClusterConfigSyncConfigToTerraform(struct!.syncConfig),
  }
}


export function airflowClusterConfigAToHclTerraform(struct?: AirflowClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_image_digest: {
      value: cdktf.stringToHclTerraform(struct!.customImageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_requirements_txt: {
      value: cdktf.stringToHclTerraform(struct!.managedRequirementsTxt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_service_account: {
      value: cdktf.stringToHclTerraform(struct!.userServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    airflow_env_variable: {
      value: cdktf.listMapperHcl(airflowClusterConfigAirflowEnvVariableToHclTerraform, true)(struct!.airflowEnvVariable),
      isBlock: true,
      type: "list",
      storageClassType: "AirflowClusterConfigAirflowEnvVariableList",
    },
    sync_config: {
      value: airflowClusterConfigSyncConfigToHclTerraform(struct!.syncConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AirflowClusterConfigSyncConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImageDigest = this._customImageDigest;
    }
    if (this._managedRequirementsTxt !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRequirementsTxt = this._managedRequirementsTxt;
    }
    if (this._userServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.userServiceAccount = this._userServiceAccount;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._airflowEnvVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.airflowEnvVariable = this._airflowEnvVariable?.internalValue;
    }
    if (this._syncConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncConfig = this._syncConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImageDigest = undefined;
      this._managedRequirementsTxt = undefined;
      this._userServiceAccount = undefined;
      this._versionId = undefined;
      this._airflowEnvVariable.internalValue = undefined;
      this._syncConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customImageDigest = value.customImageDigest;
      this._managedRequirementsTxt = value.managedRequirementsTxt;
      this._userServiceAccount = value.userServiceAccount;
      this._versionId = value.versionId;
      this._airflowEnvVariable.internalValue = value.airflowEnvVariable;
      this._syncConfig.internalValue = value.syncConfig;
    }
  }

  // custom_image_digest - computed: false, optional: true, required: false
  private _customImageDigest?: string; 
  public get customImageDigest() {
    return this.getStringAttribute('custom_image_digest');
  }
  public set customImageDigest(value: string) {
    this._customImageDigest = value;
  }
  public resetCustomImageDigest() {
    this._customImageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageDigestInput() {
    return this._customImageDigest;
  }

  // managed_requirements_txt - computed: false, optional: true, required: false
  private _managedRequirementsTxt?: string; 
  public get managedRequirementsTxt() {
    return this.getStringAttribute('managed_requirements_txt');
  }
  public set managedRequirementsTxt(value: string) {
    this._managedRequirementsTxt = value;
  }
  public resetManagedRequirementsTxt() {
    this._managedRequirementsTxt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRequirementsTxtInput() {
    return this._managedRequirementsTxt;
  }

  // user_service_account - computed: false, optional: true, required: false
  private _userServiceAccount?: string; 
  public get userServiceAccount() {
    return this.getStringAttribute('user_service_account');
  }
  public set userServiceAccount(value: string) {
    this._userServiceAccount = value;
  }
  public resetUserServiceAccount() {
    this._userServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userServiceAccountInput() {
    return this._userServiceAccount;
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // airflow_env_variable - computed: false, optional: true, required: false
  private _airflowEnvVariable = new AirflowClusterConfigAirflowEnvVariableList(this, "airflow_env_variable", false);
  public get airflowEnvVariable() {
    return this._airflowEnvVariable;
  }
  public putAirflowEnvVariable(value: AirflowClusterConfigAirflowEnvVariable[] | cdktf.IResolvable) {
    this._airflowEnvVariable.internalValue = value;
  }
  public resetAirflowEnvVariable() {
    this._airflowEnvVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowEnvVariableInput() {
    return this._airflowEnvVariable.internalValue;
  }

  // sync_config - computed: false, optional: true, required: false
  private _syncConfig = new AirflowClusterConfigSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: AirflowClusterConfigSyncConfig) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
  }
}
export interface AirflowClusterResourcesAirflow {
  /**
  * Environment configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#environment_flavor AirflowCluster#environment_flavor}
  */
  readonly environmentFlavor: string;
  /**
  * Maximum number of workers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#max_worker_count AirflowCluster#max_worker_count}
  */
  readonly maxWorkerCount: number;
  /**
  * Minimum number of workers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#min_worker_count AirflowCluster#min_worker_count}
  */
  readonly minWorkerCount: number;
  /**
  * Worker concurrency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#worker_concurrency AirflowCluster#worker_concurrency}
  */
  readonly workerConcurrency: number;
  /**
  * Worker disk size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#worker_disk_size AirflowCluster#worker_disk_size}
  */
  readonly workerDiskSize: number;
  /**
  * Worker resource preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#worker_preset AirflowCluster#worker_preset}
  */
  readonly workerPreset: string;
}

export function airflowClusterResourcesAirflowToTerraform(struct?: AirflowClusterResourcesAirflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_flavor: cdktf.stringToTerraform(struct!.environmentFlavor),
    max_worker_count: cdktf.numberToTerraform(struct!.maxWorkerCount),
    min_worker_count: cdktf.numberToTerraform(struct!.minWorkerCount),
    worker_concurrency: cdktf.numberToTerraform(struct!.workerConcurrency),
    worker_disk_size: cdktf.numberToTerraform(struct!.workerDiskSize),
    worker_preset: cdktf.stringToTerraform(struct!.workerPreset),
  }
}


export function airflowClusterResourcesAirflowToHclTerraform(struct?: AirflowClusterResourcesAirflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_flavor: {
      value: cdktf.stringToHclTerraform(struct!.environmentFlavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_worker_count: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_worker_count: {
      value: cdktf.numberToHclTerraform(struct!.minWorkerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.workerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.workerDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_preset: {
      value: cdktf.stringToHclTerraform(struct!.workerPreset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterResourcesAirflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterResourcesAirflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentFlavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFlavor = this._environmentFlavor;
    }
    if (this._maxWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerCount = this._maxWorkerCount;
    }
    if (this._minWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkerCount = this._minWorkerCount;
    }
    if (this._workerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConcurrency = this._workerConcurrency;
    }
    if (this._workerDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerDiskSize = this._workerDiskSize;
    }
    if (this._workerPreset !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPreset = this._workerPreset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterResourcesAirflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentFlavor = undefined;
      this._maxWorkerCount = undefined;
      this._minWorkerCount = undefined;
      this._workerConcurrency = undefined;
      this._workerDiskSize = undefined;
      this._workerPreset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentFlavor = value.environmentFlavor;
      this._maxWorkerCount = value.maxWorkerCount;
      this._minWorkerCount = value.minWorkerCount;
      this._workerConcurrency = value.workerConcurrency;
      this._workerDiskSize = value.workerDiskSize;
      this._workerPreset = value.workerPreset;
    }
  }

  // environment_flavor - computed: false, optional: false, required: true
  private _environmentFlavor?: string; 
  public get environmentFlavor() {
    return this.getStringAttribute('environment_flavor');
  }
  public set environmentFlavor(value: string) {
    this._environmentFlavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFlavorInput() {
    return this._environmentFlavor;
  }

  // max_worker_count - computed: false, optional: false, required: true
  private _maxWorkerCount?: number; 
  public get maxWorkerCount() {
    return this.getNumberAttribute('max_worker_count');
  }
  public set maxWorkerCount(value: number) {
    this._maxWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerCountInput() {
    return this._maxWorkerCount;
  }

  // min_worker_count - computed: false, optional: false, required: true
  private _minWorkerCount?: number; 
  public get minWorkerCount() {
    return this.getNumberAttribute('min_worker_count');
  }
  public set minWorkerCount(value: number) {
    this._minWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkerCountInput() {
    return this._minWorkerCount;
  }

  // worker_concurrency - computed: false, optional: false, required: true
  private _workerConcurrency?: number; 
  public get workerConcurrency() {
    return this.getNumberAttribute('worker_concurrency');
  }
  public set workerConcurrency(value: number) {
    this._workerConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConcurrencyInput() {
    return this._workerConcurrency;
  }

  // worker_disk_size - computed: false, optional: false, required: true
  private _workerDiskSize?: number; 
  public get workerDiskSize() {
    return this.getNumberAttribute('worker_disk_size');
  }
  public set workerDiskSize(value: number) {
    this._workerDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskSizeInput() {
    return this._workerDiskSize;
  }

  // worker_preset - computed: false, optional: false, required: true
  private _workerPreset?: string; 
  public get workerPreset() {
    return this.getStringAttribute('worker_preset');
  }
  public set workerPreset(value: string) {
    this._workerPreset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPresetInput() {
    return this._workerPreset;
  }
}
export interface AirflowClusterResources {
  /**
  * airflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#airflow AirflowCluster#airflow}
  */
  readonly airflow: AirflowClusterResourcesAirflow;
}

export function airflowClusterResourcesToTerraform(struct?: AirflowClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    airflow: airflowClusterResourcesAirflowToTerraform(struct!.airflow),
  }
}


export function airflowClusterResourcesToHclTerraform(struct?: AirflowClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    airflow: {
      value: airflowClusterResourcesAirflowToHclTerraform(struct!.airflow),
      isBlock: true,
      type: "struct",
      storageClassType: "AirflowClusterResourcesAirflow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AirflowClusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AirflowClusterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.airflow = this._airflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AirflowClusterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._airflow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._airflow.internalValue = value.airflow;
    }
  }

  // airflow - computed: false, optional: false, required: true
  private _airflow = new AirflowClusterResourcesAirflowOutputReference(this, "airflow");
  public get airflow() {
    return this._airflow;
  }
  public putAirflow(value: AirflowClusterResourcesAirflow) {
    this._airflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowInput() {
    return this._airflow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster doublecloud_airflow_cluster}
*/
export class AirflowCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_airflow_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AirflowCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AirflowCluster to import
  * @param importFromId The id of the existing AirflowCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AirflowCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_airflow_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/airflow_cluster doublecloud_airflow_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AirflowClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AirflowClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_airflow_cluster',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26',
        providerVersionConstraint: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudType = config.cloudType;
    this._description = config.description;
    this._name = config.name;
    this._networkId = config.networkId;
    this._projectId = config.projectId;
    this._regionId = config.regionId;
    this._config.internalValue = config.config;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new AirflowClusterConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // cr_connection_info - computed: true, optional: false, required: false
  private _crConnectionInfo = new AirflowClusterCrConnectionInfoOutputReference(this, "cr_connection_info");
  public get crConnectionInfo() {
    return this._crConnectionInfo;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
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

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // config - computed: false, optional: true, required: false
  private _config = new AirflowClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AirflowClusterConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new AirflowClusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: AirflowClusterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_id: cdktf.stringToTerraform(this._regionId),
      config: airflowClusterConfigAToTerraform(this._config.internalValue),
      resources: airflowClusterResourcesToTerraform(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
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
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: airflowClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterConfigA",
      },
      resources: {
        value: airflowClusterResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AirflowClusterResources",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
