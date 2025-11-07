// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsOrgAgentlessScanningConfig extends cdktf.TerraformMetaArguments {
  /**
  * The aws account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}
  */
  readonly accountId?: string;
  /**
  * The bucket arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * The state of the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scanning aws account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}
  */
  readonly managementAccount?: string;
  /**
  * The list of monitored aws accounts ids or OUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}
  */
  readonly monitoredAccounts: string[];
  /**
  * The integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}
  */
  readonly name: string;
  /**
  * The LQL query text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}
  */
  readonly queryText?: string;
  /**
  * The number of attempts to create the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}
  */
  readonly retries?: number;
  /**
  * Whether to includes scanning for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}
  */
  readonly scanContainers?: boolean | cdktf.IResolvable;
  /**
  * How often in hours the scan will run in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}
  */
  readonly scanFrequency: number;
  /**
  * Whether to includes scanning for host vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}
  */
  readonly scanHostVulnerabilities?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan secondary volumes (true) or only root volumes (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}
  */
  readonly scanMultiVolume?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan stopped instances (true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}
  */
  readonly scanStoppedInstances?: boolean | cdktf.IResolvable;
  /**
  * The scanning aws account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}
  */
  readonly scanningAccount: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}
  */
  readonly credentials?: IntegrationAwsOrgAgentlessScanningCredentials;
  /**
  * org_account_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}
  */
  readonly orgAccountMappings?: IntegrationAwsOrgAgentlessScanningOrgAccountMappings[] | cdktf.IResolvable;
}
export interface IntegrationAwsOrgAgentlessScanningCredentials {
  /**
  * The external id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#external_id IntegrationAwsOrgAgentlessScanning#external_id}
  */
  readonly externalId: string;
  /**
  * The role arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#role_arn IntegrationAwsOrgAgentlessScanning#role_arn}
  */
  readonly roleArn: string;
}

