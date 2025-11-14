// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementDatabaseDbmFeaturesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#can_disable_all_pdbs DatabaseManagementDatabaseDbmFeaturesManagement#can_disable_all_pdbs}
  */
  readonly canDisableAllPdbs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#database_id DatabaseManagementDatabaseDbmFeaturesManagement#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#enable_database_dbm_feature DatabaseManagementDatabaseDbmFeaturesManagement#enable_database_dbm_feature}
  */
  readonly enableDatabaseDbmFeature: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#feature DatabaseManagementDatabaseDbmFeaturesManagement#feature}
  */
  readonly feature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#id DatabaseManagementDatabaseDbmFeaturesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#modify_database_dbm_feature DatabaseManagementDatabaseDbmFeaturesManagement#modify_database_dbm_feature}
  */
  readonly modifyDatabaseDbmFeature?: boolean | cdktf.IResolvable;
  /**
  * feature_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#feature_details DatabaseManagementDatabaseDbmFeaturesManagement#feature_details}
  */
  readonly featureDetails?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#timeouts DatabaseManagementDatabaseDbmFeaturesManagement#timeouts}
  */
  readonly timeouts?: DatabaseManagementDatabaseDbmFeaturesManagementTimeouts;
}
export interface DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#connector_type DatabaseManagementDatabaseDbmFeaturesManagement#connector_type}
  */
  readonly connectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#database_connector_id DatabaseManagementDatabaseDbmFeaturesManagement#database_connector_id}
  */
  readonly databaseConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#management_agent_id DatabaseManagementDatabaseDbmFeaturesManagement#management_agent_id}
  */
  readonly managementAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#private_end_point_id DatabaseManagementDatabaseDbmFeaturesManagement#private_end_point_id}
  */
  readonly privateEndPointId?: string;
}

export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    database_connector_id: cdktf.stringToTerraform(struct!.databaseConnectorId),
    management_agent_id: cdktf.stringToTerraform(struct!.managementAgentId),
    private_end_point_id: cdktf.stringToTerraform(struct!.privateEndPointId),
  }
}


export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToHclTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_connector_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseConnectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_agent_id: {
      value: cdktf.stringToHclTerraform(struct!.managementAgentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_end_point_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndPointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._databaseConnectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConnectorId = this._databaseConnectorId;
    }
    if (this._managementAgentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAgentId = this._managementAgentId;
    }
    if (this._privateEndPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndPointId = this._privateEndPointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectorType = undefined;
      this._databaseConnectorId = undefined;
      this._managementAgentId = undefined;
      this._privateEndPointId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectorType = value.connectorType;
      this._databaseConnectorId = value.databaseConnectorId;
      this._managementAgentId = value.managementAgentId;
      this._privateEndPointId = value.privateEndPointId;
    }
  }

  // connector_type - computed: false, optional: true, required: false
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  public resetConnectorType() {
    this._connectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // database_connector_id - computed: false, optional: true, required: false
  private _databaseConnectorId?: string; 
  public get databaseConnectorId() {
    return this.getStringAttribute('database_connector_id');
  }
  public set databaseConnectorId(value: string) {
    this._databaseConnectorId = value;
  }
  public resetDatabaseConnectorId() {
    this._databaseConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectorIdInput() {
    return this._databaseConnectorId;
  }

  // management_agent_id - computed: false, optional: true, required: false
  private _managementAgentId?: string; 
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }
  public set managementAgentId(value: string) {
    this._managementAgentId = value;
  }
  public resetManagementAgentId() {
    this._managementAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentIdInput() {
    return this._managementAgentId;
  }

  // private_end_point_id - computed: false, optional: true, required: false
  private _privateEndPointId?: string; 
  public get privateEndPointId() {
    return this.getStringAttribute('private_end_point_id');
  }
  public set privateEndPointId(value: string) {
    this._privateEndPointId = value;
  }
  public resetPrivateEndPointId() {
    this._privateEndPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndPointIdInput() {
    return this._privateEndPointId;
  }
}
export interface DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#credential_name DatabaseManagementDatabaseDbmFeaturesManagement#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#credential_type DatabaseManagementDatabaseDbmFeaturesManagement#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#named_credential_id DatabaseManagementDatabaseDbmFeaturesManagement#named_credential_id}
  */
  readonly namedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#password_secret_id DatabaseManagementDatabaseDbmFeaturesManagement#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#role DatabaseManagementDatabaseDbmFeaturesManagement#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#ssl_secret_id DatabaseManagementDatabaseDbmFeaturesManagement#ssl_secret_id}
  */
  readonly sslSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#user_name DatabaseManagementDatabaseDbmFeaturesManagement#user_name}
  */
  readonly userName?: string;
}

export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    named_credential_id: cdktf.stringToTerraform(struct!.namedCredentialId),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    ssl_secret_id: cdktf.stringToTerraform(struct!.sslSecretId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToHclTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.namedCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
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
    ssl_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.sslSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._namedCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedCredentialId = this._namedCredentialId;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sslSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecretId = this._sslSecretId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialName = undefined;
      this._credentialType = undefined;
      this._namedCredentialId = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._sslSecretId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialName = value.credentialName;
      this._credentialType = value.credentialType;
      this._namedCredentialId = value.namedCredentialId;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._sslSecretId = value.sslSecretId;
      this._userName = value.userName;
    }
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // credential_type - computed: false, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // named_credential_id - computed: true, optional: true, required: false
  private _namedCredentialId?: string; 
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }
  public set namedCredentialId(value: string) {
    this._namedCredentialId = value;
  }
  public resetNamedCredentialId() {
    this._namedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCredentialIdInput() {
    return this._namedCredentialId;
  }

  // password_secret_id - computed: false, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // ssl_secret_id - computed: false, optional: true, required: false
  private _sslSecretId?: string; 
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }
  public set sslSecretId(value: string) {
    this._sslSecretId = value;
  }
  public resetSslSecretId() {
    this._sslSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecretIdInput() {
    return this._sslSecretId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#connection_type DatabaseManagementDatabaseDbmFeaturesManagement#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#port DatabaseManagementDatabaseDbmFeaturesManagement#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#protocol DatabaseManagementDatabaseDbmFeaturesManagement#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#service DatabaseManagementDatabaseDbmFeaturesManagement#service}
  */
  readonly service?: string;
}

export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToHclTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._port = value.port;
      this._protocol = value.protocol;
      this._service = value.service;
    }
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails {
  /**
  * connection_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#connection_credentials DatabaseManagementDatabaseDbmFeaturesManagement#connection_credentials}
  */
  readonly connectionCredentials?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#connection_string DatabaseManagementDatabaseDbmFeaturesManagement#connection_string}
  */
  readonly connectionString?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString;
}

