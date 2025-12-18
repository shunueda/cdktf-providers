// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}
  */
  readonly enablePluggableDatabaseDbmFeature: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature}
  */
  readonly feature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}
  */
  readonly modifyPluggableDatabaseDbmFeature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}
  */
  readonly pluggableDatabaseId: string;
  /**
  * feature_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature_details}
  */
  readonly featureDetails?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#timeouts DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#timeouts}
  */
  readonly timeouts?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts;
}
export interface DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_type}
  */
  readonly connectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connector_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connector_id}
  */
  readonly databaseConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_agent_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_agent_id}
  */
  readonly managementAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#private_end_point_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#private_end_point_id}
  */
  readonly privateEndPointId?: string;
}

export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails): any {
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


export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToHclTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails): any {
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

export class DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails | undefined {
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

  public set internalValue(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails | undefined) {
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
export interface DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#named_credential_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#named_credential_id}
  */
  readonly namedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#password_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#role DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#ssl_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#ssl_secret_id}
  */
  readonly sslSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#user_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#user_name}
  */
  readonly userName?: string;
}

export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials): any {
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


export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToHclTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials): any {
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

export class DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials | undefined {
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

  public set internalValue(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials | undefined) {
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
export interface DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#port DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#protocol DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#service DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#service}
  */
  readonly service?: string;
}

export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString): any {
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


export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToHclTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString): any {
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

export class DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString | undefined {
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

  public set internalValue(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString | undefined) {
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
export interface DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails {
  /**
  * connection_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_credentials DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_credentials}
  */
  readonly connectionCredentials?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_string DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_string}
  */
  readonly connectionString?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString;
}

export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credentials: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToTerraform(struct!.connectionCredentials),
    connection_string: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToTerraform(struct!.connectionString),
  }
}


export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToHclTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credentials: {
      value: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsToHclTerraform(struct!.connectionCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsList",
    },
    connection_string: {
      value: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringToHclTerraform(struct!.connectionString),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails | undefined {
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

  public set internalValue(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails | undefined) {
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
  private _connectionCredentials = new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference(this, "connection_credentials");
  public get connectionCredentials() {
    return this._connectionCredentials;
  }
  public putConnectionCredentials(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials) {
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
  private _connectionString = new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference(this, "connection_string");
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString) {
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
export interface DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#can_enable_all_current_pdbs DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#can_enable_all_current_pdbs}
  */
  readonly canEnableAllCurrentPdbs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#is_auto_enable_pluggable_database DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#is_auto_enable_pluggable_database}
  */
  readonly isAutoEnablePluggableDatabase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_type}
  */
  readonly managementType?: string;
  /**
  * connector_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_details}
  */
  readonly connectorDetails?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails;
  /**
  * database_connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connection_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connection_details}
  */
  readonly databaseConnectionDetails?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails;
}

export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsToTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_enable_all_current_pdbs: cdktf.booleanToTerraform(struct!.canEnableAllCurrentPdbs),
    feature: cdktf.stringToTerraform(struct!.feature),
    is_auto_enable_pluggable_database: cdktf.booleanToTerraform(struct!.isAutoEnablePluggableDatabase),
    management_type: cdktf.stringToTerraform(struct!.managementType),
    connector_details: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToTerraform(struct!.connectorDetails),
    database_connection_details: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToTerraform(struct!.databaseConnectionDetails),
  }
}


export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsToHclTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference | DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails): any {
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
      value: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsToHclTerraform(struct!.connectorDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsList",
    },
    database_connection_details: {
      value: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsToHclTerraform(struct!.databaseConnectionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails | undefined {
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

  public set internalValue(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails | undefined) {
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
  private _connectorDetails = new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(this, "connector_details");
  public get connectorDetails() {
    return this._connectorDetails;
  }
  public putConnectorDetails(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails) {
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
  private _databaseConnectionDetails = new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference(this, "database_connection_details");
  public get databaseConnectionDetails() {
    return this._databaseConnectionDetails;
  }
  public putDatabaseConnectionDetails(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails) {
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
export interface DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#create DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#delete DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#update DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#update}
  */
  readonly update?: string;
}

export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsToTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsToHclTerraform(struct?: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management oci_database_management_pluggabledatabase_pluggable_database_dbm_features_management}
*/
export class DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_pluggabledatabase_pluggable_database_dbm_features_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement to import
  * @param importFromId The id of the existing DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_pluggabledatabase_pluggable_database_dbm_features_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management oci_database_management_pluggabledatabase_pluggable_database_dbm_features_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_pluggabledatabase_pluggable_database_dbm_features_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablePluggableDatabaseDbmFeature = config.enablePluggableDatabaseDbmFeature;
    this._feature = config.feature;
    this._id = config.id;
    this._modifyPluggableDatabaseDbmFeature = config.modifyPluggableDatabaseDbmFeature;
    this._pluggableDatabaseId = config.pluggableDatabaseId;
    this._featureDetails.internalValue = config.featureDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_pluggable_database_dbm_feature - computed: false, optional: false, required: true
  private _enablePluggableDatabaseDbmFeature?: boolean | cdktf.IResolvable; 
  public get enablePluggableDatabaseDbmFeature() {
    return this.getBooleanAttribute('enable_pluggable_database_dbm_feature');
  }
  public set enablePluggableDatabaseDbmFeature(value: boolean | cdktf.IResolvable) {
    this._enablePluggableDatabaseDbmFeature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePluggableDatabaseDbmFeatureInput() {
    return this._enablePluggableDatabaseDbmFeature;
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

  // modify_pluggable_database_dbm_feature - computed: false, optional: true, required: false
  private _modifyPluggableDatabaseDbmFeature?: boolean | cdktf.IResolvable; 
  public get modifyPluggableDatabaseDbmFeature() {
    return this.getBooleanAttribute('modify_pluggable_database_dbm_feature');
  }
  public set modifyPluggableDatabaseDbmFeature(value: boolean | cdktf.IResolvable) {
    this._modifyPluggableDatabaseDbmFeature = value;
  }
  public resetModifyPluggableDatabaseDbmFeature() {
    this._modifyPluggableDatabaseDbmFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyPluggableDatabaseDbmFeatureInput() {
    return this._modifyPluggableDatabaseDbmFeature;
  }

  // pluggable_database_id - computed: false, optional: false, required: true
  private _pluggableDatabaseId?: string; 
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }
  public set pluggableDatabaseId(value: string) {
    this._pluggableDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseIdInput() {
    return this._pluggableDatabaseId;
  }

  // feature_details - computed: false, optional: true, required: false
  private _featureDetails = new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference(this, "feature_details");
  public get featureDetails() {
    return this._featureDetails;
  }
  public putFeatureDetails(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails) {
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
  private _timeouts = new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts) {
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
      enable_pluggable_database_dbm_feature: cdktf.booleanToTerraform(this._enablePluggableDatabaseDbmFeature),
      feature: cdktf.stringToTerraform(this._feature),
      id: cdktf.stringToTerraform(this._id),
      modify_pluggable_database_dbm_feature: cdktf.booleanToTerraform(this._modifyPluggableDatabaseDbmFeature),
      pluggable_database_id: cdktf.stringToTerraform(this._pluggableDatabaseId),
      feature_details: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsToTerraform(this._featureDetails.internalValue),
      timeouts: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_pluggable_database_dbm_feature: {
        value: cdktf.booleanToHclTerraform(this._enablePluggableDatabaseDbmFeature),
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
      modify_pluggable_database_dbm_feature: {
        value: cdktf.booleanToHclTerraform(this._modifyPluggableDatabaseDbmFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pluggable_database_id: {
        value: cdktf.stringToHclTerraform(this._pluggableDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_details: {
        value: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsToHclTerraform(this._featureDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsList",
      },
      timeouts: {
        value: databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
