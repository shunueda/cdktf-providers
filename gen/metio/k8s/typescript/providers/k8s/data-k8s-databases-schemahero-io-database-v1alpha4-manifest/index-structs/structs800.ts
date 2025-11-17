import * as cdktf from 'cdktf';
import { DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRef,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRefToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRefToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRefOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsm,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsmToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsmToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsmOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbname,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbnameToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbnameToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbnameOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHost,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHostToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHostToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHostOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPassword,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPasswordToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPasswordToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPasswordOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPort,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPortToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPortToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPortOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchema,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchemaToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchemaToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchemaOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgres,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgresToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgresToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgresOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqlite,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqliteToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqliteToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqliteOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqlite,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqliteToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqliteToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqliteOutputReference } from './structs400'
import { DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandra,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandraToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandraToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandraOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdb,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdbToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdbToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdbOutputReference,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysql,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysqlToTerraform,
dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysqlToHclTerraform,
DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysqlOutputReference } from './structs0'
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#agent_inject DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#agent_inject}
  */
  readonly agentInject?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#connection_template DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#connection_template}
  */
  readonly connectionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#endpoint DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#kubernetes_auth_endpoint DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#kubernetes_auth_endpoint}
  */
  readonly kubernetesAuthEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#role DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret}
  */
  readonly secret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#service_account DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#service_account_namespace DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#service_account_namespace}
  */
  readonly serviceAccountNamespace?: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVaultToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_inject: cdktf.booleanToTerraform(struct!.agentInject),
    connection_template: cdktf.stringToTerraform(struct!.connectionTemplate),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kubernetes_auth_endpoint: cdktf.stringToTerraform(struct!.kubernetesAuthEndpoint),
    role: cdktf.stringToTerraform(struct!.role),
    secret: cdktf.stringToTerraform(struct!.secret),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_namespace: cdktf.stringToTerraform(struct!.serviceAccountNamespace),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVaultToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_inject: {
      value: cdktf.booleanToHclTerraform(struct!.agentInject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_template: {
      value: cdktf.stringToHclTerraform(struct!.connectionTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesAuthEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_namespace: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentInject !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentInject = this._agentInject;
    }
    if (this._connectionTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTemplate = this._connectionTemplate;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kubernetesAuthEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesAuthEndpoint = this._kubernetesAuthEndpoint;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountNamespace = this._serviceAccountNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentInject = undefined;
      this._connectionTemplate = undefined;
      this._endpoint = undefined;
      this._kubernetesAuthEndpoint = undefined;
      this._role = undefined;
      this._secret = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentInject = value.agentInject;
      this._connectionTemplate = value.connectionTemplate;
      this._endpoint = value.endpoint;
      this._kubernetesAuthEndpoint = value.kubernetesAuthEndpoint;
      this._role = value.role;
      this._secret = value.secret;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountNamespace = value.serviceAccountNamespace;
    }
  }

  // agent_inject - computed: false, optional: true, required: false
  private _agentInject?: boolean | cdktf.IResolvable; 
  public get agentInject() {
    return this.getBooleanAttribute('agent_inject');
  }
  public set agentInject(value: boolean | cdktf.IResolvable) {
    this._agentInject = value;
  }
  public resetAgentInject() {
    this._agentInject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInjectInput() {
    return this._agentInject;
  }

  // connection_template - computed: false, optional: true, required: false
  private _connectionTemplate?: string; 
  public get connectionTemplate() {
    return this.getStringAttribute('connection_template');
  }
  public set connectionTemplate(value: string) {
    this._connectionTemplate = value;
  }
  public resetConnectionTemplate() {
    this._connectionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTemplateInput() {
    return this._connectionTemplate;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kubernetes_auth_endpoint - computed: false, optional: true, required: false
  private _kubernetesAuthEndpoint?: string; 
  public get kubernetesAuthEndpoint() {
    return this.getStringAttribute('kubernetes_auth_endpoint');
  }
  public set kubernetesAuthEndpoint(value: string) {
    this._kubernetesAuthEndpoint = value;
  }
  public resetKubernetesAuthEndpoint() {
    this._kubernetesAuthEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAuthEndpointInput() {
    return this._kubernetesAuthEndpoint;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_namespace - computed: false, optional: true, required: false
  private _serviceAccountNamespace?: string; 
  public get serviceAccountNamespace() {
    return this.getStringAttribute('service_account_namespace');
  }
  public set serviceAccountNamespace(value: string) {
    this._serviceAccountNamespace = value;
  }
  public resetServiceAccountNamespace() {
    this._serviceAccountNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNamespaceInput() {
    return this._serviceAccountNamespace;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_key_ref DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#ssm DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#ssm}
  */
  readonly ssm?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#vault DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#vault}
  */
  readonly vault?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    ssm: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsmToTerraform(struct!.ssm),
    vault: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVaultToTerraform(struct!.vault),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRef",
    },
    ssm: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsmToHclTerraform(struct!.ssm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsm",
    },
    vault: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._ssm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssm = this._ssm?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._ssm.internalValue = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._ssm.internalValue = value.ssm;
      this._vault.internalValue = value.vault;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }

  // ssm - computed: false, optional: true, required: false
  private _ssm = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsmOutputReference(this, "ssm");
  public get ssm() {
    return this._ssm;
  }
  public putSsm(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromSsm) {
    this._ssm.internalValue = value;
  }
  public resetSsm() {
    this._ssm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInput() {
    return this._ssm.internalValue;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value_from DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRefToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRefToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_key_ref DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value_from DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_key_ref DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value_from DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#access_key_id DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#access_key_id}
  */
  readonly accessKeyId?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#region DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_access_key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_access_key}
  */
  readonly secretAccessKey?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#with_decryption DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#with_decryption}
  */
  readonly withDecryption?: boolean | cdktf.IResolvable;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdToTerraform(struct!.accessKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyToTerraform(struct!.secretAccessKey),
    with_decryption: cdktf.booleanToTerraform(struct!.withDecryption),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdToHclTerraform(struct!.accessKeyId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyToHclTerraform(struct!.secretAccessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey",
    },
    with_decryption: {
      value: cdktf.booleanToHclTerraform(struct!.withDecryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey?.internalValue;
    }
    if (this._withDecryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.withDecryption = this._withDecryption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId.internalValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._secretAccessKey.internalValue = undefined;
      this._withDecryption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId.internalValue = value.accessKeyId;
      this._name = value.name;
      this._region = value.region;
      this._secretAccessKey.internalValue = value.secretAccessKey;
      this._withDecryption = value.withDecryption;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyIdOutputReference(this, "access_key_id");
  public get accessKeyId() {
    return this._accessKeyId;
  }
  public putAccessKeyId(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmAccessKeyId) {
    this._accessKeyId.internalValue = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId.internalValue;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKeyOutputReference(this, "secret_access_key");
  public get secretAccessKey() {
    return this._secretAccessKey;
  }
  public putSecretAccessKey(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmSecretAccessKey) {
    this._secretAccessKey.internalValue = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey.internalValue;
  }

  // with_decryption - computed: false, optional: true, required: false
  private _withDecryption?: boolean | cdktf.IResolvable; 
  public get withDecryption() {
    return this.getBooleanAttribute('with_decryption');
  }
  public set withDecryption(value: boolean | cdktf.IResolvable) {
    this._withDecryption = value;
  }
  public resetWithDecryption() {
    this._withDecryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDecryptionInput() {
    return this._withDecryption;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#agent_inject DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#agent_inject}
  */
  readonly agentInject?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#connection_template DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#connection_template}
  */
  readonly connectionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#endpoint DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#kubernetes_auth_endpoint DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#kubernetes_auth_endpoint}
  */
  readonly kubernetesAuthEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#role DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret}
  */
  readonly secret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#service_account DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#service_account_namespace DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#service_account_namespace}
  */
  readonly serviceAccountNamespace?: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVaultToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_inject: cdktf.booleanToTerraform(struct!.agentInject),
    connection_template: cdktf.stringToTerraform(struct!.connectionTemplate),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kubernetes_auth_endpoint: cdktf.stringToTerraform(struct!.kubernetesAuthEndpoint),
    role: cdktf.stringToTerraform(struct!.role),
    secret: cdktf.stringToTerraform(struct!.secret),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_namespace: cdktf.stringToTerraform(struct!.serviceAccountNamespace),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVaultToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_inject: {
      value: cdktf.booleanToHclTerraform(struct!.agentInject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_template: {
      value: cdktf.stringToHclTerraform(struct!.connectionTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesAuthEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_namespace: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentInject !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentInject = this._agentInject;
    }
    if (this._connectionTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTemplate = this._connectionTemplate;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kubernetesAuthEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesAuthEndpoint = this._kubernetesAuthEndpoint;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountNamespace = this._serviceAccountNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentInject = undefined;
      this._connectionTemplate = undefined;
      this._endpoint = undefined;
      this._kubernetesAuthEndpoint = undefined;
      this._role = undefined;
      this._secret = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentInject = value.agentInject;
      this._connectionTemplate = value.connectionTemplate;
      this._endpoint = value.endpoint;
      this._kubernetesAuthEndpoint = value.kubernetesAuthEndpoint;
      this._role = value.role;
      this._secret = value.secret;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountNamespace = value.serviceAccountNamespace;
    }
  }

  // agent_inject - computed: false, optional: true, required: false
  private _agentInject?: boolean | cdktf.IResolvable; 
  public get agentInject() {
    return this.getBooleanAttribute('agent_inject');
  }
  public set agentInject(value: boolean | cdktf.IResolvable) {
    this._agentInject = value;
  }
  public resetAgentInject() {
    this._agentInject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInjectInput() {
    return this._agentInject;
  }

  // connection_template - computed: false, optional: true, required: false
  private _connectionTemplate?: string; 
  public get connectionTemplate() {
    return this.getStringAttribute('connection_template');
  }
  public set connectionTemplate(value: string) {
    this._connectionTemplate = value;
  }
  public resetConnectionTemplate() {
    this._connectionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTemplateInput() {
    return this._connectionTemplate;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kubernetes_auth_endpoint - computed: false, optional: true, required: false
  private _kubernetesAuthEndpoint?: string; 
  public get kubernetesAuthEndpoint() {
    return this.getStringAttribute('kubernetes_auth_endpoint');
  }
  public set kubernetesAuthEndpoint(value: string) {
    this._kubernetesAuthEndpoint = value;
  }
  public resetKubernetesAuthEndpoint() {
    this._kubernetesAuthEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAuthEndpointInput() {
    return this._kubernetesAuthEndpoint;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_namespace - computed: false, optional: true, required: false
  private _serviceAccountNamespace?: string; 
  public get serviceAccountNamespace() {
    return this.getStringAttribute('service_account_namespace');
  }
  public set serviceAccountNamespace(value: string) {
    this._serviceAccountNamespace = value;
  }
  public resetServiceAccountNamespace() {
    this._serviceAccountNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNamespaceInput() {
    return this._serviceAccountNamespace;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_key_ref DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#ssm DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#ssm}
  */
  readonly ssm?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#vault DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#vault}
  */
  readonly vault?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    ssm: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmToTerraform(struct!.ssm),
    vault: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVaultToTerraform(struct!.vault),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef",
    },
    ssm: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmToHclTerraform(struct!.ssm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm",
    },
    vault: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._ssm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssm = this._ssm?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._ssm.internalValue = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._ssm.internalValue = value.ssm;
      this._vault.internalValue = value.vault;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }

  // ssm - computed: false, optional: true, required: false
  private _ssm = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsmOutputReference(this, "ssm");
  public get ssm() {
    return this._ssm;
  }
  public putSsm(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromSsm) {
    this._ssm.internalValue = value;
  }
  public resetSsm() {
    this._ssm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInput() {
    return this._ssm.internalValue;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value_from DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRefToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRefToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_key_ref DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value_from DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_key_ref DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value_from DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#access_key_id DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#access_key_id}
  */
  readonly accessKeyId?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#region DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_access_key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_access_key}
  */
  readonly secretAccessKey?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#with_decryption DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#with_decryption}
  */
  readonly withDecryption?: boolean | cdktf.IResolvable;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdToTerraform(struct!.accessKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyToTerraform(struct!.secretAccessKey),
    with_decryption: cdktf.booleanToTerraform(struct!.withDecryption),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdToHclTerraform(struct!.accessKeyId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyToHclTerraform(struct!.secretAccessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey",
    },
    with_decryption: {
      value: cdktf.booleanToHclTerraform(struct!.withDecryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey?.internalValue;
    }
    if (this._withDecryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.withDecryption = this._withDecryption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId.internalValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._secretAccessKey.internalValue = undefined;
      this._withDecryption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId.internalValue = value.accessKeyId;
      this._name = value.name;
      this._region = value.region;
      this._secretAccessKey.internalValue = value.secretAccessKey;
      this._withDecryption = value.withDecryption;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyIdOutputReference(this, "access_key_id");
  public get accessKeyId() {
    return this._accessKeyId;
  }
  public putAccessKeyId(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmAccessKeyId) {
    this._accessKeyId.internalValue = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId.internalValue;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKeyOutputReference(this, "secret_access_key");
  public get secretAccessKey() {
    return this._secretAccessKey;
  }
  public putSecretAccessKey(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmSecretAccessKey) {
    this._secretAccessKey.internalValue = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey.internalValue;
  }

  // with_decryption - computed: false, optional: true, required: false
  private _withDecryption?: boolean | cdktf.IResolvable; 
  public get withDecryption() {
    return this.getBooleanAttribute('with_decryption');
  }
  public set withDecryption(value: boolean | cdktf.IResolvable) {
    this._withDecryption = value;
  }
  public resetWithDecryption() {
    this._withDecryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDecryptionInput() {
    return this._withDecryption;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#agent_inject DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#agent_inject}
  */
  readonly agentInject?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#connection_template DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#connection_template}
  */
  readonly connectionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#endpoint DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#kubernetes_auth_endpoint DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#kubernetes_auth_endpoint}
  */
  readonly kubernetesAuthEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#role DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret}
  */
  readonly secret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#service_account DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#service_account_namespace DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#service_account_namespace}
  */
  readonly serviceAccountNamespace?: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVaultToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_inject: cdktf.booleanToTerraform(struct!.agentInject),
    connection_template: cdktf.stringToTerraform(struct!.connectionTemplate),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kubernetes_auth_endpoint: cdktf.stringToTerraform(struct!.kubernetesAuthEndpoint),
    role: cdktf.stringToTerraform(struct!.role),
    secret: cdktf.stringToTerraform(struct!.secret),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_namespace: cdktf.stringToTerraform(struct!.serviceAccountNamespace),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVaultToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_inject: {
      value: cdktf.booleanToHclTerraform(struct!.agentInject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_template: {
      value: cdktf.stringToHclTerraform(struct!.connectionTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesAuthEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_namespace: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentInject !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentInject = this._agentInject;
    }
    if (this._connectionTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTemplate = this._connectionTemplate;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kubernetesAuthEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesAuthEndpoint = this._kubernetesAuthEndpoint;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountNamespace = this._serviceAccountNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentInject = undefined;
      this._connectionTemplate = undefined;
      this._endpoint = undefined;
      this._kubernetesAuthEndpoint = undefined;
      this._role = undefined;
      this._secret = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentInject = value.agentInject;
      this._connectionTemplate = value.connectionTemplate;
      this._endpoint = value.endpoint;
      this._kubernetesAuthEndpoint = value.kubernetesAuthEndpoint;
      this._role = value.role;
      this._secret = value.secret;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountNamespace = value.serviceAccountNamespace;
    }
  }

  // agent_inject - computed: false, optional: true, required: false
  private _agentInject?: boolean | cdktf.IResolvable; 
  public get agentInject() {
    return this.getBooleanAttribute('agent_inject');
  }
  public set agentInject(value: boolean | cdktf.IResolvable) {
    this._agentInject = value;
  }
  public resetAgentInject() {
    this._agentInject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInjectInput() {
    return this._agentInject;
  }

  // connection_template - computed: false, optional: true, required: false
  private _connectionTemplate?: string; 
  public get connectionTemplate() {
    return this.getStringAttribute('connection_template');
  }
  public set connectionTemplate(value: string) {
    this._connectionTemplate = value;
  }
  public resetConnectionTemplate() {
    this._connectionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTemplateInput() {
    return this._connectionTemplate;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kubernetes_auth_endpoint - computed: false, optional: true, required: false
  private _kubernetesAuthEndpoint?: string; 
  public get kubernetesAuthEndpoint() {
    return this.getStringAttribute('kubernetes_auth_endpoint');
  }
  public set kubernetesAuthEndpoint(value: string) {
    this._kubernetesAuthEndpoint = value;
  }
  public resetKubernetesAuthEndpoint() {
    this._kubernetesAuthEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAuthEndpointInput() {
    return this._kubernetesAuthEndpoint;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_namespace - computed: false, optional: true, required: false
  private _serviceAccountNamespace?: string; 
  public get serviceAccountNamespace() {
    return this.getStringAttribute('service_account_namespace');
  }
  public set serviceAccountNamespace(value: string) {
    this._serviceAccountNamespace = value;
  }
  public resetServiceAccountNamespace() {
    this._serviceAccountNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNamespaceInput() {
    return this._serviceAccountNamespace;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#secret_key_ref DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#ssm DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#ssm}
  */
  readonly ssm?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#vault DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#vault}
  */
  readonly vault?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    ssm: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmToTerraform(struct!.ssm),
    vault: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVaultToTerraform(struct!.vault),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef",
    },
    ssm: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmToHclTerraform(struct!.ssm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm",
    },
    vault: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._ssm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssm = this._ssm?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._ssm.internalValue = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._ssm.internalValue = value.ssm;
      this._vault.internalValue = value.vault;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }

  // ssm - computed: false, optional: true, required: false
  private _ssm = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsmOutputReference(this, "ssm");
  public get ssm() {
    return this._ssm;
  }
  public putSsm(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromSsm) {
    this._ssm.internalValue = value;
  }
  public resetSsm() {
    this._ssm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInput() {
    return this._ssm.internalValue;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value_from DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#dbname DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#dbname}
  */
  readonly dbname?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbname;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#host DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#host}
  */
  readonly host?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHost;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#password DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#password}
  */
  readonly password?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPassword;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#port DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#port}
  */
  readonly port?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPort;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#schema DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#schema}
  */
  readonly schema?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#sslmode DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#sslmode}
  */
  readonly sslmode?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#uri DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#uri}
  */
  readonly uri?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#user DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#user}
  */
  readonly user?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbnameToTerraform(struct!.dbname),
    host: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHostToTerraform(struct!.host),
    password: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPasswordToTerraform(struct!.password),
    port: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPortToTerraform(struct!.port),
    schema: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchemaToTerraform(struct!.schema),
    sslmode: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeToTerraform(struct!.sslmode),
    uri: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriToTerraform(struct!.uri),
    user: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserToTerraform(struct!.user),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbname: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbnameToHclTerraform(struct!.dbname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbname",
    },
    host: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHost",
    },
    password: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPassword",
    },
    port: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPort",
    },
    schema: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchema",
    },
    sslmode: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeToHclTerraform(struct!.sslmode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode",
    },
    uri: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriToHclTerraform(struct!.uri),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri",
    },
    user: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._sslmode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslmode = this._sslmode?.internalValue;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbname.internalValue = undefined;
      this._host.internalValue = undefined;
      this._password.internalValue = undefined;
      this._port.internalValue = undefined;
      this._schema.internalValue = undefined;
      this._sslmode.internalValue = undefined;
      this._uri.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbname.internalValue = value.dbname;
      this._host.internalValue = value.host;
      this._password.internalValue = value.password;
      this._port.internalValue = value.port;
      this._schema.internalValue = value.schema;
      this._sslmode.internalValue = value.sslmode;
      this._uri.internalValue = value.uri;
      this._user.internalValue = value.user;
    }
  }

  // dbname - computed: false, optional: true, required: false
  private _dbname = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbnameOutputReference(this, "dbname");
  public get dbname() {
    return this._dbname;
  }
  public putDbname(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbDbname) {
    this._dbname.internalValue = value;
  }
  public resetDbname() {
    this._dbname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbnameInput() {
    return this._dbname.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // sslmode - computed: false, optional: true, required: false
  private _sslmode = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmodeOutputReference(this, "sslmode");
  public get sslmode() {
    return this._sslmode;
  }
  public putSslmode(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbSslmode) {
    this._sslmode.internalValue = value;
  }
  public resetSslmode() {
    this._sslmode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslmodeInput() {
    return this._sslmode.internalValue;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUriOutputReference(this, "uri");
  public get uri() {
    return this._uri;
  }
  public putUri(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUri) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#cassandra DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#cassandra}
  */
  readonly cassandra?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandra;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#cockroachdb DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#cockroachdb}
  */
  readonly cockroachdb?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#mysql DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#mysql}
  */
  readonly mysql?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#postgres DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#postgres}
  */
  readonly postgres?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgres;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#rqlite DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#rqlite}
  */
  readonly rqlite?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqlite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#sqlite DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#sqlite}
  */
  readonly sqlite?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqlite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#timescaledb DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#timescaledb}
  */
  readonly timescaledb?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cassandra: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandraToTerraform(struct!.cassandra),
    cockroachdb: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdbToTerraform(struct!.cockroachdb),
    mysql: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysqlToTerraform(struct!.mysql),
    postgres: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgresToTerraform(struct!.postgres),
    rqlite: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqliteToTerraform(struct!.rqlite),
    sqlite: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqliteToTerraform(struct!.sqlite),
    timescaledb: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbToTerraform(struct!.timescaledb),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cassandra: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandraToHclTerraform(struct!.cassandra),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandra",
    },
    cockroachdb: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdbToHclTerraform(struct!.cockroachdb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdb",
    },
    mysql: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysql",
    },
    postgres: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgres",
    },
    rqlite: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqliteToHclTerraform(struct!.rqlite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqlite",
    },
    sqlite: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqliteToHclTerraform(struct!.sqlite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqlite",
    },
    timescaledb: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbToHclTerraform(struct!.timescaledb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cassandra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cassandra = this._cassandra?.internalValue;
    }
    if (this._cockroachdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cockroachdb = this._cockroachdb?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    if (this._rqlite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rqlite = this._rqlite?.internalValue;
    }
    if (this._sqlite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlite = this._sqlite?.internalValue;
    }
    if (this._timescaledb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timescaledb = this._timescaledb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cassandra.internalValue = undefined;
      this._cockroachdb.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._postgres.internalValue = undefined;
      this._rqlite.internalValue = undefined;
      this._sqlite.internalValue = undefined;
      this._timescaledb.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cassandra.internalValue = value.cassandra;
      this._cockroachdb.internalValue = value.cockroachdb;
      this._mysql.internalValue = value.mysql;
      this._postgres.internalValue = value.postgres;
      this._rqlite.internalValue = value.rqlite;
      this._sqlite.internalValue = value.sqlite;
      this._timescaledb.internalValue = value.timescaledb;
    }
  }

  // cassandra - computed: false, optional: true, required: false
  private _cassandra = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandraOutputReference(this, "cassandra");
  public get cassandra() {
    return this._cassandra;
  }
  public putCassandra(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCassandra) {
    this._cassandra.internalValue = value;
  }
  public resetCassandra() {
    this._cassandra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraInput() {
    return this._cassandra.internalValue;
  }

  // cockroachdb - computed: false, optional: true, required: false
  private _cockroachdb = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdbOutputReference(this, "cockroachdb");
  public get cockroachdb() {
    return this._cockroachdb;
  }
  public putCockroachdb(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionCockroachdb) {
    this._cockroachdb.internalValue = value;
  }
  public resetCockroachdb() {
    this._cockroachdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cockroachdbInput() {
    return this._cockroachdb.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionPostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // rqlite - computed: false, optional: true, required: false
  private _rqlite = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqliteOutputReference(this, "rqlite");
  public get rqlite() {
    return this._rqlite;
  }
  public putRqlite(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionRqlite) {
    this._rqlite.internalValue = value;
  }
  public resetRqlite() {
    this._rqlite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rqliteInput() {
    return this._rqlite.internalValue;
  }

  // sqlite - computed: false, optional: true, required: false
  private _sqlite = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqliteOutputReference(this, "sqlite");
  public get sqlite() {
    return this._sqlite;
  }
  public putSqlite(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionSqlite) {
    this._sqlite.internalValue = value;
  }
  public resetSqlite() {
    this._sqlite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliteInput() {
    return this._sqlite.internalValue;
  }

  // timescaledb - computed: false, optional: true, required: false
  private _timescaledb = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledbOutputReference(this, "timescaledb");
  public get timescaledb() {
    return this._timescaledb;
  }
  public putTimescaledb(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionTimescaledb) {
    this._timescaledb.internalValue = value;
  }
  public resetTimescaledb() {
    this._timescaledb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timescaledbInput() {
    return this._timescaledb.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#effect DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#key DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#operator DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#value DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsOutputReference {
    return new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#image DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#node_selector DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#tolerations DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#tolerations}
  */
  readonly tolerations?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations[] | cdktf.IResolvable;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // image - computed: false, optional: true, required: false
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

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#annotations DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#finalizers DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#labels DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#name DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#namespace DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#metadata DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#metadata}
  */
  readonly metadata?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpec {
  /**
  * DatabaseConnection defines connection parameters for the database driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#connection DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#connection}
  */
  readonly connection?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#deploy_seed_data DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#deploy_seed_data}
  */
  readonly deploySeedData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#enable_shell_command DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#enable_shell_command}
  */
  readonly enableShellCommand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#immediate_deploy DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#immediate_deploy}
  */
  readonly immediateDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#schemahero DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#schemahero}
  */
  readonly schemahero?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/databases_schemahero_io_database_v1alpha4_manifest#template DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4Manifest#template}
  */
  readonly template?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate;
}

export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecToTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionToTerraform(struct!.connection),
    deploy_seed_data: cdktf.booleanToTerraform(struct!.deploySeedData),
    enable_shell_command: cdktf.booleanToTerraform(struct!.enableShellCommand),
    immediate_deploy: cdktf.booleanToTerraform(struct!.immediateDeploy),
    schemahero: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroToTerraform(struct!.schemahero),
    template: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection",
    },
    deploy_seed_data: {
      value: cdktf.booleanToHclTerraform(struct!.deploySeedData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_shell_command: {
      value: cdktf.booleanToHclTerraform(struct!.enableShellCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    immediate_deploy: {
      value: cdktf.booleanToHclTerraform(struct!.immediateDeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schemahero: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroToHclTerraform(struct!.schemahero),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero",
    },
    template: {
      value: dataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._deploySeedData !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploySeedData = this._deploySeedData;
    }
    if (this._enableShellCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableShellCommand = this._enableShellCommand;
    }
    if (this._immediateDeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediateDeploy = this._immediateDeploy;
    }
    if (this._schemahero?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemahero = this._schemahero?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._deploySeedData = undefined;
      this._enableShellCommand = undefined;
      this._immediateDeploy = undefined;
      this._schemahero.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._deploySeedData = value.deploySeedData;
      this._enableShellCommand = value.enableShellCommand;
      this._immediateDeploy = value.immediateDeploy;
      this._schemahero.internalValue = value.schemahero;
      this._template.internalValue = value.template;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // deploy_seed_data - computed: false, optional: true, required: false
  private _deploySeedData?: boolean | cdktf.IResolvable; 
  public get deploySeedData() {
    return this.getBooleanAttribute('deploy_seed_data');
  }
  public set deploySeedData(value: boolean | cdktf.IResolvable) {
    this._deploySeedData = value;
  }
  public resetDeploySeedData() {
    this._deploySeedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploySeedDataInput() {
    return this._deploySeedData;
  }

  // enable_shell_command - computed: false, optional: true, required: false
  private _enableShellCommand?: boolean | cdktf.IResolvable; 
  public get enableShellCommand() {
    return this.getBooleanAttribute('enable_shell_command');
  }
  public set enableShellCommand(value: boolean | cdktf.IResolvable) {
    this._enableShellCommand = value;
  }
  public resetEnableShellCommand() {
    this._enableShellCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShellCommandInput() {
    return this._enableShellCommand;
  }

  // immediate_deploy - computed: false, optional: true, required: false
  private _immediateDeploy?: boolean | cdktf.IResolvable; 
  public get immediateDeploy() {
    return this.getBooleanAttribute('immediate_deploy');
  }
  public set immediateDeploy(value: boolean | cdktf.IResolvable) {
    this._immediateDeploy = value;
  }
  public resetImmediateDeploy() {
    this._immediateDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateDeployInput() {
    return this._immediateDeploy;
  }

  // schemahero - computed: false, optional: true, required: false
  private _schemahero = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemaheroOutputReference(this, "schemahero");
  public get schemahero() {
    return this._schemahero;
  }
  public putSchemahero(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecSchemahero) {
    this._schemahero.internalValue = value;
  }
  public resetSchemahero() {
    this._schemahero.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaheroInput() {
    return this._schemahero.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SDatabasesSchemaheroIoDatabaseV1Alpha4ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