export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credentials: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToTerraform(struct!.connectionCredentials),
    connection_string: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToTerraform(struct!.connectionString),
  }
}


export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToHclTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credentials: {
      value: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToHclTerraform(struct!.connectionCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsList",
    },
    connection_string: {
      value: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToHclTerraform(struct!.connectionString),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredentials = this._connectionCredentials?.internalValue;
    }
    if (this._connectionString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionCredentials.internalValue = undefined;
      this._connectionString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionCredentials.internalValue = value.connectionCredentials;
      this._connectionString.internalValue = value.connectionString;
    }
  }

  // connection_credentials - computed: false, optional: true, required: false
  private _connectionCredentials = new DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference(this, "connection_credentials");
  public get connectionCredentials() {
    return this._connectionCredentials;
  }
  public putConnectionCredentials(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials) {
    this._connectionCredentials.internalValue = value;
  }
  public resetConnectionCredentials() {
    this._connectionCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialsInput() {
    return this._connectionCredentials.internalValue;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString = new DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference(this, "connection_string");
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString) {
    this._connectionString.internalValue = value;
  }
  public resetConnectionString() {
    this._connectionString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString.internalValue;
  }
}
export interface DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#can_enable_all_current_pdbs DatabaseManagementDatabaseDbmFeaturesManagement#can_enable_all_current_pdbs}
  */
  readonly canEnableAllCurrentPdbs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#feature DatabaseManagementDatabaseDbmFeaturesManagement#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#is_auto_enable_pluggable_database DatabaseManagementDatabaseDbmFeaturesManagement#is_auto_enable_pluggable_database}
  */
  readonly isAutoEnablePluggableDatabase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#management_type DatabaseManagementDatabaseDbmFeaturesManagement#management_type}
  */
  readonly managementType?: string;
  /**
  * connector_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#connector_details DatabaseManagementDatabaseDbmFeaturesManagement#connector_details}
  */
  readonly connectorDetails?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails;
  /**
  * database_connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#database_connection_details DatabaseManagementDatabaseDbmFeaturesManagement#database_connection_details}
  */
  readonly databaseConnectionDetails?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails;
}

export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsToTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_enable_all_current_pdbs: cdktf.booleanToTerraform(struct!.canEnableAllCurrentPdbs),
    feature: cdktf.stringToTerraform(struct!.feature),
    is_auto_enable_pluggable_database: cdktf.booleanToTerraform(struct!.isAutoEnablePluggableDatabase),
    management_type: cdktf.stringToTerraform(struct!.managementType),
    connector_details: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToTerraform(struct!.connectorDetails),
    database_connection_details: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToTerraform(struct!.databaseConnectionDetails),
  }
}