export function integrationAwsOrgAgentlessScanningCredentialsToTerraform(struct?: IntegrationAwsOrgAgentlessScanningCredentialsOutputReference | IntegrationAwsOrgAgentlessScanningCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function integrationAwsOrgAgentlessScanningCredentialsToHclTerraform(struct?: IntegrationAwsOrgAgentlessScanningCredentialsOutputReference | IntegrationAwsOrgAgentlessScanningCredentials): any {
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

export class IntegrationAwsOrgAgentlessScanningCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationAwsOrgAgentlessScanningCredentials | undefined {
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

  public set internalValue(value: IntegrationAwsOrgAgentlessScanningCredentials | undefined) {
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
export interface IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping {
  /**
  * The list of AWS account IDs to map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#aws_accounts IntegrationAwsOrgAgentlessScanning#aws_accounts}
  */
  readonly awsAccounts: string[];
  /**
  * The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#lacework_account IntegrationAwsOrgAgentlessScanning#lacework_account}
  */
  readonly laceworkAccount: string;
}

export function integrationAwsOrgAgentlessScanningOrgAccountMappingsMappingToTerraform(struct?: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsAccounts),
    lacework_account: cdktf.stringToTerraform(struct!.laceworkAccount),
  }
}


export function integrationAwsOrgAgentlessScanningOrgAccountMappingsMappingToHclTerraform(struct?: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping | cdktf.IResolvable): any {
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

export class IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping | cdktf.IResolvable | undefined) {
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

export class IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList extends cdktf.ComplexList {
  public internalValue? : IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping[] | cdktf.IResolvable

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
  public get(index: number): IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference {
    return new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsOrgAgentlessScanningOrgAccountMappings {
  /**
  * The default Lacework account name where any non-mapped AWS account will appear
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#default_lacework_account IntegrationAwsOrgAgentlessScanning#default_lacework_account}
  */
  readonly defaultLaceworkAccount: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#mapping IntegrationAwsOrgAgentlessScanning#mapping}
  */
  readonly mapping: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping[] | cdktf.IResolvable;
}

export function integrationAwsOrgAgentlessScanningOrgAccountMappingsToTerraform(struct?: IntegrationAwsOrgAgentlessScanningOrgAccountMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_lacework_account: cdktf.stringToTerraform(struct!.defaultLaceworkAccount),
    mapping: cdktf.listMapper(integrationAwsOrgAgentlessScanningOrgAccountMappingsMappingToTerraform, true)(struct!.mapping),
  }
}


export function integrationAwsOrgAgentlessScanningOrgAccountMappingsToHclTerraform(struct?: IntegrationAwsOrgAgentlessScanningOrgAccountMappings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(integrationAwsOrgAgentlessScanningOrgAccountMappingsMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationAwsOrgAgentlessScanningOrgAccountMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: IntegrationAwsOrgAgentlessScanningOrgAccountMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultLaceworkAccount = undefined;
      this._mapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _mapping = new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList(this, "mapping", true);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}

export class IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList extends cdktf.ComplexList {
  public internalValue? : IntegrationAwsOrgAgentlessScanningOrgAccountMappings[] | cdktf.IResolvable

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
  public get(index: number): IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference {
    return new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning lacework_integration_aws_org_agentless_scanning}
*/
export class IntegrationAwsOrgAgentlessScanning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_aws_org_agentless_scanning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsOrgAgentlessScanning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsOrgAgentlessScanning to import
  * @param importFromId The id of the existing IntegrationAwsOrgAgentlessScanning that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsOrgAgentlessScanning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_aws_org_agentless_scanning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_org_agentless_scanning lacework_integration_aws_org_agentless_scanning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsOrgAgentlessScanningConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsOrgAgentlessScanningConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_aws_org_agentless_scanning',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._bucketArn = config.bucketArn;
    this._enabled = config.enabled;
    this._id = config.id;
    this._managementAccount = config.managementAccount;
    this._monitoredAccounts = config.monitoredAccounts;
    this._name = config.name;
    this._queryText = config.queryText;
    this._retries = config.retries;
    this._scanContainers = config.scanContainers;
    this._scanFrequency = config.scanFrequency;
    this._scanHostVulnerabilities = config.scanHostVulnerabilities;
    this._scanMultiVolume = config.scanMultiVolume;
    this._scanStoppedInstances = config.scanStoppedInstances;
    this._scanningAccount = config.scanningAccount;
    this._credentials.internalValue = config.credentials;
    this._orgAccountMappings.internalValue = config.orgAccountMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bucket_arn - computed: false, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

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

  // management_account - computed: false, optional: true, required: false
  private _managementAccount?: string; 
  public get managementAccount() {
    return this.getStringAttribute('management_account');
  }
  public set managementAccount(value: string) {
    this._managementAccount = value;
  }
  public resetManagementAccount() {
    this._managementAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAccountInput() {
    return this._managementAccount;
  }

  // monitored_accounts - computed: false, optional: false, required: true
  private _monitoredAccounts?: string[]; 
  public get monitoredAccounts() {
    return this.getListAttribute('monitored_accounts');
  }
  public set monitoredAccounts(value: string[]) {
    this._monitoredAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredAccountsInput() {
    return this._monitoredAccounts;
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

  // query_text - computed: false, optional: true, required: false
  private _queryText?: string; 
  public get queryText() {
    return this.getStringAttribute('query_text');
  }
  public set queryText(value: string) {
    this._queryText = value;
  }
  public resetQueryText() {
    this._queryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTextInput() {
    return this._queryText;
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

  // scan_containers - computed: false, optional: true, required: false
  private _scanContainers?: boolean | cdktf.IResolvable; 
  public get scanContainers() {
    return this.getBooleanAttribute('scan_containers');
  }
  public set scanContainers(value: boolean | cdktf.IResolvable) {
    this._scanContainers = value;
  }
  public resetScanContainers() {
    this._scanContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanContainersInput() {
    return this._scanContainers;
  }

  // scan_frequency - computed: false, optional: false, required: true
  private _scanFrequency?: number; 
  public get scanFrequency() {
    return this.getNumberAttribute('scan_frequency');
  }
  public set scanFrequency(value: number) {
    this._scanFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanFrequencyInput() {
    return this._scanFrequency;
  }

  // scan_host_vulnerabilities - computed: false, optional: true, required: false
  private _scanHostVulnerabilities?: boolean | cdktf.IResolvable; 
  public get scanHostVulnerabilities() {
    return this.getBooleanAttribute('scan_host_vulnerabilities');
  }
  public set scanHostVulnerabilities(value: boolean | cdktf.IResolvable) {
    this._scanHostVulnerabilities = value;
  }
  public resetScanHostVulnerabilities() {
    this._scanHostVulnerabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanHostVulnerabilitiesInput() {
    return this._scanHostVulnerabilities;
  }

  // scan_multi_volume - computed: false, optional: true, required: false
  private _scanMultiVolume?: boolean | cdktf.IResolvable; 
  public get scanMultiVolume() {
    return this.getBooleanAttribute('scan_multi_volume');
  }
  public set scanMultiVolume(value: boolean | cdktf.IResolvable) {
    this._scanMultiVolume = value;
  }
  public resetScanMultiVolume() {
    this._scanMultiVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanMultiVolumeInput() {
    return this._scanMultiVolume;
  }

  // scan_stopped_instances - computed: false, optional: true, required: false
  private _scanStoppedInstances?: boolean | cdktf.IResolvable; 
  public get scanStoppedInstances() {
    return this.getBooleanAttribute('scan_stopped_instances');
  }
  public set scanStoppedInstances(value: boolean | cdktf.IResolvable) {
    this._scanStoppedInstances = value;
  }
  public resetScanStoppedInstances() {
    this._scanStoppedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanStoppedInstancesInput() {
    return this._scanStoppedInstances;
  }

  // scanning_account - computed: false, optional: false, required: true
  private _scanningAccount?: string; 
  public get scanningAccount() {
    return this.getStringAttribute('scanning_account');
  }
  public set scanningAccount(value: string) {
    this._scanningAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanningAccountInput() {
    return this._scanningAccount;
  }

  // server_token - computed: true, optional: false, required: false
  public get serverToken() {
    return this.getStringAttribute('server_token');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new IntegrationAwsOrgAgentlessScanningCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationAwsOrgAgentlessScanningCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // org_account_mappings - computed: false, optional: true, required: false
  private _orgAccountMappings = new IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList(this, "org_account_mappings", false);
  public get orgAccountMappings() {
    return this._orgAccountMappings;
  }
  public putOrgAccountMappings(value: IntegrationAwsOrgAgentlessScanningOrgAccountMappings[] | cdktf.IResolvable) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_arn: cdktf.stringToTerraform(this._bucketArn),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      management_account: cdktf.stringToTerraform(this._managementAccount),
      monitored_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitoredAccounts),
      name: cdktf.stringToTerraform(this._name),
      query_text: cdktf.stringToTerraform(this._queryText),
      retries: cdktf.numberToTerraform(this._retries),
      scan_containers: cdktf.booleanToTerraform(this._scanContainers),
      scan_frequency: cdktf.numberToTerraform(this._scanFrequency),
      scan_host_vulnerabilities: cdktf.booleanToTerraform(this._scanHostVulnerabilities),
      scan_multi_volume: cdktf.booleanToTerraform(this._scanMultiVolume),
      scan_stopped_instances: cdktf.booleanToTerraform(this._scanStoppedInstances),
      scanning_account: cdktf.stringToTerraform(this._scanningAccount),
      credentials: integrationAwsOrgAgentlessScanningCredentialsToTerraform(this._credentials.internalValue),
      org_account_mappings: cdktf.listMapper(integrationAwsOrgAgentlessScanningOrgAccountMappingsToTerraform, true)(this._orgAccountMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_arn: {
        value: cdktf.stringToHclTerraform(this._bucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      management_account: {
        value: cdktf.stringToHclTerraform(this._managementAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitored_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitoredAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_text: {
        value: cdktf.stringToHclTerraform(this._queryText),
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
      scan_containers: {
        value: cdktf.booleanToHclTerraform(this._scanContainers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_frequency: {
        value: cdktf.numberToHclTerraform(this._scanFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_host_vulnerabilities: {
        value: cdktf.booleanToHclTerraform(this._scanHostVulnerabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_multi_volume: {
        value: cdktf.booleanToHclTerraform(this._scanMultiVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_stopped_instances: {
        value: cdktf.booleanToHclTerraform(this._scanStoppedInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scanning_account: {
        value: cdktf.stringToHclTerraform(this._scanningAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: integrationAwsOrgAgentlessScanningCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationAwsOrgAgentlessScanningCredentialsList",
      },
      org_account_mappings: {
        value: cdktf.listMapperHcl(integrationAwsOrgAgentlessScanningOrgAccountMappingsToHclTerraform, true)(this._orgAccountMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
