// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbmulticloudOracleDbAwsIdentityConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#aws_account_id DbmulticloudOracleDbAwsIdentityConnector#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#aws_location DbmulticloudOracleDbAwsIdentityConnector#aws_location}
  */
  readonly awsLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#aws_sts_private_endpoint DbmulticloudOracleDbAwsIdentityConnector#aws_sts_private_endpoint}
  */
  readonly awsStsPrivateEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#compartment_id DbmulticloudOracleDbAwsIdentityConnector#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#defined_tags DbmulticloudOracleDbAwsIdentityConnector#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#display_name DbmulticloudOracleDbAwsIdentityConnector#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#freeform_tags DbmulticloudOracleDbAwsIdentityConnector#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#id DbmulticloudOracleDbAwsIdentityConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#issuer_url DbmulticloudOracleDbAwsIdentityConnector#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#oidc_scope DbmulticloudOracleDbAwsIdentityConnector#oidc_scope}
  */
  readonly oidcScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#resource_id DbmulticloudOracleDbAwsIdentityConnector#resource_id}
  */
  readonly resourceId: string;
  /**
  * service_role_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#service_role_details DbmulticloudOracleDbAwsIdentityConnector#service_role_details}
  */
  readonly serviceRoleDetails: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#timeouts DbmulticloudOracleDbAwsIdentityConnector#timeouts}
  */
  readonly timeouts?: DbmulticloudOracleDbAwsIdentityConnectorTimeouts;
}
export interface DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodes {
}

