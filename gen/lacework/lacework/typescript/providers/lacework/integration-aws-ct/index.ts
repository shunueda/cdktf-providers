// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsCtConfig extends cdktf.TerraformMetaArguments {
  /**
  * The state of the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#enabled IntegrationAwsCt#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#id IntegrationAwsCt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#name IntegrationAwsCt#name}
  */
  readonly name: string;
  /**
  * The SQS Queue URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#queue_url IntegrationAwsCt#queue_url}
  */
  readonly queueUrl: string;
  /**
  * The number of attempts to create the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#retries IntegrationAwsCt#retries}
  */
  readonly retries?: number;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#credentials IntegrationAwsCt#credentials}
  */
  readonly credentials: IntegrationAwsCtCredentials;
  /**
  * org_account_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#org_account_mappings IntegrationAwsCt#org_account_mappings}
  */
  readonly orgAccountMappings?: IntegrationAwsCtOrgAccountMappings;
}
export interface IntegrationAwsCtCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#external_id IntegrationAwsCt#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#role_arn IntegrationAwsCt#role_arn}
  */
  readonly roleArn: string;
}

export function integrationAwsCtCredentialsToTerraform(struct?: IntegrationAwsCtCredentialsOutputReference | IntegrationAwsCtCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function integrationAwsCtCredentialsToHclTerraform(struct?: IntegrationAwsCtCredentialsOutputReference | IntegrationAwsCtCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsCtCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationAwsCtCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsCtCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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
}
export interface IntegrationAwsCtOrgAccountMappingsMapping {
  /**
  * The list of AWS account IDs to map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#aws_accounts IntegrationAwsCt#aws_accounts}
  */
  readonly awsAccounts: string[];
  /**
  * The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#lacework_account IntegrationAwsCt#lacework_account}
  */
  readonly laceworkAccount: string;
}

export function integrationAwsCtOrgAccountMappingsMappingToTerraform(struct?: IntegrationAwsCtOrgAccountMappingsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsAccounts),
    lacework_account: cdktf.stringToTerraform(struct!.laceworkAccount),
  }
}


export function integrationAwsCtOrgAccountMappingsMappingToHclTerraform(struct?: IntegrationAwsCtOrgAccountMappingsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    lacework_account: {
      value: cdktf.stringToHclTerraform(struct!.laceworkAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsCtOrgAccountMappingsMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationAwsCtOrgAccountMappingsMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccounts = this._awsAccounts;
    }
    if (this._laceworkAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.laceworkAccount = this._laceworkAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsCtOrgAccountMappingsMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccounts = undefined;
      this._laceworkAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccounts = value.awsAccounts;
      this._laceworkAccount = value.laceworkAccount;
    }
  }

  // aws_accounts - computed: false, optional: false, required: true
  private _awsAccounts?: string[]; 
  public get awsAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('aws_accounts'));
  }
  public set awsAccounts(value: string[]) {
    this._awsAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountsInput() {
    return this._awsAccounts;
  }

  // lacework_account - computed: false, optional: false, required: true
  private _laceworkAccount?: string; 
  public get laceworkAccount() {
    return this.getStringAttribute('lacework_account');
  }
  public set laceworkAccount(value: string) {
    this._laceworkAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get laceworkAccountInput() {
    return this._laceworkAccount;
  }
}

export class IntegrationAwsCtOrgAccountMappingsMappingList extends cdktf.ComplexList {
  public internalValue? : IntegrationAwsCtOrgAccountMappingsMapping[] | cdktf.IResolvable

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
  public get(index: number): IntegrationAwsCtOrgAccountMappingsMappingOutputReference {
    return new IntegrationAwsCtOrgAccountMappingsMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsCtOrgAccountMappings {
  /**
  * The default Lacework account name where any non-mapped AWS account will appear
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#default_lacework_account IntegrationAwsCt#default_lacework_account}
  */
  readonly defaultLaceworkAccount: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#mapping IntegrationAwsCt#mapping}
  */
  readonly mapping: IntegrationAwsCtOrgAccountMappingsMapping[] | cdktf.IResolvable;
}

export function integrationAwsCtOrgAccountMappingsToTerraform(struct?: IntegrationAwsCtOrgAccountMappingsOutputReference | IntegrationAwsCtOrgAccountMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_lacework_account: cdktf.stringToTerraform(struct!.defaultLaceworkAccount),
    mapping: cdktf.listMapper(integrationAwsCtOrgAccountMappingsMappingToTerraform, true)(struct!.mapping),
  }
}


export function integrationAwsCtOrgAccountMappingsToHclTerraform(struct?: IntegrationAwsCtOrgAccountMappingsOutputReference | IntegrationAwsCtOrgAccountMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_lacework_account: {
      value: cdktf.stringToHclTerraform(struct!.defaultLaceworkAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.listMapperHcl(integrationAwsCtOrgAccountMappingsMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationAwsCtOrgAccountMappingsMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsCtOrgAccountMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationAwsCtOrgAccountMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLaceworkAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLaceworkAccount = this._defaultLaceworkAccount;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsCtOrgAccountMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLaceworkAccount = undefined;
      this._mapping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLaceworkAccount = value.defaultLaceworkAccount;
      this._mapping.internalValue = value.mapping;
    }
  }

  // default_lacework_account - computed: false, optional: false, required: true
  private _defaultLaceworkAccount?: string; 
  public get defaultLaceworkAccount() {
    return this.getStringAttribute('default_lacework_account');
  }
  public set defaultLaceworkAccount(value: string) {
    this._defaultLaceworkAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLaceworkAccountInput() {
    return this._defaultLaceworkAccount;
  }

  // mapping - computed: false, optional: false, required: true
  private _mapping = new IntegrationAwsCtOrgAccountMappingsMappingList(this, "mapping", true);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: IntegrationAwsCtOrgAccountMappingsMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct lacework_integration_aws_ct}
*/
export class IntegrationAwsCt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_aws_ct";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsCt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsCt to import
  * @param importFromId The id of the existing IntegrationAwsCt that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsCt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_aws_ct", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_ct lacework_integration_aws_ct} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsCtConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsCtConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_aws_ct',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10',
        providerVersionConstraint: '2.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._queueUrl = config.queueUrl;
    this._retries = config.retries;
    this._credentials.internalValue = config.credentials;
    this._orgAccountMappings.internalValue = config.orgAccountMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationAwsCtCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationAwsCtCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // org_account_mappings - computed: false, optional: true, required: false
  private _orgAccountMappings = new IntegrationAwsCtOrgAccountMappingsOutputReference(this, "org_account_mappings");
  public get orgAccountMappings() {
    return this._orgAccountMappings;
  }
  public putOrgAccountMappings(value: IntegrationAwsCtOrgAccountMappings) {
    this._orgAccountMappings.internalValue = value;
  }
  public resetOrgAccountMappings() {
    this._orgAccountMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgAccountMappingsInput() {
    return this._orgAccountMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      queue_url: cdktf.stringToTerraform(this._queueUrl),
      retries: cdktf.numberToTerraform(this._retries),
      credentials: integrationAwsCtCredentialsToTerraform(this._credentials.internalValue),
      org_account_mappings: integrationAwsCtOrgAccountMappingsToTerraform(this._orgAccountMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      queue_url: {
        value: cdktf.stringToHclTerraform(this._queueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      credentials: {
        value: integrationAwsCtCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationAwsCtCredentialsList",
      },
      org_account_mappings: {
        value: integrationAwsCtOrgAccountMappingsToHclTerraform(this._orgAccountMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationAwsCtOrgAccountMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