export function databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsToHclTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsOutputReference | DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_enable_all_current_pdbs: {
      value: cdktf.booleanToHclTerraform(struct!.canEnableAllCurrentPdbs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_auto_enable_pluggable_database: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoEnablePluggableDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    management_type: {
      value: cdktf.stringToHclTerraform(struct!.managementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_details: {
      value: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToHclTerraform(struct!.connectorDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsList",
    },
    database_connection_details: {
      value: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToHclTerraform(struct!.databaseConnectionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canEnableAllCurrentPdbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.canEnableAllCurrentPdbs = this._canEnableAllCurrentPdbs;
    }
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._isAutoEnablePluggableDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoEnablePluggableDatabase = this._isAutoEnablePluggableDatabase;
    }
    if (this._managementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementType = this._managementType;
    }
    if (this._connectorDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorDetails = this._connectorDetails?.internalValue;
    }
    if (this._databaseConnectionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConnectionDetails = this._databaseConnectionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canEnableAllCurrentPdbs = undefined;
      this._feature = undefined;
      this._isAutoEnablePluggableDatabase = undefined;
      this._managementType = undefined;
      this._connectorDetails.internalValue = undefined;
      this._databaseConnectionDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canEnableAllCurrentPdbs = value.canEnableAllCurrentPdbs;
      this._feature = value.feature;
      this._isAutoEnablePluggableDatabase = value.isAutoEnablePluggableDatabase;
      this._managementType = value.managementType;
      this._connectorDetails.internalValue = value.connectorDetails;
      this._databaseConnectionDetails.internalValue = value.databaseConnectionDetails;
    }
  }

  // can_enable_all_current_pdbs - computed: true, optional: true, required: false
  private _canEnableAllCurrentPdbs?: boolean | cdktf.IResolvable; 
  public get canEnableAllCurrentPdbs() {
    return this.getBooleanAttribute('can_enable_all_current_pdbs');
  }
  public set canEnableAllCurrentPdbs(value: boolean | cdktf.IResolvable) {
    this._canEnableAllCurrentPdbs = value;
  }
  public resetCanEnableAllCurrentPdbs() {
    this._canEnableAllCurrentPdbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canEnableAllCurrentPdbsInput() {
    return this._canEnableAllCurrentPdbs;
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // is_auto_enable_pluggable_database - computed: false, optional: true, required: false
  private _isAutoEnablePluggableDatabase?: boolean | cdktf.IResolvable; 
  public get isAutoEnablePluggableDatabase() {
    return this.getBooleanAttribute('is_auto_enable_pluggable_database');
  }
  public set isAutoEnablePluggableDatabase(value: boolean | cdktf.IResolvable) {
    this._isAutoEnablePluggableDatabase = value;
  }
  public resetIsAutoEnablePluggableDatabase() {
    this._isAutoEnablePluggableDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoEnablePluggableDatabaseInput() {
    return this._isAutoEnablePluggableDatabase;
  }

  // management_type - computed: false, optional: true, required: false
  private _managementType?: string; 
  public get managementType() {
    return this.getStringAttribute('management_type');
  }
  public set managementType(value: string) {
    this._managementType = value;
  }
  public resetManagementType() {
    this._managementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementTypeInput() {
    return this._managementType;
  }

  // connector_details - computed: false, optional: true, required: false
  private _connectorDetails = new DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(this, "connector_details");
  public get connectorDetails() {
    return this._connectorDetails;
  }
  public putConnectorDetails(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails) {
    this._connectorDetails.internalValue = value;
  }
  public resetConnectorDetails() {
    this._connectorDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorDetailsInput() {
    return this._connectorDetails.internalValue;
  }

  // database_connection_details - computed: false, optional: true, required: false
  private _databaseConnectionDetails = new DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference(this, "database_connection_details");
  public get databaseConnectionDetails() {
    return this._databaseConnectionDetails;
  }
  public putDatabaseConnectionDetails(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails) {
    this._databaseConnectionDetails.internalValue = value;
  }
  public resetDatabaseConnectionDetails() {
    this._databaseConnectionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectionDetailsInput() {
    return this._databaseConnectionDetails.internalValue;
  }
}
export interface DatabaseManagementDatabaseDbmFeaturesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#create DatabaseManagementDatabaseDbmFeaturesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#delete DatabaseManagementDatabaseDbmFeaturesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#update DatabaseManagementDatabaseDbmFeaturesManagement#update}
  */
  readonly update?: string;
}

export function databaseManagementDatabaseDbmFeaturesManagementTimeoutsToTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementDatabaseDbmFeaturesManagementTimeoutsToHclTerraform(struct?: DatabaseManagementDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementDatabaseDbmFeaturesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management oci_database_management_database_dbm_features_management}
*/
export class DatabaseManagementDatabaseDbmFeaturesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_database_dbm_features_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementDatabaseDbmFeaturesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementDatabaseDbmFeaturesManagement to import
  * @param importFromId The id of the existing DatabaseManagementDatabaseDbmFeaturesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementDatabaseDbmFeaturesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_database_dbm_features_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_management_database_dbm_features_management oci_database_management_database_dbm_features_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementDatabaseDbmFeaturesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementDatabaseDbmFeaturesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_database_dbm_features_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canDisableAllPdbs = config.canDisableAllPdbs;
    this._databaseId = config.databaseId;
    this._enableDatabaseDbmFeature = config.enableDatabaseDbmFeature;
    this._feature = config.feature;
    this._id = config.id;
    this._modifyDatabaseDbmFeature = config.modifyDatabaseDbmFeature;
    this._featureDetails.internalValue = config.featureDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_disable_all_pdbs - computed: false, optional: true, required: false
  private _canDisableAllPdbs?: boolean | cdktf.IResolvable; 
  public get canDisableAllPdbs() {
    return this.getBooleanAttribute('can_disable_all_pdbs');
  }
  public set canDisableAllPdbs(value: boolean | cdktf.IResolvable) {
    this._canDisableAllPdbs = value;
  }
  public resetCanDisableAllPdbs() {
    this._canDisableAllPdbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDisableAllPdbsInput() {
    return this._canDisableAllPdbs;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // enable_database_dbm_feature - computed: false, optional: false, required: true
  private _enableDatabaseDbmFeature?: boolean | cdktf.IResolvable; 
  public get enableDatabaseDbmFeature() {
    return this.getBooleanAttribute('enable_database_dbm_feature');
  }
  public set enableDatabaseDbmFeature(value: boolean | cdktf.IResolvable) {
    this._enableDatabaseDbmFeature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDatabaseDbmFeatureInput() {
    return this._enableDatabaseDbmFeature;
  }

  // feature - computed: false, optional: true, required: false
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  public resetFeature() {
    this._feature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
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

  // modify_database_dbm_feature - computed: false, optional: true, required: false
  private _modifyDatabaseDbmFeature?: boolean | cdktf.IResolvable; 
  public get modifyDatabaseDbmFeature() {
    return this.getBooleanAttribute('modify_database_dbm_feature');
  }
  public set modifyDatabaseDbmFeature(value: boolean | cdktf.IResolvable) {
    this._modifyDatabaseDbmFeature = value;
  }
  public resetModifyDatabaseDbmFeature() {
    this._modifyDatabaseDbmFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyDatabaseDbmFeatureInput() {
    return this._modifyDatabaseDbmFeature;
  }

  // feature_details - computed: false, optional: true, required: false
  private _featureDetails = new DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsOutputReference(this, "feature_details");
  public get featureDetails() {
    return this._featureDetails;
  }
  public putFeatureDetails(value: DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetails) {
    this._featureDetails.internalValue = value;
  }
  public resetFeatureDetails() {
    this._featureDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDetailsInput() {
    return this._featureDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementDatabaseDbmFeaturesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementDatabaseDbmFeaturesManagementTimeouts) {
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
      can_disable_all_pdbs: cdktf.booleanToTerraform(this._canDisableAllPdbs),
      database_id: cdktf.stringToTerraform(this._databaseId),
      enable_database_dbm_feature: cdktf.booleanToTerraform(this._enableDatabaseDbmFeature),
      feature: cdktf.stringToTerraform(this._feature),
      id: cdktf.stringToTerraform(this._id),
      modify_database_dbm_feature: cdktf.booleanToTerraform(this._modifyDatabaseDbmFeature),
      feature_details: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsToTerraform(this._featureDetails.internalValue),
      timeouts: databaseManagementDatabaseDbmFeaturesManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_disable_all_pdbs: {
        value: cdktf.booleanToHclTerraform(this._canDisableAllPdbs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_database_dbm_feature: {
        value: cdktf.booleanToHclTerraform(this._enableDatabaseDbmFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature: {
        value: cdktf.stringToHclTerraform(this._feature),
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
      modify_database_dbm_feature: {
        value: cdktf.booleanToHclTerraform(this._modifyDatabaseDbmFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_details: {
        value: databaseManagementDatabaseDbmFeaturesManagementFeatureDetailsToHclTerraform(this._featureDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementDatabaseDbmFeaturesManagementFeatureDetailsList",
      },
      timeouts: {
        value: databaseManagementDatabaseDbmFeaturesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementDatabaseDbmFeaturesManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