export function dbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodesToTerraform(struct?: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodesToHclTerraform(struct?: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_last_checked - computed: true, optional: false, required: false
  public get timeLastChecked() {
    return this.getStringAttribute('time_last_checked');
  }
}

export class DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodesList extends cdktf.ComplexList {

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
  public get(index: number): DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodesOutputReference {
    return new DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#role_arn DbmulticloudOracleDbAwsIdentityConnector#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#service_private_endpoint DbmulticloudOracleDbAwsIdentityConnector#service_private_endpoint}
  */
  readonly servicePrivateEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#service_type DbmulticloudOracleDbAwsIdentityConnector#service_type}
  */
  readonly serviceType: string;
}

export function dbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsToTerraform(struct?: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    service_private_endpoint: cdktf.stringToTerraform(struct!.servicePrivateEndpoint),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsToHclTerraform(struct?: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_private_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.servicePrivateEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._servicePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrivateEndpoint = this._servicePrivateEndpoint;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._servicePrivateEndpoint = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._servicePrivateEndpoint = value.servicePrivateEndpoint;
      this._serviceType = value.serviceType;
    }
  }

  // assume_role_status - computed: true, optional: false, required: false
  public get assumeRoleStatus() {
    return this.getStringAttribute('assume_role_status');
  }

  // aws_nodes - computed: true, optional: false, required: false
  private _awsNodes = new DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsAwsNodesList(this, "aws_nodes", false);
  public get awsNodes() {
    return this._awsNodes;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service_private_endpoint - computed: false, optional: false, required: true
  private _servicePrivateEndpoint?: string; 
  public get servicePrivateEndpoint() {
    return this.getStringAttribute('service_private_endpoint');
  }
  public set servicePrivateEndpoint(value: string) {
    this._servicePrivateEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrivateEndpointInput() {
    return this._servicePrivateEndpoint;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}

export class DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsList extends cdktf.ComplexList {
  public internalValue? : DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails[] | cdktf.IResolvable

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
  public get(index: number): DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsOutputReference {
    return new DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbmulticloudOracleDbAwsIdentityConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#create DbmulticloudOracleDbAwsIdentityConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#delete DbmulticloudOracleDbAwsIdentityConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#update DbmulticloudOracleDbAwsIdentityConnector#update}
  */
  readonly update?: string;
}

export function dbmulticloudOracleDbAwsIdentityConnectorTimeoutsToTerraform(struct?: DbmulticloudOracleDbAwsIdentityConnectorTimeouts | cdktf.IResolvable): any {
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


export function dbmulticloudOracleDbAwsIdentityConnectorTimeoutsToHclTerraform(struct?: DbmulticloudOracleDbAwsIdentityConnectorTimeouts | cdktf.IResolvable): any {
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

export class DbmulticloudOracleDbAwsIdentityConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbmulticloudOracleDbAwsIdentityConnectorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbmulticloudOracleDbAwsIdentityConnectorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector oci_dbmulticloud_oracle_db_aws_identity_connector}
*/
export class DbmulticloudOracleDbAwsIdentityConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_aws_identity_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbmulticloudOracleDbAwsIdentityConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbmulticloudOracleDbAwsIdentityConnector to import
  * @param importFromId The id of the existing DbmulticloudOracleDbAwsIdentityConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbmulticloudOracleDbAwsIdentityConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_aws_identity_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dbmulticloud_oracle_db_aws_identity_connector oci_dbmulticloud_oracle_db_aws_identity_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbmulticloudOracleDbAwsIdentityConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DbmulticloudOracleDbAwsIdentityConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_aws_identity_connector',
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
    this._awsAccountId = config.awsAccountId;
    this._awsLocation = config.awsLocation;
    this._awsStsPrivateEndpoint = config.awsStsPrivateEndpoint;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._issuerUrl = config.issuerUrl;
    this._oidcScope = config.oidcScope;
    this._resourceId = config.resourceId;
    this._serviceRoleDetails.internalValue = config.serviceRoleDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_location - computed: false, optional: false, required: true
  private _awsLocation?: string; 
  public get awsLocation() {
    return this.getStringAttribute('aws_location');
  }
  public set awsLocation(value: string) {
    this._awsLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLocationInput() {
    return this._awsLocation;
  }

  // aws_sts_private_endpoint - computed: true, optional: true, required: false
  private _awsStsPrivateEndpoint?: string; 
  public get awsStsPrivateEndpoint() {
    return this.getStringAttribute('aws_sts_private_endpoint');
  }
  public set awsStsPrivateEndpoint(value: string) {
    this._awsStsPrivateEndpoint = value;
  }
  public resetAwsStsPrivateEndpoint() {
    this._awsStsPrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsPrivateEndpointInput() {
    return this._awsStsPrivateEndpoint;
  }

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // oidc_scope - computed: false, optional: false, required: true
  private _oidcScope?: string; 
  public get oidcScope() {
    return this.getStringAttribute('oidc_scope');
  }
  public set oidcScope(value: string) {
    this._oidcScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopeInput() {
    return this._oidcScope;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // service_role_details - computed: false, optional: false, required: true
  private _serviceRoleDetails = new DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsList(this, "service_role_details", false);
  public get serviceRoleDetails() {
    return this._serviceRoleDetails;
  }
  public putServiceRoleDetails(value: DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetails[] | cdktf.IResolvable) {
    this._serviceRoleDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleDetailsInput() {
    return this._serviceRoleDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbmulticloudOracleDbAwsIdentityConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbmulticloudOracleDbAwsIdentityConnectorTimeouts) {
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
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_location: cdktf.stringToTerraform(this._awsLocation),
      aws_sts_private_endpoint: cdktf.stringToTerraform(this._awsStsPrivateEndpoint),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      oidc_scope: cdktf.stringToTerraform(this._oidcScope),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      service_role_details: cdktf.listMapper(dbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsToTerraform, true)(this._serviceRoleDetails.internalValue),
      timeouts: dbmulticloudOracleDbAwsIdentityConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_location: {
        value: cdktf.stringToHclTerraform(this._awsLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_sts_private_endpoint: {
        value: cdktf.stringToHclTerraform(this._awsStsPrivateEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_scope: {
        value: cdktf.stringToHclTerraform(this._oidcScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_role_details: {
        value: cdktf.listMapperHcl(dbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsToHclTerraform, true)(this._serviceRoleDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbmulticloudOracleDbAwsIdentityConnectorServiceRoleDetailsList",
      },
      timeouts: {
        value: dbmulticloudOracleDbAwsIdentityConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbmulticloudOracleDbAwsIdentityConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
